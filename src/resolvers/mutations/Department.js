import getAdminId from '../../utils/getAdminId'

const Department = {
  async createDepartment(parent,args,{ prisma,req },info){
    const insId = getAdminId(req)
    const { name } = args.data

    return prisma.mutation.createDepartment({
      data: { name }
    },info)
  }



}

export default Department
