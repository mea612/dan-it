export default class Select {
    constructor({options, onChange}) {
        this.options = options;
        this.onChange = onChange;
    }

    render(formParent){
        this.domNode = document.createElement('select');
        this.options.forEach( item => {
            let options = document.createElement('option');
            options.textContent = item;
            this.domNode.append(options);
        })
        this.domNode.addEventListener('change', () => this.onChange(this.domNode.value))
        formParent.append(this.domNode);
        return this.domNode;
    }
}