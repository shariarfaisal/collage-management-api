import getAdminId from '../../utils/getAdminId'

const admin = {
  admin(parent,args,{ prisma,req },info){
    const insId = getAdminId(req)
    return prisma.query.admin({where:{ id: insId }},info)
  },
  admins(parent,args,{ prisma,req },info){
    return prisma.query.admins(null,info)
  }
}

export default admin
