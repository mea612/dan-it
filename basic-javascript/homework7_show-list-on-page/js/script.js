//Simple homework solution

// function createElement(array, parent = document.body) {
//         parent.innerHTML = '<ul>' + array.map(item => `<li>${item}</li>`).join('') + '</ul>';
   
// }


// Optional homework solution

function createString(value) {
    if(typeof value !== 'object' || value === null) {
        return value;
    }
    if(Array.isArray(value)) {
        return `<ul>${value.reduce((string, stringElem) => string.concat(`<li>${createString(stringElem)}</li>`), '')}</ul>`; //use reduce() to return string from array and concat() to create one string with all elements each wrapped in <li>
        
    }
    return createString(Object.entries(value).map(item => `${item[0]}: ${item[1]}`)); // use Object.entries to return array with 2 elements for each object key:value, create string with format key: value;
}

function displayElement(string, parent = document.body) { //display string on page
    parent.innerHTML = string;
}

function setCountdown(element, time) { //create countdown timer
    const seconds = document.createElement('span');
    document.body.prepend(seconds);
    setInterval(() => {
        seconds.textContent = `Remaining time: ${--time}`;
    }, 1000);

    setTimeout(() => {  // remove elements when time value is  0
        document.body.removeChild(element);
        document.body.removeChild(seconds);
        
    }, time * 1000);

}

const value = ['hello', 'world', 'Kiev', [["Borispol", "Irpin"], {name: 'John', surname: 'Doe', gender: 'male'}, 4, 5], 999, {name: 'Mary', children: undefined}];
displayElement(createString(value));
setCountdown(document.querySelector('ul'), 10);



