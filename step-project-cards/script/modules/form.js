export default class Form {
    constructor(...elements) {
        this.domNode = document.createElement('form');
        this.domNode.classList.add('my-form');

        this.elements = elements;
        console.log("Elements for Form:", this.elements);

        this.dataFromForm = {};
    }

    handleClickF(e) {
        e.preventDefault();
        this.dataFromForm = this.getValue();
        console.log("Got values from Form-elements:",this.dataFromForm);
    }

    getValue() {
        let valueFromElem = {};
        this.elements.map((el)=> {    // console.log(el.domNode.name); // this[el.domNode.name] = el.domNode.value; // console.log (this[el.domNode.name]);
            if (el.domNode.name !== 'submit') {
                if(el.domNode.value !== ''){
                    valueFromElem[el.domNode.name] = el.domNode.value;     // return {[el.domNode.name]: el.domNode.value};
                } else {
                    alert(`Fill the ${el.domNode.name.toUpperCase()} field!`);
                    throw new Error(`fill the ${el.domNode.name} field`);
                }
            }
        });
        return valueFromElem;
    }

    render() {
        this.elements.forEach( el => {
            this.domNode.append(el.render())
        })
        return this.domNode;
    }

}