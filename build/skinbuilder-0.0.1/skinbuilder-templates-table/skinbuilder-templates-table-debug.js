YUI.add('skinbuilder-templates-table', function (Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "/* foundational CSS */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: separate;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid ";
  if (stack1 = helpers.border) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.border; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table caption {\n    color: ";
  if (stack1 = helpers.captionText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.captionText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    font: italic 85%/1 arial, sans-serif;\n    padding: 1em 0;\n    text-align: center;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table td,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table th {\n    border-left: 1px solid ";
  if (stack1 = helpers.border) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.border; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";/* inner column border */\n    border-width: 0 0 0 1px;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible; /*to make ths where the title is really long work*/\n    padding: ";
  if (stack1 = helpers.cellPadding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellPadding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /* cell padding */\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table td:first-child,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table th:first-child {\n    border-left-width: 0;\n}\n\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table thead {\n    background-color: ";
  if (stack1 = helpers.headBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.headText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    text-align: left;\n    vertical-align: bottom;\n    white-space: nowrap;\n}\n\n/*\nstriping:\neven - #fff (white)\nodd - #edf5ff (light blue)\n*/\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table td {\n    background-color: ";
  if (stack1 = helpers.cellBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.cellText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-odd td {\n    background-color: ";
  if (stack1 = helpers.cellOddBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellOddBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.cellOddText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellOddText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* BORDERED TABLES */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-bordered td {\n    border-bottom:1px solid ";
  if (stack1 = helpers.border) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.border; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-bordered tbody > tr:last-child td,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-horizontal tbody > tr:last-child td {\n    border-bottom-width: 0;\n}\n\n/* HORIZONTAL BORDERED TABLES */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-horizontal td,\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-horizontal th {\n    border-width: 0 0 1px 0;\n    border-bottom:1px solid ";
  if (stack1 = helpers.border) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.border; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "table-horizontal tbody > tr:last-child td {\n    border-bottom-width: 0;\n}\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each([], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/table"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, '@VERSION@', {"requires": ["handlebars-base"]});
