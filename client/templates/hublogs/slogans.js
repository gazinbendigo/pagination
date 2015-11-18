/**
 * Created by holly on 12/11/2015.
 */

Template.slogans.helpers({
   slogan: function() {
       var numberOfSlogans = HublogsSlogans.find().count();
       var sloganId = Math.floor((Math.random() * numberOfSlogans) + 1);
       //return HublogsSlogans.find();
       return HublogsSlogans.find({id:sloganId}, {"description": sloganId, "_id":0});

   }
});

Template.slogans.onCreated(function(){
    Meteor.subscribe('hublogsSlogans');
});