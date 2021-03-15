import {Button} from "./components.js";
import Authorisation from "./autorisation.js";

export default class Login {
    constructor(parentSelector) {
        this.btnLogIn = new Button('btnLogIn', '', 'Log In');
        this.parent = document.querySelector(`#${parentSelector}`);
        this.btnLogIn.domNode.addEventListener('click', e => this.handleClick(e));
        this.btnLogIn.render(this.parent);
    }

    handleClick(e) {
        e.preventDefault();
        this.authorisation = new Authorisation(this.btnLogIn);
        this.authorisation.render();
        // console.log("this.authorisation ", this.authorisation);
        return this.authorisation;
    }

    getAuth(){
        if(this.authorisation)
        return this.authorisation;
    }
}

