
    function openTab(event) {
        document.querySelector('.tabs-title.active').classList.remove('active');
        event.target.classList.add('active');

        document.querySelector('.tab-pane.active').classList.remove('active');
        document.querySelector(`.tab-pane[data-tab="${event.target.dataset.tab}"]`).classList.add('active');
    }

    document.querySelector('.tabs').addEventListener('click', openTab);

   
