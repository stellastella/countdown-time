// our count down ending time
var countEndTime = new Date('December 10, 2020 12:59:59').getTime();


var startCount = setInterval(function() {

    var today = new Date().getTime();
    var timeCapture = countEndTime - today;

    // capture the days, time, mins and secs

    var days = Math.floor(timeCapture / (1000 * 60 * 60 * 24));
    var hour = Math.floor((timeCapture % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeCapture % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeCapture % (1000 * 60)) / 1000);

    // result to display
        document.getElementById("days").innerHTML= days + "days "
        document.getElementById("hour").innerHTML= hour + "hrs "
        document.getElementById("mins").innerHTML= mins + "mins "
        document.getElementById("secs").innerHTML= secs + "secs "

    if (timeCapture < 0){
        clearInterval(startCount);
        document.getElementById("days").innerHTML= ""
        document.getElementById("hour").innerHTML= ""
        document.getElementById("mins").innerHTML= ""
        document.getElementById("secs").innerHTML= ""
        document.getElementById("endmssg").innerHTML= "This has Ended";
    }

}, 1000);