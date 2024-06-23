import{r as l,R as V}from"./react-DYH0GjtO.js";import"./react-dom-COzWVqkv.js";import{N as F,u as I,a as D,b as B,c as U,R as z,D as G,d as M}from"./react-router-CzNJ0ar9.js";import{s as T,c as k,b as X,i as W,d as E}from"./@remix-run-3RjNJ9fY.js";/**
* React Router DOM v6.21.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function j(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,i;for(i=0;i<a.length;i++)o=a[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function q(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H(e,t){return e.button===0&&(!t||t==="_self")&&!q(e)}const J=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Q=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Y=l.createContext({isTransitioning:!1}),Z="startTransition",_=V[Z];function ce(e){let{basename:t,children:n,future:a,window:o}=e,i=l.useRef();i.current==null&&(i.current=X({window:o,v5Compat:!0}));let s=i.current,[h,f]=l.useState({action:s.action,location:s.location}),{v7_startTransition:r}=a||{},d=l.useCallback(p=>{r&&_?_(()=>f(p)):f(p)},[f,r]);return l.useLayoutEffect(()=>s.listen(d),[s,d]),l.createElement(z,{basename:t,children:n,location:h.location,navigationType:h.action,navigator:s,future:a})}const $=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=l.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:i,replace:s,state:h,target:f,to:r,preventScrollReset:d,unstable_viewTransition:p}=t,v=j(t,J),{basename:b}=l.useContext(F),m,y=!1;if(typeof r=="string"&&ee.test(r)&&(m=r,$))try{let c=new URL(window.location.href),g=r.startsWith("//")?new URL(c.protocol+r):new URL(r),C=T(g.pathname,b);g.origin===c.origin&&C!=null?r=C+g.search+g.hash:y=!0}catch{}let L=I(r,{relative:o}),u=ae(r,{replace:s,state:h,target:f,preventScrollReset:d,relative:o,unstable_viewTransition:p});function w(c){a&&a(c),c.defaultPrevented||u(c)}return l.createElement("a",R({},v,{href:m||L,onClick:y||i?a:w,ref:n,target:f}))}),ue=l.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:o=!1,className:i="",end:s=!1,style:h,to:f,unstable_viewTransition:r,children:d}=t,p=j(t,Q),v=U(f,{relative:p.relative}),b=B(),m=l.useContext(G),{navigator:y}=l.useContext(F),L=m!=null&&ie(v)&&r===!0,u=y.encodeLocation?y.encodeLocation(v).pathname:v.pathname,w=b.pathname,c=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(w=w.toLowerCase(),c=c?c.toLowerCase():null,u=u.toLowerCase());const g=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let C=w===u||!s&&w.startsWith(u)&&w.charAt(g)==="/",N=c!=null&&(c===u||!s&&c.startsWith(u)&&c.charAt(u.length)==="/"),x={isActive:C,isPending:N,isTransitioning:L},A=C?a:void 0,S;typeof i=="function"?S=i(x):S=[i,C?"active":null,N?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let K=typeof h=="function"?h(x):h;return l.createElement(te,R({},p,{"aria-current":A,className:S,ref:n,style:K,to:f,unstable_viewTransition:r}),typeof d=="function"?d(x):d)});var P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(P||(P={}));var O;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(O||(O={}));function ne(e){let t=l.useContext(M);return t||W(!1),t}function ae(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:h}=t===void 0?{}:t,f=D(),r=B(),d=U(e,{relative:s});return l.useCallback(p=>{if(H(p,n)){p.preventDefault();let v=a!==void 0?a:k(r)===k(d);f(e,{replace:v,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:h})}},[r,f,d,a,o,n,e,i,s,h])}function ie(e,t){t===void 0&&(t={});let n=l.useContext(Y);n==null&&W(!1);let{basename:a}=ne(P.useViewTransitionState),o=U(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=T(n.currentLocation.pathname,a)||n.currentLocation.pathname,s=T(n.nextLocation.pathname,a)||n.nextLocation.pathname;return E(o.pathname,s)!=null||E(o.pathname,i)!=null}export{ce as B,te as L,ue as N};
