YUI.add("skinbuilder-templates-list",function(e,t){var n=e.Template.Handlebars.revive(function(e,t,n,r,i){this.compilerInfo=[3,">= 1.0.0-rc.4"],n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+="/* from YUICSS list-core.css */\n/*csslint adjoining-classes:false, outline-none:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/ \n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ul {\n    position: absolute;\n    visibility: hidden;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open {\n    visibility: visible;\n    z-index: 2;\n    width: 100%;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ul {\n    left: -10000px;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    top: -10000px;\n    z-index: 1;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu > ul { position: relative; }\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open > ul {\n    left: 0;\n    top: 0;\n    visibility: visible;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open > ul:focus {\n    outline: none;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu li {\n    position: relative;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu a, ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-heading {\n    display: block;\n    color: inherit;\n    line-height: 1.5em;\n    padding: ",(o=n.menuItemPadding)?o=o.call(t,{hash:{},data:i}):(o=t.menuItemPadding,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    text-decoration: none;\n    white-space: nowrap;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-heading {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    margin: 0;\n    vertical-align: middle;\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal > ul {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    vertical-align: middle;\n    height: 2.4em;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu li a { padding: ",(o=n.menuItemPadding)?o=o.call(t,{hash:{},data:i}):(o=t.menuItemPadding,o=typeof o===u?o.apply(t):o),s+=a(o)+"; }\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.
apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-label:after {\n    content: '\\25B8';\n    float: right;\n    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'DejaVu Sans', sans-serif; /* These specific fonts have the Unicode char we need. */\n    margin-right: -20px;\n    margin-top: -1px;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-label {\n    padding-right: 30px;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-separator {\n    background-color: ",(o=n.separator)?o=o.call(t,{hash:{},data:i}):(o=t.separator,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    display: block;\n    height: 1px;\n    font-size: 0;\n    margin: 7px 2px;\n    overflow: hidden;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-hidden {\n    display: none;\n}\n\n/* FIXED MENU */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-fixed {\n    position: fixed;\n    top:0;\n    left:0;\n    width: 100%;\n}\n\n\n/* HORIZONTAL MENU CODE */\n\n/* Initial menus should be inline-block so that they are horizontal */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal li {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    vertical-align: middle;\n}\n\n/* Submenus should still be display:block; */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal li li {\n    display: block;\n}\n\n/* Content after should be down arrow */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+'menu-label:after {\n    content: "\\25BE";\n}\n/*Add extra padding to elements that have the arrow so that the hover looks nice */\n',(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-label {\n    padding-right:30px;\n}\n\n/* Adjusting separator for vertical menus */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal li",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-separator {\n    height: 50%;\n    width: 1px;\n    margin: 0 7px;\n}\n\n/* Submenus should be horizontal separator again */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal li li",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-separator {\nheight: 1px;\nwidth: auto;\nmargin: 7px 2px;\n}\n\n\n/* end from yuicss/list-core.css *******************************************/\n/* from yuicss list-paginator.css */\n/*csslint box-model:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/ \n\n"
,(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator li {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    margin: 0 -0.35em 0 0;\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button {\n    border-radius: 0;\n    padding: 0.8em 1.4em;\n    vertical-align: top;\n    height: 1.1em;\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"button:focus {\n    outline-style: none;\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator .prev, ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator .next {\n    /*color: #C0C1C3; allow .pure-button to color text*/\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator .prev {\n    border-radius: ",(o=n.paginatorRadiusPrev)?o=o.call(t,{hash:{},data:i}):(o=t.paginatorRadiusPrev,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"paginator .next {\n    border-radius: ",(o=n.paginatorRadiusNext)?o=o.call(t,{hash:{},data:i}):(o=t.paginatorRadiusNext,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n/* end from YUICSS list-paginator.css ******************************/\n/* from YUICSS list.css *******************************************/\n/* MAIN MENU STYLING */\n/*csslint adjoining-classes:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/ \n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal li ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-children {\n    background: ",(o=n.menuBackground)?o=o.call(t,{hash:{},data:i}):(o=t.menuBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+"; /* Old browsers */\n    border: 1px solid ",(o=n.menuBorder)?o=o.call(t,{hash:{},data:i}):(o=t.menuBorder,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* remove borders for horizontal menus */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===
u?o.apply(t):o),s+=a(o)+"menu-heading {\n    border: none;\n}\n\n\n\n/* LINK STYLES */\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu a {\n    border: 1px solid transparent;\n    border-left: none;\n    border-right: none;\n\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu a,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > li:after {\n    color: ",(o=n.menuText)?o=o.call(t,{hash:{},data:i}):(o=t.menuText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children > li:hover:after {\n    color: ",(o=n.menuHoverText)?o=o.call(t,{hash:{},data:i}):(o=t.menuHoverText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* Focus style for a dropdown menu-item when the parent has been opened */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open {\n    background: ",(o=n.menuHoverBackground)?o=o.call(t,{hash:{},data:i}):(o=t.menuHoverBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* HOVER STATES */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu li a:hover {\n    background: ",(o=n.menuHoverBackground)?o=o.call(t,{hash:{},data:i}):(o=t.menuHoverBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* DISABLED STATES */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu li",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-disabled a:hover {\n    background: ",(o=n.menuBackground)?o=o.call(t,{hash:{},data:i}):(o=t.menuBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.menuTextDisabled)?o=o.call(t,{hash:{},data:i}):(o=t.menuTextDisabled,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-disabled > a {\n    background-image: none;\n    border-color: transparent;\n    cursor: default;\n}\n\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-disabled > a,\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-can-have-children",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-disabled > a:after {\n    color: ",(o=n.menuTextDisabled)?o=o.call(t,{hash:{},data:i}):(o=t.menuTextDisabled,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* HEADINGS */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-heading {\n    color: ",(o=n.headingText
)?o=o.call(t,{hash:{},data:i}):(o=t.headingText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    text-transform: uppercase;\n    font-size: 90%;\n    margin-top: 0.5em;\n    border-bottom: solid 1px ",(o=n.fixedMenuBorderBottom)?o=o.call(t,{hash:{},data:i}):(o=t.fixedMenuBorderBottom,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n\n/* SELECTED MENU ITEM */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu li",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-selected a {\n    background-color: ",(o=n.menuSelectedBackground)?o=o.call(t,{hash:{},data:i}):(o=t.menuSelectedBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.menuSelectedText)?o=o.call(t,{hash:{},data:i}):(o=t.menuSelectedText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* FIXED MENU */\n",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-open",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-fixed {\n    border: none;\n    border-bottom: 1px solid ",(o=n.fixedMenuBorderBottom)?o=o.call(t,{hash:{},data:i}):(o=t.fixedMenuBorderBottom,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n/* end from YUICSS list.css ***********************************/\n/* from YUICSS list-responsive.css ****************************/\n/* RESPONSIVE */\n\n@media (max-width: 480px) {\n\n    ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-horizontal {\n        width:100%;\n    }\n\n    ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.yuiCssPrefix)?o=o.call(t,{hash:{},data:i}):(o=t.yuiCssPrefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"menu-children li {\n        display: block;\n        border-bottom:1px solid ",(o=n.menuBorder)?o=o.call(t,{hash:{},data:i}):(o=t.menuBorder,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    }\n\n}\n/* end from list-responsive.css ******************/\n",s}),r=e.Template._cache=e.Template._cache||{},i={};e.Array.each([],function(e){r["skinbuilder/partials/"+e]&&(i[e]=r["skinbuilder/partials/"+e])}),r["skinbuilder/list"]=function(e){return n(e,{partials:i})}},"@VERSION@",{requires:["handlebars-base"]});