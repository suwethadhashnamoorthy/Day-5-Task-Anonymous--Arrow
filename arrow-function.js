// 3. Do the below programs in Arrow Functions
// 3.a Print odd numbers in an array
const arrodd = [1, 2, 3, 4, 5, 6];
const odd = arrodd.filter((n) => n % 2);
console.log(odd);

// 3.b Convert all the strings to title caps in a string array.
const arrstr = ["Hello", "World"];
const Upper = arrstr.map((name) => name.toUpperCase());
console.log(Upper);


//3.c Sum of all numbers in an array.
const arrsum = [1, 2, 3, 4, 5, 6];
var sum = 0;
arrsum.forEach((item) => {
  sum += item;
});
console.log(sum);

//3.d Return all the prime numbers in an array.
const arrprime = [1, 3, 2, 5, 10];
const myPrimeArray = arrprime.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);

//4.e Return all the palindromes in an array.
const arrpal = ["amma", "man", 786, "appa", "Maam", 123];
const palindrome = [];
arrpal.forEach((palnum) => {
  let revstr = palnum.toString().split("").reverse().join("");
  if (palnum === revstr) {
    palindrome.push(palnum);
  }
  return palindrome;
});
console.log(palindrome);

