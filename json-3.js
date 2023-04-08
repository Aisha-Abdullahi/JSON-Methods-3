const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }

};

// const person2 = { ...person1 };
// person2.address.city = 'Milan';


const copy = JSON.stringify(person1);  //convert person1 to Json String
const person2 = JSON.parse(copy)       //convert the Json string back to a new object

person2.address.city = "Milan"


console.log(person1);
console.log(person2);