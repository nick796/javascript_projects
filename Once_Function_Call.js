
/* 
The "Once" Function (High-Order Functions)

Goal: Write a function called once(fn).

    The Task: This function should take another function (fn) as an argument and return a new version of that function that can only be called one time.

    Scenario: If I call it a second time, it should return undefined or the result of the first call.

    Focus: High-order functions and "state" within a closure.
*/
function once(fn){
    let hasBeenCalled = false;
    let result;
    return function(...args){
        if (!hasBeenCalled){
            hasBeenCalled = true
            result = fn(...args)
            return result
        }
    }
}


const sayHi = (name) => "Γεια " + name;

/*

function sayHi(name) {
    return "Γεια " + name;
}
*/
const sayHiOnce = once(sayHi); // Εδώ ξεκινάει η ιστορία μας
console.log(sayHiOnce("George"))
console.log(sayHiOnce("Maria"))
console.log(sayHiOnce("Maria"))