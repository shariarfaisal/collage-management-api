const session = {
  sessions(parent,args,{ prisma,req },info){
    return prisma.query.sessions(null,info)
  },
  session(parent,args,{ prisma,req },info){
    return prisma.query.semester({where:{id:args.id}},info)
  }
}

export default session
