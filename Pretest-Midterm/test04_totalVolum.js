function totalVolum(...boxes){
    let total = 0;
    for(i = 0; i < boxes.length; i++){
        let [l,w,h] = boxes[i];
        total += l*w*h;
    }
    return total;
}
console.log(totalVolum([4,2,4],[3,3,3],[1,1,2],[2,1,1])); //63
console.log(totalVolum([2,2,2],[2,1,1])); //10
console.log(totalVolum([1,1,1])); //1