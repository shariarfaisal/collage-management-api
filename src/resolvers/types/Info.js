export default {
  departments(parent,args,{ prisma,req },info){
    return prisma.query.departments(null,info)
  },
  sessions(parent,args,{ prisma,req },info){
    return prisma.query.sessions(null,info)
  },
  semesters(parent,args,{ prisma,req },info){
    return prisma.query.semesters(null,info)
  }
}
