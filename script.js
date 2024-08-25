function showTime() {
    var options = { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', hour12: false };
    var formatter = new Intl.DateTimeFormat([], options);
    var parts = formatter.formatToParts(new Date());
    
    var time = parts[0].value + ":" + parts[2].value;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 60000); // Update every minute (60000 milliseconds)
}

showTime();
