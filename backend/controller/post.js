const Post = require('../models/Post')
const Profile = require('../models/Profile')

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.getOnePost = (req, res, next) => {
  // console.log(req.params.id);
  // res.send({message : 'ok'})
  Post.findOne({ _id: req.params.id })
  .then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({ error }))
}

exports.createPost = (req, res, next) => {
  console.log(req.body.file);
  const newPost = new Post ({
    ...req.body,
    userId: req.auth.userId,
    dateOfCreation: new Date(), 
    image: req.body.file
    // image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  })
  newPost.save()
  .then(()=> {
    res.status(201).json({ message: "Post saved !"})
  })
  .catch(error => res.status(400).json({ error }))
}

exports.modifyPost = (req, res, next) => {

}

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}