// //your JS code here. If required.

// Function to update the timer element with the current date and time
function updateTimer() {
    // Get the current date and time
    const now = new Date();

    // Format the date and time to a string
    const dateTimeString = now.toLocaleString();

    // Update the content of the timer element
    document.getElementById('timer').textContent = dateTimeString;
}

// Function to start updating the timer every second
function startTimer() {
    // Initial call to display the timer immediately
    updateTimer();

    // Set interval to update the timer every second
    setInterval(updateTimer, 1000);
}

// Call the function to start updating the timer
startTimer();

// function current_time() {
// 	const timeNow = new Date();

// 	const dateTimeString = timeNow.toLocalString();

// 	document.getElementById('timer').textContet = dateTimeString
// }

// function startTimer() {
// 	current_time();
// 	setInterval(current_time,1000);
// }

// startTimer()