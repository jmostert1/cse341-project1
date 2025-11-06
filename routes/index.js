const router = require('express').Router();

router.use('/', require('./swagger'));

//allows us to handle routes

router.get('/', (req, res) => {
  //#swagger.tags = ['Hello World'];
  res.send('Hello World');
});


router.use('/contacts', require('./contacts'));

module.exports = router;