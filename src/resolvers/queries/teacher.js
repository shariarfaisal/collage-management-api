const teacher = {
  teachers(parent,args,{ prisma,req },info){
    return prisma.query.teachers(null,info)
  },
  teacher(parent,args,{ prisma,req },info){
    return prisma.query.teacher({where:{id: args.id}},info)
  }
}

export default teacher
