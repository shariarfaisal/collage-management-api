const Routine = {
  async createRoutine(parent,args,{ prisma,req },info){
    const { title, semester, session, department, shift } = args.data
    const routine = await prisma.query.routines({
      where:{
        semester:{ id: semester },
        session:{ id: session },
        department:{ id: department },
        shift
      }
    })
    if(routine.length !== 0) throw new Error("Routine already created!")

    return prisma.mutation.createRoutine({
      data:{
        title,
        semester:{ connect:{ id: semester }},
        session:{ connect:{ id: session }},
        department:{ connect:{ id: department }},
        shift
      }
    },info)
  }
}

export default Routine
