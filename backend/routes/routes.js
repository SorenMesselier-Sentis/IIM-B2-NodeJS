const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const postController = require('../controller/postController')

const auth = require('../middleware/auth')

router.route('/user')
    .get(auth, userController.index)
    .post(userController.create)

router.route('/user/:id')
    .get(auth, userController.show)
    .patch(auth, userController.update)
    .put(auth, userController.update)
    .delete(auth, userController.destroy)

router.route('/login').post(userController.login)

router.route('/post')
    .get(auth, postController.index)
    .post(auth, postController.create)

router.route('/post/:id')
    .put(auth, postController.update)
    .patch(auth, postController.update)
    .delete(auth, postController.destroy)

router.route('/post/user/:id').get(auth, postController.show)

module.exports = router;