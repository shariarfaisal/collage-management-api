const Session = {
  async createSession(parent,args,{ prisma,req },info){
    const { year } = args.data
    const session = await prisma.exists.Session({ year })
    if(session) throw new Error("Session already created!")
    return prisma.mutation.createSession({
      data: { year }
    },info)
  }
}

export default Session
