
	function dis(){
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
		}
}	
function our(num,iq,nem){
	var diso =document.getElementById('disorder');
	var doso =diso.getElementsByTagName('li'); 	
	iq++;
	doso[num].style.backgroundColor ="#eee";
	or(num,iq,nem);
}
