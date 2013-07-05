/*jslint node:true, nomen: true*/

'use strict';

var express = require('express'),
    yui = require('express-yui'),
    Locator = require('locator'),
    app = express();

app.yui.applyConfig({
    logInclude: {
        TestRunner: true
    }
});

app.set('view', app.yui.view({
    defaultBundle: 'skinbuilder'
}));

app.yui.debugMode();
app.yui.setCoreFromAppOrigin();

// serving static yui modules
app.use(yui['static']());
// serving assets
app.use('/assets', express['static'](__dirname + '/assets'));

app.get('/docs.html', yui.expose(), function (req, res, next) {
    res.render('docs', {});
});

app.get('/index.html', yui.expose(), function (req, res, next) {
    res.render('index', {});
});

app.get('/', yui.expose(), function (req, res, next) {
    res.render('index', {});
});

// locator initialiation
new Locator({
    buildDirectory: 'build'
})
    .plug(require('locator-handlebars').yui())
    .plug(app.yui.plugin({
        registerGroup: true,
        registerServerModules: true
    }))
    .parseBundle(__dirname, {}).then(function (have) {

        // listening for traffic only after locator finishes the walking process
        app.listen(3000, function () {
            console.log("Server listening on port 3000 in " + app.get('env') + " mode");

            var request = require("request"),
                libpath = require("path"),
                libfs = require("fs"),
                urls = [
                    'http://localhost:3000/docs.html',
                    'http://localhost:3000/index.html'
                ];

            // generating html file
            urls.forEach(function (url) {
                request({
                    uri: url,
                }, function(err, response, body) {
                    var file = libpath.join(__dirname, libpath.basename(url));
                    if (err) {
                        console.log('Error fetching: ' + url);
                        console.error(err);
                        process.exit(1);
                        return;
                    }
                    try {
                        libfs.writeFileSync(file, body);
                    } catch (e) {
                        console.log('Error writting: ' + file);
                        console.error(e);
                        console.error(e.stack);
                        process.exit(1);
                    }
                    console.warn('Writting: ' + file);
                });
            });

        });

    }, function (err) {
        console.error(err);
        console.error(err.stack);
    });
