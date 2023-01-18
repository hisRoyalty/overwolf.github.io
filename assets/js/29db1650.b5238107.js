"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[129],{35318:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={id:"technical-checklist",image:"/img/embed/getting-started.jpg",title:"Technical checklist",sidebar_label:"Technical checklist",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,c={unversionedId:"start/test-your-app/technical-checklist",id:"start/test-your-app/technical-checklist",title:"Technical checklist",description:"Technical Hunter",source:"@site/pages/docs/start/test-your-app/technical-checklist.mdx",sourceDirName:"start/test-your-app",slug:"/start/test-your-app/technical-checklist",permalink:"/start/test-your-app/technical-checklist",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/test-your-app/technical-checklist.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"technical-checklist",image:"/img/embed/getting-started.jpg",title:"Technical checklist",sidebar_label:"Technical checklist",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Product checklist",permalink:"/start/test-your-app/product-checklist"}},s={},l=[{value:"Technical Hunter",id:"technical-hunter",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"technical-hunter"},"Technical Hunter"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Your Main (index) window is used as a hidden controller that opens other windows.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Window management is done according to our best practices (",(0,a.mdx)("a",{parentName:"p",href:"/topics/using-windows-api/using-overwolf-windows#general-tips-for-using-windows"},"Read more here"),").")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"No in-game full screen windows are used.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"All windows launch in up to 30ms (",(0,a.mdx)("a",{parentName:"p",href:"/topics/best-practices/launch-time-performance"},"Read more here"),").")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Your app should have error notifications for network downtime, API issues and server errors. (",(0,a.mdx)("a",{parentName:"p",href:"/topics/best-practices/user-flow-and-error-handling"},"Read more here"),").")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"App follows local/server assets best practices. (",(0,a.mdx)("a",{parentName:"p",href:"/topics/best-practices/launch-time-performance"},"Read more here"),").")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Avoid the use of non-100% transparency in your window design, calculating pixel values may cause a performance drop.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"The app passed Overwolf's performance test. It works smoothly and does not cause lags in game. Moreover, the app has 0% GPU/CPU/memory usage when idle."))),(0,a.mdx)("p",null,"*Note: this checklist previously awarded extra percentages for the revshare, but it was discontinued as of Jan 1st, 2021."))}u.isMDXComponent=!0}}]);