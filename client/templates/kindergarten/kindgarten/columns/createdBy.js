Template.CreatedByColumn.helpers({
    'username': function () {
        var user = Meteor.users.findOne({_id: this.createdBy });
        return   user.username ? user.username : user.profile.name;
    },
    'photo': function () {
        var user = Meteor.users.findOne({_id: this.createdBy });
        return   user.profile.photo ? user.profile.photo : '/images/noavatar.png';
    }

});