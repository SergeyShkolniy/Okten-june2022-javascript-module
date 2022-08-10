//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const stringLength = (hello, lorem, javascript) => {
    console.log(`довжина ${hello} = ${hello.length}`);
    console.log(`довжина ${lorem} = ${lorem.length}`);
    console.log(`довжина ${javascript} = ${javascript.length}`);
}

stringLength('hello world', 'lorem ipsum', 'javascript is cool');

// ----------------------------------------------------------------------

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const stringToUpperCase = (hello, lorem, javascript) => {
    console.log(`${hello} = ${hello.toUpperCase()}`);
    console.log(`${lorem} = ${lorem.toUpperCase()}`);
    console.log(`${javascript} = ${javascript.toUpperCase()}`);
}

stringToUpperCase('hello world', 'lorem ipsum', 'javascript is cool');

// ----------------------------------------------------------------------

//3 - Перевести до нижнього регістру настипні стрінгові значення

const stringToLowerCase = (hello, lorem, javascript) => {
    console.log(`${hello} = ${hello.toLowerCase()}`);
    console.log(`${lorem} = ${lorem.toLowerCase()}`);
    console.log(`${javascript} = ${javascript.toLowerCase()}`);
}

stringToLowerCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

// ----------------------------------------------------------------------

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str = ' dirty string   ';
const strNew = str.trim();
console.log( str.length, str.trim() ,strNew.length );

// ----------------------------------------------------------------------

// 5 - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const string = 'Ревуть воли як ясла повні';
const stringToArray = (string) => string.split(' ');
const array = stringToArray(string);
console.log(array);

// ----------------------------------------------------------------------

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.

const arrayNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrayNumbers);
const newArrayString = arrayNumbers.map(value => value + '');
console.log(newArrayString);

// ----------------------------------------------------------------------

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11,21,3];

const sortNums = (nums, direction ) => {
    if (direction === 'ascending') {
        nums.sort((num1, num2) => num1 - num2);
        console.log(nums);
    }
    else if (direction === 'descending') {
        nums.sort((num1, num2) => num2 - num1);
        console.log(nums);
    }
    else {
        console.log('direction is errors')
    }

}
sortNums(nums, 'ascending');
sortNums(nums, 'descending');
sortNums(nums, 'asd');

// ----------------------------------------------------------------------

// 8 - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// відсортувати його за спаданням за monthDuration

const sortMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration).sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sortMonthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filterMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5) ;
console.log(filterMonthDuration);

// ----------------------------------------------------------------------

// 9 - описати колоду карт
const cards = [
    {cardSuit: 'heart', color: 'red', value: 6},
    {cardSuit: 'heart', color: 'red', value: 7},
    {cardSuit: 'heart', color: 'red', value: 8},
    {cardSuit: 'heart', color: 'red', value: 9},
    {cardSuit: 'heart', color: 'red', value: 10},
    {cardSuit: 'heart', color: 'red', value: 'jack'},
    {cardSuit: 'heart', color: 'red', value: 'queen'},
    {cardSuit: 'heart', color: 'red', value: 'king'},
    {cardSuit: 'heart', color: 'red', value: 'ace'},
    {cardSuit: 'diamond', color: 'red', value: 6},
    {cardSuit: 'diamond', color: 'red', value: 7},
    {cardSuit: 'diamond', color: 'red', value: 8},
    {cardSuit: 'diamond', color: 'red', value: 9},
    {cardSuit: 'diamond', color: 'red', value: 10},
    {cardSuit: 'diamond', color: 'red', value: 'jack'},
    {cardSuit: 'diamond', color: 'red', value: 'queen'},
    {cardSuit: 'diamond', color: 'red', value: 'king'},
    {cardSuit: 'diamond', color: 'red', value: 'ace'},
    {cardSuit: 'spade', color: 'black', value: 6},
    {cardSuit: 'spade', color: 'black', value: 7},
    {cardSuit: 'spade', color: 'black', value: 8},
    {cardSuit: 'spade', color: 'black', value: 9},
    {cardSuit: 'spade', color: 'black', value: 10},
    {cardSuit: 'spade', color: 'black', value: 'jack'},
    {cardSuit: 'spade', color: 'black', value: 'queen'},
    {cardSuit: 'spade', color: 'black', value: 'king'},
    {cardSuit: 'spade', color: 'black', value: 'ace'},
    {cardSuit: 'clubs', color: 'black', value: 6},
    {cardSuit: 'clubs', color: 'black', value: 7},
    {cardSuit: 'clubs', color: 'black', value: 8},
    {cardSuit: 'clubs', color: 'black', value: 9},
    {cardSuit: 'clubs', color: 'black', value: 10},
    {cardSuit: 'clubs', color: 'black', value: 'jack'},
    {cardSuit: 'clubs', color: 'black', value: 'queen'},
    {cardSuit: 'clubs', color: 'black', value: 'king'},
    {cardSuit: 'clubs', color: 'black', value: 'ace'}
];

// - знайти піковий туз
const spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

// - всі шістки
const sixAll = cards.filter(card => card.value === 6);
console.log(sixAll);

// - всі червоні карти
const redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

// - всі буби
const diamondAll = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamondAll);

// - всі трефи від 9 та більше
const clubs = cards.filter(card => card.cardSuit === 'clubs' && card.value !== 6 && card.value !== 7 && card.value !== 8);
console.log(clubs);

// ----------------------------------------------------------------------

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

const reduseCards = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduseCards);