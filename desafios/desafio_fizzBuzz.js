const { gets, print } = require('./funcoes_auxilixares');

let num = gets();

    if (num % 3 == 0 && num % 5 == 0) {
        print("FizzBuzz");
    } else if (num % 3 == 0) {
        print("Fizz");
    } else if (num % 5 == 0) {
        print("Buzz");
    } else {
        print(num);
    }