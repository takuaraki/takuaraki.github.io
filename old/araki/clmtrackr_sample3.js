navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia ;
window.URL = window.URL || window.webkitURL ;

var localStream = null;
var ctracker = new clm.tracker();
ctracker.init(pModel);

var canvasInput;
var canvasContext;

function initialize() {
    canvasInput = document.getElementById('drawCanvas');
    canvasContext = canvasInput.getContext('2d');
	
	navigator.getUserMedia(
		{audio: true, video: true},
		function(stream) {
			localStream = stream;
			var video = document.getElementById('local');
			video.src = URL.createObjectURL(stream);
			video.play();
			
			
	        ctracker.start(video);
	        
	        positionLoop();
	        //drawLoop();
		},
		function(error) {
			console.error(error);
		}
	);
	
	
}

function positionLoop() {
    requestAnimationFrame(positionLoop);
    var positions = ctracker.getCurrentPosition();
    // positions = [[x_0, y_0], [x_1,y_1], ... ]
    // do something with the positions ...
	
	var video = document.getElementById('local');
	canvasContext.drawImage(video, 0, 0, 400, 300);
	
	var d = positions[14][0] - positions[0][0];
	var width = 145 * d / 66;
	var height = 135 * d / 66;
	var x = positions[1][0] - width/4;
	var y = positions[1][1] - height ;
	
	var hair = document.createElement("img");
	hair.src = "saiya_hair.png";
	canvasContext.drawImage(hair, x, y, width, height);
    //canvasContext.drawImage(hair, 0, 0, width, height);
	
    console.log(positions[0][0]);
}

function drawLoop() {
    requestAnimationFrame(drawLoop);
	var video = document.getElementById('local');
	canvasContext.drawImage(video, 0, 0, 400, 300);
	
	var hair = document.createElement("img");
	hair.src = "saiya_hair.png";
	canvasContext.drawImage(hair, 0, 0, 80, 60);
    //canvasContext.clearRect(0, 0, canvasInput.width, canvasInput.height);
    ctracker.draw(canvasInput);
}

window.addEventListener('load', initialize);