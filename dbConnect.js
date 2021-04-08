require('dotenv').config()

module.exports = {
    mongoDburl:process.env.DB,
    PORT: process.env.PORT || 5000,
};