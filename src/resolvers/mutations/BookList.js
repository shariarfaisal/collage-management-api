import getAdminId from '../../utils/getAdminId'

const BookList = {
  async createBookList(parent,args,{ prisma,req },info){
    const {department,semester,probidan} = args.data
    const bookListExists = await prisma.query.bookLists({
      where:{
        department:{ id: department },
        semester: {id: semester },
        probidan
      }
    })
    if(bookListExists.length !== 0) throw new Error("BookList already exists!")

    const bookList = await prisma.mutation.createBookList({
      data: {
        department:{ connect:{ id: department } },
        semester:{ connect:{ id: semester } },
        probidan
      }
    },info)
    return bookList
  },
  async deleteBookList(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteBookList({
      where:{ id }
    },info)
  }
}

export default BookList
