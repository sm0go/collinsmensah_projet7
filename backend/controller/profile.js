const Profile = require('../models/Profile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_TOKEN = process.env.JWT_TOKEN

const regexCharacterOnly = /^[a-zA-ZÀ-ÿ -]([^0-9&~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>]*)$/g
const regexPseudoOnly = /^[a-zÀ-ÿ0-9]([^ A-Z&~"(_^à@)=}\]\\`|{}#/%*$£¤!?,.;:§µ<>-]*)$/g
const regexEmailOnly = /^[a-z0-9-_]+@[a-z-]+(?:\.[a-z0-9-]+)+/g
const regexPasswordOnly = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g

exports.signup = (req, res, next) => {
  // console.log(req.body.pseudo === regexPseudoOnly);
  // if (req.body.password !== regexPasswordOnly ||
  //    req.body.email !== regexEmailOnly || 
  //    req.body.pseudo !== regexPseudoOnly){
  //   res.status(400).json({ message: 'Wrong Email/Pseudo/Password'}) 
  // }


  const password = req.body.password
    bcrypt.hash(password, 10)
    .then(hash => {
      const profile = new Profile({
        ...req.body,
        password: hash
      })
      profile.save()
      .then(user => { 
        Profile.find({$or : [{email: req.body.email},{pseudo: req.body.pseudo}]})
          .then(res.status(201).json({
            message: 'Utilisateur crée',
            userId: user._id,
            token: jwt.sign(
              { 
                userId: user._id,
                email: user.email 
              },
              JWT_TOKEN,
              { expiresIn : '24h' }
            )
          })
          )
        })
        .catch(error => res.status(400).json({ error }))
      })
      .catch(error => res.status(500).json({error}))
}

exports.login = (req, res, next) => {
  Profile.find({$or : [{email: req.body.email},{pseudo: req.body.pseudo}]})
  .then(profiles => {
    const user = profiles[0]
    if (!user){
      res.status(401).json({ message: 'Email/MDP incorrect'})
      } else {
        bcrypt.compare(req.body.password, user.password)
          .then(mdp => {
            if(!mdp){
              res.status(401).json({ message: 'Email/MDP inccorect'})
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { 
                    userId: user._id,
                    email: user.email 
                  },
                  JWT_TOKEN,
                  { expiresIn : '24h' }
                )
              })
            }
          })
          .catch(error => res.status(500).json({ error }))
      }
    })
    .catch(error => res.status(500).json({error}))
}

exports.getProfile = (req, res, next) => {
  Profile.findOne({ _id: req.auth.userId})
    .then(profile => res.status(200).json(profile))
    .catch(error => res.status(400).json({ error }))
}

exports.modifyProfile = (req, res, next) => {

}

exports.deleteProfile = (req, res, next) => {
  
}