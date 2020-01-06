import jwt from 'jsonwebtoken'

const checkUserValidation = (req,required=true) => {

  const adminHeader = req.request ? req.request.headers.admin : req.connection.context.admin
  const studentHeader = req.request ? req.request.headers.student : req.connection.context.student
  const teacherHeader = req.request ? req.request.headers.teacher : req.connection.context.teacher

  if(adminHeader || studentHeader || teacherHeader){
    try {
      let token;
      if(adminHeader){
        token = adminHeader.replace('Bearer ','')
      }else if (studentHeader) {
        token = studentHeader.replace('Bearer ','')
      }else {
        token = teacherHeader.replace('Bearer ','')
      }
      const { id } = jwt.verify(token,process.env.JWT_SECRET)
      return id

    } catch (e) {
      throw new Error("Authentication failed!")
    }
  }

  if(required){
    throw new Error("Authentication required!")
  }

  return null
}

export default checkUserValidation
