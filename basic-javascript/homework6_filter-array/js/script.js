function filterBy(array, dataType) {
    
    return array.filter(item => typeof item !== dataType);
    
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));
console.log(filterBy(['hello', 'world', 23, '23', null], 'number'));
console.log(filterBy(['hello', 'world', 23, '23', null, [], {}], 'object'));
console.log(filterBy(['hello', 'world', 23, '23', null, [], {}, true, false], 'boolean'));
