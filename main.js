document.addEventListener("DOMContentLoaded", function() {
    var countElement = document.getElementById("count1");
  
    for (var i = 1; i <= 75; i++) {
      setTimeout(function(num) {
        countElement.innerText ="+"+num;
      }, i * 2, i);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var countElement = document.getElementById("count2");
  
    for (var i = 1; i <=11 ; i++) {
      setTimeout(function(num) {
        countElement.innerText = "+"+num;
      }, i * 2, i);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var countElement = document.getElementById("count3");
  
    for (var i = 1; i <= 6; i++) {
      setTimeout(function(num) {
        countElement.innerText ="+"+ num;
      }, i * 2, i);
    }
  });




document.addEventListener("DOMContentLoaded", function() {
    var countElement = document.getElementById("count4");
  
    for (var i = 1; i <= 900; i++) {
      setTimeout(function(num) {
        countElement.innerText = "+"+num;
      }, i * 2, i);
    }
  });



  // Get the modal element
var modal = document.getElementById("messageModal");

// Get the button that opens the modal
var submitBtn = document.getElementById("submitBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for the submit button click
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Open the modal
  openModal();
});

// Event listener for the close button click
closeBtn.addEventListener("click", function() {
  // Close the modal
  closeModal();
});

// Event listener for clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    // Close the modal
    closeModal();
  }
});