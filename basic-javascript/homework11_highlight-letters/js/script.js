document.addEventListener('keydown', event => {
   document.querySelectorAll('.btn').forEach(btn => {
       event.key.toLocaleLowerCase() === btn.textContent.toLocaleLowerCase()
       ? btn.classList.add('blue')
       : btn.classList.remove('blue')
    })   
});