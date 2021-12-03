/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-package-audit",
factory: function (require) {
var plugin=(()=>{var y=Object.create,s=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var g=e=>s(e,"__esModule",{value:!0});var m=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var h=(e,r)=>{for(var o in r)s(e,o,{get:r[o],enumerable:!0})},k=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of f(r))!D.call(e,t)&&t!=="default"&&s(e,t,{get:()=>r[t],enumerable:!(o=w(r,t))||o.enumerable});return e},P=e=>k(g(s(e!=null?y(v(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var p=(e,r,o)=>{if(!r.has(e))throw TypeError("Cannot "+o)};var c=(e,r,o)=>(p(e,r,"read from private field"),o?o.call(e):r.get(e)),i=(e,r,o)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,o)},l=(e,r,o,t)=>(p(e,r,"write to private field"),t?t.call(e,o):r.set(e,o),o);var O={};h(O,{default:()=>N});var u=P(m("url")),n,a=class{constructor(){i(this,n,void 0)}async reduceDependency(r,o,t,_,R){l(this,n,R.resolveOptions.report)}async wrapNetworkRequest(r,{target:o}){let t=typeof o=="string"?new u.URL(o):o;return c(this,n).reportInfo(null,`YNX000: fetching from ${t.href}`),await r()}};n=new WeakMap;var d=new a,L={hooks:{wrapNetworkRequest:d.wrapNetworkRequest,reduceDependency:d.reduceDependency}},N=L;return O;})();
return plugin;
}
};
