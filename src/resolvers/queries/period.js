const period = {
  periods(parent,args,{ prisma,req },info){
    return return prisma.query.periods(null,info)
  },
  period(parent,args,{ prisma,req },info){
    return return prisma.query.period({where:{id: args.id}},info)
  }
}

export default period
