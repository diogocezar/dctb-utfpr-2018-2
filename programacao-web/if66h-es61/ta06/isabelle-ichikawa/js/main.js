$(document).ready(function(){
		for(i = 2; i <=10; i++){
			$("#tab2").append("<tr><td><label>2 x "+i+": </label></td><td align='left'><label>"+i * 2+"</label></td></tr>");
			$("#tab3").append("<tr><td><label>3 x "+i+": </label></td><td align='left'><label>"+i * 3+"</label></td></tr>");
		}
});