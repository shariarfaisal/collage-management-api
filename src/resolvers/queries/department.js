import getAdminId from '../../utils/getAdminId'

const department = {
  async departments(parent,args,{ prisma,req },info){
    const insId = getAdminId(req)
    return prisma.query.departments(null,info)
  },
  department(parent,{id},{ prisma,req },info){
    const insId = getAdminId(req)
    return prisma.query.department({where:{ id }},info)
  }
}

export default department
