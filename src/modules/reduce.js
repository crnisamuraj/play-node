function run() {
	const wealthiestPeople = [
		{name: "Gates", worth: 105700000000},
		{name: "Bezos", worth: 131000000000},
		{name: "Buffet", worth: 82500000000},
		{name: "Arnault", worth: 76000000000},
		{name: "Helu", worth: 75600000000}
	];

	
	result = wealthiestPeople.reduce((acc, currentVal) => {
		acc[currentVal.name] = {worth: currentVal.worth}
		return acc
		}, {});

	console.log(result);
	console.log(`Gates:', ${JSON.stringify(result.Gates)}`);
}

exports.run = run;