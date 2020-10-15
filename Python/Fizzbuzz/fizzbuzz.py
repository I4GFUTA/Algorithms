# Prints each number from 1 to 100 on a new line with Fizzbuzz problem solved 
# Python
# Author: @manisacharya

for i in range(1, 101):
  output = ""
  output += "FizzBuzz" if i % 3 == 0 and i % 5 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else str(i)
  print(output)
