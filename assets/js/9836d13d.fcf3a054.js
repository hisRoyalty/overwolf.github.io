"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7205],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||n;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},32450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(25773),o=(r(27378),r(35318));const n={id:169,image:"/img/embed/changelogs.jpg",title:"Version 0.169",sidebar_label:"0.169",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/april/169",id:"api/changelogs/overwolf-platform/2021/april/169",title:"Version 0.169",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2021/april/169.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/april",slug:"/api/changelogs/overwolf-platform/2021/april/169",permalink:"/api/changelogs/overwolf-platform/2021/april/169",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/april/169.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720418439,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"169",image:"/img/embed/changelogs.jpg",title:"Version 0.169",sidebar_label:"0.169",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.170",permalink:"/api/changelogs/overwolf-platform/2021/may/170"},next:{title:"0.168",permalink:"/api/changelogs/overwolf-platform/2021/april/168"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improve OBS encoders support detection using the ",(0,o.kt)("a",{parentName:"li",href:"/api/streaming#getstreamencoderscallback"},"overrwolf.streaming.getStreamEncoders()")," API (we added new error state for unsupported encoders ",(0,o.kt)("a",{parentName:"li",href:"/api/streaming#encoderdata-object"},"EncoderData")," object)."),(0,o.kt)("li",{parentName:"ul"},"Added the following properties to ",(0,o.kt)("a",{parentName:"li",href:"/api/io/paths"},"overwolf.io.paths"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Overwolf install dir : 'overwolf.io.paths.overwolfInstallation'."),(0,o.kt)("li",{parentName:"ul"},"Overwolf install dir with version number : 'overwolf.io.paths.overwolfInstallationWithVersion'."),(0,o.kt)("li",{parentName:"ul"},"obs dir : 'overwolf.io.paths.obsBin'."))),(0,o.kt)("li",{parentName:"ul"},"Improved behavior when switching a video to full screen in an Overwolf native window."),(0,o.kt)("li",{parentName:"ul"},"New event: ",(0,o.kt)("a",{parentName:"li",href:"/api/streaming#supportedencodersupdatedevent-object"},"overwolf.streaming.onSupportedEncodersUpdated")," -  Fired upon support encoder list updated.")),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"General stability fixes for OBS and uncommon recording failures, Improved error indications when we do fail to record."),(0,o.kt)("li",{parentName:"ul"},"Added support for overlay above UWP (Universal Windows Platform) games (minecraft, sea of thieves & roblox). some of these games are still not working perfectly, and currently, the plan is to only enable Sea of Thieves for UWP in the near future. ")),(0,o.kt)("h3",{id:"dev-console"},"Dev Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"General enhancments for the crash reports section.")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed the issue where native windows can be resized greater than their manifest maximum size."),(0,o.kt)("li",{parentName:"ul"},'Fixed the issue where Video elements "glitched" when switching the app to full-screen mode.'),(0,o.kt)("li",{parentName:"ul"},"Fixed the issue where you got an error that you should update your graphic card drivers only AFTER the game capturing starts. Now, you get this error before the capture starts."),(0,o.kt)("li",{parentName:"ul"},"Fixed the Rocket league (Epic version) invisible cursor issue."),(0,o.kt)("li",{parentName:"ul"},'CS:GO\u2019s "Out of Process Overlay" is no longer the only supported overlay mode.'),(0,o.kt)("li",{parentName:"ul"},"We've killed the nameless Overwolf window that would sometimes appear when going in-game.")),(0,o.kt)("h3",{id:"game-events"},"Game events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valheim"},"Valehim"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New supported game"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/dota-2"},"Dota"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New info update",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"game_mode"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/teamfight-tactics"},"TFT")),(0,o.kt)("li",{parentName:"ul"},'Riot is working on a new TFT mode named "Hyperoll". The mode is currently available in the PBE servers and soon in live servers and can be detected as 1130 in the ',(0,o.kt)("inlineCode",{parentName:"li"},"queueID"),".")))}m.isMDXComponent=!0}}]);