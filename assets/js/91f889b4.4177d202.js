"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7482],{35318:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>m});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),m=function(e){return function(r){var t=s(r.components);return n.createElement(e,a({},r,{components:t}))}},s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8136:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(25773),o=(t(27378),t(35318));const a={id:"v23.6.0",image:"/img/embed/changelogs.jpg",title:"Version 23.6.0",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},l=void 0,i={unversionedId:"api/changelogs/electron-platform/ow-electron-builder/v23.6.0",id:"api/changelogs/electron-platform/ow-electron-builder/v23.6.0",title:"Version 23.6.0",description:"Platform",source:"@site/pages/docs/api/changelogs/electron-platform/ow-electron-builder/v23.6.0.mdx",sourceDirName:"api/changelogs/electron-platform/ow-electron-builder",slug:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/electron-platform/ow-electron-builder/v23.6.0.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673972134,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"v23.6.0",image:"/img/embed/changelogs.jpg",title:"Version 23.6.0",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!0}},sidebar:"api",previous:{title:"Version 19.1.8",permalink:"/api/changelogs/electron-platform/ow-electron/v19.1.8"},next:{title:"0.216",permalink:"/api/changelogs/overwolf-platform/2022/december/216"}},c={},p=[{value:"Platform",id:"platform",level:2},{value:"Sub-Version Summary",id:"sub-version-summary",level:2}],m={toc:p};function s(e){let{components:r,...t}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"platform"},"Platform"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Updated the underlying ",(0,o.mdx)("a",{parentName:"li",href:"https://npmjs.com/package/electron-builder"},"electron-builder")," to version ",(0,o.mdx)("inlineCode",{parentName:"li"},"23.6.0"),"."),(0,o.mdx)("li",{parentName:"ul"},"Core Overwolf utilities will now be automatically included in the built executable.")),(0,o.mdx)("h2",{id:"sub-version-summary"},"Sub-Version Summary"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron-builder/v/23.6.0"},(0,o.mdx)("inlineCode",{parentName:"a"},"23.6.0"))," - Initial version")))}s.isMDXComponent=!0}}]);