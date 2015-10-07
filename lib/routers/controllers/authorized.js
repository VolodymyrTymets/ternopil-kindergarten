Authorized = RouteController.extend({
    onBeforeAction: function () {
    if (Meteor.userId())
        this.next();
    else
        this.render('AccessDenied');
    }
})