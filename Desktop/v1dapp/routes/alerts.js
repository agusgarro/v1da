const express = require ('express');
const router  = express.Router();
const Alert   = require ('../models/Alert');


/* GET alert page. */

router.get('/', (req, res, next) => {
    Alert.find()
      .then(alerts => {
        res.status(200).json(alerts);
      })
      .catch(err => {
        res.json(err);
      })
  
  });

  




module.exports = router;