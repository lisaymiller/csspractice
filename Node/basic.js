var Moment = require('moment');

var i=0;

var myfunc = setInterval(function(){
	var time = new Moment(); 

    i = i + 1;
    console.log(time.format('h:mm:ss a')); 

    if(i==5) {
        clearInterval(myfunc);
    }

}, 3000);