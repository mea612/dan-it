const student = {
    name: '',
    lastName: '',
};


function getName(userName) {
    let str;
    do {
        str = prompt(`Enter your ${userName}, please`, str)
    } while(!str || !isNaN(str));

    return str;
}

student.name = getName('name');
student.lastName = getName('surname');


function getTabel() {
    const tabel = {};
    while(true) {
        let courseName = prompt("Enter your course");
        if(!courseName) {
            break;
        }
        let courseGrade = +prompt("Enter your grade");
        tabel[courseName] = courseGrade;
    }

    return tabel;

}

student.tabel = getTabel();


function getBadGradesCount() {
    let badGrades = 0;

    for(let grade in student.tabel) {
        if(student.tabel[grade] < 4) {
        badGrades++;
        }
    }
    return badGrades;
}


function getAverageGrade() {
    let averageGrade = 0;
    let courseCounter = 0;
    for(let key in student.tabel) {
        averageGrade += student.tabel[key];
        courseCounter++;

    }

    return averageGrade = averageGrade / courseCounter;
}

function displayMessage(badGrade, averageGrade) {
    if(!badGrade) {
        console.log(`The student is transferred to the next course`);
    }
    if(averageGrade > 7) {
        console.log("Student is assigned a scholarship");
    }
}


console.log(student);
displayMessage(getBadGradesCount(), getAverageGrade());



