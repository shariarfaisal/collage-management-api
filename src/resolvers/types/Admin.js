import checkUserValidation from '../../utils/checkUserValidation'

export default {
  email(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,req)
    if(!check){
      return null
    }
    return parent.email
  },
  username(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,req)
    if(!check){
      return null
    }
    return parent.username
  }
}
