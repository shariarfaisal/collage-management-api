import jwt from 'jsonwebtoken'

const getAdminId = (req,required=true) => {
  const header = req.request ? req.request.headers.admin : req.connection.context.admin 

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

export default getAdminId
