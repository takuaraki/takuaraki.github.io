var bufferSize = 1024;
	
function onAudioProcess(evt) {
	var input = evt.inputBuffer.getChannelData(0);
    var output = evt.outputBuffer.getChannelData(0);
    var bufferData = new Float32Array(bufferSize);
    for (var i = 0; i < bufferSize; i++) {
        bufferData[i] = (input[(i * 2) % bufferSize] + input[(i * 2 + 1) % bufferSize]) / 2;	
    }
    output.set(bufferData);
}

function startAudioProcess(stream, audio){
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();
    var mediastreamsource = audioContext.createMediaStreamSource(stream);
	var scriptProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);
    var mediastreamdestination = audioContext.createMediaStreamDestination();
    scriptProcessor.addEventListener('audioprocess', onAudioProcess);
    mediastreamsource.connect(scriptProcessor);
    scriptProcessor.connect(mediastreamdestination);
    audio.src = window.URL.createObjectURL(mediastreamdestination.stream);
}