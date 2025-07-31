document.getElementById("addTaskButton").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue) {
        let li = document.createElement("li");
        li.textContent = taskValue;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});
document.getElementById("removeTaskButton").addEventListener("click", function() {
    let taskList = document.getElementById("taskList");
    if (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
});
document.getElementById("clearTasksButton").addEventListener("click", function() {
    document.getElementById("taskList").innerHTML = "";
});
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addTaskButton").click();
    }
});
document.getElementById("taskList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
document.getElementById("taskList").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
document.getElementById("taskList").addEventListener("dblclick", function(event) {
    if (event.target.tagName === "LI") {
        let newTask = prompt("Edit task:", event.target.textContent);
        if (newTask !== null) {
            event.target.textContent = newTask.trim();
        }
    }
});
document.getElementById("taskList").addEventListener("mouseover", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "#f0f0f0";
    }
});
document.getElementById("taskList").addEventListener("mouseout", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "";
    }
});