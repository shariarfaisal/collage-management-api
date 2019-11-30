import checkUserValidation from '../../utils/checkUserValidation'

export default {
  createNotice(parent,args,{ prisma, req },info){
    const checkAuth = checkUserValidation(req)
    const { title, text } = args.data

    return prisma.mutation.createNotice({
      data:{ title, text }
    },info)
  },
  async updateNotice(parent,args,{ prisma,req },info){
    const checkAuth = checkUserValidation(req)
    const exists = await prisma.exists.Notice({ id: args.id })
    return prisma.mutation.updateNotice({
      data: args.data,
      where:{
        id: args.id
      }
    },info)
  }
}
