"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1162],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={id:230,image:"/img/embed/changelogs.jpg",title:"Version 0.230",sidebar_label:"0.230",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/july/230",id:"api/changelogs/overwolf-platform/2023/july/230",title:"Version 0.230",description:"* Note that iterations 229 and 230 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/july/230.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/july",slug:"/api/changelogs/overwolf-platform/2023/july/230",permalink:"/api/changelogs/overwolf-platform/2023/july/230",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/july/230.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723982107,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"230",image:"/img/embed/changelogs.jpg",title:"Version 0.230",sidebar_label:"0.230",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.233",permalink:"/api/changelogs/overwolf-platform/2023/august/233"},next:{title:"0.228",permalink:"/api/changelogs/overwolf-platform/2023/july/228"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that iterations 229 and 230 were combined into a single version.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved event detection when running certain games as administrator."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url")),", the overwolf object will now be available on all windows."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url"))," in an unpacked app, the ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].block_top_window_navigation"))," property will now be turned off by force."),(0,a.kt)("li",{parentName:"ul"},"Updated list of supported GPUs for the ",(0,a.kt)("inlineCode",{parentName:"li"},"NVEC_NEW")," encoder.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf")," API object would sometimes not load when using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url")),"."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,a.kt)("a",{parentName:"li",href:"/api/streaming#changevolumestreamid-audiooptions-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.changeVolume()"))," would not affect the volume of the recording."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where recording with the ",(0,a.kt)("inlineCode",{parentName:"li"},"NVEC_NEW")," encoder would fail in setups running an Nvidia GPU alongside an AMD GPU.")))}c.isMDXComponent=!0}}]);