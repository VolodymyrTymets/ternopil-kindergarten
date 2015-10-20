Meteor.startup(function () {
    TAPi18n.setLanguage('ua');
    accountsUIBootstrap3.setLanguage('ua');
    sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: false,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }

        beep: false
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
    });
})