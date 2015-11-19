Pages = new Meteor.Pagination(Items, {
    route: "/hublogs/",
    perPage: 20,
    router: "iron-router",
    routerTemplate: "hubLogs",
    routerLayout: "hubLogsLayout",
    sort: {
        id: 1
    },
    templateName: "hubLogs"
});


Router.configure({
    layoutTemplate: 'baseLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {return Meteor.subscribe('items');}
});

Router.route('register');

Router.route('slogans');



