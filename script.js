(function() {
  var addButton;

  //Select "Add To Do"button and add click event listener
  addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", function() {
    //Create a new <li> tag as to-do and append it
    var addInput;

    addInput = document.querySelector(".add-input");

    //Check if the value is valid or not
    if (!addInput.value.trim()) {
      return;
    }

    console.log(addInput.value);
  });
})();
