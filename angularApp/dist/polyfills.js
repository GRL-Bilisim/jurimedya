(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["polyfills"],{

/***/ 34266:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2015/init.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$localize": function() { return /* binding */ $localize; }
/* harmony export */ });
/**
 * @license Angular v12.0.3
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __globalThis = typeof globalThis !== 'undefined' && globalThis;

var __window = typeof window !== 'undefined' && window;

var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

var __global = typeof global !== 'undefined' && global; // Always use __globalThis if available; this is the spec-defined global variable across all
// environments.
// Then fallback to __global first; in Node tests both __global and __window may be defined.


var _global = __globalThis || __global || __window || __self;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular 18n guide](guide/i18n#mark-text-for-translations).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 *
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 *
 * @globalApi
 * @publicApi
 */


var $localize = function $localize(messageParts) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  if ($localize.translate) {
    // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
    var translation = $localize.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }

  var message = stripBlock(messageParts[0], messageParts.raw[0]);

  for (var i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }

  return message;
};

var BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */

function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */


function findEndOfBlock(cooked, raw) {
  /***********************************************************************************************
   * This function is repeated in `src/utils/messages.ts` and the two should be kept in sync.
   * The reason is that this file is marked as having side-effects, and if we import `messages.ts`
   * into it, the whole of `src/utils` will be included in this bundle and none of the functions
   * will be tree shaken.
   ***********************************************************************************************/
  for (var cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === '\\') {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER) {
      return cookedIndex;
    }
  }

  throw new Error("Unterminated $localize metadata block in \"".concat(raw, "\"."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Attach $localize to the global context, as a side-effect of this module.


_global.$localize = $localize;


/***/ }),

/***/ 60482:
/*!************************************************!*\
  !*** ./node_modules/classlist.js/classList.js ***!
  \************************************************/
/***/ (function() {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if ("document" in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
    (function (view) {
      "use strict";

      if (!('Element' in view)) return;

      var classListProp = "classList",
          protoProp = "prototype",
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;

        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }

        return -1;
      } // Vendors: please allow content code to instantiate DOMExceptions
      ,
          DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === "") {
          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
        }

        if (/\s/.test(token)) {
          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
        }

        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;

        for (; i < len; i++) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute("class", this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      }; // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.


      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;

        do {
          token = tokens[i] + "";

          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;

        do {
          token = tokens[i] + "";
          index = checkTokenAndGetIndex(this, token);

          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += "";
        var result = this.contains(token),
            method = result ? force !== true && "remove" : force !== false && "add";

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };

      classListProto.toString = function () {
        return this.join(" ");
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };

        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  } else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    (function () {
      "use strict";

      var testElement = document.createElement("_");
      testElement.classList.add("c1", "c2"); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.

      if (!testElement.classList.contains("c2")) {
        var createMethod = function createMethod(method) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            var i,
                len = arguments.length;

            for (i = 0; i < len; i++) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };

        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle("c3", false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.

      if (testElement.classList.contains("c3")) {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };
      }

      testElement = null;
    })();
  }
}

/***/ }),

/***/ 64250:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * @license Angular v12.0.0-next.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ 1173).default;

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ 41413).default;

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ 24084).default;

var Zone$1 = function (global) {
  var performance = global['performance'];

  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }

  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }

  mark('Zone'); // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.

  var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

  function __symbol__(name) {
    return symbolPrefix + name;
  }

  var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }

  var Zone = /*#__PURE__*/function () {
    function Zone(parent, zoneSpec) {
      _classCallCheck(this, Zone);

      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }

    _createClass(Zone, [{
      key: "parent",
      get: function get() {
        return this._parent;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "get",
      value: function get(key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      }
    }, {
      key: "getZoneWith",
      value: function getZoneWith(key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      }
    }, {
      key: "fork",
      value: function fork(zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      }
    }, {
      key: "wrap",
      value: function wrap(callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      }
    }, {
      key: "run",
      value: function run(callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      }
    }, {
      key: "runGuarded",
      value: function runGuarded(callback) {
        var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
        var source = arguments.length > 3 ? arguments[3] : undefined;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      }
    }, {
      key: "runTask",
      value: function runTask(task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      }
    }, {
      key: "scheduleTask",
      value: function scheduleTask(task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      }
    }, {
      key: "scheduleMicroTask",
      value: function scheduleMicroTask(source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      }
    }, {
      key: "scheduleMacroTask",
      value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      }
    }, {
      key: "scheduleEventTask",
      value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      }
    }, {
      key: "cancelTask",
      value: function cancelTask(task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      }
    }, {
      key: "_updateTaskCount",
      value: function _updateTaskCount(task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      }
    }], [{
      key: "assertZonePatched",
      value: function assertZonePatched() {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      }
    }, {
      key: "root",
      get: function get() {
        var zone = Zone.current;

        while (zone.parent) {
          zone = zone.parent;
        }

        return zone;
      }
    }, {
      key: "current",
      get: function get() {
        return _currentZoneFrame.zone;
      }
    }, {
      key: "currentTask",
      get: function get() {
        return _currentTask;
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "__load_patch",
      value: function __load_patch(name, fn) {
        var ignoreDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      }
    }]);

    return Zone;
  }(); // tslint:disable-next-line:require-internal-with-underscore


  Zone.__symbol__ = __symbol__;
  var DELEGATE_ZS = {
    name: '',
    onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
      return delegate.hasTask(target, hasTaskState);
    },
    onScheduleTask: function onScheduleTask(delegate, _, target, task) {
      return delegate.scheduleTask(target, task);
    },
    onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
      return delegate.invokeTask(target, task, applyThis, applyArgs);
    },
    onCancelTask: function onCancelTask(delegate, _, target, task) {
      return delegate.cancelTask(target, task);
    }
  };

  var ZoneDelegate = /*#__PURE__*/function () {
    function ZoneDelegate(zone, parentDelegate, zoneSpec) {
      _classCallCheck(this, ZoneDelegate);

      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;

        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }

    _createClass(ZoneDelegate, [{
      key: "fork",
      value: function fork(targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      }
    }, {
      key: "intercept",
      value: function intercept(targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      }
    }, {
      key: "invoke",
      value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      }
    }, {
      key: "handleError",
      value: function handleError(targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      }
    }, {
      key: "scheduleTask",
      value: function scheduleTask(targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      }
    }, {
      key: "invokeTask",
      value: function invokeTask(targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      }
    }, {
      key: "cancelTask",
      value: function cancelTask(targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      }
    }, {
      key: "hasTask",
      value: function hasTask(targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "_updateTaskCount",
      value: function _updateTaskCount(type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      }
    }]);

    return ZoneDelegate;
  }();

  var ZoneTask = /*#__PURE__*/function () {
    function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
      _classCallCheck(this, ZoneTask);

      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

      this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;

      if (!callback) {
        throw new Error('callback is not defined');
      }

      this.callback = callback;
      var self = this; // TODO: @JiaLiPassion options should have interface

      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }

    _createClass(ZoneTask, [{
      key: "zone",
      get: function get() {
        return this._zone;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
    }, {
      key: "cancelScheduleRequest",
      value: function cancelScheduleRequest() {
        this._transitionTo(notScheduled, scheduling);
      } // tslint:disable-next-line:require-internal-with-underscore

    }, {
      key: "_transitionTo",
      value: function _transitionTo(toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      } // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)

    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      }
    }], [{
      key: "invokeTask",
      value: function invokeTask(task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      }
    }]);

    return ZoneTask;
  }(); //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  var symbolSetTimeout = __symbol__('setTimeout');

  var symbolPromise = __symbol__('Promise');

  var symbolThen = __symbol__('then');

  var _microTaskQueue = [];
  var _isDrainingMicrotaskQueue = false;
  var nativeMicroTaskQueuePromise;

  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }

      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }

        nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
      } else {
        global[symbolSetTimeout](drainMicroTaskQueue, 0);
      }
    }

    task && _microTaskQueue.push(task);
  }

  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;

      while (_microTaskQueue.length) {
        var queue = _microTaskQueue;
        _microTaskQueue = [];

        for (var i = 0; i < queue.length; i++) {
          var task = queue[i];

          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }

      _api.microtaskDrainDone();

      _isDrainingMicrotaskQueue = false;
    }
  } //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  var NO_ZONE = {
    name: 'NO ZONE'
  };
  var notScheduled = 'notScheduled',
      scheduling = 'scheduling',
      scheduled = 'scheduled',
      running = 'running',
      canceling = 'canceling',
      unknown = 'unknown';
  var microTask = 'microTask',
      macroTask = 'macroTask',
      eventTask = 'eventTask';
  var patches = {};
  var _api = {
    symbol: __symbol__,
    currentZoneFrame: function currentZoneFrame() {
      return _currentZoneFrame;
    },
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: function showUncaughtError() {
      return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
    },
    patchEventTarget: function patchEventTarget() {
      return [];
    },
    patchOnProperties: noop,
    patchMethod: function patchMethod() {
      return noop;
    },
    bindArguments: function bindArguments() {
      return [];
    },
    patchThen: function patchThen() {
      return noop;
    },
    patchMacroTask: function patchMacroTask() {
      return noop;
    },
    patchEventPrototype: function patchEventPrototype() {
      return noop;
    },
    isIEOrEdge: function isIEOrEdge() {
      return false;
    },
    getGlobalObjects: function getGlobalObjects() {
      return undefined;
    },
    ObjectDefineProperty: function ObjectDefineProperty() {
      return noop;
    },
    ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
      return undefined;
    },
    ObjectCreate: function ObjectCreate() {
      return undefined;
    },
    ArraySlice: function ArraySlice() {
      return [];
    },
    patchClass: function patchClass() {
      return noop;
    },
    wrapWithCurrentZone: function wrapWithCurrentZone() {
      return noop;
    },
    filterProperties: function filterProperties() {
      return [];
    },
    attachOriginToPatched: function attachOriginToPatched() {
      return noop;
    },
    _redefineProperty: function _redefineProperty() {
      return noop;
    },
    patchCallbacks: function patchCallbacks() {
      return noop;
    }
  };
  var _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  var _currentTask = null;
  var _numberOfNestedTaskFrames = 0;

  function noop() {}

  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
}(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name

/** Object.getOwnPropertyDescriptor */


var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */

var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */

var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */

var ObjectCreate = Object.create;
/** Array.prototype.slice */

var ArraySlice = Array.prototype.slice;
/** addEventListener string const */

var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */

var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */

var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */


var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */


var TRUE_STR = 'true';
/** false string const */

var FALSE_STR = 'false';
/** Zone symbol prefix string const. */

var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}

function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}

var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;

var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];

function bindArguments(args, source) {
  for (var i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }

  return args;
}

function patchPrototype(prototype, fnNames) {
  var source = prototype.constructor['name'];

  var _loop = function _loop(i) {
    var name = fnNames[i];
    var delegate = prototype[name];

    if (delegate) {
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

      if (!isPropertyWritable(prototypeDesc)) {
        return "continue";
      }

      prototype[name] = function (delegate) {
        var patched = function patched() {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };

        attachOriginToPatched(patched, delegate);
        return patched;
      }(delegate);
    }
  };

  for (var i = 0; i < fnNames.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};

var wrapFn = function wrapFn(event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;

  if (!event) {
    return;
  }

  var eventNameSymbol = zoneSymbolEventNames[event.type];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }

  var target = this || event.target || _global;
  var listener = target[eventNameSymbol];
  var result;

  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signiture
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    var errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);

    if (result != undefined && !result) {
      event.preventDefault();
    }
  }

  return result;
};

function patchProperty(obj, prop, prototype) {
  var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  } // if the descriptor not exists or is not configurable
  // just return


  if (!desc || !desc.configurable) {
    return;
  }

  var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  } // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified


  delete desc.writable;
  delete desc.value;
  var originalDescGet = desc.get;
  var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

  var eventName = prop.substr(2);
  var eventNameSymbol = zoneSymbolEventNames[eventName];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }

  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    var target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return;
    }

    var previousValue = target[eventNameSymbol];

    if (previousValue) {
      target.removeEventListener(eventName, wrapFn);
    } // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet


    if (originalDescSet) {
      originalDescSet.apply(target, NULL_ON_PROP_VALUE);
    }

    if (typeof newValue === 'function') {
      target[eventNameSymbol] = newValue;
      target.addEventListener(eventName, wrapFn, false);
    } else {
      target[eventNameSymbol] = null;
    }
  }; // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null


  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    var target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return null;
    }

    var listener = target[eventNameSymbol];

    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      var value = originalDescGet && originalDescGet.call(this);

      if (value) {
        desc.set.call(this, value);

        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }

        return value;
      }
    }

    return null;
  };

  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}

