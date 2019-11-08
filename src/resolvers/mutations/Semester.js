import getAdminId from '../../utils/getAdminId'

const Semester = {
  async createSemester(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { name } = args.data
    const semester = await prisma.query.semesters({
      where:{name}
    })
    if(semester.length !== 0) throw new Error("Semester already created!")

    return prisma.mutation.createSemester({
      data:{ name }
    },info)
  },
  async deleteSemester(parent,{ id, data },{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteSemester({
      data,
      where:{ id }
    },info)
  }
}

export default Semester
