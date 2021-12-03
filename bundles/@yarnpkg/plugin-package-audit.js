/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-package-audit",
factory: function (require) {
var plugin=(()=>{var s=Object.create,e=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var a=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var p=o=>e(o,"__esModule",{value:!0});var c=o=>{if(typeof require!="undefined")return require(o);throw new Error('Dynamic require of "'+o+'" is not supported')};var f=(o,r)=>{for(var n in r)e(o,n,{get:r[n],enumerable:!0})},k=(o,r,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of l(r))!g.call(o,t)&&t!=="default"&&e(o,t,{get:()=>r[t],enumerable:!(n=u(r,t))||n.enumerable});return o},m=o=>k(p(e(o!=null?s(a(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);var R={};f(R,{default:()=>P});var i=m(c("url"));async function w(o,{target:r}){let n=typeof r=="string"?new i.URL(r):r;return console.log(`YNX000: Making network request to ${n.href}`),await o()}var y={hooks:{wrapNetworkRequest:w}},P=y;return R;})();
return plugin;
}
};
