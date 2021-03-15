import {Button, Input, Select,Textarea} from "./components.js";
import Form from "./form.js";
import API from "./request.js";
import Login from "./btnLogIn.js";
import LogOut from "./btnLogOut.js";
// import CreateCard from "./btnCreateCard.js";
import Modal from "./modal.js";
import Visit from "./Visit.js";

export default class Authorisation extends Form{
    constructor(btnLogin) {
    const
    emailInput = {
        type: 'email',
        name: 'email',
        required: true,
        className: 'form-control',
        placeholder: 'Enter email',
        labelText: 'Email'
        },
    passwInput = {
        type: 'password',
        name: 'password',
        required: true,
        className: 'form-control',
        placeholder: 'Enter password',
        labelText: 'Password'
        },
    submitInput = {
        type: 'submit',
        name: 'submit',
        value: 'submit'
        };

    const
    email = new Input(emailInput),
    psw = new Input(passwInput),
    btnSubmitLogIn = new Input(submitInput);

    super(email, psw, btnSubmitLogIn);

        this.btnLogin = btnLogin;
        this.email = email;
        this.psw = psw;
        this.btnSubmit = btnSubmitLogIn;

        this.title = 'Authorisation';

        this.token = '';

        this.modal = new Modal();

        this.btnSubmit.domNode.addEventListener('click', e => {
            this.handleClickF(e);
            this.handleClick(e);
        });
    }

    handleClick(e){
        e.preventDefault();
        if(this.dataFromForm.email === 'supermanager@cards.com' && this.dataFromForm.password === '99999') {
            if (!localStorage.getItem('token')) {
                this.getToken();
            }

            this.getCards();

            this.btnLogin.domNode.remove();
            this.close();

            // временно >> нужно создать классы
            let btnLogOut = new LogOut('headerBtnsContainer');
            // let btnCreateCard = new CreateCard('headerBtnsContainer');

            let btnCreateCard = new Button('btnCreateCard', '', 'Create Card');
            btnCreateCard.domNode.addEventListener('click', () => {
                const visit = new Visit();
                visit.render();
            });
            document.querySelector(`#headerBtnsContainer`).append(btnCreateCard.domNode);

        } else {
            alert('Wrong EMAIL or PASSWORD');
            console.log('wrong email or wrong password');
        }
    }

    async getToken() {
        const token = await API.authorisation({
            email: 'supermanager@cards.com',
            password: "99999"
        }).then(r => r.text());

        localStorage.setItem('token', token);
        this.token = localStorage.getItem('token');
        console.log("TOKEN for 'supermanager@cards.com' is: ", this.token);
    }

    async getCards(){
        const cards = await API.getCards();

        // подключить вывод карточек на экран
        console.log("CARDS for 'supermanager@cards.com:' ", cards);
    }

    close() {
        this.domNode.remove();
        this.modal.closeModal();
    }

    render() {
        this.modal.render(this.title, super.render());
    }
}

