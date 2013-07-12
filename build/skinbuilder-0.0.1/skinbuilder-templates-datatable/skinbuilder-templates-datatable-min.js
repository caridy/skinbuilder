YUI.add("skinbuilder-templates-datatable",function(e,t){var n=e.Template.Handlebars.revive(function(e,t,n,r,i){this.compilerInfo=[3,">= 1.0.0-rc.4"],n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+="/* basic skin styles */\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-table {\n    margin: 0;\n    padding: 0;\n    font-family: arial, sans-serif;\n    border-collapse: separate;\n    border-spacing: 0;\n    /* IE7- doesn't support border-spacing, but separate is needed for more\n     * reliable dimension calculation for scrollable's header width sync,\n     * and it doesn't hurt to have the declaration here.\n     */\n    /**border-collapse: collapse;*/\n    border: solid 1px ",(o=n.border)?o=o.call(t,{hash:{},data:i}):(o=t.border,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-caption {\n    color: ",(o=n.captionText)?o=o.call(t,{hash:{},data:i}):(o=t.captionText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    font: italic 85%/1 arial, sans-serif;\n    padding: ",(o=n.captionPadding)?o=o.call(t,{hash:{},data:i}):(o=t.captionPadding,o=typeof o===u?o.apply(t):o),s+=a(o)+"; /*1em 0;*/\n    text-align: center;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-cell {\n    background-color: ",(o=n.cellBackground)?o=o.call(t,{hash:{},data:i}):(o=t.cellBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.cellText)?o=o.call(t,{hash:{},data:i}):(o=t.cellText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-cell,\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-header {\n    border-left: 1px solid ",(o=n.border)?o=o.call(t,{hash:{},data:i}):(o=t.border,o=typeof o===u?o.apply(t):o),s+=a(o)+"; /*  inner column border */\n    border-width: 0 0 0 1px;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible; /*to make this work where the title is really long */\n    padding: ",(o=n.cellPadding)?o=o.call(t,{hash:{},data:i}):(o=t.cellPadding,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-cell:first-child,\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-first-header {\n    border-left-width: 0px;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-header {\n    ",(o=n.headGradient)?o=o.call(t,{hash:{},data:i}):(o=t.headGradient,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    background-color: ",(o=n.headBackground)?o=o.call(t,{hash:{},data:i}):(o=t.headBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.headText)?o=o.call(t,{hash:{},data:i}):(o=t.headText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n\n    /*font-weight: normal;*/\n    text-align: left;\n    vertical-align: bottom;\n    white-space: nowrap;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-even ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-cell {\n}\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-odd  ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-cell  {\n    background-color: ",(o=n.cellOddBackground)?o=o.call(t,{hash:{},data:i}):(o=t.cellOddBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.cellOddText)?o=o.call(t,{hash:{},data:i}):(o=t.cellOddText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n/************************  sortable ***************/\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName
,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sortable-column {\n    cursor: pointer;\n}\n\n/* this seems to be just the header of a sorted column */\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-columns ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted,\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sortable-column:hover {\n    background-color: ",(o=n.headSortedHoverBackground)?o=o.call(t,{hash:{},data:i}):(o=t.headSortedHoverBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.headSortedHoverText)?o=o.call(t,{hash:{},data:i}):(o=t.headSortedHoverText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sort-liner {\n    display: block;\n    height: 100%;\n    position: relative;\n    padding-right: 15px;\n    position: relative;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sort-indicator {\n    position: absolute;\n    right: 0;\n    bottom: .5ex;\n    width: 7px;\n    height: 10px;\n    background: url(assets/images/sort-arrow-sprite.png) no-repeat 0 0;\n    _background: url(assets/images/sort-arrow-sprite-ie.png) no-repeat 0 0;\n    overflow: hidden;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sort-indicator {\n    background-position: 0 -10px;\n}\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted-desc ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sort-indicator {\n    background-position: 0 -20px;\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-data ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-even ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted {\n    background-color: ",(o=n.cellSortedEvenBackground)?o=o.call(t,{hash:{},data:i}):(o=t.cellSortedEvenBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n    color: ",(o=n.cellSortedEvenText)?o=o.call(t,{hash:{},data:i}):(o=t.cellSortedEvenText,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-data ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-odd ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted {\n    background-color: ",(o=n.cellSortedOddBackground)?o=o.call(t,{hash:{},data:i}):(o=t.cellSortedOddBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n\n/* added */\n",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o),(o=n.skinName)?o=o.call(t,{hash:{},data:i}):(o=t.skinName,o=typeof o===u?o.apply(t):o),s+=a(o)+" ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-columns ",(o=n.prefix)?o=o.call(t,{hash:{},data:i}):(o=t.prefix,o=typeof o===u?o.apply(t):o),s+=a(o)+"datatable-sorted {\n    background-color: ",(o=n.headSortedBackground)?o=o.call(t,{hash:{},data:i}):(o=t.headSortedBackground,o=typeof o===u?o.apply(t):o),s+=a(o)+";\n}\n",s}),r=e.Template._cache=e.Template._cache||{},i={};e.Array.each([],function(e){r["skinbuilder/partials/"+e]&&(i[e]=r["skinbuilder/partials/"+e])}),r["skinbuilder/datatable"]=function(e){return n(e,{partials:i})}},"@VERSION@",{requires:["handlebars-base"]});
