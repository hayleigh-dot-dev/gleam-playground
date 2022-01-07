// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"em4Qp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "aa9dba8ca27d5955";
module.bundle.HMR_BUNDLE_ID = "1d6298d033522cf5"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1NxEw":[function(require,module,exports) {
var _app = require("./gen/app");
_app.main();

},{"./gen/app":"byIH7"}],"byIH7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main
);
var _elementJs = require("./playground/dom/element.js");
var _eventJs = require("./playground/dom/event.js");
var _svgJs = require("./playground/dom/svg.js");
var _programJs = require("./playground/program.js");
var _consoleJs = require("./playground/util/console.js");
"use strict";
const svg_namespace = "http://www.w3.org/2000/svg";
function main() {
    let app = _programJs.start(init(), draw, update);
    _programJs.on_key_down(app, key_down);
    return _programJs.on_key_up(app, key_up);
}
function init() {
    return {
        type: "Model",
        width: 600,
        height: 600,
        x_pos: 275,
        x_vel: 0,
        y_pos: 275,
        y_vel: 0
    };
}
function draw(model) {
    return _svgJs.svg([
        _svgJs.width(model.width),
        [
            _svgJs.height(model.height),
            []
        ]
    ], [
        _svgJs.rect([
            _svgJs.width(50),
            [
                _svgJs.height(50),
                [
                    _svgJs.x(model.x_pos),
                    [
                        _svgJs.y(model.y_pos),
                        [
                            _svgJs.fill("blue"),
                            []
                        ]
                    ]
                ]
            ], 
        ], []),
        [], 
    ]);
}
function update(model) {
    let x_pos = clamp(model.x_pos + model.x_vel, 0, 600);
    let y_pos = clamp(model.y_pos + model.y_vel, 0, 600);
    return Object.assign({
    }, model, {
        x_pos: x_pos,
        y_pos: y_pos
    });
}
function key_down(model, event) {
    let $ = event.key;
    if ($ === "ArrowUp") return Object.assign({
    }, model, {
        y_vel: -5
    });
    else if ($ === "ArrowDown") return Object.assign({
    }, model, {
        y_vel: 5
    });
    else if ($ === "ArrowLeft") return Object.assign({
    }, model, {
        x_vel: -5
    });
    else if ($ === "ArrowRight") return Object.assign({
    }, model, {
        x_vel: 5
    });
    else {
        let other = $;
        return model;
    }
}
function key_up(model, event) {
    let $ = event.key;
    if ($ === "ArrowUp") return Object.assign({
    }, model, {
        y_vel: 0
    });
    else if ($ === "ArrowDown") return Object.assign({
    }, model, {
        y_vel: 0
    });
    else if ($ === "ArrowLeft") return Object.assign({
    }, model, {
        x_vel: 0
    });
    else if ($ === "ArrowRight") return Object.assign({
    }, model, {
        x_vel: 0
    });
    else {
        let other = $;
        return model;
    }
}
function clamp(val, min, max) {
    let $ = val < min;
    if ($) return min;
    else if (!$) {
        let $1 = val > max;
        if ($1) return max;
        else if (!$1) return val;
        else throw new Error("Bad match");
    } else throw new Error("Bad match");
}

},{"./playground/dom/element.js":"6NO26","./playground/dom/svg.js":"36wdM","./playground/program.js":"a00qt","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","./playground/util/console.js":"h9Z6s","./playground/dom/event.js":"TcmsQ"}],"6NO26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render_into", ()=>_elementFfiJs.render_into
);
parcelHelpers.export(exports, "element", ()=>_elementFfiJs.element
);
parcelHelpers.export(exports, "element_namespaced", ()=>_elementFfiJs.element_namespaced
);
parcelHelpers.export(exports, "text", ()=>_elementFfiJs.text
);
parcelHelpers.export(exports, "attr", ()=>attr
);
parcelHelpers.export(exports, "attr_namespaced", ()=>attr_namespaced
);
parcelHelpers.export(exports, "prop", ()=>prop
);
parcelHelpers.export(exports, "int_prop", ()=>int_prop
);
parcelHelpers.export(exports, "float_prop", ()=>float_prop
);
parcelHelpers.export(exports, "add_event_listener", ()=>_elementFfiJs.add_event_listener
);
var _anyJs = require("../../playground/util/any.js");
var _elementFfiJs = require("./element.ffi.js");
"use strict";
function attr(name, value) {
    return {
        type: "Attr",
        namespace: "",
        name: name,
        value: value
    };
}
function attr_namespaced(namespace, name, value) {
    return {
        type: "Attr",
        namespace: namespace,
        name: name,
        value: value
    };
}
function prop(name, value) {
    return {
        type: "Prop",
        name: name,
        value: value
    };
}
function int_prop(name, value) {
    return {
        type: "Prop",
        name: name,
        value: _anyJs.from(value)
    };
}
function float_prop(name, value) {
    return {
        type: "Prop",
        name: name,
        value: _anyJs.from(value)
    };
}

},{"../../playground/util/any.js":"2eYuf","./element.ffi.js":"59kcW","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"2eYuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>_anyFfiJs.from
);
parcelHelpers.export(exports, "to_string", ()=>_anyFfiJs.to_string
);
parcelHelpers.export(exports, "cast", ()=>_anyFfiJs.from
);
var _anyFfiJs = require("./any.ffi.js");
"use strict";

},{"./any.ffi.js":"249JW","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"249JW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
parcelHelpers.export(exports, "to_string", ()=>to_string
);
const from = (val)=>val
;
const to_string = (val)=>{
    return val.to_string ? val.to_string() : val + '';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"kcMTN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"59kcW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render_into", ()=>render_into
);
parcelHelpers.export(exports, "element_namespaced", ()=>element_namespaced
);
parcelHelpers.export(exports, "element", ()=>element
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "add_event_listener", ()=>add_event_listener
);
var _morphdom = require("morphdom");
var _morphdomDefault = parcelHelpers.interopDefault(_morphdom);
const render_into = (el, target)=>{
    const prev = target.firstChild;
    prev ? _morphdomDefault.default(prev, el) : target.appendChild(el);
};
const element_namespaced = (namespace, tag, attrs, children)=>{
    const el = namespace ? document.createElementNS(namespace, tag) : document.createElement(tag);
    attrs.flat(Infinity).forEach((attr)=>{
        switch(attr.type){
            case 'Attr':
                {
                    const { namespace: namespace1 , name , value  } = attr;
                    namespace1 ? el.setAttributeNS(namespace1, name, value) : el.setAttribute(name, value);
                    break;
                }
            case 'Prop':
                {
                    const { name , value  } = attr;
                    el[name] = value;
                    break;
                }
        }
    });
    children.flat(Infinity).forEach((child)=>{
        el.appendChild(child);
    });
    return el;
};
const element = element_namespaced.bind(null, '');
const text = (content)=>{
    return document.createTextNode(content);
};
const add_event_listener = (el, event, f)=>{
    el.addEventListener(event, f);
};

},{"morphdom":"9fiMJ","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"9fiMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;
    // document-fragments dont have attributes so lets not do anything
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) return;
    // update attributes on original DOM element
    for(var i = toNodeAttrs.length - 1; i >= 0; i--){
        attr = toNodeAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;
        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
            if (fromValue !== attrValue) {
                if (attr.prefix === 'xmlns') attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);
            if (fromValue !== attrValue) fromNode.setAttribute(attrName, attrValue);
        }
    }
    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    var fromNodeAttrs = fromNode.attributes;
    for(var d = fromNodeAttrs.length - 1; d >= 0; d--){
        attr = fromNodeAttrs[d];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) fromNode.removeAttributeNS(attrNamespaceURI, attrName);
        } else if (!toNode.hasAttribute(attrName)) fromNode.removeAttribute(attrName);
    }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
    var template = doc.createElement('template');
    template.innerHTML = str;
    return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
    if (!range) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }
    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
    var fragment = doc.createElement('body');
    fragment.innerHTML = str;
    return fragment.childNodes[0];
}
/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */ function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
    else if (HAS_RANGE_SUPPORT) return createFragmentFromRange(str);
    return createFragmentFromWrap(str);
}
/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */ function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;
    if (fromNodeName === toNodeName) return true;
    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);
    // If the target element is a virtual DOM node or SVG node then we may
    // need to normalize the tag name before comparing. Normal HTML elements that are
    // in the "http://www.w3.org/1999/xhtml"
    // are converted to upper case
    if (fromCodeStart <= 90 && toCodeStart >= 97) return fromNodeName === toNodeName.toUpperCase();
    else if (toCodeStart <= 90 && fromCodeStart >= 97) return toNodeName === fromNodeName.toUpperCase();
    else return false;
}
/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */ function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
/**
 * Copies the children of one DOM element to another DOM element
 */ function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while(curChild){
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) fromEl.setAttribute(name, '');
        else fromEl.removeAttribute(name);
    }
}
var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
        var parentNode = fromEl.parentNode;
        if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === 'OPTGROUP') {
                parentNode = parentNode.parentNode;
                parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                if (fromEl.hasAttribute('selected') && !toEl.selected) {
                    // Workaround for MS Edge bug where the 'selected' attribute can only be
                    // removed if set to a non-empty value:
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                    fromEl.setAttribute('selected', 'selected');
                    fromEl.removeAttribute('selected');
                }
                // We have to reset select element's selectedIndex to -1, otherwise setting
                // fromEl.selected using the syncBooleanAttrProp below has no effect.
                // The correct selectedIndex will be set in the SELECT special handler below.
                parentNode.selectedIndex = -1;
            }
        }
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */ INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');
        if (fromEl.value !== toEl.value) fromEl.value = toEl.value;
        if (!toEl.hasAttribute('value')) fromEl.removeAttribute('value');
    },
    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) fromEl.value = newValue;
        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;
            if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) return;
            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!toEl.hasAttribute('multiple')) {
            var selectedIndex = -1;
            var i = 0;
            // We have to loop through children of fromEl, not toEl since nodes can be moved
            // from toEl to fromEl directly when morphing.
            // At the time this special handler is invoked, all children have already been morphed
            // and appended to / removed from fromEl, so using fromEl here is safe and correct.
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while(curChild){
                nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                if (nodeName === 'OPTGROUP') {
                    optgroup = curChild;
                    curChild = optgroup.firstChild;
                } else {
                    if (nodeName === 'OPTION') {
                        if (curChild.hasAttribute('selected')) {
                            selectedIndex = i;
                            break;
                        }
                        i++;
                    }
                    curChild = curChild.nextSibling;
                    if (!curChild && optgroup) {
                        curChild = optgroup.nextSibling;
                        optgroup = null;
                    }
                }
            }
            fromEl.selectedIndex = selectedIndex;
        }
    }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {
}
function defaultGetNodeKey(node) {
    if (node) return node.getAttribute && node.getAttribute('id') || node.id;
}
function morphdomFactory(morphAttrs1) {
    return function morphdom(fromNode, toNode, options) {
        if (!options) options = {
        };
        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else toNode = toElement(toNode);
        }
        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;
        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = Object.create(null);
        var keyedRemovalList = [];
        function addKeyedRemoval(key) {
            keyedRemovalList.push(key);
        }
        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while(curChild){
                    var key = undefined;
                    if (skipKeyedNodes && (key = getNodeKey(curChild))) // If we are skipping keyed nodes then we add the key
                    // to a list so that it can be handled at the very end.
                    addKeyedRemoval(key);
                    else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) walkDiscardedChildNodes(curChild, skipKeyedNodes);
                    }
                    curChild = curChild.nextSibling;
                }
            }
        }
        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */ function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) return;
            if (parentNode) parentNode.removeChild(node);
            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }
        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }
        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }
        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
                var curChild = node.firstChild;
                while(curChild){
                    var key = getNodeKey(curChild);
                    if (key) fromNodesLookup[key] = curChild;
                    // Walk recursively
                    indexTree(curChild);
                    curChild = curChild.nextSibling;
                }
            }
        }
        indexTree(fromNode);
        function handleNodeAdded(el) {
            onNodeAdded(el);
            var curChild = el.firstChild;
            while(curChild){
                var nextSibling = curChild.nextSibling;
                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    // if we find a duplicate #id node in cache, replace `el` with cache value
                    // and morph it to the child node.
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    } else handleNodeAdded(curChild);
                } else // recursively call for curChild and it's children to see if we find something in
                // fromNodesLookup
                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }
        function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while(curFromNodeChild){
                var fromNextSibling = curFromNodeChild.nextSibling;
                if (curFromNodeKey = getNodeKey(curFromNodeChild)) // Since the node is keyed it might be matched up later so we defer
                // the actual removal to later
                addKeyedRemoval(curFromNodeKey);
                else // NOTE: we skip nested keyed nodes from being removed since there is
                //       still a chance they will be matched up later
                removeNode(curFromNodeChild, fromEl, true);
                curFromNodeChild = fromNextSibling;
            }
        }
        function morphEl(fromEl, toEl, childrenOnly1) {
            var toElKey = getNodeKey(toEl);
            if (toElKey) // If an element with an ID is being morphed then it will be in the final
            // DOM so clear it out of the saved elements collection
            delete fromNodesLookup[toElKey];
            if (!childrenOnly1) {
                // optional
                if (onBeforeElUpdated(fromEl, toEl) === false) return;
                // update attributes on original DOM element first
                morphAttrs1(fromEl, toEl);
                // optional
                onElUpdated(fromEl);
                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) return;
            }
            if (fromEl.nodeName !== 'TEXTAREA') morphChildren(fromEl, toEl);
            else specialElHandlers.TEXTAREA(fromEl, toEl);
        }
        function morphChildren(fromEl, toEl) {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;
            var curFromNodeKey;
            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;
            // walk the children
            outer: while(curToNodeChild){
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = getNodeKey(curToNodeChild);
                // walk the fromNode children all the way through
                while(curFromNodeChild){
                    fromNextSibling = curFromNodeChild.nextSibling;
                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }
                    curFromNodeKey = getNodeKey(curFromNodeChild);
                    var curFromNodeType = curFromNodeChild.nodeType;
                    // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
                    var isCompatible = undefined;
                    if (curFromNodeType === curToNodeChild.nodeType) {
                        if (curFromNodeType === ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes
                            if (curToNodeKey) // The target node has a key so we want to match it up with the correct element
                            // in the original DOM tree
                            {
                                if (curToNodeKey !== curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                                        if (fromNextSibling === matchingFromEl) // Special case for single element removals. To avoid removing the original
                                        // DOM node out of the tree (since that can break CSS transitions, etc.),
                                        // we will instead discard the current node and wait until the next
                                        // iteration to properly match up the keyed target element with its matching
                                        // element in the original tree
                                        isCompatible = false;
                                        else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's move the original DOM node into the current position and morph
                                            // it.
                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                                            // fromNextSibling = curFromNodeChild.nextSibling;
                                            if (curFromNodeKey) // Since the node is keyed it might be matched up later so we defer
                                            // the actual removal to later
                                            addKeyedRemoval(curFromNodeKey);
                                            else // NOTE: we skip nested keyed nodes from being removed since there is
                                            //       still a chance they will be matched up later
                                            removeNode(curFromNodeChild, fromEl, true);
                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else // The nodes are not compatible since the "to" node has a key and there
                                    // is no matching keyed node in the source tree
                                    isCompatible = false;
                                }
                            } else if (curFromNodeKey) // The original has a key
                            isCompatible = false;
                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) // We found compatible DOM elements so transform
                            // the current "from" node to match the current
                            // target DOM node.
                            // MORPH
                            morphEl(curFromNodeChild, curToNodeChild);
                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }
                    }
                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        // Nothing else to do as we already recursively called morphChildren above
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }
                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                    else // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true);
                    curFromNodeChild = fromNextSibling;
                } // END: while(curFromNodeChild) {}
                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    // MORPH
                    morphEl(matchingFromEl, curToNodeChild);
                } else {
                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                    if (onBeforeNodeAddedResult !== false) {
                        if (onBeforeNodeAddedResult) curToNodeChild = onBeforeNodeAddedResult;
                        if (curToNodeChild.actualize) curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                        fromEl.appendChild(curToNodeChild);
                        handleNodeAdded(curToNodeChild);
                    }
                }
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }
            cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) specialElHandler(fromEl, toEl);
        } // END: morphChildren(...)
        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;
        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else // Going from an element node to a text node
                morphedNode = toNode;
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) morphedNode.nodeValue = toNode.nodeValue;
                    return morphedNode;
                } else // Text node to something else
                morphedNode = toNode;
            }
        }
        if (morphedNode === toNode) // The "to node" was not compatible with the "from node" so we had to
        // toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
        else {
            if (toNode.isSameNode && toNode.isSameNode(morphedNode)) return;
            morphEl(morphedNode, toNode, childrenOnly);
            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) for(var i = 0, len = keyedRemovalList.length; i < len; i++){
                var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                if (elToRemove) removeNode(elToRemove, elToRemove.parentNode, false);
            }
        }
        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }
        return morphedNode;
    };
}
var morphdom = morphdomFactory(morphAttrs);
exports.default = morphdom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"36wdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "namespace", ()=>namespace
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "rect", ()=>rect
);
parcelHelpers.export(exports, "width", ()=>width
);
parcelHelpers.export(exports, "height", ()=>height
);
parcelHelpers.export(exports, "x", ()=>x
);
parcelHelpers.export(exports, "y", ()=>y
);
parcelHelpers.export(exports, "fill", ()=>fill
);
var _anyJs = require("../../playground/util/any.js");
var _elementJs = require("../../playground/dom/element.js");
"use strict";
const namespace = "http://www.w3.org/2000/svg";
function svg(attrs, children) {
    return _elementJs.element_namespaced(namespace, "svg", attrs, children);
}
function rect(attrs, children) {
    return _elementJs.element_namespaced(namespace, "rect", attrs, children);
}
function width(val) {
    return _elementJs.attr("width", _anyJs.to_string(val));
}
function height(val) {
    return _elementJs.attr("height", _anyJs.to_string(val));
}
function x(val) {
    return _elementJs.attr("x", _anyJs.to_string(val));
}
function y(val) {
    return _elementJs.attr("y", _anyJs.to_string(val));
}
function fill(val) {
    return _elementJs.attr("fill", val);
}

},{"../../playground/util/any.js":"2eYuf","../../playground/dom/element.js":"6NO26","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"a00qt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "on", ()=>on
);
parcelHelpers.export(exports, "on_key_down", ()=>on_key_down
);
parcelHelpers.export(exports, "on_key_up", ()=>on_key_up
);
var _documentJs = require("../playground/dom/document.js");
var _elementJs = require("../playground/dom/element.js");
var _eventJs = require("../playground/dom/event.js");
var _anyJs = require("../playground/util/any.js");
var _refJs = require("../playground/util/ref.js");
"use strict";
function start(model, draw, update) {
    let program = {
        type: "Program",
        model: _refJs.from(model),
        draw: draw,
        root: _documentJs.query_selector("body"),
        update: update,
        id: _refJs.from(0)
    };
    _elementJs.render_into(program.draw(_refJs.get(program.model)), program.root);
    _refJs.update(program.model, program.update);
    let id = request_animation_frame(tick(program));
    _refJs.set(program.id, id);
    return program;
}
function request_animation_frame(f) {
    return window.requestAnimationFrame(f);
}
function tick(program) {
    return ()=>{
        _elementJs.render_into(program.draw(_refJs.get(program.model)), program.root);
        _refJs.update(program.model, program.update);
        let id = request_animation_frame(tick(program));
        return _refJs.set(program.id, id);
    };
}
function cancel_animation_frame(id) {
    return window.cancelAnimationFrame(id);
}
function stop(program) {
    cancel_animation_frame(_refJs.get(program.id));
    _refJs.set(program.id, 0);
    return program;
}
function on(program, event, f) {
    return _elementJs.add_event_listener(program.root, event, (e)=>{
        _refJs.update(program.model, (_gleam_capture)=>{
            return f(_gleam_capture, e);
        });
        return undefined;
    });
}
function on_key_down(program, f) {
    return on(program, "keydown", (model, e)=>{
        let event$1 = _anyJs.cast(e);
        return f(model, event$1);
    });
}
function on_key_up(program, f) {
    return on(program, "keyup", (model, e)=>{
        let event$1 = _anyJs.cast(e);
        return f(model, event$1);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN","../playground/dom/document.js":"6391Y","../playground/dom/element.js":"6NO26","../playground/util/any.js":"2eYuf","../playground/util/ref.js":"l49wt","../playground/dom/event.js":"TcmsQ"}],"6391Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query_selector", ()=>query_selector
);
var _elementJs = require("../../playground/dom/element.js");
"use strict";
function query_selector(selector) {
    return document.querySelector(selector);
}

},{"../../playground/dom/element.js":"6NO26","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"l49wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>_refFfiJs.from
);
parcelHelpers.export(exports, "get", ()=>_refFfiJs.get
);
parcelHelpers.export(exports, "set", ()=>_refFfiJs.set
);
parcelHelpers.export(exports, "update", ()=>_refFfiJs.update
);
var _refFfiJs = require("./ref.ffi.js");
"use strict";

},{"./ref.ffi.js":"mkQBw","@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"mkQBw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
parcelHelpers.export(exports, "get", ()=>get
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "update", ()=>update
);
const from = (val)=>({
        type: 'Ref',
        value: val
    })
;
const get = (ref)=>{
    return ref.value;
};
const set = (ref, val)=>{
    ref.value = val;
    return ref;
};
const update = (ref, f)=>{
    ref.value = f(ref.value);
    return ref;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}],"TcmsQ":[function(require,module,exports) {
"use strict";

},{}],"h9Z6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assert_", ()=>assert_
);
parcelHelpers.export(exports, "clear", ()=>clear
);
parcelHelpers.export(exports, "count", ()=>count
);
parcelHelpers.export(exports, "count_reset", ()=>count_reset
);
parcelHelpers.export(exports, "debug", ()=>debug
);
parcelHelpers.export(exports, "dir", ()=>dir
);
parcelHelpers.export(exports, "dirxml", ()=>dirxml
);
parcelHelpers.export(exports, "error", ()=>error
);
parcelHelpers.export(exports, "group", ()=>group
);
parcelHelpers.export(exports, "group_collapsed", ()=>group_collapsed
);
parcelHelpers.export(exports, "group_end", ()=>group_end
);
parcelHelpers.export(exports, "info", ()=>info
);
parcelHelpers.export(exports, "log", ()=>log
);
parcelHelpers.export(exports, "table", ()=>table
);
parcelHelpers.export(exports, "time", ()=>time
);
parcelHelpers.export(exports, "time_end", ()=>time_end
);
parcelHelpers.export(exports, "time_log", ()=>time_log
);
parcelHelpers.export(exports, "trace", ()=>trace
);
parcelHelpers.export(exports, "warn", ()=>warn
);
"use strict";
function assert_(assertion, msg) {
    return window.console.assert(assertion, msg);
}
function clear() {
    return window.console.clear();
}
function count(label) {
    return window.console.count(label);
}
function count_reset(label) {
    return window.console.countReset(label);
}
function debug(msg) {
    return window.console.debug(msg);
}
function dir(obj) {
    return window.console.dir(obj);
}
function dirxml(obj) {
    return window.console.dirxml(obj);
}
function error(msg) {
    return window.console.error(msg);
}
function group(label) {
    return window.console.group(label);
}
function group_collapsed(label) {
    return window.console.groupCollapsed(label);
}
function group_end(label) {
    return window.console.groupEnd(label);
}
function info(msg) {
    return window.console.info(msg);
}
function log(msg) {
    return window.console.log(msg);
}
function table(data) {
    return window.console.table(data);
}
function time(label) {
    return window.console.time(label);
}
function time_end(label) {
    return window.console.timeEnd(label);
}
function time_log(label) {
    return window.console.timeLog(label);
}
function trace(data) {
    return window.console.trace(data);
}
function warn(msg) {
    return window.console.warn(msg);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kcMTN"}]},["em4Qp","1NxEw"], "1NxEw", "parcelRequire3748")

//# sourceMappingURL=index.33522cf5.js.map
