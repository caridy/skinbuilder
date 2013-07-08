
(function (g) {
// -- Namespaces --
g.app || (g.app = {});
g.YUI_config || (g.YUI_config = {});

// -- Exposed --
g.YUI_config = {"version":"3.10.3","base":"/yui-3.10.3/","comboBase":"/combo~","comboSep":"~","root":"/yui-3.10.3/","filter":"debug","combine":false,"logInclude":{"TestRunner":true},"debug":true,"logLevel":"debug","useBrowserConsole":true,"maxURLLength":1024,"groups":{"skinbuilder":{"base":"/skinbuilder-0.0.1/","root":"/skinbuilder-0.0.1/","combine":false,"filter":"debug","maxURLLength":1024,"comboBase":"/combo~","comboSep":"~"}},"seed":["yui","loader-skinbuilder@skinbuilder"],"extendedCore":["loader-skinbuilder"]};
g.app.yui = {"use":function bootstrap() { var self = this, d = document, head = d.getElementsByTagName('head')[0], ie = /MSIE/.test(navigator.userAgent), pending = 0, callback = [], args = arguments, config = typeof YUI_config != "undefined" ? YUI_config : {}; function flush() { var l = callback.length, i; if (!self.YUI && typeof YUI == "undefined") { throw new Error("YUI was not injected correctly!"); } self.YUI = self.YUI || YUI; for (i = 0; i < l; i++) { callback.shift()(); } } function decrementRequestPending() { pending--; if (pending <= 0) { setTimeout(flush, 0); } else { load(); } } function createScriptNode(src) { var node = d.createElement('script'); if (node.async) { node.async = false; } if (ie) { node.onreadystatechange = function () { if (/loaded|complete/.test(this.readyState)) { this.onreadystatechange = null; } decrementRequestPending(); }; } else { node.onload = node.onerror = decrementRequestPending; } node.setAttribute('src', src); return node; } function load() { if (!config.seed) { throw new Error('YUI_config.seed array is required.'); } var seed = config.seed, l = seed.length, i, node; pending = seed.length; self._injected = true; for (i = 0; i < l; i++) { node = createScriptNode(seed.shift()); head.appendChild(node); if (node.async !== false) { break; } } } callback.push(function () { if (!self._Y) { self.YUI.Env.core.push.apply(self.YUI.Env.core, config.extendedCore || []); self._Y = self.YUI(); self.use = self._Y.use; } self._Y.use.apply(self._Y, args); }); self.YUI = self.YUI || (typeof YUI != "undefined" ? YUI : null); if (!self.YUI && !self._injected) { load(); } else if (pending <= 0) { flush(); } return this; },"ready":function (callback) { this.use(callback); }};
g.YUI_config.seed = ["/yui-3.10.3/yui/yui-debug.js","/skinbuilder-0.0.1/loader-skinbuilder/loader-skinbuilder-debug.js"];
}(this));

app.yui.use('skinner-popup');
