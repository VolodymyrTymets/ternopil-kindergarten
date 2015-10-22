Meteor.publishComposite('singleUser',  (id) => {
    return {
        find: function () {
            return Meteor.users.find({_id:id});

        },
        children: [
            {
                find: function (user) {
                    return Bids.find({createdBy:user._id});
                },
                children: [
                    {
                        find: function (bid) {
                             return Kindergartens.find({_id:bid.kindergartenId});
                        }
                    }
                ]
            }
        ]

    }
});
