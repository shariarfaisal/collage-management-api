import getTeacherId from '../../utils/getTeacherId'

export default {
  async createAttendence(parent,args,{ prisma, req },info){
    const teacher = getTeacherId(req)
    const { class: cls, student, present } = args.data
    const exists = await prisma.query.attendences({
      where:{
        class:{ id: cls },
        student:{ id: student }
      }
    })
    if(exists.length !== 0){
      throw new Error("Attendence taken!")
    }
    return prisma.mutation.createAttendence({
      data: {
        class:{
          connect:{ id: cls }
        },
        student:{
          connect:{ id: student }
        },
        present
      }
    },info)

  }
}
