const books = [
    { 
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70 
    }, 
    {
     author: "Скотт Бэккер",
     name: "Воин-пророк",
    }, 
    { 
      name: "Тысячекратная мысль",
      price: 70
    }, 
    { 
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
    }, 
    {
     author: "Дарья Донцова",
     name: "Детектив на диете",
     price: 40
    },
    {
     author: "Дарья Донцова",
     name: "Дед Снегур и Морозочка",
    }
  ];

function createBooksList(booksList) {
    let bookList = '';
    booksList.forEach(item => {
        try {
            bookList += `<ul>${createBookEntry(item)}</ul>`;
        } catch(e) {
            console.error(e.message);
        }

    });
    const parent = document.getElementById('root');
    parent.innerHTML = bookList;

}

function createBookEntry(item) {
    let bookItem = '';
    if(item.hasOwnProperty("author")) {
        bookItem += `<li>${item.author}</li>`
    } else {
        throw new Error(`The property "author" is missing in ${JSON.stringify(item)}`);
    }
    if(item.hasOwnProperty("name")) {
        bookItem += `<li>${item.name}</li>`
    } else {
        throw new Error(`The property "name" is missing in ${JSON.stringify(item)}`);
    }
    if(item.hasOwnProperty("price")) {
        bookItem += `<li>${item.price}</li>`
    } else {
        throw new Error(`The property "price" is missing in ${JSON.stringify(item)}`);
    }
    return bookItem;
}

// function createBooksList(booksList) {
//     let bookList = '';
//     for(let i = 0; i < booksList.length; i++) {
        
//         try {
//             const author = getProperty(booksList[i], 'author');
//             const name = getProperty(booksList[i], 'name');
//             const price = getProperty(booksList[i], 'price');

//             bookList += `<ul>${createBookEntry(author, name, price)}</ul>`;

//         } catch(e) {
//             console.error(e.message);
//         }
    
//     }
//     const parent = document.getElementById('root');
//     parent.innerHTML = bookList;
// } 

// function getProperty(obj, prop) {
//     if(obj[prop]) {
//         return obj[prop];
//     } else {
//         throw new Error(`The property ${prop} is not defined in ${JSON.stringify(obj)}`);
//     } 
// }

// const createBookEntry = (author, name, price) =>
//     `<li>${author}</li><li>${name}</li><li>${price}</li>`;

createBooksList(books);
