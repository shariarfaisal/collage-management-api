import jwt from 'jsonwebtoken'

const getStudentId = (req,required=true) => {
  const header = req.request ? req.request.headers.student : req.connection.context.student

  if(header){
    try {
      const token = header.replace('Bearer ','')
      const { id } = jwt.verify(token,'secret')
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

export default getStudentId
