const DayInWeek = {
  async createDayInWeek(parent,args,{ prisma,req },info){
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
  }




}

export default DayInWeek
