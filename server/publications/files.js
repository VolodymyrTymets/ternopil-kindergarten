Meteor.publish("files", function(filter,options) {
    return Files.find(filter, options);
});