"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9997],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=a,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||n;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(25773),a=(r(27378),r(35318));const n={id:220,image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/march/220",id:"api/changelogs/overwolf-platform/2023/march/220",title:"Version 0.220",description:"Bug Fixes",source:"@site/../pages/api/changelogs/overwolf-platform/2023/march/220.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/march",slug:"/api/changelogs/overwolf-platform/2023/march/220",permalink:"/api/changelogs/overwolf-platform/2023/march/220",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/march/220.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1719406737,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"220",image:"/img/embed/changelogs.jpg",title:"Version 0.220",sidebar_label:"0.220",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.221",permalink:"/api/changelogs/overwolf-platform/2023/march/221"},next:{title:"0.219",permalink:"/api/changelogs/overwolf-platform/2023/february/219"}},p={},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the mouse position detected by overlay windows would be offset from the actual mouse position."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where native windows with the ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest#is_alt_f4_blocked"},(0,a.kt)("inlineCode",{parentName:"a"},"is_alt_f4_blocked"))," property would ignore the taskbar close button."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where an error would be thrown when trying to call ",(0,a.kt)("a",{parentName:"li",href:"/api/windows#bringtofrontwindowid-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront()")),"."),(0,a.kt)("li",{parentName:"ul"},"Fixed a mis-spelling in the logs produced by the ",(0,a.kt)("a",{parentName:"li",href:"/api/deprecated/twitter#sharetwittershareparameters-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.social.twitter.share()"))," method.")))}f.isMDXComponent=!0}}]);