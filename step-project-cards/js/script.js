// // __VISIT______
// class Visit {
//     constructor(doctor, purpose, desrc, priority, age, fullName) {
//         this.doctor = doctor;
//         this.fullName = fullName;
//         this.age = age;
//         this.priority = priority;
//         this.purpose = purpose;
//         this.desrc = desrc;
//     }

//     render(parent) {
//         this.domNodeDoctor = new Select
//     }
// }

// class VisitCardiologist extends Visit{
//     constructor(pressure, bodyMI, prvDiseases) {
//         super()
//         this.pressure = pressure;
//         this.bodyMI = bodyMI;
//         this.prvDiseases = prvDiseases;
//     }
// }

// class VisitDentist extends Visit{
//     constructor(doctor, purpose, desrc, priority, age, fullName, lastVisit) {
//         super(doctor, purpose, desrc, priority, age, fullName);
//         this.lastVisit = lastVisit;
//     }
//     render() {
//         super(render);

//     }
// }

// class VisitTherapist extends Visit{
//     constructor(lastVisit) {
//         super()
//     }
// }


// ____FORM COMPONENTS____
// class Button {
//     constructor(type, textContent) {
//         this.type = type;
//         this.textContent = textContent;
//     }

//     render(formParent){
//         this.domNode = document.createElement('button');
//         this.domNode.textContent = this.textContent;
//         formParent.append(this.domNode);
//         return this.domNode
//     }
// }

// class Input {
//     constructor(type) {
//         // this.domNode = document.createElement('input');
//         this.type = type;
//     }

//     render(formParent){
//         this.domNode = document.createElement('input');
//         this.domNode.type = this.type;
//         formParent.append(this.domNode);
//         return this.domNode;
//     }

//     getValue() {
//         return this.domNode.value;
//     }
// }

// class Select {
//     constructor({options, onChange}) {
//         this.options = options;
//         this.onChange = onChange;
//     }

//     render(formParent){
//         this.domNode = document.createElement('select');
//         this.options.forEach( item => {
//             let options = document.createElement('option');
//             options.textContent = item;
//             this.domNode.append(options);
//         })
//         this.domNode.addEventListener('change', () => this.onChange(this.domNode.value))
//         formParent.append(this.domNode);
//         return this.domNode;
//     }

//     getValue() {
//       return this.domNode.value;
//     }
// }

// class Textarea {
//     constructor(name) {
//         this.name = name;
//     }

//     render(parent) {
//         this.domNode = document.createElement('textarea');
//         this.domNode.placeholder = "Enter your text here...";
//         this.domNode.name = this.name;
//         parent.append(this.domNode);
//         return this.domNode;
//     }
// }

// class Form{
//     constructor({ children, onSubmit }) {
//         this.children = children;
//         this.onSubmit = onSubmit;
//     }

//     render(parent) {
//         this.domNode = document.createElement('form');

//         this.domNode.addEventListener('submit', e => {
//             e.preventDefault();
//             this.onSubmit();
//         });

//         this.children.forEach(child => child.render(this.domNode));

//         parent.append(this.domNode);
//     }

// }

// const email = new Input('email', 'email');
// const passw = new Input('password', 'password');
// const btn = new Button('submit', 'submit', 'submit');

class LoginForm {
    constructor() {
        this.email = new Input('email');
        this.passw = new Input('password');
        this.btn = new Button('submit', 'submit');

        this.form = new Form({
            children: [ this.email, this.passw, this.btn ],
            onSubmit: () => this.login()
        });
    }

    login() {
        alert(`${this.email.getValue()}/${this.passw.getValue()}`);
    }

    render(parent) {
        this.form.render(parent);
    }
}





class SelectForm {
    constructor() {
        this.search = new Button('submit', 'search')
        this.select = new Select({ 
            options: ['Doctor','Dentist', 'Cardiologist', 'Therapist'],
            onChange: value => alert(value)
        });
        this.form = new Form({
            children: [this.select, this.submit],
            onSubmit: () => alert(this.select.value)
        })
    }
    render(parent) {
        this.form.render(parent);
    }
}

const appointmentForm = new SelectForm();
appointmentForm.render(document.getElementById('app'));

// const select =  new Select({
//     options: ['normal', 'high', 'urgent'],
//     onChange: value => alert(value)
// });


// select.render(document.getElementById('app'));
// let option = select.onChange();
// console.log(option);
// console.log(auth);
// console.log(document.getElementById('app'));
// const loginForm = new LoginForm();
// loginForm.render(document.getElementById('app'));



// class Auth {
//     constructor() {
//         this.email = new Input('email', 'email');
//         this.passw = new Input('password', 'password');
//         this.btn = new Button('submit', 'submit', 'submit');
//     }
// }
// let auth2 = new Form(new Auth);
// auth2.render();