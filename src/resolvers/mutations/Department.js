import getAdminId from '../../utils/getAdminId'

const Department = {
  async createDepartment(parent,args,{ prisma,req },info){
    const adminId = getAdminId(req)
    const { name } = args.data

    return prisma.mutation.createDepartment({
      data: { name }
    },info)
  },
  async updateDepartment(parent,{id,data},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.updateDepartment({data,where:{ id }},info)
  },
  async deleteDepartment(parent,{id},{ prisma,req },info){
    const adminId = getAdminId(req)
    return prisma.mutation.deleteDepartment({ where:{ id }},info)
  }
}

export default Department
