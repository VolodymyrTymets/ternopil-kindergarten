Template.BidApply.events({
    'submit form':function (e,tmp) {
        e.preventDefault();
        var name = tmp.$('input[data-name="name"]').val();
        var surname = tmp.$('input[data-name="surname"]').val();
        var lastName= tmp.$('input[data-name="last-name"]').val();
        var email= tmp.$('input[data-name="email"]').val();
        var phone= tmp.$('input[data-name="phone"]').val();
        var address= tmp.$('input[data-name="address"]').val();

        var  certificate = document.getElementById('certificate');
        var  statement = document.getElementById('statement');
        var  birthCertificate = document.getElementById('birth-certificate');

        var  certificateFile = certificate && certificate.files.length > 0 ? statement.files[0] : null;
        var  statementFile = statement && statement.files.length > 0 ? statement.files[0] : null;
        var  birthCertificateFile = birthCertificate && birthCertificate.files.length > 0 ? birthCertificate.files[0] : null;

        var data = {
            name:name,
            surname:surname,
            lastName:lastName,
            email:email,
            phone:phone,
            address:address,
            kindergartenId:Router.current().params._kindergartenId
        };
        Bids.set(data,certificateFile,statementFile,birthCertificateFile,function (){
            Router.go('/');
        });
    }
});
Template.BidApply.helpers({
    'canApply':function () {
        return Bids.find({createdOn:Meteor.user()._id}).count() < 5;
    }
});
Template.BidApply.onRendered(function () {
    $.material.input();
});