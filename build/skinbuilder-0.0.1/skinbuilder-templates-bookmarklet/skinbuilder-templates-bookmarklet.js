YUI.add('skinbuilder-templates-bookmarklet', function (Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<!doctype html>\n<html lang=\"en\" class='page-background'>\n<head>\n    <meta charset=\"utf-8\">\n    <title>Skin Builder Bookmarklet</title>\n    <link rel=\"stylesheet\" href=\"/assets/bookmarklet-demo.css\" id=\"skinner-ouput\">\n</head>\n<body class=\"pure-skin-mine\">\n\n    <p>\n    Step by step to inject Skin Builder in any page:\n    </p>\n    <ol>\n        <li>Bookmark the <a id=\"bookmarklet\" href=\"#\">Skin Builder</a> link by dragging and dropping the link into the browser bookmarks bar.</li>\n        <li>Open any page and click on the bookmark to inject Skin Builder.</li>\n    </ol>\n\n    <ul id=\"widget-container\">\n        ";
  stack1 = self.invokePartial(partials.pure, 'pure', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    <script>\n    (function() {\n        function inject(d, w) {\n            var ie = w.navigator.userAgent.match(/MSIE\\s/),\n                i = d.createElement(\"iframe\"),\n                n = (ie ? (\"<scri\" + \"pt>try{document.domain='#d';}catch(e){}</scr\" + \"ipt>\").replace(\"#d\", (d.domain = d.domain.toString())) : \"\"),\n                f = (\"<!doctype html><html class='page-background'><head>\" + n + \"<sc\" + \"ript src='#c'></scri\" + \"pt></head><body class='yui3-skin-mine pure-skin-mine yui3-loading'></body></html>\").replace(\"#c\", \"/ctrl.js\"),\n                s = (\"javascript:window.onload=function(){document.open().write(\\\"#f\\\");document.close();};\").replace(\"#f\", f);\n            ie && i.setAttribute(\"src\", s);\n            i.setAttribute(\"frameBorder\", \"0\");\n            i.setAttribute(\"name\", \"skinbuilder\");\n            i.style.cssText = \"position:absolute;width:auto;height:0;\";\n            if (d.body) {\n                d.body.appendChild(i);\n            } else {\n                d.appendChild(i);\n            } if (!ie) {\n                d = i.contentWindow.document;\n                d.open().write(f);\n                d.close();\n            }\n        }\n        document.getElementById('bookmarklet').href = 'javascript:(' + inject.toString() + ')(document, window);';\n    })();\n    </script>\n\n</body>\n</html>\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each(["pure"], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/bookmarklet"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, '@VERSION@', {"requires": ["handlebars-base", "skinbuilder-partials-pure"]});
