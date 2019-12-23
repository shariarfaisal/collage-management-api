import getAdminId from '../../utils/getAdminId'

export default {
  async createAttendenceDay(parent,args,{ prisma, req},info){
    const adminId = getAdminId(req)
    const { date } = args.data
    console.log(date);
    const exists = await prisma.exists.AttendenceDay({ date })
    if(exists){
      throw new Error('Date already exists!')
    }
    return prisma.mutation.createAttendenceDay({
      data:{ date }
    },info)
  },
  async updateAttendenceDay(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const exists = await prisma.exists.AttendenceDay({ date: args.data.date })
    if(exists){
      throw new Error('Date already exists!')
    }
    return prisma.mutation.updateAttendenceDay({
      data: args.data,
      where: { id: args.id }
    },info)
  },
  deleteAttendenceDay(parent,{ id },{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteAttendenceDay({
      where: { id }
    },info)
  }
}
