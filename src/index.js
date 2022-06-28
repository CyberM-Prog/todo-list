import "./index.css"
import * as userInterface from "./user-interface";
import * as todos from "./todos"
import * as projects from "./projects"

(function createContainer() {
    const content = document.createElement("div")
    content.setAttribute("id", "content")

    const body = document.querySelector("body")
    body.appendChild(content)
})();

userInterface.createUserInterface()
userInterface.createProjectInterface("Inbox")

const inbox = projects.projectFactory("Inbox")
let currentProject = inbox

const newTaskButton = document.querySelector(".newtask") 

newTaskButton.addEventListener("click", () => {
    userInterface.showNewTaskPopup()

    const addTaskButton = document.querySelector(".submit")
    addTaskButton.addEventListener("click", function() {
        const title = document.querySelector(".title")
        const description = document.querySelector(".description")
        const dueDate = document.querySelector(".duedate")
        const priorityMax = document.querySelector(".radio1")
        const priorityMedium = document.querySelector(".radio2")
        const priorityMin = document.querySelector(".radio3")
        const notes = document.querySelector(".notes")

        let priority

        if (priorityMax.checked) priority = "Maximum"
        if (priorityMedium.checked) priority = "Medium"
        if (priorityMin.checked) priority = "Minimum"

        const newTask = todos.todoFactory(title.value, description.value, dueDate.value, priority, notes.value)
        currentProject.todos.push(newTask)
        userInterface.closePopup()

        let currentTodo = currentProject.todos[currentProject.todos.length - 1]

        userInterface.showTask(currentTodo.title, currentTodo.dueDate, currentTodo.priority)
    })
});

(function createProject() {
    const projectsButton = document.querySelector(".projects")
    projectsButton.addEventListener("click", function() {
        
        const newProjectButton = document.querySelector(".newprojectbutton")
        console.log(newProjectButton)
        newProjectButton.addEventListener("click", showProjectPopup)
    })

    function showProjectPopup() {
        userInterface.showNewProjectPopup()

        const addProjectButton = document.querySelector(".addprojectbutton")
        addProjectButton.addEventListener("click", addProject)
    }

    function addProject() {
        const newProject = projects.projectFactory(projecttitle.value)

        userInterface.showProject(newProject.title)
        userInterface.closePopup()
    }
})()