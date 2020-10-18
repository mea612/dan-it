let name = prompt("Enter your name, please");
let age = +prompt("Enter your age, please");

while(!name || !isNaN(name) || isNaN(age)) {
    name = prompt("Enter your name again, please", name);
    age = +prompt("Enter your age again, please", age);
}

if(age < 18) {
    alert("You are not allowed to visit this website.");
} else if(age <= 22) {
    if(confirm("Are you sure you want to continue?")) {
        alert(`Welcome, ${name}`); 
    } else {
        alert("You are not allowed to visit this website"); 
    }  
} else {
    alert(`Welcome, ${name}`);
}




// switch (true) {
//     case age < 18: 
//         alert("You are not allowed to visit this website.");
//         break;
//     case age <= 22: 
//         if(confirm("Are you sure you want to continue?")) {
//             alert(`Welcome, ${name}`); 
//         } else {
//             alert("You are not allowed to visit this website"); 
//         }     
//         break;
//     default: 
//         alert(`Welcome, ${name}`);
// }