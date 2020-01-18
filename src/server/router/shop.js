const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('hello from shop');
});

router.get('/err', (req, res, next) => {
	next('error');
});

module.exports = router;