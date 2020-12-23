// Задание 7
// Дополните код так, чтоб он был рабочим
const array = ['value', () => 'showValue'];

const [value, showValue] = array;

// Допишите ваш код здесь

alert(value); // должно быть выведено 'value'
alert(showValue());  // должно быть выведено 'showValue'