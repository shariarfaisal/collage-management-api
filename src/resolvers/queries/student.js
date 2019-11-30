import getAdminId from '../../utils/getAdminId'
import getStudentId from '../../utils/getStudentId'


const student = {
  async students(parent,args,{ prisma,req },info){
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy
    }
    const ops = {}
    if(args.query){
      ops.OR = [{
        name_contains: args.query
      },{
        roll_contains: args.query
      }]
    }
    if(args.department){
      ops.department = { id: args.department}
    }
    if(args.session){
      ops.session = { id: args.session}
    }
    if(args.semester){
      ops.semester = { id: args.semester}
    }
    if(Object.keys(args).length !== 0){
      opArgs.where = ops
    }
    console.log(opArgs.where);
    const students = await prisma.query.students(opArgs,info)
    return students
  },
  student(parent,args,{ prisma,req },info){
    return prisma.query.student({where:{id: args.id}},info)
  },
  studentMe(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    return prisma.query.student({ where:{ id }},info)
  }
}

export default student
