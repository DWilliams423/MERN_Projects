const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config');

module.exports.register = (req, res) => {
/*Platform's Way*/
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
}
/*--------------------------------------------------*/ 
/*My Way*/
    // const {
    //     username,
    //     email,
    //     password
    // } = req.body;
    // console.log(req.body)
    // User.create({
    //     username,
    //     email,
    //     password
    // })
    // User.save()
//         .then(user => {
//             res.cookie('usertoken', jwt.sign({_id: user._id}, secret), {httpOnly: true})
//             res.json({ msg: "success!", User: User });
//         })
//         .catch((err) => res.status(400).json(err));
// }


module.exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user === null){
                res.status(400).json({msg: "Email Invalid"})
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid) {
                            res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                            .json({msg: "Success!"})
                        } else {
                            res.status(400).json({msg: "Password Invalid"})
                        }
                    })
                    .catch((err) => res.status(400).json(err));
            }
        })
        .catch((err) => res.status(400).json(err));
}

module.exports.getAllUsers = (request,response) => {
    User.find({})
        .then(user => response.json(user))
        .catch((err) => response.status(400).json(err));
}

module.exports.getLoggedInUser = (req,res) => {
    // User.getLoggedInUser({})
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});

    User.findById(decodedJwt.payload._id)
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.logout = (req,res) => {
    res.cookie('usertoken', jwt.sign({_id:''}, secret), {
        httpOnly: true,
        maxAge: 0
    }).json({msg:'Logout Success'})
}
