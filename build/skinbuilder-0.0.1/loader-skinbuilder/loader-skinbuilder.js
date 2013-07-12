YUI.add('loader-skinbuilder', function (Y, NAME) {
/* This file is auto-generated by locator plugin express-yui for bundle skinbuilder */

/*jshint maxlen:900, eqeqeq: false */

/**
 * YUI 3 module metadata
 * @module loader-skinbuilder
 */
YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {};
Y.mix(YUI.Env[Y.version].modules, {
    "colorspace": {
        "group": "skinbuilder",
        "requires": []
    },
    "colorspace-schemes": {
        "group": "skinbuilder",
        "requires": [
            "colorspace"
        ]
    },
    "loader-skinbuilder": {
        "affinity": "client",
        "group": "skinbuilder"
    },
    "skin": {
        "group": "skinbuilder",
        "requires": [
            "colorspace",
            "handlebars"
        ]
    },
    "skin-autocomplete": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-button": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-buttons": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-calendar": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-datatable": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-dial": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-form": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-list": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-node-menunav": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-overlay": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-panel": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-scrollview": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-slider": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-space": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-table": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skin-tabview": {
        "group": "skinbuilder",
        "requires": [
            "skin"
        ]
    },
    "skinbuilder-partials-controls": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-partials-pure": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-partials-widgets": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-autocomplete": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-bookmarklet": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base",
            "skinbuilder-partials-pure"
        ]
    },
    "skinbuilder-templates-button": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-buttons": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-calendar": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-ctrl.js": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-datatable": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-dial": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-docs": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-form": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-index": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base",
            "skinbuilder-partials-controls",
            "skinbuilder-partials-widgets",
            "skinbuilder-partials-pure"
        ]
    },
    "skinbuilder-templates-list": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-nodeMenunav": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-overlay": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-panel": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-scrollview": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-slider": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-space": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-table": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinbuilder-templates-tabview": {
        "group": "skinbuilder",
        "requires": [
            "handlebars-base"
        ]
    },
    "skinner": {
        "affinity": "client",
        "group": "skinbuilder",
        "requires": [
            "skinbuilder-templates-autocomplete",
            "skinbuilder-templates-button",
            "skinbuilder-templates-buttons",
            "skinbuilder-templates-calendar",
            "skinbuilder-templates-datatable",
            "skinbuilder-templates-dial",
            "skinbuilder-templates-form",
            "skinbuilder-templates-list",
            "skinbuilder-templates-nodeMenunav",
            "skinbuilder-templates-overlay",
            "skinbuilder-templates-panel",
            "skinbuilder-templates-scrollview",
            "skinbuilder-templates-slider",
            "skinbuilder-templates-space",
            "skinbuilder-templates-table",
            "skinbuilder-templates-tabview",
            "skin",
            "colorspace-schemes",
            "skin-autocomplete",
            "skin-button",
            "skin-calendar",
            "skin-datatable",
            "skin-dial",
            "skin-node-menunav",
            "skin-overlay",
            "skin-panel",
            "skin-scrollview",
            "skin-slider",
            "skin-tabview",
            "skin-buttons",
            "skin-form",
            "skin-table",
            "skin-list",
            "slider",
            "overlay",
            "panel",
            "node-menunav",
            "dial",
            "autocomplete",
            "autocomplete-filters",
            "autocomplete-highlighters",
            "scrollview",
            "datatable-sort",
            "dd-drag",
            "dd-constrain",
            "calendar",
            "button-plugin",
            "tabview",
            "datatype-date",
            "button-group",
            "cssbutton",
            "node-event-delegate",
            "overlay",
            "color",
            "test",
            "test-console",
            "event-outside",
            "querystring",
            "datatype-number",
            "json-stringify"
        ]
    },
    "skinner-popup": {
        "group": "skinbuilder",
        "requires": [
            "node",
            "skinbuilder-partials-pure",
            "skinbuilder-partials-controls"
        ]
    }
});
}, '@VERSION@', {"requires": ["loader-base"]});
