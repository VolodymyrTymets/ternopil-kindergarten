AdminAuthorized = RouteController.extend({
    onBeforeAction: function () {
    if (Admin())
        this.next();
    else
        this.render('AccessForbidden');
    }
})