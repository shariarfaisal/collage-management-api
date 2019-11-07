const classQuery = {
  classes(parent,args,{ prisma,req },info){
    return prisma.query.classes(null,info)
  },
  class(parent,args,{ prisma,req },info){
    return return prisma.query.class({where:{id: args.id}},info)
  }
}

export default classQuery
