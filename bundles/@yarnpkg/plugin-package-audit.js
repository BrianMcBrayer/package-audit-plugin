/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-package-audit",
factory: function (require) {
var plugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };

  // pnp:/mnt/c/code/package-audit-plugin/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });
  var import_url = __toModule(__require("url"));
  var _report;
  var YarnPluginPackageAudit = class {
    constructor() {
      __privateAdd(this, _report, void 0);
    }
    async reduceDependency(_dependency, _project, _locator, _initialDependency, extra) {
      __privateSet(this, _report, extra.resolveOptions.report);
    }
    async wrapNetworkRequest(executor, {target}) {
      const url = typeof target === `string` ? new import_url.URL(target) : target;
      __privateGet(this, _report).reportInfo(null, `YNX000: fetching from ${url.href}`);
      return await executor();
    }
  };
  _report = new WeakMap();
  var audit = new YarnPluginPackageAudit();
  var plugin = {
    hooks: {
      wrapNetworkRequest: audit.wrapNetworkRequest,
      reduceDependency: audit.reduceDependency
    }
  };
  var sources_default = plugin;
  return sources_exports;
})();
return plugin;
}
};
