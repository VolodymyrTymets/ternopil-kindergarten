Router.route('kindergarten',{
    path:'/kindergarten/:_id?',
    template:'Kindergarten',
    waitOn:function () {
       return [ this.subscribe('kindergartens', { _id: this.params._id }),
                this.subscribe('images',{}),
                this.subscribe('bids',{}),
                this.subscribe('files',{})]
    },
    data:function () {
        return Kindergartens.findOne({_id: this.params._id})
    }
})