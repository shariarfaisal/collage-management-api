import checkUserValidation from '../../utils/checkUserValidation'


export default {
  department(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return prisma.query.department({where:{id: parent.department.id}},info)
  },
  email(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return parent.email
  },
  roll(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return parent.roll
  },
  reg(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return parent.reg
  },
  address(parent,args,{ prisma,req },info){
    const check = checkUserValidation(req,false)
    if(!check){
      return null
    }
    return parent.address
  },
  bookLists:{
    fragment:'fragment depId on Student{ department{ id } semester{ id }}',
    resolve(parent,args,{ prisma, req },info){
      return prisma.query.bookLists({
        where:{
          department:{
            id: parent.department.id
          },
          semester:{
            id: parent.semester.id
          }
        }
      },info)
    }
  }
}
