"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9379],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),g=i,f=c["".concat(a,".").concat(g)]||c[g]||m[g]||l;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,p=new Array(l);p[0]=g;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[c]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const l={id:"sample-plugin",image:"/img/embed/api-best-practices.jpg",title:"Overwolf sample plugin",sidebar_label:"Sample plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},p=void 0,o={unversionedId:"topics/using-plugins/sample-plugin",id:"topics/using-plugins/sample-plugin",title:"Overwolf sample plugin",description:"This is an unpacked Overwolf sample app that utilizes the Overwolf Sample Plugin",source:"@site/../pages/topics/using-plugins/sample-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/sample-plugin",permalink:"/topics/using-plugins/sample-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/sample-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721722144,formattedLastUpdatedAt:"Jul 23, 2024",frontMatter:{id:"sample-plugin",image:"/img/embed/api-best-practices.jpg",title:"Overwolf sample plugin",sidebar_label:"Sample plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Process Manager plugin",permalink:"/topics/using-plugins/process-manager-plugin"},next:{title:"Simple I/O plugin",permalink:"/topics/using-plugins/simple-io-plugin"}},a={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is an unpacked ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugin-sample/tree/master/sampleapp"},"Overwolf sample app")," that utilizes the Overwolf ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugin-sample"},"Sample Plugin")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The DLL file is placed inside of the app\u2019s directory \u2013 so if you recompile it, you\u2019ll need to replace the old DLL with the new one inside the folder. Please review the manifest.json file to view how to reference the Plugin file."),(0,i.kt)("li",{parentName:"ul"},"All DLLs should be compiled for the x64 platform.")),(0,i.kt)("p",null,"Don\u2019t hesitate to ask us questions in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/overwolf-developers"},"developers discord"),"."))}c.isMDXComponent=!0}}]);