Router.route('kindergartenEditor',{
    path:'/kindergarten/edit/:_id?',
    template:'KindergartenEditor',
    controller:AdminAuthorized,
    waitOn:function () {
       return Meteor.subscribe('singleKindergarten',  this.params._id);
    },
    data:function () {
        return this.params._id ==='new' ?  {} :  Kindergartens.findOne({_id: this.params._id})
    }
})