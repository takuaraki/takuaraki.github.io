$(document).ready(function(){

// ###########################################
// ############### variables #################
// ###########################################
    
// web socket
    var webSocket = io.connect('http://araken.orz.hm:8080');
    
// audio
    var audio_niramekko = document.getElementById("audio_niramekko");
    
// consoles
	var middle_console = $('div#middle_console');
	var bottom_console = $('div#bottom_console');
	bottom_console.html('<input type="image" id="okBtn" src="OKwood.png" width="200" height="100" >');

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
        webSocket.emit('message', selfid);
	});

// audio event
    audio_niramekko.addEventListener("timeupdate", function(){
        if(audio_niramekko.currentTime > 11.0){
            openFusuma();
        }
    }, false);
    
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
    
    webSocket.on('message', function(data){
        console.log('message: ' + data);
        if(data != selfid){
            aite_clicked = true;
            if(anata_clicked){
                startGame();
            }
        }else if(aite_clicked){
            startGame();
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
        aite_fusumaL.animate({ 
			left: 0,
		}, 300 );
        aite_fusumaR.animate({ 
			left: 160,
		}, 300 );
        
		timer1 = setInterval(function(){
            if(f_aite > 160, counter < time){
                daruma1.rotate(angle);
				daruma2.rotate(angle);
				angle += angle_plus;
				counter +=0.01;
            }else{
                anata_fusumaL.animate({ 
                    left: 0,
                }, 300 );
                anata_fusumaR.animate({ 
                    left: 160,
                }, 300 );
                
                audio_niramekko.play();
                /*okBtn.replaceWith('<input type="image" id="appuppu" src="appuppu.png" width="300" height="100" >');
				$('input#appuppu').click(function(){
                    openFusuma();
				});*/
                
                clearInterval(timer1);
            }
		},10);
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