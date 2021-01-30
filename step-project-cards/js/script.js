// __VISIT______
class Visit {
    constructor(doctor, purpose, desrc, priority, age, fullName) {
        this._title = doctor;
        this._fullName = fullName;
        this._age = age;
        this._priority = priority;
        this._purpose = purpose;
        this._desrc = desrc;
    }

    render(parent) {

    }
}

class VisitCardiologist extends Visit{
    constructor(pressure, bodyMI, prvDiseases) {
        super()
        this.pressure = pressure;
        this.bodyMI = bodyMI;
        this.prvDiseases = prvDiseases;
    }
}

class VisitDentist extends Visit{
    constructor(lastVisit) {
        super()
        this.lastVisit = lastVisit;
    }
}

class VisitTherapist extends Visit{
    constructor(lastVisit) {
        super()
    }
}


// ____FORM COMPONENTS____
class Button {
    constructor(type, textContent, name) {
        this.domNode = document.createElement('button');
        this.domNode.type = (type) ? type : '';
        this.domNode.textContent = textContent;
        this.domNode.name = name;
    }

    render(formParent){
        formParent.append(this.domNode);
    }
}

class Input {
    constructor(type, name) {
        this.domNode = document.createElement('input');
        this.domNode.type = type;
        this.domNode.name = name;
    }

    render(formParent){
        formParent.append(this.domNode);
    }
}

class Select {
    constructor(name, onchange, ...options) {
        this.domNode = document.createElement('select');
        this.options = options;
        this.options.forEach( item => {
            let options = document.createElement('option');
            options.textContent = item;
            this.domNode.append(options);
        })
    }

    render(formParent){
        formParent.append(this.domNode);
    }
}

class Textarea {
    constructor(name) {
        this.domNode = document.createElement('textarea');
        this.domNode.placeholder = "Enter your text here...";
    }

    render(parent) {
        parent.append(this.domNode);
    }
}

class Form{
    constructor(...items) {
        this.domNode = document.createElement('form');
        this.props = items;
        this.btnSubmit = this.props.find(el => el.domNode.name === 'submit');

        this.btnSubmit.domNode.addEventListener('click', e => this.handleClick (e));
    }

    handleClick (e) {
        e.preventDefault();
        // console.log(this.btnSubmit.domNode);
        console.log(this.props);
        console.log(this.props.domNode);

        // let data = {};
        //     data = this.props.map (el => {
        //         return ${el.domNode.name} : ${el.domNode.name.value} ;
        //     })
        // console.log(data);
    }

    render() {
        this.props.forEach( el => {
            el.render(this.domNode);
        })
        document.body.append(this.domNode);
    }

}

const email = new Input('email', 'email');
const passw = new Input('password', 'password');
const btn = new Button('submit', 'submit', 'submit');
let auth = new Form(email, passw, btn);
console.log(auth);
auth.render();



// class Auth {
//     constructor() {
//         this.email = new Input('email', 'email');
//         this.passw = new Input('password', 'password');
//         this.btn = new Button('submit', 'submit', 'submit');
//     }
// }
// let auth2 = new Form(new Auth);
// auth2.render();