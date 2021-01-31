export default class Textarea {
    constructor(name) {
        this.name = name;
    }

    render(parent) {
        this.domNode = document.createElement('textarea');
        this.domNode.placeholder = "Enter your text here...";
        this.domNode.name = this.name;
        parent.append(this.domNode);
        return this.domNode;
    }
}
