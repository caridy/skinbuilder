YUI.add("skinbuilder-templates-button",function(Y, NAME){
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
    + "button {\n    /* Structure */\n    display: inline-block;\n    *display: inline; /*IE 6/7*/\n    zoom: 1;\n    font-size: 100%;\n    *font-size: 90%; /*IE 6/7 - To reduce IE's oversized button text*/\n    *overflow: visible; /*IE 6/7 - Because of IE's overly large left/right padding on buttons */\n    padding: ";
  if (stack1 = helpers.padding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.padding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; /*0.4em 1em 0.45em;*/\n    line-height: normal;\n    white-space: nowrap;\n    vertical-align: baseline;\n    text-align: center;\n    cursor: pointer;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n\n    /* Presentation */\n    /*color: #444;  rgba not supported (IE 8) */\n    /*color: rgba(0, 0, 0, 0.80);  rgba supported */\n    /**color: #444;  IE 6 & 7 */\n    color: ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    /*border: 1px solid #999;  IE 6/7/8*/\n    /*border: none rgba(0, 0, 0, 0);  IE9 + everything else*/\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.borderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.borderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.borderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.borderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80ffffff', endColorstr='#00ffffff', GradientType=0);\n    background: ";
  if (stack1 = helpers.gradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n\n    text-decoration: none;\n    -webkit-border-radius: ";
  if (stack1 = helpers.buttonRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    -moz-border-radius: ";
  if (stack1 = helpers.buttonRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-radius: ";
  if (stack1 = helpers.buttonRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    -webkit-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 2px rgba(255,255,255, 0.30) inset, 0 1px 2px rgba(0,0,0, 0.15);\n    -moz-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 2px rgba(255,255,255, 0.30) inset, 0 1px 2px rgba(0,0,0, 0.15);\n    box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 2px rgba(255,255,255, 0.30) inset, 0 1px 2px rgba(0,0,0, 0.15);\n\n    /* Transitions */\n    -webkit-transition: 0.1s linear -webkit-box-shadow;\n    -moz-transition: 0.1s linear -moz-box-shadow;\n    -ms-transition: 0.1s linear box-shadow;\n    -o-transition: 0.1s linear box-shadow;\n    transition: 0.1s linear box-shadow;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " a";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button {\n    color: ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    text-decoration:none;\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " a";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button-selected {\n    color: ";
  if (stack1 = helpers.selectedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    text-decoration:none;\n}\n\n";
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
    + "button-hover,\n";
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
    + "button:hover {\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#26000000', GradientType=0);\n    background: ";
  if (stack1 = helpers.gradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.hoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.hoverText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
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
    + "button-active,\n";
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
    + "button:active {\n    border: inset 1px solid #999;  /*IE 6/7/8*/\n    border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1A000000', endColorstr='#26000000', GradientType=0);\n    background: ";
  if (stack1 = helpers.selectedGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.selectedBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.selectedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n\n\n    -webkit-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 4px rgba(0,0,0, 0.30) inset;\n    -moz-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 4px rgba(0,0,0, 0.30) inset;\n    box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset, 0 2px 4px rgba(0,0,0, 0.30) inset;\n}\n\n";
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
    + "button[disabled],\n";
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
    + "button-disabled,\n";
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
    + "button-disabled:hover,\n";
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
    + "button-disabled:active {\n    cursor: default;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n    filter: alpha(opacity=55);\n    -khtml-opacity: 0.55;\n    -moz-opacity: 0.55;\n    opacity: 0.55;\n    -webkit-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset;\n    -moz-box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset;\n    box-shadow: 0 0 1px rgba(0,0,0, 0.25) inset;\n\n    background-color: ";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n\n\n}\n\n/* Firefox: Get rid of the inner focus border */\n";
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
    + "button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n\n/* Firefox: Add a border around a focused button */\n";
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
    + "button:-moz-focusring {\n    outline: thin dotted;\n}\n\n\n";
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
    + "button-primary,\n";
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
    + "button-selected {\n    background-color: ";
  if (stack1 = helpers.selectedBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.selectedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n    border-color: ";
  if (stack1 = helpers.selectedBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.selectedBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.selectedBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.selectedBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
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
    + "button-primary:hover,\n";
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
    + "button-selected:hover {\n    background-color: ";
  if (stack1 = helpers.selectedHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.selectedHoverText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedHoverText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 2px 2px rgba(255, 255, 255, 0.17) inset, 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n\n\n";
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
    + "sam ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button:-moz-focusring {\n    outline-color: rgba(0, 0, 0, 0.85);\n}\n\n\n";
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
    + "night ";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "button:-moz-focusring {\n    outline-color: rgba(255, 255, 255, 0.85);\n}\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each([], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/button"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, "", {requires: ["handlebars-base"]});