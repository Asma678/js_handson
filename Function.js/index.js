//Q.1:
const square = function(y) {
    return y * y;
  };
  
  console.log(square(10));


// //Q.2
// const addition = (a,b) => {
//   let result = a+b;
//   console.log(result);
// }
// console.log(addition);
// addition(3,4);

//Output: 7



// //Q.3:
// const sub = (a,b) => {
//   let result = a-b;
//   console.log(result);
// }
// console.log(sub);
// addition(8,4);

//Output: 4

// //Q.4:
 
// var x=21;
// var girl = function(){
//     console.log(x);
//     var x=20;
// };
// girl();

//Output: undefine


// //Q.5: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

//Output: 21


//Q.6:

// var x=21;
// a();
// b();
// function a(){
//     x=20;
//     console.log(x);

// };
// //Output x=20

// function b(){
//     x=40;
//     console.log(x);
// }
// //Output x=40

//Q.7:

function factorial(n){
    if (n < 0){
        return -1;
    }
    else if (n == 0){
        return 1;
    }
    else{
        return (n*factorial(n - 1));
    }
}
console.log(factorial(4));

//Output: 24 (factorial of 4)

