function PrimeNum(num){
    if ((num < 2) || (num > 1000)) {
        return "данные неверны";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return "составное";
            }
        }
        return "простое";
    }
}

let a = Number(prompt());
let f = PrimeNum(a);
console.log( a + " - " + f );
