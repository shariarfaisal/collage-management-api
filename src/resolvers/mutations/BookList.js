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

    console.log(bookList);
    return bookList
  }
}

export default BookList