function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (var i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    var onProperties = [];

    for (var prop in obj) {
      if (prop.substr(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }

    for (var j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}

var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

function patchClass(className) {
  var OriginalClass = _global[className];
  if (!OriginalClass) return; // keep original class in global

  _global[zoneSymbol(className)] = OriginalClass;

  _global[className] = function () {
    var a = bindArguments(arguments, className);

    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;

      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;

      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;

      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;

      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;

      default:
        throw new Error('Arg list too long.');
    }
  }; // attach original delegate to patched function


  attachOriginToPatched(_global[className], OriginalClass);
  var instance = new OriginalClass(function () {});
  var prop;

  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function set(fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.

              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function get() {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }

  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}

function patchMethod(target, name, patchFn) {
  var proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }

  var delegateName = zoneSymbol(name);
  var delegate = null;

  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

    var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
} // TODO: @JiaLiPassion, support cancel task later if necessary


function patchMacroTask(obj, funcName, metaCreator) {
  var setNative = null;

  function scheduleTask(task) {
    var data = task.data;

    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };

    setNative.apply(data.target, data.args);
    return task;
  }

  setNative = patchMethod(obj, funcName, function (delegate) {
    return function (self, args) {
      var meta = metaCreator(self, args);

      if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
        return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
      } else {
        // cause an error by calling it directly.
        return delegate.apply(self, args);
      }
    };
  });
}

function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}

var isDetectedIEOrEdge = false;
var ieOrEdge = false;

function isIE() {
  try {
    var ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}

  return false;
}

function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }

  isDetectedIEOrEdge = true;

  try {
    var ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}

  return ieOrEdge;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ObjectDefineProperty = Object.defineProperty;

  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      var className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }

    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }

  var __symbol__ = api.symbol;
  var _uncaughtPromiseErrors = [];
  var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

  var symbolPromise = __symbol__('Promise');

  var symbolThen = __symbol__('then');

  var creationTrace = '__creationTrace__';

  api.onUnhandledError = function (e) {
    if (api.showUncaughtError()) {
      var rejection = e && e.rejection;

      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };

  api.microtaskDrainDone = function () {
    var _loop2 = function _loop2() {
      var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

      try {
        uncaughtPromiseError.zone.runGuarded(function () {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }

          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    };

    while (_uncaughtPromiseErrors.length) {
      _loop2();
    }
  };

  var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);

    try {
      var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }

  function isThenable(value) {
    return value && value.then;
  }

  function forwardResolution(value) {
    return value;
  }

  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }

  var symbolState = __symbol__('state');

  var symbolValue = __symbol__('value');

  var symbolFinally = __symbol__('finally');

  var symbolParentPromiseValue = __symbol__('parentPromiseValue');

  var symbolParentPromiseState = __symbol__('parentPromiseState');

  var source = 'Promise.then';
  var UNRESOLVED = null;
  var RESOLVED = true;
  var REJECTED = false;
  var REJECTED_NO_CATCH = 0;

  function makeResolver(promise, state) {
    return function (v) {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      } // Do not return value or you will break the Promise spec.

    };
  }

  var once = function once() {
    var wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }

        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };

  var TYPE_ERROR = 'Promise resolved with itself';

  var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


  function resolvePromise(promise, state, value) {
    var onceWrapper = once();

    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }

    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      var then = null;

      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(function () {
          resolvePromise(promise, false, err);
        })();
        return promise;
      } // if (value instanceof ZoneAwarePromise) {


      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        var queue = promise[symbolValue];
        promise[symbolValue] = value;

        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        } // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace


        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }

        for (var i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }

        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          var uncaughtPromiseError = value;

          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }

          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }

          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;

          _uncaughtPromiseErrors.push(uncaughtPromiseError);

          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    } // Resolving an already resolved promise is a noop.


    return promise;
  }

  var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        var handler = Zone[REJECTION_HANDLED_HANDLER];

        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}

      promise[symbolState] = REJECTED;

      for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }

  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    var promiseState = promise[symbolState];
    var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, function () {
      try {
        var parentPromiseValue = promise[symbolValue];
        var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        } // should not pass value to finally callback


        var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }

  var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

  var noop = function noop() {};

  var ZoneAwarePromise = /*#__PURE__*/function (_Symbol$toStringTag, _Symbol$species) {
    function ZoneAwarePromise(executor) {
      _classCallCheck(this, ZoneAwarePromise);

      var promise = this;

      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }

      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;

      try {
        executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }

    _createClass(ZoneAwarePromise, [{
      key: _Symbol$toStringTag,
      get: function get() {
        return 'Promise';
      }
    }, {
      key: _Symbol$species,
      get: function get() {
        return ZoneAwarePromise;
      }
    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      }
    }, {
      key: "catch",
      value: function _catch(onRejected) {
        return this.then(null, onRejected);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      }
    }], [{
      key: "toString",
      value: function toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
    }, {
      key: "resolve",
      value: function resolve(value) {
        return resolvePromise(new this(null), RESOLVED, value);
      }
    }, {
      key: "reject",
      value: function reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
    }, {
      key: "race",
      value: function race(values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        var _iterator = _createForOfIteratorHelper(values),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var value = _step.value;

            if (!isThenable(value)) {
              value = this.resolve(value);
            }

            value.then(onResolve, onReject);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return promise;
      }
    }, {
      key: "all",
      value: function all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
    }, {
      key: "allSettled",
      value: function allSettled(values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function thenCallback(value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function errorCallback(err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      }
    }, {
      key: "allWithCallback",
      value: function allWithCallback(values, callback) {
        var _this = this;

        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _iterator2 = _createForOfIteratorHelper(values),
            _step2;

        try {
          var _loop3 = function _loop3() {
            var value = _step2.value;

            if (!isThenable(value)) {
              value = _this.resolve(value);
            }

            var curValueIndex = valueIndex;

            try {
              value.then(function (value) {
                resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }, function (err) {
                if (!callback) {
                  reject(err);
                } else {
                  resolvedValues[curValueIndex] = callback.errorCallback(err);
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }
              });
            } catch (thenErr) {
              reject(thenErr);
            }

            unresolvedCount++;
            valueIndex++;
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop3();
          } // Make the unresolvedCount zero-based again.

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      }
    }]);

    return ZoneAwarePromise;
  }(Symbol.toStringTag, Symbol.species); // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.


  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  var NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;

  var symbolThenPatched = __symbol__('thenPatched');

  function patchThen(Ctor) {
    var proto = Ctor.prototype;
    var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }

    var originalThen = proto.then; // Keep a reference to the original method.

    proto[symbolThen] = originalThen;

    Ctor.prototype.then = function (onResolve, onReject) {
      var _this2 = this;

      var wrapped = new ZoneAwarePromise(function (resolve, reject) {
        originalThen.call(_this2, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };

    Ctor[symbolThenPatched] = true;
  }

  api.patchThen = patchThen;

  function zoneify(fn) {
    return function (self, args) {
      var resultPromise = fn.apply(self, args);

      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }

      var ctor = resultPromise.constructor;

      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }

      return resultPromise;
    };
  }

  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', function (delegate) {
      return zoneify(delegate);
    });
  } // This is not part of public API, but it is useful for tests, so we expose it.


  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function


Zone.__load_patch('toString', function (global) {
  // patch Func.prototype.toString to let them look like native
  var originalFunctionToString = Function.prototype.toString;
  var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  var PROMISE_SYMBOL = zoneSymbol('Promise');
  var ERROR_SYMBOL = zoneSymbol('Error');

  var newFunctionToString = function toString() {
    if (typeof this === 'function') {
      var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }

      if (this === Promise) {
        var nativePromise = global[PROMISE_SYMBOL];

        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }

      if (this === Error) {
        var nativeError = global[ERROR_SYMBOL];

        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }

    return originalFunctionToString.call(this);
  };

  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

  var originalObjectToString = Object.prototype.toString;
  var PROMISE_OBJECT_TO_STRING = '[object Promise]';

  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }

    return originalObjectToString.call(this);
  };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var passiveSupported = false;

if (typeof window !== 'undefined') {
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passiveSupported = true;
      }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
} // an identifier to tell ZoneTask do not create a new invoke closure


var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

function prepareEventNames(eventName, eventNameToString) {
  var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames$1[eventName] = {};
  zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
}

function patchEventTarget(_global, apis, patchOptions) {
  var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  var PREPEND_EVENT_LISTENER = 'prependListener';
  var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

  var invokeTask = function invokeTask(task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }

    var delegate = task.callback;

    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = function (event) {
        return delegate.handleEvent(event);
      };

      task.originalDelegate = delegate;
    } // invoke static task.invoke


    task.invoke(task, target, [event]);
    var options = task.options;

    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

      target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
    }
  }; // global shared zoneAwareCallback to handle all event callback with capture = false


  var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    } // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190


    var target = this || event.target || _global;
    var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

    if (tasks) {
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        invokeTask(tasks[0], target, event);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        var copyTasks = tasks.slice();

        for (var i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }

          invokeTask(copyTasks[i], target, event);
        }
      }
    }
  }; // global shared zoneAwareCallback to handle all event callback with capture = true


  var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    } // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190


    var target = this || event.target || _global;
    var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

    if (tasks) {
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        invokeTask(tasks[0], target, event);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        var copyTasks = tasks.slice();

        for (var i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }

          invokeTask(copyTasks[i], target, event);
        }
      }
    }
  };

  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }

    var useGlobalCallback = true;

    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }

    var validateHandler = patchOptions && patchOptions.vh;
    var checkDuplicate = true;

    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }

    var returnTarget = false;

    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }

    var proto = obj;

    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }

    if (!proto) {
      return false;
    }

    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }

    var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data

    var taskData = {};
    var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    var nativePrependEventListener;

    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */


    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }

      if (!passiveSupported || !passive) {
        return options;
      }

      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }

      if (!options) {
        return {
          passive: true
        };
      }

      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }

      return options;
    }

    var customScheduleGlobal = function customScheduleGlobal(task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }

      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };

    var customCancelGlobal = function customCancelGlobal(task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && task.target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (existingTask === task) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              task.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }

              break;
            }
          }
        }
      } // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return


      if (!task.allRemoved) {
        return;
      }

      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };

    var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    var customSchedulePrepend = function customSchedulePrepend(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    var customCancelNonGlobal = function customCancelNonGlobal(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };

    var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

    var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
      var typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };

    var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];

    var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

    var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
      var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      return function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var delegate = arguments[1];

        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }

        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        } // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke


        var isHandleEvent = false;

        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }

          isHandleEvent = true;
        }

        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }

        var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        var options = buildEventListenerOptions(arguments[2], passive);

        if (unpatchedEvents) {
          // check upatched list
          for (var i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }

        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var once = options && typeof options === 'object' ? options.once : false;
        var zone = Zone.current;
        var symbolEventNames = zoneSymbolEventNames$1[eventName];

        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames$1[eventName];
        }

        var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        var existingTasks = target[symbolEventName];
        var isExisting = false;

        if (existingTasks) {
          // already have task registered
          isExisting = true;

          if (checkDuplicate) {
            for (var _i = 0; _i < existingTasks.length; _i++) {
              if (compare(existingTasks[_i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }

        var source;
        var constructorName = target.constructor['name'];
        var targetSource = globalSources[constructorName];

        if (targetSource) {
          source = targetSource[eventName];
        }

        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        } // do not create a new object as task.data to pass those things
        // just use the global shared one


        taskData.options = options;

        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }

        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

        if (data) {
          data.taskData = taskData;
        }

        var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442

        taskData.target = null; // need to clear up taskData because it is a global object

        if (data) {
          data.taskData = null;
        } // have to save those information to task in case
        // application may call task.zone.cancelTask() directly


        if (once) {
          options.once = true;
        }

        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }

        task.target = target;
        task.capture = capture;
        task.eventName = eventName;

        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }

        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }

        if (returnTarget) {
          return target;
        }
      };
    };

    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }

    proto[REMOVE_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      var options = arguments[2];
      var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      var delegate = arguments[1];

      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }

      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }

      var symbolEventNames = zoneSymbolEventNames$1[eventName];
      var symbolEventName;

      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }

      var existingTasks = symbolEventName && target[symbolEventName];

      if (existingTasks) {
        for (var i = 0; i < existingTasks.length; i++) {
          var existingTask = existingTasks[i];

          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

            existingTask.isRemoved = true;

            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed

              if (typeof eventName === 'string') {
                var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }

            existingTask.zone.cancelTask(existingTask);

            if (returnTarget) {
              return target;
            }

            return;
          }
        }
      } // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.


      return nativeRemoveEventListener.apply(this, arguments);
    };

    proto[LISTENERS_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      var listeners = [];
      var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }

      return listeners;
    };

    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      var target = this || _global;
      var eventName = arguments[0];

      if (!eventName) {
        var keys = Object.keys(target);

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed

          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        } // remove removeListener listener finally


        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var symbolEventNames = zoneSymbolEventNames$1[eventName];

        if (symbolEventNames) {
          var symbolEventName = symbolEventNames[FALSE_STR];
          var symbolCaptureEventName = symbolEventNames[TRUE_STR];
          var tasks = target[symbolEventName];
          var captureTasks = target[symbolCaptureEventName];

          if (tasks) {
            var removeTasks = tasks.slice();

            for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
              var task = removeTasks[_i2];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }

          if (captureTasks) {
            var _removeTasks = captureTasks.slice();

            for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
              var _task = _removeTasks[_i3];

              var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

              this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
            }
          }
        }
      }

      if (returnTarget) {
        return this;
      }
    }; // for native toString patch


    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }

    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }

    return true;
  }

  var results = [];

  for (var i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }

  return results;
}

