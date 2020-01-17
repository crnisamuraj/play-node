const fs = require('fs');

const router = (req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter Message</title><head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();
	}

	if (req.url === '/message' && req.method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.appendFile(
				'message.txt', 
				message + '\n', 
				(err) => console.log('done')
			);
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}
};

module.exports = router;