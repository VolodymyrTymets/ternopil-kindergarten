Admin = function () {
    return Meteor.user()&& Meteor.user().username === 'admin'
}