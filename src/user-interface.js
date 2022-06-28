import * as feather from "../node_modules/feather-icons/dist/feather"

export function createUserInterface() {
    const sidebar = document.createElement("div")
    sidebar.classList.add("sidebar")
    content.appendChild(sidebar)

    const inbox = document.createElement("button")
    inbox.classList.add("sidebarbutton")
    inbox.innerHTML = '<i data-feather="inbox"></i>Inbox'
    sidebar.appendChild(inbox)

    createProjectsDropdown(sidebar)

    const mainContent = document.createElement("div")
    mainContent.classList.add("maincontent")
    content.appendChild(mainContent)

    feather.replace()

}

function createProjectsDropdown(parent) {
    const projects = document.createElement("button")
    projects.innerHTML = '<i data-feather="chevron-right" class="projectsbutton"></i><div class="projectsbutton">Projects</div>'
    projects.classList.add("projects", "sidebarbutton")
    parent.appendChild(projects)
}

export function openDropdown() {
    const projects = document.querySelector(".projects")
    projects.innerHTML = '<i data-feather="chevron-down" class="projectsbutton"></i><div class="projectsbutton">Projects</div>'
    feather.replace()

            
    const newProject = document.createElement("button")
    newProject.classList.add("sidebarbutton", "newprojectbutton")
    newProject.textContent = "Create Project"
    projects.appendChild(newProject)
}

export function closeDropdown() {
    const projects = document.querySelector(".projects")
    projects.innerHTML = '<i data-feather="chevron-right" class="projectsbutton"></i><div class="projectsbutton">Projects</div>'
    feather.replace()
}

export function createProjectInterface(title) {
    const mainContent = document.querySelector(".maincontent")

    const projectLogo = document.createElement("div")
    projectLogo.classList.add("projectlogo")
    projectLogo.textContent = title
    mainContent.appendChild(projectLogo)

    const newTask = document.createElement("div")
    newTask.classList.add("task", "newtask")
    newTask.innerHTML = '<i data-feather="plus-circle"></i><button class="newtaskbutton">Add new task</button>'
    mainContent.appendChild(newTask)

    feather.replace()
}

export function showNewTaskPopup() {
    const popup = document.createElement("div")
    popup.classList.add("popup", "form")
    content.appendChild(popup)

    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Title"
    popup.appendChild(titleLabel)

    const title = document.createElement("input")
    title.classList.add("title")
    titleLabel.appendChild(title)

    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Description"
    popup.appendChild(descriptionLabel)

    const description = document.createElement("textarea")
    description.classList.add("description")
    descriptionLabel.appendChild(description)

    const dueDateLabel = document.createElement("label")
    dueDateLabel.textContent = "Deadline"
    popup.appendChild(dueDateLabel)

    const dueDate = document.createElement("input")
    dueDate.classList.add("duedate")
    dueDate.setAttribute("type", "date")
    dueDateLabel.appendChild(dueDate)

    const priorityLabel = document.createElement("label")
    priorityLabel.classList.add("prioritylabel")
    priorityLabel.textContent = "Priority"
    popup.appendChild(priorityLabel)

    const inputDiv3 = document.createElement("div")

    const priorityMax = document.createElement("input")
    priorityMax.classList.add("radio1")
    priorityMax.setAttribute("type", "radio")
    priorityMax.setAttribute("name", "priority")
    priorityMax.setAttribute("id", "prioritymax")
    inputDiv3.appendChild(priorityMax)

    const priorityMaximumLabel = document.createElement("label")
    priorityMaximumLabel.textContent = "Maximum"
    priorityMaximumLabel.setAttribute("for", "prioritymaximum")
    inputDiv3.appendChild(priorityMaximumLabel)

    priorityLabel.appendChild(inputDiv3)

    const inputDiv2 = document.createElement("div")

    const priorityMedium = document.createElement("input")
    priorityMedium.classList.add("radio2")
    priorityMedium.setAttribute("type", "radio")
    priorityMedium.setAttribute("name", "priority")
    priorityMedium.setAttribute("id", "prioritymedium")
    inputDiv2.appendChild(priorityMedium)

    const priorityMediumLabel = document.createElement("label")
    priorityMediumLabel.textContent = "Medium"
    priorityMediumLabel.setAttribute("for", "prioritymedium")
    inputDiv2.appendChild(priorityMediumLabel)

    priorityLabel.appendChild(inputDiv2)

    const inputDiv1 = document.createElement("div")

    const priorityMin = document.createElement("input")
    priorityMin.classList.add("radio3")
    priorityMin.setAttribute("type", "radio")
    priorityMin.setAttribute("name", "priority")
    priorityMin.setAttribute("id", "prioritymin")
    inputDiv1.appendChild(priorityMin)

    const priorityMinLabel = document.createElement("label")
    priorityMinLabel.textContent = "Minimum"
    priorityMinLabel.setAttribute("for", "prioritymin")
    inputDiv1.appendChild(priorityMinLabel)

    priorityLabel.appendChild(inputDiv1)

    const notesLabel = document.createElement("label")
    notesLabel.textContent = "Notes"
    popup.appendChild(notesLabel)

    const notes = document.createElement("textarea")
    notes.classList.add("notes")
    notesLabel.appendChild(notes)

    const submit = document.createElement("button")
    submit.classList.add("submit")
    submit.textContent = "Add task"
    submit.setAttribute("type", "button")
    popup.appendChild(submit)
}

export function closePopup() {
    const form = document.querySelector(".form")
    form.parentElement.removeChild(form)
}

export function showTask(title, dueDate, priority) {
    const mainContent = document.querySelector(".maincontent")
    const projectLogo = document.querySelector(".projectlogo")

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    mainContent.insertBefore(todoDiv, projectLogo.nextSibling)

    const titleDiv = document.createElement("div")
    titleDiv.textContent = title
    todoDiv.appendChild(titleDiv)

    const dueDateDiv = document.createElement("div")
    dueDateDiv.textContent = "Deadline: " + dueDate
    todoDiv.appendChild(dueDateDiv)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("deletebutton")
    deleteButton.innerHTML = '<i data-feather="trash-2"></i>'
    todoDiv.appendChild(deleteButton)

    feather.replace()
}

export function showNewProjectPopup() {
    const projectPopup = document.createElement("div")
    projectPopup.classList.add("projectpopup", "form")
    content.appendChild(projectPopup)

    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Title"
    projectPopup.appendChild(titleLabel)

    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "projecttitle")
    titleInput.setAttribute("type", "text")
    titleLabel.appendChild(titleInput)

    const submit = document.createElement("button")
    submit.classList.add("submit", "addprojectbutton")
    submit.textContent = "Add project"
    submit.setAttribute("type", "button")
    projectPopup.appendChild(submit)
}

export function showProject(title) {
    const newProjectButton = document.querySelector(".newprojectbutton")
    const projects = document.querySelector(".projects")

    const project = document.createElement("button")
    project.classList.add("sidebarbutton", "projectslist")
    project.textContent = title
    projects.insertBefore(project, newProjectButton)
}