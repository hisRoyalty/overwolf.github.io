"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1162],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const o={id:230,image:"/img/embed/changelogs.jpg",title:"Version 0.230",sidebar_label:"0.230",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/july/230",id:"api/changelogs/overwolf-platform/2023/july/230",title:"Version 0.230",description:"* Note that iterations 229 and 230 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/july/230.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/july",slug:"/api/changelogs/overwolf-platform/2023/july/230",permalink:"/api/changelogs/overwolf-platform/2023/july/230",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/july/230.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1722944503,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"230",image:"/img/embed/changelogs.jpg",title:"Version 0.230",sidebar_label:"0.230",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.233",permalink:"/api/changelogs/overwolf-platform/2023/august/233"},next:{title:"0.228",permalink:"/api/changelogs/overwolf-platform/2023/july/228"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that iterations 229 and 230 were combined into a single version.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved event detection when running certain games as administrator."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url")),", the overwolf object will now be available on all windows."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url"))," in an unpacked app, the ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].block_top_window_navigation"))," property will now be turned off by force."),(0,a.kt)("li",{parentName:"ul"},"Updated list of supported GPUs for the ",(0,a.kt)("inlineCode",{parentName:"li"},"NVEC_NEW")," encoder.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf")," API object would sometimes not load when using ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"data.[windowName].debug_url")),"."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,a.kt)("a",{parentName:"li",href:"/api/streaming#changevolumestreamid-audiooptions-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.changeVolume()"))," would not affect the volume of the recording."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where recording with the ",(0,a.kt)("inlineCode",{parentName:"li"},"NVEC_NEW")," encoder would fail in setups running an Nvidia GPU alongside an AMD GPU.")))}c.isMDXComponent=!0}}]);