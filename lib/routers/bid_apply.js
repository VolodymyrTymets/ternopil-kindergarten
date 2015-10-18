Router.route('bidApply',{
    path:'/bid/apply/:_kindergartenId',
    template:'BidApply',
    controller:Authorized,
    onBeforeAction: function () {
        if (!Admin())
            this.next();
        else
            this.render('AccessForbidden');
    }
});
