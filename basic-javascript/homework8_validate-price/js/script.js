// main container
const container = document.createElement('div');
container.classList.add('container');

//inner container for input
const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

const label = document.createElement('label');
label.textContent = 'Price $: ';

const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Enter your price');
input.classList.add('input-field');

// container for text alert
const alertText = document.createElement('p');


// add elements on page

document.body.prepend(container);
container.append(inputContainer);
inputContainer.append(label, input);


// input focus
input.addEventListener('focusin', (event) => {
    event.target.classList.remove('focusout', 'alert');
    event.target.classList.add('focusin');
    event.target.parentElement.classList.remove('alert-bg');
    alertText.remove();
    document.querySelector('.price-container').remove();
});

//input focusout

input.addEventListener('focusout', (event) => {
    event.target.classList.remove('focusin');
    event.target.classList.add('focusout');

    
    if(event.target.value < 0) {
        event.target.classList.add('alert');
        inputContainer.append(alertText);
        alertText.textContent = 'Please enter correct price';
        event.target.parentElement.classList.add('alert-bg');
        
    } else {
        
        if(container.firstChild !== document.querySelector('.price-container')) {
            // container for price output
            container.insertAdjacentHTML('afterbegin', 
            `<div class="price-container">
                <p class="current-price">Current price: ${event.target.value} $ <button type="button" class="button">x</button>
                </p>
            </div>`);
            
            document.querySelector('button').addEventListener('click', () =>{
            container.firstChild.remove();
            input.value = '';
            })
        }
    }

    
});





