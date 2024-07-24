"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3307],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const o={id:"september",image:"/img/embed/changelogs.jpg",title:"September",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,l={unversionedId:"api/changelogs/documentation/2023/september",id:"api/changelogs/documentation/2023/september",title:"September",description:"September 21st 2023 - Live Game Data Documentation",source:"@site/../pages/api/changelogs/documentation/2023/september.mdx",sourceDirName:"api/changelogs/documentation/2023",slug:"/api/changelogs/documentation/2023/september",permalink:"/api/changelogs/documentation/2023/september",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/documentation/2023/september.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721829131,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"september",image:"/img/embed/changelogs.jpg",title:"September",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"October",permalink:"/api/changelogs/documentation/2023/october"},next:{title:"July",permalink:"/api/changelogs/documentation/2023/july"}},s={},p=[{value:"September 21st 2023 - Live Game Data Documentation",id:"september-21st-2023---live-game-data-documentation",level:2},{value:"September 14th 2023 - Installer Documentation First Bite",id:"september-14th-2023---installer-documentation-first-bite",level:2},{value:"September 13th 2023 - Improved Sidebar Navigation",id:"september-13th-2023---improved-sidebar-navigation",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"september-21st-2023---live-game-data-documentation"},"September 21st 2023 - Live Game Data Documentation"),(0,n.kt)("p",null,"We have released the first bite of the new ",(0,n.kt)("a",{parentName:"p",href:"/api/live-game-data"},"Live Game Data (GEP)")," documentation."),(0,n.kt)("p",null,"Our goal with this update, is to create a single, standardized page, for all APIs related to Game Events/Data,\nwith instructions leading to all relevant APIs, for both ",(0,n.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron"),", and\nthe Overwolf Platformm."),(0,n.kt)("p",null,"With this, we hope that you will have an easier time reading up on, and working with, the available\nGame Data from the many different supported games."),(0,n.kt)("h2",{id:"september-14th-2023---installer-documentation-first-bite"},"September 14th 2023 - Installer Documentation First Bite"),(0,n.kt)("p",null,"We have released the first bite of the ",(0,n.kt)("a",{parentName:"p",href:"/tools/ow-installer"},"Overwolf Installer"),"'s documentation."),(0,n.kt)("p",null,"Our goal with this, as well as many of the upcoming edits, is to publish a public, clear, concise, technical specification,\nfor all of the many technical utilities and services that Overwolf provides."),(0,n.kt)("p",null,"With this move, we hope that developers will be able to better understand even the smallest details of how their Apps interact with these services,\nwhile also highlight neat features we think more Apps may be able to benefit from."),(0,n.kt)("h2",{id:"september-13th-2023---improved-sidebar-navigation"},"September 13th 2023 - Improved Sidebar Navigation"),(0,n.kt)("p",null,"We have released an update to the website's Sidebars, aiming to achieve the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make it easier to tell the sidebar item for the currently active page"),(0,n.kt)("li",{parentName:"ul"},"Make it easier to visualize the item hierarchy"),(0,n.kt)("li",{parentName:"ul"},"Improve support for content tagging (Relevant platforms, content type, etc)"),(0,n.kt)("li",{parentName:"ul"},"Cleaner design"),(0,n.kt)("li",{parentName:"ul"},"Various code improvements for upcoming updates")),(0,n.kt)("p",null,"As per usual, we hope these changes improve your experience using the website,\nand would love to hear any feedback you have on them!"))}m.isMDXComponent=!0}}]);