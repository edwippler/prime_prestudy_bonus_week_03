console.log("Hey, this works!");
var num = prompt("Please enter a number");

var multiplyTwice = function (x) {
  return x * 2;
}//end of function

var subtractThree = function(y) {
  return y - 3;
}//end of function

var addOne = function(z){
  return z + 1;
}//end of function

console.log(num = addOne(subtractThree(multiplyTwice(num))));
