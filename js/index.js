function displayTime() {
    let currentDate = new Date();
    const currentTime = document.querySelector("#current-time");    
    currentTime.innerText = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });

    const curr_date = document.querySelector("#current-date");
    const day = `${currentDate.getDate() < 10 ? "0" : ""}${currentDate.getDate()}`;
    const month = `${(currentDate.getMonth() + 1) < 10 ? "0" : ""}${currentDate.getMonth() +1 }`;
    const year = currentDate.getFullYear();

    curr_date.innerText = `${day}/${month}/${year}`;
}


let timer = setInterval(displayTime, 1000);
function stopClock(){
    clearInterval(timer);
}

function startClock() {
    timer = setInterval(displayTime, 1000);
}

