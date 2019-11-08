import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import getStudentId from '../../utils/getStudentId'


const Student = {
  async createStudent(parent,args,{ prisma,req },info){
    const { name, email, roll, reg, phone, shift, password, department,semester, address, session } = args.data

    const rollExists = await prisma.exists.Student({ roll })
    if(rollExists) throw new Error("Roll already exists!")
    const regExists = await prisma.exists.Student({ reg })
    if(regExists) throw new Error("Reg already exists!")
    const emailExists = await prisma.exists.Student({ email })
    if(emailExists) throw new Error("Email taken!")
    if(password.length < 6) throw new Error("Password should be minimum 6 character!")

    const hashPwd = await bcrypt.hash(password,10)
    const student = await prisma.mutation.createStudent({
      data: {name, email, roll, reg, phone, shift, password: hashPwd, department:{connect:{ id: department }},semester:{ connect:{ id: semester }}, address, session:{ connect: {id: session }}}
    })

    return {
      token: jwt.sign({ id: student.id },'secret'),
      student
    }
  },
  async loginStudent(parent,args,{ prisma, req },info){
    const { email, password } = args.data
    const student = await prisma.query.student({where:{ email }})
    if(!student){
      throw new Error("Unable to login!")
    }
    const passwordMatch = await bcrypt.compare(password,student.password)
    if(!passwordMatch){
      throw new Error("Unable to login!")
    }
    return{
      token: jwt.sign({id:student.id},'secret'),
      student
    }
  },
  async updateStudent(parent,{data},{ prisma,req },info){
    const id = getStudentId(req)
    const student = await prisma.query.student({ where:{ id } })
    if(!student) throw new Error("Unable to update!")

    if(data.email && data.email !== student.email){
      const emailExists = await prisma.exists.Student({ email: data.email })
      if(emailExists) throw new Error("Email taken!")
    }

    if(data.roll && data.roll !== student.roll){
      const rollExists = await prisma.exists.Student({ roll: data.roll })
      if(rollExists) throw new Error("Roll already exists!")
    }

    if(data.reg && data.reg !== student.reg){
      const regExists = await prisma.exists.Student({ reg: data.reg })
      if(regExists) throw new Error("Regestration no already exists!")
    }

    if(data.password && data.password.length < 6){
      data.password = await bcrypt.hash(data.password,10)
    }

    if(data.session){
      data.session = {
        connect:{ id: data.session }
      }
    }

    if(data.semester){
      data.semester = {
        connect:{ id: data.semester }
      }
    }

    return prisma.mutation.updateStudent({
      data,
      where:{ id }
    },info)
  },
  async deleteStudent(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    return prisma.mutation.deleteStudent({ where:{ id }},info)
  }

}

export default Student
