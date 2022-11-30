const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  pseudo: { type: String },
  userId: { type: String },
  postMessage: { type: String, required: false },
  image: { type: String },
  dateOfCreation: { type: Date }, 
})

module.exports = mongoose.model('Post', postSchema)
