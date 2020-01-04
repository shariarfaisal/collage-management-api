import getAdminId from '../../utils/getAdminId'

export default {
  createNotice(parent,args,{ prisma, req },info){
    const checkAuth = getAdminId(req)
    const { title, text } = args.data

    return prisma.mutation.createNotice({
      data:{ title, text }
    },info)
  },
  async updateNotice(parent,args,{ prisma,req },info){
    const checkAuth = getAdminId(req)
    const exists = await prisma.exists.Notice({ id: args.id })
    return prisma.mutation.updateNotice({
      data: args.data,
      where:{
        id: args.id
      }
    },info)
  },
  deleteNotice(parent,{ id },{ prisma, req},info){
    const checkAuth = getAdminId(req)
    console.log(id);
    return prisma.mutation.deleteNotice({ where:{ id }},info)
  }
}
