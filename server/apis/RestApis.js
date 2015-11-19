/**
 * Created by adm9360 on 19/11/2015.
 */

EmaGatewayAPI = {
    getEnvironments
};


function getEnvironments()
{
    return null;
}

function buildRequest(method, path, data) {
    return Meteor.wrapAsync((cb) => {
            HTTP.call(method,
            Meteor.settings.emaApplication.baseUrl + path,
            {
                requestOptions: {
                    form: data
                }
            },
            (err, res) => {
            cb(null, { err, data: res ? res.data : null });
             });
    })();
}