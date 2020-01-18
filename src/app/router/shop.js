const router = require('express').Router();

const appDir = require('../util/path');

router.get('/', (req, res) => {
	res.sendFile(path.join(appDir, 'views', 'shop.html'));
});

router.get('/err', (req, res, next) => {
	next('error');
});

module.exports = router;