"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4963],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){return function(a){var t=d(a.components);return r.createElement(e,o({},a,{components:t}))}},d=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(t),u=n,c=s["".concat(i,".").concat(u)]||s[u]||f[u]||o;return t?r.createElement(c,l(l({ref:a},p),{},{components:t})):r.createElement(c,l({ref:a},p))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80594:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={id:147,image:"/img/embed/changelogs.jpg",title:"Version 0.147",sidebar_label:"0.147",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2020/may/147",id:"api/changelogs/overwolf-platform/2020/may/147",title:"Version 0.147",description:"Note that iteration 146 and 147 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/may/147.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/may",slug:"/api/changelogs/overwolf-platform/2020/may/147",permalink:"/api/changelogs/overwolf-platform/2020/may/147",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/may/147.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"147",image:"/img/embed/changelogs.jpg",title:"Version 0.147",sidebar_label:"0.147",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.148",permalink:"/api/changelogs/overwolf-platform/2020/june/148"},next:{title:"0.145",permalink:"/api/changelogs/overwolf-platform/2020/april/145"}},m={},p=[{value:"API and Platform",id:"api-and-platform",level:3},{value:"Game events",id:"game-events",level:3}],s={toc:p};function d(e){let{components:a,...t}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Note that iteration 146 and 147 were combined into a single iteration.  "),(0,n.mdx)("h3",{id:"api-and-platform"},"API and Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"New feature: ",(0,n.mdx)("a",{parentName:"li",href:"/api/windows#flashwindowid-behaviorcallback"},"overwolf.window.flash()"),(0,n.mdx)("br",{parentName:"li"}),"Flashes a window that is not in focus (for example, minimized to taskbar).",(0,n.mdx)("br",{parentName:"li"}),"Support either constant pulses or a single flash - the choice is yours. "),(0,n.mdx)("li",{parentName:"ul"},"New manifest flag: ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#disable_cleanup"},"disable_cleanup"),".",(0,n.mdx)("br",{parentName:"li"}),"If set to true, app local data will not be cleaned up after app uninstallation."),(0,n.mdx)("li",{parentName:"ul"},"New API: ",(0,n.mdx)("a",{parentName:"li",href:"/api/extensions/io"},"overwolf.extensions.io"),(0,n.mdx)("br",{parentName:"li"}),"No need to use the external I/O plugin anymore for your current extension-related I/O functionalities.",(0,n.mdx)("br",{parentName:"li"}),"Now you can easily create, delete, or update files on your extension's ",(0,n.mdx)("a",{parentName:"li",href:"/api/extensions/io#storagespace-enum"},"dedicated storage space"),".   "),(0,n.mdx)("li",{parentName:"ul"},"Allow apps to request ",(0,n.mdx)("a",{parentName:"li",href:"/topics/best-practices/hotkeys-best-practices#reassign-hotkeys"},"opening the hotkey settings")," for a specific game. An example:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Current hotkey URL:",(0,n.mdx)("br",{parentName:"li"}),(0,n.mdx)("inlineCode",{parentName:"li"},"overwolf://settings/hotkeys#hotkey_name_in_manifest"),".  "),(0,n.mdx)("li",{parentName:"ul"},"New hotkey URL:",(0,n.mdx)("br",{parentName:"li"}),(0,n.mdx)("inlineCode",{parentName:"li"},"overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id"),".",(0,n.mdx)("br",{parentName:"li"}),"game_id is optional."))),(0,n.mdx)("li",{parentName:"ul"},"Upgrade to OBS 25.0.0 ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update obs-ffmpeg.dll (NVENC encoder).\nThat can affect some devs that are trying to capture videos and get encoders errors and a message that the NVEC driver should be updated."))),(0,n.mdx)("li",{parentName:"ul"},"Updates for the streaming and replay APIs: added a ",(0,n.mdx)("a",{parentName:"li",href:"#streaming"},"quota object"),":",(0,n.mdx)("br",{parentName:"li"}),"Allow setting max media folder size in GB, and exclude folders that are not part of this quota."),(0,n.mdx)("li",{parentName:"ul"},"Video recording engine updated, and now it supports Vulkan capturing!")),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"PUBG Lite",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New event:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"team_feed"),(0,n.mdx)("li",{parentName:"ul"},"knockout"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/counter-strike-global-offensive"},"CS: GO"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New event:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"kill_feed"))),(0,n.mdx)("li",{parentName:"ul"},"New event:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"scoreboard"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege"},"Rainbow Six: Siege"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New feature:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"me"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/escape-from-tarkov"},"Escape From Tarkov"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/valorant"},"VALORANT"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#auto-highlights-capture"},"Auto-highlights"),' now supports VALORANT "kill", "death" and "assist" events')))}d.isMDXComponent=!0}}]);