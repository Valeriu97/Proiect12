/*
let js = 'amazing';
console.log(40 + 21 + 41 - 22);

console.log("Jonas");
console.log(123);

let firstName = "Valeriu";
console.log(firstName);


true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 1234);
// console.log(typeof 'Robert');

javascriptIsFun = 'BOOM!';
console.log(typeof javascriptIsFun);

let month;
console.log(month);
console.log(typeof month);

month = 11;
console.log(typeof month);

console.log(typeof null);


let age = 26;
age = 16;


const birthYear = 1997;
// birthYear = 2002;

var job = 'qa tester';
job = 'somer';

lastName = 'Scandura';
console.log(lastName);

// Math operators
const now = 2044;
const ageVali = now - 1997;
const ageRobert = now - 1995;
console.log(ageRobert, ageVali);

console.log(ageRobert * 2, ageVali / 2, 2 ** 3);

const firstName = 'Vali';
const lastName = 'Jitaru';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--;
console.log(x);
// Comparison operators
console.log(ageVali < ageRobert);
console.log(ageRobert <= 33);

const isFullAge = ageRobert >= 22;

console.log(now - 1997 > now - 1995);

const now = 2044;
const ageVali = now - 1997;
const ageRobert = now - 1995;
console.log(now - 1997 > now - 1995);


let x, y;
x = y = 44 - 12 - 6; // x = y = 26, x = 10
console.log(x, y);
const averageAge = (ageRobert + ageVali) / 2
console.log(ageRobert, ageVali, averageAge);


const firstName = 'Valeriu';
const job = 'QA Analyst';
const birthYear = 1997;
const year = 2033
const valy = "I'm " + firstName + ' a ' + (year - birthYear) + ' year old ' + job;
console.log(valy);

const valyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(valyNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Emi can start driving license 🚕');
} else {
    const yearsLeft = 18 - age;
    console.log(`Emi is too young, Wait another ${yearsLeft} years`)
}

const birthYear = 2003;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1992';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('vali'));
console.log(typeof NaN);

console.log(String(24), 24);
// typer coercion
console.log('I am ' + 23 + ' years old');
console.log('44' + '12' + 2);
console.log('22' / '2' / 10);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Claudiu'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 90;
if (money) {
    console.log("Don't spend it all X(");
} else {
    console.log('Go get a job loser');
}

let height = 0;
if (height) {
    console.log('WOW! This is awesome');
} else {
    console.log('THis Sucks!');
}


const age = '18';
if (age === 18) console.log('You just became an adult');

if (age == 18) console.log('You just became an adult...loose');

const favourite = Number(prompt("What's yourt favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! that is a good number!')
} else if (favourite === 7) {
    console.log('that is a bad number');
} else {
    console.log('number is not good or bad');
}

if (favourite !== 23) console.log('Why not 23?');



const hasDriverLicense = true;  // A
const hasGoodVision = true;     // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Marin is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Marin is able to drive!');
} else {
    console.log('Someone else should drive!');
}


const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare for swim lesson');
        break;
    case 'wednesday':
    case 'thursdat':
        console.log('Go for a run');
        break;
    case 'friday':
        console.log('Take a break');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
    console.log('Go to football match');
} else if (day === 'tuesday' || day === 'wednseday') {
    console.log('Go for a run');
} else if (day === 'thursday') {
    console.log('Prepare for the exam');
} else if (day === 'friday' || day === 'saturday') {
    console.log('Just chill');
} else if (day === 'sunday') {
    console.log('Go to church');
} else {
    console.log('Not a valid day');
}



const age = 26;
age >= 18 ? console.log('I like to drink beer 🍺') :
    console.log('I like to drink juice 🥤');

const drink = age >= 18 ? 'beer 🍺' : 'juice 🥤';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'beer🍺';

} else {
    drink2 = 'juice 🥤'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'beer 🍺' : 'juice 🥤'}`);
*/