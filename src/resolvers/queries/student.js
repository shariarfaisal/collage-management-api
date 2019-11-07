import getAdminId from '../../utils/getAdminId'
import getStudentId from '../../utils/getStudentId'


const student = {
  async students(parent,args,{ prisma,req },info){
    const students = await prisma.query.students(null,info)
    console.log(students);
    return students
  },
  student(parent,args,{ prisma,req },info){
    return prisma.query.student({where:{id: args.id}},info)
  }
}

export default student
