export default {
  department(parent,args,{ prisma,req },info){
    // console.log(parent);
    return prisma.query.department({where:{id: parent.department.id}},info)
  }
}
