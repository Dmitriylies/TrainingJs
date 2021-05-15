'Use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const hards = document.querySelectorAll('.heart');
console.log(hards);

hards.forEach(item => {
    console.log(item);
    
});