Router.route('kindergartens',{
    path:'/kindergartens/',
    template:'Kindergartens',
    waitOn:function () {
      return Meteor.subscribe('kindergartens', {});
    }
})