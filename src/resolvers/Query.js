const Query = {
  institute(parent,args,{ prisma,req },info){
    return {
      id: '1',
      name: 'ah'
    }
  },
  institutes(parent,args,{ prisma,req },info){
    return []
  }
}

export default Query
