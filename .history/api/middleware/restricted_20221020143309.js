const jwt = require('jsonwebtoken')
const { JWT_SECRET} = require('../../data/config')
const User = require('../auth/auth.model')


function restrict(req, res, next){
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
    const token = req.headers.authorization
     if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded) =>{
          if(err){
            next({ status: 401, message: `token invalid`})
          }else{
              req.decodedJwt = decoded
              next()
          }
        })
     }else{
       next({ status: 401, message: 'token required'})
     }
}

const checkUsernameExists = async (req, res, next) => {
  try{
    const users = await User.findBy({ username: req.body.username})
    if(users.length){
      req.user = users[0]
      next()
    }else{
      next({status: 401, message: 'invalid credentials'})
    }
  }catch(err){
    next(err)
  }
}

const checkUserTaken = async (req, res, next) =>{
  try{
    const user = await User.findBy({username: req.body.username})
    if(!user.length){
      next()
    }else{
      next({status: 422, message: 'username taken'})
    }
  }catch(err){
    next(err)
  }
}



module.exports = { restrict, checkUsernameExists, checkUserTaken }