"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9354],{35318:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var a=t(27378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=n,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?a.createElement(g,l(l({ref:r},c),{},{components:t})):a.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[f]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76525:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(25773),n=(t(27378),t(35318));const o={id:242,image:"/img/embed/changelogs.jpg",title:"Version 0.242",sidebar_label:"0.242",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2024/february/242",id:"api/changelogs/overwolf-platform/2024/february/242",title:"Version 0.242",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2024/february/242.mdx",sourceDirName:"api/changelogs/overwolf-platform/2024/february",slug:"/api/changelogs/overwolf-platform/2024/february/242",permalink:"/api/changelogs/overwolf-platform/2024/february/242",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2024/february/242.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1719129182,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{id:"242",image:"/img/embed/changelogs.jpg",title:"Version 0.242",sidebar_label:"0.242",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.243",permalink:"/api/changelogs/overwolf-platform/2024/march/243"},next:{title:"0.241",permalink:"/api/changelogs/overwolf-platform/2024/january/241"}},p={},s=[{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],c=(f="SkipMe",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var f;const u={toc:s};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(c,{type:"TEMPLATE",mdxType:"SkipMe"},"### Platform"),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the ",(0,n.kt)("inlineCode",{parentName:"li"},"SystemLanguage")," property to ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#getsysteminformationcallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.utils.getSystemInformation")),", for getting the user's system UI language.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,n.kt)("a",{parentName:"li",href:"/api/media#takescreenshotextargetpath-options-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.takeScreenshotEx"))," would sometimes ignore the preferred file format."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where UTM parameters could be parsed incorrectly when using certain encodings.")))}m.isMDXComponent=!0}}]);