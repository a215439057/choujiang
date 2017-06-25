	function ord(){
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
		}
		else{
			tex.innerHTML="恭喜获得"+mali[is-1].innerHTML;
		}	
	}		