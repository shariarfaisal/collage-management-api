const Subscription = {
  department:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.department(null,info)
    }
  },
  student:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.student(null,info)
    }
  },
  teacher:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.teacher(null,info)
    }
  },
  session:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.session(null,info)
    }
  },
  semester:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.semester(null,info)
    }
  },
  routine:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.routine(null,info)
    }
  },
  dayInWeek:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.dayInWeek(null,info)
    }
  },
  period:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.period(null,info)
    }
  },
  class:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.class(null,info)
    }
  },
  bookList:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.bookList(null,info)
    }
  },
  book:{
    subscribe(parent,args,{ prisma, req },info){
      return prisma.subscription.book(null,info)
    }
  }
}

export default Subscription
