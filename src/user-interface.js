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
    newTask.classList.add("task", "newtask")
    newTask.innerHTML = '<i data-feather="plus-circle"></i>Add new task'
    mainContent.appendChild(newTask)

    feather.replace()
}

export function showNewTaskPopup() {
    const popup = document.createElement("form")
    popup.classList.add("popup")
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

export function closeNewTaskPopup() {
    const form = document.querySelector("form")
    form.parentElement.removeChild(form)
}

export function showTask(title, dueDate, priority) {
    const mainContent = document.querySelector(".maincontent")
    const inboxLogo = document.querySelector(".inboxlogo")

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    mainContent.insertBefore(todoDiv, inboxLogo.nextSibling)

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