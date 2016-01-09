$(document).ready(function(){

// ###########################################
// ############### variables #################
// ###########################################
    
// buttons
    var efBtnReverse = $('input#efBtnReverse');
    var efBtnEdge = $('input#efBtnEdge');
    var efBtnGyogan = $('input#efBtnGyogan');
    var efBtnSlim = $('input#efBtnSlim');
    var efBtnMirror = $('input#efBtnMirror');
    
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
    
    efBtnSlim.click(function(){
        if(!localEffects.slim){
			OnButton('slim');
		}else{
            OffButton('slim');
		}
    });
    
    efBtnMirror.click(function(){
        if(!localEffects.mirror){
			OnButton('mirror');
		}else{
            OffButton('mirror');
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
        }else if(effect == 'edge'){
            efBtnEdge.attr("src", "effectButtonEdgeOn.png");
            localEffects.edge = true;
            OffButton('reverse');
            OffButton('gyogan');
        }else if(effect == 'gyogan'){
            efBtnGyogan.attr("src", "effectButtonGyoganOn.png");
            localEffects.gyogan = true;
            OffButton('reverse');
            OffButton('edge');
            OffButton('slim');
        }else if(effect == 'slim'){
            efBtnSlim.attr("src", "effectButtonSlimOn.png");
            localEffects.slim = true;
            OffButton('gyogan');
        }else if(effect == 'mirror'){
            efBtnMirror.attr("src", "effectButtonMirrorOn.png");
            localEffects.mirror = true;
        }
        
        webSocket.emit('message', JSON.stringify({
            type: 'effectOn',
            id: selfid,
            effect: effect
        }));
    }
    
    function OffButton(effect){
        if(effect == 'reverse'){
            efBtnReverse.attr("src", "effectButtonReverseOff.png");
            localEffects.reverseRGB = false;
        }else if(effect == 'edge'){
            efBtnEdge.attr("src", "effectButtonEdgeOff.png");
            localEffects.edge = false;
        }else if(effect == 'gyogan'){
            efBtnGyogan.attr("src", "effectButtonGyoganOff.png");
            localEffects.gyogan = false;
        }else if(effect == 'slim'){
            efBtnSlim.attr("src", "effectButtonSlimOff.png");
            localEffects.slim = false;
        }else if(effect == 'mirror'){
            efBtnMirror.attr("src", "effectButtonMirrorOff.png");
            localEffects.mirror = false;
        }
        
        webSocket.emit('message', JSON.stringify({
            type: 'effectOff',
            id: selfid,
            effect: effect
        }));
    }
    
    
});