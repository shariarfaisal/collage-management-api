import checkUserValidation from '../../utils/checkUserValidation'

const attendenceDay = {
  attendenceDays(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy
    }
    if(args.query){
      console.log(args.query);
      opArgs.where = {
        date_contains: args.query
      }
    }
    return prisma.query.attendenceDays(opArgs,info);
  },
  attendenceDay(parent,args,{ prisma,req },info){
    const checkUser = checkUserValidation(req)
    return prisma.query.attendenceDay({where:{ id: args.id }},info)
  },
  async attendenceDayWithDate(parent,args,{ prisma,req },info){
    console.log(args.date);
    const day = await prisma.query.attendenceDay({
      where:{ date: args.date }
    },info)
    if(!day){
      throw new Error("Not found!")
    }
    return day
  }
}

export default attendenceDay
