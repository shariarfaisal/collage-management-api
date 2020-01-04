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
  async updateBook(parent,{ id, data },{ prisma, req },info){
    const adminId = getAdminId(req)
    const exists = await prisma.query.book({ where:{ id } })
    if(!exists) throw new Error("Unable to update!")

    if(data.code && data.code !== exists.code){
      const books = await prisma.query.books({
        where:{AND: [{ code: data.code },{bookList:{ id: data.bookList }}]}
      })
      if(books.length !== 0) throw new Error("Book already exists!")
    }

    const dta = {}
    if(data.name) dta.name = data.name
    if(data.code) dta.code = data.code
    return prisma.mutation.updateBook({
      data:dta,
      where:{ id }
    },info)
  },
  async deleteBook(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteBook({where:{ id }},info)
  }
}

export default Book
