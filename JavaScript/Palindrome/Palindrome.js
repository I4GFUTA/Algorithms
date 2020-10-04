//Function to check if a word is a palindrome i.e if the word is the same when reversed
// Author: @Caspero-62

const isPalindrome = (input) => {

    //remove all non-alphanumeric characters and convert word to lowercase.
    const strippedInput = input.toLowerCase().replace(/[\W_]/g, '');

    //reverse word given as argument
    let inputReversed = strippedInput.split('').reverse().join('');

    if (strippedInput === inputReversed) {
        return true;
    } else {
        return false;
    }

}


