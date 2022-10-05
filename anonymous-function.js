// 1. Do the below programs in anonymous function & IIFE
// 1.a Print the odd numbers in an array.
const arrodd = [1, 2, 3, 4, 5, 6];
const odd = [];
for (const num of arrodd) {
  if (num % 2 !== 0) {
    odd.push(num);
  }
}
console.log(odd);


// 1.b Convert all the strings to title caps in a string array.
const arrstr = ["Hello", "World"];
const Upper = [];
for (const str of arrstr) {
  Upper.push(str.toUpperCase());
}
console.log(Upper);

// 1.c Sum of all numbers in an array.
const arrsum = [1, 2, 3, 4, 5, 6];
var sum = 0;
for (const sumnum of arrsum) {
  sum = sum + sumnum;
}
console.log(sum);

// 1.d Return all the prime numbers in an array.
const arrprime = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const prime = [];
var i = 0;
for (var primenum of arrprime) {
  if (primenum === 2) {
    prime[i] = primenum;
    i++;
  } else if (primenum > 2) {
    var flag = true;
    for (var j = 2; j < primenum / 2; j++) {
      if (primenum % j === 0) {
        flag = false;
        break;
      }
      if (flag) {
        prime[i] = primenum;
        i++;
      }
    }
  }
}
console.log(prime);

//1.e Return all the palindromes in an array.
const arrpal = ["amma", "man",786, "appa", "Maam", "maam", 123];
const palindrome = [];
for (var palnum of arrpal) {
  let revstr = palnum.toString().split("").reverse().join("");
  if (palnum === revstr) {
    palindrome.push(palnum);
  }
}
console.log(palindrome);

//1.f Return median of two sorted arrays of the same size
arrMed1 = [1, 2, 3, 4, 6];
arrMed2 = [6, 7, 8, 9, 10];
var n = arrMed1.length;
function Median(arrMed1, arrMed2, n) {
  var medi = 0;
  var medj = 0;
  var count;
  var m1 = -1,
    m2 = -1;
  for (count = 0; count <= n; count++) {
    if (medi == n) {
      m1 = m2;
      m2 = arrMed2[0];
      break;
    } else if (medj == n) {
      m1 = m2;
      m2 = arrMed1[0];
      break;
    }
    if (arrMed1[medi <= medj]) {
      m1 = m2;
      m2 = arrMed1[medi];
      medi++;
    } else {
      m1 = m2;
      m2 = arrMed2[medj];
      medj++;
    }
  }
  return (m1 + m2) / 2;
}
console.log(Median());

//1.g Remove duplicates from an array
arrdup = ["Namjoon", "Namjoon", "Seokjin", "Min Yoongi", "Hobi", "Hobi", "Jimin", "Taehyung", "Jungkook"];
function removeduplicate(arrdup) {
  return [...new Set(arrdup)];
}
console.log(removeduplicate(arrdup));

//1.h Rotate an array by k times
function rotleft(arrRot, rotations) {
  const rotatedArray = arrRot.concat();

  for (let Roti = 0; Roti < rotations; Roti++) {
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}
console.log(rotleft([1, 2, 3, 4, 5], 2));

