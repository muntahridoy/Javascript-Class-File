// selectors
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const taskForm = document.getElementById("task-form");

// create a task

taskForm.addEventListener("submit", function (e) {
  // console.log(e);
  // console.log("submitting...");
  e.preventDefault(); // prevent form from submitting with reloading / refreshing

  const inputValue = taskInput.value;
  if (inputValue) {
    console.log("working.....");

    const taskDiv = `
    <div class="task-list">
     <input 
     type="text" 
     class="task-input" 
     value="${taskInput.value}"
     readonly="readonly" 
     />
     <div class="button-group">
      <button type="button" class="edit-btn">Edit</button>
      <button type="button" class="delete-btn">Delete</button>
      <button type="button" class="delete-btn">Done</button>
     </div>
    </div>`;

    taskContainer.insertAdjacentHTML("beforebegin", taskDiv);

    // selectors
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const editBtn = document.querySelectorAll(".edit-btn");

    // console.log(deleteBtn);

    // Delete a task
    deleteBtn.forEach(btn => {
      // for each ta aktu buzbo aiman vai ??????????
      btn.addEventListener("click", function (e) {
        // console.log("deleting task....");
        // console.log(e.target.parentElement.parentElement);
        // e.target.remove();
        e.target.parentElement.parentElement.remove();
      });
    });

    // Edit a task

    // console.log(editBtn);
    // editBtn[0].innerHTML = "test";

    editBtn.forEach(btn => {
      // for each ta aktu buzbo aiman vai ????????
      btn.addEventListener("click", function (e) {
        // console.log(e.target.parentNode.parentNode.firstElementChild);
        let task = e.target.parentNode.parentNode.firstElementChild;

        if (e.target.innerText === "Edit") {
          task.removeAttribute("readonly");
          task.focus();
          btn.innerText = "Save";
        } else {
          btn.innerText = "Edit";
          task.setAttribute("readonly", "readonly");
        }
      });
    });
  } else {
    alert("Please insert an value...");
  }
  taskInput.value = "";

  // let task = ;

  // create a new task
});
