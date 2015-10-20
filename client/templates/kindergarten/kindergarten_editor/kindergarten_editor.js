Template.KindergartenEditor.helpers({
    'requireName':function () {
        return !Template.instance()._requireName.get();
    }
});
Template.KindergartenEditor.onCreated(function () {
    this._requireName = new  Blaze.ReactiveVar(true);
    this._editMode = this.data !== null ? true : false;

});
Template.KindergartenEditor.events({
    'submit form':function (e,tmp) {
        e.preventDefault();
        var name = tmp.$('input[data-name="name"]').val();
        if(!name)  return;
        var descriprion = tmp.$('textarea[data-name="description"]').val().replace(/\s+/g, '');
        var $title = document.getElementById('title-file');
        var titleImage  = $title && $title.files.length > 0 ? $title.files[0] : null;

        var data = {
            name:name,
            description:descriprion
        };
        Kindergartens.set(data,titleImage,function (){
            Router.go('/');
        });
    },
    'blur input[data-name="name"]': function (e,tmp){
        if (e.target.value === '') tmp._requireName.set(false);
        else tmp._requireName.set(true);

    }
});
Template.KindergartenEditor.onRendered(function () {
    $('textarea[data-name="description"]').editable({inlineMode: false});
});
Template.KindergartenEditor.onRendered(function () {
    $.material.input();
});
