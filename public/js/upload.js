$(document).ready(function() {
  // Reference to our form and inputs
  var uploadForm = $("#uploadFood");
  var nameOfFood = $("#foodName");
  var foodNotes = $("#foodNotes");
  var resturantNames = $("#resturantName");

  // Submit button event check to make sure both fields are filled
  uploadForm.on("submit", function(event) {
    event.preventDefault();
    //console.log("I am submitting stuffs");
    var userData = {
      foodName: nameOfFood.val().trim(),
      foodNote: foodNotes.val().trim(),
      resturantName: resturantNames.val().trim(),
    };

    if (!userData.foodName || !userData.foodNote || !userData.resturantName) {
      return;
    }
    // If we have food name, notes and resutant filled run the foodUploader function
    foodUploader(userData.foodName, userData.foodNote, userData.resturantName);
    nameOfFood.val("");
    foodNotes.val("");
    resturantNames.val("");
  });
  // function for uploading Entry into Database
  function foodUploader(foodName, foodNote, resturantName) {
    $.post("/api/upload", {
      foodName: foodName,
      foodNote: foodNote,
      resturantName: resturantName,
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
