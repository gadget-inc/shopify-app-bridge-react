"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("react"),fr=require("react-dom");var ee={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function lr(){if(Oe)return L;Oe=1;var T=m,v=Symbol.for("react.element"),y=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,C=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function h(a,d,_){var E,w={},O=null,b=null;_!==void 0&&(O=""+_),d.key!==void 0&&(O=""+d.key),d.ref!==void 0&&(b=d.ref);for(E in d)c.call(d,E)&&!x.hasOwnProperty(E)&&(w[E]=d[E]);if(a&&a.defaultProps)for(E in d=a.defaultProps,d)w[E]===void 0&&(w[E]=d[E]);return{$$typeof:v,type:a,key:O,ref:b,props:w,_owner:C.current}}return L.Fragment=y,L.jsx=h,L.jsxs=h,L}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe;function cr(){return Pe||(Pe=1,process.env.NODE_ENV!=="production"&&function(){var T=m,v=Symbol.for("react.element"),y=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),a=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),k=Symbol.iterator,$="@@iterator";function B(e){if(e===null||typeof e!="object")return null;var r=k&&e[k]||e[$];return typeof r=="function"?r:null}var P=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];xe("error",e,t)}}function xe(e,r,t){{var n=P.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var ke=!1,De=!1,Ae=!1,Fe=!1,Ne=!1,te;te=Symbol.for("react.module.reference");function Ie(e){return!!(typeof e=="string"||typeof e=="function"||e===c||e===x||Ne||e===C||e===_||e===E||Fe||e===b||ke||De||Ae||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===w||e.$$typeof===h||e.$$typeof===a||e.$$typeof===d||e.$$typeof===te||e.getModuleId!==void 0))}function Le(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function ne(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case c:return"Fragment";case y:return"Portal";case x:return"Profiler";case C:return"StrictMode";case _:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a:var r=e;return ne(r)+".Consumer";case h:var t=e;return ne(t._context)+".Provider";case d:return Le(e,e.render,"ForwardRef");case w:var n=e.displayName||null;return n!==null?n:S(e.type)||"Memo";case O:{var u=e,s=u._payload,o=u._init;try{return S(o(s))}catch{return null}}}return null}var D=Object.assign,N=0,ae,ie,oe,ue,se,fe,le;function ce(){}ce.__reactDisabledLog=!0;function Me(){{if(N===0){ae=console.log,ie=console.info,oe=console.warn,ue=console.error,se=console.group,fe=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function $e(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:ae}),info:D({},e,{value:ie}),warn:D({},e,{value:oe}),error:D({},e,{value:ue}),group:D({},e,{value:se}),groupCollapsed:D({},e,{value:fe}),groupEnd:D({},e,{value:le})})}N<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=P.ReactCurrentDispatcher,G;function W(e,r,t){{if(G===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,Y;{var Be=typeof WeakMap=="function"?WeakMap:Map;Y=new Be}function de(e,r){if(!e||z)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;z=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=J.current,J.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(j){n=j}Reflect.construct(e,[],o)}else{try{o.call()}catch(j){n=j}e.call(o.prototype)}}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),g=n.stack.split(`
`),f=i.length-1,l=g.length-1;f>=1&&l>=0&&i[f]!==g[l];)l--;for(;f>=1&&l>=0;f--,l--)if(i[f]!==g[l]){if(f!==1||l!==1)do if(f--,l--,l<0||i[f]!==g[l]){var R=`
`+i[f].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,R),R}while(f>=1&&l>=0);break}}}finally{z=!1,J.current=s,$e(),Error.prepareStackTrace=u}var F=e?e.displayName||e.name:"",Ce=F?W(F):"";return typeof e=="function"&&Y.set(e,Ce),Ce}function We(e,r,t){return de(e,!1)}function Ye(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Ye(e));if(typeof e=="string")return W(e);switch(e){case _:return W("Suspense");case E:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return We(e.render);case w:return V(e.type,r,t);case O:{var n=e,u=n._payload,s=n._init;try{return V(s(u),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,ve={},pe=P.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function Ve(e,r,t,n,u){{var s=Function.call.bind(U);for(var o in e)if(s(e,o)){var i=void 0;try{if(typeof e[o]!="function"){var g=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw g.name="Invariant Violation",g}i=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){i=f}i&&!(i instanceof Error)&&(q(u),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof i),q(null)),i instanceof Error&&!(i.message in ve)&&(ve[i.message]=!0,q(u),p("Failed %s type: %s",t,i.message),q(null))}}}var Ue=Array.isArray;function K(e){return Ue(e)}function qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Je(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function he(e){if(Je(e))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",qe(e)),ye(e)}var I=P.ReactCurrentOwner,Ge={key:!0,ref:!0,__self:!0,__source:!0},Ee,ge,X;X={};function ze(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ke(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Xe(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=S(I.current.type);X[t]||(p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S(I.current.type),e.ref),X[t]=!0)}}function Ze(e,r){{var t=function(){Ee||(Ee=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Qe(e,r){{var t=function(){ge||(ge=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var He=function(e,r,t,n,u,s,o){var i={$$typeof:v,type:e,key:r,ref:t,props:o,_owner:s};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function er(e,r,t,n,u){{var s,o={},i=null,g=null;t!==void 0&&(he(t),i=""+t),Ke(r)&&(he(r.key),i=""+r.key),ze(r)&&(g=r.ref,Xe(r,u));for(s in r)U.call(r,s)&&!Ge.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var f=e.defaultProps;for(s in f)o[s]===void 0&&(o[s]=f[s])}if(i||g){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&Ze(o,l),g&&Qe(o,l)}return He(e,i,g,u,n,I.current,o)}}var Z=P.ReactCurrentOwner,me=P.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var Q;Q=!1;function H(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}function be(){{if(Z.current){var e=S(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function rr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function tr(e){{var r=be();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Re(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=tr(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==Z.current&&(n=" It was passed a child from "+S(e._owner.type)+"."),A(e),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Te(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];H(n)&&Re(n,r)}else if(H(e))e._store&&(e._store.validated=!0);else if(e){var u=B(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),o;!(o=s.next()).done;)H(o.value)&&Re(o.value,r)}}}function nr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===w))t=r.propTypes;else return;if(t){var n=S(r);Ve(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Q){Q=!0;var u=S(r);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ar(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),p("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function we(e,r,t,n,u,s){{var o=Ie(e);if(!o){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var g=rr(u);g?i+=g:i+=be();var f;e===null?f="null":K(e)?f="array":e!==void 0&&e.$$typeof===v?(f="<"+(S(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,i)}var l=er(e,r,t,u,s);if(l==null)return l;if(o){var R=r.children;if(R!==void 0)if(n)if(K(R)){for(var F=0;F<R.length;F++)Te(R[F],e);Object.freeze&&Object.freeze(R)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(R,e)}return e===c?ar(l):nr(l),l}}function ir(e,r,t){return we(e,r,t,!0)}function or(e,r,t){return we(e,r,t,!1)}var ur=or,sr=ir;M.Fragment=c,M.jsx=ur,M.jsxs=sr}()),M}process.env.NODE_ENV==="production"?ee.exports=lr():ee.exports=cr();var re=ee.exports;const Se=m.forwardRef(function({open:v,onShow:y,onHide:c,children:C,...x},h){const[a,d]=m.useState(),{titleBar:_,saveBar:E,modalContent:w}=m.Children.toArray(C).reduce((b,k)=>{const $=dr(k),B=$==="ui-title-bar",P=$==="ui-save-bar";return!B&&!P&&b.modalContent.push(k),{...b,titleBar:B?k:b.titleBar,saveBar:P?k:b.saveBar}},{modalContent:[]}),O=a&&a.content?fr.createPortal(w,a.content):null;return m.useEffect(()=>{a&&(v?a.show():a.hide())},[a,v]),m.useEffect(()=>{if(!(!a||!y))return a.addEventListener("show",y),()=>{a.removeEventListener("show",y)}},[a,y]),m.useEffect(()=>{if(!(!a||!c))return a.addEventListener("hide",c),()=>{a.removeEventListener("hide",c)}},[a,c]),m.useEffect(()=>{if(a)return()=>{a.hide()}},[a]),re.jsxs("ui-modal",{...x,ref:b=>{d(b),h&&(typeof h=="function"?h(b):h.current=b)},children:[_,E,re.jsx("div",{children:O})]})});Se.displayName="ui-modal";function dr(T){if(!T)return;const v=typeof T=="object"&&"type"in T?T.type:void 0,y=typeof v=="string"?v:void 0,c=typeof v=="object"?v.displayName:void 0;return y||(typeof c=="string"?c:void 0)}const vr="ui-nav-menu",pr="ui-title-bar",je=m.forwardRef(function({open:v,onShow:y,onHide:c,children:C,...x},h){const[a,d]=m.useState();return m.useEffect(()=>{a&&(v?a.show():a.hide())},[a,v]),m.useEffect(()=>{if(!(!a||!y))return a.addEventListener("show",y),()=>{a.removeEventListener("show",y)}},[a,y]),m.useEffect(()=>{if(!(!a||!c))return a.addEventListener("hide",c),()=>{a.removeEventListener("hide",c)}},[a,c]),m.useEffect(()=>{if(a)return()=>{a.hide()}},[a]),re.jsx("ui-save-bar",{...x,ref:_=>{d(_),h&&(typeof h=="function"?h(_):h.current=_)},children:C})});je.displayName="ui-save-bar";const yr=new Proxy({},{get(T,v){throw Error(`shopify.${String(v)} can't be used in a server environment. You likely need to move this code into an Effect.`)}});function hr(){if(typeof window>"u")return yr;if(!window.shopify)throw Error("The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page");return window.shopify}exports.Modal=Se;exports.NavMenu=vr;exports.SaveBar=je;exports.TitleBar=pr;exports.useAppBridge=hr;
//# sourceMappingURL=index.cjs.map
