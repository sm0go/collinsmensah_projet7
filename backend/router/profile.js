const express = require('express')
const router = express.Router()
const auth = require('../middlleware/auth')
const profileCtrl = require('../controller/profile')

router.post('/signup', profileCtrl.signup)
router.post('/login', profileCtrl.login)  
router.get('/profile', auth, profileCtrl.getProfile)
router.put('/profile/settings', auth, profileCtrl.modifyProfile)
router.delete('/profile', auth, profileCtrl.deleteProfile)

module.exports = router
