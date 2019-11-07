const book = {
  books(parent,args,{ prisma,req },info){
    return prisma.query.books(null,info)
  },
  book(parent,args,{ prisma,req },info){
    return prisma.query.book({where:{id: args.id}},info)
  }
}

export default book
