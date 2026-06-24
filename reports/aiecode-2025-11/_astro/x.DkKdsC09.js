import{a as ee,r as d}from"./index.C0qdTn36.js";var A={exports:{}},E={},Y;function re(){if(Y)return E;Y=1;/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case U:return"Profiler";case F:return"StrictMode";case z:return"Suspense";case X:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case W:return"Portal";case V:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case q:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case w:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function a(e){return""+e}function l(e){try{a(e);var r=!1}catch{r=!0}if(r){r=console;var n=r.error,s=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",s),a(e)}}function c(e){if(e===g)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===w)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function m(){var e=S.A;return e===null?null:e.getOwner()}function u(){return Error("react-stack-top-frame")}function p(e){if(j.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function b(e,r){function n(){x||(x=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function v(){var e=t(this.type);return N[e]||(N[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function R(e,r,n,s,i,k){var o=n.ref;return e={$$typeof:P,type:e,key:r,props:n,_owner:s},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:v}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:k}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function T(e,r,n,s,i,k){var o=r.children;if(o!==void 0)if(s)if(B(o)){for(s=0;s<o.length;s++)y(o[s]);Object.freeze&&Object.freeze(o)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else y(o);if(j.call(r,"key")){o=t(e);var f=Object.keys(r).filter(function(Q){return Q!=="key"});s=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",D[o+s]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,s,o,f,o),D[o+s]=!0)}if(o=null,n!==void 0&&(l(n),o=""+n),p(r)&&(l(r.key),o=""+r.key),"key"in r){n={};for(var h in r)h!=="key"&&(n[h]=r[h])}else n=r;return o&&b(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),R(e,o,n,m(),i,k)}function y(e){O(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===w&&(e._payload.status==="fulfilled"?O(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function O(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}var _=ee(),P=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),K=Symbol.for("react.client.reference"),S=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=Object.prototype.hasOwnProperty,B=Array.isArray,C=console.createTask?console.createTask:function(){return null};_={react_stack_bottom_frame:function(e){return e()}};var x,N={},Z=_.react_stack_bottom_frame.bind(_,u)(),H=C(c(u)),D={};E.Fragment=g,E.jsxDEV=function(e,r,n,s){var i=1e4>S.recentlyCreatedOwnerStacks++;return T(e,r,n,s,i?Error("react-stack-top-frame"):Z,i?C(c(e)):H)}})(),E}var I;function te(){return I||(I=1,A.exports=re()),A.exports}var fe=te();/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ne=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),$=t=>{const a=ne(t);return a.charAt(0).toUpperCase()+a.slice(1)},L=(...t)=>t.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim(),oe=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=d.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:m="",children:u,iconNode:p,...b},v)=>d.createElement("svg",{ref:v,...se,width:a,height:a,stroke:t,strokeWidth:c?Number(l)*24/Number(a):l,className:L("lucide",m),...!u&&!oe(b)&&{"aria-hidden":"true"},...b},[...p.map(([R,T])=>d.createElement(R,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(t,a)=>{const l=d.forwardRef(({className:c,...m},u)=>d.createElement(le,{ref:u,iconNode:a,className:L(`lucide-${ae($(t))}`,`lucide-${t}`,c),...m}));return l.displayName=$(t),l};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],me=ce("x",ue);export{me as X,ce as c,fe as j};
