Router.route('kindergarten',{
    path:'/kindergarten/:_id?',
    template:'Kindergarten',
    onBeforeAction:function () {
        this.subscribe('kindergartens', { _id: this.params._id });
        this.next();
    },
    data:function () {
        return Kindergartens.findOne({_id: this.params._id})
    }
})