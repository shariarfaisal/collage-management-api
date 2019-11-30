import getAdminId from '../../utils/getAdminId'

const attendenceDay = {
  // attendenceDays(parent,args,{ prisma,req },info){
  //   const adminId = getAdminId(req)
  //   const opArgs = {
  //     first: args.first,
  //     skip: args.skip,
  //     orderBy: args.orderBy
  //   }
  //   if(args.query){
  //     opArgs.where = {
  //       date_contains: args.query
  //     }
  //   }
  //   return prisma.query.attendenceDays(opArgs,info);
  // },
  // attendenceDay(parent,args,{ prisma,req },info){
  //   const adminId = getAdminId(req)
  //   return prisma.query.attendenceDay({where:{ id: args.id }},info)
  // },
}

export default attendenceDay
