"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4563],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const l={id:147,image:"/img/embed/changelogs.jpg",title:"Version 0.147",sidebar_label:"0.147",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2020/may/147",id:"api/changelogs/overwolf-platform/2020/may/147",title:"Version 0.147",description:"Note that iteration 146 and 147 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2020/may/147.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/may",slug:"/api/changelogs/overwolf-platform/2020/may/147",permalink:"/api/changelogs/overwolf-platform/2020/may/147",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/may/147.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"147",image:"/img/embed/changelogs.jpg",title:"Version 0.147",sidebar_label:"0.147",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.148",permalink:"/api/changelogs/overwolf-platform/2020/june/148"},next:{title:"0.145",permalink:"/api/changelogs/overwolf-platform/2020/april/145"}},p={},s=[{value:"API and Platform",id:"api-and-platform",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Note that iteration 146 and 147 were combined into a single iteration.  "),(0,n.kt)("h3",{id:"api-and-platform"},"API and Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New feature: ",(0,n.kt)("a",{parentName:"li",href:"/api/windows#flashwindowid-behaviorcallback"},"overwolf.window.flash()"),(0,n.kt)("br",{parentName:"li"}),"Flashes a window that is not in focus (for example, minimized to taskbar).",(0,n.kt)("br",{parentName:"li"}),"Support either constant pulses or a single flash - the choice is yours. "),(0,n.kt)("li",{parentName:"ul"},"New manifest flag: ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#disable_cleanup"},"disable_cleanup"),".",(0,n.kt)("br",{parentName:"li"}),"If set to true, app local data will not be cleaned up after app uninstallation."),(0,n.kt)("li",{parentName:"ul"},"New API: ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions/io"},"overwolf.extensions.io"),(0,n.kt)("br",{parentName:"li"}),"No need to use the external I/O plugin anymore for your current extension-related I/O functionalities.",(0,n.kt)("br",{parentName:"li"}),"Now you can easily create, delete, or update files on your extension's ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions/io#storagespace-enum"},"dedicated storage space"),".   "),(0,n.kt)("li",{parentName:"ul"},"Allow apps to request ",(0,n.kt)("a",{parentName:"li",href:"/topics/best-practices/hotkeys-best-practices#reassign-hotkeys"},"opening the hotkey settings")," for a specific game. An example:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Current hotkey URL:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"overwolf://settings/hotkeys#hotkey_name_in_manifest"),".  "),(0,n.kt)("li",{parentName:"ul"},"New hotkey URL:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id"),".",(0,n.kt)("br",{parentName:"li"}),"game_id is optional."))),(0,n.kt)("li",{parentName:"ul"},"Upgrade to OBS 25.0.0 ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Update obs-ffmpeg.dll (NVENC encoder).\nThat can affect some devs that are trying to capture videos and get encoders errors and a message that the NVEC driver should be updated."))),(0,n.kt)("li",{parentName:"ul"},"Updates for the streaming and replay APIs: added a ",(0,n.kt)("a",{parentName:"li",href:"#streaming"},"quota object"),":",(0,n.kt)("br",{parentName:"li"}),"Allow setting max media folder size in GB, and exclude folders that are not part of this quota."),(0,n.kt)("li",{parentName:"ul"},"Video recording engine updated, and now it supports Vulkan capturing!")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PUBG Lite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"team_feed"),(0,n.kt)("li",{parentName:"ul"},"knockout"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/deprecated/counter-strike-global-offensive"},"CS: GO"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kill_feed"))),(0,n.kt)("li",{parentName:"ul"},"New event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"scoreboard"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rainbow-six-siege"},"Rainbow Six: Siege"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New feature:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"me"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/escape-from-tarkov"},"Escape From Tarkov"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant"},"VALORANT"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/topics/best-practices/video-capture#auto-highlights-capture"},"Auto-highlights"),' now supports VALORANT "kill", "death" and "assist" events')))}u.isMDXComponent=!0}}]);