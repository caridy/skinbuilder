YUI.add('skinbuilder-templates-buttons', function (Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "/* from YUICSS buttons-core.css */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button {\n    /* Structure */\n    display: inline-block;\n    *display: inline; /*IE 6/7*/\n    zoom: 1;\n    line-height: normal;\n    white-space: nowrap;\n    vertical-align: baseline;\n    text-align: center;\n    cursor: pointer;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n/* end from YUICSS buttons-core.css */\n/* from YUICSS buttons.css */\n/*csslint unqualified-attributes:false*/\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button {\n    font-size: 100%;\n    *font-size: 90%; /*IE 6/7 - To reduce IE's oversized button text*/\n    *overflow: visible; /*IE 6/7 - Because of IE's overly large left/right padding on buttons */\n    padding: ";
  if (stack1 = helpers.padding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.padding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /* rgba not supported (IE 8) */\n    /* color: rgba(0, 0, 0, 0.80); rgba supported */\n    /* *color: #444; IE 6 & 7 */\n    border: 1px solid ";
  if (stack1 = helpers.borderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /*IE 6/7/8*/\n    border: none rgba(0, 0, 0, 0); /*IE9 + everything else*/\n    background-color: ";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-radius: ";
  if (stack1 = helpers.buttonRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n    /* Transitions */\n    -webkit-transition: 0.1s linear -webkit-box-shadow;\n    -moz-transition: 0.1s linear -moz-box-shadow;\n    -ms-transition: 0.1s linear box-shadow;\n    -o-transition: 0.1s linear box-shadow;\n    transition: 0.1s linear box-shadow;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-hover,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button:hover {\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#00000000', GradientType=0);\n    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(40%, rgba(0,0,0, 0.05)), to(rgba(0,0,0, 0.05)));\n    background-image: -webkit-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.15));\n    background-image: -moz-linear-gradient(top, rgba(0,0,0, 0.05) 0%, rgba(0,0,0, 0.05));\n    background-image: -ms-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.15));\n    background-image: -o-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.05));\n    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.05));\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-active,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button:active {\n    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button[disabled],\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-disabled,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-disabled:hover,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-disabled:active {\n    border: none;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n    filter: alpha(opacity=40);\n    -khtml-opacity: 0.40;\n    -moz-opacity: 0.40;\n    opacity: 0.40;\n    cursor: not-allowed;\n    box-shadow: none;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-hidden {\n    display: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-primary,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-selected,\na";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-primary,\na";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-selected {\n    background-color: ";
  if (stack1 = helpers.selectedBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.selectedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button:-moz-focusring {\n    outline-color: rgba(0, 0, 0, 0.85);\n}\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each([], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/buttons"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, '@VERSION@', {"requires": ["handlebars-base"]});
