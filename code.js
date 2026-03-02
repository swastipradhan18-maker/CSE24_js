// typeof 
var num=10;
console.log(num);
console.log(typeof(num));
num=false;

//symbol
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}

//loops
var count;
console.log("Starting loop"+"<br/>")
for (count=0; count<9; count++){
    console.log("currentcount="+count);
}

// comparison operators
var a=10; var b=20;
console.log("a==b is "+(a==b)+"<br/>");
console.log("a!=b is "+(a!=b)+"<br/>");
console.log("a>b is "+(a>b)+"<br/>");
console.log("a<b is "+(a<b)+"<br/>");
console.log("a>=b is "+(a>=b)+"<br/>");
console.log("a<=b is "+(a<=b)+"<br/>");

//logical operators
var p=true; var q=false;
console.log("p&&q is "+(p&&q)+"<br/>");
console.log("p||q is "+(p||q)+"<br/>");
console.log("!p is "+(!p)+"<br/>");
console.log("!q is "+(!q)+"<br/>");

// //unary operators
// let a=2;
// a++;
// console.log(a);
// a=a+1;
// console.log(a);
// a+=1;
// console.log(a);