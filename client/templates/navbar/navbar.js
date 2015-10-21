Template.NavBar.events({
    'click a[data-action="change-language"]': function(e,tmp){
        TAPi18n.setLanguage(e.target.attributes['data-name'].nodeValue);
        accountsUIBootstrap3.setLanguage(e.target.attributes['data-name'].nodeValue);
        $.material.input();
    }
});
Template.NavBar.helpers({
    'user': function () {
        return Meteor.user();
    }
})