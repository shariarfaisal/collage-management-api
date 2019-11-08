import getAdminId from '../../utils/getAdminId'

const ClassMutation = {
  async createClass(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { day, semester, period, mentor, department, subject } = args.data
    const cls = await prisma.query.classes({
      where:{
        department:{ id: department },
        semester:{ id: semester },
        period:{ id: period },
        mentor:{ id: mentor },
        subject:{ id: subject },
        day:{ id: day }
      }
    })
    if(cls.length !== 0) throw new Error("Class already created!")
    return prisma.mutation.createClass({
      data:{
        department:{ connect:{ id: department }},
        semester:{ connect:{ id: semester }},
        period:{ connect:{ id: period }},
        mentor:{ connect:{ id: mentor }},
        subject:{ connect:{ id: subject }},
        day:{ connect:{ id: day }}
      }
    },info)
  },
  async deleteClass(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteClass({ where:{ id }})
  }
}

export default ClassMutation
