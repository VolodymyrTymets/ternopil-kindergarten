Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',
    yieldTemplates:{
        NavBar: {
            to: 'header'
        }
    }
})