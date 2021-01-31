export default class Button {
    constructor(type, textContent) {
        this.type = type;
        this.textContent = textContent;
    }

    render(formParent){
        this.domNode = document.createElement('button');
        this.domNode.textContent = this.textContent;
        formParent.append(this.domNode);
        return this.domNode
    }
}