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
userInterface.createInboxInterface()