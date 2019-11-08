import getAdminId from '../../utils/getAdminId'


const Period = {
  async createPeriod(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { time,startedAt,endAt } = args.data
    const periods = await prisma.query.periods({
      where:{
        time,
        startedAt,
        endAt
      }
    })
    if(periods.length !== 0) throw new Error("Period already created!")

    return prisma.mutation.createPeriod({
      data:{ time, startedAt, endAt }
    },info)
  },
  async deletePeriod(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deletePeriod({ where:{ id }},info)
  }
}

export default Period
