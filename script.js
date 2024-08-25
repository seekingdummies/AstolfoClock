function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";

    // Convert hours from 24-hour format to 12-hour format
    if (h === 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    // Pad single-digit minutes with a leading zero
    m = m < 10 ? "0" + m : m;

    // Format time string
    var time = h + ":" + m + " " + session;

    // Update the text content of the clock element
    var clockElement = document.getElementById("MyClockDisplay");
    if (clockElement) {
        clockElement.innerText = time;
        clockElement.textContent = time; // Ensure compatibility
    } else {
        console.error("Element with ID 'MyClockDisplay' not found.");
    }

    // Update the time every minute
    setTimeout(showTime, 60000);
}

// Initialize the clock when the page loads
window.onload = showTime;
