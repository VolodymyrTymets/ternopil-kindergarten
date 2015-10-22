Template.ActionColumn.helpers({
    'ownBit': function () {
        return  Admin() ||  Meteor.user() ? Meteor.user()._id === this.createdBy :  false
    }
});
Template.ActionColumn.events({
    'click button[data-action="remove-bid"]': function (e,tmp) {
        Meteor.call('removeBid',tmp.data._id, function (err,res) {
           if(!err)  sAlert.success(TAPi18n.__('removeSucess'));
        });
    }
});