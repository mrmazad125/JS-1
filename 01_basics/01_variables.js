const accountId = 1
let accountEmail = "mufakirazad@gmail.com"
var accountPassword = "12345"
accountCity = "Attock"
let accountState;

// accountId = 2 // not allowed

accountEmail = "gogo@gmail.com"
accountPassword = "54321"
accountCity = "Hazro"

console.log(accountId);

/*
Prefer not to use var,
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);