Router.route('personalBids',{
    path:'/myBids',
    template:'PersonalBids',
    controller:Authorized,
    waitOn:function () {
        return Meteor.subscribe('singleUser', Meteor.user() ? Meteor.user()._id  : undefined);
    }
});