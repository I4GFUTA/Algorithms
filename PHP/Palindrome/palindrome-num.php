<? php
// PHP code to check for Palindrome number in PHP
// Function to check for Palindrome
// Author: @akojif

function Palindrome($number){ 
    $temp = $number; 
    $new = 0; 
    while (floor($temp)) { 
        $d = $temp % 10; 
        $new = $new * 10 + $d; 
        $temp = $temp/10; 
    } 
    if ($new == $number){ 
        return 1; 
    }
    else{
        return 0;
    }
} 
 
// Driver Code
$num = 1441;
if (Palindrome($num)){ 
    echo "Palindrome"; 
}
else { 
echo "Not a Palindrome"; 
}
 
?> 
