/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-package-audit",
factory: function (require) {
var plugin=(()=>{var l=Object.create,n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var y=e=>n(e,"__esModule",{value:!0});var w=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var f=(e,r)=>{for(var o in r)n(e,o,{get:r[o],enumerable:!0})},v=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!R.call(e,t)&&t!=="default"&&n(e,t,{get:()=>r[t],enumerable:!(o=a(r,t))||o.enumerable});return e},D=e=>v(y(n(e!=null?l(d(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var h={};f(h,{default:()=>m});var p=D(w("url")),s=class{async reduceDependency(r,o,t,k,i){this.report=i.resolveOptions.report}async wrapNetworkRequest(r,{target:o}){let t=typeof o=="string"?new p.URL(o):o;return this.report.reportInfo(null,`YNX000: fetching from ${t.href}`),await r()}},c=new s,g={hooks:{wrapNetworkRequest:c.wrapNetworkRequest,reduceDependency:c.reduceDependency}},m=g;return h;})();
return plugin;
}
};
