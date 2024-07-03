"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9115],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={id:"roadmap",image:"/img/embed/changelogs.jpg",title:"Roadmap",sidebar_position:-3,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},p=void 0,i={unversionedId:"api/changelogs/roadmap",id:"api/changelogs/roadmap",title:"Roadmap",description:"Welcome to The Overwolf Developers' Roadmap!",source:"@site/../pages/api/changelogs/roadmap.mdx",sourceDirName:"api/changelogs",slug:"/api/changelogs/roadmap",permalink:"/api/changelogs/roadmap",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/roadmap.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720012030,formattedLastUpdatedAt:"Jul 3, 2024",sidebarPosition:-3,frontMatter:{id:"roadmap",image:"/img/embed/changelogs.jpg",title:"Roadmap",sidebar_position:-3,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Changelogs",permalink:"/api/changelogs/"},next:{title:"Version 28.2.5",permalink:"/api/changelogs/electron-platform/ow-electron/v28.2.5"}},l={},s=[],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome to The Overwolf Developers' Roadmap!")),(0,a.kt)("p",null,"Here you can find an overview of planned and upcoming features. This includes anything from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New features of the Overwolf Platform"),(0,a.kt)("li",{parentName:"ul"},"Planned Overwolf Electron changes"),(0,a.kt)("li",{parentName:"ul"},"Upcoming Developers' Console functionalities"),(0,a.kt)("li",{parentName:"ul"},"Work in progress Game events"),(0,a.kt)("li",{parentName:"ul"},"Etc")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," Do note that exact features and timings are subject to change.")),(0,a.kt)("iframe",{src:"https://trello.com/b/1V10E4IB.html",frameBorder:"0",width:"100%",height:"960"}),(0,a.kt)("admonition",{title:"Card Tag Meanings",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Community"),": Updates in the Overwolf developers' community.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"GEP"),": Game event provider. Overwolf supports events for multiple games, for each there are game events to track the game or the player's performance.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Console"),": With the Developers Console you can submit new versions, update store listing, manage your subscriptions, and more.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Special Project"),": unique tasks we are working on.")))}m.isMDXComponent=!0}}]);