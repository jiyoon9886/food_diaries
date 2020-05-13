$(document).ready(function() {
  // Reference to our form and inputs
  var uploadForm = $("#uploadFood");
  var nameOfFood = $("#foodName");
  var foodNotes = $("#foodNotes");

  // Submit button event
  uploadForm.on("submit", function(event) {
    event.preventDefault();
    console.log("I am submitting stuffs");
  });
});
