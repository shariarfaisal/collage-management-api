import checkUserValidation from '../../utils/checkUserValidation'

const attendence = {
  attendences(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy
    }
    const ops = {}
    if(args.query){
      ops.class = {
        day:{ date_contains: args.query }
      }
    }
    if(args.day){
      ops.class = { day:{ id: args.day }}
    }
    if(args.class){
      ops.class = { id: args.class }
    }
    if(args.student){
      ops.student = { id: args.student }
    }
    if(args.student && args.semester){
      ops.student.semester = { id: args.semester }
    }
    if(args.present){
      ops.present = args.present
    }
    if(Object.keys(args).length !== 0){
      opArgs.where = ops
    }
    return prisma.query.attendences(opArgs,info);
  },
  attendence(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    return prisma.query.attendence({where:{ id: args.id }},info)
  },
}

export default attendence
