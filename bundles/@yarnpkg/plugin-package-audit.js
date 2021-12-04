/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-package-audit",
factory: function (require) {
var plugin=(()=>{var w=Object.create,o=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var h=t=>o(t,"__esModule",{value:!0});var n=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var k=(t,e)=>{for(var r in e)o(t,r,{get:e[r],enumerable:!0})},m=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of f(e))!g.call(t,s)&&s!=="default"&&o(t,s,{get:()=>e[s],enumerable:!(r=c(e,s))||r.enumerable});return t},a=t=>m(h(o(t!=null?w(d(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var I={};k(I,{default:()=>q});var l=a(n("@yarnpkg/core")),i=a(n("url")),p=class{constructor(){this.networkRequests=[];this.afterAllInstalled=this.afterAllInstalled.bind(this),this.wrapNetworkRequest=this.wrapNetworkRequest.bind(this)}afterAllInstalled(e,r){for(let s of this.networkRequests)r.report.reportInfo(l.MessageName.FETCH_NOT_CACHED,`fetched from ${s}`)}async wrapNetworkRequest(e,r){return async()=>{let s=typeof r.target=="string"?new i.URL(r.target):r.target;return this.networkRequests.push(s.href),await e()}}},u=new p,R={hooks:{wrapNetworkRequest:u.wrapNetworkRequest,afterAllInstalled:u.afterAllInstalled}},q=R;return I;})();
return plugin;
}
};
