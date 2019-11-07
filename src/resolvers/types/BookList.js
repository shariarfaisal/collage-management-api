export default {
  department(parent,args,{ prisma,req },info){
    return prisma.query.department({where:{id: parent.department.id }},info)
  }
}
