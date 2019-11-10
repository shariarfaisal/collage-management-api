import checkUserValidation from '../../utils/checkUserValidation'

export default {
  department(parent,args,{ prisma,req },info){
    // const check = checkUserValidation(req,false)
    // if(!check){
    //   return null
    // }
    return parent.department
  },
  books(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return parent.books
  }
}
