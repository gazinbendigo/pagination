/**
 * Created by adm9360 on 18/11/2015.
 */


Template.environments.onCreated(function(){
    Meteor.subscribe('environments');
});

Template.environments.helpers({
    env: function()
    {
        return Environments.find().fetch();
    }
});
