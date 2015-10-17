Kindergartens = new Mongo.Collection('kindergartens');
Kindergartens.allow({
    insert: function () {
        return Admin();
    },
    update: function () {
        return Admin();
    },
    remove: function () {
        return Admin();
    }
});

Kindergartens.set = function (obj,titleImage,calb){
    if(Kindergartens.findOne()) {
        obj._id = Kindergartens.findOne()._id;
        obj.titleImageId = Kindergartens.findOne().titleImageId;
    }
    if(obj._id){
        if(titleImage) {
            Images.remove({_id: obj.titleImageId}, function (err, res) {
                Images.insert(titleImage, function (err, fileObj) {
                    if (!err)  obj.titleImageId = fileObj._id;
                    Meteor.call('saveKindergarten', obj, function (err, res) {
                        calb();
                    });
                });
            });
        }else{
            Meteor.call('saveKindergarten', obj, function (err, res) {
                calb();
            });
        }
    } else{
        Images.insert(titleImage, function (err, fileObj) {
            if(!err)  obj.titleImageId = fileObj._id;
            Meteor.call('saveKindergarten',obj , function (err,res) {
                calb();
            });
        });
    }
}