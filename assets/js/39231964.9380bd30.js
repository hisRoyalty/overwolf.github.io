"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9997],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=o,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(25773),o=(r(27378),r(35318));const n={id:220,image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/march/220",id:"api/changelogs/overwolf-platform/2023/march/220",title:"Version 0.220",description:"Bug Fixes",source:"@site/../pages/api/changelogs/overwolf-platform/2023/march/220.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/march",slug:"/api/changelogs/overwolf-platform/2023/march/220",permalink:"/api/changelogs/overwolf-platform/2023/march/220",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/march/220.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723982107,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"220",image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.221",permalink:"/api/changelogs/overwolf-platform/2023/march/221"},next:{title:"0.219",permalink:"/api/changelogs/overwolf-platform/2023/february/219"}},p={},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where the mouse position detected by overlay windows would be offset from the actual mouse position."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where native windows with the ",(0,o.kt)("a",{parentName:"li",href:"/api/manifest#is_alt_f4_blocked"},(0,o.kt)("inlineCode",{parentName:"a"},"is_alt_f4_blocked"))," property would ignore the taskbar close button."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where an error would be thrown when trying to call ",(0,o.kt)("a",{parentName:"li",href:"/api/windows#bringtofrontwindowid-callback"},(0,o.kt)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront()")),"."),(0,o.kt)("li",{parentName:"ul"},"Fixed a mis-spelling in the logs produced by the ",(0,o.kt)("a",{parentName:"li",href:"/api/deprecated/twitter#sharetwittershareparameters-callback"},(0,o.kt)("inlineCode",{parentName:"a"},"overwolf.social.twitter.share()"))," method.")))}f.isMDXComponent=!0}}]);