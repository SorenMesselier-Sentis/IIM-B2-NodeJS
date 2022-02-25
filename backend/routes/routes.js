const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const postController = require('../controller/postController')

const auth = require('../middleware/auth')