function findEventTasks(target, eventName) {
  if (!eventName) {
    var foundTasks = [];

    for (var prop in target) {
      var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      var evtName = match && match[1];

      if (evtName && (!eventName || evtName === eventName)) {
        var tasks = target[prop];

        if (tasks) {
          for (var i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }

    return foundTasks;
  }

  var symbolEventName = zoneSymbolEventNames$1[eventName];

  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames$1[eventName];
  }

  var captureFalseTasks = target[symbolEventName[FALSE_STR]];
  var captureTrueTasks = target[symbolEventName[TRUE_STR]];

  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}

function patchEventPrototype(global, api) {
  var Event = global['Event'];

  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
      return function (self, args) {
        self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
        // in case in some hybrid application, some part of
        // application will be controlled by zone, some are not

        delegate && delegate.apply(self, args);
      };
    });
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCallbacks(api, target, targetName, method, callbacks) {
  var symbol = Zone.__symbol__(method);

  if (target[symbol]) {
    return;
  }

  var nativeDelegate = target[symbol] = target[method];

  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        var source = "".concat(targetName, ".").concat(method, "::") + callback;
        var prototype = opts.prototype;

        if (prototype.hasOwnProperty(callback)) {
          var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

          if (descriptor && descriptor.value) {
            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

            api._redefineProperty(opts.prototype, callback, descriptor);
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } else if (prototype[callback]) {
          prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
        }
      });
    }

    return nativeDelegate.call(target, name, opts, options);
  };

  api.attachOriginToPatched(target[method], nativeDelegate);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }

  var tip = ignoreProperties.filter(function (ip) {
    return ip.target === target;
  });

  if (!tip || tip.length === 0) {
    return onProperties;
  }

  var targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(function (op) {
    return targetIgnoreProperties.indexOf(op) === -1;
  });
}

function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }

  var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}

function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }

  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }

  var supportsWebSocket = typeof WebSocket !== 'undefined';
  var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

  if (isBrowser) {
    var _internalWindow = window;
    var ignoreErrorProperties = isIE() ? [{
      target: _internalWindow,
      ignoreProperties: ['error']
    }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not

    patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
    patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

    if (typeof _internalWindow['SVGElement'] !== 'undefined') {
      patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
    }

    patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
    patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
    patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
    patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
    patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
    patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
    patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
    var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

    if (HTMLMarqueeElement) {
      patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
    }

    var Worker = _internalWindow['Worker'];

    if (Worker) {
      patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
    }
  }

  var XMLHttpRequest = _global['XMLHttpRequest'];

  if (XMLHttpRequest) {
    // XMLHttpRequest is not available in ServiceWorker, so we need to check here
    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
  }

  var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

  if (XMLHttpRequestEventTarget) {
    patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
  }

  if (typeof IDBIndex !== 'undefined') {
    patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
    patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
  }

  if (supportsWebSocket) {
    patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('util', function (global, Zone, api) {
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.

  var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

  var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }

  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }

  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;

  api.getGlobalObjects = function () {
    return {
      globalSources: globalSources,
      zoneSymbolEventNames: zoneSymbolEventNames$1,
      eventNames: eventNames,
      isBrowser: isBrowser,
      isMix: isMix,
      isNode: isNode,
      TRUE_STR: TRUE_STR,
      FALSE_STR: FALSE_STR,
      ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    };
  };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var taskSymbol = zoneSymbol('zoneTask');

function patchTimer(window, setName, cancelName, nameSuffix) {
  var setNative = null;
  var clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  var tasksByHandleId = {};

  function scheduleTask(task) {
    var data = task.data;

    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };

    data.handleId = setNative.apply(window, data.args);
    return task;
  }

  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }

  setNative = patchMethod(window, setName, function (delegate) {
    return function (self, args) {
      if (typeof args[0] === 'function') {
        var _options = {
          isPeriodic: nameSuffix === 'Interval',
          delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
          args: args
        };
        var callback = args[0];

        args[0] = function timer() {
          try {
            return callback.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            // https://github.com/angular/angular/issues/40387
            // Cleanup tasksByHandleId should be handled before scheduleTask
            // Since some zoneSpec may intercept and doesn't trigger
            // scheduleFn(scheduleTask) provided here.
            if (!_options.isPeriodic) {
              if (typeof _options.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[_options.handleId];
              } else if (_options.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                _options.handleId[taskSymbol] = null;
              }
            }
          }
        };

        var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

        if (!task) {
          return task;
        } // Node.js must additionally support the ref and unref functions.


        var handle = task.data.handleId;

        if (typeof handle === 'number') {
          // for non nodejs env, we save handleId: task
          // mapping in local cache for clearTimeout
          tasksByHandleId[handle] = task;
        } else if (handle) {
          // for nodejs env, we save task
          // reference in timerId Object for clearTimeout
          handle[taskSymbol] = task;
        } // check whether handle is null, because some polyfill or browser
        // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


        if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
          task.ref = handle.ref.bind(handle);
          task.unref = handle.unref.bind(handle);
        }

        if (typeof handle === 'number' || handle) {
          return handle;
        }

        return task;
      } else {
        // cause an error by calling it directly.
        return delegate.apply(window, args);
      }
    };
  });
  clearNative = patchMethod(window, cancelName, function (delegate) {
    return function (self, args) {
      var id = args[0];
      var task;

      if (typeof id === 'number') {
        // non nodejs env.
        task = tasksByHandleId[id];
      } else {
        // nodejs env.
        task = id && id[taskSymbol]; // other environments.

        if (!task) {
          task = id;
        }
      }

      if (task && typeof task.type === 'string') {
        if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
          if (typeof id === 'number') {
            delete tasksByHandleId[id];
          } else if (id) {
            id[taskSymbol] = null;
          } // Do not cancel already canceled functions


          task.zone.cancelTask(task);
        }
      } else {
        // cause an error by calling it directly.
        delegate.apply(window, args);
      }
    };
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCustomElements(_global, api) {
  var _api$getGlobalObjects = api.getGlobalObjects(),
      isBrowser = _api$getGlobalObjects.isBrowser,
      isMix = _api$getGlobalObjects.isMix;

  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }

  var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }

  var _api$getGlobalObjects2 = api.getGlobalObjects(),
      eventNames = _api$getGlobalObjects2.eventNames,
      zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
      TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
      FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
      ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


  for (var i = 0; i < eventNames.length; i++) {
    var eventName = eventNames[i];
    var falseEventName = eventName + FALSE_STR;
    var trueEventName = eventName + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  var EVENT_TARGET = _global['EventTarget'];

  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }

  api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}

function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('legacy', function (global) {
  var legacyPatch = global[Zone.__symbol__('legacyPatch')];

  if (legacyPatch) {
    legacyPatch();
  }
});

Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
  api.patchMethod(global, 'queueMicrotask', function (delegate) {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});

Zone.__load_patch('timers', function (global) {
  var set = 'set';
  var clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});

Zone.__load_patch('requestAnimationFrame', function (global) {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});

Zone.__load_patch('blocking', function (global, Zone) {
  var blockingMethods = ['alert', 'prompt', 'confirm'];

  for (var i = 0; i < blockingMethods.length; i++) {
    var name = blockingMethods[i];
    patchMethod(global, name, function (delegate, symbol, name) {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});

Zone.__load_patch('EventTarget', function (global, Zone, api) {
  patchEvent(global, api);
  eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

  var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
  }
});

Zone.__load_patch('MutationObserver', function (global, Zone, api) {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});

Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
  patchClass('IntersectionObserver');
});

Zone.__load_patch('FileReader', function (global, Zone, api) {
  patchClass('FileReader');
});

Zone.__load_patch('on_property', function (global, Zone, api) {
  propertyDescriptorPatch(api, global);
});

Zone.__load_patch('customElements', function (global, Zone, api) {
  patchCustomElements(global, api);
});

Zone.__load_patch('XHR', function (global, Zone) {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  var XHR_TASK = zoneSymbol('xhrTask');
  var XHR_SYNC = zoneSymbol('xhrSync');
  var XHR_LISTENER = zoneSymbol('xhrListener');
  var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  var XHR_URL = zoneSymbol('xhrURL');
  var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

  function patchXHR(window) {
    var XMLHttpRequest = window['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }

    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

    function findPendingTask(target) {
      return target[XHR_TASK];
    }

    var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

    if (!oriAddListener) {
      var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }

    var READY_STATE_CHANGE = 'readystatechange';
    var SCHEDULED = 'scheduled';

    function scheduleTask(task) {
      var data = task.data;
      var target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

      var listener = target[XHR_LISTENER];

      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }

      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }

      var newListener = target[XHR_LISTENER] = function () {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            var loadTasks = target[Zone.__symbol__('loadfalse')];

            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              var oriInvoke = task.invoke;

              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                var loadTasks = target[Zone.__symbol__('loadfalse')];

                for (var i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }

                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };

              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };

      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      var storedTask = target[XHR_TASK];

      if (!storedTask) {
        target[XHR_TASK] = task;
      }

      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }

    function placeholderCallback() {}

    function clearTask(task) {
      var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.

      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }

    var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
      return function (self, args) {
        self[XHR_SYNC] = args[2] == false;
        self[XHR_URL] = args[1];
        return openNative.apply(self, args);
      };
    });
    var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
      return function (self, args) {
        if (Zone.current[fetchTaskScheduling] === true) {
          // a fetch is scheduling, so we are using xhr to polyfill fetch
          // and because we already schedule macroTask for fetch, we should
          // not schedule a macroTask for xhr again
          return sendNative.apply(self, args);
        }

        if (self[XHR_SYNC]) {
          // if the XHR is sync there is no task to schedule, just execute the code.
          return sendNative.apply(self, args);
        } else {
          var _options2 = {
            target: self,
            url: self[XHR_URL],
            isPeriodic: false,
            args: args,
            aborted: false
          };
          var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

          if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
            // xhr request throw error when send
            // we should invoke task instead of leaving a scheduled
            // pending macroTask
            task.invoke();
          }
        }
      };
    });
    var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
      return function (self, args) {
        var task = findPendingTask(self);

        if (task && typeof task.type == 'string') {
          // If the XHR has already completed, do nothing.
          // If the XHR has already been aborted, do nothing.
          // Fix #569, call abort multiple times before done will cause
          // macroTask task count be negative number
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }

          task.zone.cancelTask(task);
        } else if (Zone.current[fetchTaskAborting] === true) {
          // the abort is called from fetch polyfill, we need to call native abort of XHR.
          return abortNative.apply(self, args);
        } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
        // task
        // to cancel. Do nothing.

      };
    });
  }
});

