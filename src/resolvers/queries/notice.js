import checkUserValidation from '../../utils/checkUserValidation'

const Notice = {
  notices(parent,args,{ prisma, req },info){
    const check = checkUserValidation(req)
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy
    }
    if(args.query){
      opArgs.where = {
        title_contains: args.query
      }
    }
    console.log(args.query);
    return prisma.query.notices(opArgs,info)
  },
  notice(parent,{ id },{ prisma, req },info){
    return prisma.query.notice({where:{ id }},info)
  }
}

export default Notice
