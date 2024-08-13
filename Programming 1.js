'use strict';
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';
const privatte = 534;
const ifs = 23;


'use strict';

function logger() {
    console.log('My name is Vali');
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



//Function declaration
function calcAge1(birthYear) {
    return 2043 - birthYear;
}
const age1 = calcAge1(1997);

//Function expression
const calcAge2 = function (birthYear) {
    return 2043 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);



//Function expression
const calcAge2 = function (birthYear) {
    return 2043 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2045 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2045 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires is ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Valeriu'));
console.log(yearsUntilRetirement(1990, 'Bob'));

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2045 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires is ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return - 1;
    }

    // return `${firstName} retires is ${retirement} years`;
}
console.log(yearsUntilRetirement(1997, 'Vasile'));
console.log(yearsUntilRetirement(1950, 'Ion'));



const friends = ['Robert', 'Emi', 'Claudiu'];
console.log(friends);

const y = new Array(1991, 1959, 2002, 2015);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Marian';
console.log(friends);

const firstName = 'Valeriu';
const Valeriu = [firstName, 'Jitaru', 2023 - 1997, 'QA Analyst', friends];
console.log(Valeriu);
console.log(Valeriu.length);

// Exercise
const calcAge = function (birthYear) {
    return 2033 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2019];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Robert', 'Emi', 'Claudiu'];

// ADD Elements
const newLength = friends.push('Marian');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Robert'));
console.log(friends.indexOf('Rob'));

friends.push(23);
console.log(friends.includes('Robert'));
console.log(friends.includes('Rob'));
console.log(friends.includes(23));



const valeriu = {
    firstName: 'Valeriu',
    lastName: 'Jitaru',
    age: 2023 - 1997,
    friends: ['Robert', 'Emi', 'Claudiu']
};



const valeriu = {
    firstName: 'Valeriu',
    lastName: 'Jitaru',
    age: 2023 - 1997,
    job: 'QA Analyst',
    friends: ['Robert', 'Emi', 'Claudiu']
};
console.log(valeriu);

console.log(valeriu.firstName);
console.log(valeriu['firstName']);

const nameKey = 'Name';
console.log(valeriu['first' + nameKey]);
console.log(valeriu['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Valeriu? Choose between firstName, lastName, age, job, and friends');

if (valeriu[interestedIn]) {
    console.log(valeriu[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

valeriu.location = 'Romania';
valeriu['twitter'] = '@valeriujitaru';
console.log(valeriu);

console.log(`${valeriu.firstName} has ${valeriu.friends.length} friends, and his best friend is called ${valeriu.friends[0]}`);


//OBJECT METODS
const valeriu = {
    firstName: 'Valeriu',
    lastName: 'Jitaru',
    birthYear: 1997,
    job: 'QA Analyst',
    friends: ['Robert', 'Emi', 'Claudiu'],
    hasDriversLicense: true,

    //   calcAge: function (birthYear) {
    //        return 2023 - birthYear;
    //   }

    //  calcAge: function () {
    //    console.log(this);
    //      return 2024 - this.birthYear;
    //   }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}
        -year old ${valeriu.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver;s license.`

    }
};

console.log(valeriu.calcAge());

console.log(valeriu.age);
console.log(valeriu.age);
console.log(valeriu.age);

// Challenge
// 'Valeriu is a 27 year old tester, and he has a driver's license"
console.log(valeriu.getSummary());

// Exercitiu

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// "John Smith's BMI is higher than Mark Miller's"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi})is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}



// ITERATION: THE FOR LOOP

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


// LOOPING ARRAYS, BREAKING AND CONTINUING
const valeriu = [
    'Valeriu',
    'Jitaru',
    2023 - 1997,
    'QA tester',
    ['Robert', 'Emi', 'Claudiu'],
    true
];
const types = [];

// console.log(valeriu[0])
// console.log(valeriu[1])

// ...
// console.log(valeriu[4])
// valeriu[5] does not exists

for (let i = 0; i < valeriu.length; i++) {
    // Reading from valeriu array
    console.log(valeriu[i], typeof valeriu[i]);

    // Filling types arrays
    //  types[i] = typeof valeriu[i];
    types.push(typeof valeriu[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- Only Strings ---')
for (let i = 0; i < valeriu.length; i++) {
    if (typeof valeriu[i] !== 'string') continue;

    console.log(valeriu[i], typeof valeriu[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < valeriu.length; i++) {
    if (typeof valeriu[i] === 'number') break;

    console.log(valeriu[i], typeof valeriu[i]);
}
*/

