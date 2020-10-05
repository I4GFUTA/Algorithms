# Function checks if a string is a palindrome
# Author: @revanthraghu

def isPalindrome(str):
    return (str.lower() == ''.join(reversed(str)).lower())

# Tests
# print(isPalindrome('Aba'))
# print(isPalindrome('abb'))
# print(isPalindrome('anna'))
