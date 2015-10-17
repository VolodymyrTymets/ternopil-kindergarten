Router.route('kindergartenEditor',{
    path:'/kindergarten/edit/:_id?',
    template:'KindergartenEditor',
    controller:Authorized,
    waitOn:function () {
        this.subscribe('kindergartens', { _id: this.params._id });
    },
    data:function () {
        return this.params._id ==='new' ?  null :  Kindergartens.findOne({_id: this.params._id})
    }
})