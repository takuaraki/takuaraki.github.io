var webSocket = io.connect('http://araken.orz.hm:8080');

// init web socket
function initializeWebSocket(){
    webSocket.on('connect', function(){
        console.log('connect!');
    });
    
    webSocket.on('message', function(message){
        var data = JSON.parse(message);
        if(data.type == 'id'){
            if(data.id == remoteid){
                aite_clicked = true;
                if(anata_clicked){
                    startGame();
                }
            }else if(aite_clicked){
                startGame();
            }
        }else if(data.type == 'effectOn'){
            if(data.id == remoteid){
                if(data.effect == 'reverse'){
                    remoteEffects.reverseRGB = true;
                    remoteEffects.edge = false;
                    remoteEffects.gyogan = false;
                }else if(data.effect == 'edge'){
                    remoteEffects.reverseRGB = false;
                    remoteEffects.edge = true;
                    remoteEffects.gyogan = false;
                }else if(data.effect == 'gyogan'){
                    remoteEffects.reverseRGB = false;
                    remoteEffects.edge = false;
                    remoteEffects.gyogan = true;
                }else if(data.effect == 'slim'){
                    remoteEffects.slim = true;
                }else if(data.effect == 'mirror'){
                    remoteEffects.mirror = true;
                }
            }
        }else if(data.type == 'effectOff'){
            if(data.id == remoteid){
                if(data.effect == 'reverse'){
                    remoteEffects.reverseRGB = false;
                }else if(data.effect == 'edge'){
                    remoteEffects.edge = false;
                }else if(data.effect == 'gyogan'){
                    remoteEffects.gyogan = false;
                }else if(data.effect == 'slim'){
                    remoteEffects.slim = false;
                }else if(data.effect == 'mirror'){
                    remoteEffects.mirror = false;
                }
            }
        }
    });
}