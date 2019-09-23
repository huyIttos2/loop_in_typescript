export {};
/**
 * If/else
 */

// let count = 50;
// if (count > 0) {
//     count--;
// } else {
//     count = 0;
// }
// console.log(count);
// console.log("for loop");
const keys = "abcdef";
// for (let idx = 0; idx < keys.length; ++idx) {
//     console.log(keys[idx]);
// }

// console.log("while loop");
// let idx = 0;
// while (idx < keys.length) {
//     console.log(keys[idx]);
//     ++idx;
// }
// console.log("do-while loop");

// let idx = 0;
// do {
//     console.log(keys[idx]);
//     ++idx;
// } while (idx < keys.length);
// console.log("for-of loop");
// for (const item of keys) {
//     console.log(item);
// }
console.log("for-in loop");
interface User {
  age: number;
  Name: string;
}
// const user = {
//     name: 'Bob',
//     age: 55
// };
let user: User = {
  Name : "huy",
  age : 10
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}