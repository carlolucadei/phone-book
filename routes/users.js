var fs = require('fs');
var path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();
const phonebookFilePath = path.join(__dirname, '../phonebook.json');

/* GET users listing. */
router.get('/phonebook', function (req, res, next) {
  var readable = fs.createReadStream(phonebookFilePath);
  readable.pipe(res);
});

router.put('/phonebook', function (req, res, next) {
  fs.writeFile(phonebookFilePath,
    JSON.stringify(req.body.data, null, 2),
    function (err) {
      if (err) {
        console.log('The file has not been saved!');
        res.sendStatus(500);
      }
      res.sendStatus(200);
    })
});

module.exports = router;
