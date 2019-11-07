import Admin from './mutations/Admin'
import Department from './mutations/Department'
import Book from './mutations/Book'
import BookList from './mutations/BookList'
import ClassMutation from './mutations/Class'
import Period from './mutations/Period'
import Routine from './mutations/Routine'
import Semester from './mutations/Semester'
import Session from './mutations/Session'
import Student from './mutations/Student'
import Teacher from './mutations/Teacher'
import DayInWeek from './mutations/DayInWeek'

const Mutation = {
  ...Admin,
  ...Department,
  ...Student,
  ...Book,
  ...BookList,
  ...ClassMutation,
  ...Period,
  ...Teacher,
  ...Session,
  ...Semester,
  ...Routine,
  ...DayInWeek
}

export default Mutation
