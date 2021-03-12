/* eslint-disable */
/**
 * Warning: This file is auto-generated, do not modify. Instead, make your changes in 'app/javascript/activeadmin_addons/' and run `yarn build`
 */
//= require select2.full
//= require jquery.datetimepicker.full.min

(function(factory) {
  typeof define === "function" && define.amd ? define([ "select2" ], factory) : factory();
})(function() {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var jquery = createCommonjsModule(function(module) {
    (function(global, factory) {
      {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      }
    })(typeof window !== "undefined" ? window : commonjsGlobal, function(window, noGlobal) {
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };
      var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
      };
      var document = window.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.5.1", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      };
      jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (;i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== undefined) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        globalEval: function(code, options, doc) {
          DOMEval(code, {
            nonce: options && options.nonce
          }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (;i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        makeArray: function(arr, results) {
          var ret = results || [];
          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
            } else {
              push.call(ret, arr);
            }
          }
          return ret;
        },
        inArray: function(elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (;j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (;i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (;i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        guid: 1,
        support: support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
          var i = 0, len = list.length;
          for (;i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "�";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
          dir: "parentNode",
          next: "legend"
        });
        try {
          push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push = {
            apply: arr.length ? function(target, els) {
              pushNative.apply(target, slice.call(els));
            } : function(target, els) {
              var j = target.length, i = 0;
              while (target[j++] = els[i++]) {}
              target.length = j - 1;
            }
          };
        }
        function Sizzle(selector, context, results, seed) {
          var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                  push.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext !== context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rcssescape, fcssescape);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i = groups.length;
                  while (i--) {
                    groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function addHandle(attrs, handler) {
          var arr = attrs.split("|"), i = arr.length;
          while (i--) {
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        function siblingCheck(a, b) {
          var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
          if (diff) {
            return diff;
          }
          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches) {
              var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
              while (i--) {
                if (seed[j = matchIndexes[i]]) {
                  seed[j] = !(matches[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
          var namespace = elem.namespaceURI, docElem = (elem.ownerDocument || elem).documentElement;
          return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        setDocument = Sizzle.setDocument = function(node) {
          var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
          }
          document = doc;
          docElem = document.documentElement;
          documentIsHTML = !isXML(document);
          if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false);
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          support.scope = assert(function(el) {
            docElem.appendChild(el).appendChild(document.createElement("div"));
            return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
          });
          support.attributes = assert(function(el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          support.getElementsByTagName = assert(function(el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
          });
          support.getElementsByClassName = rnative.test(document.getElementsByClassName);
          support.getById = assert(function(el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || !document.getElementsByName(expando).length;
          });
          if (support.getById) {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [ elem ] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node && node.value === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node, i, elems, elem = context.getElementById(id);
                if (elem) {
                  node = elem.getAttributeNode("id");
                  if (node && node.value === id) {
                    return [ elem ];
                  }
                  elems = context.getElementsByName(id);
                  i = 0;
                  while (elem = elems[i++]) {
                    node = elem.getAttributeNode("id");
                    if (node && node.value === id) {
                      return [ elem ];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else if (support.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function(tag, context) {
            var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
            if (tag === "*") {
              while (elem = results[i++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          };
          Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyMatches = [];
          rbuggyQSA = [];
          if (support.qsa = rnative.test(document.querySelectorAll)) {
            assert(function(el) {
              var input;
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
              }
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              input = document.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              el.querySelectorAll("\\\f");
              rbuggyQSA.push("[\\r\\n\\f]");
            });
            assert(function(el) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
              var input = document.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              }
              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              docElem.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }
          if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function(el) {
              support.disconnectedMatch = matches.call(el, "*");
              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          hasCompare = rnative.test(docElem.compareDocumentPosition);
          contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function(a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };
          sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          } : function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
            if (!aup || !bup) {
              return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }
            cur = b;
            while (cur = cur.parentNode) {
              bp.unshift(cur);
            }
            while (ap[i] === bp[i]) {
              i++;
            }
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
          };
          return document;
        };
        Sizzle.matches = function(expr, elements) {
          return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document) {
            setDocument(context);
          }
          return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
          return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.escape = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i = 0;
          hasDuplicate = !support.detectDuplicates;
          sortInput = !support.sortStable && results.slice(0);
          results.sort(sortOrder);
          if (hasDuplicate) {
            while (elem = results[i++]) {
              if (elem === results[i]) {
                j = duplicates.push(i);
              }
            }
            while (j--) {
              results.splice(duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        getText = Sizzle.getText = function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        };
        Expr = Sizzle.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: true
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  Sizzle.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                Sizzle.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = Sizzle.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, _context, xml) {
                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir) {
                      node = elem;
                      while (node = node[dir]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [ forward ? parent.firstChild : parent.lastChild ];
                  if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [ dirruns, diff ];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [ pseudo, pseudo, "", argument ];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                  var idx, matched = fn(seed, argument), i = matched.length;
                  while (i--) {
                    idx = indexOf(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                while (i--) {
                  if (elem = unmatched[i]) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                Sizzle.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            target: function(elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === docElem;
            },
            focus: function(elem) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              var nodeName = elem.nodeName.toLowerCase();
              return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            text: function(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            first: createPositionalPseudo(function() {
              return [ 0 ];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [ length - 1 ];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [ argument < 0 ? argument + length : argument ];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i = 0;
              for (;i < length; i += 2) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i = 1;
              for (;i < length; i += 2) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument > length ? length : argument;
              for (;--i >= 0; ) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument;
              for (;++i < length; ) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
          submit: true,
          reset: true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: match[0].replace(rtrim, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
          var i = 0, len = tokens.length, selector = "";
          for (;i < len; i++) {
            selector += tokens[i].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          } : function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
            if (xml) {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    uniqueCache[key] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i = matchers.length;
            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i = 0, len = contexts.length;
          for (;i < len; i++) {
            Sizzle(selector, contexts[i], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
          for (;i < len; i++) {
            if (elem = unmatched[i]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i = temp.length;
              while (i--) {
                if (elem = temp[i]) {
                  matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i = matcherOut.length;
                  while (i--) {
                    if (elem = matcherOut[i]) {
                      temp.push(matcherIn[i] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i = matcherOut.length;
                while (i--) {
                  if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [ function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          } ];
          for (;i < len; i++) {
            if (matcher = Expr.relative[tokens[i].type]) {
              matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
            } else {
              matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
              if (matcher[expando]) {
                j = ++i;
                for (;j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                  value: tokens[i - 2].type === " " ? "*" : ""
                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
            if (outermost) {
              outermostContext = context == document || context || outermost;
            }
            for (;i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
          var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i = match.length;
            while (i--) {
              cached = matcherFromTokens(match[i]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
          var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i--) {
              token = tokens[i];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find = Expr.find[type]) {
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        if (!assert(function(el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        }
        if (!support.attributes || !assert(function(el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function(elem, _name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        }
        if (!assert(function(el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }
        return Sizzle;
      }(window);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (;n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
          return elem.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [ null, selector, null ];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (;i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (;i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (;queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [ context, args.slice ? args.slice() : args ];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(undefined, [ value ].slice(noValue));
          }
        } catch (value) {
          reject.apply(undefined, [ value ]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            catch: function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                      } else {
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                      }
                    } else {
                      if (handler !== Identity) {
                        that = undefined;
                        args = [ returned ];
                      }
                      (special || deferred.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(e, process.stackTrace);
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = undefined;
                          args = [ e ];
                        }
                        deferred.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i) {
            return function(value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
            if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }
          return master.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, stack) {
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      jQuery.readyException = function(error) {
        window.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery.readyException(error);
        });
        return this;
      };
      jQuery.extend({
        isReady: false,
        readyWait: 1,
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document, [ jQuery ]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== undefined) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value) {
                return bulk.call(jQuery(elem), value);
              };
            }
          }
          if (fn) {
            for (;i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
          if (key === undefined || key && typeof key === "string" && value === undefined) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === undefined) {
            return;
          }
          if (key !== undefined) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === undefined || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = undefined;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {}
            dataUser.set(elem, key, data);
          } else {
            data = undefined;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value) {
            var data;
            if (elem && value === undefined) {
              data = dataUser.get(elem, key);
              if (data !== undefined) {
                return data;
              }
              data = dataAttr(elem, key);
              if (data !== undefined) {
                return data;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [ type + "queue", key ]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === undefined ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [ elements ]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = undefined;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
      var documentElement = document.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = {
        composed: true
      };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === undefined || tag && nodeName(context, tag)) {
          return jQuery.merge([ context ], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (;i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (;i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document.activeElement;
        } catch (err) {}
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = undefined;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = undefined;
          } else {
            fn = data;
            data = selector;
            selector = undefined;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [ "" ];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [ "" ];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (;cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === undefined) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: handlers.slice(delegateCount)
            });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            noBubble: true
          },
          click: {
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync) {
        if (!expectSync) {
          if (dataPriv.get(el, type) === undefined) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result.value;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(event) {
          var button = event.button;
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          }
          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }
            if (button & 2) {
              return 3;
            }
            if (button & 4) {
              return 2;
            }
            return 0;
          }
          return event.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({
        focus: "focusin",
        blur: "focusout"
      }, function(type, delegateType) {
        jQuery.event.special[type] = {
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          delegateType: delegateType
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = undefined;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (;i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (;(node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (;(elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = undefined;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = undefined;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value) {
            return value === undefined ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (;(elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (;i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value;
                  }
                }
                elem = 0;
              } catch (e) {}
            }
            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (;i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document.createElement("table");
              tr = document.createElement("tr");
              trChild = document.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== undefined ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (;i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
      }
      jQuery.extend({
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          columnCount: true,
          fillOpacity: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          widows: true,
          zIndex: true,
          zoom: true
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== undefined) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === undefined) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each([ "height", "width" ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
          }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
            for (;i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name, value) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;
              for (;i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }
              return map;
            }
            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return .5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
          } else {
            window.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window.setTimeout(function() {
          fxNow = undefined;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
          height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([ elem ], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([ elem ]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([ elem ], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([ elem ]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
          for (;index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [ animation, percent, remaining ]);
          if (percent < 1 && length) {
            return remaining;
          }
          if (!length) {
            deferred.notifyWith(elem, [ animation, 1, 0 ]);
          }
          deferred.resolveWith(elem, [ animation ]);
          return false;
        }, animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (;index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [ animation, 1, 0 ]);
              deferred.resolveWith(elem, [ animation, gotoEnd ]);
            } else {
              deferred.rejectWith(elem, [ animation, gotoEnd ]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem: elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [ function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          } ]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = [ "*" ];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (;index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [ defaultPrefilter ],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
            opacity: to
          }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each([ "toggle", "show", "hide" ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (;i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = undefined;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window.setTimeout(next, time);
          hooks.stop = function() {
            window.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
          }
          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? undefined : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
          var ret, handle, lowercaseName = name.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== undefined) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }
          return this.each(function() {
            var className, i, self, classNames;
            if (isValidValue) {
              i = 0;
              self = jQuery(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === undefined || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value) {
                return value == null ? "" : value + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (;i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = undefined;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (;cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = undefined;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event(), event, {
            type: type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function(orig, fix) {
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window.location;
      var nonce = {
        guid: Date.now()
      };
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
          xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val) {
                return {
                  name: elem.name,
                  value: val.replace(rCRLF, "\r\n")
                };
              });
            }
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return {
          state: "success",
          data: response
        };
      }
      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = undefined;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            getAllResponseHeaders: function() {
              return completed ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [ statusCode[code], map[code] ];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
            }
            if (completed) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed) {
              return;
            }
            completed = true;
            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer);
            }
            transport = undefined;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
              s.converters["text script"] = function() {};
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
            } else {
              deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = undefined;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
            }
            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, undefined, callback, "script");
        }
      });
      jQuery.each([ "get", "post" ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
          }
          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          converters: {
            "text script": function() {}
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                        binary: xhr.response
                      } : {
                        text: xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window[callbackName];
          window[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName);
            } else {
              window[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = undefined;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [ context.createElement(parsed[1]) ];
        }
        parsed = buildFragment([ data ], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = undefined;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery.ajax({
            url: url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
            });
          });
        }
        return this;
      };
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            if (typeof props.top === "number") {
              props.top += "px";
            }
            if (typeof props.left === "number") {
              props.left += "px";
            }
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = {
            top: 0,
            left: 0
          };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method, val) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }
            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
            } else {
              elem[method] = val;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each([ "top", "left" ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery.each({
        Height: "height",
        Width: "width"
      }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type, value) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
            }, type, chainable ? margin : undefined, chainable);
          };
        });
      });
      jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(_i, name) {
        jQuery.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return undefined;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
      };
      jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      };
      var _jQuery = window.jQuery, _$ = window.$;
      jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
      }
      return jQuery;
    });
  });
  var jquery_datetimepicker_full_min = createCommonjsModule(function(module, exports) {
    var DateFormatter;
    !function() {
      var D, s, r, a, n;
      D = function(e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase();
      }, s = function(e, t, a) {
        var n = a || "0", r = e.toString();
        return r.length < t ? s(n + r, t) : r;
      }, r = function(e) {
        var t, a;
        for (e = e || {}, t = 1; t < arguments.length; t++) if (a = arguments[t]) for (var n in a) a.hasOwnProperty(n) && ("object" == typeof a[n] ? r(e[n], a[n]) : e[n] = a[n]);
        return e;
      }, a = function(e, t) {
        for (var a = 0; a < t.length; a++) if (t[a].toLowerCase() === e.toLowerCase()) return a;
        return -1;
      }, n = {
        dateSettings: {
          days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          daysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
          months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
          monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
          meridiem: [ "AM", "PM" ],
          ordinal: function(e) {
            var t = e % 10, a = {
              1: "st",
              2: "nd",
              3: "rd"
            };
            return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th";
          }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
      }, (DateFormatter = function(e) {
        var t = this, a = r(n, e);
        t.dateSettings = a.dateSettings, t.separators = a.separators, t.validParts = a.validParts, 
        t.intParts = a.intParts, t.tzParts = a.tzParts, t.tzClip = a.tzClip;
      }).prototype = {
        constructor: DateFormatter,
        getMonth: function(e) {
          var t;
          return 0 === (t = a(e, this.dateSettings.monthsShort) + 1) && (t = a(e, this.dateSettings.months) + 1), 
          t;
        },
        parseDate: function(e, t) {
          var a, n, r, o, i, s, d, u, l, f, c = this, m = !1, h = !1, g = c.dateSettings, p = {
            date: null,
            year: null,
            month: null,
            day: null,
            hour: 0,
            min: 0,
            sec: 0
          };
          if (!e) return null;
          if (e instanceof Date) return e;
          if ("U" === t) return (r = parseInt(e)) ? new Date(1e3 * r) : e;
          switch (typeof e) {
           case "number":
            return new Date(e);

           case "string":
            break;

           default:
            return null;
          }
          if (!(a = t.match(c.validParts)) || 0 === a.length) throw new Error("Invalid date format definition.");
          for (n = e.replace(c.separators, "\0").split("\0"), r = 0; r < n.length; r++) switch (o = n[r], 
          i = parseInt(o), a[r]) {
           case "y":
           case "Y":
            if (!i) return null;
            l = o.length, p.year = 2 === l ? parseInt((i < 70 ? "20" : "19") + o) : i, m = !0;
            break;

           case "m":
           case "n":
           case "M":
           case "F":
            if (isNaN(i)) {
              if (!(0 < (s = c.getMonth(o)))) return null;
              p.month = s;
            } else {
              if (!(1 <= i && i <= 12)) return null;
              p.month = i;
            }
            m = !0;
            break;

           case "d":
           case "j":
            if (!(1 <= i && i <= 31)) return null;
            p.day = i, m = !0;
            break;

           case "g":
           case "h":
            if (f = n[d = -1 < a.indexOf("a") ? a.indexOf("a") : -1 < a.indexOf("A") ? a.indexOf("A") : -1], 
            -1 < d) u = D(f, g.meridiem[0]) ? 0 : D(f, g.meridiem[1]) ? 12 : -1, 1 <= i && i <= 12 && -1 < u ? p.hour = i + u - 1 : 0 <= i && i <= 23 && (p.hour = i); else {
              if (!(0 <= i && i <= 23)) return null;
              p.hour = i;
            }
            h = !0;
            break;

           case "G":
           case "H":
            if (!(0 <= i && i <= 23)) return null;
            p.hour = i, h = !0;
            break;

           case "i":
            if (!(0 <= i && i <= 59)) return null;
            p.min = i, h = !0;
            break;

           case "s":
            if (!(0 <= i && i <= 59)) return null;
            p.sec = i, h = !0;
          }
          if (!0 === m && p.year && p.month && p.day) p.date = new Date(p.year, p.month - 1, p.day, p.hour, p.min, p.sec, 0); else {
            if (!0 !== h) return null;
            p.date = new Date(0, 0, 0, p.hour, p.min, p.sec, 0);
          }
          return p.date;
        },
        guessDate: function(e, t) {
          if ("string" != typeof e) return e;
          var a, n, r, o, i, s, d = e.replace(this.separators, "\0").split("\0"), u = t.match(this.validParts), l = new Date(), f = 0;
          if (!/^[djmn]/g.test(u[0])) return e;
          for (r = 0; r < d.length; r++) {
            if (f = 2, i = d[r], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
            switch (r) {
             case 0:
              "m" === u[0] || "n" === u[0] ? l.setMonth(s - 1) : l.setDate(s);
              break;

             case 1:
              "m" === u[0] || "n" === u[0] ? l.setDate(s) : l.setMonth(s - 1);
              break;

             case 2:
              if (n = l.getFullYear(), f = (a = i.length) < 4 ? a : 4, !(n = parseInt(a < 4 ? n.toString().substr(0, 4 - a) + i : i.substr(0, 4)))) return null;
              l.setFullYear(n);
              break;

             case 3:
              l.setHours(s);
              break;

             case 4:
              l.setMinutes(s);
              break;

             case 5:
              l.setSeconds(s);
            }
            0 < (o = i.substr(f)).length && d.splice(r + 1, 0, o);
          }
          return l;
        },
        parseFormat: function(e, n) {
          var a, t = this, r = t.dateSettings, o = /\\?(.?)/gi, i = function(e, t) {
            return a[e] ? a[e]() : t;
          };
          return a = {
            d: function() {
              return s(a.j(), 2);
            },
            D: function() {
              return r.daysShort[a.w()];
            },
            j: function() {
              return n.getDate();
            },
            l: function() {
              return r.days[a.w()];
            },
            N: function() {
              return a.w() || 7;
            },
            w: function() {
              return n.getDay();
            },
            z: function() {
              var e = new Date(a.Y(), a.n() - 1, a.j()), t = new Date(a.Y(), 0, 1);
              return Math.round((e - t) / 864e5);
            },
            W: function() {
              var e = new Date(a.Y(), a.n() - 1, a.j() - a.N() + 3), t = new Date(e.getFullYear(), 0, 4);
              return s(1 + Math.round((e - t) / 864e5 / 7), 2);
            },
            F: function() {
              return r.months[n.getMonth()];
            },
            m: function() {
              return s(a.n(), 2);
            },
            M: function() {
              return r.monthsShort[n.getMonth()];
            },
            n: function() {
              return n.getMonth() + 1;
            },
            t: function() {
              return new Date(a.Y(), a.n(), 0).getDate();
            },
            L: function() {
              var e = a.Y();
              return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0;
            },
            o: function() {
              var e = a.n(), t = a.W();
              return a.Y() + (12 === e && t < 9 ? 1 : 1 === e && 9 < t ? -1 : 0);
            },
            Y: function() {
              return n.getFullYear();
            },
            y: function() {
              return a.Y().toString().slice(-2);
            },
            a: function() {
              return a.A().toLowerCase();
            },
            A: function() {
              var e = a.G() < 12 ? 0 : 1;
              return r.meridiem[e];
            },
            B: function() {
              var e = 3600 * n.getUTCHours(), t = 60 * n.getUTCMinutes(), a = n.getUTCSeconds();
              return s(Math.floor((e + t + a + 3600) / 86.4) % 1e3, 3);
            },
            g: function() {
              return a.G() % 12 || 12;
            },
            G: function() {
              return n.getHours();
            },
            h: function() {
              return s(a.g(), 2);
            },
            H: function() {
              return s(a.G(), 2);
            },
            i: function() {
              return s(n.getMinutes(), 2);
            },
            s: function() {
              return s(n.getSeconds(), 2);
            },
            u: function() {
              return s(1e3 * n.getMilliseconds(), 6);
            },
            e: function() {
              return /\((.*)\)/.exec(String(n))[1] || "Coordinated Universal Time";
            },
            I: function() {
              return new Date(a.Y(), 0) - Date.UTC(a.Y(), 0) != new Date(a.Y(), 6) - Date.UTC(a.Y(), 6) ? 1 : 0;
            },
            O: function() {
              var e = n.getTimezoneOffset(), t = Math.abs(e);
              return (0 < e ? "-" : "+") + s(100 * Math.floor(t / 60) + t % 60, 4);
            },
            P: function() {
              var e = a.O();
              return e.substr(0, 3) + ":" + e.substr(3, 2);
            },
            T: function() {
              return (String(n).match(t.tzParts) || [ "" ]).pop().replace(t.tzClip, "") || "UTC";
            },
            Z: function() {
              return 60 * -n.getTimezoneOffset();
            },
            c: function() {
              return "Y-m-d\\TH:i:sP".replace(o, i);
            },
            r: function() {
              return "D, d M Y H:i:s O".replace(o, i);
            },
            U: function() {
              return n.getTime() / 1e3 || 0;
            }
          }, i(e, e);
        },
        formatDate: function(e, t) {
          var a, n, r, o, i, s = "";
          if ("string" == typeof e && !(e = this.parseDate(e, t))) return null;
          if (e instanceof Date) {
            for (r = t.length, a = 0; a < r; a++) "S" !== (i = t.charAt(a)) && "\\" !== i && (0 < a && "\\" === t.charAt(a - 1) ? s += i : (o = this.parseFormat(i, e), 
            a !== r - 1 && this.intParts.test(i) && "S" === t.charAt(a + 1) && (n = parseInt(o) || 0, 
            o += this.dateSettings.ordinal(n)), s += o));
            return s;
          }
          return "";
        }
      };
    }();
    var datetimepickerFactory = function(L) {
      var s = {
        i18n: {
          ar: {
            months: [ "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول" ],
            dayOfWeekShort: [ "ن", "ث", "ع", "خ", "ج", "س", "ح" ],
            dayOfWeek: [ "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد" ]
          },
          ro: {
            months: [ "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie" ],
            dayOfWeekShort: [ "Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ" ],
            dayOfWeek: [ "Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă" ]
          },
          id: {
            months: [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
            dayOfWeekShort: [ "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab" ],
            dayOfWeek: [ "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu" ]
          },
          is: {
            months: [ "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember" ],
            dayOfWeekShort: [ "Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau" ],
            dayOfWeek: [ "Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur" ]
          },
          bg: {
            months: [ "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември" ],
            dayOfWeekShort: [ "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
            dayOfWeek: [ "Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота" ]
          },
          fa: {
            months: [ "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند" ],
            dayOfWeekShort: [ "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه" ],
            dayOfWeek: [ "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه" ]
          },
          ru: {
            months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            dayOfWeekShort: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
            dayOfWeek: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ]
          },
          uk: {
            months: [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ],
            dayOfWeekShort: [ "Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт" ],
            dayOfWeek: [ "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" ]
          },
          en: {
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            dayOfWeekShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayOfWeek: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
          },
          el: {
            months: [ "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος" ],
            dayOfWeekShort: [ "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ" ],
            dayOfWeek: [ "Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο" ]
          },
          de: {
            months: [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
            dayOfWeekShort: [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ],
            dayOfWeek: [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ]
          },
          nl: {
            months: [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december" ],
            dayOfWeekShort: [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
            dayOfWeek: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ]
          },
          tr: {
            months: [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
            dayOfWeekShort: [ "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts" ],
            dayOfWeek: [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ]
          },
          fr: {
            months: [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ],
            dayOfWeekShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
            dayOfWeek: [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ]
          },
          es: {
            months: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
            dayOfWeekShort: [ "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb" ],
            dayOfWeek: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ]
          },
          th: {
            months: [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม" ],
            dayOfWeekShort: [ "อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส." ],
            dayOfWeek: [ "อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์" ]
          },
          pl: {
            months: [ "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień" ],
            dayOfWeekShort: [ "nd", "pn", "wt", "śr", "cz", "pt", "sb" ],
            dayOfWeek: [ "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota" ]
          },
          pt: {
            months: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
            dayOfWeekShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab" ],
            dayOfWeek: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
          },
          ch: {
            months: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
            dayOfWeekShort: [ "日", "一", "二", "三", "四", "五", "六" ]
          },
          se: {
            months: [ "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December" ],
            dayOfWeekShort: [ "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör" ]
          },
          km: {
            months: [ "មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​" ],
            dayOfWeekShort: [ "អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍" ],
            dayOfWeek: [ "អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍" ]
          },
          kr: {
            months: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
            dayOfWeekShort: [ "일", "월", "화", "수", "목", "금", "토" ],
            dayOfWeek: [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ]
          },
          it: {
            months: [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ],
            dayOfWeekShort: [ "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab" ],
            dayOfWeek: [ "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato" ]
          },
          da: {
            months: [ "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December" ],
            dayOfWeekShort: [ "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør" ],
            dayOfWeek: [ "søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag" ]
          },
          no: {
            months: [ "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember" ],
            dayOfWeekShort: [ "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør" ],
            dayOfWeek: [ "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag" ]
          },
          ja: {
            months: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
            dayOfWeekShort: [ "日", "月", "火", "水", "木", "金", "土" ],
            dayOfWeek: [ "日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜" ]
          },
          vi: {
            months: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
            dayOfWeekShort: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
            dayOfWeek: [ "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy" ]
          },
          sl: {
            months: [ "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December" ],
            dayOfWeekShort: [ "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob" ],
            dayOfWeek: [ "Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota" ]
          },
          cs: {
            months: [ "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec" ],
            dayOfWeekShort: [ "Ne", "Po", "Út", "St", "Čt", "Pá", "So" ]
          },
          hu: {
            months: [ "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December" ],
            dayOfWeekShort: [ "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo" ],
            dayOfWeek: [ "vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat" ]
          },
          az: {
            months: [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr" ],
            dayOfWeekShort: [ "B", "Be", "Ça", "Ç", "Ca", "C", "Ş" ],
            dayOfWeek: [ "Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə" ]
          },
          bs: {
            months: [ "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar" ],
            dayOfWeekShort: [ "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub" ],
            dayOfWeek: [ "Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ]
          },
          ca: {
            months: [ "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre" ],
            dayOfWeekShort: [ "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds" ],
            dayOfWeek: [ "Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte" ]
          },
          "en-GB": {
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            dayOfWeekShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayOfWeek: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
          },
          et: {
            months: [ "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ],
            dayOfWeekShort: [ "P", "E", "T", "K", "N", "R", "L" ],
            dayOfWeek: [ "Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev" ]
          },
          eu: {
            months: [ "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua" ],
            dayOfWeekShort: [ "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La." ],
            dayOfWeek: [ "Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata" ]
          },
          fi: {
            months: [ "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu" ],
            dayOfWeekShort: [ "Su", "Ma", "Ti", "Ke", "To", "Pe", "La" ],
            dayOfWeek: [ "sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai" ]
          },
          gl: {
            months: [ "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec" ],
            dayOfWeekShort: [ "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab" ],
            dayOfWeek: [ "Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado" ]
          },
          hr: {
            months: [ "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac" ],
            dayOfWeekShort: [ "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub" ],
            dayOfWeek: [ "Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ]
          },
          ko: {
            months: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
            dayOfWeekShort: [ "일", "월", "화", "수", "목", "금", "토" ],
            dayOfWeek: [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ]
          },
          lt: {
            months: [ "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio" ],
            dayOfWeekShort: [ "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš" ],
            dayOfWeek: [ "Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis" ]
          },
          lv: {
            months: [ "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris" ],
            dayOfWeekShort: [ "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St" ],
            dayOfWeek: [ "Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena" ]
          },
          mk: {
            months: [ "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември" ],
            dayOfWeekShort: [ "нед", "пон", "вто", "сре", "чет", "пет", "саб" ],
            dayOfWeek: [ "Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота" ]
          },
          mn: {
            months: [ "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар" ],
            dayOfWeekShort: [ "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням" ],
            dayOfWeek: [ "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням" ]
          },
          "pt-BR": {
            months: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
            dayOfWeekShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
            dayOfWeek: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
          },
          sk: {
            months: [ "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December" ],
            dayOfWeekShort: [ "Ne", "Po", "Ut", "St", "Št", "Pi", "So" ],
            dayOfWeek: [ "Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota" ]
          },
          sq: {
            months: [ "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor" ],
            dayOfWeekShort: [ "Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu" ],
            dayOfWeek: [ "E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë" ]
          },
          "sr-YU": {
            months: [ "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar" ],
            dayOfWeekShort: [ "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub" ],
            dayOfWeek: [ "Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota" ]
          },
          sr: {
            months: [ "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар" ],
            dayOfWeekShort: [ "нед", "пон", "уто", "сре", "чет", "пет", "суб" ],
            dayOfWeek: [ "Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота" ]
          },
          sv: {
            months: [ "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December" ],
            dayOfWeekShort: [ "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör" ],
            dayOfWeek: [ "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag" ]
          },
          "zh-TW": {
            months: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
            dayOfWeekShort: [ "日", "一", "二", "三", "四", "五", "六" ],
            dayOfWeek: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ]
          },
          zh: {
            months: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
            dayOfWeekShort: [ "日", "一", "二", "三", "四", "五", "六" ],
            dayOfWeek: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ]
          },
          ug: {
            months: [ "1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي" ],
            dayOfWeek: [ "يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە" ]
          },
          he: {
            months: [ "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר" ],
            dayOfWeekShort: [ "א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת" ],
            dayOfWeek: [ "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון" ]
          },
          hy: {
            months: [ "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր" ],
            dayOfWeekShort: [ "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ" ],
            dayOfWeek: [ "Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ" ]
          },
          kg: {
            months: [ "Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы" ],
            dayOfWeekShort: [ "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише" ],
            dayOfWeek: [ "Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб" ]
          },
          rm: {
            months: [ "Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December" ],
            dayOfWeekShort: [ "Du", "Gli", "Ma", "Me", "Gie", "Ve", "So" ],
            dayOfWeek: [ "Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda" ]
          },
          ka: {
            months: [ "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი" ],
            dayOfWeekShort: [ "კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ" ],
            dayOfWeek: [ "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი" ]
          }
        },
        ownerDocument: document,
        contentWindow: window,
        value: "",
        rtl: !1,
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: !1,
        step: 60,
        monthChangeSpinner: !0,
        closeOnDateSelect: !1,
        closeOnTimeSelect: !0,
        closeOnWithoutClick: !0,
        closeOnInputClick: !0,
        openOnFocus: !0,
        timepicker: !0,
        datepicker: !0,
        weeks: !1,
        defaultTime: !1,
        defaultDate: !1,
        minDate: !1,
        maxDate: !1,
        minTime: !1,
        maxTime: !1,
        minDateTime: !1,
        maxDateTime: !1,
        allowTimes: [],
        opened: !1,
        initTime: !0,
        inline: !1,
        theme: "",
        touchMovedThreshold: 5,
        onSelectDate: function() {},
        onSelectTime: function() {},
        onChangeMonth: function() {},
        onGetWeekOfYear: function() {},
        onChangeYear: function() {},
        onChangeDateTime: function() {},
        onShow: function() {},
        onClose: function() {},
        onGenerate: function() {},
        withoutCopyright: !0,
        inverseButton: !1,
        hours12: !1,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        parentID: "body",
        timeHeightInTimePicker: 25,
        timepickerScrollbar: !0,
        todayButton: !0,
        prevButton: !0,
        nextButton: !0,
        defaultSelect: !0,
        scrollMonth: !0,
        scrollTime: !0,
        scrollInput: !0,
        lazyInit: !1,
        mask: !1,
        validateOnBlur: !0,
        allowBlank: !0,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: "",
        id: "",
        fixed: !1,
        roundTime: "round",
        className: "",
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,
        enterLikeTab: !0,
        showApplyButton: !1,
        insideParent: !1
      }, E = null, n = null, R = "en", a = {
        meridiem: [ "AM", "PM" ]
      }, r = function() {
        var e = s.i18n[R], t = {
          days: e.dayOfWeek,
          daysShort: e.dayOfWeekShort,
          months: e.months,
          monthsShort: L.map(e.months, function(e) {
            return e.substring(0, 3);
          })
        };
        "function" == typeof DateFormatter && (E = n = new DateFormatter({
          dateSettings: L.extend({}, a, t)
        }));
      }, o = {
        moment: {
          default_options: {
            format: "YYYY/MM/DD HH:mm",
            formatDate: "YYYY/MM/DD",
            formatTime: "HH:mm"
          },
          formatter: {
            parseDate: function(e, t) {
              if (i(t)) return n.parseDate(e, t);
              var a = moment(e, t);
              return !!a.isValid() && a.toDate();
            },
            formatDate: function(e, t) {
              return i(t) ? n.formatDate(e, t) : moment(e).format(t);
            },
            formatMask: function(e) {
              return e.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59");
            }
          }
        }
      };
      L.datetimepicker = {
        setLocale: function(e) {
          var t = s.i18n[e] ? e : "en";
          R !== t && (R = t, r());
        },
        setDateFormatter: function(e) {
          if ("string" == typeof e && o.hasOwnProperty(e)) {
            var t = o[e];
            L.extend(s, t.default_options), E = t.formatter;
          } else E = e;
        }
      };
      var t = {
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
      }, i = function(e) {
        return -1 !== Object.values(t).indexOf(e);
      };
      function m(e, t, a) {
        this.date = e, this.desc = t, this.style = a;
      }
      L.extend(L.datetimepicker, t), r(), window.getComputedStyle || (window.getComputedStyle = function(a) {
        return this.el = a, this.getPropertyValue = function(e) {
          var t = /(-([a-z]))/g;
          return "float" === e && (e = "styleFloat"), t.test(e) && (e = e.replace(t, function(e, t, a) {
            return a.toUpperCase();
          })), a.currentStyle[e] || null;
        }, this;
      }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var a, n;
        for (a = t || 0, n = this.length; a < n; a += 1) if (this[a] === e) return a;
        return -1;
      }), Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
      }, L.fn.xdsoftScroller = function(p, D) {
        return this.each(function() {
          var o, i, s, d, u, l = L(this), a = function(e) {
            var t, a = {
              x: 0,
              y: 0
            };
            return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], 
            a.x = t.clientX, a.y = t.clientY) : "mousedown" !== e.type && "mouseup" !== e.type && "mousemove" !== e.type && "mouseover" !== e.type && "mouseout" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type || (a.x = e.clientX, 
            a.y = e.clientY), a;
          }, f = 100, n = !1, r = 0, c = 0, m = 0, t = !1, h = 0, g = function() {};
          "hide" !== D ? (L(this).hasClass("xdsoft_scroller_box") || (o = l.children().eq(0), 
          i = l[0].clientHeight, s = o[0].offsetHeight, d = L('<div class="xdsoft_scrollbar"></div>'), 
          u = L('<div class="xdsoft_scroller"></div>'), d.append(u), l.addClass("xdsoft_scroller_box").append(d), 
          g = function(e) {
            var t = a(e).y - r + h;
            t < 0 && (t = 0), t + u[0].offsetHeight > m && (t = m - u[0].offsetHeight), l.trigger("scroll_element.xdsoft_scroller", [ f ? t / f : 0 ]);
          }, u.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(e) {
            i || l.trigger("resize_scroll.xdsoft_scroller", [ D ]), r = a(e).y, h = parseInt(u.css("margin-top"), 10), 
            m = d[0].offsetHeight, "mousedown" === e.type || "touchstart" === e.type ? (p.ownerDocument && L(p.ownerDocument.body).addClass("xdsoft_noselect"), 
            L([ p.ownerDocument.body, p.contentWindow ]).on("touchend mouseup.xdsoft_scroller", function e() {
              L([ p.ownerDocument.body, p.contentWindow ]).off("touchend mouseup.xdsoft_scroller", e).off("mousemove.xdsoft_scroller", g).removeClass("xdsoft_noselect");
            }), L(p.ownerDocument.body).on("mousemove.xdsoft_scroller", g)) : (t = !0, e.stopPropagation(), 
            e.preventDefault());
          }).on("touchmove", function(e) {
            t && (e.preventDefault(), g(e));
          }).on("touchend touchcancel", function() {
            t = !1, h = 0;
          }), l.on("scroll_element.xdsoft_scroller", function(e, t) {
            i || l.trigger("resize_scroll.xdsoft_scroller", [ t, !0 ]), t = 1 < t ? 1 : t < 0 || isNaN(t) ? 0 : t, 
            u.css("margin-top", f * t), setTimeout(function() {
              o.css("marginTop", -parseInt((o[0].offsetHeight - i) * t, 10));
            }, 10);
          }).on("resize_scroll.xdsoft_scroller", function(e, t, a) {
            var n, r;
            i = l[0].clientHeight, s = o[0].offsetHeight, r = (n = i / s) * d[0].offsetHeight, 
            1 < n ? u.hide() : (u.show(), u.css("height", parseInt(10 < r ? r : 10, 10)), f = d[0].offsetHeight - u[0].offsetHeight, 
            !0 !== a && l.trigger("scroll_element.xdsoft_scroller", [ t || Math.abs(parseInt(o.css("marginTop"), 10)) / (s - i) ]));
          }), l.on("mousewheel", function(e) {
            var t = Math.abs(parseInt(o.css("marginTop"), 10));
            return (t -= 20 * e.deltaY) < 0 && (t = 0), l.trigger("scroll_element.xdsoft_scroller", [ t / (s - i) ]), 
            e.stopPropagation(), !1;
          }), l.on("touchstart", function(e) {
            n = a(e), c = Math.abs(parseInt(o.css("marginTop"), 10));
          }), l.on("touchmove", function(e) {
            if (n) {
              e.preventDefault();
              var t = a(e);
              l.trigger("scroll_element.xdsoft_scroller", [ (c - (t.y - n.y)) / (s - i) ]);
            }
          }), l.on("touchend touchcancel", function() {
            n = !1, c = 0;
          })), l.trigger("resize_scroll.xdsoft_scroller", [ D ])) : l.find(".xdsoft_scrollbar").hide();
        });
      }, L.fn.datetimepicker = function(H, a) {
        var n, r, o = this, p = 17, D = 13, y = 27, v = 37, b = 38, k = 39, x = 40, T = 9, S = 116, M = 65, w = 67, j = 86, J = 90, z = 89, I = !1, N = L.isPlainObject(H) || !H ? L.extend(!0, {}, s, H) : L.extend(!0, {}, s), i = 0;
        return n = function(O) {
          var t, n, a, r, W, h, _ = L('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'), e = L('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'), g = L('<div class="xdsoft_datepicker active"></div>'), F = L('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'), C = L('<div class="xdsoft_calendar"></div>'), o = L('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'), u = o.find(".xdsoft_time_box").eq(0), P = L('<div class="xdsoft_time_variant"></div>'), i = L('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'), Y = L('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'), A = L('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'), s = !1, d = 0;
          N.id && _.attr("id", N.id), N.style && _.attr("style", N.style), N.weeks && _.addClass("xdsoft_showweeks"), 
          N.rtl && _.addClass("xdsoft_rtl"), _.addClass("xdsoft_" + N.theme), _.addClass(N.className), 
          F.find(".xdsoft_month span").after(Y), F.find(".xdsoft_year span").after(A), F.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(e) {
            var t, a, n = L(this).find(".xdsoft_select").eq(0), r = 0, o = 0, i = n.is(":visible");
            for (F.find(".xdsoft_select").hide(), W.currentTime && (r = W.currentTime[L(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), 
            n[i ? "hide" : "show"](), t = n.find("div.xdsoft_option"), a = 0; a < t.length && t.eq(a).data("value") !== r; a += 1) o += t[0].offsetHeight;
            return n.xdsoftScroller(N, o / (n.children()[0].offsetHeight - n[0].clientHeight)), 
            e.stopPropagation(), !1;
          });
          var l = function(e) {
            var t = e.originalEvent, a = t.touches ? t.touches[0] : t;
            this.touchStartPosition = this.touchStartPosition || a;
            var n = Math.abs(this.touchStartPosition.clientX - a.clientX), r = Math.abs(this.touchStartPosition.clientY - a.clientY);
            Math.sqrt(n * n + r * r) > N.touchMovedThreshold && (this.touchMoved = !0);
          };
          function f() {
            var e, t = !1;
            return N.startDate ? t = W.strToDate(N.startDate) : (t = N.value || (O && O.val && O.val() ? O.val() : "")) ? (t = W.strToDateTime(t), 
            N.yearOffset && (t = new Date(t.getFullYear() - N.yearOffset, t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()))) : N.defaultDate && (t = W.strToDateTime(N.defaultDate), 
            N.defaultTime && (e = W.strtotime(N.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), 
            t && W.isValidDate(t) ? _.data("changed", !0) : t = "", t || 0;
          }
          function c(m) {
            var h = function(e, t) {
              var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
              return new RegExp(a).test(t);
            }, g = function(e, t) {
              if (!(e = "string" == typeof e || e instanceof String ? m.ownerDocument.getElementById(e) : e)) return !1;
              if (e.createTextRange) {
                var a = e.createTextRange();
                return a.collapse(!0), a.moveEnd("character", t), a.moveStart("character", t), a.select(), 
                !0;
              }
              return !!e.setSelectionRange && (e.setSelectionRange(t, t), !0);
            };
            m.mask && O.off("keydown.xdsoft"), !0 === m.mask && (E.formatMask ? m.mask = E.formatMask(m.format) : m.mask = m.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), 
            "string" === L.type(m.mask) && (h(m.mask, O.val()) || (O.val(m.mask.replace(/[0-9]/g, "_")), 
            g(O[0], 0)), O.on("paste.xdsoft", function(e) {
              var t = (e.clipboardData || e.originalEvent.clipboardData || window.clipboardData).getData("text"), a = this.value, n = this.selectionStart;
              return a = a.substr(0, n) + t + a.substr(n + t.length), n += t.length, h(m.mask, a) ? (this.value = a, 
              g(this, n)) : "" === L.trim(a) ? this.value = m.mask.replace(/[0-9]/g, "_") : O.trigger("error_input.xdsoft"), 
              e.preventDefault(), !1;
            }), O.on("keydown.xdsoft", function(e) {
              var t, a = this.value, n = e.which, r = this.selectionStart, o = this.selectionEnd, i = r !== o;
              if (48 <= n && n <= 57 || 96 <= n && n <= 105 || 8 === n || 46 === n) {
                for (t = 8 === n || 46 === n ? "_" : String.fromCharCode(96 <= n && n <= 105 ? n - 48 : n), 
                8 === n && r && !i && (r -= 1); ;) {
                  var s = m.mask.substr(r, 1), d = r < m.mask.length, u = 0 < r;
                  if (!(/[^0-9_]/.test(s) && d && u)) break;
                  r += 8 !== n || i ? 1 : -1;
                }
                if (e.metaKey && (i = !(r = 0)), i) {
                  var l = o - r, f = m.mask.replace(/[0-9]/g, "_"), c = f.substr(r, l).substr(1);
                  a = a.substr(0, r) + (t + c) + a.substr(r + l);
                } else {
                  a = a.substr(0, r) + t + a.substr(r + 1);
                }
                if ("" === L.trim(a)) a = f; else if (r === m.mask.length) return e.preventDefault(), 
                !1;
                for (r += 8 === n ? 0 : 1; /[^0-9_]/.test(m.mask.substr(r, 1)) && r < m.mask.length && 0 < r; ) r += 8 === n ? 0 : 1;
                h(m.mask, a) ? (this.value = a, g(this, r)) : "" === L.trim(a) ? this.value = m.mask.replace(/[0-9]/g, "_") : O.trigger("error_input.xdsoft");
              } else if (-1 !== [ M, w, j, J, z ].indexOf(n) && I || -1 !== [ y, b, x, v, k, S, p, T, D ].indexOf(n)) return !0;
              return e.preventDefault(), !1;
            }));
          }
          F.find(".xdsoft_select").xdsoftScroller(N).on("touchstart mousedown.xdsoft", function(e) {
            var t = e.originalEvent;
            this.touchMoved = !1, this.touchStartPosition = t.touches ? t.touches[0] : t, e.stopPropagation(), 
            e.preventDefault();
          }).on("touchmove", ".xdsoft_option", l).on("touchend mousedown.xdsoft", ".xdsoft_option", function() {
            if (!this.touchMoved) {
              void 0 !== W.currentTime && null !== W.currentTime || (W.currentTime = W.now());
              var e = W.currentTime.getFullYear();
              W && W.currentTime && W.currentTime[L(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](L(this).data("value")), 
              L(this).parent().parent().hide(), _.trigger("xchange.xdsoft"), N.onChangeMonth && L.isFunction(N.onChangeMonth) && N.onChangeMonth.call(_, W.currentTime, _.data("input")), 
              e !== W.currentTime.getFullYear() && L.isFunction(N.onChangeYear) && N.onChangeYear.call(_, W.currentTime, _.data("input"));
            }
          }), _.getValue = function() {
            return W.getCurrentTime();
          }, _.setOptions = function(e) {
            var l = {};
            N = L.extend(!0, {}, N, e), e.allowTimes && L.isArray(e.allowTimes) && e.allowTimes.length && (N.allowTimes = L.extend(!0, [], e.allowTimes)), 
            e.weekends && L.isArray(e.weekends) && e.weekends.length && (N.weekends = L.extend(!0, [], e.weekends)), 
            e.allowDates && L.isArray(e.allowDates) && e.allowDates.length && (N.allowDates = L.extend(!0, [], e.allowDates)), 
            e.allowDateRe && "[object String]" === Object.prototype.toString.call(e.allowDateRe) && (N.allowDateRe = new RegExp(e.allowDateRe)), 
            e.highlightedDates && L.isArray(e.highlightedDates) && e.highlightedDates.length && (L.each(e.highlightedDates, function(e, t) {
              var a, n = L.map(t.split(","), L.trim), r = new m(E.parseDate(n[0], N.formatDate), n[1], n[2]), o = E.formatDate(r.date, N.formatDate);
              void 0 !== l[o] ? (a = l[o].desc) && a.length && r.desc && r.desc.length && (l[o].desc = a + "\n" + r.desc) : l[o] = r;
            }), N.highlightedDates = L.extend(!0, [], l)), e.highlightedPeriods && L.isArray(e.highlightedPeriods) && e.highlightedPeriods.length && (l = L.extend(!0, [], N.highlightedDates), 
            L.each(e.highlightedPeriods, function(e, t) {
              var a, n, r, o, i, s, d;
              if (L.isArray(t)) a = t[0], n = t[1], r = t[2], d = t[3]; else {
                var u = L.map(t.split(","), L.trim);
                a = E.parseDate(u[0], N.formatDate), n = E.parseDate(u[1], N.formatDate), r = u[2], 
                d = u[3];
              }
              for (;a <= n; ) o = new m(a, r, d), i = E.formatDate(a, N.formatDate), a.setDate(a.getDate() + 1), 
              void 0 !== l[i] ? (s = l[i].desc) && s.length && o.desc && o.desc.length && (l[i].desc = s + "\n" + o.desc) : l[i] = o;
            }), N.highlightedDates = L.extend(!0, [], l)), e.disabledDates && L.isArray(e.disabledDates) && e.disabledDates.length && (N.disabledDates = L.extend(!0, [], e.disabledDates)), 
            e.disabledWeekDays && L.isArray(e.disabledWeekDays) && e.disabledWeekDays.length && (N.disabledWeekDays = L.extend(!0, [], e.disabledWeekDays)), 
            !N.open && !N.opened || N.inline || O.trigger("open.xdsoft"), N.inline && (s = !0, 
            _.addClass("xdsoft_inline"), O.after(_).hide()), N.inverseButton && (N.next = "xdsoft_prev", 
            N.prev = "xdsoft_next"), N.datepicker ? g.addClass("active") : g.removeClass("active"), 
            N.timepicker ? o.addClass("active") : o.removeClass("active"), N.value && (W.setCurrentTime(N.value), 
            O && O.val && O.val(W.str)), isNaN(N.dayOfWeekStart) ? N.dayOfWeekStart = 0 : N.dayOfWeekStart = parseInt(N.dayOfWeekStart, 10) % 7, 
            N.timepickerScrollbar || u.xdsoftScroller(N, "hide"), N.minDate && /^[\+\-](.*)$/.test(N.minDate) && (N.minDate = E.formatDate(W.strToDateTime(N.minDate), N.formatDate)), 
            N.maxDate && /^[\+\-](.*)$/.test(N.maxDate) && (N.maxDate = E.formatDate(W.strToDateTime(N.maxDate), N.formatDate)), 
            N.minDateTime && /^\+(.*)$/.test(N.minDateTime) && (N.minDateTime = W.strToDateTime(N.minDateTime).dateFormat(N.formatDate)), 
            N.maxDateTime && /^\+(.*)$/.test(N.maxDateTime) && (N.maxDateTime = W.strToDateTime(N.maxDateTime).dateFormat(N.formatDate)), 
            i.toggle(N.showApplyButton), F.find(".xdsoft_today_button").css("visibility", N.todayButton ? "visible" : "hidden"), 
            F.find("." + N.prev).css("visibility", N.prevButton ? "visible" : "hidden"), F.find("." + N.next).css("visibility", N.nextButton ? "visible" : "hidden"), 
            c(N), N.validateOnBlur && O.off("blur.xdsoft").on("blur.xdsoft", function() {
              if (N.allowBlank && (!L.trim(L(this).val()).length || "string" == typeof N.mask && L.trim(L(this).val()) === N.mask.replace(/[0-9]/g, "_"))) L(this).val(null), 
              _.data("xdsoft_datetime").empty(); else {
                var e = E.parseDate(L(this).val(), N.format);
                if (e) L(this).val(E.formatDate(e, N.format)); else {
                  var t = +[ L(this).val()[0], L(this).val()[1] ].join(""), a = +[ L(this).val()[2], L(this).val()[3] ].join("");
                  !N.datepicker && N.timepicker && 0 <= t && t < 24 && 0 <= a && a < 60 ? L(this).val([ t, a ].map(function(e) {
                    return 9 < e ? e : "0" + e;
                  }).join(":")) : L(this).val(E.formatDate(W.now(), N.format));
                }
                _.data("xdsoft_datetime").setCurrentTime(L(this).val());
              }
              _.trigger("changedatetime.xdsoft"), _.trigger("close.xdsoft");
            }), N.dayOfWeekStartPrev = 0 === N.dayOfWeekStart ? 6 : N.dayOfWeekStart - 1, _.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
          }, _.data("options", N).on("touchstart mousedown.xdsoft", function(e) {
            return e.stopPropagation(), e.preventDefault(), A.hide(), Y.hide(), !1;
          }), u.append(P), u.xdsoftScroller(N), _.on("afterOpen.xdsoft", function() {
            u.xdsoftScroller(N);
          }), _.append(g).append(o), !0 !== N.withoutCopyright && _.append(e), g.append(F).append(C).append(i), 
          N.insideParent ? L(O).parent().append(_) : L(N.parentID).append(_), W = new function() {
            var r = this;
            r.now = function(e) {
              var t, a, n = new Date();
              return !e && N.defaultDate && (t = r.strToDateTime(N.defaultDate), n.setFullYear(t.getFullYear()), 
              n.setMonth(t.getMonth()), n.setDate(t.getDate())), n.setFullYear(n.getFullYear()), 
              !e && N.defaultTime && (a = r.strtotime(N.defaultTime), n.setHours(a.getHours()), 
              n.setMinutes(a.getMinutes()), n.setSeconds(a.getSeconds()), n.setMilliseconds(a.getMilliseconds())), 
              n;
            }, r.isValidDate = function(e) {
              return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime());
            }, r.setCurrentTime = function(e, t) {
              "string" == typeof e ? r.currentTime = r.strToDateTime(e) : r.isValidDate(e) ? r.currentTime = e : e || t || !N.allowBlank || N.inline ? r.currentTime = r.now() : r.currentTime = null, 
              _.trigger("xchange.xdsoft");
            }, r.empty = function() {
              r.currentTime = null;
            }, r.getCurrentTime = function() {
              return r.currentTime;
            }, r.nextMonth = function() {
              void 0 !== r.currentTime && null !== r.currentTime || (r.currentTime = r.now());
              var e, t = r.currentTime.getMonth() + 1;
              return 12 === t && (r.currentTime.setFullYear(r.currentTime.getFullYear() + 1), 
              t = 0), e = r.currentTime.getFullYear(), r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(), t + 1, 0).getDate(), r.currentTime.getDate())), 
              r.currentTime.setMonth(t), N.onChangeMonth && L.isFunction(N.onChangeMonth) && N.onChangeMonth.call(_, W.currentTime, _.data("input")), 
              e !== r.currentTime.getFullYear() && L.isFunction(N.onChangeYear) && N.onChangeYear.call(_, W.currentTime, _.data("input")), 
              _.trigger("xchange.xdsoft"), t;
            }, r.prevMonth = function() {
              void 0 !== r.currentTime && null !== r.currentTime || (r.currentTime = r.now());
              var e = r.currentTime.getMonth() - 1;
              return -1 === e && (r.currentTime.setFullYear(r.currentTime.getFullYear() - 1), 
              e = 11), r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(), e + 1, 0).getDate(), r.currentTime.getDate())), 
              r.currentTime.setMonth(e), N.onChangeMonth && L.isFunction(N.onChangeMonth) && N.onChangeMonth.call(_, W.currentTime, _.data("input")), 
              _.trigger("xchange.xdsoft"), e;
            }, r.getWeekOfYear = function(e) {
              if (N.onGetWeekOfYear && L.isFunction(N.onGetWeekOfYear)) {
                var t = N.onGetWeekOfYear.call(_, e);
                if (void 0 !== t) return t;
              }
              var a = new Date(e.getFullYear(), 0, 1);
              return 4 !== a.getDay() && a.setMonth(0, 1 + (4 - a.getDay() + 7) % 7), Math.ceil(((e - a) / 864e5 + a.getDay() + 1) / 7);
            }, r.strToDateTime = function(e) {
              var t, a, n = [];
              return e && e instanceof Date && r.isValidDate(e) ? e : ((n = /^([+-]{1})(.*)$/.exec(e)) && (n[2] = E.parseDate(n[2], N.formatDate)), 
              a = n && n[2] ? (t = n[2].getTime() - 6e4 * n[2].getTimezoneOffset(), new Date(r.now(!0).getTime() + parseInt(n[1] + "1", 10) * t)) : e ? E.parseDate(e, N.format) : r.now(), 
              r.isValidDate(a) || (a = r.now()), a);
            }, r.strToDate = function(e) {
              if (e && e instanceof Date && r.isValidDate(e)) return e;
              var t = e ? E.parseDate(e, N.formatDate) : r.now(!0);
              return r.isValidDate(t) || (t = r.now(!0)), t;
            }, r.strtotime = function(e) {
              if (e && e instanceof Date && r.isValidDate(e)) return e;
              var t = e ? E.parseDate(e, N.formatTime) : r.now(!0);
              return r.isValidDate(t) || (t = r.now(!0)), t;
            }, r.str = function() {
              var e = N.format;
              return N.yearOffset && (e = (e = e.replace("Y", r.currentTime.getFullYear() + N.yearOffset)).replace("y", String(r.currentTime.getFullYear() + N.yearOffset).substring(2, 4))), 
              E.formatDate(r.currentTime, e);
            }, r.currentTime = this.now();
          }(), i.on("touchend click", function(e) {
            e.preventDefault(), _.data("changed", !0), W.setCurrentTime(f()), O.val(W.str()), 
            _.trigger("close.xdsoft");
          }), F.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
            _.data("changed", !0), W.setCurrentTime(0, !0), _.trigger("afterOpen.xdsoft");
          }).on("dblclick.xdsoft", function() {
            var e, t, a = W.getCurrentTime();
            a = new Date(a.getFullYear(), a.getMonth(), a.getDate()), e = W.strToDate(N.minDate), 
            a < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) || (t = W.strToDate(N.maxDate), 
            (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) < a || (O.val(W.str()), 
            O.trigger("change"), _.trigger("close.xdsoft")));
          }), F.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
            var a = L(this), n = 0, r = !1;
            !function e(t) {
              a.hasClass(N.next) ? W.nextMonth() : a.hasClass(N.prev) && W.prevMonth(), N.monthChangeSpinner && (r || (n = setTimeout(e, t || 100)));
            }(500), L([ N.ownerDocument.body, N.contentWindow ]).on("touchend mouseup.xdsoft", function e() {
              clearTimeout(n), r = !0, L([ N.ownerDocument.body, N.contentWindow ]).off("touchend mouseup.xdsoft", e);
            });
          }), o.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
            var o = L(this), i = 0, s = !1, d = 110;
            !function e(t) {
              var a = u[0].clientHeight, n = P[0].offsetHeight, r = Math.abs(parseInt(P.css("marginTop"), 10));
              o.hasClass(N.next) && n - a - N.timeHeightInTimePicker >= r ? P.css("marginTop", "-" + (r + N.timeHeightInTimePicker) + "px") : o.hasClass(N.prev) && 0 <= r - N.timeHeightInTimePicker && P.css("marginTop", "-" + (r - N.timeHeightInTimePicker) + "px"), 
              u.trigger("scroll_element.xdsoft_scroller", [ Math.abs(parseInt(P[0].style.marginTop, 10) / (n - a)) ]), 
              d = 10 < d ? 10 : d - 10, s || (i = setTimeout(e, t || d));
            }(500), L([ N.ownerDocument.body, N.contentWindow ]).on("touchend mouseup.xdsoft", function e() {
              clearTimeout(i), s = !0, L([ N.ownerDocument.body, N.contentWindow ]).off("touchend mouseup.xdsoft", e);
            });
          }), t = 0, _.on("xchange.xdsoft", function(e) {
            clearTimeout(t), t = setTimeout(function() {
              void 0 !== W.currentTime && null !== W.currentTime || (W.currentTime = W.now());
              for (var e, t, a, n, r, o, i, s, d, u, l = "", f = new Date(W.currentTime.getFullYear(), W.currentTime.getMonth(), 1, 12, 0, 0), c = 0, m = W.now(), h = !1, g = !1, p = !1, D = !1, y = [], v = !0, b = ""; f.getDay() !== N.dayOfWeekStart; ) f.setDate(f.getDate() - 1);
              for (l += "<table><thead><tr>", N.weeks && (l += "<th></th>"), e = 0; e < 7; e += 1) l += "<th>" + N.i18n[R].dayOfWeekShort[(e + N.dayOfWeekStart) % 7] + "</th>";
              for (l += "</tr></thead>", l += "<tbody>", !1 !== N.maxDate && (h = W.strToDate(N.maxDate), 
              h = new Date(h.getFullYear(), h.getMonth(), h.getDate(), 23, 59, 59, 999)), !1 !== N.minDate && (g = W.strToDate(N.minDate), 
              g = new Date(g.getFullYear(), g.getMonth(), g.getDate())), !1 !== N.minDateTime && (p = W.strToDate(N.minDateTime), 
              p = new Date(p.getFullYear(), p.getMonth(), p.getDate(), p.getHours(), p.getMinutes(), p.getSeconds())), 
              !1 !== N.maxDateTime && (D = W.strToDate(N.maxDateTime), D = new Date(D.getFullYear(), D.getMonth(), D.getDate(), D.getHours(), D.getMinutes(), D.getSeconds())), 
              !1 !== D && (u = 31 * (12 * D.getFullYear() + D.getMonth()) + D.getDate()); c < W.currentTime.countDaysInMonth() || f.getDay() !== N.dayOfWeekStart || W.currentTime.getMonth() === f.getMonth(); ) {
                y = [], c += 1, a = f.getDay(), n = f.getDate(), r = f.getFullYear(), M = f.getMonth(), 
                o = W.getWeekOfYear(f), d = "", y.push("xdsoft_date"), i = N.beforeShowDay && L.isFunction(N.beforeShowDay.call) ? N.beforeShowDay.call(_, f) : null, 
                N.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(N.allowDateRe) && (N.allowDateRe.test(E.formatDate(f, N.formatDate)) || y.push("xdsoft_disabled")), 
                N.allowDates && 0 < N.allowDates.length && -1 === N.allowDates.indexOf(E.formatDate(f, N.formatDate)) && y.push("xdsoft_disabled");
                var k = 31 * (12 * f.getFullYear() + f.getMonth()) + f.getDate();
                (!1 !== h && h < f || !1 !== p && f < p || !1 !== g && f < g || !1 !== D && u < k || i && !1 === i[0]) && y.push("xdsoft_disabled"), 
                -1 !== N.disabledDates.indexOf(E.formatDate(f, N.formatDate)) && y.push("xdsoft_disabled"), 
                -1 !== N.disabledWeekDays.indexOf(a) && y.push("xdsoft_disabled"), O.is("[disabled]") && y.push("xdsoft_disabled"), 
                i && "" !== i[1] && y.push(i[1]), W.currentTime.getMonth() !== M && y.push("xdsoft_other_month"), 
                (N.defaultSelect || _.data("changed")) && E.formatDate(W.currentTime, N.formatDate) === E.formatDate(f, N.formatDate) && y.push("xdsoft_current"), 
                E.formatDate(m, N.formatDate) === E.formatDate(f, N.formatDate) && y.push("xdsoft_today"), 
                0 !== f.getDay() && 6 !== f.getDay() && -1 === N.weekends.indexOf(E.formatDate(f, N.formatDate)) || y.push("xdsoft_weekend"), 
                void 0 !== N.highlightedDates[E.formatDate(f, N.formatDate)] && (t = N.highlightedDates[E.formatDate(f, N.formatDate)], 
                y.push(void 0 === t.style ? "xdsoft_highlighted_default" : t.style), d = void 0 === t.desc ? "" : t.desc), 
                N.beforeShowDay && L.isFunction(N.beforeShowDay) && y.push(N.beforeShowDay(f)), 
                v && (l += "<tr>", v = !1, N.weeks && (l += "<th>" + o + "</th>")), l += '<td data-date="' + n + '" data-month="' + M + '" data-year="' + r + '" class="xdsoft_date xdsoft_day_of_week' + f.getDay() + " " + y.join(" ") + '" title="' + d + '"><div>' + n + "</div></td>", 
                f.getDay() === N.dayOfWeekStartPrev && (l += "</tr>", v = !0), f.setDate(n + 1);
              }
              l += "</tbody></table>", C.html(l), F.find(".xdsoft_label span").eq(0).text(N.i18n[R].months[W.currentTime.getMonth()]), 
              F.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear() + N.yearOffset), 
              M = b = "";
              var x = 0;
              if (!1 !== N.minTime) {
                var T = W.strtotime(N.minTime);
                x = 60 * T.getHours() + T.getMinutes();
              }
              var S = 1440;
              if (!1 !== N.maxTime) {
                T = W.strtotime(N.maxTime);
                S = 60 * T.getHours() + T.getMinutes();
              }
              if (!1 !== N.minDateTime) {
                T = W.strToDateTime(N.minDateTime);
                if (E.formatDate(W.currentTime, N.formatDate) === E.formatDate(T, N.formatDate)) {
                  var M = 60 * T.getHours() + T.getMinutes();
                  x < M && (x = M);
                }
              }
              if (!1 !== N.maxDateTime) {
                T = W.strToDateTime(N.maxDateTime);
                if (E.formatDate(W.currentTime, N.formatDate) === E.formatDate(T, N.formatDate)) (M = 60 * T.getHours() + T.getMinutes()) < S && (S = M);
              }
              if (s = function(e, t) {
                var a, n = W.now(), r = N.allowTimes && L.isArray(N.allowTimes) && N.allowTimes.length;
                n.setHours(e), e = parseInt(n.getHours(), 10), n.setMinutes(t), t = parseInt(n.getMinutes(), 10), 
                y = [];
                var o = 60 * e + t;
                (O.is("[disabled]") || S <= o || o < x) && y.push("xdsoft_disabled"), (a = new Date(W.currentTime)).setHours(parseInt(W.currentTime.getHours(), 10)), 
                r || a.setMinutes(Math[N.roundTime](W.currentTime.getMinutes() / N.step) * N.step), 
                (N.initTime || N.defaultSelect || _.data("changed")) && a.getHours() === parseInt(e, 10) && (!r && 59 < N.step || a.getMinutes() === parseInt(t, 10)) && (N.defaultSelect || _.data("changed") ? y.push("xdsoft_current") : N.initTime && y.push("xdsoft_init_time")), 
                parseInt(m.getHours(), 10) === parseInt(e, 10) && parseInt(m.getMinutes(), 10) === parseInt(t, 10) && y.push("xdsoft_today"), 
                b += '<div class="xdsoft_time ' + y.join(" ") + '" data-hour="' + e + '" data-minute="' + t + '">' + E.formatDate(n, N.formatTime) + "</div>";
              }, N.allowTimes && L.isArray(N.allowTimes) && N.allowTimes.length) for (c = 0; c < N.allowTimes.length; c += 1) s(W.strtotime(N.allowTimes[c]).getHours(), M = W.strtotime(N.allowTimes[c]).getMinutes()); else for (e = c = 0; c < (N.hours12 ? 12 : 24); c += 1) for (e = 0; e < 60; e += N.step) {
                var w = 60 * c + e;
                w < x || S <= w || s((c < 10 ? "0" : "") + c, M = (e < 10 ? "0" : "") + e);
              }
              for (P.html(b), H = "", c = parseInt(N.yearStart, 10); c <= parseInt(N.yearEnd, 10); c += 1) H += '<div class="xdsoft_option ' + (W.currentTime.getFullYear() === c ? "xdsoft_current" : "") + '" data-value="' + c + '">' + (c + N.yearOffset) + "</div>";
              for (A.children().eq(0).html(H), c = parseInt(N.monthStart, 10), H = ""; c <= parseInt(N.monthEnd, 10); c += 1) H += '<div class="xdsoft_option ' + (W.currentTime.getMonth() === c ? "xdsoft_current" : "") + '" data-value="' + c + '">' + N.i18n[R].months[c] + "</div>";
              Y.children().eq(0).html(H), L(_).trigger("generate.xdsoft");
            }, 10), e.stopPropagation();
          }).on("afterOpen.xdsoft", function() {
            var e, t, a, n;
            N.timepicker && (P.find(".xdsoft_current").length ? e = ".xdsoft_current" : P.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), 
            e ? (t = u[0].clientHeight, (a = P[0].offsetHeight) - t < (n = P.find(e).index() * N.timeHeightInTimePicker + 1) && (n = a - t), 
            u.trigger("scroll_element.xdsoft_scroller", [ parseInt(n, 10) / (a - t) ])) : u.trigger("scroll_element.xdsoft_scroller", [ 0 ]));
          }), n = 0, C.on("touchend click.xdsoft", "td", function(e) {
            e.stopPropagation(), n += 1;
            var t = L(this), a = W.currentTime;
            if (null == a && (W.currentTime = W.now(), a = W.currentTime), t.hasClass("xdsoft_disabled")) return !1;
            a.setDate(1), a.setFullYear(t.data("year")), a.setMonth(t.data("month")), a.setDate(t.data("date")), 
            _.trigger("select.xdsoft", [ a ]), O.val(W.str()), N.onSelectDate && L.isFunction(N.onSelectDate) && N.onSelectDate.call(_, W.currentTime, _.data("input"), e), 
            _.data("changed", !0), _.trigger("xchange.xdsoft"), _.trigger("changedatetime.xdsoft"), 
            (1 < n || !0 === N.closeOnDateSelect || !1 === N.closeOnDateSelect && !N.timepicker) && !N.inline && _.trigger("close.xdsoft"), 
            setTimeout(function() {
              n = 0;
            }, 200);
          }), P.on("touchstart", "div", function(e) {
            this.touchMoved = !1;
          }).on("touchmove", "div", l).on("touchend click.xdsoft", "div", function(e) {
            if (!this.touchMoved) {
              e.stopPropagation();
              var t = L(this), a = W.currentTime;
              if (null == a && (W.currentTime = W.now(), a = W.currentTime), t.hasClass("xdsoft_disabled")) return !1;
              a.setHours(t.data("hour")), a.setMinutes(t.data("minute")), _.trigger("select.xdsoft", [ a ]), 
              _.data("input").val(W.str()), N.onSelectTime && L.isFunction(N.onSelectTime) && N.onSelectTime.call(_, W.currentTime, _.data("input"), e), 
              _.data("changed", !0), _.trigger("xchange.xdsoft"), _.trigger("changedatetime.xdsoft"), 
              !0 !== N.inline && !0 === N.closeOnTimeSelect && _.trigger("close.xdsoft");
            }
          }), g.on("mousewheel.xdsoft", function(e) {
            return !N.scrollMonth || (e.deltaY < 0 ? W.nextMonth() : W.prevMonth(), !1);
          }), O.on("mousewheel.xdsoft", function(e) {
            return !N.scrollInput || (!N.datepicker && N.timepicker ? (0 <= (a = P.find(".xdsoft_current").length ? P.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY && a + e.deltaY < P.children().length && (a += e.deltaY), 
            P.children().eq(a).length && P.children().eq(a).trigger("mousedown"), !1) : N.datepicker && !N.timepicker ? (g.trigger(e, [ e.deltaY, e.deltaX, e.deltaY ]), 
            O.val && O.val(W.str()), _.trigger("changedatetime.xdsoft"), !1) : void 0);
          }), _.on("changedatetime.xdsoft", function(e) {
            if (N.onChangeDateTime && L.isFunction(N.onChangeDateTime)) {
              var t = _.data("input");
              N.onChangeDateTime.call(_, W.currentTime, t, e), delete N.value, t.trigger("change");
            }
          }).on("generate.xdsoft", function() {
            N.onGenerate && L.isFunction(N.onGenerate) && N.onGenerate.call(_, W.currentTime, _.data("input")), 
            s && (_.trigger("afterOpen.xdsoft"), s = !1);
          }).on("click.xdsoft", function(e) {
            e.stopPropagation();
          }), a = 0, h = function(e, t) {
            do {
              if (!(e = e.parentNode) || !1 === t(e)) break;
            } while ("HTML" !== e.nodeName);
          }, r = function() {
            var e, t, a, n, r, o, i, s, d, u, l, f, c;
            if (e = (s = _.data("input")).offset(), t = s[0], u = "top", a = e.top + t.offsetHeight - 1, 
            n = e.left, r = "absolute", d = L(N.contentWindow).width(), f = L(N.contentWindow).height(), 
            c = L(N.contentWindow).scrollTop(), N.ownerDocument.documentElement.clientWidth - e.left < g.parent().outerWidth(!0)) {
              var m = g.parent().outerWidth(!0) - t.offsetWidth;
              n -= m;
            }
            "rtl" === s.parent().css("direction") && (n -= _.outerWidth() - s.outerWidth()), 
            N.fixed ? (a -= c, n -= L(N.contentWindow).scrollLeft(), r = "fixed") : (i = !1, 
            h(t, function(e) {
              return null !== e && ("fixed" === N.contentWindow.getComputedStyle(e).getPropertyValue("position") ? !(i = !0) : void 0);
            }), i && !N.insideParent ? (r = "fixed", a + _.outerHeight() > f + c ? (u = "bottom", 
            a = f + c - e.top) : a -= c) : a + _[0].offsetHeight > f + c && (a = e.top - _[0].offsetHeight + 1), 
            a < 0 && (a = 0), n + t.offsetWidth > d && (n = d - t.offsetWidth)), o = _[0], h(o, function(e) {
              if ("relative" === N.contentWindow.getComputedStyle(e).getPropertyValue("position") && d >= e.offsetWidth) return n -= (d - e.offsetWidth) / 2, 
              !1;
            }), l = {
              position: r,
              left: N.insideParent ? t.offsetLeft : n,
              top: "",
              bottom: ""
            }, N.insideParent ? l[u] = t.offsetTop + t.offsetHeight : l[u] = a, _.css(l);
          }, _.on("open.xdsoft", function(e) {
            var t = !0;
            N.onShow && L.isFunction(N.onShow) && (t = N.onShow.call(_, W.currentTime, _.data("input"), e)), 
            !1 !== t && (_.show(), r(), L(N.contentWindow).off("resize.xdsoft", r).on("resize.xdsoft", r), 
            N.closeOnWithoutClick && L([ N.ownerDocument.body, N.contentWindow ]).on("touchstart mousedown.xdsoft", function e() {
              _.trigger("close.xdsoft"), L([ N.ownerDocument.body, N.contentWindow ]).off("touchstart mousedown.xdsoft", e);
            }));
          }).on("close.xdsoft", function(e) {
            var t = !0;
            F.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), N.onClose && L.isFunction(N.onClose) && (t = N.onClose.call(_, W.currentTime, _.data("input"), e)), 
            !1 === t || N.opened || N.inline || _.hide(), e.stopPropagation();
          }).on("toggle.xdsoft", function() {
            _.is(":visible") ? _.trigger("close.xdsoft") : _.trigger("open.xdsoft");
          }).data("input", O), d = 0, _.data("xdsoft_datetime", W), _.setOptions(N), W.setCurrentTime(f()), 
          O.data("xdsoft_datetimepicker", _).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
            O.is(":disabled") || O.data("xdsoft_datetimepicker").is(":visible") && N.closeOnInputClick || N.openOnFocus && (clearTimeout(d), 
            d = setTimeout(function() {
              O.is(":disabled") || (s = !0, W.setCurrentTime(f(), !0), N.mask && c(N), _.trigger("open.xdsoft"));
            }, 100));
          }).on("keydown.xdsoft", function(e) {
            var t, a = e.which;
            return -1 !== [ D ].indexOf(a) && N.enterLikeTab ? (t = L("input:visible,textarea:visible,button:visible,a:visible"), 
            _.trigger("close.xdsoft"), t.eq(t.index(this) + 1).focus(), !1) : -1 !== [ T ].indexOf(a) ? (_.trigger("close.xdsoft"), 
            !0) : void 0;
          }).on("blur.xdsoft", function() {
            _.trigger("close.xdsoft");
          });
        }, r = function(e) {
          var t = e.data("xdsoft_datetimepicker");
          t && (t.data("xdsoft_datetime", null), t.remove(), e.data("xdsoft_datetimepicker", null).off(".xdsoft"), 
          L(N.contentWindow).off("resize.xdsoft"), L([ N.contentWindow, N.ownerDocument.body ]).off("mousedown.xdsoft touchstart"), 
          e.unmousewheel && e.unmousewheel());
        }, L(N.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").off("keydown.xdsoftcmd keyup.xdsoftcmd").on("keydown.xdsoftctrl", function(e) {
          e.keyCode === p && (I = !0);
        }).on("keyup.xdsoftctrl", function(e) {
          e.keyCode === p && (I = !1);
        }).on("keydown.xdsoftcmd", function(e) {
          91 === e.keyCode && !0;
        }).on("keyup.xdsoftcmd", function(e) {
          91 === e.keyCode && !1;
        }), this.each(function() {
          var t, e = L(this).data("xdsoft_datetimepicker");
          if (e) {
            if ("string" === L.type(H)) switch (H) {
             case "show":
              L(this).select().focus(), e.trigger("open.xdsoft");
              break;

             case "hide":
              e.trigger("close.xdsoft");
              break;

             case "toggle":
              e.trigger("toggle.xdsoft");
              break;

             case "destroy":
              r(L(this));
              break;

             case "reset":
              this.value = this.defaultValue, this.value && e.data("xdsoft_datetime").isValidDate(E.parseDate(this.value, N.format)) || e.data("changed", !1), 
              e.data("xdsoft_datetime").setCurrentTime(this.value);
              break;

             case "validate":
              e.data("input").trigger("blur.xdsoft");
              break;

             default:
              e[H] && L.isFunction(e[H]) && (o = e[H](a));
            } else e.setOptions(H);
            return 0;
          }
          "string" !== L.type(H) && (!N.lazyInit || N.open || N.inline ? n(L(this)) : (t = L(this)).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function e() {
            t.is(":disabled") || t.data("xdsoft_datetimepicker") || (clearTimeout(i), i = setTimeout(function() {
              t.data("xdsoft_datetimepicker") || n(t), t.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", e).trigger("open.xdsoft");
            }, 100));
          }));
        }), o;
      }, L.fn.datetimepicker.defaults = s;
    };
    !function(e) {
      module.exports = e(jquery);
    }(datetimepickerFactory), function(e) {
      module.exports = e;
    }(function(c) {
      var m, h, e = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], t = "onwheel" in document || 9 <= document.documentMode ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], g = Array.prototype.slice;
      if (c.event.fixHooks) for (var a = e.length; a; ) c.event.fixHooks[e[--a]] = c.event.mouseHooks;
      var p = c.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
          if (this.addEventListener) for (var e = t.length; e; ) this.addEventListener(t[--e], n, !1); else this.onmousewheel = n;
          c.data(this, "mousewheel-line-height", p.getLineHeight(this)), c.data(this, "mousewheel-page-height", p.getPageHeight(this));
        },
        teardown: function() {
          if (this.removeEventListener) for (var e = t.length; e; ) this.removeEventListener(t[--e], n, !1); else this.onmousewheel = null;
          c.removeData(this, "mousewheel-line-height"), c.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(e) {
          var t = c(e), a = t["offsetParent" in c.fn ? "offsetParent" : "parent"]();
          return a.length || (a = c("body")), parseInt(a.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(e) {
          return c(e).height();
        },
        settings: {
          adjustOldDeltas: !0,
          normalizeOffset: !0
        }
      };
      function n(e) {
        var t, a = e || window.event, n = g.call(arguments, 1), r = 0, o = 0, i = 0, s = 0, d = 0;
        if ((e = c.event.fix(a)).type = "mousewheel", "detail" in a && (i = -1 * a.detail), 
        "wheelDelta" in a && (i = a.wheelDelta), "wheelDeltaY" in a && (i = a.wheelDeltaY), 
        "wheelDeltaX" in a && (o = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (o = -1 * i, 
        i = 0), r = 0 === i ? o : i, "deltaY" in a && (r = i = -1 * a.deltaY), "deltaX" in a && (o = a.deltaX, 
        0 === i && (r = -1 * o)), 0 !== i || 0 !== o) {
          if (1 === a.deltaMode) {
            var u = c.data(this, "mousewheel-line-height");
            r *= u, i *= u, o *= u;
          } else if (2 === a.deltaMode) {
            var l = c.data(this, "mousewheel-page-height");
            r *= l, i *= l, o *= l;
          }
          if (t = Math.max(Math.abs(i), Math.abs(o)), (!h || t < h) && y(a, h = t) && (h /= 40), 
          y(a, t) && (r /= 40, o /= 40, i /= 40), r = Math[1 <= r ? "floor" : "ceil"](r / h), 
          o = Math[1 <= o ? "floor" : "ceil"](o / h), i = Math[1 <= i ? "floor" : "ceil"](i / h), 
          p.settings.normalizeOffset && this.getBoundingClientRect) {
            var f = this.getBoundingClientRect();
            s = e.clientX - f.left, d = e.clientY - f.top;
          }
          return e.deltaX = o, e.deltaY = i, e.deltaFactor = h, e.offsetX = s, e.offsetY = d, 
          e.deltaMode = 0, n.unshift(e, r, o, i), m && clearTimeout(m), m = setTimeout(D, 200), 
          (c.event.dispatch || c.event.handle).apply(this, n);
        }
      }
      function D() {
        h = null;
      }
      function y(e, t) {
        return p.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
      }
      c.fn.extend({
        mousewheel: function(e) {
          return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        unmousewheel: function(e) {
          return this.unbind("mousewheel", e);
        }
      });
    });
  });
  (function($) {
    $.paletteColorPicker = function(el, options) {
      var ns = "palette-color-picker", $el = $(el), plugin = this, current_value = $el.val(), target = $el.attr("name"), $button = $("<div>").addClass(ns + "-button").attr("data-target", target), $bubble = $("<div>").addClass(ns + "-bubble"), defaults = {
        custom_class: null,
        colors: null,
        position: "upside",
        insert: "before",
        clear_btn: "first",
        timeout: 2e3,
        set_background: false,
        close_all_but_this: false
      }, click_handler = "ontouchstart" in document.documentElement ? "touchstart click" : "click";
      plugin.init = function() {
        plugin.settings = $.extend({}, defaults, options);
        var val = $el.attr("value");
        if (typeof val === typeof undefined || val === false) {
          val = "";
          $el.attr("value", val);
        }
        $el.attr("data-initialvalue", $el.attr("value"));
        if (plugin.settings.colors === null) {
          plugin.settings.colors = $el.data("palette");
        }
        if (typeof plugin.settings.colors[0] === "string") {
          plugin.settings.colors = $.map(plugin.settings.colors, function(el, idx) {
            var b = {};
            b[el] = el;
            return b;
          });
        }
        plugin.settings.insert = plugin.settings.insert.charAt(0).toUpperCase() + plugin.settings.insert.slice(1);
        if (plugin.settings.custom_class) {
          $bubble.addClass(plugin.settings.custom_class);
        }
        $.each(plugin.settings.colors, function(idx, obj) {
          var key = Object.keys(obj)[0], col = obj[key], $sw = $("<span>").addClass("swatch").attr({
            title: key,
            "data-color": col,
            "data-name": key
          }).css("background-color", col);
          if (key === current_value) {
            $sw.addClass("active");
            $button.css("background", col);
          }
          $sw.appendTo($bubble);
        });
        if (plugin.settings.clear_btn !== null) {
          var $clear_btn = $("<span>").addClass("swatch clear").attr("title", "Clear selection");
          if (plugin.settings.clear_btn === "last") {
            $clear_btn.addClass("last").appendTo($bubble);
          } else {
            $clear_btn.prependTo($bubble);
          }
        }
        plugin.destroy = function() {
          $button.remove();
          $.removeData($el[0]);
        };
        plugin.clear = function() {
          $bubble.find(".active").removeClass("active");
          $button.removeAttr("style");
          $el.val("");
        };
        plugin.reset = function() {
          if ($el.attr("data-initialvalue") === "") {
            plugin.clear();
          } else {
            var iv = $el.attr("data-initialvalue");
            $bubble.find('[data-name="' + iv + '"]').trigger("click");
          }
        };
        plugin.reload = function() {
          var newVal = $el.val();
          if (newVal === "" || typeof newVal === typeof undefined || newVal === false) {
            plugin.reset();
          } else {
            if ($bubble.find('[data-name="' + newVal + '"]').length) {
              $bubble.find('[data-name="' + newVal + '"]').trigger("click");
            } else {
              plugin.reset();
            }
          }
        };
        $button.append($bubble).on(click_handler, function(e) {
          e.preventDefault();
          e.stopPropagation();
          var $b = $(this);
          if (!$(e.target).hasClass(ns + "-bubble")) {
            if (typeof plugin.settings.onbeforeshow_callback === "function") {
              plugin.settings.onbeforeshow_callback(this);
            }
            $b.toggleClass("active");
            var $current_bubble = $b.find("." + ns + "-bubble");
            if (plugin.settings.close_all_but_this) {
              $("." + ns + "-bubble").not($current_bubble).fadeOut();
            }
            $current_bubble.fadeToggle();
            if ($b.hasClass("active")) {
              clearTimeout(plugin.timer);
              plugin.timer = setTimeout(function() {
                $b.trigger("pcp.fadeout");
              }, plugin.settings.timeout);
            }
          }
        }).on("pcp.fadeout", function() {
          $(this).removeClass("active").find("." + ns + "-bubble").fadeOut();
        }).on("mouseenter", "." + ns + "-bubble", function() {
          clearTimeout(plugin.timer);
        }).on("mouseleave", "." + ns + "-bubble", function() {
          plugin.timer = setTimeout(function() {
            $button.trigger("pcp.fadeout");
          }, plugin.settings.timeout);
        }).on(click_handler, "." + ns + "-bubble span.swatch", function(e) {
          e.preventDefault();
          e.stopPropagation();
          var col = $(this).attr("data-color"), name = $(this).attr("data-name"), $button = $("." + ns + '-button[data-target="' + $(this).closest("." + ns + "-button").attr("data-target") + '"]'), $bubble = $(this).closest("." + ns + "-bubble");
          $bubble.find(".active").removeClass("active");
          if ($(e.target).is(".clear")) {
            $button.removeAttr("style");
            col = "";
          } else {
            $(this).addClass("active");
            $button.css("background", col);
          }
          if (typeof plugin.settings.onchange_callback === "function") {
            plugin.settings.onchange_callback(col);
          }
          if (plugin.settings.set_background === false) {
            $('[name="' + $button.attr("data-target") + '"]').val(name);
          } else {
            $('[name="' + $button.attr("data-target") + '"]').css({
              "background-color": col
            });
          }
        })["insert" + plugin.settings.insert]($el);
        if (plugin.settings.position === "downside" || $el.offset().top + 20 < $bubble.outerHeight()) {
          $bubble.addClass("downside");
        }
      };
      $("body").on(click_handler, function(event) {
        if (!$(event.target).hasClass(ns + "-button")) {
          $($button).removeClass("active").find("." + ns + "-bubble").fadeOut();
        }
      });
      plugin.init();
    };
    $.fn.paletteColorPicker = function(options) {
      return this.each(function() {
        if (typeof $(this).data("paletteColorPickerPlugin") === "undefined") {
          $(this).data("paletteColorPickerPlugin", new $.paletteColorPicker(this, options));
        }
      });
    };
  })(jQuery);
  var initializer = function() {
    window.ActiveadminAddons = {
      config: {
        defaultSelect: $("body").data("default-select")
      }
    };
  };
  $(initializer);
  $(document).on("turbolinks:load", initializer);
  var initializer$1 = function() {
    configureSelect2(document);
    $(document).on("has_many_add:after", function(event, container) {
      configureSelect2(container);
    });
    function configureSelect2(container) {
      if (window.ActiveadminAddons.config.defaultSelect == "select2") {
        $("select:not(.default-select)", container).each(function(i, el) {
          setupSelect2(el);
        });
      }
      $("select.select2", container).each(function(i, el) {
        setupSelect2(el);
      });
      function setupSelect2(select) {
        var selectConfig = {
          placeholder: "",
          width: "80%",
          allowClear: true
        };
        function isFilter(path) {
          return $(select).closest(path).length > 0;
        }
        if (isFilter(".select_and_search")) {
          selectConfig.width = "resolve";
          selectConfig.allowClear = false;
        } else if (isFilter(".filter_select")) {
          selectConfig.width = "resolve";
        }
        $(select).select2(selectConfig);
        $(select).on("select2:unselecting", function() {
          $(this).data("unselecting", true);
        }).on("select2:open", function() {
          if ($(this).data("unselecting")) {
            $(this).select2("close").removeData("unselecting");
          }
        });
      }
    }
  };
  $(initializer$1);
  $(document).on("turbolinks:load", initializer$1);
  var initializer$2 = function() {
    setupSearchSelect(document);
    $(document).on("has_many_add:after", function(event, container) {
      setupSearchSelect(container);
    });
    function setupSearchSelect(container) {
      $(".search-select-input, .search-select-filter-input, ajax-filter-input", container).each(function(i, el) {
        var element = $(el);
        var url = element.data("url");
        var fields = element.data("fields");
        var predicate = element.data("predicate");
        var displayName = element.data("display-name");
        var width = element.data("width");
        var responseRoot = element.data("response-root");
        var minimumInputLength = element.data("minimum-input-length");
        var order = element.data("order");
        var selectOptions = {
          width: width,
          minimumInputLength: minimumInputLength,
          placeholder: "",
          allowClear: true,
          ajax: {
            url: url,
            dataType: "json",
            delay: 250,
            cache: true,
            data: function(params) {
              var textQuery = {
                m: "or"
              };
              fields.forEach(function(field) {
                if (field == "id") {
                  textQuery[field + "_eq"] = params.term;
                } else {
                  textQuery[field + "_" + predicate] = params.term;
                }
              });
              var query = {
                order: order,
                q: {
                  groupings: [ textQuery ],
                  combinator: "and"
                }
              };
              return query;
            },
            processResults: function(data) {
              if (data.constructor == Object) {
                data = data[responseRoot];
              }
              return {
                results: jQuery.map(data, function(resource) {
                  if (!resource[displayName]) {
                    resource[displayName] = "No display name for id #" + resource.id.toString();
                  }
                  return {
                    id: resource.id,
                    text: resource[displayName].toString()
                  };
                })
              };
            }
          }
        };
        $(el).select2(selectOptions);
      });
    }
  };
  $(initializer$2);
  $(document).on("turbolinks:load", initializer$2);
  $.fn.select2.amd.define("select2/data/nestedCustomAdapter", [ "select2/data/array", "select2/utils" ], function(ArrayData, Utils) {
    function CustomData($element, options) {
      CustomData.__super__.constructor.call(this, $element, options);
    }
    Utils.Extend(CustomData, ArrayData);
    CustomData.prototype.query = function(params, callback) {
      var data = {
        results: []
      };
      var element = this.$element;
      var collection = element.data("collection");
      var parent = element.data("parent");
      var parentId = element.data("parent-id");
      collection.forEach(function(record) {
        var regex = new RegExp(params.term, "i");
        var matched = !!record.text.match(regex);
        if ((!parent || record[parent] == parentId) && matched) {
          data.results.push(record);
        }
      });
      callback(data);
    };
    CustomData.prototype.current = function(callback) {
      var currentOption = null;
      var element = this.$element;
      var selectedOption = element.data("selected");
      var collection = element.data("collection");
      var data = [];
      $.each(collection, function(index, option) {
        if (!!selectedOption && option.id == selectedOption.id) {
          currentOption = option;
          element.data("selected", null);
          return;
        }
        if (element.val() == option.id) {
          currentOption = option;
          return;
        }
      });
      if (currentOption) {
        data.push(currentOption);
      }
      callback(data);
    };
    return CustomData;
  });
  var initializer$3 = function() {
    configureSelect2(document);
    $(document).on("has_many_add:after", function(event, container) {
      configureSelect2(container);
    });
    function configureSelect2(container) {
      var INVALID_PARENT_ID = -1;
      $(".nested-level-input", container).each(function(i, el) {
        var element = $(el);
        var url = element.data("url");
        var fields = element.data("fields");
        var predicate = element.data("predicate");
        var filters = element.data("filters");
        var displayName = element.data("display-name");
        var parent = element.data("parent");
        var width = element.data("width");
        var model = element.data("model");
        var responseRoot = element.data("response-root");
        var collection = element.data("collection");
        var minimumInputLength = element.data("minimum-input-length");
        var order = element.data("order");
        var parentId = element.data("parent-id");
        var selectInstance;
        var select2Config = {
          width: width,
          minimumInputLength: minimumInputLength,
          placeholder: "",
          allowClear: true
        };
        if (collection) {
          select2Config.dataAdapter = $.fn.select2.amd.require("select2/data/nestedCustomAdapter");
        } else {
          var ajaxConfig = {
            url: url,
            dataType: "json",
            delay: 250,
            cache: true,
            data: function(params) {
              var textQuery = {
                m: "or"
              };
              fields.forEach(function(field) {
                if (field == "id") {
                  textQuery[field + "_eq"] = params.term;
                } else {
                  textQuery[field + "_" + predicate] = params.term;
                }
              });
              var query = {
                order: order,
                q: {
                  groupings: [ textQuery ],
                  combinator: "and"
                }
              };
              if (!!parent) {
                query.q[parent + "_eq"] = parentId;
              }
              Object.assign(query.q, filters);
              return query;
            },
            processResults: function(data) {
              if (data.constructor == Object) {
                data = data[responseRoot];
              }
              return {
                results: jQuery.map(data, function(resource) {
                  if (!resource[displayName]) {
                    resource[displayName] = "No display name for id #" + resource.id.toString();
                  }
                  return {
                    id: resource.id,
                    text: resource[displayName].toString()
                  };
                })
              };
            }
          };
          select2Config.ajax = ajaxConfig;
        }
        selectInstance = element.select2(select2Config);
        function setParentValue(e) {
          selectInstance.val(null).trigger("select2:select").trigger("change");
          parentId = e.params && e.params.data.id ? e.params.data.id : INVALID_PARENT_ID;
          element.data("parent-id", parentId);
        }
        if (!!parent) {
          var parentSelectorId = "#" + model + "_" + parent;
          if (!$(parentSelectorId).length) {
            parentSelectorId = $(container).find("*[id*=" + parent + "]")[0];
          }
          var parentSelector = $(parentSelectorId)[0];
          $(parentSelector).on("select2:select", setParentValue);
          $(parentSelector).on("select2:unselect", setParentValue);
        }
      });
    }
  };
  $(initializer$3);
  $(document).on("turbolinks:load", initializer$3);
  var initializer$4 = function() {
    setupTags(document);
    $(document).on("has_many_add:after", function(event, container) {
      setupTags(container);
    });
    function setupTags(container) {
      $(".tags-input", container).each(function(i, el) {
        var model = $(el).data("model");
        var method = $(el).data("method");
        var prefix = model + "_" + method;
        var isRelation = !!$(el).data("relation");
        var collection = $(el).data("collection");
        var width = $(el).data("width");
        var selectOptions = {
          width: width,
          multiple: true,
          tags: true,
          data: collection
        };
        if (!!isRelation) {
          selectOptions.createTag = function() {
            return undefined;
          };
        }
        $(el).on("select2:select", onItemAdded);
        $(el).on("select2:unselect", onItemRemoved);
        $(el).select2(selectOptions);
        function getSelectedItems() {
          var choices = $(el).parent("li.input").find(".select2-selection__choice");
          return $.map(choices, function(item) {
            return $(item).attr("title");
          });
        }
        function fillHiddenInput() {
          var hiddenInput = $("#" + prefix);
          hiddenInput.val(getSelectedItems().join());
        }
        function onItemRemoved(event) {
          if (isRelation) {
            var itemId = "[id='" + prefix + "_" + event.params.data.id + "']";
            $(itemId).remove();
          } else {
            fillHiddenInput();
          }
        }
        function onItemAdded(event) {
          if (isRelation) {
            var value = event.params.data.id;
            var selectedItemsContainer = $("[id='" + prefix + "_selected_values']");
            var itemName = model + "[" + method + "][]";
            var itemId = prefix + "_" + value;
            $("<input>").attr({
              id: itemId,
              name: itemName,
              type: "hidden",
              value: value
            }).appendTo(selectedItemsContainer);
          } else {
            fillHiddenInput();
          }
        }
      });
    }
  };
  $(initializer$4);
  $(document).on("turbolinks:load", initializer$4);
  var initializer$5 = function() {
    setupSelectedList(document);
    $(document).on("has_many_add:after", function(event, container) {
      setupSelectedList(container);
    });
    function setupSelectedList(container) {
      $(".selected-list-container").click(function(event) {
        var item = $(event.target);
        if (item.hasClass("selected-item")) {
          item.remove();
        }
      });
      $(".selected-list-input", container).each(function(i, el) {
        var element = $(el);
        var url = element.data("url");
        var fields = element.data("fields");
        var predicate = element.data("predicate");
        var displayName = element.data("display-name");
        var method = element.data("method");
        var model = element.data("model");
        var prefix = model + "_" + method;
        var responseRoot = element.data("response-root");
        var minimumInputLength = element.data("minimum-input-length");
        var order = element.data("order");
        var selectOptions = {
          minimumInputLength: minimumInputLength,
          allowClear: true,
          ajax: {
            url: url,
            dataType: "json",
            delay: 250,
            cache: true,
            data: function(params) {
              var textQuery = {
                m: "or"
              };
              fields.forEach(function(field) {
                textQuery[field + "_" + predicate] = params.term;
              });
              var query = {
                order: order,
                q: {
                  groupings: [ textQuery ],
                  combinator: "and"
                }
              };
              return query;
            },
            processResults: function(data) {
              if (data.constructor == Object) {
                data = data[responseRoot];
              }
              return {
                results: jQuery.map(data, function(resource) {
                  return {
                    id: resource.id,
                    text: resource[displayName].toString()
                  };
                })
              };
            }
          }
        };
        $(el).on("select2:select", onItemSelected);
        $(el).on("select2:close", onSelectClosed);
        $(el).select2(selectOptions);
        function onItemSelected(event) {
          var data = event.params.data;
          var selectedItemsContainer = $("[id='" + prefix + "_selected_values']");
          var itemName = model + "[" + method + "][]";
          var itemId = prefix + "_" + data.id;
          if ($("#" + itemId).length > 0) {
            return;
          }
          var item = $("<div>" + data.text + "</div>").attr({
            class: "selected-item",
            id: itemId
          });
          var hiddenInput = $("<input>").attr({
            name: itemName,
            type: "hidden",
            value: data.id
          });
          item.appendTo(selectedItemsContainer);
          hiddenInput.appendTo(item);
        }
        function onSelectClosed() {
          $(el).val(null).trigger("change");
        }
      });
    }
  };
  $(initializer$5);
  $(document).on("turbolinks:load", initializer$5);
  var initializer$6 = function() {
    setupDateTimePicker(document);
    $(document).on("submit", "form", function() {
      var $form = $(this);
      $form.find("input.date-time-picker-input").each(function() {
        var $dateTimeInput = $(this);
        if ($dateTimeInput.val().trim()) {
          var newValue = new Date($dateTimeInput.val()).toString();
          $form.append('<input type="hidden" name="' + $dateTimeInput.attr("name") + '" value="' + newValue + '">');
        }
      });
    });
    $(document).on("has_many_add:after", ".has_many_container", function(event, fieldset) {
      setupDateTimePicker(fieldset);
    });
    function setupDateTimePicker(container) {
      var defaults = {
        formatDate: "y-m-d",
        format: "Y-m-d H:i",
        allowBlank: true,
        defaultSelect: false,
        validateOnBlur: false,
        scrollInput: false
      };
      var entries = $(container).find("input.date-time-picker-input");
      entries.each(function() {
        var $entry = $(this);
        var options = $entry.data("pickerOptions");
        var mixedOptions = $.extend(defaults, options);
        $entry.datetimepicker(mixedOptions);
        if ($entry.val()) {
          $entry.datetimepicker("setValue", new Date($entry.val()));
        }
        $entry.datetimepicker("validate");
      });
    }
  };
  $(initializer$6);
  $(document).on("turbolinks:load", initializer$6);
  var initializer$7 = function() {
    setupColorPicker();
    $(document).on("has_many_add:after", setupColorPicker);
    function setupColorPicker() {
      $(".color-picker-input").each(function(i, el) {
        $(el).paletteColorPicker({
          clear_btn: "last"
        });
      });
    }
  };
  $(initializer$7);
  $(document).on("turbolinks:load", initializer$7);
  var initializer$8 = function() {
    $(".toggle-bool-switch").click(function(e) {
      var boolSwitch = $(e.target);
      var objectId = boolSwitch.data("object_id");
      var model = boolSwitch.data("model");
      var field = boolSwitch.data("field");
      var url = boolSwitch.data("url");
      var value = boolSwitch.data("value");
      var successMessage = boolSwitch.data("success_message");
      var data = {
        id: objectId
      };
      data[model] = {};
      data[model][field] = !value;
      $.ajax({
        url: url,
        data: data,
        dataType: "json",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
        error: function() {
          var errorMsg = "Error: Update Unsuccessful";
          alert(errorMsg);
        },
        success: function() {
          boolSwitch.data("value", !value);
          boolSwitch.toggleClass("on");
          if (!boolSwitch.hasClass("notify-success")) return;
          $(function() {
            setTimeout(alert(successMessage), 500);
          });
        },
        type: "PATCH"
      });
    });
  };
  $(initializer$8);
  $(document).on("turbolinks:load", initializer$8);
  var initializer$9 = function() {
    configureInteractiveSelect(document);
    $(document).on("has_many_add:after", function(event, container) {
      configureInteractiveSelect(container);
    });
    function configureInteractiveSelect(container) {
      $(".interactive-tag-select select", container).each(function(i, el) {
        setupSelect2(el);
      });
      function setupSelect2(select) {
        var selectConfig = {
          placeholder: "",
          allowClear: false,
          width: "125px"
        };
        $(select).select2(selectConfig);
        $(select).on("select2:unselecting", function() {
          $(this).data("unselecting", true);
        }).on("select2:open", function() {
          if ($(this).data("unselecting")) {
            $(this).select2("close").removeData("unselecting");
          }
        });
      }
    }
    $(".interactive-tag").click(function(e) {
      var tag = $(e.target).parent();
      var model = tag.data("model");
      var objectId = tag.data("object_id");
      var field = tag.data("field");
      var selectTag = $("." + model + "-" + field + "-" + objectId + "-select");
      selectTag.removeClass("select-container-hidden");
      tag.addClass("interactive-tag-hidden");
      selectTag.find("select").select2("open");
    });
    $(".interactive-tag-select").on("select2:close", function(e) {
      var selectTag = $(e.target).parent();
      var model = selectTag.data("model");
      var objectId = selectTag.data("object_id");
      var field = selectTag.data("field");
      var tagContainer = $("." + model + "-" + field + "-" + objectId + "-tag");
      var statusTag = tagContainer.find(".status_tag");
      var newValue = e.target.value;
      var newText = e.target.selectedOptions[0].text;
      var oldValue = selectTag.data("value");
      if (newValue === oldValue) {
        selectTag.addClass("select-container-hidden");
        tagContainer.removeClass("interactive-tag-hidden");
      } else {
        var url = tagContainer.data("url");
        var data = {
          id: objectId
        };
        data[model] = {};
        data[model][field] = newValue;
        $.ajax({
          url: url,
          data: data,
          dataType: "json",
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
          },
          error: function() {
            var errorMsg = "Error: Update Unsuccessful";
            console.log(errorMsg);
          },
          success: function() {
            statusTag.text(newText);
            statusTag.removeClass(oldValue);
            statusTag.addClass(newValue);
            tagContainer.data("value", newValue);
            selectTag.data("value", newValue);
          },
          complete: function() {
            selectTag.addClass("select-container-hidden");
            tagContainer.removeClass("interactive-tag-hidden");
          },
          type: "PATCH"
        });
      }
    });
  };
  $(initializer$9);
  $(document).on("turbolinks:load", initializer$9);
});
