// Задание 6
// Дан обьект employee. Добавьте в него свойства age и salary, не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства). Выведите новосозданный объект в консоль.
const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
}

const newEmployee = {...employee, age: 49, salary: 150000};
console.log(newEmployee);