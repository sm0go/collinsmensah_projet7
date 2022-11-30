const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const profileSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdministrator: { type: Boolean, required: true },
  image: String,
  dateOfCreation: { type: Date, default: Date.now }
})

profileSchema.plugin(validator)

module.exports = mongoose.model('Profile', profileSchema) 
