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

  // pnp:/mnt/c/code/package-audit-plugin/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });
  var import_url = __toModule(__require("url"));
  var YarnPluginPackageAudit = class {
    constructor() {
      console.log("1");
      this.report = null;
      console.log("2");
    }
    async reduceDependency(_dependency, _project, _locator, _initialDependency, extra) {
      this.report = extra.resolveOptions.report;
    }
    async wrapNetworkRequest(executor, {target}) {
      var _a;
      const url = typeof target === `string` ? new import_url.URL(target) : target;
      (_a = this.report) == null ? void 0 : _a.reportInfo(null, `YNX000: fetching from ${url.href}`);
      return await executor();
    }
  };
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
