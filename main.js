let birthYear = prompt('Введіть Ваш рік народження:');
if (birthYear === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження :(');
}

let birthPlace = prompt('В якому місті Ви живете?');
if (birthPlace === null) {
    alert('Шкода, що Ви не захотіли ввести своє місце проживання :(');
}

let favSport = prompt('Введіть ваш улюбленний вид спорту:');
if (favSport === null) {
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту :(');
}

let userAge;
if (birthYear !== null && 1900 < birthYear < 2022) {
    userAge = `Ваш вік: ${2023 - Number(birthYear)}`;
} else {
    userAge = 'Нажаль, ви не ввели рік народження, або ввели неправильно!';
}

let userPlace;
if (birthPlace !== null) {
    userPlace = birthPlace.toLowerCase();
    if (birthPlace === 'київ') {
        userPlace = 'Ти живеш у столиці України!';
    } else if (birthPlace === 'вашингтон') {
        userPlace = 'Ти живеш у столиці США!';
    } else if (birthPlace === 'лондон') {
        userPlace = 'Ти живеш у столиці Великобританії!';
    } else {
        userPlace = `Ти живеш у місті ${birthPlace[0].toUpperCase() + birthPlace.slice(1)}!`;
    }  
} else {
    userPlace = 'Нажаль ви не ввели місце проживання!';
}

let userSport;
if (favSport !== null) {
    userSport = favSport.toLowerCase();
    if (favSport === 'футбол') {
        userSport = 'Круто! Хочеш стати Кріштіану Роналду?';
    } else if (favSport === 'баскетбол') {
        userSport = 'Круто! Хочеш стати Стефаном Каррі?';
    } else if (favSport === 'перегони на формулі 1') {
        userSport = 'Круто! Хочеш стати Максом Ферстаппеном?';
    } else {
        userSport = `Круто! Хочеш стати мастером у такому виду спорті, як ${favSport}?`;
    }
} else {
    userSport = 'Нажаль ви не ввели свій улюбленний вид спорту, або ввели неправильно!';
}

alert(`${userAge}\n${userPlace}\n${userSport}`);