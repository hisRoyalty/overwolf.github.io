"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2488],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const i={id:"technical-checklist",image:"/img/embed/getting-started.jpg",title:"Technical checklist",sidebar_label:"Technical checklist",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,c={unversionedId:"start/test-your-app/technical-checklist",id:"start/test-your-app/technical-checklist",title:"Technical checklist",description:"Technical Hunter",source:"@site/../pages/start/test-your-app/technical-checklist.mdx",sourceDirName:"start/test-your-app",slug:"/start/test-your-app/technical-checklist",permalink:"/start/test-your-app/technical-checklist",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/test-your-app/technical-checklist.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716282814,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"technical-checklist",image:"/img/embed/getting-started.jpg",title:"Technical checklist",sidebar_label:"Technical checklist",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Product checklist",permalink:"/start/test-your-app/product-checklist"},next:{title:"Submit Your App",permalink:"/start/submit-your-app/"}},l={},s=[{value:"Technical Hunter",id:"technical-hunter",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"technical-hunter"},"Technical Hunter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Your Main (index) window is used as a hidden controller that opens other windows.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Window management is done according to our best practices (",(0,n.kt)("a",{parentName:"p",href:"/topics/using-windows-api/using-overwolf-windows#general-tips-for-using-windows"},"Read more here"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No in-game full screen windows are used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All windows launch in up to 30ms (",(0,n.kt)("a",{parentName:"p",href:"/topics/best-practices/launch-time-performance"},"Read more here"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Your app should have error notifications for network downtime, API issues and server errors. (",(0,n.kt)("a",{parentName:"p",href:"/topics/best-practices/user-flow-and-error-handling"},"Read more here"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"App follows local/server assets best practices. (",(0,n.kt)("a",{parentName:"p",href:"/topics/best-practices/launch-time-performance"},"Read more here"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avoid the use of non-100% transparency in your window design, calculating pixel values may cause a performance drop.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The app passed Overwolf's performance test. It works smoothly and does not cause lags in game. Moreover, the app has 0% GPU/CPU/memory usage when idle."))),(0,n.kt)("p",null,"*Note: this checklist previously awarded extra percentages for the revshare, but it was discontinued as of Jan 1st, 2021."))}u.isMDXComponent=!0}}]);