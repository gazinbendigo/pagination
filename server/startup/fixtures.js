/**
 * Created by holly on 12/10/2015.
 */

if(Applications.find().count() === 0)
{
    Applications.insert({
        id: 1,
        name: 'HUB',
        description: 'hub'
    });

    Applications.insert({
        id: 2,
        name: 'BDS',
        description: 'bds'
    });

    Applications.insert({
        id: 3,
        name: 'CRS',
        description: 'crs'
    });

    Applications.insert({
        id: 4,
        name: 'IB',
        description: 'ebanking'
    });

    Applications.insert({
        id: 5,
        name: 'PB',
        description: 'Phone Banking'
    });

    Applications.insert({
        id: 6,
        name: 'BER',
        description: 'ber'
    });

    Applications.insert({
        id: 7,
        name: 'CRD',
        description: 'credit app'
    });

    Applications.insert({
        id: 8,
        name: 'XYZ',
        description: 'The Alphabet'
    });

    Applications.insert({
        id: 9,
        name: 'LINX',
        description: 'Smells nice'
    });

    Applications.insert({
        id: 10,
        name: 'RFS',
        description: 'rfs'
    });

    Applications.insert({
        id: 11,
        name: 'PETS',
        description: 'pets'
    });

    Applications.insert({
        id: 12,
        name: 'ACS',
        description: 'Acs'
    });

    Applications.insert({
        id: 13,
        name: 'Odd',
        description: 'Bod'
    });
}


if(Environments.find().count() === 0)
{
    //Environments.loadFromAPI();
    var env = EmaGatewayAPI.getEnvironments();
    _.each(env, function(environment){
        Environments.insert(environment);
    });
}

if(HublogsSlogans.find().count() === 0)
{
    HublogsSlogans.insert({
        id: 1,
        description: 'Searches are on us'
    });

    HublogsSlogans.insert({
        id: 2,
        description: 'Your\'ve won a power search'
    });
    HublogsSlogans.insert({
        id: 3,
        description: 'Let us find it for you'
    });
}


if(Items.find().count() === 0)
{
    // adds an index to make sorting by the 'id' property quicker
    Items._ensureIndex({
        id: 1
    });

    // adds 1000 documents to 'items' collection
    for (var i = 1; i < 1001; i++) {
        Items.insert({
            id: i,
            text: 'Hello from item #' + i + '!'
        });
    }
}
