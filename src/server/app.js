const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

class App {
	constructor(routerLegacy) {
		//init
		this.routerLegacy = routerLegacy;	
		this.app = express();

		//body parser middleware
		this.app.use(bodyParser.urlencoded({ extended: true }));

		//routing middleware
		this.app.use('/admin', require('./router/admin'));
		this.app.use('/shop', require('./router/shop'));

		//not found middleware
		this.app.use((req, res, next) => this.notFound(req, res, next));
		
		//error handling
		this.app.use((err, req, res, next) => {
			console.error(err);
			res.send(err);
		});

	};

	startExpressServer(port, host) {
		
		this.http = http.createServer(this.app);

		this.errorCount = 0;
		this.http.on('error', e => this.retry(e));

		this.http.listen(port, host, () => console.log('express server is running on port:', port))
	};

	startNodeServer(port, host) {
		this.http = http.createServer(this.routerLegacy);

		this.errorCount = 0;
		this.http.on('error', e => this.retry(e));
		this.http.listen(port, host, () => console.log('pure node server is running on port:', port))
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
	
	notFound(req, res, next) {
		res.status(404).send('<h1>not found</h1>');
	}

}


module.exports = {
	App
};