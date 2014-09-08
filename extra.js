Ten Simple Javascript Exercises

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

//1//
function max(x,y) {
    if (x < y)
        return y;
    else
        return x;
}
console.log(12, 15);

//END 1//


//2//
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
//this actually will compare and order the arguements
function maxOfThree(a,b,c) {
 if (a<b) {
        if (a<c) {
            if (b<c) {
                console.log(a + ", then " + b + ", then " + c);
            } else {
                console.log (a + ", then " + c + ", then " + b);
            }
        } else {
            console.log (c + ", then " + a + ", then " + b);
        }
    } else {
        if (b<c) {
            if (a<c) {
               console.log (b + ", then " + a + ", then " + c);
            } else {
                console.log (b + ", then " + c + ", then " + a);
            }
        } else {
            console.log (c + ", then " + b + ", then " + a);
        }
    }
}
console.log(maxOfThree(10,12,24));

//END 2//

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
