import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import getAdminId from '../../utils/getAdminId'
import getToken from '../utils/getToken'

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
      token: getToken({id: user.id}),
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
      token: getToken({id: admin.id}),
      admin
    }
  },
  async updateAdmin(parent,{data},{ prisma, req },info){
    const id = getAdminId(req)
    const admin = await prisma.query.admin({ where:{ id } })
    if(!admin) throw new Error("Unable to update!")
    if(data.name && data.name !== admin.name){
      const nameExists = await prisma.exists.Admin({ name: data.name })
      if(nameExists) throw new Error("This name already exists!")
    }
    if(data.username && data.username !== admin.username){
      const usernameExists = await prisma.exists.Admin({ username: data.username })
      if(usernameExists) throw new Error("Username taken!")
    }
    if(data.email && data.email !== admin.email){
      const emailExists = await prisma.exists.Admin({ email: data.email })
      if(emailExists) throw new Error("Email taken!")
    }
    if(data.password){
      if(data.password.length < 6) throw new Error("Password should not be less than 6 character!")
      data.password = await bcrypt.hash(data.password,10)
    }

    return prisma.mutation.updateAdmin({ data, where:{ id } },info)
  },
  async deleteAdmin(parent,args,{ prisma, req },info){
    const id = getAdminId(req)
    return prisma.mutation.deleteAdmin({ where:{ id }},info)
  },
  async updateAdminPassword(parent,args,{ prisma, req },info){
    const id = getAdminId(req)
    const { oldPassword, newPassword } = args
    const admin = await prisma.query.admin({where:{ id }})
    if(!admin){
      throw new Error("Something wrong!")
    }
    const passwordMatch = await bcrypt.compare(oldPassword,admin.password)
    if(!passwordMatch){
      throw new Error("Old Password doesn't match!")
    }
    if(newPassword.length < 6) throw new Error("Password should be minimum 6 character!")
    const password = await bcrypt.hash(newPassword,10)

    return prisma.mutation.updateAdmin({
      where:{ id },
      data: { password }
    },info)
  }


}

export default Admin
