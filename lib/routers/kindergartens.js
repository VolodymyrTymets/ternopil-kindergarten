Router.route('kindergartens',{
    path:'/kindergartens/',
    template:'Kindergartens',
    waitOn:function () {
      return [this.subscribe('kindergartens', {}),
              this.subscribe('images',{}),
              this.subscribe('bids',{})];

    },
})