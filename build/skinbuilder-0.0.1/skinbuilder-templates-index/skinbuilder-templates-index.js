YUI.add('skinbuilder-templates-index', function (Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this, functionType="function";


  buffer += "<!doctype html>\n<html lang=\"en\" class='page-background'>\n<head>\n<meta charset=\"utf-8\">\n<title>Skin Builder</title>\n    <link rel=\"icon\" type=\"image/png\" href=\"/assets/images/favicon.png\">\n    <link rel=\"stylesheet\" href=\"https://yui-s.yahooapis.com/3.9.1/build/cssnormalize/cssnormalize-min.css\">\n    <link rel=\"stylesheet\" href=\"https://yui-s.yahooapis.com/3.9.1/build/cssgrids/grids-min.css\">\n    <link rel=\"stylesheet\" href=\"/assets/styles.css\">\n</head>\n<body class=\"yui3-skin-mine pure-skin-mine yui3-loading\">\n\n    <div class=\"splash hero\">\n        <h1>YUI Skin Builder</h1>\n        <h2>An App for Generating Custom Skin CSS</h2>\n        <div id=\"spinner\"></div>\n    </div>\n\n    <!-- Mega container div to hide contents of page until done loading -->\n    <div class=\"mega\">\n\n        <div id=\"log\" class=\"yui3-skin-sam\"></div><!-- console log for functional testing feedback -->\n\n        <div id=\"headerMenu\">\n            <ul>\n                <li><a class=\"heading-main-ui\">YUI Skin Builder</a></li>\n                <li><a class=\"tag-line\">An App for Generating Custom Skin CSS</a></li>\n                <li><a href=\"docs.html\">Documentation</a></li>\n                <li><a href=\"https://github.com/yui/skinbuilder/issues\">File an issue</a></li>\n            </ul>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials.controls, 'controls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <!-- this UL is the container for all previewed widgets -->\n        <ul id=\"widget-container\">\n            ";
  stack1 = self.invokePartial(partials.widgets, 'widgets', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = self.invokePartial(partials.pure, 'pure', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n        <!-- end of container for widget previews -->\n\n    </div>\n    <!-- Close Mega container div to hide contents of page until done loading -->\n\n    <script>\n    ";
  if (stack1 = helpers.state) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.state; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    app.yui.use('skinner', function (Y) {\n        Y.Skinner.runUnitTests();\n        Y.Skinner.initFromQuery();\n    });\n    </script>\n\n</body>\n</html>\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each(["controls","widgets","pure"], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/index"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, '@VERSION@', {
    "requires": [
        "handlebars-base",
        "skinbuilder-partials-controls",
        "skinbuilder-partials-widgets",
        "skinbuilder-partials-pure"
    ]
});
