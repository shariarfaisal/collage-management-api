import getAdminId from '../../utils/getAdminId'

const Routine = {
  async createRoutine(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
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
  },
  async deleteRoutine(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteRoutine({ where:{ id }},info)
  },
  async updateRoutine(parent,{ id, data },{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.updateRoutine({
      data,
      where:{ id }
    },info)
  }
}

export default Routine
