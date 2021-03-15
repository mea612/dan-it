import {Button} from "./components.js";
import Visit from "./Visit.js";


// ДОРАБОТАТЬ
export default class CreateCard {
    constructor(parentSelector) {
        this.parent = document.querySelector(`#${parentSelector}`);
        this.btnLogOut = new Button('btnCreateCard', '', 'Create Card');
        this.btnLogOut.domNode.addEventListener('click', e => this.handleClick(e));
        this.btnLogOut.render(this.parent);
    }

    handleClick(e) {
        e.preventDefault();
        

    }
}
