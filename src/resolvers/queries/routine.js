const routine = {
  routines(parent,args,{ prisma,req },info){
    return prisma.query.routines(null,info)
  },
  routine(parent,args,{ prisma,req },info){
    return prisma.query.routine({where:{id: args.id}},info)
  }
}

export default routine
