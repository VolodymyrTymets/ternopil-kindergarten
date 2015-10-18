Bids = new Mongo.Collection('bids');

Bids.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Bids.set = function (obj,certificate,statement,birthCertificate,calb){
    if(certificate &&  statement && birthCertificate) {
        debugger
        Files.insert(certificate, function (err, fileObj) {
            if (!err)  obj.certificateId = fileObj._id;
            Files.insert(statement, function (err, fileObj) {
                if (!err)  obj.statementId = fileObj._id;
                Files.insert(birthCertificate, function (err, fileObj) {
                    if (!err)  obj.birthCertificateId = fileObj._id;
                    Meteor.call('saveBid', obj, function (err, res) {
                        calb();
                    });
                });
            });
        });
    }
};