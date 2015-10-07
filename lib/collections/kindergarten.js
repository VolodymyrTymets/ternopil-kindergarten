Kindergartens = new Mongo.Collection('kindergartens');
Kindergartens.allow({
    insert: function () {
        return Admin();
    },
    update: function () {
        return Admin();
    },
    remove: function () {
        return Admin();
    }
})