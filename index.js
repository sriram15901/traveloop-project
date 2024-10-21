let isBooked = false;

document.getElementById('booknow').addEventListener('click', function() {
  if (!isBooked) {
  alert("Thank You for choosing us! You're booking is in progress wait we'll call you soon");
  // alert("we'll call you later");
  isBooked = true;
  } else {
    alert("You alredy booked to other")
  }
});

document.getElementById('book-btn').addEventListener('click', function(){
  if(isBooked) {
    alert("You already booked to santorini!");
  } else {
    alert("Thank You for choosing us! You're booking is in progress wait we'll call you soon.");
    isBooked = true;
  }
});