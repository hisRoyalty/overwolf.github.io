"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[628],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),f=n,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},81451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:153,image:"/img/embed/changelogs.jpg",title:"Version 0.153",sidebar_label:"0.153",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/august/153",id:"api/changelogs/overwolf-platform/2020/august/153",title:"Version 0.153",description:"Note that iterations 150 to 153 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2020/august/153.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/august",slug:"/api/changelogs/overwolf-platform/2020/august/153",permalink:"/api/changelogs/overwolf-platform/2020/august/153",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/august/153.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719133412,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{id:"153",image:"/img/embed/changelogs.jpg",title:"Version 0.153",sidebar_label:"0.153",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.155",permalink:"/api/changelogs/overwolf-platform/2020/september/155"},next:{title:"0.149",permalink:"/api/changelogs/overwolf-platform/2020/july/149"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Note that iterations 150 to 153 were combined into a single iteration.  "),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/utils#openurlindefaultbrowserurlopenurloptions"},"overwolf.utils.openUrlInDefaultBrowser()"),' - Now allows extra behaviour. Right now "skip_in_game_notification" is the only option. When set to true, the alert notifying in-game users that their browser is about to open will not display. '),(0,n.kt)("li",{parentName:"ul"},"Add to ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#estorepage-enum"},"overwolf.utils.enums.eStorePage")," - Now you can Open the requested app\u2019s reviews/feedabck page in the Overwolf Appstore."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")," now returns also the monitor id.",(0,n.kt)("br",{parentName:"li"}),"Now you quickly determine which monitor the window is displayed."),(0,n.kt)("li",{parentName:"ul"},"New manifest flag - ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#process_name-notes"},"process_name"),".",(0,n.kt)("br",{parentName:"li"}),"using one simple flag in the manifest, app developers can now differentiate their own apps from the rest of the OverwolfBrwoser.exe process rubble in the Task Manager.",(0,n.kt)("br",{parentName:"li"}),'By adding your custom "process_name" to an app manifest, all the processes related to the app ads are now running with the name given them by this flag.'),(0,n.kt)("li",{parentName:"ul"},"Added extra info to the overwolf.settings.hotkeys.onChanged API, so it\u2019s consistent with the overwolf.settings.hotkeys.get function.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/topics/best-practices/enable-dev-tools#supported-features"},"Disabled Dev Tools as a default"),".",(0,n.kt)("br",{parentName:"li"}),"From now on, when clicking Ctrl+Shift+I on a window will NOT open the developer tools. (Even if the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#disable_dt"},"disable_dt")," manifest flag is set to false). The only way to enable it back is by changing a registry key.  "),(0,n.kt)("li",{parentName:"ul"},"Allow pin to the taskbar (and launch the app + app icon):",(0,n.kt)("br",{parentName:"li"}),"Now you can pin an open app to the taskbar, and the app icon will not change to the Overwolf icon, and the pinned app can be launched from the taskbar. (even if OW is closed)"),(0,n.kt)("li",{parentName:"ul"},"Non-logged in app installations - We have reverted the need to be logged into Overwolf in order download and install apps.")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/minecraft"},"Minecraft"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/league-of-legends"},"LOL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/magic-the-gathering-arena"},"MTGA"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"game_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-launchers/league-of-legends"},"LoL Launcher"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"clash")))))))}m.isMDXComponent=!0}}]);