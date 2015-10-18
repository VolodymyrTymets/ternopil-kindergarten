Template.ActionColumn.helpers({
    'ownBit': function () {
        debugger
        return  Admin() ||  Meteor.user() ? Meteor.user()._id === this.createdBy :  false
    }
});
Template.ActionColumn.events({
    'click button[data-action="remove-bid"]': function (e,tmp) {
        debugger
        Meteor.call('removeBid',tmp.data._id, function (err,res) {
           if(!err) alert('was removed');
        });
    }
});