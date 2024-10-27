window.onload = function() {
  setTimeout(function() {
    const userResponse = confirm("Please sign up to get the most out of our site!");

    if (userResponse) {
      window.location.href = "signup.html";
    }
  }, 10000);
}

// Initialize the booking status from localStorage (default to false if not found)
let isBooked = localStorage.getItem('isBooked') === 'true';

// Function to handle booking logic
function handleBooking() {
  if (isBooked) {
    alert("You have already booked. Wait for the confirmation.");
  } else {
    isBooked = true; // Mark the booking as done
    localStorage.setItem('isBooked', 'true'); // Save to localStorage
    window.location.href = "booknow.html"; // Redirect to booking page
  }
}

// Add event listeners to both buttons
document.getElementById('booknow').addEventListener('click', handleBooking);
document.getElementById('book-btn').addEventListener('click', handleBooking);


    document.getElementById('send-btn').addEventListener('click', function() {
      alert("Thank You for your response! 😊")
    })