//playing with reduce and promises
//const promise = require('./modules/promise');
//const reduce = require('./modules/reduce');
//promise.run();
//reduce.run();

//Pure node http server
const server = new (require('./modules/server/server')).Server(require('./modules/nodeRouter'));

const port = process.env.PORT || 5050;

const host = process.env.HOST || '0.0.0.0';

server.startServer(port, host);



