"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3901],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const l={id:162,image:"/img/embed/changelogs.jpg",title:"Version 0.162",sidebar_label:"0.162",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2021/january/162",id:"api/changelogs/overwolf-platform/2021/january/162",title:"Version 0.162",description:"Note that iterations 160 to 162 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2021/january/162.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/january",slug:"/api/changelogs/overwolf-platform/2021/january/162",permalink:"/api/changelogs/overwolf-platform/2021/january/162",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/january/162.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1715864739,formattedLastUpdatedAt:"May 16, 2024",frontMatter:{id:"162",image:"/img/embed/changelogs.jpg",title:"Version 0.162",sidebar_label:"0.162",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.165",permalink:"/api/changelogs/overwolf-platform/2021/february/165"},next:{title:"0.159",permalink:"/api/changelogs/overwolf-platform/2020/december/159"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Note that iterations 160 to 162 were combined into a single iteration.  "),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allow apps to add/remove their hotkeys right from the app (using a new API) without opening the OW client UI. You can assign only hotkeys that pre-defined in your manifest.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use the new ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#assignhotkey-callback"},"overwolf.settings.hotkeys.assign()")," and  ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#unassignhotkey-callback"},"overwolf.settings.hotkeys.unassign()")," APIs."))),(0,n.kt)("li",{parentName:"ul"},"Reddit presents new required param for sharing: added a new share param called ",(0,n.kt)("a",{parentName:"li",href:"/api/social/reddit#flair-object"},"Flair"),",  and a new function: ",(0,n.kt)("a",{parentName:"li",href:"/api/social/reddit#getsubredditflairssubredditname-callback"},"overwolf.social.reddit.getSubredditFlairs()"),"."),(0,n.kt)("li",{parentName:"ul"},"Add to ",(0,n.kt)("a",{parentName:"li",href:"/api/games#gameinfoupdatedevent-object"},"GameInfoUpdatedEvent"),":  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A new info change type: ",(0,n.kt)("strong",{parentName:"li"},"gameOverlayChanged"),".  Indicates if OW unable to hook input devices when hooking into a game."),(0,n.kt)("li",{parentName:"ul"},"If true, check if ",(0,n.kt)("strong",{parentName:"li"},"overlayInputHookError")," is true as well to identify that there is a hooking issue."))),(0,n.kt)("li",{parentName:"ul"},"Added a new API namespace: ",(0,n.kt)("a",{parentName:"li",href:"/api/cryptography"},"overwolf.cryptography"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Currently supports two functions: ",(0,n.kt)("em",{parentName:"li"},"encryptForCurrentUser()")," and ",(0,n.kt)("em",{parentName:"li"},"decryptForCurrentUser()"),"."))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"/api/games/input-tracking#initcallback"},"overwolf.games.inputTracking.init()")," for using ",(0,n.kt)("em",{parentName:"li"},"getMousePosition")," without pre-register to events.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Security patches:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Block browser from creating iframe to ",(0,n.kt)("em",{parentName:"li"},"extensions://"),"."),(0,n.kt)("li",{parentName:"ul"},"Block iframes inside apps from creating an iframe to ",(0,n.kt)("em",{parentName:"li"},"extensions://")," - unless in externally_connectable"),(0,n.kt)("li",{parentName:"ul"},"Block app windows that run in a remote address - from creating iframes to ",(0,n.kt)("em",{parentName:"li"},"extensions://")," - unless in ",(0,n.kt)("em",{parentName:"li"},"externally_connectable"),"."))),(0,n.kt)("li",{parentName:"ul"},"Update to new OBS (141 with sdk 10.0.19041.1)."),(0,n.kt)("li",{parentName:"ul"},"Increase ",(0,n.kt)("inlineCode",{parentName:"li"},"localstorage")," size to ~50MB. Note that localstorage should be used up to 20-25 MB saved data. If you need more than that, you should use other storage."),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("inlineCode",{parentName:"li"},"navigator.storage.persist()")," for ",(0,n.kt)("em",{parentName:"li"},"extension:","\\")," scheme.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FilePicker with multipleSelection splits files with comma in their names.")),(0,n.kt)("h3",{id:"dev-console"},"Dev Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rates and Reviewes: users can leave reviews and rate your app in Overwolf\u2019s App store, and you can browse these ratings and reviews and reply to users from the dev console.")),(0,n.kt)("h3",{id:"game-events"},"Game Events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rocket-league"},"Rocket League"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New events & updates:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"death"),(0,n.kt)("li",{parentName:"ul"},"action_points"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/call-of-duty-warzone-caldera"},"Call of Duty: Warzone"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New events & updates:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"game_mode"),(0,n.kt)("li",{parentName:"ul"},"game_map")))))))}m.isMDXComponent=!0}}]);