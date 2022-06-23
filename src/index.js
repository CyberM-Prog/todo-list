import "./index.css"
import * as userInterface from "./user-interface";

(function createContainer() {
    const content = document.createElement("div")
    content.setAttribute("id", "content")

    const body = document.querySelector("body")
    body.appendChild(content)
})();

userInterface.createUserInterface()
