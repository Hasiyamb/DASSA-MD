const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, "DOxG2CaC#B5fa_EXVTIpKhwkpiwKy8LO8oqcrpURrUyJe42ibeF0"
MONGODB: process.env.MONGODB || "enter mongodb here",
};
