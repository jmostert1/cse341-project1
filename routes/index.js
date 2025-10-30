const router = require('express').Router();

//allows us to handle routes

router.get('/', (req, res) => {
  res.send('Hello World');
});


module.exports = router;