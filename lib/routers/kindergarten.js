Router.route('kindergarten',{
    path:'/kindergarten/:_id?',
    template:'Kindergarten',
    waitOn:function () {
       return  Meteor.subscribe('singleKindergarten',  this.params._id );
    },
    data:function () {
        return Kindergartens.findOne({_id: this.params._id});
    }
})