const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const headers = require('cors')
const fileUpload = require('express-fileupload');

require('./mongoose/connect')

const profileRoutes = require('./router/profile')
const postRoutes = require('./router/post')


app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders": ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Cache-Control']
}))
app.use(express.json());

app.use(headers())

app.use('/', profileRoutes)
app.use('/', postRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))


module.exports = app