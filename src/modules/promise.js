const axios = require('axios');

function run() {
	console.log('axios promise');
	console.log('======================================');
	const fetch = async (url) => {
		try {
			return await axios.get(url);
		}
		catch (error) {
			throw new Error(error);
		}
	};
	fetch('https://google.com')
		.then(d => console.log(d))
		.catch(err => console.error(err));
}

exports.run = run;