"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6988],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(25773),o=(r(27378),r(35318));const n={id:166,image:"/img/embed/changelogs.jpg",title:"Version 0.166",sidebar_label:"0.166",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/march/166",id:"api/changelogs/overwolf-platform/2021/march/166",title:"Version 0.166",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2021/march/166.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/march",slug:"/api/changelogs/overwolf-platform/2021/march/166",permalink:"/api/changelogs/overwolf-platform/2021/march/166",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/march/166.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"166",image:"/img/embed/changelogs.jpg",title:"Version 0.166",sidebar_label:"0.166",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.168",permalink:"/api/changelogs/overwolf-platform/2021/april/168"},next:{title:"0.165",permalink:"/api/changelogs/overwolf-platform/2021/february/165"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/api/manifest#disable_cleanup"},"disable_cleanup")," flag in the manifest.json no longer deletes the app's files in the ",(0,o.kt)("inlineCode",{parentName:"li"},"%Localappdata%/Overwolf/Extensions")," folder.")),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overwolf will now restore installed apps in cases where the local database got corrupted."),(0,o.kt)("li",{parentName:"ul"},"Updated OBS to version 26.1.1. - now we have the latest and best recording capabilities."),(0,o.kt)("li",{parentName:"ul"},"Improve the OBS crash reports."),(0,o.kt)("li",{parentName:"ul"},"Overwolf Appstore as a default extension - So the Overwolf Appstore has all grown up, it is now a default extension within Overwolf. Most of you won\u2019t\neven notice a change, and that\u2019s good, but under the hood, there are several big differences.")),(0,o.kt)("h3",{id:"dev-console"},"Dev Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Export data to CSV.")))}f.isMDXComponent=!0}}]);