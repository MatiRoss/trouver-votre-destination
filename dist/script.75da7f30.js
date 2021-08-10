// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map = /*#__PURE__*/function () {
  function Map() {
    _classCallCheck(this, Map);
  }

  _createClass(Map, [{
    key: "createHtmlElement",
    value: function createHtmlElement() {
      var mapSection = document.createElement('section');
      var divMap = document.createElement('div');
      divMap.id = "mapid";
      mapSection.appendChild(divMap);
      document.getElementById('main').appendChild(mapSection);
      var map = L.map('mapid').setView([46.71109, 1.7191036], 1);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiamVhbm1pY2giLCJhIjoiY2tzNXFkemJrMDNmbjMwcm5pZ3JudDQ3bSJ9.uuUmf64xqEmVcGNhBmvI-g'
      }).addTo(map);
    }
  }]);

  return Map;
}();

var _default = Map;
exports.default = _default;
},{}],"components/CityInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Map = _interopRequireDefault(require("./Map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CityInput = /*#__PURE__*/function () {
  function CityInput() {
    _classCallCheck(this, CityInput);
  }

  _createClass(CityInput, [{
    key: "createHtmlElement",
    value: function createHtmlElement() {
      var componentName = CityInput.valueOf().name;
      var inputSection = document.createElement('section');
      inputSection.id = componentName;
      inputSection.className = "py-5 flex flex-col justify-center items-center";
      var label = document.createElement('label');
      label.textContent = "Entrez votre destination";
      inputSection.appendChild(label);
      var inputField = document.createElement('input');
      inputField.id = "input-search";
      inputField.type = "text";
      inputField.placeholder = "Lyon, Marseille, etc...";
      inputField.className = "text-center mt-2 h-14 rounded-3xl w-5/6 text-10 bg-gray-50 px-10 border-blue-500 border-2";
      inputSection.appendChild(inputField);
      document.getElementById('main').appendChild(inputSection);
    }
  }, {
    key: "searchCity",
    value: function searchCity(city) {
      var _this = this;

      var apiKey = "56b54737cee432fa16e84110b8e24e90";
      fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&lang=fr&appid=").concat(apiKey)).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.cod != 404) {
          var _data$coord = data.coord,
              lon = _data$coord.lon,
              lat = _data$coord.lat,
              name = data.name,
              weather = data.weather,
              _data$main = data.main,
              feels_like = _data$main.feels_like,
              humidity = _data$main.humidity,
              pressure = _data$main.pressure,
              temp = _data$main.temp,
              temp_max = _data$main.temp_max,
              temp_min = _data$main.temp_min;
          _this.allData = data; // map.setMap(lat, lon, 10);

          $('#titleWeather').html("La m\xE9t\xE9o sur ".concat(name));
          $('#descriptionWeather').html(weather.map(function (o) {
            return o.description;
          }).toString());
          $('#temperature').html("".concat(temp, "\xB0C"));
          $('#temperatureFeel').html("".concat(feels_like, "\xB0C"));
          $('#humidity').html("".concat(humidity, "%"));
          $('#pressure').html("".concat(pressure, "Pa"));
          $('#tempMax').html("".concat(temp_max, "\xB0C"));
          $('#tempMin').html("".concat(temp_min, "\xB0C"));
        }
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }]);

  return CityInput;
}();

_defineProperty(CityInput, "allData", void 0);

