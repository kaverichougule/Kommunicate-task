// Write a javascript function that prints the reverse of a number. Example: if
// the number is 149, then output should be 941.

function ReverseNum(num){
    let reverse=0;
    while(num!=0){
        let temp=num%10;
        reverse=reverse*10+temp;
        num=Math.floor(num/10);
    }
    return reverse;
}

console.log(ReverseNum(149));