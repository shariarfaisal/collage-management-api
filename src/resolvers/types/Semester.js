import checkUserValidation from '../../utils/checkUserValidation'

export default {
  students(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.students({where:{
      semester:{ id: parent.id }
    }},info)
  },
  routines(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.routines({where:{
      semester:{ id: parent.id }
    }},info)
  },
  bookLists(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.bookLists({where:{
      semester:{ id: parent.id }
    }},info)
  },
  classes(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.classes({where:{
      semester:{ id: parent.id }
    }},info)
  }
  
}
