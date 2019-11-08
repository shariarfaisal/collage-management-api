const bookList = {
  bookLists(parent,args,{ prisma,req },info){
    return prisma.query.bookLists(null,info)
  },
  bookList(parent,args,{ prisma,req },info){
   return prisma.query.bookList({where:{id: args.id}},info)
  }
}

export default bookList
