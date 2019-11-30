import getStudentId from '../../utils/getStudentId'

const Note = {
  createNote(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    const { title, text } = args.data

    return prisma.mutation.createNote({
      data: { title, text, author:{ connect:{ id } } }
    },info)
  },
  updateNote(parent,{data},{ prisma,req },info){
    const id = getStudentId(req)

    return prisma.mutation.updateNote({ data, where:{ id: data.id }},info)
  },
  deleteNote(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    return prisma.mutation.deleteNote({
      where:{ id: args.id }
    },info)
  }
}

export default Note
