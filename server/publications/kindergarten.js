Meteor.publishComposite('singleKindergarten', function (kindergartenId) {
        return {
                find: function () {
                        return Kindergartens.find({_id:kindergartenId});

                },
                children: [
                        {
                                find: function (kindergarten) {
                                        return Images.find({_id:kindergarten.titleImageId});
                                }
                        },
                        {
                                find: function (kindergarten) {
                                        return Bids.find({kindergartenId:kindergarten._id});
                                },
                                children: [
                                        {
                                                find: function (bid) {
                                                        return Files.find({_id:bid.certificateFileId});
                                                }
                                        },
                                        {
                                                find: function (bid) {
                                                        return Files.find({_id:bid.statementFileId});
                                                }
                                        },
                                        {
                                                find: function (bid) {
                                                        return Files.find({_id:bid.birthCertificateFileId});
                                                }
                                        },
                                        {
                                                find: function (bid) {
                                                        return Meteor.users.find({_id:bid.createdBy},{fields :{services:0}});
                                                }
                                        }
                                    ]
                        }

                ]
        }
});
Meteor.publishComposite('kindergartens',  {
        find: function () {
                return Kindergartens.find({});

        },
        children: [
                {
                        find: function (kindergarten) {
                                return Images.find({_id:kindergarten.titleImageId});
                        }
                },
                {
                        find: function (kindergarten) {
                                return Bids.find({kindergartenId:kindergarten._id});
                        }
                }
        ]
})