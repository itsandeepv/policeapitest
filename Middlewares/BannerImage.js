


const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: '/uploads',
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    const filename = file.fieldname + '-' + uniqueSuffix + extension;
    callback(null, filename);
  },
});

// const storage = multer.diskStorage({
//   destination: '/uploads',
//   filename: (req, file, callback) => {
   
//     callback(null, file.originalname);
//   },
// });

const upload = multer({ storage });

module.exports = upload;