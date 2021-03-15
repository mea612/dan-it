import {Button} from "./components.js";
import Login from "./btnLogIn.js";

export default class LogOut {
    constructor(parentSelector) {
        this.parent = document.querySelector(`#${parentSelector}`);
        this.btnLogOut = new Button('btnLogOut', '', 'Log Out');
        this.btnLogOut.domNode.addEventListener('click', e => this.handleClick(e));
        this.btnLogOut.render(this.parent);
    }

    handleClick(e) {
        e.preventDefault();
        while (this.parent.firstChild) {
            this.parent.removeChild(this.parent.firstChild);
        }
        let logIn = new Login('headerBtnsContainer');
    }
}