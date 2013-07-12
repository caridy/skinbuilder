YUI.add("skinbuilder-partials-controls",function(e,t){var n=e.Template.Handlebars.revive(function(e,t,n,r,i){return this.compilerInfo=[3,">= 1.0.0-rc.4"],n=n||e.helpers,i=i||{},'<div id="tabview-controls-container">\n    <div id="tabview-controls">\n        <ul>\n            <li><a class="tab-color" href="#tab-palette">Style</a></li>\n            <li><a class="tab-schemes" href="#tab-schemes">Schemes</a></li>\n            <li><a href="#tab-modules">Items</a></li>\n            <li><a class="tab-code" href="#tab-code">Code</a></li>\n        </ul>\n        <h3 id="skin-preview-header" class="preview-label rotate">Skin Preview</h3>\n        <div>\n            <div id="tab-palette" class="yui3-g">\n                <div class="yui3-u">\n                    <div class="contents">\n                        <p>\n                        <div class="bucket bucket-picker bucket-highest" title="Click to edit \'Master\' color">\n                            <img src="assets/images/picker_icon.png"/>\n                            Edit Master Color...\n                        </div>\n                        </p>\n                        <div class="bucket bucket-picker bucket-page" title="Click to edit Page/Container Color">\n                            <img src="assets/images/picker_icon.png"/>\n                            Edit Page Color...\n                        </div>\n                        <p><div class="help wpR help-color-buttons">?</div></p>\n\n                    </div>\n                </div>\n                <div class="yui3-u">\n                    <div class="contents contents-middle">\n                        <div class="markup slider-markup-horiz-padding">\n                            <label class="preview-label">Horiz. padding: 100%</label><a class="reset reset-padding-horiz">Reset</a>\n                            <div id="slider-padding-horiz"></div>\n                        </div>\n                        <div class="markup slider-markup-border-radius">\n                            <label class="preview-label">Border-radius: 100%</label><a class="reset reset-radius">Reset</a>\n                            <div id="slider-radius"></div>\n                        </div>\n                        <div class="markup slider-markup-text-contrast">\n                            <label class="preview-label">Text Contrast: 150</label><a class="reset reset-text-contrast">Reset</a>\n                            <div id="slider-text-contrast"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="yui3-u">\n                    <div class="contents contents-right">\n                        <div class="markup slider-markup-vert-padding">\n                            <label class="preview-label">Vert. padding: 100%</label>\n                            <div id="slider-padding-vert"></div>\n                            <a class="reset reset-padding-vert">Reset</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="yui3-u">\n                    <div class="help help-style">?</div>\n                    <div class="contents feedback-column">\n                        <div id="feedback-box">\n                            <div>Sample</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n\n            <div id="tab-schemes">\n                <ul class="scheme-radios">\n                    <li class="pick">\n                        <input id="monochrome" type="radio" checked="checked"/>\n                        <label for="monochrome">\n                            <ul class="swatches">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Monochrome\n                        </label>\n                    </li>\n                    <li class="pick">\n                        <input id="color-plus-gray" type="radio"/>\n                        <label for="color-plus-gray">\n                            <ul class="swatches">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Color Plus Gray\n                        </label>\n                    </li>\n                    <li class="pick">\n                        <input id="complementary" type="radio"/>\n                        <label for="complementary">\n                            <ul class="swatches">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Complementary\n                        </label>\n                    </li>\n                    <li class="pick">\n                        <input id="dark-complementary" type="radio"/>\n                        <label for="dark-complementary">\n                            <ul class="swatches swatches-dark">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Dark Complementary\n                        </label>\n                    </li>\n    <!--  this is needed for night simulation. add when ready. Also define in colorspace-schemes.js -->             \n                    <li class="pick">\n                        <input id="dark-monochrome" type="radio"/>\n                        <label for="dark-monochrome">\n                            <ul class="swatches swatches-dark">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Dark Monochrome\n                        </label>\n                    </li>\n    <!--needed for custom color schemes-->\n                    <li class="pick custom">\n                        <input id="custom" type="radio"/>\n                        <label for="custom">\n                            <ul class="swatches swatches">\n                                <li></li><li></li><li></li><li></li>\n                            </ul>\n                            Create Custom Scheme\n                        </label>\n                    </li>\n                    <li>\n                        <div class="help help-schemes">?</div>\n                    </li>\n                </ul>\n\n            </div>\n            <div id="tab-modules">\n                Select which Widgets or Modules to skin and preview\n                <div class="help help-items">?</div>\n                <div id="checkboxes-yui-widgets-group">\n                    <h4 class="preview-label">YUI Widgets<a class="show-hide-all btn-widget">Remove All</a></h4>\n                    <ul id="checkboxes-widget">\n                        <!-- lis added dynamically at runtime. see app.js initPreviewAndModulesCheckboxes() -->\n                    </ul>\n                </div>\n                <div id="checkboxes-yuicss-group"> <!-- just for hiding until ready -->\n                    <h4 class="preview-label">Pure<a class="show-hide-all btn-yuicss">Remove All</a></h4>\n                    <ul id="checkboxes-yuicss">\n                        <!-- lis added dynamically at runtime. see app.js initPreviewAndModulesCheckboxes() -->\n                    </ul>\n                </div>\n                <div class="query-mode-change link-skin-builder-for-yui3">Show <a>YUI Widgets</a></div>\n                <div class="query-mode-change link-skin-builder-for-yuicss">Show <a>Pure Modules</a></div>\n            </div>\n            <div id="tab-code">\n                <div class="yui3-g" id="layout">\n                    <div class="yui3-u-1-2" id="out-style">\n                        <div class="contents">\n                            <label class="tab-code-textarea-label">\n                                Copy CSS for selected Widgets/Modules\n                            </label>\n                            <div class="help help-code">?</div>\n                            <label class="hint skin-name-label" title="Change the Skin classname. (you\'ll need to change the class in the body tag to match)">\n                                <input class="inp-skin-prefix" value=".yui3-" title="Change the Skin classname prefix. You\'ll need to change the classnames in your markup to match. Skin Builder preview may give up without \'.yui3-\', but you\'ll be able to copy CSS from below."/>skin-\n                            </label>\n                            <input class="inp-skin-name" value="mine" title="Change the Skin classname. (you\'ll need to change the class in the body tag to match)"/>\n                            <textarea id="textarea-style"></textarea>\n                        </div>\n                    </div>\n                    <div class="yui3-u-1-2" id="out-scheme">\n                        <div class="contents">\n                            <button id="btn-get-url" class="yui3-button"><span>&#8734;</span> Link</button>\n                            <label class="tab-code-textarea-label"> Paste link in email or IM</label>\n                            <div class="help help-settings">?</div>\n                            <input type="text" id="inp-url-link"/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n        </div>\n\n        <!--  detail palette preview, color picker, and scheme adjusting panels markup  -->\n        <div id="preview-palette">\n            <label>Preview color palette details</label>\n            <!-- <ul>\n                <li class="block-highest" title="highest"></li>\n                <li class="block-high" title="high"></li>\n                <li class="block-normal" title="normal"></li>\n                <li class="block-low" title="low"></li>\n                <li class="background" title="lowest"></li>\n                <li class="block-page" title="page background"></li>\n            <ul> -->\n        </div>\n    </div>\n\n\n    <div id="palette-outer">\n        <div class="grip"></div>\n        <img class="close" src="assets/images/close.png" width="18" height="18" />\n        <label>Detailed preview of the palette of colors used for skinning</label>\n        <div class="help help-detailed-preview">?</div>\n        <div class="color-space">\n            <ul>\n                <li class="block block-highest block-highest-border" title="Highest / Master Color">\n                    <div class="text block-highest-text-low">text.low</div>\n                    <div class="text block-highest-text-normal">text.normal</div>\n                    <div class="text block-highest-text-high">text.high</div>\n                    <div class="rule block-highest-rule-low"></div>\n                    <div class="rule block-highest-rule-high"></div>\n                    <div class="bucket bucket-picker bucket-highest" title="Click to edit \'Master\' color"></div>\n                    <div class="gradient"></div>\n                </li>\n                <li class="block block-high block-high-border" title="High">\n                    <div class="text block-high-text-low">text.low</div>\n                    <div class="text block-high-text-normal">text.normal</div>\n                    <div class="text block-high-text-high">text.high</div>\n                    <div class="rule block-high-rule-low"></div>\n                    <div class="rule block-high-rule-high"></div>\n                    <div class="bucket bucket-scheme bucket-high bucket-scheme-hidden" title="Click to adjust this scheme Color"></div>\n                    <div class="gradient"></div>\n                </li>\n                <li class="block block-normal block-normal-border" title="Normal">\n                    <div class="text block-normal-text-low">text.low</div>\n                    <div class="text block-normal-text-normal">text.normal</div>\n                    <div class="text block-normal-text-high">text.high</div>\n                    <div class="rule block-normal-rule-low"></div>\n                    <div class="rule block-normal-rule-high"></div>\n                    <div class="bucket bucket-scheme bucket-normal bucket-scheme-hidden" title="Click to adjust this scheme Color"></div>\n                    <div class="gradient"></div>\n                </li>\n                <li class="block block-low block-low-border" title="Low">\n                    <div class="text block-low-text-low">text.low</div>\n                    <div class="text block-low-text-normal">text.normal</div>\n                    <div class="text block-low-text-high">text.high</div>\n                    <div class="rule block-low-rule-low"></div>\n                    <div class="rule block-low-rule-high"></div>\n                    <div class="bucket bucket-scheme bucket-low bucket-scheme-hidden" title="Click to adjust this scheme Color"></div>\n                    <div class="gradient"></div>\n                </li>\n                <li class="block background" title="Lowest">\n                    <div class="text text-low">text.low</div>\n                    <div class="text text-normal">text.normal</div>\n                    <div class="text text-high">text.high</div>\n                    <div class="rule rule-low"></div>\n                    <div class="rule rule-high"></div>\n                    <div class="bucket bucket-scheme bucket-lowest bucket-scheme-hidden" title="Click to adjust this scheme Color"></div>\n                    <div class="gradient"></div>\n                </li>\n                <li class="block block-page block-page-border" title="Page or Container Colors">\n                    <div class="text block-page-text-low">text.low</div>\n                    <div class="text block-page-text-normal">text.normal</div>\n                    <div class="text block-page-text-high">text.high</div>\n                    <div class="rule block-page-rule-low"></div>\n                    <div class="rule block-page-rule-high"></div>\n                    <div class="bucket bucket-picker bucket-page" title="Click to edit Page/Container Color"></div>\n                </li>\n            </ul>\n\n\n        </div> <!-- end of .color-space  -->\n    </div>\n    <div id="picker-outer">\n        <div class="grip"></div>\n        <img class="close" src="assets/images/close.png" width="18" height="18" />\n        <div id="picker">\n        <div id="hs">\n            <img src="assets/images/hue_sat.jpg" width="180" height="180"/>\n            <div id="hs-dot"><div>&#8226;</div></div>\n        </div>\n        <div id="sliderL">\n            <img src="assets/images/lightness.jpg" width="20" height="180">\n            <div id="sliderL-line"></div>\n        </div>\n        <div class="picker-swatch">\n            <input type="text" class="picker-input" value="hello"/>\n        </div>\n        </div>\n    </div>\n\n    <div id="schemer-outer">\n        <div class="grip"></div>\n        <div class="schemer-hint">\n        Define this scheme color by adjusting its differences from the Master color.\n        </div>\n        <div class="yui3-g">\n            <div class="yui3-u-1-12">\n                <div class="content">\n                    <div class="schemer-key" title="The master color">\n                    </div>\n                </div>\n            </div>\n\n            <div class="yui3-u-1-6">\n                <div class="content content-arrow">\n                    <!-- <div class="arrow-stem"></div> --><div class="arrow-head"></div>\n                </div>\n            </div>\n            \n            <div class="yui3-u-1-2">\n                <div class="content-controls">\n                    <div id="dial-scheme-hue"></div>\n                    <div class="slider-markup">\n                        <label>Saturation: </label> <span class="sat-output">4</span>\n                        <div id="slider-scheme-sat"></div>\n                    </div>\n                    <div class="slider-markup">\n                        <label>Lightness: </label> <span class="lit-output">2</span>\n                        <div id="slider-scheme-lit"></div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="yui3-u-1-6">\n                <div class="content content-arrow">\n                    <!-- <div class="arrow-stem"></div> --><div class="arrow-head"></div>\n                </div>\n            </div>\n            \n            <div class="yui3-u-1-12">\n                <div class="content">\n                    <div class="schemer-swatch" title="This scheme color">\n                    </div>\n                </div>\n            </div>\n        </div>            \n\n        <img class="close" src="assets/images/close.png" width="18" height="18" />\n    </div>\n    <div id="help-panel">\n        <img class="close" src="assets/images/close.png" width="18" height="18" />\n        <div class="bd">\n            help panel l;ksad eoiwr jsfoie jeofiwj eo\n        \n        </div>\n    </div>\n\n\n\n</div><!-- end tabview-controls-container for fixed position -->\n'
}),r=e.Template._cache=e.Template._cache||{},i={};e.Array.each([],function(e){r["skinbuilder/partials/"+e]&&(i[e]=r["skinbuilder/partials/"+e])}),r["skinbuilder/partials/controls"]=function(e){return n(e,{partials:i})}},"@VERSION@",{requires:["handlebars-base"]});