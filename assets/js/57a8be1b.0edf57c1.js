"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6268],{35318:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,d=f["".concat(s,".").concat(u)]||f[u]||c[u]||n;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(25773),o=(r(27378),r(35318));const n={id:234,image:"/img/embed/changelogs.jpg",title:"Version 0.234",sidebar_label:"0.234",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2023/october/234",id:"api/changelogs/overwolf-platform/2023/october/234",title:"Version 0.234",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2023/october/234.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/october",slug:"/api/changelogs/overwolf-platform/2023/october/234",permalink:"/api/changelogs/overwolf-platform/2023/october/234",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/october/234.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1717420810,formattedLastUpdatedAt:"Jun 3, 2024",frontMatter:{id:"234",image:"/img/embed/changelogs.jpg",title:"Version 0.234",sidebar_label:"0.234",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.236",permalink:"/api/changelogs/overwolf-platform/2023/november/236"},next:{title:"0.233",permalink:"/api/changelogs/overwolf-platform/2023/august/233"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for remote disablement of Overlay for games where an issue may have popped up.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To simulate this behavior, two new Overwolf commandline flags have been added -\nMake sure you only use these during development, to avoid interfering with any actual important on-going disablements:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--disable-overlay-test")," - Disables all overlays for all games, regardless of client version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'--disable-overlay-version="${VERSION_NUMBER}"')," - If ",(0,o.kt)("inlineCode",{parentName:"li"},"VERSION_NUMBER")," is higher than the current Overwolf Client version, disables all overlays for all games.",(0,o.kt)("br",{parentName:"li"}),"Example value: ",(0,o.kt)("inlineCode",{parentName:"li"},'--disable-overlay-version="0.235.0.0"'),"."))))),(0,o.kt)("li",{parentName:"ul"},"Improved stability for loading OPK files, to account for interference from misconfigured Anti Viruses tampering with Apps.")),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New API - Added two new fields to ",(0,o.kt)("inlineCode",{parentName:"li"},"overlayInfo")," (",(0,o.kt)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"overlayRemotelyDisabled")," - Whether or not the Overlay for this game has been remotely disabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minimumEnabledOverwolfVersion")," - The minimum (if any) Overwolf version required to enable Overlay for this game.")))),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed several issues/App crashes around edge-cases involving the Overlay.")))}f.isMDXComponent=!0}}]);