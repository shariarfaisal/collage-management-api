import getAdminId from '../../utils/getAdminId'

const Book = {
  async createBook(parent,args,{ prisma,req },info){
    const { name, code, bookList } = args.data
    const book = await prisma.query.books({
      where:{
        AND: [
          { code },
          {
            bookList:{ id: bookList }
          }
        ]
      }
    })

    if(book.length !== 0) throw new Error("Book already exists!")

    return prisma.mutation.createBook({
      data:{ name, code, bookList:{ connect:{ id: bookList } }}
    },info)
  },
  // async updateBook(parent,{ id, data },{ prisma, req },info){
  //   const { name,code } = data
  //   const adminId = getAdminId(req)
  //   const book = await prisma.query.book({ where:{ id } })
  //   if(!book) throw new Error("Unable to update!")
  //
  //   if(name && name !== book.name){
  //     const bookName = await prisma.query.
  //   }
  //   if(code && code !== book.code){
  //     const codeExists = await prisma.exists.Book({ code })
  //     if(codeExists) throw new Error("Book already exists!")
  //   }
  //   return prisma.mutation.updateBook({
  //     data:
  //   })
  // },
  async deleteBook(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteBook({where:{ id }},info)
  }
}

export default Book
