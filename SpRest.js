const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);

//  Desturcturing

const numbers1 = [1,2,3];
[num1, num2] = numbers1;
console.log(num1, num2);

