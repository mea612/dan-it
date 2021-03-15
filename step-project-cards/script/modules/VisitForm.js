export default class Form{
    constructor({ children, onSubmit, btnCaption, title}) {
        this.children = children;
        this.onSubmit = onSubmit;
        this.btnCaption = btnCaption;
        this.title = title ? title : '';
    }

    render(parent) {
        this.domNode = document.createElement('form');
        this.domNode.addEventListener('submit', e => {
            e.preventDefault();
            this.onSubmit();
        });
        this.children.forEach(child => child.render(this.domNode));
        this.btnSubmit = new Button('submit', `${this.btnCaption}`);
        this.btnSubmit.render(this.domNode);
        parent.append(this.domNode);

        return this.domNode;
    }

}