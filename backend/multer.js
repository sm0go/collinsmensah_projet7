const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images/')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '--' + file.originalname)
  }
})
module.exports = multer({ storage: fileStorageEngine })