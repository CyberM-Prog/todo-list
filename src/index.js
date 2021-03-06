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

let projectsArray
if (!localStorage.getItem("data")) {
    projectsArray = []
}
else {projectsArray = JSON.parse(localStorage.getItem("data"))}

userInterface.createUserInterface()
userInterface.createProjectInterface("Inbox")

if (!projectsArray[0]){
    const inbox = projects.projectFactory("Inbox")
    projectsArray.push(inbox)
}

let currentProject = projectsArray[0]


function createNewTask() {
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
            viewTodos()
            deleteTodo()
            populateStorage()
        })
    });
};
createNewTask();

(function createProject() {
    const projectsButton = document.querySelector(".projects")
    projectsButton.addEventListener("click", function() {
        
        const newProjectButton = document.querySelector(".newprojectbutton")
        if (newProjectButton) {
        newProjectButton.addEventListener("click", showProjectPopup)
        }
    })

    function showProjectPopup() {
        userInterface.showNewProjectPopup()

        const addProjectButton = document.querySelector(".addprojectbutton")
        addProjectButton.addEventListener("click", addProject)
    }

    function addProject() {
        const newProject = projects.projectFactory(projecttitle.value)

        projectsArray.push(newProject)

        userInterface.showProject(newProject.title)
        userInterface.closePopup()
        addELToAllProjects()
        populateStorage()
    }
})();


function addELToDropdownButtons() {
    const projectsButtonElements = document.querySelectorAll(".projectsbutton")
    projectsButtonElements.forEach(
        element => element.addEventListener("click", toggleDropdown)
    )
}
addELToDropdownButtons()


function toggleDropdown() {
    const projects = document.querySelector(".projects")
    if (projects.innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right projectsbutton"><polyline points="9 18 15 12 9 6"></polyline></svg><div class="projectsbutton">Projects</div>') {
        userInterface.openDropdown()

        for (let i = 1; i < projectsArray.length; i++) {
            userInterface.showProject(projectsArray[i].title)
        }

        addELToDropdownButtons()
    }
    else {
        userInterface.closeDropdown()
        addELToDropdownButtons()
    }

    addELToAllProjects()
}

function addELToAllProjects() {
    const projectsList = document.querySelectorAll(".projectslist")
    projectsList.forEach(project => {
        project.addEventListener("click", seeEachProject)
    })
}

function seeEachProject() {
    for (let i = 0; i < projectsArray.length; i++) {
        if (this.textContent === projectsArray[i].title) {
            currentProject = projectsArray[i]

            loadProject()
            
            viewTodos()
            deleteTodo()
        }
    }
}

function viewTodos() {
    const todos = document.querySelectorAll(".todo")
    todos.forEach(todo => {
        todo.addEventListener("click", editTodo)
    })
}

function loadProject() {
    userInterface.deleteProjectInterface()
    userInterface.createProjectInterface(currentProject.title)
    createNewTask()

    const todos = currentProject.todos

    for (let i = 0; i < todos.length; i++) {
        userInterface.showTask(todos[i].title, todos[i].dueDate, todos[i].priority)
    }
}

function editTodo() {

    for (let i = 0; i < currentProject.todos.length; i++) {
        if (currentProject.todos[i].title === this.firstChild.textContent) {

            const task = currentProject.todos[i]

            userInterface.showEditTaskPopup(
                task.title, task.description, task.dueDate, task.priority, task.notes
            )

            const editButton = document.querySelector(".edit")
            editButton.addEventListener("click", function() {

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

                task.title = title.value
                task.description = description.value
                task.dueDate = dueDate.value
                task.priority = priority
                task.notes = notes.value

                userInterface.closePopup()
                
                loadProject()

                viewTodos()
                deleteTodo()
                populateStorage()
            })
        }
    }
}

function deleteTodo() {
    const deleteButtons = document.querySelectorAll(".deletebutton")
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.stopPropagation()

            const title = button.previousSibling.previousSibling.textContent

            for (let i = 0; i < currentProject.todos.length; i++) {
                if (currentProject.todos[i].title === title) {
                    currentProject.todos.splice(i, 1)
                    loadProject()
                    populateStorage()
                }
            }                  
        })
    })
}

function populateStorage() {
    localStorage.setItem("data", JSON.stringify(projectsArray))
}

loadProject()