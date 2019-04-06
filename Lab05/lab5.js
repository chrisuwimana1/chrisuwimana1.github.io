/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }

}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));

        // console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
        //     return maxOfThree(55, 4, 44);
        // }));
        // console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
        //     return maxOfThree(55, 4, 44);
        // }));


//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns
//true if it is a vowel, false otherwise. Five of the 26 alphabet letters are vowels: A, E, I, O, and U

function isVowel(input){
    if(input=='a' || input=='e'|| input=='i'|| input=='o'|| input=='u'|| 
    input=='A'|| input=='E'|| input=='I'|| input=='O'|| input=='U'){
        return true;
    }else{
        return false;
    }
}

console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, function () {
    return isVowel('a');
}));

console.log("Expected output of isVowel(f) is false " + myFunctionTest(false, function () {
    return isVowel('f');
}));

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all 
//the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
//multiply([1,2,3,4]) should return 24.

function sum(inputArray){
    var sum = 0;
    for(i=0; i<inputArray.length; i++){
        sum +=inputArray[i];
    }
    return sum;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

console.log("Expected output of sum([1,2,8,4]) is 20 " + myFunctionTest(20, function () {
    return sum([1,2,8,4]);
}));



//function multiply
function multiply(inputArray){
    var product = 1;
    for(i=0; i<inputArray.length; i++){
        product *=inputArray[i];
    }
    return product;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

console.log("Expected output of multiply([1,2,2,4]) is 20 " + myFunctionTest(20, function () {
    return multiply([1,2,2,4]);
}));

//function reverse string
function reverseString(inputString){
    var reversedString= "";

    for (i=inputString.length -1; i>=0; i--){
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}

console.log("Expected output of reverseString(\"hello\") is olleh  " + myFunctionTest("olleh", function () {
    return reverseString("hello");
}));

console.log("Expected output of reverseString(\"aba\") is aba " + myFunctionTest("bba", function () {
    return reverseString("aba");
}));

//function to find the longest word
function findLongestWord(inputWords){

    var longestWord = inputWords[0];
    
    for(var i = 1; i<inputWords.length; i++){

        if (inputWords[i].length >longestWord.length){
            longestWord = inputWords[i]
        }
    }
    return longestWord
}

console.log("Expected output of findLongestWord([\"mamama\",\"ma\",\"ner\",\"trid\"]) is mamama  " + myFunctionTest("mamama", function () {
    return findLongestWord(["mamama","ma","ner","trid"]);
}));

console.log("Expected output of findLongestWord([\"mamama\",\"ma\",\"ner\",\"trid\"]) is ma " + myFunctionTest("ma", function () {
    return findLongestWord(["mamama","ma","ner","trid"]);
}));



//function filter longer words
function filterLongWords(inputWords, i){
   var filteredArray= inputWords.filter(function(str){
        return str.length > i;
    })
    return filteredArray;
}
var expectedarr = ["mamama,trid"];
console.log("Expected output of filterLongWords([\"mamama\",\"ma\",\"ner\",\"trid\"],3) is [mamama,trid]  " + myFunctionTest(expectedarr, function () {
    return filterLongWords(["mamama","ma","ner","trid"],3);
}));

console.log("Expected output of filterLongWords([\"mamama\",\"ma\",\"ner\",\"trid\"],3) is [ma,ner] " + myFunctionTest("ma,ner", function () {
    return filterLongWords(["mamama","ma","ner","trid"],3);
}));

//Additional functions
//Map
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);

//Filter
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);

//Reduce
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);









