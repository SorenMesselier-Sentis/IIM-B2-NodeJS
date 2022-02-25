const user = require('../models/user')
const bcrypt = require('bcrypt')
const webtoken = require('jsonwebtoken')

// New user

exports.create = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const isAdmin = 0

    if(name == null || email == null || password == null || name == '' || email == '' || password == '') {
        return response.status(400).json({status: 'Fail', reason: 'Wrong parameters'})
    }

    user.findOne({ email: email })
    .then(docs => {
        bcrypt.hash(password, 5, (error, encryptedPassword) => {
            const newUser = new user ({
                name: name,
                email: email,
                password: encryptedPassword,
                isAdmin: isAdmin
            })
            newUser.save(error => {
                if(error) {
                    return res.status(400).json({ status: 'Fail to create a new user', reason: error })
                }
                else {
                    return res.status(200).json({ status: 'Success', data: newUser, token: webtoken.sign({userId: newUser._id}, 'secretToken', {expiresIn: '6h'}) })
                }
            })
        })
    })
}