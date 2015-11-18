/**
 * Created by holly on 12/11/2015.
 */

Template.hublogsFilterPanel.onCreated(function(){
   Meteor.subscribe('applications');
});

Template.hublogsFilterPanel.helpers({
    applications: function() {
        //fetch turns the retrieved data into an array
        var allApplications = [];
        allApplications = Applications.find().fetch();
        var rows = [];
        var noCols = 2;
        var count = 0;
        while(allApplications.length > noCols)
        {
            count = allApplications.length;
            if(count == 1)
            {
                rows.push({row: allApplications.slice(0, 1)});
                allApplications = allApplications.slice(1);
            }
            else
            {
                rows.push({row: allApplications.slice(0, noCols)});
                allApplications = allApplications.slice(noCols);
            }

        }
        rows.push({row: allApplications});
        return rows;
    }
});