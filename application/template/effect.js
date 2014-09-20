var localEffects = [];
localEffects.contrast = false;
localEffects.reverseRGB = false;
localEffects.edge = false;

var remoteEffects = [];
remoteEffects.contrast = false;
remoteEffects.reverseRGB = false;
remoteEffects.edge = false;

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
        }else{
            dest = src;
        }
        
		displayContext.putImageData(dest, 0, 0);
	};
	render();
}