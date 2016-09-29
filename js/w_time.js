//工作时间

var t = {};
var old_date = new Date("2014/5/1 00:00:00");  //new Date(2014,5,1,00,00,00)
var t1 = old_date.getTime();
//console.log(t1);
var today = new Date();
var t2 = today.getTime();
//console.log(t2);
var cha = parseInt((t2-t1)/1000);
function w_time(sum){	
	t.cha = sum;
	//console.log(t.cha);
	t.YY = parseInt(t.cha/(24*60*60*365));
	//console.log(t.YY+'年');
	t.MM = t.cha%(24*3600*365);
	//console.log(t.MM+'---'+(t2-t1)/1000);
	t.DD = parseInt(t.MM/(24*3600));
	//console.log(t.DD+'天');
	t.HH = t.MM%(24*3600);
	//console.log(t.HH);
	t.hh = parseInt(t.HH/3600);
	//console.log(t.hh+'时');
	t.mm = t.HH%3600;
	//console.log(t.mm);
	t.m = parseInt(t.mm/60);
	//console.log(t.m+'分');
	t.ss = t.mm%60;
	//console.log(t.ss+'秒');


	t.hh = check(t.hh);
	t.m = check(t.m);
	t.ss = check(t.ss);
	
	var t_span = $('.work_time').find('span'),t_p=$('.work_time').find('p');
	t_span.html('<i>'+t.YY+'</i>年<i>'+t.DD+'</i>天');
	t_p.html('<span>'+t.hh+'</span>：<span>'+t.m+'</span>：<span>'+t.ss+'</span>');
  
}


function check(i){
	if(i<10) i = '0' + i;
	return i;
}


w_time(cha);
var timer = setInterval(function(){
	w_time(cha);
	cha++;
},1000);



























