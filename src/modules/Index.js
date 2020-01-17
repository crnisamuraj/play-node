//this script is executed by loading Index.html in browser
let list = [3, 4, -10, 'test'];
console.log('original', list);

// console.log('hello');
// console.log(list); 

// function Bar() {
// 	this.a = 5;
// 	console.log(this.a);
// 	console.log(this);
// }

// bar = new Bar;

// console.log('bar', bar.a);

console.log('join', list.join('_'));
console.log('slice', list.slice(-2));