$(document).ready(function() {
  // Reference to our form and inputs
  var uploadForm = $("#uploadFood");
  var nameOfFood = $("#foodName");
  var foodNotes = $("#foodNotes");

  // Submit button event check to make sure both fields are filled
  uploadForm.on("submit", function(event) {
    event.preventDefault();
    //console.log("I am submitting stuffs");
    var userData = {
      foodName: nameOfFood.val().trim(),
      foodNote: foodNotes.val().trim(),
    };

    if (!userData.foodName || !userData.foodNote) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    foodUploader(userData.foodName, userData.foodNote);
    nameOfFood.val("");
    foodNotes.val("");
  });
  // function for uploading Entry into Database
  function foodUploader(foodName, foodNote) {
    $.post("/api/upload", {
      foodName: foodName,
      foodNote: foodNote,
    })
      .then(function(data) {
        window.location.replace("/recents");
      })
      // If there's an error, handle it by throwing up an alert
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
