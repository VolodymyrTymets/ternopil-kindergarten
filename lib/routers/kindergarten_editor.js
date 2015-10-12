Router.route('kindergartenEditor',{
    path:'/kindergarten/edit/:_id?',
    template:'KindergartenEditor',
    controller:Authorized,
    onBeforeAction:function () {
        this.subscribe('kindergartens', { _id: this.params._id });
        this.next();
    },
    data:function () {
        return this.params._id ==='new' ?  null :  Kindergartens.findOne({_id: this.params._id})
    }
})