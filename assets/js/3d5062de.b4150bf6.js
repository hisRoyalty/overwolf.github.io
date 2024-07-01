"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6444],{35318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},86634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(25773),n=(o(27378),o(35318));const a={id:"electron-migration",image:"/img/embed/api-best-practices.jpg",title:"Porting your Electron app to Overwolf",sidebar_label:"Electron Migration",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"topics/best-practices/electron-migration",id:"topics/best-practices/electron-migration",title:"Porting your Electron app to Overwolf",description:"This page was written before ow-electron was developed. While still relevant, if you have an existing Electron app,",source:"@site/../pages/topics/best-practices/electron-migration.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/electron-migration",permalink:"/topics/best-practices/electron-migration",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/electron-migration.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1719858546,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{id:"electron-migration",image:"/img/embed/api-best-practices.jpg",title:"Porting your Electron app to Overwolf",sidebar_label:"Electron Migration",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Data persistence",permalink:"/topics/best-practices/data-persistence"},next:{title:"Enable Developer Tools",permalink:"/topics/best-practices/enable-dev-tools"}},s={},c=[{value:"One code base for Electron and OW app",id:"one-code-base-for-electron-and-ow-app",level:2},{value:"Recommended steps to keep both versions",id:"recommended-steps-to-keep-both-versions",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"This page was written before ",(0,n.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron")," was developed. While still relevant, if you have an existing Electron app,\nit may be easier to integrate it with ",(0,n.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron")," instead!")),(0,n.kt)("p",null,"In case you have an existing application on Electron, porting your app to Overwolf is very easy, and should take about a week of work for a single developer. This will allow you the best of both worlds while you maintain full control of your destiny. Like Electron, Overwolf is built on Chromium. While Electron is a generalized product - Overwolf is dedicated specifically for gaming apps. "),(0,n.kt)("p",null,"Once you have a build on Overwolf, you\u2019d be able to enjoy features like in-game overlay, real time telemetry, monetization, analytics, customized installer, auto updates, free CDN, marketing, signatures, and a lot more!"),(0,n.kt)("p",null,"Our framework allows you to keep both versions live, with one code base and negligible live-ops overhead. At any given time, you can choose to deploy updates to Electron, Overwolf, or both. We did it ourselves to the CurseForge app, and we\u2019re happy to explain how."),(0,n.kt)("h2",{id:"one-code-base-for-electron-and-ow-app"},"One code base for Electron and OW app"),(0,n.kt)("p",null,"It is simple to maintain both Electron and Overwolf support for the app - basing it on the same codebase."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Core package/module with most of the app\u2019s logic and UI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Abstracting Framework specific APIs (e.g. WindowsService [",(0,n.kt)("a",{parentName:"li",href:"/api/windows"},"overwolf.windows"),", BrowserWindow], CommunicationsService [",(0,n.kt)("a",{parentName:"li",href:"/api/windows#getmainwindow"},"overwolf.windows.getMainWindow"),", Electron preload] etc...)."))),(0,n.kt)("li",{parentName:"ul"},"Thin package for Overwolf - uses core package."),(0,n.kt)("li",{parentName:"ul"},"Thin package for Electron - uses core package."),(0,n.kt)("li",{parentName:"ul"},"We can help build it for you! ",(0,n.kt)("a",{parentName:"li",href:"/support/contact-us"},"Reach out"),".")),(0,n.kt)("h3",{id:"recommended-steps-to-keep-both-versions"},"Recommended steps to keep both versions"),(0,n.kt)("p",null,"These are the recommended steps to keep both versions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Electron browser process code \u2192 Overwolf ",(0,n.kt)("a",{parentName:"li",href:"../using-windows-api/communicating-between-windows#using-a-background-controller"},"background controller")),(0,n.kt)("li",{parentName:"ul"},"Electron renderer process code \u2192 ",(0,n.kt)("a",{parentName:"li",href:"../using-windows-api/using-overwolf-windows"},"Overwolf Window")),(0,n.kt)("li",{parentName:"ul"},"Communication layer (preload code \u2192 ",(0,n.kt)("a",{parentName:"li",href:"/api/windows#getmainwindow"},"overwolf.window.getMainWindow"),")"),(0,n.kt)("li",{parentName:"ul"},"Abstracting framework specific code (Electron/Overwolf) and injecting the relevant implementation (e.g. Electron APIs vs Overwolf APIs, node.js vs .net plugins)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Here we can help with converting to .net"))),(0,n.kt)("li",{parentName:"ul"},"Once you get the technical part cover we suggest communicating with your users how the two clients differ from each other: added features, reducing cost, overlay etc"),(0,n.kt)("li",{parentName:"ul"},"Lastly, if you\u2019re not happy with our service - you can always easily go back to being exclusively on Electron. If you choose to go just on Overwolf, you can go back at any given time to Electron.")),(0,n.kt)("p",null,"If you have any questions, please ",(0,n.kt)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),"."))}u.isMDXComponent=!0}}]);