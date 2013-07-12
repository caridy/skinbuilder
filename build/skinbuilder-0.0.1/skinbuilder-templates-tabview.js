YUI.add("skinbuilder-templates-tabview",function(Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tabview-list {\n    border:solid ";
  if (stack1 = helpers.listBorderColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /* color between tab list and content */\n    border-width:0 0 5px;\n    zoom:1;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab {\n    margin:0 0.2em 0 0;\n    padding:1px 0 0; /* gecko: make room for overflow */\n    zoom:1;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-selected {\n    margin-bottom:-1px; /* for overlap (mapped to tabview-list border-width) */\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label {\n    ";
  if (stack1 = helpers.tabGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.tabBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-style: solid;\n    border-color: ";
  if (stack1 = helpers.tabBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-width: 1px 1px 0 1px;\n    cursor:pointer;\n    font-size:85%;\n    padding: ";
  if (stack1 = helpers.paddingTab) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.paddingTab; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    text-decoration:none;\n    color: ";
  if (stack1 = helpers.tabText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-radius: ";
  if (stack1 = helpers.tabRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " 0 0;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label:hover,\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label:focus {\n    ";
  if (stack1 = helpers.tabHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.tabHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.tabHoverText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.tabHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-bottom: none;\n    outline:0;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-selected ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label {\n    ";
  if (stack1 = helpers.tabSelectedGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.tabSelectedBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.tabSelectedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.tabSelectedBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n/* separated out hover state for selected tab */\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-selected ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label:hover,\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-selected ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label:focus {\n    ";
  if (stack1 = helpers.tabSelectedHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.tabSelectedHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.tabSelectedHoverText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.tabSelectedHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.tabSelectedHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tabSelectedHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-selected ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tab-label {\n    padding: ";
  if (stack1 = helpers.paddingTabSelected) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.paddingTabSelected; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /* raise selected tab */\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "tabview-panel {\n    background-color: ";
  if (stack1 = helpers.panelBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.panelBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: 1px solid ";
  if (stack1 = helpers.panelBorder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.panelBorder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.panelText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.panelText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding: ";
  if (stack1 = helpers.paddingPanel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.paddingPanel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /* content padding */\n}\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each([], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/tabview"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, "", {requires: ["handlebars-base"]});