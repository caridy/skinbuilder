YUI.add("skin-datatable",function(e){e.Skin.renderers.datatable=function(e){var t=e.colorspace;return{captionPadding:e.padding(1,0),cellPadding:e.padding(.3,.6),headGradient:t.block.normal.gradient,headBackground:t.block.normal.background,headText:t.block.normal.text.normal,headBorder:t.border.low,cellBackground:t.background,cellText:t.text.normal,cellOddBackground:t.border.low,cellOddText:t.hover.text.normal,headSortedBackground:t.block.high.background,headSortedGradient:t.block.high.gradient,headSortedText:t.block.high.text.normal,headSortedHoverBackground:t.block.high.background,headSortedHoverText:t.block.high.text.normal,cellSortedEvenBackground:t.block.low.background,cellSortedOddBackground:t.block.low.border.low,cellSortedEvenText:t.block.low.hover.text.normal,border:t.border.low,captionText:t.block.container.text.low}}},"@VERSION@",{requires:["skin"]});