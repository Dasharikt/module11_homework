function firstNum(num1) {
    return function(num2) {
       return num1 + num2;
   };
}

let term = firstNum(Number(prompt()));
console.log(term(Number(prompt())));
