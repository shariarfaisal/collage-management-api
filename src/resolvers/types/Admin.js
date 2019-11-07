export default {
  departments(parent,args,{ prisma,req },info){
    return prisma.query.departments({
      where:{
        admin:{
          id: parent.id
        }
      }
    },info)
  }
}
