import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import getTeacherId from '../../utils/getTeacherId'
import getAdminId from '../../utils/getAdminId'


const Teacher = {
  async createTeacher(parent,args,{ prisma,req },info){
    const { name, email, address, position, phone, password } = args.data
    const emailExists = await prisma.exists.Teacher({ email })
    if(emailExists) throw new Error("Email taken!")
    if(password.length < 6) throw new Error("Password should not be less than 6 character!")
    const hashPwd = await bcrypt.hash(password,10)

    const teacher = await prisma.mutation.createTeacher({
      data:{ name, email, address, position, phone, password: hashPwd }
    })

    return{
      token: jwt.sign({ id: teacher.id },'secret'),
      teacher
    }
  },
  async loginTeacher(parent,args,{ prisma,req },info){
    const { email, password } = args.data
    const teacher = await prisma.query.teacher({ where:{ email }})
    if(!teacher) throw new Error("Unable to login!")
    const pwdCheck = await bcrypt.compare(password,teacher.password)
    if(!pwdCheck) throw new Error("Unable to login!")
    return {
      token: jwt.sign({id:teacher.id},'secret'),
      teacher
    }
  },
  async updateTeacher(parent,{data},{ prisma,req },info){
    const id = getTeacherId(req)
    const teacher = await prisma.query.teacher({ where:{ id }})
    if(!teacher) throw new Error("Unable to update!")

    if(data.email && data.email !== teacher.email){
      const checkEmail = await prisma.exists.Teacher({ email: data.email })
      if(checkEmail) throw new Error("Email taken!")
    }

    if(data.phone && data.phone !== teacher.phone){
      const checkPhone = await prisma.exists.Teacher({ phone: data.phone })
      if(checkPhone) throw new Error("Phone already exists!")
    }

    return prisma.mutation.updateTeacher({
      data,
      where:{ id }
    },info)
  },
  async deleteTeacher(parent,{ id },{ prisma,req },info){
    const admin = getAdminId(req)
    return prisma.mutation.deleteTeacher({ where:{ id }},info)
  },
  async updateTeacherPassword(parent,args,{ prisma, req },info){
    const id = getTeacherId(req)
    const { oldPassword, newPassword } = args
    const teacher = await prisma.query.teacher({where:{ id }})
    if(!teacher){
      throw new Error("Something wrong!")
    }
    const passwordMatch = await bcrypt.compare(oldPassword,teacher.password)
    if(!passwordMatch){
      throw new Error("Old Password doesn't match!")
    }
    if(newPassword.length < 6) throw new Error("Password should be minimum 6 character!")
    const password = await bcrypt.hash(newPassword,10)

    return prisma.mutation.updateTeacher({
      where:{ id },
      data: { password }
    },info)
  }

}

export default Teacher
