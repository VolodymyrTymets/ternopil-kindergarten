Meteor.methods({
  'insertKindergarte': function (obj) {
      return    Kindergartens.insert(obj);
  }
})