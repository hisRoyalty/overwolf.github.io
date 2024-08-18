"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4582],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const o={id:158,image:"/img/embed/changelogs.jpg",title:"Version 0.158",sidebar_label:"0.158",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/november/158",id:"api/changelogs/overwolf-platform/2020/november/158",title:"Version 0.158",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2020/november/158.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/november",slug:"/api/changelogs/overwolf-platform/2020/november/158",permalink:"/api/changelogs/overwolf-platform/2020/november/158",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/november/158.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723982107,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"158",image:"/img/embed/changelogs.jpg",title:"Version 0.158",sidebar_label:"0.158",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.159",permalink:"/api/changelogs/overwolf-platform/2020/december/159"},next:{title:"0.157",permalink:"/api/changelogs/overwolf-platform/2020/november/157"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/manifest#disable_hardware_acceleration"},"disable_hardware_acceleration")," new manifest flag:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Diable GPU hardware acceleration, per window."),(0,n.kt)("li",{parentName:"ul"},"Relevant only for native windows."),(0,n.kt)("li",{parentName:"ul"},"It should always be used for native windows that are running on the secondary screen. It improves the game's performance by reducing the usage of the GPU while you are playing and fixes a bug where some users encountered FPS drops when using a secondary screen. "))),(0,n.kt)("li",{parentName:"ul"},"New API: ",(0,n.kt)("a",{parentName:"li",href:"/api/games/input-tracking#onmousewheel"},"overwolf.games.inputTracking.onMouseWheel"),": Fired a mouse wheel event."),(0,n.kt)("li",{parentName:"ul"},"New window manifest flag ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#restrict_to_game_bounds"},"restrict_to_game_bounds"),":",(0,n.kt)("br",{parentName:"li"}),"Restrict window to game client (window) area. A window will always stay inside the game window while dragging."),(0,n.kt)("li",{parentName:"ul"},"URI protocol: allows apps to open by using a URI protocol that can be passed via the command-line or a web address.",(0,n.kt)("br",{parentName:"li"}),"Just add the new ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#url_protocol"},"url_protocol")," flag to your app's manifest, to create a link to your app.",(0,n.kt)("br",{parentName:"li"}),'For example: "outplayed://something/null".',(0,n.kt)("br",{parentName:"li"}),"Then, you can use this link in a webpage or app, and it will open your OW app, with an option to send some additional data to your app. ")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block custom schemas from non extensions urls: make sure that only our schema still work: (overwolf://, fs://, extensions://, folder://)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/manifest#disable_hardware_acceleration"},"disable_hardware_acceleration")," new manifest flag:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Diable GPU hardware acceleration, per window."),(0,n.kt)("li",{parentName:"ul"},"Relevant only for native windows."),(0,n.kt)("li",{parentName:"ul"},"It should always be used for native windows that are running on the secondary screen. It improves the game's performance by reducing the usage of the GPU while you are playing and fixes a bug where some users encountered FPS drops when using a secondary screen. ")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix bug that prevets to notify all the apps using highlights when the game was closed during the highlight capture."),(0,n.kt)("li",{parentName:"ul"},"Removed user token from logs: we used to write the user token after changes to the login state."),(0,n.kt)("li",{parentName:"ul"},"Improve in-game dragging: Fixes an offset when dragging windows ingame."),(0,n.kt)("li",{parentName:"ul"},"Taken hotkeys don't appear as unassigned: Fix when the client can\u2019t detect \u2018unassigned\u2019 hotkeys when they are already taken.")),(0,n.kt)("h3",{id:"dev-console"},"Dev Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the ability to reply to user feedback/review on the app store. ")),(0,n.kt)("h3",{id:"game-events"},"Game Events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/call-of-duty-warzone-caldera"},"Call of Duty - Warzone"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Auto-highlights support."),(0,n.kt)("li",{parentName:"ul"},"New events:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kill"),(0,n.kt)("li",{parentName:"ul"},"death"),(0,n.kt)("li",{parentName:"ul"},"assist"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/final-fantasy-xiv"},"Final Fantasy XIV"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info update under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info")))))))}m.isMDXComponent=!0}}]);