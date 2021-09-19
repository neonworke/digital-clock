function displayTime() {
    let currentDate = new Date();
    const currentTime = document.querySelector("#current-time");    
    currentTime.innerText = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });
}

function displayDate() {
        currentDate = new Date();
        const output = document.querySelector("#current-date");
         let month = currentDate.getMonth() + 1;
         let year = currentDate.getFullYear();
         let date = currentDate.getDate();
         
         let current_date = `${date}-${month}-${year}`;
         output.innerText = current_date;
}

let currdate = setInterval(displayDate)

let timer = setInterval(displayTime, 1000);
function stopClock(){
    clearInterval(timer);
}

function startClock() {
    timer = setInterval(displayTime, 1000);
}

