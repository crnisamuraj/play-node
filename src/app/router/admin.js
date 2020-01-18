const router = require('express').Router();

const appDir = require('../util/path');

router.get('/add-product', (req, res) => {
	console.log(appDir);
	res.sendFile(path.join(appDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
	console.log(req.body);
	res.redirect('/admin/add-product');
});

module.exports = router;