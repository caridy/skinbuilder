YUI.add("skin-buttons",function(e){e.Skin.renderers.buttons=function(e){var t=e.colorspace;return{buttonRadius:e.radius(.2),padding:e.padding(.5,1.5,.5),background:t.block.high.background,text:t.block.high.text.normal,borderLow:t.block.high.border.low,selectedBackground:t.block.highest.background,selectedGradient:t.block.highest.gradient,selectedText:t.block.highest.text.high}}},"@VERSION@",{requires:["skin"]});