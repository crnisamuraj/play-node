//playing with reduce and promises
//const promise = require('./modules/promise');
//const reduce = require('./modules/reduce');
//promise.run();
//reduce.run();

//Pure node http server
const app = new (require('./server/app')).App(require('./server/router/nodeRouter'));

const port = process.env.PORT || 5050;

const host = process.env.HOST || '0.0.0.0';

app.startExpressServer(port, host);

app.startNodeServer(5151);



