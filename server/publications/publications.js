/**
 * Created by holly on 12/10/2015.
 */

/**
 * This will eventually change to only publish what the users need to see
 */

Meteor.publish('applications', function() {
    return Applications.find();
});

Meteor.publish('environments', function() {
    return Environments.find();
    return this.ready();
})

//Meteor.publish('hubLogs', function(){
//   return HubLogs.find();
//});

Meteor.publish('items', function(){
    return Items.find();
});

Meteor.publish('hublogsSlogans', function() {
   return HublogsSlogans.find();
});