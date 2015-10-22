Template.PersonalBids.helpers({
    'name': function () {
        return Template.instance()._persone.getName();
    },
    'bids':function() {
        return Template.instance()._persone.getBids();
    },
    'spanClass':function () {
        var order =Template.instance()._persone.order.get();
        return order === '1' ? 'glyphicon-arrow-down' : 'glyphicon-arrow-up';
    },
    'kindergartenName':function (id) {
        return Template.instance()._persone.getKindergarten(id).name;
    }
});
Template.PersonalBids.onCreated(function () {
     this._persone = new Persone(Meteor.user());
});
Template.PersonalBids.events({
    'click button[data-action="remove-bid"]': function (e,tmp) {
        Meteor.call('removeBid',e.target.attributes['data-id'].value, function (err,res) {
            if(!err) sAlert.success(TAPi18n.__('removeSucess'));
        });
    },
    'click a[data-action="sort"]': function (e,tmp) {
       let order = e.target.attributes['data-order'].value;
       tmp._persone.bidsSortBy( e.target.attributes['data-name'].value,order);
       e.target.attributes['data-order'].value = order === '1' ? -1 : 1;
    }

});

class Persone {
    constructor(user){
        this.name = user.profile.name;
        this._id = user._id;
        this.sortBy = new Blaze.ReactiveVar({name:1});
        this.order = new Blaze.ReactiveVar('1');
    }
    getName(){
        return this.name;
    }
    getBids(){
        return  Bids.find({createdBy:this._id},{sort:this.sortBy.get()});
    }
    getKindergarten(id){
        return   Kindergartens.findOne({ _id:id });
    }
    bidsSortBy(param,order){
        var sortBy = {};
        sortBy[param] = order;
        this.order.set(order);
        this.sortBy.set(sortBy);
    }
}