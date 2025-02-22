const multer = require('multer');
const path = require('path');
const randomstring = require('randomstring');

const imageHelper = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      const uniqueFileName = randomstring.generate(10) + path.extname(file.originalname);
      cb(null, uniqueFileName);
    },
  }),
}).single('image');

module.exports = {
  imageHelper,
};
