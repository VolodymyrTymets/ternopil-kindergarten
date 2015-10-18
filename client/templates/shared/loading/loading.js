Template.Loading.rendered = function () {
    var message = '<p class="loading-message">'+ TAPi18n.__('loading') +'...</p>';
    var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';
    if ( ! Session.get('loadingSplash') ) {
        this.loading = window.pleaseWait({
            logo: '/images/Meteor-logo.png',
            backgroundColor: '#0384B5',
            loadingHtml: message + spinner
        });
        Session.set('loadingSplash', true); // just show loading splash once
    }
};

Template.Loading.destroyed = function () {
    if ( this.loading ) {
        this.loading.finish();
    }
};

