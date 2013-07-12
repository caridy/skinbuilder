YUI.add('skinbuilder-templates-space', function (Y, NAME){
   var fn = Y.Template.Handlebars.revive(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "/*************** Begin styles for the UI display of the color space in this tool *************/\n/* Not needed for a skin */\n#tab-schemes,\n#tab-modules,\n.slider-markup-text-contrast,\n.preview-label {\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n.hint, .reset {\n    color: ";
  if (stack1 = helpers.blockPageTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.help {\n    background-color: ";
  if (stack1 = helpers.blockPageTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n.widget-preview-label {\n    border: solid 1px ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-style: solid none none none;\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    font-size: 70%;\n    font-style: normal;\n    margin: 0 0 10px;\n    height: 1.2em;\n    overflow: hidden;\n}\n\n#textarea-style{\n    color: ";
  if (stack1 = helpers.blockPageTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.tab-code-textarea-label {\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n#tabview-controls-container { /*needed a container to be 100% fixed so the tabview-controls could have left and right margin*/\n    background-color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n#tabview-controls .yui3-tabview-panel {\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#tabview-controls-container label {\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#tab-modules #checkboxes-widget,\n#tab-modules #checkboxes-yuicss  { /* group bottom border on checkboxes for modules/widgets */\n    border-bottom: solid 1px ";
  if (stack1 = helpers.blockPageRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom: 0.5em;\n}\n#tab-modules .query-mode-change a {\n    color: ";
  if (stack1 = helpers.blockPageTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#feedback-box {\n    position: absolute;\n    left: 0;\n    top: 30px;\n    border: solid 1px ";
  if (stack1 = helpers.blockPageTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding: ";
  if (stack1 = helpers.feedbackPadding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.feedbackPadding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-radius: ";
  if (stack1 = helpers.feedbackRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.feedbackRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#feedback-box div {\n    background-color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n.feedback-column {\n    position: relative;\n    width: 75px;\n    height: 77px;\n}\n/*  Buttons for key color and page color editing */\n#tab-palette .bucket-highest {\n    ";
  if (stack1 = helpers.blockHighestGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.blockHighestBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockHighestTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.blockHighestBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#tab-palette .bucket-highest:hover {\n    ";
  if (stack1 = helpers.blockHighestHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.blockHighestHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockHighestHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.blockHighestHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n}\n#tab-palette .bucket-page {\n    ";
  if (stack1 = helpers.blockPageGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    background-color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.blockPageBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n#tab-palette .bucket-page:hover {\n    ";
  if (stack1 = helpers.blockPageHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    \n    background-color: ";
  if (stack1 = helpers.blockPageHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: ";
  if (stack1 = helpers.blockPageHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.blockPageHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n}\n\n#scrollview-content-horiz li {\n\n    border-bottom-style: none;\n    border-right: solid 1px ";
  if (stack1 = helpers.ruleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ruleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* labels need to be narrower in Skin Preview or they stack over inputs */\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .sb-preview-form ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "form-aligned ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "control-group label {\n    width: 8em;\n}\n";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .sb-preview-form ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "form-aligned ";
  if (stack1 = helpers.yuiCssPrefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yuiCssPrefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "controls {\n  margin: 1.5em 0 0 8.35em;\n}\n\n\n/* start elements in the palette */\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background {\n    background-color: ";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
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
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .text-low {\n    color: ";
  if (stack1 = helpers.textLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .text-normal {\n    color: ";
  if (stack1 = helpers.textNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .text-high {\n    color: ";
  if (stack1 = helpers.textHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.ruleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ruleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.ruleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ruleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .gradient {\n    ";
  if (stack1 = helpers.gradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n/* background:hover **************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover {\n    background-color: ";
  if (stack1 = helpers.hoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border: solid 1px;\n    border-color: ";
  if (stack1 = helpers.hoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.hoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.hoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.hoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .text-low {\n    color: ";
  if (stack1 = helpers.hoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .text-normal {\n    color: ";
  if (stack1 = helpers.hoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .text-high {\n    color: ";
  if (stack1 = helpers.hoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.hoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.hoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .background.show-hover .gradient {\n    ";
  if (stack1 = helpers.hoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block page ***********************************/\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page {\n    background-color: ";
  if (stack1 = helpers.blockPageBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page {\n    border: solid 1px ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockPageBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page-text-low {\n    color: ";
  if (stack1 = helpers.blockPageTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page-text-normal {\n    color: ";
  if (stack1 = helpers.blockPageTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page-text-high {\n    color: ";
  if (stack1 = helpers.blockPageTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockPageRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockPageRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page .gradient {\n    ";
  if (stack1 = helpers.blockPageGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block page:hover ************************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover {\n    background-color: ";
  if (stack1 = helpers.blockPageHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover {\n    border: solid 1px ";
  if (stack1 = helpers.blockPageHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockPageHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockPageHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .block-page-text-low {\n    color: ";
  if (stack1 = helpers.blockPageHoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .block-page-text-normal {\n    color: ";
  if (stack1 = helpers.blockPageHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .block-page-text-high {\n    color: ";
  if (stack1 = helpers.blockPageHoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .block-page-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockPageHoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .block-page-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockPageHoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-page:hover .gradient {\n    ";
  if (stack1 = helpers.blockPageHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPageHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n\n\n\n/* block low ************************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low {\n    background-color: ";
  if (stack1 = helpers.blockLowBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low {\n    border: solid 1px ";
  if (stack1 = helpers.blockLowBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockLowBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low-text-low {\n    color: ";
  if (stack1 = helpers.blockLowTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low-text-normal {\n    color: ";
  if (stack1 = helpers.blockLowTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low-text-high {\n    color: ";
  if (stack1 = helpers.blockLowTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockLowRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockLowRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low .gradient {\n    ";
  if (stack1 = helpers.blockLowGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block low:hover ************************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover {\n    background-color: ";
  if (stack1 = helpers.blockLowHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover {\n    border: solid 1px ";
  if (stack1 = helpers.blockLowHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockLowHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockLowHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .block-low-text-low {\n    color: ";
  if (stack1 = helpers.blockLowHoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .block-low-text-normal {\n    color: ";
  if (stack1 = helpers.blockLowHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .block-low-text-high {\n    color: ";
  if (stack1 = helpers.blockLowHoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .block-low-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockLowHoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .block-low-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockLowHoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-low:hover .gradient {\n    ";
  if (stack1 = helpers.blockLowHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockLowHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block normal *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal {\n    background-color: ";
  if (stack1 = helpers.blockNormalBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal {\n    border: solid 1px ";
  if (stack1 = helpers.blockNormalBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockNormalBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal-text-low {\n    color: ";
  if (stack1 = helpers.blockNormalTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal-text-normal {\n    color: ";
  if (stack1 = helpers.blockNormalTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal-text-high {\n    color: ";
  if (stack1 = helpers.blockNormalTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockNormalRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockNormalRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal .gradient {\n    ";
  if (stack1 = helpers.blockNormalGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block normal:hover  *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover {\n    background-color: ";
  if (stack1 = helpers.blockNormalHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover {\n    border: solid 1px ";
  if (stack1 = helpers.blockNormalHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockNormalHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockNormalHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .block-normal-text-low {\n    color: ";
  if (stack1 = helpers.blockNormalHoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .block-normal-text-normal {\n    color: ";
  if (stack1 = helpers.blockNormalHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .block-normal-text-high {\n    color: ";
  if (stack1 = helpers.blockNormalHoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .block-normal-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockNormalHoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .block-normal-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockNormalHoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-normal:hover .gradient {\n    ";
  if (stack1 = helpers.blockNormalHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockNormalHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block high *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high {\n    background-color: ";
  if (stack1 = helpers.blockHighBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high {\n    border: solid 1px ";
  if (stack1 = helpers.blockHighBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockHighBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high-text-low {\n    color: ";
  if (stack1 = helpers.blockHighTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high-text-normal {\n    color: ";
  if (stack1 = helpers.blockHighTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high-text-high {\n    color: ";
  if (stack1 = helpers.blockHighTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high .gradient {\n    ";
  if (stack1 = helpers.blockHighGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block high:hover *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover {\n    background-color: ";
  if (stack1 = helpers.blockHighHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover {\n    border: solid 1px ";
  if (stack1 = helpers.blockHighHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockHighHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .block-high-text-low {\n    color: ";
  if (stack1 = helpers.blockHighHoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .block-high-text-normal {\n    color: ";
  if (stack1 = helpers.blockHighHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .block-high-text-high {\n    color: ";
  if (stack1 = helpers.blockHighHoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .block-high-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighHoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .block-high-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighHoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-high:hover .gradient {\n    ";
  if (stack1 = helpers.blockHighHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block highest *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest {\n    background-color: ";
  if (stack1 = helpers.blockHighestBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest {\n    border: solid 1px ";
  if (stack1 = helpers.blockHighestBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockHighestBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest-text-low {\n    color: ";
  if (stack1 = helpers.blockHighestTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest-text-normal {\n    color: ";
  if (stack1 = helpers.blockHighestTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest-text-high {\n    color: ";
  if (stack1 = helpers.blockHighestTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighestRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighestRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest .gradient {\n    ";
  if (stack1 = helpers.blockHighestGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/* block highest:hover *********************************/\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover {\n    background-color: ";
  if (stack1 = helpers.blockHighestHoverBackground) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBackground; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover {\n    border: solid 1px ";
  if (stack1 = helpers.blockHighestHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color: ";
  if (stack1 = helpers.blockHighestHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.blockHighestHoverBorderHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverBorderHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .block-highest-text-low {\n    color: ";
  if (stack1 = helpers.blockHighestHoverTextLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverTextLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .block-highest-text-normal {\n    color: ";
  if (stack1 = helpers.blockHighestHoverTextNormal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverTextNormal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .block-highest-text-high {\n    color: ";
  if (stack1 = helpers.blockHighestHoverTextHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverTextHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .block-highest-rule-low {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighestHoverRuleLow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverRuleLow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .block-highest-rule-high {\n    border-top: solid 1px ";
  if (stack1 = helpers.blockHighestHoverRuleHigh) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverRuleHigh; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.skinName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skinName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " .block-highest:hover .gradient {\n    ";
  if (stack1 = helpers.blockHighestHoverGradient) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockHighestHoverGradient; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n/*************** End styles for the UI display of the color space in this tool *************/\n";
  return buffer;
  }),
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

   Y.Array.each([], function (name) {
       if (cache["skinbuilder/partials/" + name]) {
           partials[name] = cache["skinbuilder/partials/" + name];
       }
   });

   cache["skinbuilder/space"] = function (data) {
       return fn(data, {
           partials: partials
       });
   };
}, '@VERSION@', {"requires": ["handlebars-base"]});
