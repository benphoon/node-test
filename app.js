// Testing import and export of modules
const getUserInfo = require('./sayName');

console.log(getUserInfo);

getUserInfo.sayName();


// Testing file directories
console.log(__dirname);
console.log(__filename);
