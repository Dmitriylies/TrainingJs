let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;
console.log(obj);
console.log(copy);

//перебор объекта, для его копирования.

function сopy (mainObj) {
   let objCopy = {};
   
   let key;
   for (key in mainObj) {
    objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const num = {
    a: 2,
    b: 6,
    c: {
        d: 54,
        e: 22
    }
};

//const numCopy = сopy(num);;
//
//numCopy.a = 67;
//
//console.log(num);
//
//console.log(numCopy);


const add = {
    f: 33,
    g:99
} ;

const done = Object.assign(num, add);

done.a = 506;

const done1 = Object.assign({}, done);
done1.a = 5056;

console.log(num);
console.log(add);
console.log(done);
console.log(done1);

const add1 = {
    f: 33,
    g:99
} ;

const add2 = {...add1};

add2.g = 0;


console.log(add2);
console.log(add1);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nun = [2, 5, 43];

log(...nun);