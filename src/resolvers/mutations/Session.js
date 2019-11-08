import getAdminId from '../../utils/getAdminId'

const Session = {
  async createSession(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { year } = args.data
    const session = await prisma.exists.Session({ year })
    if(session) throw new Error("Session already created!")
    return prisma.mutation.createSession({
      data: { year }
    },info)
  },
  async deleteSession(parent,{ id, data },{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteSession({
      data,
      where:{ id }
    },info)
  }
}

export default Session
