// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
// turn the int to char, reverse, and then turn it back to int
function reverseNum(n) {
    return parseInt(String(n).split('').reverse().join(''));
}
// console.log(reverseNum(32243));
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
// recursion
function isPRe(str) {
    if (str.length<= 1) return true;
    if (str[0] !== str[str.length-1]) return false;
    return isPRe(str.slice(1,-1));
}
// console.log(isPalindrome('madam'));       // true
// console.log(isPalindrome('nurses run'));  // true
// console.log(isPalindrome('hello'));       // false

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
// i=0 1      j=1 2
function gerCom(str) { 
    let result = new Set();
    for (let i=0; i<str.length; i++){
        for (let j = i+1; j<length; j++) {
            result.add(str.slice(i,j));
        }
    }
    return [...result];
}
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alpa(str) {
    return str.split().sort().join('');
}
// console.log(alpa('webmaster'));
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
// in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'
function contertF(str) {
    let words = str.split(' '); //['the', 'quick', 'brown', 'fox']
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][1].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ') // goes array → string.
} 
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function longestWord(str) {
    let words = str.split(' ');
    let longest = '';
    for (let i =0; i< words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
     return longest;
}
// console.log(longestWord('Web Development Tutorial')); // 'Development'
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.
function checkPrime(number) {
    if (number<=1) return false;
    for (let i =2 ; i<=Math.sqrt(number); i++) {
        if (number%i===0) return false
    }
    return true;
}
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function returnType(arg) {
    return typeof arg;
}
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function rowNCol(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        matrix.push(row);
    }
    return matrix;
}
// console.log(rowNCol(4));
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
// _________________________________________________________________________________________
// Antra Inc. 21355 Ridgetop Circle Suite 300 Dulles VA 20166
// Phone: 703.994.4545 Fax: 703.373.2975 e-mail:hr@antra.net website: www.antra.net
function findSecond(number) {
    let result = [];
    let sorted = number.sort((a,b)=> (a-b));
    console.log(sorted);
    return [sorted[1],sorted[sorted.length -2]];
}
// console.log(findSecond([1,4,5,6,2,8, 10]));
// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper
// positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
// + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectN(number) {
    if (number<=1) return false;
    let sum = 1;//always divisor, init with 1
    for (let i = 2; i< Math.sqrt(number); i++) {
        if(number%i === 0) {
            sum += i; // add the divisor
            if (i !== number/i) { //don't add 平方的那個數
                sum+= n/i;
            }
        }
    }
}
// 13. Write a JavaScript function to compute the factors of a positive integer.
function positiveInt(number) {
    let result = [];
    for (let i=1; i<=number; i++) {
        if (number%i === 0) result.push(i);
    }
    return result;
}
console.log(positiveInt(12)); // [1, 2, 3, 4, 6, 12]
// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function amountTocoins(number, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (number>= coins[i]) {
            result.push(coins[i]);
            number -= coins[i];
        }
    }
    return result;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1])); // [25, 10, 10, 1]
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
function computeVal(b, n) {
    return Math.pow(b, n);
}
console.log(computeVal(2, 3)); // 8  (2³)
// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueChars(str) {
    return [...new Set(str)].join('');
}
// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function occurrences(str) { // set won't work cause it need dulplicates
    let result = new Map();
    for (let i =0; i< str.length; i++) {
        let charN = str[i];
        if (result.get(charN) !== undefined) { // if exist, +=1
            result.set(charN, result.get(charN)+1);
        } else {
            result.set(charN, 1);
        }
    }
    return result;
}
console.log(occurrences('hello'));
// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function searching (arr, desire) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);//check mid
        if (arr[mid] === desire) return mid;       // found mid
        else if (arr[mid] < desire) left = mid + 1; // search right half
        else right = mid - 1;                       // search left half
    }
    return -1; // not found
}
console.log(searching([1,2,3,4,5,6,7], 5)); // 4 (index)
console.log(searching([1,2], 2));
// 19. Write a JavaScript function that returns array elements larger than a number.
// function 
function largerThan(arr, num) {
    return arr.filter(x => x > num);
}
console.log(largerThan([1, 5, 3,8, 8, 2], 4));
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomC(length) { //input a number 
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i=0; i<length; i++) {
        result += char[Math.floor(Math.random()*(char.length))];
    }
    return result;
}
console.log(randomC(6)); 
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
function allSubset(arr, length) { 
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) { //nested
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[j], arr[i]]);
        }
    }
    return result;
}
console.log(allSubset([1,2,3], 2)); 
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
function occurrences2(str, char) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
}
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
function firstNot(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] === undefined) {
            result[str[i]] = 1;
        } else {
            result[str[i]] = result[str[i]]+1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] === 1) {
            return str[i];
        }
    }
    
}
// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// _________________________________________________________________________________________
// Antra Inc. 21355 Ridgetop Circle Suite 300 Dulles VA 20166
// Phone: 703.994.4545 Fax: 703.373.2975 e-mail:hr@antra.net website: www.antra.net
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
// they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountry(countries) {
    let longest = '';
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }
    return longest;
}
console.log(longestCountry(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
//sliding windoe
function longestSubstring(str) {
    let set = new Set();
    let left = 0, longest = '';
    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        if (right - left + 1 > longest.length) {
            longest = str.slice(left, right + 1);
        }
    }
    return longest;
}
console.log(longestSubstring('abcabcbb')); // 'abc'
console.log(longestSubstring('pwwkew'));   // 'wke'

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For
// example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed
// to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
// but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
// themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
// substring or returning the maximum length of a palindromic substring.
function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        // odd length (e.g. 'aba')
        let odd = expand(str, i, i);
        // even length (e.g. 'abba')
        let even = expand(str, i, i + 1);
        if (odd.length > longest.length) longest = odd;
        if (even.length > longest.length) longest = even;
    }
    return longest;
}

function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}
console.log(longestPalindrome('bananas')); // 'anana'

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function newFun (fun, parameter) { //input a fun and a para
    return fun(parameter);
}
function test1(a) {
    return a+1;
}
console.log(newFun(test1, 5));
// 29. Write a JavaScript function to get the function name.
function getName(fun) {
    return fun.name;
}
function test2 () {}
console.log(getName(test2))