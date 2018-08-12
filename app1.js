const _ = require("lodash");
const notes = require("./notes");

console.log(_.isString(true));
console.log(_.isString("Hello Kavitha"));
console.log(_.uniq([1,2,2,3,3,4,4,5,6,7]));

console.log(_.toUpper("kavitha"));
console.log(process.argv);