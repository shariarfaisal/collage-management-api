const semester = {
  semesters(parent,args,{ prisma,req },info){
    return prisma.query.semesters(null,info)
  },
  semester(parent,args,{ prisma,req },info){
    return prisma.query.semester({where:{id:args.id}},info)
  }
}

export default semester
