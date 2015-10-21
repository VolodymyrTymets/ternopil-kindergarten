Meteor.publish("bids", function(filter,options) {
    return Bids.find(filter, options);
});
