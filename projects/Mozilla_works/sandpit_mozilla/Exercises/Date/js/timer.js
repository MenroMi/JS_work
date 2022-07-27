const futureDate = "2022-07-29T23:59:59.000Z",
      addMonth = new Date().getMonth(),
      addDay = new Date().getDate();

function diffTimeCalculate(endtime, month, dayweek) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.now();
    
    if ( t <= 0 ) {
        days = 0; 
        hours = 0;
        minutes = 0; 
        seconds = 0;
    } else {
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / (1000 * 60) % 60)),
        seconds = Math.floor(((t / 1000) % 60));
    }


    return {
        "total": t, // dla sprawdzenia czy wyzerował się timer
        "months": month,
        "dayOfWeek": dayweek,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };  
}

function addZero(timer) {
    return (timer < 10) ? `0${timer}` : timer;
}


function setdiffTime(selector, endtime, month, day) {
 
    const timer = document.querySelector(selector),
          months = timer.querySelector('.until__event--month'),
          dayOfWeek = timer.querySelector('.until__event--day'),
          days = timer.querySelector('.until__numeric--days'),
          hours = timer.querySelector('.until__numeric--hours'),
          minutes = timer.querySelector('.until__numeric--minutes'),
          seconds = timer.querySelector('.until__numeric--seconds'),          
          intervalTime = setInterval(update, 1000); // żeby startował setinterval trzeba przekazać
          // link na funkcję - nie wywołować

    update();

    function update() {

        const t = diffTimeCalculate(endtime, month, day),
              arrMonths = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.' ];
        
        
        months.innerHTML = arrMonths[t.months];
        dayOfWeek.innerHTML = addZero(t.dayOfWeek);
        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(intervalTime);
        }
    }

}

setdiffTime('.until', futureDate, addMonth, addDay);