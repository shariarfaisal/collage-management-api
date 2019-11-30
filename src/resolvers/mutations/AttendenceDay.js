import getAdminId from '../../utils/getAdminId'

export default {
  createAttendenceDay(parent,args,{ prisma, req},info){
    const adminId = getAdminId(req)
    const { date } = args.data

    return prisma.mutation.createAttendenceDay({
      data:{ data }
    },info)
  },
  updateAttendenceDay(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)

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
