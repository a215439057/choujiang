	function ord(){
		document.getElementById('button1').disabled=true;
		var order =document.getElementById('order');
		var mali =order.getElementsByTagName('li'); 
		var is =0;
		var ii =0;
		var it =0;
		var chan =mali.length;		
		for (var i = 0; i <chan; i++) {
			mali[i].style.backgroundColor ="#eee";
		}
		var num = (Math.ceil(Math.random()*chan));
		timer =setInterval(function(){
			if (is>chan-1) {
				is=0;
			}			
			fufu(is);
			is=is+1;
		},400);
		timee =setInterval(function(){
			it=it+1;
			if (it == chan*2+num) {
				fcfc(is);
			}	
		},400);
		time =setInterval(function(){
			if (ii>chan-1) {
				ii=0;
			}			
			fafa(ii);
			ii=ii+1;	
		},450);

	}

	function fufu(is){
		var order =document.getElementById('order');
		var mali =order.getElementsByTagName('li'); 
		mali[is].style.backgroundColor ="#3a8fb7";
	}
	function fafa(ii){
		var order =document.getElementById('order');		
		var mali =order.getElementsByTagName('li'); 
		mali[ii].style.backgroundColor ="#eee";
	}	
	function fcfc(is){
		var order =document.getElementById('order');		
		clearInterval(timer);
		clearInterval(time);
		clearInterval(timee);
		var tex =document.getElementById('tex');
		var mali =order.getElementsByTagName('li'); 
		for (var i = 0; i <mali.length; i++) {
			mali[i].style.backgroundColor ="#eee";
		}
		mali[is-1].style.backgroundColor ="#3a8fb7";
		if (mali[is-1].innerHTML=="谢谢惠顾") {
			tex.innerHTML=mali[is-1].innerHTML;
			document.getElementById('button1').disabled=false;	
		}
		else{
			tex.innerHTML="恭喜获得"+mali[is-1].innerHTML;
			document.getElementById('button1').disabled=false;	
		}	
	}		
//第二个//
	function dis(){
		document.getElementById('button2').disabled=true;
		var diso =document.getElementById('disorder');
		var doso =diso.getElementsByTagName('li'); 
		var chbn =doso.length;	
		for (var i = 0; i <chbn; i++) {
				doso[i].style.backgroundColor ="#eee";
			}
		var iq=0;
		var num=0;
		var nem=100;
		or(num,iq,nem);
	}
function or(num,iq,nem){
		var diso =document.getElementById('disorder');
		var doso =diso.getElementsByTagName('li'); 	
		var tec =document.getElementById('tec');
		if (iq!=20) {
			var num = (Math.ceil(Math.random()*doso.length))-1;	
			if (nem==num) {
				or(num,iq,nem);
					}
			else{
				doso[num].style.backgroundColor ="#3a8fb7";
				nem =num;
				tome =setTimeout(function(){
					our(num,iq,nem);	
				},200);
			}		
	
		}
		else{
			doso[num].style.backgroundColor ="#3a8fb7";
			if (doso[num].innerHTML=="谢谢惠顾") {
				tec.innerHTML=doso[num].innerHTML;
			}
			else{
				tec.innerHTML="恭喜获得"+doso[num].innerHTML;
			}
		document.getElementById('button2').disabled=false;	
		}
}	
function our(num,iq,nem){
	var diso =document.getElementById('disorder');
	var doso =diso.getElementsByTagName('li'); 	
	iq++;
	doso[num].style.backgroundColor ="#eee";
	or(num,iq,nem);
}