Zone.__load_patch('geolocation', function (global) {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});

Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      var eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(function (eventTask) {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        var PromiseRejectionEvent = global['PromiseRejectionEvent'];

        if (PromiseRejectionEvent) {
          var evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }

  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 34266);
/* harmony import */ var classlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist.js */ 60482);
/* harmony import */ var classlist_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web_animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web-animations-js */ 7116);
/* harmony import */ var web_animations_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web_animations_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es/reflect */ 45511);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ 64250);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es/array */ 79038);
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_5__);
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
* BROWSER POLYFILLS
*/
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
 // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
 // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
 // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/* ngx-charts required polyfill ie11 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
window.global = window;


/***/ }),

/***/ 4709:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 41413:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 24084:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1173:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 80945);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 80945:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 4709);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 79038:
/*!************************************************!*\
  !*** ./node_modules/core-js/es/array/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ 67178);
__webpack_require__(/*! ../../modules/es.array.from */ 43323);
__webpack_require__(/*! ../../modules/es.array.is-array */ 52233);
__webpack_require__(/*! ../../modules/es.array.of */ 11709);
__webpack_require__(/*! ../../modules/es.array.concat */ 64762);
__webpack_require__(/*! ../../modules/es.array.copy-within */ 6903);
__webpack_require__(/*! ../../modules/es.array.every */ 60872);
__webpack_require__(/*! ../../modules/es.array.fill */ 3212);
__webpack_require__(/*! ../../modules/es.array.filter */ 53677);
__webpack_require__(/*! ../../modules/es.array.find */ 49581);
__webpack_require__(/*! ../../modules/es.array.find-index */ 89782);
__webpack_require__(/*! ../../modules/es.array.flat */ 96846);
__webpack_require__(/*! ../../modules/es.array.flat-map */ 70547);
__webpack_require__(/*! ../../modules/es.array.for-each */ 50622);
__webpack_require__(/*! ../../modules/es.array.includes */ 75097);
__webpack_require__(/*! ../../modules/es.array.index-of */ 15746);
__webpack_require__(/*! ../../modules/es.array.iterator */ 91574);
__webpack_require__(/*! ../../modules/es.array.join */ 56915);
__webpack_require__(/*! ../../modules/es.array.last-index-of */ 17220);
__webpack_require__(/*! ../../modules/es.array.map */ 16958);
__webpack_require__(/*! ../../modules/es.array.reduce */ 67472);
__webpack_require__(/*! ../../modules/es.array.reduce-right */ 10245);
__webpack_require__(/*! ../../modules/es.array.reverse */ 50069);
__webpack_require__(/*! ../../modules/es.array.slice */ 47432);
__webpack_require__(/*! ../../modules/es.array.some */ 17279);
__webpack_require__(/*! ../../modules/es.array.sort */ 48527);
__webpack_require__(/*! ../../modules/es.array.species */ 34671);
__webpack_require__(/*! ../../modules/es.array.splice */ 34921);
__webpack_require__(/*! ../../modules/es.array.unscopables.flat */ 79418);
__webpack_require__(/*! ../../modules/es.array.unscopables.flat-map */ 83661);
var path = __webpack_require__(/*! ../../internals/path */ 53451);

module.exports = path.Array;


/***/ }),

/***/ 45511:
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/reflect/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.reflect.apply */ 90060);
__webpack_require__(/*! ../../modules/es.reflect.construct */ 33878);
__webpack_require__(/*! ../../modules/es.reflect.define-property */ 47153);
__webpack_require__(/*! ../../modules/es.reflect.delete-property */ 53129);
__webpack_require__(/*! ../../modules/es.reflect.get */ 73785);
__webpack_require__(/*! ../../modules/es.reflect.get-own-property-descriptor */ 53038);
__webpack_require__(/*! ../../modules/es.reflect.get-prototype-of */ 90072);
__webpack_require__(/*! ../../modules/es.reflect.has */ 47761);
__webpack_require__(/*! ../../modules/es.reflect.is-extensible */ 54007);
__webpack_require__(/*! ../../modules/es.reflect.own-keys */ 74428);
__webpack_require__(/*! ../../modules/es.reflect.prevent-extensions */ 92609);
__webpack_require__(/*! ../../modules/es.reflect.set */ 19325);
__webpack_require__(/*! ../../modules/es.reflect.set-prototype-of */ 50379);
__webpack_require__(/*! ../../modules/es.reflect.to-string-tag */ 56982);
var path = __webpack_require__(/*! ../../internals/path */ 53451);

module.exports = path.Reflect;


/***/ }),

/***/ 91813:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 32361:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 60728:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var create = __webpack_require__(/*! ../internals/object-create */ 24613);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 50852:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 76457:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 33698);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ 56561:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 33698);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ 23079:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 48976).forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ 67381:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 7042);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ 73606);
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ 79892);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 29715);
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ 73860);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 86075:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 33698);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 48976:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 7042);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 97268);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 20438);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ 74128:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ 80910:
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 37028);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 69243:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 53638:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var has = __webpack_require__(/*! ../internals/has */ 40494);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ 19766:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 97268);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 20438:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 73606:
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ 5394);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ 60083:
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 26280:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 54817:
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 19757);
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 26280);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 54048:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 40494);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 28809);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 80592:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 8560:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ 64295).IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ 24613);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 26850);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85876);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 33102);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 9772:
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 26850);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 26850:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 29715:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 16584);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 26850);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 85448:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ 8560);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 48736);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 88628);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85876);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);
var redefine = __webpack_require__(/*! ../internals/redefine */ 65406);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 18851);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 33102);
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ 64295);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ 21929:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 62350:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 79701:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 26280);
var global = __webpack_require__(/*! ../internals/global */ 33652);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 80602:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 37028:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 80602);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 57670:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 31026:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);
var redefine = __webpack_require__(/*! ../internals/redefine */ 65406);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 32564);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ 54048);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 3482);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 59092:
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 56425:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 7042);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 79526:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 7042:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 95831:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ 27719:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 53451);
var global = __webpack_require__(/*! ../internals/global */ 33652);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 73860:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ 54817);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 33102);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 33652:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 40494:
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 24367:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 59888:
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 87561:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 62350);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 97268:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 26280);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 29177:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 25288);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 47218:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 50510);
var global = __webpack_require__(/*! ../internals/global */ 33652);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);
var objectHas = __webpack_require__(/*! ../internals/has */ 40494);
var shared = __webpack_require__(/*! ../internals/shared-store */ 25288);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 64215);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 24367);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 79892:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 33102);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 57517:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 26280);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 3482:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 15522:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 18851:
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 5394:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 64295:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 48736);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 18851);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 33102:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 40032:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 59092);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ 50510:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 29177);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 24613:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 75174);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 57670);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 24367);
var html = __webpack_require__(/*! ../internals/html */ 59888);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 62350);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 64215);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 75174:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 35144);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 69497:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 87561);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 16584);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 22576:
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 48631);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 26850);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 16584);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 87561);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 36728:
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 89865);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 57670);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 26191:
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 48736:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 40494);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 64215);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 80592);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 89865:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 40494);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 86075).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 24367);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 35144:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 89865);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 57670);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 48631:
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ 88628:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 32361);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 28809:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 36728);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 26191);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 53451:
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);

module.exports = global;


/***/ }),

/***/ 65406:
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 32564);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 29177);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 47218);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 95879:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 32564:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 9772);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 53672:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 85876:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 69497).f;
var has = __webpack_require__(/*! ../internals/has */ 40494);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 64215:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 41338);
var uid = __webpack_require__(/*! ../internals/uid */ 94095);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 25288:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 32564);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 41338:
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 18851);
var store = __webpack_require__(/*! ../internals/shared-store */ 25288);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 81430:
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 95879);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 33698:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 35417:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 97268);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 95879);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 29510:
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 79122:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 64178:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 95879);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 16584:
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 19757:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 94095:
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 27784:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 40032);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 63708:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 33652);
var shared = __webpack_require__(/*! ../internals/shared */ 41338);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var uid = __webpack_require__(/*! ../internals/uid */ 94095);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 40032);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 27784);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 64762:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 29715);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 20438);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 80910);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 37028);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 6903:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.copy-within.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ 76457);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);

// `Array.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
$({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');


/***/ }),

/***/ 60872:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $every = __webpack_require__(/*! ../internals/array-iteration */ 48976).every;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 3212:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var fill = __webpack_require__(/*! ../internals/array-fill */ 56561);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ 53677:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $filter = __webpack_require__(/*! ../internals/array-iteration */ 48976).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 80910);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 89782:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ 48976).findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 49581:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $find = __webpack_require__(/*! ../internals/array-iteration */ 48976).find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 70547:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ 56425);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 20438);

// `Array.prototype.flatMap` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 96846:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ 56425);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 20438);

// `Array.prototype.flat` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ 50622:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 23079);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 43323:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var from = __webpack_require__(/*! ../internals/array-from */ 67381);
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ 60083);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 75097:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $includes = __webpack_require__(/*! ../internals/array-includes */ 86075).includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 15746:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ 86075).indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 52233:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 91574:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 33102);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 47218);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 85448);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 56915:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 97268);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 17220:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ 74128);

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ 16958:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $map = __webpack_require__(/*! ../internals/array-iteration */ 48976).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 80910);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 11709:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.of.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 29715);

var ISNT_GENERIC = fails(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.github.io/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});


/***/ }),

/***/ 10245:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce-right.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ 19766).right;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 37028);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 79701);

var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduceRight` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 67472:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ 19766).left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 37028);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 79701);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 50069:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ 47432:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var isArray = __webpack_require__(/*! ../internals/is-array */ 57517);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 33698);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 35417);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 29715);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 63708);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 80910);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 17279:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.some.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var $some = __webpack_require__(/*! ../internals/array-iteration */ 48976).some;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 48527:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 69243);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ 34671:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.species.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var setSpecies = __webpack_require__(/*! ../internals/set-species */ 53672);

// `Array[@@species]` getter
// https://tc39.github.io/ecma262/#sec-get-array-@@species
setSpecies('Array');


/***/ }),

/***/ 34921:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 33698);
var toInteger = __webpack_require__(/*! ../internals/to-integer */ 29510);
var toLength = __webpack_require__(/*! ../internals/to-length */ 79122);
var toObject = __webpack_require__(/*! ../internals/to-object */ 64178);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 20438);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 29715);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 80910);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 53638);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 83661:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);

addToUnscopables('flatMap');


/***/ }),

/***/ 79418:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 60728);

addToUnscopables('flat');


/***/ }),

/***/ 90060:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);

var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  nativeApply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.github.io/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    aFunction(target);
    anObject(argumentsList);
    return nativeApply
      ? nativeApply(target, thisArgument, argumentsList)
      : functionApply.call(target, thisArgument, argumentsList);
  }
});


/***/ }),

/***/ 33878:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 91813);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var create = __webpack_require__(/*! ../internals/object-create */ 24613);
var bind = __webpack_require__(/*! ../internals/function-bind */ 95831);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 47153:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 16584);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 53129:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576).f;

// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 53038:
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 21929);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576);

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 90072:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 48736);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 80592);

// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ 73785:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 48736);

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 47761:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 54007:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);

var objectIsExtensible = Object.isExtensible;

// `Reflect.isExtensible` method
// https://tc39.github.io/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return objectIsExtensible ? objectIsExtensible(target) : true;
  }
});


/***/ }),

/***/ 74428:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 28809);

// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ 92609:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 27719);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var FREEZING = __webpack_require__(/*! ../internals/freezing */ 79526);

// `Reflect.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 50379:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 32361);
var objectSetPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 88628);

// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 19325:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var anObject = __webpack_require__(/*! ../internals/an-object */ 50852);
var isObject = __webpack_require__(/*! ../internals/is-object */ 15522);
var has = __webpack_require__(/*! ../internals/has */ 40494);
var fails = __webpack_require__(/*! ../internals/fails */ 59092);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 69497);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 22576);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 48736);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 26850);

// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line no-undef
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ 56982:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 31026);
var global = __webpack_require__(/*! ../internals/global */ 33652);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85876);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ 67178:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ 81430).charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 47218);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 85448);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 7116:
/*!**************************************************************!*\
  !*** ./node_modules/web-animations-js/web-animations.min.js ***!
  \**************************************************************/
