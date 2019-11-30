const routine = {
  routines(parent,args,{ prisma,req },info){
    const opArgs = {
      first: args.first,
      skip: args.skip,
      orderBy: args.orderBy
    }
    const wh = {}
    if(args.query){
      wh.title_contains = args.query
    }
    if(args.department){
      wh.department = {
        name_contains: args.department
      }
    }
    if(args.semester){
      wh.semester = {
        name : args.semester
      }
    }
    if(args.session){
      wh.session = {
        year_contains: args.session
      }
    }
    if(args.shift){
      wh.shift = args.shift
    }
    if(Object.keys(wh).length !== 0){
      opArgs.where = wh
    }
    return prisma.query.routines(opArgs,info)
  },
  routine(parent,args,{ prisma,req },info){
    return prisma.query.routine({where:{id: args.id}},info)
  }
}

export default routine
