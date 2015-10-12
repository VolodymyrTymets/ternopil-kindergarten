Template.kindergartens.onCreated(function () {
    Meteor.subscribe('images',{});
});
Template.kindergartens.helpers({
    'images': function () {
        return Images.find();
    }
})