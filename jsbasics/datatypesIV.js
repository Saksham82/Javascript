// two types of datatypes - primitive, non primitive/reference

// primitive - 7 categories - string, number, booleon, null, undefined, symbol, bigInt
// these all are call by value 

// reference type - also called non primitive
// array, objects, functions

//Javascript is dynamically typed language
const score = 21
const num = 32.3


// Stack - Primitive - copy of main value
// heap - non primitive - refrence of main value

let user1 = {
    name : "saksham",
    age : "21"
}

let user2 = user1

user2.age = 22

console.log(user1.age)