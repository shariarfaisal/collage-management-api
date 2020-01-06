import jwt from 'jsonwebtoken'

const getToken = (arg) => {
  return jwt.sign(arg,process.env.JWT_SECRET)
}

export default getToken
