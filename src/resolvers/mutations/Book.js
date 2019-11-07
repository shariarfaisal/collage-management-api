const Book = {
  async createBook(parent,args,{ prisma,req },info){
    const { name, code, bookList } = args.data
    const bookExists = await prisma.exists.Book({ code })
    if(bookExists) throw new Error("Book already exists!")

    return prisma.mutation.createBook({
      data:{ name, code, bookList:{ connect:{ id: bookList } }}
    },info)
  }
}

export default Book
