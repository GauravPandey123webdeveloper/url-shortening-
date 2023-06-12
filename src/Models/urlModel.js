const mongoose = require('mongoose');
const shortId = require('shortid')
const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    longUrl: {
        type: String,
        trim: true,
        required: true
    },
    shortUrl: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Url', urlSchema);