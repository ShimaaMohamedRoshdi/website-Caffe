// var str=prompt("plz enter string");
// function isunique(str){
//     for(var i=0;i<str.length;i++){
//         //check if charaters appears more than once in the string 
//         if(str.split(str[i]).length>2){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isunique(str)); 


// function checkAnagramWithSort(str1, str2) {
//     let newStr1 = //...
//     let newStr2 = //...

//     return (newStr1 === newStr2)
//   }

// var str=prompt("enter first string ");
// var str2=prompt("enter second string");
// function anagramChecker(str, str2) {
//     // Sort both strings
//     str = str.split('').sort().join('');
//     str2 = str2.split('').sort().join('');
//     // Compare sorted strings
//     return (str==str2)
// }
// console.log(anagramChecker(str, str2)) ;



// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(linearSearch([1, 3, 5, 7, 9], 5)); // returns 2
// console.log(linearSearch([1, 3, 5, 7, 9], 6)); // returns -1


// function linearSearch(arr , target){
//     for(var i=0; i<arr.length;i++){
//         if(target==arr[i]){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch([1,3,5,7,9], 5)); //return 2
// console.log(linearSearch([1,3,5,7,9], 6)); //return -1

// /**
//  * Checks if a string is a palindrome.
//  * @param {string} str - The input string.
//  * @returns {boolean} - True if the string is a palindrome, false otherwise.
//  */
// function isPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("racecar")); // true

// var str=prompt("enter a string plz");
// function isPalindrome(str){
//     const len=str.length;
//     for(var  i=0;i<len/2;i++){
//         if(str[i]!==str[len-1-i]){
//             return false;
//         }
        
//     }
//     return true;
// }
// console.log(isPalindrome(str));