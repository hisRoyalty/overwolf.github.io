"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3655],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={id:223,image:"/img/embed/changelogs.jpg",title:"Version 0.223",sidebar_label:"0.223",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2023/may/223",id:"api/changelogs/overwolf-platform/2023/may/223",title:"Version 0.223",description:"* Note that iterations 222 and 223 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/may/223.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/may",slug:"/api/changelogs/overwolf-platform/2023/may/223",permalink:"/api/changelogs/overwolf-platform/2023/may/223",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/may/223.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721816686,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"223",image:"/img/embed/changelogs.jpg",title:"Version 0.223",sidebar_label:"0.223",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.224",permalink:"/api/changelogs/overwolf-platform/2023/may/224"},next:{title:"0.221",permalink:"/api/changelogs/overwolf-platform/2023/march/221"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that iterations 222 and 223 were combined into a single version.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The client will now clearly indicate when a new Overwolf version is ready for use.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updating an app will no longer periodically log an exception to the Overwolf logs."),(0,a.kt)("li",{parentName:"ul"},"Fixed a possible crash when opening a pop-up window within the app."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where an app couldn't re-subscribe to launcher events after being disabled and re-enabled while the launcher is open."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where Overwolf would sometimes crash on launch.")))}u.isMDXComponent=!0}}]);