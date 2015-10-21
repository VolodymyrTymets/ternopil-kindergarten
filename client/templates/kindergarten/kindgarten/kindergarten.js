Template.Kindergarten.helpers({
    'image': function () {
        var imageId  = this.titleImageId ? this.titleImageId :'';
        return Images.findOne({ _id: imageId });
    },
    'settings': function () {
        var self = this;
        return {
            collection: Bids.find({ kindergartenId: self._id }),
            rowsPerPage: 5,
            showFilter: true,
            fields: [
                { key: '_id', label:TAPi18n.__('inQuote'), tmpl: Template.InQueteColumn },
                { key: 'creationBy', label:TAPi18n.__('postedBy'), tmpl: Template.CreatedByColumn },
                { key: 'name', label: TAPi18n.__('name') },
                { key: 'surname', label: TAPi18n.__('surname') },
                { key: 'lastName', label: TAPi18n.__('last_name') },
                { key: 'phone', label: TAPi18n.__('phone') },
                { key: 'email', label: TAPi18n.__('email') },
                { key: 'address', label: TAPi18n.__('address') },
                { key: 'birthCertificateId', label:TAPi18n.__('files'), tmpl: Template.FilesColumn },
                { key: 'certificateId', label:TAPi18n.__('remove'), tmpl: Template.ActionColumn },
            ]
        }
    }
})