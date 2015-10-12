Pages = new Meteor.Pagination(Kindergartens,{
    router: "iron-router",
    homeRoute: "/",
    route: "/",
    routerTemplate: "Kindergartens",
    routerLayout: "Layout",
    itemTemplate: "KindergartenItem",
    perPage: 5,
    sort: {
        name: 1
    }
})