function multiply(a,b,c,d){	
	console.log(window.a);
	console.log("function called");
	console.log(arguments);
		return a*b;
} 
var multiplyByTwo = multiply.bind(this,2,3);
console.log(multiplyByTwo(5,4,5));	
console.log(this);
console.log(multiplyByTwo())