const Semester = {
  async createSemester(parent,args,{ prisma,req },info){
    const { name } = args.data
    const semester = await prisma.query.semesters({
      where:{name}
    })
    if(semester.length !== 0) throw new Error("Semester already created!")

    return prisma.mutation.createSemester({
      data:{ name }
    },info)
  }
}

export default Semester
