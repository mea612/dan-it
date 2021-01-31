export default class Input {
    constructor(type) {
        this.type = type;
    }

    render(formParent){
        this.domNode = document.createElement('input');
        this.domNode.type = this.type;
        formParent.append(this.domNode);
        return this.domNode;
    }

    getValue() {
        return this.domNode.value;
    }
}