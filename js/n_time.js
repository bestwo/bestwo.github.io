//http://luuman.github.io/Home/H1/index.html
//毫秒数转换成日期时间
  var today = new Date(); 
  var oldtime = new Date('2014/5/1 08:00:00');  // 因为 new Date(0)输出的是 以8点开始的，所以我们为了同步替换也改为8，其实是从0点开始
  //alert(today-oldtime);
  var tt = {};
  var cha = today-oldtime;
  var format = function(time, format){ 
    var t = new Date(time); 
    var tf = function(i){return (i < 10 ? '0' : '') + i}; 
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){ 
        switch(a){ 
          case 'yyyy': 
            return tt.yyyy = tf(t.getFullYear()) - 1970;             
            break; 
          case 'MM': 
            return tt.MM = tf(t.getMonth() + 1) - 1;   //当前月减去开始的月份  比如  4月1日 - 1月1日 差 3个月
            break; 
          case 'dd': 
            return tt.dd = tf(t.getDate()); 
            break; 
          case 'HH': 
            return tt.HH = tf(t.getHours()); 
            break; 
          case 'mm': 
            return tt.mm = tf(t.getMinutes()); 
            break;                     
          case 'ss': 
            return tt.ss = tf(t.getSeconds()); 
            break; 
        }; 
    }); 
  }; 

  var a = format(cha,'yyyy-MM-dd-HH-mm-ss');
  //document.write('<br />'+a);
  var t_span = $('.work_time').find('span'),t_p=$('.work_time').find('p');
  //alert(tt.yyyy);

  t_span.html('<i>'+tt.yyyy+'</i>年</i>'+tt.MM+'</i>个月<i>'+tt.dd+'</i>天');
  t_p.html('<span>'+tt.HH+'</span>小时<span>'+tt.mm+'</span>分钟<span>'+tt.ss+'</span>秒');
  var timer = setInterval(function(){
    
      var today = new Date();
      //alert(oldtime);
      var cha = today - oldtime;
      format(cha,'yyyy-MM-dd-HH-mm-ss')
      //console.log(tt.ss);
      t_span.html('<i>'+tt.yyyy+'</i>年<i>'+tt.MM+'</i>个月<i>'+tt.dd+'</i>天');
      t_p.html('<span>'+tt.HH+'</span>：<span>'+tt.mm+'</span>：<span>'+tt.ss+'</span>');

  },1000);