
// function isPalindrome(str) {
//     //nospaces takes splited strings and joins them
//   var noSpaces = str.split(" ").join("").toLowerCase();
//   //mid takes the nospaces length and mathfloors it and divides by two
//   var mid = Math.floor(noSpaces.length/2);
// //These three lines are correct it must be in the loop
//   var last = noSpaces.length - 1;

//   for (var i = 0; i < mid; i++) {
//     if (str[i] !== str[last - i]) {
//         return false
//     };
//     return true
//   }
  
// }

// // Test driver code. These should all log true.
// console.log(isPalindrome('p') === true);
// console.log(isPalindrome('foo') === false);
// console.log(isPalindrome('racecar') === true);
// console.log(isPalindrome('Kayak') === true);
// console.log(isPalindrome('a santa at NASA') === true);
// console.log(isPalindrome('live without evil') === false);
// console.log(isPalindrome('just some random words') === false);

function isPalindrome(str) {
    var noSpaces = str.split(" ").join("").toLowerCase();
    var mid = Math.floor(noSpaces.length / 2);
    var last = noSpaces.length - 1;
  
    for (var i = 0; i < mid; i++) {
      if (noSpaces[i] !== noSpaces[(last - i)]) {
          return false;
      }
    }
    return true
  }
  
  // Test driver code. These should all log true.
  console.log(isPalindrome('p') === true);
  console.log(isPalindrome('foo') === false);
  console.log(isPalindrome('racecar') === true);
  console.log(isPalindrome('Kayak') === true);
  console.log(isPalindrome('a santa at NASA') === true);
  console.log(isPalindrome('live without evil') === false);
  console.log(isPalindrome('just some random words') === false);
  