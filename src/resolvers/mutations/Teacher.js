import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Teacher = {
  async createTeacher(parent,args,{ prisma,req },info){
    const { name, email, address, position, phone, password } = args.data
    const emailExists = await prisma.exists.Teacher({ email })
    if(emailExists) throw new Error("Email taken!")
    if(password.length < 6) throw new Error("Password should be less than 6 character!")
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
  }


}

export default Teacher
