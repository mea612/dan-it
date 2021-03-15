export default class Modal{
    constructor(title) {
        this.modal = this.createModal();
        this.title = this.modal.querySelector('#modalTile');
        this.body = this.modal.querySelector('#modalBody');

        this.modal.addEventListener('click', e => {
            this.handleClickM(e);
        });
    }

    handleClickM(e) {
        e.preventDefault();
        if(e.target.dataset.close){
            this.closeModal();
        }
    }

    createModal(){
        const modal = document.createElement('div');
        modal.classList.add('new-modal');
        modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" id="modalWindow">
                <div class="modal-header">
                    <span class="modal-title" id="modalTile"></span>
                    <span class="modal-close" data-close="true">&times;</span>
                </div>
                <div class="modal-body" id="modalBody"></div>
                <div class="modal-footer" id="modalFooter"></div>
            </div>
        </div>`);
        return modal;
    }

    openModal() {
        setTimeout(() => {
            this.modal.classList.add('open');
        }, 100);
    }

    closeModal() {
        this.modal.classList.remove('open');
        this.modal.classList.add('hiding');
        setTimeout(() => {
            this.modal.classList.remove('hiding');
            this.modal.remove();
        }, 1000);
    }

    render(title, form){
        this.title.append(title);
        this.body.append(form);
        document.body.append(this.modal);
        this.openModal();
    }


    //ДОбавила отдельный метод для генерации заявки

    renderVisit(title, form) {
        this.title.append(title);
        this.body.append(form);
        document.getElementById('desk').append(this.modal);
        this.openModal();
    }
}