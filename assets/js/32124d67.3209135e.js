"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7393],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const l={id:191,image:"/img/embed/changelogs.jpg",title:"Version 0.191",sidebar_label:"0.191",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2022/february/191",id:"api/changelogs/overwolf-platform/2022/february/191",title:"Version 0.191",description:"* This patch includes a bunch of under the hood changes for some upcoming APIs.",source:"@site/../pages/api/changelogs/overwolf-platform/2022/february/191.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/february",slug:"/api/changelogs/overwolf-platform/2022/february/191",permalink:"/api/changelogs/overwolf-platform/2022/february/191",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/february/191.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721647288,formattedLastUpdatedAt:"Jul 22, 2024",frontMatter:{id:"191",image:"/img/embed/changelogs.jpg",title:"Version 0.191",sidebar_label:"0.191",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.194",permalink:"/api/changelogs/overwolf-platform/2022/march/194"},next:{title:"0.190",permalink:"/api/changelogs/overwolf-platform/2022/january/190"}},p={},s=[{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3},{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This patch includes a bunch of under the hood changes for some upcoming APIs.")),(0,r.kt)("h3",{id:"dev-console"},"Dev Console"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@overwolf/ow-cli/",target:"_blank"},"CLI")," - A new tool to help you manage your Overwolf app")),(0,r.kt)("h3",{id:"game-events"},"Game events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/minecraft"},"Minecraft")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New info_update",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"counters - ping"),(0,r.kt)("li",{parentName:"ul"},"player_X - list of active players in the game"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/rainbow-six-siege"},"Rainbow Six Siege")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add player_id in roster - ",(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rainbow-six-siege#roster"},"here"))))),(0,r.kt)("div",null," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/halo-infinite"},"Halo Infinite"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add new info updates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"playlist"),(0,r.kt)("li",{parentName:"ul"},"game_type"),(0,r.kt)("li",{parentName:"ul"},"game_mode")))))),(0,r.kt)("h3",{id:"docs"},"Docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No changes.")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/utils"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.utils.checkForClientUpdates()"))," - This new method can be used to check whether an Overwolf update is available.",(0,r.kt)("br",{parentName:"li"}),"Example of the returned callback: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  channel: "Developers"\n  currentVersion: "0.191.0.4"\n  hasUpdate: false\n  newVersion: null\n  success: true\n  updatesDisabled: false\n')),"   Please note that Overwolf will stop displaying the overlay in-game if it was updated while the game was running."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/windows"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.windows.getWindow()"))," - This methods returns\nthe WindowInfo object for any window that has been called with ",(0,r.kt)("inlineCode",{parentName:"li"},"overwolf.windows.obtainDeclaredWindow"),". It's better to use this method instead of using\n",(0,r.kt)("inlineCode",{parentName:"li"},"obtaintDeclaredWindow")," if the the window you are refering to has already\nbeen declared.")),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("p",null,"New ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/manifest#auto_relaunch_on_crash"},(0,r.kt)("inlineCode",{parentName:"a"},"auto_relaunch_on_crash")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Relaunches an app if it crashes."),(0,r.kt)("li",{parentName:"ul"},"If the app crashes consecutively more than 5 times, we will stop trying to relaunch it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/manifest#open_dev_tools"},(0,r.kt)("inlineCode",{parentName:"a"},"open_dev_tools")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used for debugging, automatically opens the dev tools when an app window opens. ")))),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwolf.media.videos.createVideoCompositionFiles()")," - Fixed a possible audio\nsyncing issue when composing more than 2 files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwolf.media.videos.createVideoComposition()")," - Fixed a possible error when\nhaving more than two segments."),(0,r.kt)("li",{parentName:"ul"},'Reduced internal cache when checking for a possible app update when using\n"test" channels. This will hopefully reduce the time frame from the moment a developer updates\nthe "test" channel until the update reaches the users.'),(0,r.kt)("li",{parentName:"ul"},"Fixed a descrepency in the storage paths when an app's display name was added."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where non-developers were able to load extensions as unpacked.")))}m.isMDXComponent=!0}}]);