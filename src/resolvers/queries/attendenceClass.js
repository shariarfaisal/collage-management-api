import checkUserValidation from '../../utils/checkUserValidation'

const attendenceClass = {
  attendenceClasses(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    return prisma.query.attendenceClasses(null,info);
  },
  attendenceClass(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    return prisma.query.attendenceClass({where:{ id: args.id }},info)
  },
}

export default attendenceClass
