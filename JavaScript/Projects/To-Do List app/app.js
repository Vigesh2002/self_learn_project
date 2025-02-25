document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span>
                    <button class="edit" onclick="editTask(this)">✏️</button>
                    <button class="delete" onclick="deleteTask(this)">❌</button>`;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function editTask(button) {
    let li = button.parentElement;
    let span = li.querySelector("span");
    let newText = prompt("Edit your task:", span.innerText);
    
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText.trim();
        saveTasks();
    }
}

function deleteTask(button) {
    if (confirm("Are you sure you want to delete this task?")) {
        let li = button.parentElement;
        li.remove();
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li span").forEach(span => {
        tasks.push(span.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    
    storedTasks.forEach(taskText => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span>
                        <button class="edit" onclick="editTask(this)">✏️</button>
                        <button class="delete" onclick="deleteTask(this)">❌</button>`;
        taskList.appendChild(li);
    });
}
