const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('Register.ejs');
});



module.exports = router;