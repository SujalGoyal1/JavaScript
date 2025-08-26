const accountId = 144553
let accountEmail = "sujal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2   Not Allowed



accountEmail = "hc@hc.com"
accountPassword = "123323"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funcional scope
*/
console.table([accountId, accountEmail , accountPassword , accountCity , accountState ])