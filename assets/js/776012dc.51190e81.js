"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7259],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return a?o.createElement(f,l(l({ref:t},m),{},{components:a})):o.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(25773),n=(a(27378),a(35318));const r={id:159,image:"/img/embed/changelogs.jpg",title:"Version 0.159",sidebar_label:"0.159",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/december/159",id:"api/changelogs/overwolf-platform/2020/december/159",title:"Version 0.159",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2020/december/159.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/december",slug:"/api/changelogs/overwolf-platform/2020/december/159",permalink:"/api/changelogs/overwolf-platform/2020/december/159",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/december/159.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722950112,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"159",image:"/img/embed/changelogs.jpg",title:"Version 0.159",sidebar_label:"0.159",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.162",permalink:"/api/changelogs/overwolf-platform/2021/january/162"},next:{title:"0.158",permalink:"/api/changelogs/overwolf-platform/2020/november/158"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")," will now also return monitorId (where applicable) - allowing one window (background) to know on which monitor another window exists. "),(0,n.kt)("li",{parentName:"ul"},"Remove app indexedDB upon uninstall."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},"overwolf.streaming.start")," now support undefined settings."),(0,n.kt)("li",{parentName:"ul"},"WebCam support: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow adding a video source (Webcam), to replay's video. (generic obs source + secondary file)."),(0,n.kt)("li",{parentName:"ul"},"The webcam source can be rendered to a different video file (or not)."),(0,n.kt)("li",{parentName:"ul"},"Support multiple replay's consumers."),(0,n.kt)("li",{parentName:"ul"},"New API to retrieve connected WebCams: ",(0,n.kt)("a",{parentName:"li",href:"/api/media#getwebcamscallback"},"overwolf.media.getWebcams"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/windows#setdesktoponlywindowid-shouldbedesktoponly-callback"},"overwolf.windows.setDesktopOnly()")," - This function is now obsolete.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cleanup upon uninstall: Clear IndexedDB."),(0,n.kt)("li",{parentName:"ul"},"New guide: ",(0,n.kt)("a",{parentName:"li",href:"/topics/integrations/login-with-twitch"},"App login with Twitch, Discord, Facebook or Google"),".")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Call overwolf.media.replays.capture with futureDuration of -1."),(0,n.kt)("li",{parentName:"ul"},"Remove State 'open' when opening OSR windw."),(0,n.kt)("li",{parentName:"ul"},"Overwolf windows should no longer be considered as incognito."),(0,n.kt)("li",{parentName:"ul"},"Twitch login popup window: allow extension popup window to handle OW custom scheme (if origin is match externally connectable regex)."),(0,n.kt)("li",{parentName:"ul"},"Block custom scheme when app ExternallyConnectable is null."),(0,n.kt)("li",{parentName:"ul"},"Log when blocking Custom Overwolf Scheme navigation."),(0,n.kt)("li",{parentName:"ul"},"Fix overwolf.windows.bringToFront() API for native\\desktop only: will move window to top most and will set the window as the foreground window (fullcreen game mode will be minimized).")),(0,n.kt)("h3",{id:"dev-console"},"Dev Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Crash logs are now available on the "Crash reports" section.'),(0,n.kt)("li",{parentName:"ul"},"Comments and Replies - It is now possible for app developers to reply to users' reviews (through the dev console). These replies will be visible to anyone who checks the reviews of the app."),(0,n.kt)("li",{parentName:"ul"},"Comments Info - While on the subject of comments and reviews, we are now also sending some additional information about users' Overwolf versions and modules and some basic system information such as DPI and resolution. This will help you and us diagnose some issues when they happen."),(0,n.kt)("li",{parentName:"ul"},"Test Subscription - It is now possible for app developers to see the test subscriptions they made in the Developers console. These will only be visible if the app developer is logged into Overwolf, and will be hidden otherwise, which allows the developer to play around with how the subscription flow looks and feels before adding the subscription feature.")),(0,n.kt)("h3",{id:"game-events"},"Game Events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Valorant.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new update: ",(0,n.kt)("strong",{parentName:"li"},"pseudo_match_id"),"  under ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant#match_info"},"match_info"),"."))),(0,n.kt)("li",{parentName:"ul"},"COD: Warzone.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new update: ",(0,n.kt)("strong",{parentName:"li"},"pseudo_match_id"),"  under ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/call-of-duty-warzone-caldera#match_info"},"match_info"),"."))),(0,n.kt)("li",{parentName:"ul"},"Overwatch.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new update: ",(0,n.kt)("strong",{parentName:"li"},"pseudo_match_id"),"  under ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/overwatch-2#match_info"},"match_info"),".")))))}d.isMDXComponent=!0}}]);