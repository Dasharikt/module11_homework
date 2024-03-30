function count(){
 arr = [0, 1, 236 , 0, 4, 5, 6, 'cat', 10, 1 , null];
 countEven = 0;
 countOdd = 0;
 countOther = 0;
 countZero = 0;

for ( i = 0; i < arr.length; i++){
    if ((typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] === 0){
        countZero++;
        }
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
console.log("Zero is " + countZero);
console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countOther);
}
count();
