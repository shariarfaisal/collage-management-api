import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const Admin = {
  async createAdmin(parent,args,{ prisma,req },info){
    const { name, email, username, password } = args.data

    const emailExists = await prisma.exists.Admin({ email })
    if(emailExists){
      throw new Error("Email taken!")
    }
    const usernameExists = await prisma.exists.Admin({ username })
    if(usernameExists){
      throw new Error("Username taken!")
    }

    if(password.length < 6) throw new Error("Password must not be less than 6 character!")
    const hashPassword = await bcrypt.hash(password,10)

    const user = await prisma.mutation.createAdmin({
      data: { name,email,username,password: hashPassword }
    })

    return {
      token: jwt.sign({id: user.id},'secret'),
      admin: user
    }
  },
  async loginAdmin(parent,args,{ prisma, req },info){
    const { username,password } = args.data
    const admin = await prisma.query.admin({where: { username }})
    if(!admin){
      throw new Error("Unable to login!")
    }
    const passwordMatch = await bcrypt.compare(password,admin.password)
    if(!passwordMatch) throw new Error("Unable to login!")
    return {
      token: jwt.sign({id: admin.id},'secret'),
      admin
    }
  }


}

export default Admin
