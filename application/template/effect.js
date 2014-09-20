var localEffects = [];
localEffects.contrast = false;
localEffects.reverseRGB = true;
localEffects.edge = false;
localEffects.gyogan = false;

var remoteEffects = [];
remoteEffects.contrast = false;
remoteEffects.reverseRGB = true;
remoteEffects.edge = false;
remoteEffects.gyogan = false;

var r = 120;
var d = 30;

function renderStart(video, display, effects){
	var buffer = document.createElement('canvas');
	var bufferContext = buffer.getContext('2d');
	var displayContext = display.getContext('2d');
	var render = function() {
		requestAnimationFrame(render);
		var width = 320;
		var height = 320;
		if (width == 0 || height == 0) {return;}
		buffer.width = display.width = width;
		buffer.height = display.height = height;
		bufferContext.drawImage(video, 0, 0, width, height);
		
		var src = bufferContext.getImageData(0, 0, width, height); // 射影元
		var dest = bufferContext.createImageData(buffer.width, buffer.height); // 射影先
		
        if(effects.contrast){
            for (var i = 0; i < dest.data.length; i += 4) {
                for (var c = 0; c < 3; c ++) {
                    if (src.data[i+c] < 128) {
                        dest.data[i+c] = 0;
                    } else {
                        dest.data[i+c] = 255;
                    }
                }
                dest.data[i+3] = 255;
            }
        }else if(effects.reverseRGB){
            for (var i = 0; i < dest.data.length; i += 4) {
                dest.data[i + 0] = 255 - src.data[i + 0]; // Red
                dest.data[i + 1] = 255 - src.data[i + 1]; // Green
                dest.data[i + 2] = 255 - src.data[i + 2]; // Blue
                dest.data[i + 3] = 255;
            }
        }else if(effects.edge){
            for (var y = 1; y < height-1; y += 1) {
                for (var x = 1; x < width-1; x += 1) {
                    for (var c = 0; c < 3; c += 1) {
                        var i = (y*width + x)*4 + c;
                        dest.data[i] = 127 + -src.data[i - width*4 - 4] -   src.data[i - width*4] - src.data[i - width*4 + 4] +
                            -src.data[i - 4]       + 8*src.data[i]       - src.data[i + 4] +
                            -src.data[i + width*4 - 4] -   src.data[i + width*4] - src.data[i + width*4 + 4];
                    }
                    dest.data[(y*width + x)*4 + 3] = 255; // alpha
                }
            }
        }else if(effects.gyogan){
            for (var row = 0; row < height; row++) {
                for (var col = 0; col < width; col++) {
                    var src_x = col - width/2;
                    var src_y = height/2 - row;
                    var l = Math.sqrt(Math.pow(src_x, 2) + Math.pow(src_y, 2));
                    var dest_x = Math.floor(r * src_x * Math.atan(l/d) / l);
                    var dest_y = Math.floor(r * src_y * Math.atan(l/d) / l);
                    var dest_col = width/2 + dest_x;
                    var dest_row = height/2 - dest_y;
				
                    var src_address = (row*width + col)*4;
                    var dest_address = (dest_row*width + dest_col)*4;
				
                    if(dest.data[dest_address + 3] == 0){
                        dest.data[dest_address + 0] = src.data[src_address + 0];
                        dest.data[dest_address + 1] = src.data[src_address + 1];
                        dest.data[dest_address + 2] = src.data[src_address + 2];
                        dest.data[dest_address + 3] = 255;
                    }else{
                        dest.data[dest_address + 0] = Math.floor((dest.data[dest_address + 0] + src.data[src_address + 0])/2);
                        dest.data[dest_address + 1] = Math.floor((dest.data[dest_address + 1] + src.data[src_address + 1])/2);
                        dest.data[dest_address + 2] = Math.floor((dest.data[dest_address + 2] + src.data[src_address + 2])/2);
                    }
                }
            }
		
		
            var range = 2;
            for (var row = range; row < height-range; row += 1) {
                for (var col = range; col < width-range; col += 1) {
                    var address = (row*width + col)*4;
                    if (!inSrcPosition(row, col, width, height)) { 
                        dest.data[address + 3] = 255;
                        continue; 
                    }
				
                    var value = [0, 0, 0];
                    var r_value = 0;
                    var g_value = 0;
                    var b_value = 0;
                    var count = 0;
				
                    if (dest.data[address + 3] != 0) { continue; }
                    
                    var range = 1;
				
                    for (var k = -range; k <= range; k++) {
                        for (var l = -range; l <= range; l++) {
                            if (dest.data[address + width*4*k + 4*l + 3] != 0) {
                                for (var c = 0; c < 3; c++) {
                                    value[c] += dest.data[address + width*4*k + 4*l + c];
                                }
                                count++;
                            }
                        }
                    }
                    
                    for (var c = 0; c < 3; c++) {
                        value[c] /= count;
                        dest.data[address + c] = value[c];
                    }
                    dest.data[address + 3] = 255; // alpha
            }
		}
        }else{
            dest = src;
        }
        
		displayContext.putImageData(dest, 0, 0);
	};
	render();
}

function inSrcPosition(row, col, width, height){
	var dest_x = col - width/2;
	var dest_y = height/2 - row;
	var i = Math.sqrt(Math.pow(dest_x, 2) + Math.pow(dest_y, 2));
	var src_x = d * dest_x * Math.tan(i/r) / i;
	var src_y = d * dest_y * Math.tan(i/r) / i;
	
	if(src_x > -width/2 && src_x < width/2 && src_y > -height/2 && src_y < height/2 ) {
		return true;
	} else {
		return false;
	}
}