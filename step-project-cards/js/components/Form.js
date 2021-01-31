export default class Form{
    constructor({ children, onSubmit }) {
        this.children = children;
        this.onSubmit = onSubmit;
    }

    render(parent) {
        this.domNode = document.createElement('form');

        this.domNode.addEventListener('submit', e => {
            e.preventDefault();
            this.onSubmit();
        });

        this.children.forEach(child => child.render(this.domNode));

        parent.append(this.domNode);
    }

}