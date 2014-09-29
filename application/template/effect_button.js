$(document).ready(function(){

// ###########################################
// ############### variables #################
// ###########################################
    
// buttons
    var efBtnReverse = $('input#efBtnReverse');
    var efBtnEdge = $('input#efBtnEdge');
    var efBtnGyogan = $('input#efBtnGyogan');
    
// ###########################################
// ################ execute ##################
// ###########################################
    
	
// click event
	efBtnReverse.click(function(){
		if(!localEffects.reverseRGB){
			OnButton('reverse');
		}else{
            OffButton('reverse');
		}
	});
    
    efBtnEdge.click(function(){
		if(!localEffects.edge){
			OnButton('edge');
		}else{
            OffButton('edge');
		}
	});
    
    efBtnGyogan.click(function(){
		if(!localEffects.gyogan){
			OnButton('gyogan');
		}else{
            OffButton('gyogan');
		}
	});
    
    
// ###########################################
// ############### functions #################
// ###########################################
    function OnButton(effect){
        if(effect == 'reverse'){
            efBtnReverse.attr("src", "effectButtonReverseOn.png");
            localEffects.reverseRGB = true;
            OffButton('edge');
            OffButton('gyogan');
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOn',
                id: selfid,
                effect: 'reverse'
            }));
        }else if(effect == 'edge'){
            efBtnEdge.attr("src", "effectButtonEdgeOn.png");
            localEffects.edge = true;
            OffButton('reverse');
            OffButton('gyogan');
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOn',
                id: selfid,
                effect: 'edge'
            }));
        }else if(effect == 'gyogan'){
            efBtnGyogan.attr("src", "effectButtonGyoganOn.png");
            localEffects.gyogan = true;
            OffButton('reverse');
            OffButton('edge');
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOn',
                id: selfid,
                effect: 'gyogan'
            }));
        }
    }
    
    function OffButton(effect){
        if(effect == 'reverse'){
            efBtnReverse.attr("src", "effectButtonReverseOff.png");
            localEffects.reverseRGB = false;
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOff',
                id: selfid,
                effect: 'reverse'
            }));
        }else if(effect == 'edge'){
            efBtnEdge.attr("src", "effectButtonEdgeOff.png");
            localEffects.edge = false;
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOff',
                id: selfid,
                effect: 'edge'
            }));
        }else if(effect == 'gyogan'){
            efBtnGyogan.attr("src", "effectButtonGyoganOff.png");
            localEffects.gyogan = false;
            
            webSocket.emit('message', JSON.stringify({
                type: 'effectOff',
                id: selfid,
                effect: 'gyogan'
            }));
        }
    }
    
    
});