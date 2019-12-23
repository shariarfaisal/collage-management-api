import getTeacherId from '../../utils/getTeacherId'

export default {
  async createAttendenceClass(parent,args,{ prisma,req },info){
    const teacherId = getTeacherId(req)
    const { class: aclass, date } = args.data

    const day = await prisma.query.attendenceClasses({
      where:{
        day:{
          date_contains: date
        },
        class:{
          id: aclass
        }
      }
    })

    if(day.length !== 0){
      throw new Error("Class already created!")
    }

    return prisma.mutation.createAttendenceClass({
      data:{
        class:{
          connect:{ id: aclass }
        },
        day:{
          connect:{ date }
        }
      }
    },info)
  }
}
