Template.KindergartenEditor.helpers({
    'requireName':function () {
        return !Template.instance()._requireName.get();
    }
});
Template.KindergartenEditor.onCreated(function () {
    this._requireName = new  Blaze.ReactiveVar(true);
    this._editMode = this.data !== null ? true : false;

});
Template.KindergartenEditor.onRendered(function () {
    $('textarea[data-name="description"]').editable({inlineMode: false});
});
Template.KindergartenEditor.events({
    'submit form':function (e,tmp) {
        e.preventDefault();
        var name = tmp.$('input[data-name="name"]').val();
        if(!name)  return;
        var descriprion = tmp.$('textarea[data-name="description"]').val().replace(/\s+/g, '');
        var $title = document.getElementById('title-file');
        var titleImage  = $title && $title.files.length > 0 ? $title.files[0] : null;
        var fsFile = new FS.File(titleImage);
        debugger;
        var data = {
            name:name,
            description:descriprion
        };
        if(tmp._editMode){
            Kindergartens.update({_id:tmp.data._id},{ $set: data });
        }else{
            Images.insert(fsFile, function (err, fileObj) {
                if(!err)  data.titleImageId = fileObj._id;
                Meteor.call('insertKindergarte',data , function (err,res) {
                    Router.go('/');
                })
            });

        }
    },
    'change .myFileInput': function(e, tmp) {
        debugger
        //FS.Utility.eachFile(event, function(file) {
        //    Images.insert(file, function (err, fileObj) {
        //        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        //    });
        //});
    },
    'blur input[data-name="name"]': function (e,tmp){
        if (e.target.value === '') tmp._requireName.set(false);
        else tmp._requireName.set(true);

    }
});
