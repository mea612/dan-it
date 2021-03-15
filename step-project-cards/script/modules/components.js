// COMPONENTS____________

// _______BUTTON_________
export class Button {
    constructor(name, type, textContent) {
        this.domNode = document.createElement('button');
        this.domNode.name = name;
        this.domNode.type = (type) ? type : '';
        this.domNode.textContent = textContent;
    }
    render(parent){
        parent.append(this.domNode);
    }
}


// _______INPUT__________
export class Input {
    constructor({labelText  = false, ...attr}) {
        this.domNode = document.createElement('input');
        this.domNode.classList.add('my-input');
        this.attr = attr;
        this.labelText = labelText;  // console.log(labelText);
    }

    render(formParent){
        for(let [key, value] of Object.entries(this.attr)) {
            this.domNode[key] = value;
        }
        if(this.labelText){
            const label = document.createElement('label');
            label.classList.add('my-input');
            label.textContent = this.labelText;
            label.append(this.domNode);
            return label;
        }
        return this.domNode;
    }
}


//------------ДОПИСАТЬ>>>>
// _______SELECT_________
export class Select {
    constructor({options, onChange, name, labelText}) {
        this.options = options;
        this.onChange = onChange;
        this.name = name;
        this.labelText = labelText;
    }

    render(){
        this.domNode = document.createElement('select');
        this.domNode.setAttribute('required', 'required');
        this.domNode.name = this.name;
        this.domNode.setAttribute('id', 'select');
        this.domNode.classList.add('form-select');
        this.domNode.addEventListener('change', () => this.onChange(this.domNode.value));

        this.label = document.createElement('label');
        this.label.setAttribute("for", this.domNode.id);
        this.label.textContent = this.labelText;
        this.label.append(this.domNode);
        
        this.options.forEach( item => {
            let options = document.createElement('option');
            options.textContent = item;
            this.domNode.append(options);
        })

        return this.label
    }
}

// _______TEXTAREA_______
export class Textarea {
    constructor(name) {
        this.name = name;
    }

    render() {
        this.domNode = document.createElement('textarea');
        this.domNode.placeholder = this.placeholder;
        this.domNode.name = this.name;
        this.domNode.placeholder = "Short description of visit...";
        return this.domNode;
    }
}

