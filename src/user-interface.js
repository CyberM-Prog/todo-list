import * as feather from "../node_modules/feather-icons/dist/feather"

export function createUserInterface() {
    const sidebar = document.createElement("div")
    sidebar.classList.add("sidebar")
    content.appendChild(sidebar)

    const inbox = document.createElement("div")
    inbox.innerHTML = '<i data-feather="inbox"></i>Inbox'
    sidebar.appendChild(inbox)

    createProjectsDropdown(sidebar)

    const mainContent = document.createElement("div")
    mainContent.classList.add("maincontent")
    content.appendChild(mainContent)

    feather.replace()

}

function createProjectsDropdown(parent) {
    const projects = document.createElement("div")
    projects.innerHTML = '<i data-feather="chevron-right"></i><div>Projects</div>'
    projects.classList.add("projects")
    parent.appendChild(projects)

    projects.addEventListener("click", function() {
        if (projects.innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg><div>Projects</div>') {
            projects.innerHTML = '<i data-feather="chevron-down"></i><div>Projects</div>'
            feather.replace()

            
            const newProject = document.createElement("p")
            newProject.textContent = "Create Project"
            projects.appendChild(newProject)
        }
        else {
            projects.innerHTML = '<i data-feather="chevron-right"></i><div>Projects</div>'
            feather.replace()

            
        }
    })

}

export function createInboxInterface() {
    const mainContent = document.querySelector(".maincontent")

    const inboxLogo = document.createElement("div")
    inboxLogo.classList.add("inboxlogo")
    inboxLogo.textContent = "Inbox"
    mainContent.appendChild(inboxLogo)

    const newTask = document.createElement("div")
    newTask.classList.add("task")
    newTask.innerHTML = '<i data-feather="plus-circle"></i>Add new task'
    mainContent.appendChild(newTask)

    feather.replace()
}