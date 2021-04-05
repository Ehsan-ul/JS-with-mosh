let person = {
    name: 'Ehsan',
    age: 19
};

//dot notation
person.age = 50;

// bracket notation
person['name'] = 'Sajjad';

console.log(person.age);
console.log(person.name);

console.log('............................');

let selectedColors = ['red', 'blue', 'white'];
selectedColors[5] = 500;
console.log(selectedColors);
console.log(selectedColors[2]);

console.log(typeof(selectedColors[5]));
console.log(selectedColors.length);


//function
function greet(fName, lName){
    console.log('hello '+ fName + ' ' +lName);
}
greet('Ehsan', 'Sajjad');


function square(number){
    return number * number;
}

console.log(square(2));
console.log('.................')

//loop
for(let i = 0; i < 10; i++){
    if(i%2 == 0)
    console.log(i);
    else
    console.log('odd '+i);
}



