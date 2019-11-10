import checkUserValidation from '../../utils/checkUserValidation'

export default {
  students(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.students({where:{
      session:{ id: parent.id }
    }},info)
  },
  routines(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.routines({where:{
      session:{ id: parent.id }
    }},info)
  }
}