/***/ (function() {

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

!function(){var a={},b={};!function(a,b){function c(a){if("number"==typeof a)return a;var b={};for(var c in a)b[c]=a[c];return b}function d(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=x}function e(){return a.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function f(b,c,e){var f=new d;return c&&(f.fill="both",f.duration="auto"),"number"!=typeof b||isNaN(b)?void 0!==b&&Object.getOwnPropertyNames(b).forEach(function(c){if("auto"!=b[c]){if(("number"==typeof f[c]||"duration"==c)&&("number"!=typeof b[c]||isNaN(b[c])))return;if("fill"==c&&-1==v.indexOf(b[c]))return;if("direction"==c&&-1==w.indexOf(b[c]))return;if("playbackRate"==c&&1!==b[c]&&a.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;f[c]=b[c]}}):f.duration=b,f}function g(a){return"number"==typeof a&&(a=isNaN(a)?{duration:0}:{duration:a}),a}function h(b,c){return b=a.numericTimingToObject(b),f(b,c)}function i(a,b,c,d){return a<0||a>1||c<0||c>1?x:function(e){function f(a,b,c){return 3*a*(1-c)*(1-c)*c+3*b*(1-c)*c*c+c*c*c}if(e<=0){var g=0;return a>0?g=b/a:!b&&c>0&&(g=d/c),g*e}if(e>=1){var h=0;return c<1?h=(d-1)/(c-1):1==c&&a<1&&(h=(b-1)/(a-1)),1+h*(e-1)}for(var i=0,j=1;i<j;){var k=(i+j)/2,l=f(a,c,k);if(Math.abs(e-l)<1e-5)return f(b,d,k);l<e?i=k:j=k}return f(b,d,k)}}function j(a,b){return function(c){if(c>=1)return 1;var d=1/a;return(c+=b*d)-c%d}}function k(a){C||(C=document.createElement("div").style),C.animationTimingFunction="",C.animationTimingFunction=a;var b=C.animationTimingFunction;if(""==b&&e())throw new TypeError(a+" is not a valid value for easing");return b}function l(a){if("linear"==a)return x;var b=E.exec(a);if(b)return i.apply(this,b.slice(1).map(Number));var c=F.exec(a);if(c)return j(Number(c[1]),A);var d=G.exec(a);return d?j(Number(d[1]),{start:y,middle:z,end:A}[d[2]]):B[a]||x}function m(a){return Math.abs(n(a)/a.playbackRate)}function n(a){return 0===a.duration||0===a.iterations?0:a.duration*a.iterations}function o(a,b,c){if(null==b)return H;var d=c.delay+a+c.endDelay;return b<Math.min(c.delay,d)?I:b>=Math.min(c.delay+a,d)?J:K}function p(a,b,c,d,e){switch(d){case I:return"backwards"==b||"both"==b?0:null;case K:return c-e;case J:return"forwards"==b||"both"==b?a:null;case H:return null}}function q(a,b,c,d,e){var f=e;return 0===a?b!==I&&(f+=c):f+=d/a,f}function r(a,b,c,d,e,f){var g=a===1/0?b%1:a%1;return 0!==g||c!==J||0===d||0===e&&0!==f||(g=1),g}function s(a,b,c,d){return a===J&&b===1/0?1/0:1===c?Math.floor(d)-1:Math.floor(d)}function t(a,b,c){var d=a;if("normal"!==a&&"reverse"!==a){var e=b;"alternate-reverse"===a&&(e+=1),d="normal",e!==1/0&&e%2!=0&&(d="reverse")}return"normal"===d?c:1-c}function u(a,b,c){var d=o(a,b,c),e=p(a,c.fill,b,d,c.delay);if(null===e)return null;var f=q(c.duration,d,c.iterations,e,c.iterationStart),g=r(f,c.iterationStart,d,c.iterations,e,c.duration),h=s(d,c.iterations,g,f),i=t(c.direction,h,g);return c._easingFunction(i)}var v="backwards|forwards|both|none".split("|"),w="reverse|alternate|alternate-reverse".split("|"),x=function(a){return a};d.prototype={_setMember:function(b,c){this["_"+b]=c,this._effect&&(this._effect._timingInput[b]=c,this._effect._timing=a.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=a.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(a){this._setMember("delay",a)},get delay(){return this._delay},set endDelay(a){this._setMember("endDelay",a)},get endDelay(){return this._endDelay},set fill(a){this._setMember("fill",a)},get fill(){return this._fill},set iterationStart(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterationStart must be a non-negative number, received: "+a);this._setMember("iterationStart",a)},get iterationStart(){return this._iterationStart},set duration(a){if("auto"!=a&&(isNaN(a)||a<0)&&e())throw new TypeError("duration must be non-negative or auto, received: "+a);this._setMember("duration",a)},get duration(){return this._duration},set direction(a){this._setMember("direction",a)},get direction(){return this._direction},set easing(a){this._easingFunction=l(k(a)),this._setMember("easing",a)},get easing(){return this._easing},set iterations(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterations must be non-negative, received: "+a);this._setMember("iterations",a)},get iterations(){return this._iterations}};var y=1,z=.5,A=0,B={ease:i(.25,.1,.25,1),"ease-in":i(.42,0,1,1),"ease-out":i(0,0,.58,1),"ease-in-out":i(.42,0,.58,1),"step-start":j(1,y),"step-middle":j(1,z),"step-end":j(1,A)},C=null,D="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",E=new RegExp("cubic-bezier\\("+D+","+D+","+D+","+D+"\\)"),F=/steps\(\s*(\d+)\s*\)/,G=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,H=0,I=1,J=2,K=3;a.cloneTimingInput=c,a.makeTiming=f,a.numericTimingToObject=g,a.normalizeTimingInput=h,a.calculateActiveDuration=m,a.calculateIterationProgress=u,a.calculatePhase=o,a.normalizeEasing=k,a.parseEasingFunction=l}(a),function(a,b){function c(a,b){return a in k?k[a][b]||b:b}function d(a){return"display"===a||0===a.lastIndexOf("animation",0)||0===a.lastIndexOf("transition",0)}function e(a,b,e){if(!d(a)){var f=h[a];if(f){i.style[a]=b;for(var g in f){var j=f[g],k=i.style[j];e[j]=c(j,k)}}else e[a]=c(a,b)}}function f(a){var b=[];for(var c in a)if(!(c in["easing","offset","composite"])){var d=a[c];Array.isArray(d)||(d=[d]);for(var e,f=d.length,g=0;g<f;g++)e={},e.offset="offset"in a?a.offset:1==f?1:g/(f-1),"easing"in a&&(e.easing=a.easing),"composite"in a&&(e.composite=a.composite),e[c]=d[g],b.push(e)}return b.sort(function(a,b){return a.offset-b.offset}),b}function g(b){function c(){var a=d.length;null==d[a-1].offset&&(d[a-1].offset=1),a>1&&null==d[0].offset&&(d[0].offset=0);for(var b=0,c=d[0].offset,e=1;e<a;e++){var f=d[e].offset;if(null!=f){for(var g=1;g<e-b;g++)d[b+g].offset=c+(f-c)*g/(e-b);b=e,c=f}}}if(null==b)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||(b=f(b));for(var d=b.map(function(b){var c={};for(var d in b){var f=b[d];if("offset"==d){if(null!=f){if(f=Number(f),!isFinite(f))throw new TypeError("Keyframe offsets must be numbers.");if(f<0||f>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==d){if("add"==f||"accumulate"==f)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=f)throw new TypeError("Invalid composite mode "+f+".")}else f="easing"==d?a.normalizeEasing(f):""+f;e(d,f,c)}return void 0==c.offset&&(c.offset=null),void 0==c.easing&&(c.easing="linear"),c}),g=!0,h=-1/0,i=0;i<d.length;i++){var j=d[i].offset;if(null!=j){if(j<h)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");h=j}else g=!1}return d=d.filter(function(a){return a.offset>=0&&a.offset<=1}),g||c(),d}var h={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),j={thin:"1px",medium:"3px",thick:"5px"},k={borderBottomWidth:j,borderLeftWidth:j,borderRightWidth:j,borderTopWidth:j,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:j,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};a.convertToArrayForm=f,a.normalizeKeyframes=g}(a),function(a){var b={};a.isDeprecated=function(a,c,d,e){var f=e?"are":"is",g=new Date,h=new Date(c);return h.setMonth(h.getMonth()+3),!(g<h&&(a in b||console.warn("Web Animations: "+a+" "+f+" deprecated and will stop working on "+h.toDateString()+". "+d),b[a]=!0,1))},a.deprecated=function(b,c,d,e){var f=e?"are":"is";if(a.isDeprecated(b,c,d,e))throw new Error(b+" "+f+" no longer supported. "+d)}}(a),function(){if(document.documentElement.animate){var c=document.documentElement.animate([],0),d=!0;if(c&&(d=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(a){void 0===c[a]&&(d=!0)})),!d)return}!function(a,b,c){function d(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])if("offset"!=d&&"easing"!=d&&"composite"!=d){var e={offset:a[c].offset,easing:a[c].easing,value:a[c][d]};b[d]=b[d]||[],b[d].push(e)}for(var f in b){var g=b[f];if(0!=g[0].offset||1!=g[g.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return b}function e(c){var d=[];for(var e in c)for(var f=c[e],g=0;g<f.length-1;g++){var h=g,i=g+1,j=f[h].offset,k=f[i].offset,l=j,m=k;0==g&&(l=-1/0,0==k&&(i=h)),g==f.length-2&&(m=1/0,1==j&&(h=i)),d.push({applyFrom:l,applyTo:m,startOffset:f[h].offset,endOffset:f[i].offset,easingFunction:a.parseEasingFunction(f[h].easing),property:e,interpolation:b.propertyInterpolation(e,f[h].value,f[i].value)})}return d.sort(function(a,b){return a.startOffset-b.startOffset}),d}b.convertEffectInput=function(c){var f=a.normalizeKeyframes(c),g=d(f),h=e(g);return function(a,c){if(null!=c)h.filter(function(a){return c>=a.applyFrom&&c<a.applyTo}).forEach(function(d){var e=c-d.startOffset,f=d.endOffset-d.startOffset,g=0==f?0:d.easingFunction(e/f);b.apply(a,d.property,d.interpolation(g))});else for(var d in g)"offset"!=d&&"easing"!=d&&"composite"!=d&&b.clear(a,d)}}}(a,b),function(a,b,c){function d(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a,b,c){h[c]=h[c]||[],h[c].push([a,b])}function f(a,b,c){for(var f=0;f<c.length;f++){e(a,b,d(c[f]))}}function g(c,e,f){var g=c;/-/.test(c)&&!a.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(g=d(c)),"initial"!=e&&"initial"!=f||("initial"==e&&(e=i[g]),"initial"==f&&(f=i[g]));for(var j=e==f?[]:h[g],k=0;j&&k<j.length;k++){var l=j[k][0](e),m=j[k][0](f);if(void 0!==l&&void 0!==m){var n=j[k][1](l,m);if(n){var o=b.Interpolation.apply(null,n);return function(a){return 0==a?e:1==a?f:o(a)}}}}return b.Interpolation(!1,!0,function(a){return a?f:e})}var h={};b.addPropertiesHandler=f;var i={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};b.propertyInterpolation=g}(a,b),function(a,b,c){function d(b){var c=a.calculateActiveDuration(b),d=function(d){return a.calculateIterationProgress(c,d,b)};return d._totalDuration=b.delay+c+b.endDelay,d}b.KeyframeEffect=function(c,e,f,g){var h,i=d(a.normalizeTimingInput(f)),j=b.convertEffectInput(e),k=function(){j(c,h)};return k._update=function(a){return null!==(h=i(a))},k._clear=function(){j(c,null)},k._hasSameTarget=function(a){return c===a},k._target=c,k._totalDuration=i._totalDuration,k._id=g,k}}(a,b),function(a,b){function c(a,b){return!(!b.namespaceURI||-1==b.namespaceURI.indexOf("/svg"))&&(g in a||(a[g]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(a.navigator.userAgent)),a[g])}function d(a,b,c){c.enumerable=!0,c.configurable=!0,Object.defineProperty(a,b,c)}function e(a){this._element=a,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=a.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=c(window,a),this._savedTransformAttr=null;for(var b=0;b<this._style.length;b++){var d=this._style[b];this._surrogateStyle[d]=this._style[d]}this._updateIndices()}function f(a){if(!a._webAnimationsPatchedStyle){var b=new e(a);try{d(a,"style",{get:function(){return b}})}catch(b){a.style._set=function(b,c){a.style[b]=c},a.style._clear=function(b){a.style[b]=""}}a._webAnimationsPatchedStyle=a.style}}var g="_webAnimationsUpdateSvgTransformAttr",h={cssText:1,length:1,parentRule:1},i={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},j={removeProperty:1,setProperty:1};e.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(a){for(var b={},c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;this._surrogateStyle.cssText=a,this._updateIndices();for(var c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;for(var d in b)this._isAnimatedProperty[d]||this._style.setProperty(d,this._surrogateStyle.getPropertyValue(d))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(a){return function(){return this._surrogateStyle[a]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(b,c){this._style[b]=c,this._isAnimatedProperty[b]=!0,this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",a.transformToSvgMatrix(c)))},_clear:function(b){this._style[b]=this._surrogateStyle[b],this._updateSvgTransformAttr&&"transform"==a.unprefixedPropertyName(b)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[b]}};for(var k in i)e.prototype[k]=function(a,b){return function(){var c=this._surrogateStyle[a].apply(this._surrogateStyle,arguments);return b&&(this._isAnimatedProperty[arguments[0]]||this._style[a].apply(this._style,arguments),this._updateIndices()),c}}(k,k in j);for(var l in document.documentElement.style)l in h||l in i||function(a){d(e.prototype,a,{get:function(){return this._surrogateStyle[a]},set:function(b){this._surrogateStyle[a]=b,this._updateIndices(),this._isAnimatedProperty[a]||(this._style[a]=b)}})}(l);a.apply=function(b,c,d){f(b),b.style._set(a.propertyName(c),d)},a.clear=function(b,c){b._webAnimationsPatchedStyle&&b.style._clear(a.propertyName(c))}}(b),function(a){window.Element.prototype.animate=function(b,c){var d="";return c&&c.id&&(d=c.id),a.timeline._play(a.KeyframeEffect(this,b,c,d))}}(b),function(a,b){function c(a,b,d){if("number"==typeof a&&"number"==typeof b)return a*(1-d)+b*d;if("boolean"==typeof a&&"boolean"==typeof b)return d<.5?a:b;if(a.length==b.length){for(var e=[],f=0;f<a.length;f++)e.push(c(a[f],b[f],d));return e}throw"Mismatched interpolation arguments "+a+":"+b}a.Interpolation=function(a,b,d){return function(e){return d(c(a,b,e))}}}(b),function(a,b){function c(a,b,c){return Math.max(Math.min(a,c),b)}function d(b,d,e){var f=a.dot(b,d);f=c(f,-1,1);var g=[];if(1===f)g=b;else for(var h=Math.acos(f),i=1*Math.sin(e*h)/Math.sqrt(1-f*f),j=0;j<4;j++)g.push(b[j]*(Math.cos(e*h)-f*i)+d[j]*i);return g}var e=function(){function a(a,b){for(var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d=0;d<4;d++)for(var e=0;e<4;e++)for(var f=0;f<4;f++)c[d][e]+=b[d][f]*a[f][e];return c}function b(a){return 0==a[0][2]&&0==a[0][3]&&0==a[1][2]&&0==a[1][3]&&0==a[2][0]&&0==a[2][1]&&1==a[2][2]&&0==a[2][3]&&0==a[3][2]&&1==a[3][3]}function c(c,d,e,f,g){for(var h=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],i=0;i<4;i++)h[i][3]=g[i];for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[3][i]+=c[j]*h[j][i];var k=f[0],l=f[1],m=f[2],n=f[3],o=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];o[0][0]=1-2*(l*l+m*m),o[0][1]=2*(k*l-m*n),o[0][2]=2*(k*m+l*n),o[1][0]=2*(k*l+m*n),o[1][1]=1-2*(k*k+m*m),o[1][2]=2*(l*m-k*n),o[2][0]=2*(k*m-l*n),o[2][1]=2*(l*m+k*n),o[2][2]=1-2*(k*k+l*l),h=a(h,o);var p=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];e[2]&&(p[2][1]=e[2],h=a(h,p)),e[1]&&(p[2][1]=0,p[2][0]=e[0],h=a(h,p)),e[0]&&(p[2][0]=0,p[1][0]=e[0],h=a(h,p));for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[i][j]*=d[i];return b(h)?[h[0][0],h[0][1],h[1][0],h[1][1],h[3][0],h[3][1]]:h[0].concat(h[1],h[2],h[3])}return c}();a.composeMatrix=e,a.quat=d}(b),function(a,b,c){a.sequenceNumber=0;var d=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};b.Animation=function(b){this.id="",b&&b._id&&(this.id=b._id),this._sequenceNumber=a.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=b,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},b.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,b.timeline._animations.push(this))},_tickCurrentTime:function(a,b){a!=this._currentTime&&(this._currentTime=a,this._isFinished&&!b&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(a){a=+a,isNaN(a)||(b.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-a/this._playbackRate),this._currentTimePending=!1,this._currentTime!=a&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(a,!0),b.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(a){a=+a,isNaN(a)||this._paused||this._idle||(this._startTime=a,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),b.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(a){if(a!=this._playbackRate){var c=this.currentTime;this._playbackRate=a,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)),null!=c&&(this.currentTime=c)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,b.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),b.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(a,b){"function"==typeof b&&"finish"==a&&this._finishHandlers.push(b)},removeEventListener:function(a,b){if("finish"==a){var c=this._finishHandlers.indexOf(b);c>=0&&this._finishHandlers.splice(c,1)}},_fireEvents:function(a){if(this._isFinished){if(!this._finishedFlag){var b=new d(this,this._currentTime,a),c=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){c.forEach(function(a){a.call(b.target,b)})},0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(a,b){this._idle||this._paused||(null==this._startTime?b&&(this.startTime=a-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((a-this._startTime)*this.playbackRate)),b&&(this._currentTimePending=!1,this._fireEvents(a))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var a=this._effect._target;return a._activeAnimations||(a._activeAnimations=[]),a._activeAnimations},_markTarget:function(){var a=this._targetAnimations();-1===a.indexOf(this)&&a.push(this)},_unmarkTarget:function(){var a=this._targetAnimations(),b=a.indexOf(this);-1!==b&&a.splice(b,1)}}}(a,b),function(a,b,c){function d(a){var b=j;j=[],a<q.currentTime&&(a=q.currentTime),q._animations.sort(e),q._animations=h(a,!0,q._animations)[0],b.forEach(function(b){b[1](a)}),g(),l=void 0}function e(a,b){return a._sequenceNumber-b._sequenceNumber}function f(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function g(){o.forEach(function(a){a()}),o.length=0}function h(a,c,d){p=!0,n=!1,b.timeline.currentTime=a,m=!1;var e=[],f=[],g=[],h=[];return d.forEach(function(b){b._tick(a,c),b._inEffect?(f.push(b._effect),b._markTarget()):(e.push(b._effect),b._unmarkTarget()),b._needsTick&&(m=!0);var d=b._inEffect||b._needsTick;b._inTimeline=d,d?g.push(b):h.push(b)}),o.push.apply(o,e),o.push.apply(o,f),m&&requestAnimationFrame(function(){}),p=!1,[g,h]}var i=window.requestAnimationFrame,j=[],k=0;window.requestAnimationFrame=function(a){var b=k++;return 0==j.length&&i(d),j.push([b,a]),b},window.cancelAnimationFrame=function(a){j.forEach(function(b){b[0]==a&&(b[1]=function(){})})},f.prototype={_play:function(c){c._timing=a.normalizeTimingInput(c.timing);var d=new b.Animation(c);return d._idle=!1,d._timeline=this,this._animations.push(d),b.restart(),b.applyDirtiedAnimation(d),d}};var l=void 0,m=!1,n=!1;b.restart=function(){return m||(m=!0,requestAnimationFrame(function(){}),n=!0),n},b.applyDirtiedAnimation=function(a){if(!p){a._markTarget();var c=a._targetAnimations();c.sort(e),h(b.timeline.currentTime,!1,c.slice())[1].forEach(function(a){var b=q._animations.indexOf(a);-1!==b&&q._animations.splice(b,1)}),g()}};var o=[],p=!1,q=new f;b.timeline=q}(a,b),function(a,b){function c(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*b[d];return c}function d(a,b){return[a[0]*b[0]+a[4]*b[1]+a[8]*b[2]+a[12]*b[3],a[1]*b[0]+a[5]*b[1]+a[9]*b[2]+a[13]*b[3],a[2]*b[0]+a[6]*b[1]+a[10]*b[2]+a[14]*b[3],a[3]*b[0]+a[7]*b[1]+a[11]*b[2]+a[15]*b[3],a[0]*b[4]+a[4]*b[5]+a[8]*b[6]+a[12]*b[7],a[1]*b[4]+a[5]*b[5]+a[9]*b[6]+a[13]*b[7],a[2]*b[4]+a[6]*b[5]+a[10]*b[6]+a[14]*b[7],a[3]*b[4]+a[7]*b[5]+a[11]*b[6]+a[15]*b[7],a[0]*b[8]+a[4]*b[9]+a[8]*b[10]+a[12]*b[11],a[1]*b[8]+a[5]*b[9]+a[9]*b[10]+a[13]*b[11],a[2]*b[8]+a[6]*b[9]+a[10]*b[10]+a[14]*b[11],a[3]*b[8]+a[7]*b[9]+a[11]*b[10]+a[15]*b[11],a[0]*b[12]+a[4]*b[13]+a[8]*b[14]+a[12]*b[15],a[1]*b[12]+a[5]*b[13]+a[9]*b[14]+a[13]*b[15],a[2]*b[12]+a[6]*b[13]+a[10]*b[14]+a[14]*b[15],a[3]*b[12]+a[7]*b[13]+a[11]*b[14]+a[15]*b[15]]}function e(a){var b=a.rad||0;return((a.deg||0)/360+(a.grad||0)/400+(a.turn||0))*(2*Math.PI)+b}function f(a){switch(a.t){case"rotatex":var b=e(a.d[0]);return[1,0,0,0,0,Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1];case"rotatey":var b=e(a.d[0]);return[Math.cos(b),0,-Math.sin(b),0,0,1,0,0,Math.sin(b),0,Math.cos(b),0,0,0,0,1];case"rotate":case"rotatez":var b=e(a.d[0]);return[Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var c=a.d[0],d=a.d[1],f=a.d[2],b=e(a.d[3]),g=c*c+d*d+f*f;if(0===g)c=1,d=0,f=0;else if(1!==g){var h=Math.sqrt(g);c/=h,d/=h,f/=h}var i=Math.sin(b/2),j=i*Math.cos(b/2),k=i*i;return[1-2*(d*d+f*f)*k,2*(c*d*k+f*j),2*(c*f*k-d*j),0,2*(c*d*k-f*j),1-2*(c*c+f*f)*k,2*(d*f*k+c*j),0,2*(c*f*k+d*j),2*(d*f*k-c*j),1-2*(c*c+d*d)*k,0,0,0,0,1];case"scale":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[a.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,a.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,a.d[0],0,0,0,0,1];case"scale3d":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,a.d[2],0,0,0,0,1];case"skew":var l=e(a.d[0]),m=e(a.d[1]);return[1,Math.tan(m),0,0,Math.tan(l),1,0,0,0,0,1,0,0,0,0,1];case"skewx":var b=e(a.d[0]);return[1,0,0,0,Math.tan(b),1,0,0,0,0,1,0,0,0,0,1];case"skewy":var b=e(a.d[0]);return[1,Math.tan(b),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":var c=a.d[0].px||0,d=a.d[1].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,0,1];case"translatex":var c=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,0,0,1];case"translatey":var d=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,d,0,1];case"translatez":var f=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,f,1];case"translate3d":var c=a.d[0].px||0,d=a.d[1].px||0,f=a.d[2].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,f,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,a.d[0].px?-1/a.d[0].px:0,0,0,0,1];case"matrix":return[a.d[0],a.d[1],0,0,a.d[2],a.d[3],0,0,0,0,1,0,a.d[4],a.d[5],0,1];case"matrix3d":return a.d}}function g(a){return 0===a.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:a.map(f).reduce(d)}function h(a){return[i(g(a))]}var i=function(){function a(a){return a[0][0]*a[1][1]*a[2][2]+a[1][0]*a[2][1]*a[0][2]+a[2][0]*a[0][1]*a[1][2]-a[0][2]*a[1][1]*a[2][0]-a[1][2]*a[2][1]*a[0][0]-a[2][2]*a[0][1]*a[1][0]}function b(b){for(var c=1/a(b),d=b[0][0],e=b[0][1],f=b[0][2],g=b[1][0],h=b[1][1],i=b[1][2],j=b[2][0],k=b[2][1],l=b[2][2],m=[[(h*l-i*k)*c,(f*k-e*l)*c,(e*i-f*h)*c,0],[(i*j-g*l)*c,(d*l-f*j)*c,(f*g-d*i)*c,0],[(g*k-h*j)*c,(j*e-d*k)*c,(d*h-e*g)*c,0]],n=[],o=0;o<3;o++){for(var p=0,q=0;q<3;q++)p+=b[3][q]*m[q][o];n.push(p)}return n.push(1),m.push(n),m}function d(a){return[[a[0][0],a[1][0],a[2][0],a[3][0]],[a[0][1],a[1][1],a[2][1],a[3][1]],[a[0][2],a[1][2],a[2][2],a[3][2]],[a[0][3],a[1][3],a[2][3],a[3][3]]]}function e(a,b){for(var c=[],d=0;d<4;d++){for(var e=0,f=0;f<4;f++)e+=a[f]*b[f][d];c.push(e)}return c}function f(a){var b=g(a);return[a[0]/b,a[1]/b,a[2]/b]}function g(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}function h(a,b,c,d){return[c*a[0]+d*b[0],c*a[1]+d*b[1],c*a[2]+d*b[2]]}function i(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function j(j){var k=[j.slice(0,4),j.slice(4,8),j.slice(8,12),j.slice(12,16)];if(1!==k[3][3])return null;for(var l=[],m=0;m<4;m++)l.push(k[m].slice());for(var m=0;m<3;m++)l[m][3]=0;if(0===a(l))return null;var n,o=[];k[0][3]||k[1][3]||k[2][3]?(o.push(k[0][3]),o.push(k[1][3]),o.push(k[2][3]),o.push(k[3][3]),n=e(o,d(b(l)))):n=[0,0,0,1];var p=k[3].slice(0,3),q=[];q.push(k[0].slice(0,3));var r=[];r.push(g(q[0])),q[0]=f(q[0]);var s=[];q.push(k[1].slice(0,3)),s.push(c(q[0],q[1])),q[1]=h(q[1],q[0],1,-s[0]),r.push(g(q[1])),q[1]=f(q[1]),s[0]/=r[1],q.push(k[2].slice(0,3)),s.push(c(q[0],q[2])),q[2]=h(q[2],q[0],1,-s[1]),s.push(c(q[1],q[2])),q[2]=h(q[2],q[1],1,-s[2]),r.push(g(q[2])),q[2]=f(q[2]),s[1]/=r[2],s[2]/=r[2];var t=i(q[1],q[2]);if(c(q[0],t)<0)for(var m=0;m<3;m++)r[m]*=-1,q[m][0]*=-1,q[m][1]*=-1,q[m][2]*=-1;var u,v,w=q[0][0]+q[1][1]+q[2][2]+1;return w>1e-4?(u=.5/Math.sqrt(w),v=[(q[2][1]-q[1][2])*u,(q[0][2]-q[2][0])*u,(q[1][0]-q[0][1])*u,.25/u]):q[0][0]>q[1][1]&&q[0][0]>q[2][2]?(u=2*Math.sqrt(1+q[0][0]-q[1][1]-q[2][2]),v=[.25*u,(q[0][1]+q[1][0])/u,(q[0][2]+q[2][0])/u,(q[2][1]-q[1][2])/u]):q[1][1]>q[2][2]?(u=2*Math.sqrt(1+q[1][1]-q[0][0]-q[2][2]),v=[(q[0][1]+q[1][0])/u,.25*u,(q[1][2]+q[2][1])/u,(q[0][2]-q[2][0])/u]):(u=2*Math.sqrt(1+q[2][2]-q[0][0]-q[1][1]),v=[(q[0][2]+q[2][0])/u,(q[1][2]+q[2][1])/u,.25*u,(q[1][0]-q[0][1])/u]),[p,r,s,v,n]}return j}();a.dot=c,a.makeMatrixDecomposition=h,a.transformListToMatrix=g}(b),function(a){function b(a,b){var c=a.exec(b);if(c)return c=a.ignoreCase?c[0].toLowerCase():c[0],[c,b.substr(c.length)]}function c(a,b){b=b.replace(/^\s*/,"");var c=a(b);if(c)return[c[0],c[1].replace(/^\s*/,"")]}function d(a,d,e){a=c.bind(null,a);for(var f=[];;){var g=a(e);if(!g)return[f,e];if(f.push(g[0]),e=g[1],!(g=b(d,e))||""==g[1])return[f,e];e=g[1]}}function e(a,b){for(var c=0,d=0;d<b.length&&(!/\s|,/.test(b[d])||0!=c);d++)if("("==b[d])c++;else if(")"==b[d]&&(c--,0==c&&d++,c<=0))break;var e=a(b.substr(0,d));return void 0==e?void 0:[e,b.substr(d)]}function f(a,b){for(var c=a,d=b;c&&d;)c>d?c%=d:d%=c;return c=a*b/(c+d)}function g(a){return function(b){var c=a(b);return c&&(c[0]=void 0),c}}function h(a,b){return function(c){return a(c)||[b,c]}}function i(b,c){for(var d=[],e=0;e<b.length;e++){var f=a.consumeTrimmed(b[e],c);if(!f||""==f[0])return;void 0!==f[0]&&d.push(f[0]),c=f[1]}if(""==c)return d}function j(a,b,c,d,e){for(var g=[],h=[],i=[],j=f(d.length,e.length),k=0;k<j;k++){var l=b(d[k%d.length],e[k%e.length]);if(!l)return;g.push(l[0]),h.push(l[1]),i.push(l[2])}return[g,h,function(b){var d=b.map(function(a,b){return i[b](a)}).join(c);return a?a(d):d}]}function k(a,b,c){for(var d=[],e=[],f=[],g=0,h=0;h<c.length;h++)if("function"==typeof c[h]){var i=c[h](a[g],b[g++]);d.push(i[0]),e.push(i[1]),f.push(i[2])}else!function(a){d.push(!1),e.push(!1),f.push(function(){return c[a]})}(h);return[d,e,function(a){for(var b="",c=0;c<a.length;c++)b+=f[c](a[c]);return b}]}a.consumeToken=b,a.consumeTrimmed=c,a.consumeRepeated=d,a.consumeParenthesised=e,a.ignore=g,a.optional=h,a.consumeList=i,a.mergeNestedRepeated=j.bind(null,null),a.mergeWrappedNestedRepeated=j,a.mergeList=k}(b),function(a){function b(b){function c(b){var c=a.consumeToken(/^inset/i,b);return c?(d.inset=!0,c):(c=a.consumeLengthOrPercent(b))?(d.lengths.push(c[0]),c):(c=a.consumeColor(b),c?(d.color=c[0],c):void 0)}var d={inset:!1,lengths:[],color:null},e=a.consumeRepeated(c,/^/,b);if(e&&e[0].length)return[d,e[1]]}function c(c){var d=a.consumeRepeated(b,/^,/,c);if(d&&""==d[1])return d[0]}function d(b,c){for(;b.lengths.length<Math.max(b.lengths.length,c.lengths.length);)b.lengths.push({px:0});for(;c.lengths.length<Math.max(b.lengths.length,c.lengths.length);)c.lengths.push({px:0});if(b.inset==c.inset&&!!b.color==!!c.color){for(var d,e=[],f=[[],0],g=[[],0],h=0;h<b.lengths.length;h++){var i=a.mergeDimensions(b.lengths[h],c.lengths[h],2==h);f[0].push(i[0]),g[0].push(i[1]),e.push(i[2])}if(b.color&&c.color){var j=a.mergeColors(b.color,c.color);f[1]=j[0],g[1]=j[1],d=j[2]}return[f,g,function(a){for(var c=b.inset?"inset ":" ",f=0;f<e.length;f++)c+=e[f](a[0][f])+" ";return d&&(c+=d(a[1])),c}]}}function e(b,c,d,e){function f(a){return{inset:a,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var g=[],h=[],i=0;i<d.length||i<e.length;i++){var j=d[i]||f(e[i].inset),k=e[i]||f(d[i].inset);g.push(j),h.push(k)}return a.mergeNestedRepeated(b,c,g,h)}var f=e.bind(null,d,", ");a.addPropertiesHandler(c,f,["box-shadow","text-shadow"])}(b),function(a,b){function c(a){return a.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function d(a,b,c){return Math.min(b,Math.max(a,c))}function e(a){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a))return Number(a)}function f(a,b){return[a,b,c]}function g(a,b){if(0!=a)return i(0,1/0)(a,b)}function h(a,b){return[a,b,function(a){return Math.round(d(1,1/0,a))}]}function i(a,b){return function(e,f){return[e,f,function(e){return c(d(a,b,e))}]}}function j(a){var b=a.trim().split(/\s*[\s,]\s*/);if(0!==b.length){for(var c=[],d=0;d<b.length;d++){var f=e(b[d]);if(void 0===f)return;c.push(f)}return c}}function k(a,b){if(a.length==b.length)return[a,b,function(a){return a.map(c).join(" ")}]}function l(a,b){return[a,b,Math.round]}a.clamp=d,a.addPropertiesHandler(j,k,["stroke-dasharray"]),a.addPropertiesHandler(e,i(0,1/0),["border-image-width","line-height"]),a.addPropertiesHandler(e,i(0,1),["opacity","shape-image-threshold"]),a.addPropertiesHandler(e,g,["flex-grow","flex-shrink"]),a.addPropertiesHandler(e,h,["orphans","widows"]),a.addPropertiesHandler(e,l,["z-index"]),a.parseNumber=e,a.parseNumberList=j,a.mergeNumbers=f,a.numberToString=c}(b),function(a,b){function c(a,b){if("visible"==a||"visible"==b)return[0,1,function(c){return c<=0?a:c>=1?b:"visible"}]}a.addPropertiesHandler(String,c,["visibility"])}(b),function(a,b){function c(a){a=a.trim(),f.fillStyle="#000",f.fillStyle=a;var b=f.fillStyle;if(f.fillStyle="#fff",f.fillStyle=a,b==f.fillStyle){f.fillRect(0,0,1,1);var c=f.getImageData(0,0,1,1).data;f.clearRect(0,0,1,1);var d=c[3]/255;return[c[0]*d,c[1]*d,c[2]*d,d]}}function d(b,c){return[b,c,function(b){function c(a){return Math.max(0,Math.min(255,a))}if(b[3])for(var d=0;d<3;d++)b[d]=Math.round(c(b[d]/b[3]));return b[3]=a.numberToString(a.clamp(0,1,b[3])),"rgba("+b.join(",")+")"}]}var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=e.height=1;var f=e.getContext("2d");a.addPropertiesHandler(c,d,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),a.consumeColor=a.consumeParenthesised.bind(null,c),a.mergeColors=d}(b),function(a,b){function c(a){function b(){var b=h.exec(a);g=b?b[0]:void 0}function c(){var a=Number(g);return b(),a}function d(){if("("!==g)return c();b();var a=f();return")"!==g?NaN:(b(),a)}function e(){for(var a=d();"*"===g||"/"===g;){var c=g;b();var e=d();"*"===c?a*=e:a/=e}return a}function f(){for(var a=e();"+"===g||"-"===g;){var c=g;b();var d=e();"+"===c?a+=d:a-=d}return a}var g,h=/([\+\-\w\.]+|[\(\)\*\/])/g;return b(),f()}function d(a,b){if("0"==(b=b.trim().toLowerCase())&&"px".search(a)>=0)return{px:0};if(/^[^(]*$|^calc/.test(b)){b=b.replace(/calc\(/g,"(");var d={};b=b.replace(a,function(a){return d[a]=null,"U"+a});for(var e="U("+a.source+")",f=b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+e,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),g=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],h=0;h<g.length;)g[h].test(f)?(f=f.replace(g[h],"$1"),h=0):h++;if("D"==f){for(var i in d){var j=c(b.replace(new RegExp("U"+i,"g"),"").replace(new RegExp(e,"g"),"*0"));if(!isFinite(j))return;d[i]=j}return d}}}function e(a,b){return f(a,b,!0)}function f(b,c,d){var e,f=[];for(e in b)f.push(e);for(e in c)f.indexOf(e)<0&&f.push(e);return b=f.map(function(a){return b[a]||0}),c=f.map(function(a){return c[a]||0}),[b,c,function(b){var c=b.map(function(c,e){return 1==b.length&&d&&(c=Math.max(c,0)),a.numberToString(c)+f[e]}).join(" + ");return b.length>1?"calc("+c+")":c}]}var g="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",h=d.bind(null,new RegExp(g,"g")),i=d.bind(null,new RegExp(g+"|%","g")),j=d.bind(null,/deg|rad|grad|turn/g);a.parseLength=h,a.parseLengthOrPercent=i,a.consumeLengthOrPercent=a.consumeParenthesised.bind(null,i),a.parseAngle=j,a.mergeDimensions=f;var k=a.consumeParenthesised.bind(null,h),l=a.consumeRepeated.bind(void 0,k,/^/),m=a.consumeRepeated.bind(void 0,l,/^,/);a.consumeSizePairList=m;var n=function(a){var b=m(a);if(b&&""==b[1])return b[0]},o=a.mergeNestedRepeated.bind(void 0,e," "),p=a.mergeNestedRepeated.bind(void 0,o,",");a.mergeNonNegativeSizePair=o,a.addPropertiesHandler(n,p,["background-size"]),a.addPropertiesHandler(i,e,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),a.addPropertiesHandler(i,f,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(b),function(a,b){function c(b){return a.consumeLengthOrPercent(b)||a.consumeToken(/^auto/,b)}function d(b){var d=a.consumeList([a.ignore(a.consumeToken.bind(null,/^rect/)),a.ignore(a.consumeToken.bind(null,/^\(/)),a.consumeRepeated.bind(null,c,/^,/),a.ignore(a.consumeToken.bind(null,/^\)/))],b);if(d&&4==d[0].length)return d[0]}function e(b,c){return"auto"==b||"auto"==c?[!0,!1,function(d){var e=d?b:c;if("auto"==e)return"auto";var f=a.mergeDimensions(e,e);return f[2](f[0])}]:a.mergeDimensions(b,c)}function f(a){return"rect("+a+")"}var g=a.mergeWrappedNestedRepeated.bind(null,f,e,", ");a.parseBox=d,a.mergeBoxes=g,a.addPropertiesHandler(d,g,["clip"])}(b),function(a,b){function c(a){return function(b){var c=0;return a.map(function(a){return a===k?b[c++]:a})}}function d(a){return a}function e(b){if("none"==(b=b.toLowerCase().trim()))return[];for(var c,d=/\s*(\w+)\(([^)]*)\)/g,e=[],f=0;c=d.exec(b);){if(c.index!=f)return;f=c.index+c[0].length;var g=c[1],h=n[g];if(!h)return;var i=c[2].split(","),j=h[0];if(j.length<i.length)return;for(var k=[],o=0;o<j.length;o++){var p,q=i[o],r=j[o];if(void 0===(p=q?{A:function(b){return"0"==b.trim()?m:a.parseAngle(b)},N:a.parseNumber,T:a.parseLengthOrPercent,L:a.parseLength}[r.toUpperCase()](q):{a:m,n:k[0],t:l}[r]))return;k.push(p)}if(e.push({t:g,d:k}),d.lastIndex==b.length)return e}}function f(a){return a.toFixed(6).replace(".000000","")}function g(b,c){if(b.decompositionPair!==c){b.decompositionPair=c;var d=a.makeMatrixDecomposition(b)}if(c.decompositionPair!==b){c.decompositionPair=b;var e=a.makeMatrixDecomposition(c)}return null==d[0]||null==e[0]?[[!1],[!0],function(a){return a?c[0].d:b[0].d}]:(d[0].push(0),e[0].push(1),[d,e,function(b){var c=a.quat(d[0][3],e[0][3],b[5]);return a.composeMatrix(b[0],b[1],b[2],c,b[4]).map(f).join(",")}])}function h(a){return a.replace(/[xy]/,"")}function i(a){return a.replace(/(x|y|z|3d)?$/,"3d")}function j(b,c){var d=a.makeMatrixDecomposition&&!0,e=!1;if(!b.length||!c.length){b.length||(e=!0,b=c,c=[]);for(var f=0;f<b.length;f++){var j=b[f].t,k=b[f].d,l="scale"==j.substr(0,5)?1:0;c.push({t:j,d:k.map(function(a){if("number"==typeof a)return l;var b={};for(var c in a)b[c]=l;return b})})}}var m=function(a,b){return"perspective"==a&&"perspective"==b||("matrix"==a||"matrix3d"==a)&&("matrix"==b||"matrix3d"==b)},o=[],p=[],q=[];if(b.length!=c.length){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]]}else for(var f=0;f<b.length;f++){var j,s=b[f].t,t=c[f].t,u=b[f].d,v=c[f].d,w=n[s],x=n[t];if(m(s,t)){if(!d)return;var r=g([b[f]],[c[f]]);o.push(r[0]),p.push(r[1]),q.push(["matrix",[r[2]]])}else{if(s==t)j=s;else if(w[2]&&x[2]&&h(s)==h(t))j=h(s),u=w[2](u),v=x[2](v);else{if(!w[1]||!x[1]||i(s)!=i(t)){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];break}j=i(s),u=w[1](u),v=x[1](v)}for(var y=[],z=[],A=[],B=0;B<u.length;B++){var C="number"==typeof u[B]?a.mergeNumbers:a.mergeDimensions,r=C(u[B],v[B]);y[B]=r[0],z[B]=r[1],A.push(r[2])}o.push(y),p.push(z),q.push([j,A])}}if(e){var D=o;o=p,p=D}return[o,p,function(a){return a.map(function(a,b){var c=a.map(function(a,c){return q[b][1][c](a)}).join(",");return"matrix"==q[b][0]&&16==c.split(",").length&&(q[b][0]="matrix3d"),q[b][0]+"("+c+")"}).join(" ")}]}var k=null,l={px:0},m={deg:0},n={matrix:["NNNNNN",[k,k,0,0,k,k,0,0,0,0,1,0,k,k,0,1],d],matrix3d:["NNNNNNNNNNNNNNNN",d],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",c([k,k,1]),d],scalex:["N",c([k,1,1]),c([k,1])],scaley:["N",c([1,k,1]),c([1,k])],scalez:["N",c([1,1,k])],scale3d:["NNN",d],skew:["Aa",null,d],skewx:["A",null,c([k,m])],skewy:["A",null,c([m,k])],translate:["Tt",c([k,k,l]),d],translatex:["T",c([k,l,l]),c([k,l])],translatey:["T",c([l,k,l]),c([l,k])],translatez:["L",c([l,l,k])],translate3d:["TTL",d]};a.addPropertiesHandler(e,j,["transform"]),a.transformToSvgMatrix=function(b){var c=a.transformListToMatrix(e(b));return"matrix("+f(c[0])+" "+f(c[1])+" "+f(c[4])+" "+f(c[5])+" "+f(c[12])+" "+f(c[13])+")"}}(b),function(a){function b(a){var b=Number(a);if(!(isNaN(b)||b<100||b>900||b%100!=0))return b}function c(b){return b=100*Math.round(b/100),b=a.clamp(100,900,b),400===b?"normal":700===b?"bold":String(b)}function d(a,b){return[a,b,c]}a.addPropertiesHandler(b,d,["font-weight"])}(b),function(a){function b(a){var b={};for(var c in a)b[c]=-a[c];return b}function c(b){return a.consumeToken(/^(left|center|right|top|bottom)\b/i,b)||a.consumeLengthOrPercent(b)}function d(b,d){var e=a.consumeRepeated(c,/^/,d);if(e&&""==e[1]){var f=e[0];if(f[0]=f[0]||"center",f[1]=f[1]||"center",3==b&&(f[2]=f[2]||{px:0}),f.length==b){if(/top|bottom/.test(f[0])||/left|right/.test(f[1])){var h=f[0];f[0]=f[1],f[1]=h}if(/left|right|center|Object/.test(f[0])&&/top|bottom|center|Object/.test(f[1]))return f.map(function(a){return"object"==typeof a?a:g[a]})}}}function e(d){var e=a.consumeRepeated(c,/^/,d);if(e){for(var f=e[0],h=[{"%":50},{"%":50}],i=0,j=!1,k=0;k<f.length;k++){var l=f[k];"string"==typeof l?(j=/bottom|right/.test(l),i={left:0,right:0,center:i,top:1,bottom:1}[l],h[i]=g[l],"center"==l&&i++):(j&&(l=b(l),l["%"]=(l["%"]||0)+100),h[i]=l,i++,j=!1)}return[h,e[1]]}}function f(b){var c=a.consumeRepeated(e,/^,/,b);if(c&&""==c[1])return c[0]}var g={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},h=a.mergeNestedRepeated.bind(null,a.mergeDimensions," ");a.addPropertiesHandler(d.bind(null,3),h,["transform-origin"]),a.addPropertiesHandler(d.bind(null,2),h,["perspective-origin"]),a.consumePosition=e,a.mergeOffsetList=h;var i=a.mergeNestedRepeated.bind(null,h,", ");a.addPropertiesHandler(f,i,["background-position","object-position"])}(b),function(a){function b(b){var c=a.consumeToken(/^circle/,b);if(c&&c[0])return["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),d,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],c[1]));var f=a.consumeToken(/^ellipse/,b);if(f&&f[0])return["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),e,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],f[1]));var g=a.consumeToken(/^polygon/,b);return g&&g[0]?["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),a.optional(a.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),a.consumeSizePairList,a.ignore(a.consumeToken.bind(void 0,/^\)/))],g[1])):void 0}function c(b,c){if(b[0]===c[0])return"circle"==b[0]?a.mergeList(b.slice(1),c.slice(1),["circle(",a.mergeDimensions," at ",a.mergeOffsetList,")"]):"ellipse"==b[0]?a.mergeList(b.slice(1),c.slice(1),["ellipse(",a.mergeNonNegativeSizePair," at ",a.mergeOffsetList,")"]):"polygon"==b[0]&&b[1]==c[1]?a.mergeList(b.slice(2),c.slice(2),["polygon(",b[1],g,")"]):void 0}var d=a.consumeParenthesised.bind(null,a.parseLengthOrPercent),e=a.consumeRepeated.bind(void 0,d,/^/),f=a.mergeNestedRepeated.bind(void 0,a.mergeDimensions," "),g=a.mergeNestedRepeated.bind(void 0,f,",");a.addPropertiesHandler(b,c,["shape-outside"])}(b),function(a,b){function c(a,b){b.concat([a]).forEach(function(b){b in document.documentElement.style&&(d[a]=b),e[b]=a})}var d={},e={};c("transform",["webkitTransform","msTransform"]),c("transformOrigin",["webkitTransformOrigin"]),c("perspective",["webkitPerspective"]),c("perspectiveOrigin",["webkitPerspectiveOrigin"]),a.propertyName=function(a){return d[a]||a},a.unprefixedPropertyName=function(a){return e[a]||a}}(b)}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){var a;if(window.performance&&performance.now)var a=function(){return performance.now()};else var a=function(){return Date.now()};var b=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},c=window.Element.prototype.animate;window.Element.prototype.animate=function(d,e){var f=c.call(this,d,e);f._cancelHandlers=[],f.oncancel=null;var g=f.cancel;f.cancel=function(){g.call(this);var c=new b(this,null,a()),d=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){d.forEach(function(a){a.call(c.target,c)})},0)};var h=f.addEventListener;f.addEventListener=function(a,b){"function"==typeof b&&"cancel"==a?this._cancelHandlers.push(b):h.call(this,a,b)};var i=f.removeEventListener;return f.removeEventListener=function(a,b){if("cancel"==a){var c=this._cancelHandlers.indexOf(b);c>=0&&this._cancelHandlers.splice(c,1)}else i.call(this,a,b)},f}}}(),function(a){var b=document.documentElement,c=null,d=!1;try{var e=getComputedStyle(b).getPropertyValue("opacity"),f="0"==e?"1":"0";c=b.animate({opacity:[f,f]},{duration:1}),c.currentTime=0,d=getComputedStyle(b).getPropertyValue("opacity")==f}catch(a){}finally{c&&c.cancel()}if(!d){var g=window.Element.prototype.animate;window.Element.prototype.animate=function(b,c){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||null===b||(b=a.convertToArrayForm(b)),g.call(this,b,c)}}}(a)}();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=polyfills.js.map