//  1-  Natral numbers 1  to  N
/*var n
n=prompt("Enter the number : ");

var num1=1;

while(num1<=n){
    console.log(num1)
    num1++;
}
*/
//  2 -  reverse   N  to   1
/*var n
n=prompt("Enter the number : ");

var num1=1;

while(num1<=n){
    console.log(n)
    n--;
}
*/
//  3 -  Alphabet   A   to   Z
/*var i=65   //=A
var j=90//=Z

while(i<=j){
    console.log(String.fromCharCode(i))
    i++
}
*/
//  4 -  All even from 1  to  100
/*var n=1
while(n<=100){
    if(n%2==0){//  (n%2!=0)  to print odd
        console.log(n)
    }
    n++
}
*/
//  5  -  Find sum of number b/w  1  to  n
/*var num=prompt("Enter finit number : ")
n=1

var sum=0

while(n<=num){
    sum=sum+n
    n++
}
console.log("Sum of All numbers : ",sum)
*/
//  6  -  Sum of All even numbers
/*var num=prompt("Enter finit number : ")
n=1

var sum=0

while(n<=num){
    if(n%2==0){// (n%2!=0) for odd
        sum=sum+n
    }
    n++
}
console.log("Sum of All numbers : ",sum)
*/
//  7  -  Multiplication Table of ANy number
/*num=prompt("Write number to find it's table : ")
num1=Number(num)

limit=10
n=1

while(n<=limit){
    console.log(num1,' X ',n,' = ',num1*n)
    n++;
}
*/
//  8  -  Find number of digits in a number
/*
//num1=prompt("Enter any Number : ")
//num=Number(num1)
var num:number=10
var n:number=0
while(num != 0){
num=Math.floor(num/10)
n++
}
                                
console.log("number of digits : ",n)
*/
//  9  -  Find 1st and last digits of a number 
var num = 23459;
var n1 = num;
var n2;
while (n1 >= 10) {
    n1 = Math.floor(n1 / 10);
}
n2 = num % 10;
console.log("Fist number : ", n1);
console.log("Last number : ", n2);
console.log("Sum of numbers : ", n1 + n2);
