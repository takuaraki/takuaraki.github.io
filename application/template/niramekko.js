// web socket
    var webSocket = io.connect('http://araken.orz.hm:8080');

$(document).ready(function(){

// ###########################################
// ############### variables #################
// ###########################################
    
    
// consoles
	var middle_console = $('div#middle_console');
	var bottom_console = $('div#bottom_console');
	bottom_console.html('<input type="image" id="okBtn" src="OKwood.png" width="150" height="75" >');

// images
	var anata = $('div#anata');
	var aite = $('div#aite');
	var anata_fusuma = $('div#anata_fusuma');
	var anata_fusumaL = $('img#anata_fusumaL'), anata_fusumaR = $('img#anata_fusumaR');
	var aite_fusuma = $('div#aite_fusuma');
	var aite_fusumaL = $('img#aite_fusumaL'), aite_fusumaR = $('img#aite_fusumaR');
	var title = $('img#title');
	var daruma1 = $('img#daruma1'), daruma2 = $('img#daruma2');
    var matsumoto = $('img#matsumoto');
	var yamagiwa = $('img#yamagiwa');

// buttons
	var startBtn = $('input#start');
	var okBtn = $('input#okBtn');

// others
	var time = 2.5;
	var timer1 = null;

	var counter = 0;
	var f_aite = 0;
	
	var daruma_rot = 1;
	var angle = 0;
	var angle_plus = 3.6 * daruma_rot / time ;
    
    var anata_clicked = false;
    var aite_clicked = false;
    
    
// ###########################################
// ################ execute ##################
// ###########################################
    
// click event
	okBtn.click(function(){
        anata_clicked = true;
        webSocket.emit('message', JSON.stringify({
            type: 'id',
            id: selfid
        }));
	});
    
// put components
	setPosition(anata, 115, 0);
	setPosition(aite, 15, 0);

	setPosition(anata_fusuma, 115, 0);
	setPosition(anata_fusumaL,  -160, 0);
	setPosition(anata_fusumaR, 320, 0);
	
	setPosition(aite_fusuma, 15, 0);
	setPosition(aite_fusumaL,  -160, 0);
	setPosition(aite_fusumaR, 320, 0);

	setPosition(title, 200, 0);
	setPosition(daruma1, 75, 0);
	setPosition(daruma2, 645, 0);

	relPosition(middle_console, 0, 75);
    
// init peer.(reffer peer.js)
    initialize();
    
// init web socket
    webSocket.on('connect', function(){
        console.log('connect!');
    });
    
    webSocket.on('message', function(message){
        var data = JSON.parse(message);
        if(data.type == 'id'){
            if(data.id != selfid){
                aite_clicked = true;
                if(anata_clicked){
                    startGame();
                }
            }else if(aite_clicked){
                startGame();
            }
        }else if(data.type == 'effectOn'){
            if(data.id != selfid){
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
                }
            }
            
        }else if(data.type == 'effectOff'){
            if(data.id != selfid){
                if(data.effect == 'reverse'){
                    remoteEffects.reverseRGB = false;
                }else if(data.effect == 'edge'){
                    remoteEffects.edge = false;
                }else if(data.effect == 'gyogan'){
                    remoteEffects.gyogan = false;
                }
            }
        }
    });
    
    
// ###########################################
// ############### functions #################
// ###########################################
	function setPosition(selector, x, y){
		selector.css({ position:'absolute', left:x+'px', top:y+'px' });
	}
	
	function relPosition(selector, x, y){
		selector.css({ position:'relative', left:x+'px', top:y+'px' });
	}
	
	function setColor(selector, x){
		selector.css({ backgroundColor:x });
	}
    
    function startGame(){
        closeFusuma('aite');
        
		timer1 = setInterval(function(){
            if(f_aite > 160, counter < time){ // preparation phase
                daruma1.rotate(angle);
				daruma2.rotate(angle);
				angle += angle_plus;
				counter +=0.01;
            }else{ // appuppu phase
                counter = 0;
                
                closeFusuma('anata');
                
                var audio_niramekko = document.getElementById("audio_niramekko");
                audio_niramekko.addEventListener("timeupdate", function(){
                    if(audio_niramekko.currentTime > 11.0){
                        openFusuma();
                    }
                }, false);
                audio_niramekko.play();
                clearInterval(timer1);
            }
		},10);
    }
    
    function closeFusuma(player){
        if(player == 'anata'){
            anata_fusumaL.animate({ 
                left: 0,
            }, 300 );
            anata_fusumaR.animate({ 
                left: 160,
            }, 300 );
        }else if(player == 'aite'){
            aite_fusumaL.animate({ 
                left: 0,
            }, 300 );
            aite_fusumaR.animate({ 
                left: 160,
            }, 300 );
        }
    }
    
    function openFusuma(){
        anata_fusumaL.animate({ 
            left: -160,
        }, 300 );
        anata_fusumaR.animate({ 
            left: 320,
        }, 300 );
        aite_fusumaL.animate({ 
            left: -160,
        }, 300 );
        aite_fusumaR.animate({ 
            left: 320,
        }, 300 );
    }
});