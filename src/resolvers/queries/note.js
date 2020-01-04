import getStudentId from '../../utils/getStudentId'


const note = {
  notes(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy,
      where:{
        author:{ id }
      }
    }

    if(args.query){
      opArgs.where.OR = [
        {title_contains: args.query},
        {text_contains: args.query}
      ]
    }

    return prisma.query.notes(opArgs,info)
  },
  note(parent,args,{ prisma,req },info){
    const id = getStudentId(req)
    return prisma.query.note({where:{ id: args.id }},info)
  }
}

export default note
