/**
 * Created by adm9360 on 19/11/2015.
 */

EmaGatewayAPI = {
    getEnvironments
};


function getEnvironments()
{
    return build200Request('GET', 'ema/env');
}

function build200Request() {
    let resp = buildRequest.apply(this, arguments);
    console.log(resp.statusCode);
    if(resp.data.length <= 0){//statusCode !== 200) {
        throw new Meteor.Error('Ema-gateway-req', 'Error calling EMA gateway', resp.data);
    }

    return resp.data;
}

//function buildRequest(method, path, data, query, callback) {
//    try {
//        return HTTP.call(method,
//            Meteor.settings.paymentGateway.baseUrl + path,
//            {
//                headers: Meteor.settings.emaApplication.authHeaders,
//                data: data,
//                params: query
//            },
//            callback);
//    } catch(e) {
//        throw new Meteor.Error("payment-gateway-comms", "Error communicating with payment gateway");
//    }
//}

Meteor.wrapAsync(function(cb) {
    HTTP.call})

function buildRequest(method, path, data) {
    return Meteor.wrapAsync((cb) => {
            HTTP.call(method,
            Meteor.settings.emaApplication.baseUrl + path,
            {
                npmRequestOptions: {
                    form: data
                }
            },
            (err, res) => {
            cb(null, { err, data: res ? res.data : null });
        });
    })();
}