/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if(i === words.length) return longestWord;
  longestWord = Math.max(words[i].length, longestWord);
  return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i >= str.length) return '';
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0, newStr='') {
  if(newStr.length === str.length){
    if(newStr === str) return true;
    return false;
  }
  newStr += str[str.length - 1 - i];
  return isPalindrome(str, i + 1, newStr);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i >= arr.length) return -1;
  if(arr[i] === val){
    return i;
  }else{
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, newStr='') {
  if(newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, newArr=[]) {
  for(let val of Object.values(obj)){
    if(typeof val === 'object'){
      gatherStrings(val, newArr);
    }
    else if(typeof val === 'string'){
      newArr.push(val);
    }
  }
  return newArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if(left > right) return -1;
  let middle = Math.floor((right + left) / 2);
  if(arr[middle] === val) return middle;
  else if(arr[middle] < val){
    left = middle + 1;
    return binarySearch(arr, val, left, right);
  }
  else{
    right = middle - 1;
    return binarySearch(arr, val, left, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
