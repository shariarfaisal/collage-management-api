const dayInWeek = {
  dayInWeeks(parent,args,{ prisma,req },info){
    return return prisma.query.dayInWeeks(null,info)
  },
  dayInWeek(parent,args,{ prisma,req },info){
    return return prisma.query.dayInWeek({where:{id: args.id}},info)
  }
}

export default dayInWeek
