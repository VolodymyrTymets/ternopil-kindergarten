Meteor.methods({
    'saveBid': function (obj) {
        if(!Bids.findOne({_id:obj._id})) {
            obj.createdOn = new Date();
            obj.createdBy = Meteor.user()._id;
            Bids.insert(obj);
        }else{
            Bids.update({_id:obj._id},{ $set: obj });
        }
    },
    'removeBid': function (id) {
       var bid = Bids.findOne( { _id:id } );
       if(Admin() ||  (Meteor.user() &&  Meteor.user()._id === bid.createdBy)) {
           Files.remove({_id: bid.certificateId});
           Files.remove({_id: bid.birthCertificateId});
           Files.remove({_id: bid.statementId})
           Bids.remove({_id: id});
           return bid;
       }
       return null;
    }
})