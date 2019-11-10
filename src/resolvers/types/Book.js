import checkUserValidation from '../../utils/checkUserValidation'


export default {
  bookList(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return parent.bookList
  },
  classes(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check) {
      return null
    }
    return prisma.query.classes({
      where:{ subject:{ id: parent.id }}
    })
  }
}
