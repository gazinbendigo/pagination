/**
 * Created by adm9360 on 18/11/2015.
 */


Template.environments.helpers({
    env: function()
    {
        Environments.loadFromAPI();
        console.log('env');
        return Environments.find().fetch();
    }
});
