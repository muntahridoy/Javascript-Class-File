// selectors
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

// create a task
function createTask() {
  const task = taskInput.value;
  if (task) {
    console.log(task);

    // create a task div

    const taskDiv = document.createElement("div");
    // taskDiv.innerText = "new task div added!";
    taskDiv.classList.add("task-list");
    // taskDiv.classList.add("flex", "border", "bg-gray-400"); // multiple css type approch method

    // create a task input field

    const taskName = document.createElement("input");
    taskName.value = task;
    taskName.classList.add("task-input");

    taskName.setAttribute("readonly", "readonly");

    taskDiv.appendChild(taskName);

    // create a button group
    const taskButtonGroup = document.createElement("div");
    // taskDiv.innerText = "new task div added!";
    taskButtonGroup.classList.add("button-group");
    taskDiv.appendChild(taskButtonGroup);

    // create a edit button
    const editBtn = document.createElement("button");
    // taskDiv.innerText = "new task div added!";
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "Edit";
    taskButtonGroup.appendChild(editBtn);

    // create a delete button
    const deleteBtn = document.createElement("button");
    // taskDiv.innerText = "new task div added!";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    taskButtonGroup.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    taskInput.value = "";

    // delete task

    // deleteBtn.addEventListener("click", function () {
    //  console.log("delete button clicked");
    // });

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
    });

    // edit task
    editBtn.addEventListener("click", function (e) {
      console.log("edit button clicked!");
      console.log(e, e.target);
      if (e.target.innerText === "Edit") { // vaiya akhane === 3 ta dlo keno?
        taskName.removeAttribute("readonly");
        taskName.focus();
        editBtn.innerText = "Update";
      } else {
        editBtn.innerText = "Edit";
        taskName.setAttribute("readonly", "readonly");
      }
    });
  } else {
    alert("Please enter a task");
    return;
  }
}

addTaskBtn.addEventListener("click", createTask);
