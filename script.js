// Import necessary functions from other files
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

// Select the "Add" button and the task list
const btn = document.querySelector("[data-form-btn]");
const list = document.querySelector("[data-list]");

// Add a "click" event listener to the "Add" button
btn.addEventListener("click", create);

// Function to create a new task
function create(event) {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value.trim();
    input.value = '';

    // Check if the value is empty and return if so
    if (value === '') {
        return;
    }

    // Create a task element and append it to the list
    const task = createTask(value);
    list.appendChild(task);

    // Save tasks to localStorage
    saveTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
    // Get all task elements, extract their text, and save as JSON string
    const tasks = Array.from(list.querySelectorAll(".task")).map(task => task.innerText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to create a task element with content
function createTask(taskValue) {
    const task = document.createElement("li");
    task.classList.add("card");

    // Create task content (complete icon, title, and delete button)
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task");
    taskTitle.innerText = taskValue;
    taskContent.appendChild(taskTitle);
    taskContent.appendChild(deleteIcon());

    // Append content to task element and attach delete event
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    attachDeleteEvent(task);

    return task;
}

// Function to attach delete event to a task
function attachDeleteEvent(task) {
    const deleteButton = task.querySelector(".trashIcon");
    deleteButton.addEventListener("click", () => handleDeleteClick(task));
}

// Function to handle delete click event
function handleDeleteClick(taskElement) {
    const taskValue = taskElement.querySelector(".task").innerText;

    // Delete task from localStorage and remove from DOM
    deleteTask(taskValue);
    taskElement.remove();

    // Save updated tasks to localStorage
    saveTasks();
}

// Function to delete a task from localStorage
function deleteTask(taskValue) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task !== taskValue);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Function to load tasks from localStorage on page load
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create task elements and append them to the list
    tasks.forEach(taskValue => {
        const task = createTask(taskValue);
        list.appendChild(task);
    });
}

// Load tasks from localStorage and attach delete events on page load
window.addEventListener("load", () => {
    loadTasks();
    attachDeleteEvents();
});

// Function to attach delete events to existing tasks
function attachDeleteEvents() {
    const deleteButtons = document.querySelectorAll(".trashIcon");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => handleDeleteClick(button.closest(".card")));
    });
}

