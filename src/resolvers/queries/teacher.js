import getTeacherId from '../../utils/getTeacherId'

const teacher = {
  teachers(parent,args,{ prisma,req },info){
    return prisma.query.teachers(null,info)
  },
  teacher(parent,args,{ prisma,req },info){
    return prisma.query.teacher({where:{id: args.id}},info)
  },
  teacherMe(parent,args,{ prisma,req },info){
    const id = getTeacherId(req)
    return prisma.query.teacher({ where:{ id } },info)
  }
}

export default teacher
