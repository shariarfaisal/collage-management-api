import jwt from 'jsonwebtoken'

const getToken = (arg) => {
  return jwt.sign(arg,process.env.PRISMA_SECRET)
}

export default getToken
