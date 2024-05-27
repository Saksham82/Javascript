let score = "33a"

console.log(typeof score)

let valueNumber = Number(score)
console.log(typeof valueNumber)

console.log(valueNumber) //NaN

//"33" => 33
//"33abc" => NaN 
// true => 1
//false => 0
//undefined => NaN

let isLoggedIn = NaN

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn)