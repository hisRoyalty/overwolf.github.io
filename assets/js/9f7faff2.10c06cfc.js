"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3274],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const i={id:233,image:"/img/embed/changelogs.jpg",title:"Version 0.233",sidebar_label:"0.233",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2023/august/233",id:"api/changelogs/overwolf-platform/2023/august/233",title:"Version 0.233",description:"* Note that iterations 231-233 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/august/233.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/august",slug:"/api/changelogs/overwolf-platform/2023/august/233",permalink:"/api/changelogs/overwolf-platform/2023/august/233",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/august/233.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1716820798,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"233",image:"/img/embed/changelogs.jpg",title:"Version 0.233",sidebar_label:"0.233",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.234",permalink:"/api/changelogs/overwolf-platform/2023/october/234"},next:{title:"0.230",permalink:"/api/changelogs/overwolf-platform/2023/july/230"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note that iterations 231-233 were combined into a single version.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Various fixes for crashes that would happen on unexpected client states."),(0,n.kt)("li",{parentName:"ul"},"Improved game detection for games running on DX12."),(0,n.kt)("li",{parentName:"ul"},"Added support for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Traditional Chinese")," language in the client."),(0,n.kt)("li",{parentName:"ul"},"Temporarily disabled Overlay for CS2 when running in FullScreen.")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#getactiverecordingappscallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.getActiveRecordingApps()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns which apps are currently using the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming"))," recording engine, if any."))),(0,n.kt)("li",{parentName:"ul"},"Updated result for ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#start"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.start()"))," - ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streamresult-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamResult")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streamresult-object"},(0,n.kt)("inlineCode",{parentName:"a"},"activeRecordingApps"))," parameter, which will contain which other app is already using the\n",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming"))," recording engine, and if so, which app."))),(0,n.kt)("li",{parentName:"ul"},"New API - Added two new fields to ",(0,n.kt)("inlineCode",{parentName:"li"},"overlayInfo")," (",(0,n.kt)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo"),"):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isFullscreen")," - Whether or not the game is currently running in Fullscreen (mostly relevant for OOPO games)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isOOPOFullscreenRenderingDisabled")," - Whether or not Overlay rendering is disabled in this current game (mostly relevant for OOPO games).")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming"))," recording engine would stay on if the app that called it crashed."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,n.kt)("inlineCode",{parentName:"li"},"detectedRenderer")," parameter returned by several ",(0,n.kt)("a",{parentName:"li",href:"/api/games"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games"))," methods would sometimes be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"unknown"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where calling ",(0,n.kt)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.io.listenOnFile()"))," on files Overwolf did not have access to read would crash the calling app.")))}u.isMDXComponent=!0}}]);