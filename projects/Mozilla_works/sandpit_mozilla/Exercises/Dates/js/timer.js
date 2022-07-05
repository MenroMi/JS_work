const futureDate = "2023-07-05";

function diffTimeCalculate(endtime) {
    const t = Date.parse(endtime) - Date.now(),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds = Math.floor(((t / 1000) % 60));
    
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };  
}

function addZero(timer) {
    return (timer < 10) ? `0${timer}` : timer;
}


function setdiffTime(endtime) {
 
    const timer = document.querySelector('.until'),
          days = timer.querySelector('.until__numeric--days'),
          hours = timer.querySelector('.until__numeric--hours'),
          minutes = timer.querySelector('.until__numeric--minutes'),
          seconds = timer.querySelector('.until__numeric--seconds'),          
          intervalTime = setInterval(update, 1000);

    update();

    function update() {

        const t = diffTimeCalculate(endtime);

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(intervalTime);
        }
    }

}

setdiffTime(futureDate);