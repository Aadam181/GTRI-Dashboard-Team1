const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const assetSchema = new Schema({
    software: String,
    version: String

})



module.exports = mongoose.model('asset', userSchema, 'assets')