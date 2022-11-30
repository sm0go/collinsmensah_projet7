const express = require('express')
const router = express.Router()
const postCtrl = require('../controller/post')
const auth = require('../middlleware/auth')
const multer = require('../middlleware/multer-config')
const test = require('../multer')

router.post('/post', auth, multer, postCtrl.createPost)
router.get('/post/:id', auth, postCtrl.getOnePost)
router.get('/posts', auth, postCtrl.getPosts)
router.put('/post/:id', auth, postCtrl.modifyPost)
router.delete('/post/:id', auth, postCtrl.deletePost)

module.exports = router