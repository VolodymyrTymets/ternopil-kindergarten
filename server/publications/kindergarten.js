Meteor.publish('kindergartens', function (opts){
        return Kindergartens.find(opts)
})