const {User} = require('../models/user')
const bcrypt = require('bcrypt')
const webtoken = require('jsonwebtoken')

// Display all data

exports.index = (req, res) => {
    User.find((error, docs) => {
        if (error) {
            return res.status(500).json({ status: 'Fail', reason: error })
        }
        else {
            return res.status(200).json({ status: 'Success', data: docs })
        }
    })
}

// New user

exports.create = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const isAdmin = 0

    if (name == null || email == null || password == null || name == '' || email == '' || password == '') {
        return res.status(400).json({ status: 'Fail', reason: 'Wrong parameters' })
    }

    User.findOne({ email: email })
        .then(docs => {

            if (docs === null) {
                bcrypt.hash(password, 5, (error, encryptedPassword) => {
                    const newUser = new User({
                        name: name,
                        email: email,
                        password: encryptedPassword,
                        isAdmin: isAdmin
                    })
                    newUser.save(error => {
                        if (error) {
                            return res.status(400).json({ status: 'Fail to create a new user', reason: error })
                        }
                        else {
                            return res.status(200).json({ status: 'Success', data: newUser, token: newUser.generateAuthToken()})
                        }
                    })
                })
            }
            else {
                return res.status(400).json({ status: 'Fail', reason: 'Email already used' })
            }
        })
        .catch(error => res.status(400).json({ status: 'Fail', reason: error }))
}

// Display user

exports.show = (req, res) => {
    User.findById(request.params.id, (error, docs) => {
        if (error) {
            return res.status(404).json({ status: 'Fail', reason: 'Any user find' })
        }
        else {
            return res.status(200).json({ status: 'Success', data: docs })
        }
    })
}

// Update user

exports.update = (req, res) => {
    const update = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(
        req.params.id,
        { $set: update },
        { new: true },
        (error, docs) => {
            if (error) {
                return res.status(500).json({ status: 'Fail', reason: error })
            }
            else {
                return res.status(200).json({ status: 'Success', data: docs })
            }
        }
    )
}

// Delete user

exports.destroy = (req, res) => {
    User.findByIdAndRemove(
        req.params.id,
        (error, docs) => {
            if (error) {
                return res.status(500).json({ status: 'Fail', reason: error })
            }
            else {
                return res.status(200).json({ status: 'Success', data: docs })
            }
        }
    )
}

// login

exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    if (email == null || password == null || email == '' || password == '') {
        return res.status(400).json({ status: 'Failure', reason: 'Wrong parameters' })
    }

    User.findOne({ email: email })
        .then(docs => {
            if (docs !== null) {
                bcrypt.compare(password, docs.password, (errCrypt, resCrypt) => {
                    if (resCrypt) {
                        return res.status(201).json({ status: 'Success', data: docs, token: docs.generateAuthToken() })
                    }
                    else {
                        return res.status(403).json({ status: 'Fail', reason: 'Wrong password' })
                    }
                })
            }
            else {
                return res.status(404).json({ status: 'Fail', reason: 'Any user found' })
            }
        })
        .catch(error => res.status(500).json({ status: 'Fail', reason: error }))
}