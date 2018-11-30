(function() {
  var addButton;

  //Select "Add To Do"button and add click event listener
  addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", function() {
    //Create a new <li> tag as to-do and append it
    var addInput,
      toDoList,
      toDoLi,
      toDoCheckbox,
      toDoSpan,
      toDoEdit,
      toDoDelete;

    addInput = document.querySelector(".add-input");
    toDoList = document.querySelector(".to-do-list");

    //Check if the value is valid or not
    if (!addInput.value.trim()) {
      return;
    }

    //Create a new <li> tag and fill it with user input
    toDoLi = document.createElement("li");
    toDoCheckbox = document.createElement("input");
    toDoCheckbox.setAttribute("type", "checkbox");
    toDoSpan = document.createElement("span");
    toDoSpan.textContent = addInput.value.trim();

    //Add an edit button
    toDoEdit = document.createElement("button");
    toDoEdit.textContent = "Edit";
    toDoEdit.setAttribute("class", "edit-button");

    //Add an delete button
    toDoDelete = document.createElement("button");
    toDoDelete.textContent = "Delete";
    toDoDelete.setAttribute("class", "delete-button");

    //Append all tags inside <li> and append <li> to the HTML doc
    toDoLi.appendChild(toDoCheckbox);
    toDoLi.appendChild(toDoSpan);
    toDoLi.appendChild(toDoEdit);
    toDoLi.appendChild(toDoDelete);
    toDoList.appendChild(toDoLi);

    //Clear the value of the input field
    addInput.value = "";

    //Add a click even listener to the edit button
    toDoEdit.addEventListener("click", function() {
      //Show a prompt to edit the to-do and save it
      var newToDo;

      newToDo = prompt("Edit to-do:", toDoSpan.textContent);

      //Check if new to-do is valid or not
      if (!newToDo.trim()) {
        return;
      }

      //Update the display with the new to-do
      toDoSpan.textContent = newToDo.trim();
    });
  });
})();
