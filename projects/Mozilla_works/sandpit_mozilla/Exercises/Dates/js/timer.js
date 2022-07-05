const futureDate = "2023-07-05",
      addMonth = new Date().getMonth(),
      addDay = new Date().getDate();

function diffTimeCalculate(endtime, month, dayweek) {
    const t = Date.parse(endtime) - Date.now(),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds = Math.floor(((t / 1000) % 60));
    
    return {
        "total": t,
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


function setdiffTime(endtime, month, day) {
 
    const timer = document.querySelector('.until'),
          months = timer.querySelector('.until__event--month'),
          dayOfWeek = timer.querySelector('.until__event--day'),
          days = timer.querySelector('.until__numeric--days'),
          hours = timer.querySelector('.until__numeric--hours'),
          minutes = timer.querySelector('.until__numeric--minutes'),
          seconds = timer.querySelector('.until__numeric--seconds'),          
          intervalTime = setInterval(update, 1000);

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

setdiffTime(futureDate, addMonth, addDay);