"use strict";
// 1. შექმენით ფუნქია, რომელიც არგუმენტად მიიღებს რიცხვების  მასივს და დააბრუნებს ჯამს;

// const numbers = [1, 2, 3, 4, 5];
// function sumFunct(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }
// console.log(sumFunct(numbers));

//2 შექმენით ფუნქცია, რომელიც გამოიძახებს სხვა ფუნქციას

// function waiting() {
//   console.log("Waiting...");
//   setTimeout(() => {
//     executed();
//   }, 2000);
// }
// function executed() {
//   console.log("Function executed");
// }
// waiting();

// 3. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს

let num = Math.floor(Math.random() * 9);
// console.log(num);

// function square(num) {
//   console.log(Math.pow(num, 2));
// }

// square(num);

// 4. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს ობიექტს
//  და დააბრუნებს ობიექტს, სადაც დამატებული იქნება ახალი
//  თვისებები მაგ:{...person, status:'New', point: 40}

// const obj = {
//   name: "luka",
//   lastName: "goginashvili",
//   age: 22,
// };

// function addToObj(obj) {
//   return {
//     ...obj,
//     status: "New",
//     point: 50,
//   };
// }
// console.log(addToObj(obj));

// 5. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს
//  ორ რიცხვს და შეადარებს ამ ორ რიცხვს, თუ a > b-ზე
//   დააბრუნოს 1, თუ  a < b  დააბრუნოს -1, სხვა შემთხვევაში 0;

// function compare(num) {
//   switch (num > 1) {
//     case true:
//       console.log(1);

//       break;
//     case false:
//       console.log(-1);
//       break;

//     default:
//       console.log(0);

//       break;
//   }
//   return;
// }
// compare(num);

// 6.შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ტექსტს,
//  თუ ტექსტის სიგრძე ნაკლებია 6 ზე ფუნქციამ  არაფერი
//  დააბრუნოს  (დაწერთ if პირობას და შიგნით უბრალოდ return)

// const randomText = "rame sitkva";
// function textLength(text) {
//   if (text.length > 6) {
//     return console.log(true);
//   }
// }
// textLength(randomText);

// 7. დაწერეთ ნესტირებული ფუნქცია

// function gare() {
//   console.log("This is outter function");
//   function shignit() {
//     console.log("----This is inside function");
//   }
//   shignit();
// }
// gare();

// 8. დაწერეთ ფუნქცია რომელიც არგუმენტად მიიღებს მასივს და დააბრუნებს სტრინგს (გამოიყენეთ toString() მეთოდი)

// const arr = [1, 2, 3, 4];
// function str(arr) {
//   return arr.toString();
// }

// console.log(typeof str(arr)[0]);

// 9.  დაწერეთ ფუნქცია რომელიც არგუმენტად მიიღებს
// სახელს, html ში შექმნის p ტეგს და ტექსტად გადასცემს
// არგუმენტად მიღებულ სახელს.

// const randomName = "luka";
// function nameAdd(str) {
//   const createdName = document.createElement("p");
//   document.body.appendChild(createdName);
//   createdName.textContent = str;
// }
// nameAdd(randomName);

// 10. დაწერეთ ფუნქცია, რომელსაც ღილაკზე კლიკის დროს გამოიძახებთ და alert ში გამოიტანთ თქვენ სახელს და გვარს

// const clickBtn = document.getElementById("click");
// const person = {
//   name: "luka",
//   lastName: "goginashvili",
// };
// clickBtn.addEventListener("click", () => {
//   alert([person.name, person.lastName]);
// });
