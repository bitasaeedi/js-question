let a = '';
for (let index = 1; index < 101; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        a += "FizzBuzz\t";
    }
    else if (index % 5 == 0) {
        a += "Buzz\t";
    }
    else if (index % 3 == 0) {
        a += "Fizz\t";
    }
    else {
        a += index + '\t';
    }
}
console.log(a);