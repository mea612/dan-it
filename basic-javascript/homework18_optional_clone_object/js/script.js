const student = {
	firstName:'John',
	lastName:'Doe',
	age: 53,
	children: null,
	marriage: false,
	sayHi: function() {
		alert('Hello, this.firstName');
	},
	tabel: {
		math: '11',
		history: '10',
		physics: '12',
		english: {
			reading: '10',
			writing: '10',
			listening: '10',
			grammar: '11'
    }
  },
	paraOlimpics: ['Additional physical trainings', 'Active', {
		shooting: '1st place',
		'table tennis': '2rd place',
		rowing: '1th place'
  }]

};

function cloneObject(value) {
	const newObject = {};
	if(typeof value !== 'object' || value === null) {
		return value;
	}
	if(Array.isArray(value)) {
		return value.map(item => cloneObject(item));
	}
	for(let key in value) {
		newObject[key] = cloneObject(value[key]);
	}
	return newObject;
} 


console.log(student);
const newStudent = cloneObject(student);
console.log(newStudent);