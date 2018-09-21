var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');
 
function Clock() {
    var date = new Date();
    var hour = date.getHours() % 12;//24 hour clock so 
    var m = date.getMinutes();
    var s = date.getSeconds();

    var hour_deg = (hour * 30) + (0.5 * m);//360/12=30  everyhour 30deg--30/60
    console.log(hour_deg);
    var m_deg = (m * 6) + (s * 0.1);//360/60  everyminute 6deg--6/60
    console.log(hour_deg);
    var s_deg = s * 6;//360/60
    console.log(hour_deg);
    /*hour_deg = 'rotate(80deg)';*/
    
    /*hourHand.style.transform='rotate(80deg)';*/
    
    hourHand.style.transform= 'rotate('+hour_deg+'deg) ';
    minuteHand.style.transform= 'rotate('+m_deg+'deg) ' ;
    secondHand.style.transform= 'rotate('+s_deg+'deg) ';
    //alert("rotate (" + hour_deg + "deg)");
    setInterval(Clock, 1000);  
};
Clock();


