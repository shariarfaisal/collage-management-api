import getAdminId from '../../utils/getAdminId'

const DayInWeek = {
  async createDayInWeek(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { dayValue, day, routine } = args.data
    const dayInWeek = await prisma.query.dayInWeeks({
      where:{
        dayValue,
        day,
        routine:{ id: routine }
      }
    })
    if(dayInWeek.length !== 0) throw new Error("Day already created!")
    return prisma.mutation.createDayInWeek({
      data:{
        dayValue,
        day,
        routine:{ connect:{ id: routine }}
      }
    },info)
  },
  async deleteDayInWeek(parent,{ id },{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteDayInWeek({ where:{ id }})
  }

}

export default DayInWeek
