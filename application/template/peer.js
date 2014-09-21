navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia ;
window.URL = window.URL || window.webkitURL ;

var PEERJS_API_KEY = 'irddn8i4n2s7zaor';
var peer = null;
var selfid = null;
var remoteid = null;
var localStream = null;

function initializePeer(callback) {
	peer = new Peer({key: PEERJS_API_KEY});
	
	peer.on('open', function(id) {
		selfid = id;
		var localID = document.getElementById('localID');
		localID.innerHTML = selfid ;
		callback();
	});
	peer.on('call', function(mediaConnection) {
		mediaConnection.answer(localStream);
		settingMediaConnection(mediaConnection);
	});
	peer.on('close', function() {
		peer.destroy();
	});
	peer.on('error', function(err) {
        remoteid = null;
		console.error(err);
	});
}

function initializeMedia(callback) {
	navigator.getUserMedia(
		{audio: true, video: true},
		function(stream) {
			localStream = stream;
            
            var localVideo = document.createElement('video');
            localVideo.src = URL.createObjectURL(stream);
            localVideo.muted = true;
            localVideo.style.width = "320px";
            localVideo.style.height = "320px";
            localVideo.play();
            
            var localDisplay = document.getElementById('localDisplay');
            renderStart(localVideo, localDisplay, localEffects);

            var audio = document.getElementById('audio_remote');
            startAudioProcess(stream, audio);
            
			callback();
		},
		function(error) {
			console.error(error);
		}
	);
}

function settingMediaConnection(mediaConnection) {
	remoteid = mediaConnection.peer;
	var remoteStream = null;
	var remoteVideo = null;
	mediaConnection.on('stream', function(stream) {
		remoteVideo = document.createElement('video');
		remoteVideo.style.width = "320px";
		remoteVideo.style.height = "320px";
		remoteVideo.src = URL.createObjectURL(stream);
        //remoteVideo.muted = true;
		remoteVideo.play();
        
        var remoteDisplay = document.getElementById('remoteDisplay');
        renderStart(remoteVideo, remoteDisplay, remoteEffects);
        
        // var audio = document.getElementById('audio_remote');
        // startAudioProcess(stream, audio);
	});
	mediaConnection.on('close', function() {
		URL.revokeObjectURL(remoteVideo.src);
	});
	mediaConnection.on('error', function() {
        remoteid = null;
		console.error(err);
	});
}

function initialize() {
	initializePeer(function() {
		initializeMedia(function() {
			var remoteID = document.getElementById('remoteID');
			var call = document.getElementById('call');
			
			call.onclick = function(){
				var id = remoteID.value;
				var mediaConnection = peer.call(id, localStream);
				settingMediaConnection(mediaConnection);
			};
		});
	});
}
//window.addEventListener('load', initialize);