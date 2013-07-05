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
app.set('port', process.env.PORT || 8666);

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
        app.listen(app.get('port'), function () {
            console.log("Server listening on port " +
                app.get('port') + " in " + app.get('env') + " mode");
        });

    }, function (err) {
        console.error(err);
        console.error(err.stack);
    });
