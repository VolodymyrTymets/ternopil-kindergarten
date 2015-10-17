Template.KindergartenItem.events({
    'click a[data-action="remove"]': function (e, tmp) {
        e.preventDefault();
        if(confirm(TAPi18n.__('remove_message'))){
            Kindergartens.remove({ _id: tmp.data._id});
        }
    }
});
Template.KindergartenItem.helpers({
    'image': function () {
        debugger
        var imageId  = this.titleImageId ? this.titleImageId :'';
        return Images.findOne({ _id: imageId });
    }
});

Template.KindergartenItem.onRendered(function () {
    debugger
})