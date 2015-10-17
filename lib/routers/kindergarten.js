Router.route('kindergarten',{
    path:'/kindergarten/:_id?',
    template:'Kindergarten',
    waitOn:function () {
        this.subscribe('kindergartens', { _id: this.params._id });
        this.subscribe('images',{});
    },
    data:function () {
        return Kindergartens.findOne({_id: this.params._id})
    }
})