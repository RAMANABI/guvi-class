 ( function () {
var a=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
let primenum=[];
let Notprimenum=[];
var even=[];
var odd=[];
for(var i=0;i<a.length;i++) {
if(a[i]%2===0){
    even.push(a[i]);
}else{
  odd.push(a[i]);
};
};
for(let i=0;i<a.length;i++){
  sum += a[i];
}; 
for(let i=2;i<a.length;i++){
  if(a[i]%2 == 0){
    primenum.push(a[i]);
  }else{
    Notprimenum.push(a[i]);
  }
};
console.log("even",even);
console.log("odd",odd);
console.log(sum);
console.log("Prime Numbers",primenum);
console.log("Notprimenum",Notprimenum);

let b="don't go to bed untill you finish your work....";
function titlecaps (b) {
    b=b.split(' ');
    for(var i=0; i < b.length; i++) {
      b[i]=b[i].charAt(0).toUpperCase() + b[i].slice(1);
    }
    return b.join(' ');
    
 };
 console.log(titlecaps(b));

 let arr = ["apple", "mango", "apple", 
 "orange", "mango", "mango"]; 

function removeDuplicates(arr) { 
return arr.filter((item, 
 index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));

let A=[1,2,3,4,5];
let K=4;
function solution(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }

  K = K % A.length;
  
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }

  return A;
}
console.log(solution(A,K));
 }) ();






