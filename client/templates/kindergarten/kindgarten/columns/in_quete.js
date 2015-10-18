Template.InQueteColumn.helpers({
   'number': function () {
       var self = this;
       var index = 1;
       var i = 1;
       var kindergartenId =  Router.current().params._id;
       Bids.find({ kindergartenId: kindergartenId},
            {sort: {createdOn:1 }})
            .forEach(function (bids) {
                if(bids._id === self._id) index =i;
                i++;
            });
       return index;
   }
});