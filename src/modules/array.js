let hobbies = ['Sports', 'Gaming', 'Coding', 'Blazing'];

obj = {
	name: 'call',
	type: 'function',
	call() {
		console.log(this.type, this.name, 'called');
		this.name = 'changed';
	}
};

console.dir('map');

hobbies2 = hobbies.map(hobby =>	hobby + ' r');

console.dir(hobbies2);
console.dir(hobbies);

console.log('spread operator ');

obj2 = {...obj};

obj2.call();

console.log(obj);
console.log(obj2);

console.dir('rest operator');

const toArray = (array, ...args) => {
	let arrx = [...array];
	args.map(arg => arrx.push(arg));
	return arrx;
}

let arr = [0,0,0];

console.dir(toArray(arr, 1,2,3,4,5));

console.dir(arr);

setTimeout(() => console.dir('callback'), 2000);