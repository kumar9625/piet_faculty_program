const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder: 'PIET_FACULTY',
    allowedFormats: ['jpg', 'jpeg', 'png', 'pdf'], // supports promises as well
    }

});

module.exports = {
    cloudinary,
    storage
}