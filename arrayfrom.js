// Array.from gor om nagot till en Array.
// ( i alla fall forsoker )

const myarr = Array.from("Hej");

console.log(Array.from(1));


const range = (amount) => Array.from(Array(amount).keys());


//range(1000).forEach(function(i){
//  console.log(i);
//})