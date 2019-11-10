import { extractFragmentReplacements } from 'prisma-binding'
import Query from './Query'
import Mutation from './Mutation'
import Admin from './types/Admin'
import Department from './types/Department'
import Student from './types/Student'
import Teacher from './types/Teacher'
import Semester from './types/Semester'
import Session from './types/Session'
import ClassType from './types/Class'
import Period from './types/Period'
import Book from './types/Book'
import BookList from './types/BookList'
import Routine from './types/Routine'
import Info from './types/Info'
import Subscription from './Subscription'

const resolvers = {
  Query,
  Mutation,
  Admin,
  Department,
  Student,
  Semester,
  Session,
  Class: ClassType,
  Period,
  Book,
  BookList,
  Routine,
  Info,
  Subscription
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)

export default resolvers
