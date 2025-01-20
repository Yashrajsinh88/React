function sum (a , b) {
 return a+b;
}
sum(4, multi)
function multi(num1 , num2 , cb){
 const s = cb(num1+num2)
  console.log(s); 
}