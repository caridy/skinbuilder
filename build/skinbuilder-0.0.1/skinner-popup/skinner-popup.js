YUI.add('skinner-popup', function (Y) {

    // getting controls ready
    var body = Y.one('body'),
        mega = Y.Node.create('<div class="mega"></div>'),
        container = Y.Node.create('<ul id="widget-container"></ul>');

    Y.Get.css([
        "https://yui-s.yahooapis.com/3.9.1/build/cssnormalize/cssnormalize-min.css",
        "https://yui-s.yahooapis.com/3.9.1/build/cssgrids/grids-min.css",
        "/assets/styles.css"
    ]);

    mega.appendTo(body);
    mega.setContent(Y.Template._cache["skinbuilder/partials/controls"]({}));

    container.appendTo(mega);

    // getting skinner ready
    Y.use('skinner', function (Y) {
        YUI({
            doc: Y.config.win.parent.document,
            win: Y.config.win.parent
        }).use('node', 'io', function (outerY) {
            var originalLink = outerY.one('#skinner-ouput');

            function updateStyle (style) {
                outerY.one('#skinner-ouput')
                    .replace(outerY.Node.create('<style id="skinner-ouput">' + style + '</style>'));
            }

            if (originalLink) {
                // loading the content of the original link
                outerY.io(originalLink.getAttribute('href'), {
                    on: {
                        complete: function(id, o) {
                            // inserting the content of the link as an style tag
                            // that works better for the skinner
                            updateStyle(o.responseText);
                            var x = o.responseText.indexOf('#skinbuilder:state:begin#'),
                                y = o.responseText.indexOf('#skinbuilder:state:end#'),
                                config;

                            if (x > 0 && y > 0) {
                                console.log(o.responseText.substring(x + 25, y));
                                try {
                                    config = Y.JSON.parse(o.responseText.substring(x + 25, y));
                                } catch (e) {
                                    console.log('Error trying to parse: ' + o.responseText);
                                }
                            }

                            outerY.one('[name=skinbuilder]').setStyles({
                                height: '300px',
                                width: '100%',
                                top: 0,
                                left: 0,
                                right: 0,
                                border: "5px solid",
                                margin: 0,
                                padding: 0
                            });
                            outerY.one('body').setStyle('margin-top', '310px');

                            Y.Skinner.init(config || {});
                        }
                    }
                });
                // listening for changes from within the skinner
                Y.on('updateStyle', function (e) {
                    updateStyle(e.blob);
                });
            }
        });
    });
}, '@VERSION@', {"requires": ["node", "skinbuilder-partials-pure", "skinbuilder-partials-controls"]});
