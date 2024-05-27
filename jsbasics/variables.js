const accountId = 14453;
let accountEmail = "saksham@gmail.com";
var accountPssword = "12345";
accountCity = "jaipur";
let accountState;

//accountId = 2; //not allowed
console.log(accountId);
console.log(accountEmail);

//prefer not to use var
//because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPssword, accountCity, accountState]);