import getAdminId from '../../utils/getAdminId'

const department = {
  async departments(parent,args,{ prisma,req },info){
    const insId = getAdminId(req)
    const deps = await prisma.query.departments({where:{ admin:{ id: insId }}},info)
    console.log(deps);
    return deps
  },
  department(parent,{id},{ prisma,req },info){
    const insId = getAdminId(req)
    return prisma.query.department({where:{ id }},info)
  }
}

export default department