var _default = CityInput;
exports.default = _default;
},{"./Map":"components/Map.js"}],"components/Suggestions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CityInput = _interopRequireDefault(require("./CityInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Suggestions = /*#__PURE__*/function () {
  function Suggestions() {
    _classCallCheck(this, Suggestions);
  }

  _createClass(Suggestions, [{
    key: "createHtmlElement",
    value: function createHtmlElement() {
      var componentName = Suggestions.valueOf().name;
      var htmlSection = document.createElement('section');
      htmlSection.id = componentName;
      var card = document.createElement('div');
      var ville = document.createElement('span');
      var departement = document.createElement('span');
      card.setAttribute('class', 'flex flex-col min-w-1/6 h-16 px-2 items-center justify-center cursor-pointer');
      departement.setAttribute('class', 'text-gray-400 text-sm');
      card.appendChild(ville);
      card.appendChild(departement);
      ville.textContent = "VILLE";
      departement.textContent = "DEPARTEMENT";
      document.getElementById('main').appendChild(card);
    }
  }, {
    key: "searchForSuggestion",
    value: function searchForSuggestion(city) {
      var _this = this;

      fetch("https://geo.api.gouv.fr/communes?nom=".concat(city, "&fields=departement&boost=population&limit=5")).then(function (res) {
        return res.json();
      }).then(function (data) {
        var section = document.querySelector('#suggestions');
        section.innerHTML = '';

        if (data) {
          data.forEach(function (o) {
            return _this.generateSuggestion(o);
          });
        }
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "generateSuggestion",
    value: function generateSuggestion(data) {
      var _this2 = this;

      var nom = data.nom,
          code = data.code,
          _data$departement = data.departement,
          codeDepartement = _data$departement.code,
          nomDepartement = _data$departement.nom; // const card = document.createElement('div');
      // const ville = document.createElement('span');
      // const departement = document.createElement('span');
      // ville.innerHTML = `${nom} (${code})`;

      departement.innerHTML = "".concat(nomDepartement || '??', " (").concat(codeDepartement || '??', ")"); // card.setAttribute('class', 'flex flex-col min-w-1/6 h-16 px-2 items-center justify-center cursor-pointer');
      // departement.setAttribute('class', 'text-gray-400 text-sm')
      // card.appendChild(ville);
      // card.appendChild(departement);

      card.addEventListener('click', function () {
        $('#input-search').val(nom);

        _CityInput.default.searchCity(nom);

        _this2.searchForSuggestion(nom);
      });
      var section = document.querySelector('#suggestions');
      section.appendChild(card);
    }
  }]);

  return Suggestions;
}();

var _default = Suggestions;
exports.default = _default;
},{"./CityInput":"components/CityInput.js"}],"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "createHtmlElement",
    value: function createHtmlElement() {
      var headerSection = document.createElement('section');
      var header = document.createElement('header');
      header.className = "h-32 w-screen bg-gradient-to-t from-yellow-500 to-yellow-200 flex flex-col justify-center items-center";
      var h1 = document.createElement('h1');
      h1.className = "text-3xl font-medium";
      h1.textContent = "Bienvenue sur Trouver votre Destination!";
      var span = document.createElement('span');
      span.textContent = "Et partez en toute tranquilité";
      header.appendChild(h1);
      header.appendChild(span);
      headerSection.appendChild(header);
      document.getElementById('main').appendChild(headerSection);
    }
  }]);

  return Header;
}();

var _default = Header;
exports.default = _default;
},{}],"components/Description.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Description = /*#__PURE__*/function () {
  function Description() {
    _classCallCheck(this, Description);
  }

  _createClass(Description, [{
    key: "createHtmlElement",
    value: function createHtmlElement() {
      var descriptionSection = document.createElement('section');
      descriptionSection.setAttribute('class', 'flex flex-wrap justify-around');
      var descriptionDiv = document.createElement('div');
      descriptionDiv.setAttribute('class', "w-5/12 flex flex-col items-center m-5");
      descriptionSection.appendChild(descriptionDiv);
      var h3 = document.createElement('h3');
      h3.id = "descriptionWeather";
      h3.setAttribute('class', 'text-xl font-medium');
      h3.textContent = "Quel météo?";
      descriptionDiv.appendChild(h3);
      var span = document.createElement('span');
      span.id = "descriptionWeather";
      span.setAttribute('class', 'italic');
      descriptionDiv.appendChild(span);
      document.getElementById('main').appendChild(descriptionSection);
    }
  }]);

  return Description;
}();

var _default = Description; // <section className="flex flex-wrap justify-around">-->
// <!--        <div class="w-5/12 flex flex-col items-center m-5">-->
// <!--            <h3 id="titleWeather" class="text-xl font-medium">Quel météo?</h3>-->
// <!--            <span id="descriptionWeather" class="italic"></span>-->
// <!--            <ul>-->
// <!--                <li>Il fait <span id="temperature">surement très chaud!</span></li>-->
// <!--                <li>La température ressentie est <span id="temperatureFeel">encore plus chaude!</span></li>-->
// <!--                <li>L'humidité est de <span id="humidity">100% pour le pastis!</span></li>-->
// <!--                <li>La pression est de <span id="pressure">0 au niveau des tongs.</span></li>-->
// <!--                <li>La température maximum sera de <span id="tempMax">beaucoup.</span></li>-->
// <!--                <li>La température minimum sera de <span id="tempMin">quelques degrés de moins.</span></li>-->
// <!--            </ul>-->
// <!--        </div>-->
// <!--    </section>-->

exports.default = _default;
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _CityInput = _interopRequireDefault(require("/components/CityInput"));

var _Suggestions = _interopRequireDefault(require("./components/Suggestions"));

var _Map = _interopRequireDefault(require("./components/Map"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Description = _interopRequireDefault(require("./components/Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cityInput = new _CityInput.default();
var suggestions = new _Suggestions.default();
var map = new _Map.default();
var header = new _Header.default();
var description = new _Description.default();
var main = document.getElementById('main');
var componentsArray = [header, cityInput, suggestions, map, description];
componentsArray.forEach(function (component) {
  component.createHtmlElement();
}); // $("#input-search").change(function () {
//     const city = this.value;
//     cityInput.searchCity(city);
//     suggestions.searchForSuggestion(city);
// });
},{"/components/CityInput":"components/CityInput.js","./components/Suggestions":"components/Suggestions.js","./components/Map":"components/Map.js","./components/Header":"components/Header.js","./components/Description":"components/Description.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42275" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map