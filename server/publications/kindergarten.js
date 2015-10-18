Meteor.publish('kindergartens', function (filter,opts){
        return Kindergartens.find(filter,opts);
})