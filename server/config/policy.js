//BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.allowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
    '*.googleapis.com',
    '*.gstatic.com',
    'ajax.googleapis.com',
    '*.bootstrapcdn.com',
    '*.babl-sandpit.mybluemix.net',
    '*.c.bendigobank.com.au'
];

_.each(trusted, function(origin) {
    origin = "https://" + origin;
    BrowserPolicy.content.allowOriginForAll(origin);
});

BrowserPolicy.framing.allowAll();