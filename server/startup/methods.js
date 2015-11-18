/**
 * Created by adm9360 on 18/11/2015.
 */

if(Meteor.isServer)
{
    Meteor.methods({
        'getEnvironments': function() {
            this.unblock();
            Meteor.setTimeout(function(){
                return Meteor.http.call("GET", "http://localhost:10010/ema/env", function(error, result){
                    if(error)
                    {
                        console.log('Error')
                    }
                    else
                    {
                        return(JSON.parse(result.content));
                    }
                });
            }, 200);
        }
    });
}
