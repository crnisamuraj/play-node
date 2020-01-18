const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

class Server {
	constructor(routerLegacy) {

		this.routerLegacy = routerLegacy;
		this.app = express();

		this.app.use(bodyParser.urlencoded({ extended: true }));

		this.app.use('/test', require('../router/test.js'));

		this.http = http.createServer(this.app);

		this.errorCount = 0;
		this.http.on('error', e => this.retry(e));
	};

	startServer(port, host) {
		this.http.listen(port, host, () => console.log('server is running on port:', port))
	};

	retry(e) {
		if (e.code === 'EADDRINUSE') {
			console.error(e.message);
			if (this.errorCount < 5 ) {
				console.log('Retrying...')
				setTimeout(() => {
					this.http.close();
					this.errorCount++;
					this.startServer(e.port, e.address, () => console.log('Server restarted.... Runing on port', e.port));
				}, 500)
			} else {
				process.exit(1);
			}

		}
	};
	
}

module.exports = {
	Server
};