Meteor.methods({
  'saveKindergarten': function (obj,titleImage) {
      if(!Kindergartens.findOne({_id:obj._id})) {
          Kindergartens.insert(obj);
      }else{
         Kindergartens.update({_id:obj._id},{ $set: obj });
      }
  }
})