Template.FilesColumn.helpers({
    'certificate': function () {
        return Files.findOne({_id: this.certificateId });
    },
    'birthCertificate': function () {
        return Files.findOne({ _id: this.birthCertificateId });
    },
    'statement': function () {
        return Files.findOne({ _id: this.statementId });
    }
})