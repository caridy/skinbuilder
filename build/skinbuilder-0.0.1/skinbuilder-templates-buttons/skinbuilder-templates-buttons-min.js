YUI.add("skinbuilder-templates-buttons",function(e,t){var n=e.Template.Handlebars.revive(function(e,t,n,r,i){this.compilerInfo=[3,">= 1.0.0-rc.4"],n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+="/* from YUICSS buttons-core.css */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button {\n    /* Structure */\n    display: inline-block;\n    *display: inline; /*IE 6/7*/\n    zoom: 1;\n    line-height: normal;\n    white-space: nowrap;\n    vertical-align: baseline;\n    text-align: center;\n    cursor: pointer;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n/* end from YUICSS buttons-core.css */\n/* from YUICSS buttons.css */\n/*csslint unqualified-attributes:false*/\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button {\n    font-size: 100%;\n    *font-size: 90%; /*IE 6/7 - To reduce IE's oversized button text*/\n    *overflow: visible; /*IE 6/7 - Because of IE's overly large left/right padding on buttons */\n    padding: ",(o=n.padding)?o=o.call(t,{hash:{},data:i}):(o=t.padding,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.text)?o=o.call(t,{hash:{},data:i}):(o=t.text,o=typeof o===u?o.apply(t):o),s+=a(o)+"; /* rgba not supported (IE 8) */\n    /* color: rgba(0, 0, 0, 0.80); rgba supported */\n    /* *color: #444; IE 6 & 7 */\n    border: 1px solid ",(o=n.borderLow)?o=o.call(t,{hash:{},data:i}):(o=t.borderLow,o=typeof o===u?o.apply(t):o),s+=a(o)+"; /*IE 6/7/8*/\n    border: none rgba(0, 0, 0, 0); /*IE9 + everything else*/\n    background-color: ",(o=n.background)?o=o.call(t,{hash:{},data:i}):(o=t.background,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    border-radius: ",(o=n.buttonRadius)?o=o.call(t,{hash:{},data:i}):(o=t.buttonRadius,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n    /* Transitions */\n    -webkit-transition: 0.1s linear -webkit-box-shadow;\n    -moz-transition: 0.1s linear -moz-box-shadow;\n    -ms-transition: 0.1s linear box-shadow;\n    -o-transition: 0.1s linear box-shadow;\n    transition: 0.1s linear box-shadow;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-hover,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button:hover {\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#00000000', GradientType=0);\n    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(40%, rgba(0,0,0, 0.05)), to(rgba(0,0,0, 0.05)));\n    background-image: -webkit-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.15));\n    background-image: -moz-linear-gradient(top, rgba(0,0,0, 0.05) 0%, rgba(0,0,0, 0.05));\n    background-image: -ms-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.15));\n    background-image: -o-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.05));\n    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.05));\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-active,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button:active {\n    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button[disabled],\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-disabled,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-disabled:hover,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-disabled:active {\n    border: none;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n    filter: alpha(opacity=40);\n    -khtml-opacity: 0.40;\n    -moz-opacity: 0.40;\n    opacity: 0.40;\n    cursor: not-allowed;\n    box-shadow: none;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-hidden {\n    display: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-primary,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-selected,\na",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-primary,\na",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button-selected {\n    background-color: ",(o=n.selectedBackground)?o=o.call(t,{hash:{},data:i}):(o=t.selectedBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.selectedText)?o=o.call(t,{hash:{},data:i}):(o=t.selectedText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button:-moz-focusring {\n    outline-color: rgba(0, 0, 0, 0.85);\n}\n",s}),r=e.Template._cache=e.Template._cache||
{},i={};e.Array.each([],function(e){r["skinbuilder/partials/"+e]&&(i[e]=r["skinbuilder/partials/"+e])}),r["skinbuilder/buttons"]=function(e){return n(e,{partials:i})}},"@VERSION@",{requires:["handlebars-base"]});
