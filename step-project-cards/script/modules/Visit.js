import {Button, Input, Select,Textarea} from "./components.js";
import Form from "./form.js";
import Modal from './modal.js';
import API from "./request.js";
import Login from "./btnLogIn.js";
import LogOut from "./btnLogOut.js";
// import CreateCard from "./btnCreateCard.js";
// import Modal from "./modal.js";

export default class CreateVisit {
    constructor() {
        // Select for visit type
        this.modalContent =  new Select({
            options: ['', 'Dentist', 'Physician', 'Cardiologist'],
            onChange: value => this.switchToVisitForm(value),
            name: 'select',
            labelText: 'Choose your doctor: '
        });

        this.titleText = 'Select visit type:';

        this.modal = new Modal();
    }

    switchToVisitForm(visitType) {
        switch (visitType) {
            case 'Dentist':
                this.titleText = 'Create dentist visit:';
                this.modalContent = new DentistVisit();
                break;
            default:
                this.titleText = 'Create visit:';
                this.modalContent = new Visit();
        }

        this.modalContent.createInputs();
        this.modal.title.innerHTML = '';
        this.modal.body.innerHTML = '';
        this.render();
    }

    close() {
        this.domNode.remove();
        this.modal.closeModal();
    }

    render() {
        this.modal.render(this.titleText, this.modalContent.render());
    }
}

class Visit {
    constructor() {
        this.createInputs();
        this.form = new Form(...this.inputs);
    }

    createInputs() {
        this.fullName = new Input({
            labelText: 'Full Name',
            type: 'text'
        });

        this.inputs = [this.fullName];
    }
    render() {
        return this.form.render();
    }
}

class DentistVisit extends Visit {
    createInputs() {
        super.createInputs();

        this.lastVisit = new Input({
            type: 'date',
            placeholder: 'Last visit date',
            name: 'lastVisit',
            labelText: 'Last visit date: '
        });

        this.inputs = [
            ...this.inputs,
            this.lastVisit
        ];
    }
}
