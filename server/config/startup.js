Meteor.startup(function () {
    if(!Meteor.users.findOne()){
        Accounts.createUser({
            username:'admin',
            email:'admin@admin.com',
            password:'admin'
        })
    }

})