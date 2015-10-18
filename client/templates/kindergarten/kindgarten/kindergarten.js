Template.Kindergarten.helpers({
    'image': function () {
        var imageId  = this.titleImageId ? this.titleImageId :'';
        return Images.findOne({ _id: imageId });
    },
    'settings': function () {
        var self = this;
        return {
            collection: Bids.find({ kindergartenId: self._id }),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: '_id', label:TAPi18n.__('inQuete'), tmpl: Template.InQueteColumn },
                { key: 'name', label: TAPi18n.__('name') },
                { key: 'surname', label: TAPi18n.__('surname') },
                { key: 'lastName', label: TAPi18n.__('lastName') },
                { key: 'phone', label: TAPi18n.__('phone') },
                { key: 'email', label: TAPi18n.__('email') },
                { key: 'address', label: TAPi18n.__('address') },
                { key: 'birthCertificateId', label:TAPi18n.__('files'), tmpl: Template.FilesColumn },
                { key: 'certificateId', label:TAPi18n.__('remove'), tmpl: Template.ActionColumn },
            ]
        }
    }
})