//console.log(1);
//const obj =  {
//    name: 'John',
//    age: '25',
//    isMarried: false
//};
//
//console.log(obj['name']);
//
//let arr = ['plem.jpg', 'orange.png', 'apple.bmp', {}, ['1', '3', 4]];
//console.log(arr[4]);
//
//const arr = [];
//
// arr[0]= prompt('are you here?', '');
// arr[1] = prompt('are you here1', '');
// arr[2] = prompt('are you here2?', '');
//
//
//document.write(arr)
//
//const category = 'toys';
//
//console.log('https://someurl.com/' + category);
//
//console.log(100%6);
//
//console.log('1');

if (1) {
    console.log('ok!');
} else {
    console.log('error');
    
}
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100){
    console.log('too much');
} else {
    console.log('ok!');
} 

(num === 50) ?  console.log('ok!') : console.log('Error');

const logg = 12.6;

console.log(Math.round(logg));


function lernJs (lang, callback) {
    console.log(`eefrfr ${lang}`);
    callback();
}

function second() {
    console.log('second');
    
}

lernJs('Js', second);