<?
// [ This is mine a bit odd solution ]
// Author: @sufisaid

function isAnagram($str1, $str2) {
    // convert to array of characters in lowercase
    $combinedArr = str_split(strtolower($str1 . $str2));

    // if the length is not an even number, words are not the same length
    if (count($combinedArr) % 2 != 0) {
        return false;
    }

    // sort array alphabetically
    sort($combinedArr);

    // if the words are anagrams of eachother
    // array should be constracted of the pairs of the same character
    for($i = 0; $i < count($combinedArr) / 2; $i++) {
        if ($combinedArr[$i*2] != $combinedArr[$i*2+1]) {
            return false;
        }
    }

    return true;
}