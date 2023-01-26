function numberSplit(num1){
    let half = num1/2;
    return [Math.floor(half),Math.ceil(half)]
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));


//[2, 2]
//[5, 5]
//[5, 6]
//[-5, -4]
