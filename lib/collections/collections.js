/**
 * Created by adm9360 on 11/11/2015.
 */

Items = new Mongo.Collection("items");

Applications = new Mongo.Collection('applications');

Environments = new Meteor.Collection('environments');
    //Meteor.call("getEnvironments", function(error, results){
    //console.log(results.content)
//});

HublogsSlogans = new Mongo.Collection('hublogsSlogans')