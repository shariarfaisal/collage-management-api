import admin from './queries/admin'
import department from './queries/department'
import teacher from './queries/teacher'
import student from './queries/student'
import session from './queries/session'
import semester from './queries/semester'
import bookList from './queries/bookList'
import routine from './queries/routine'
import dayInWeek from './queries/dayInWeek'
import book from './queries/book'
import classQuery from './queries/class'
import period from './queries/period'


const Query = {
  ...admin,
  ...department,
  ...student,
  ...semester,
  ...bookList,
  ...routine,
  ...dayInWeek,
  ...book,
  ...classQuery,
  ...period,
  // ...teacher
}

export default Query
