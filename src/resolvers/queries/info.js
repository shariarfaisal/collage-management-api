const info = {
  async info(parent,args,{ prisma,req },info){
    return {
      departments: [],
      semesters: [],
      sessions: []
    }
  }
}

export default info
