/**
 * Created by adm9360 on 11/11/2015.
 */

Items = new Mongo.Collection("items");

Applications = new Mongo.Collection('applications');

Environments = new Meteor.Collection('environments');
    //Meteor.call("getEnvironments", function(error, results){
    //console.log(results.content)
//});

Environments.loading = true;

Environments.loadFromAPI = function() {

   //var env = buildRequest("GET", "")
    //var response = Meteor.wrapAsync(HTTP.call("GET", "http://localhost:10010/ema/env"));//, function(error, result){
    //_.each(response.data, function(environment) {
    //    Environments.insert(environment);
    //});
};

Environments.loading = false;


//    = function() {
//    Environments.loading = true;
//    //Do get from api
//
//       var response = HTTP.call("GET", "http://localhost:10010/ema/env", function(error, result){
//       if(!error)
//       {
//           return result;
//       }
//    });
//    _.each(response.data, function(environment){Environments.insert(environment);})
//    //var response = Meteor.wrapAsync(apiCall)("http://localhost:10010/ema/env");
//    // _.each(result.data, function(environment) {Environments.insert(environment);}
//    Environments.loading = false;
//}

HublogsSlogans = new Mongo.Collection('hublogsSlogans');

