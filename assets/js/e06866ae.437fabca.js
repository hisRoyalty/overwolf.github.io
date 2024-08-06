"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2419],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||n;return r?o.createElement(d,l(l({ref:t},c),{},{components:r})):o.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=r(25773),a=(r(27378),r(35318));const n={id:256,image:"/img/embed/changelogs.jpg",title:"Version 0.256",sidebar_label:"0.256",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2024/july/256",id:"api/changelogs/overwolf-platform/2024/july/256",title:"Version 0.256",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2024/july/256.mdx",sourceDirName:"api/changelogs/overwolf-platform/2024/july",slug:"/api/changelogs/overwolf-platform/2024/july/256",permalink:"/api/changelogs/overwolf-platform/2024/july/256",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2024/july/256.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722950112,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"256",image:"/img/embed/changelogs.jpg",title:"Version 0.256",sidebar_label:"0.256",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Version 23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0"},next:{title:"0.254",permalink:"/api/changelogs/overwolf-platform/2024/june/254"}},p={},s=[{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added the ",(0,a.kt)("a",{parentName:"li",href:"/api/media/replays#changevolumeaudiooptions-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.changeVolume()"))," method, will change the volume of the Game/Mic audio sources.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where Overwolf would not load properly if ",(0,a.kt)("inlineCode",{parentName:"li"},"OverwolfBrowser.exe")," was run as admin."),(0,a.kt)("li",{parentName:"ul"},"Fixed a visual mismatch between HDR recording in Overwolf and HDR recording in OBS Studio."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the microphone could be heard on all audio tracks when it was set to volume 0 at the start of the recording."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where duplicate audio/monitor sources were created when using the replays and streaming services together."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where replays volume was set to 100 even when the volume was set to 0.")))}u.isMDXComponent=!0}}]);