"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3376],{35318:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,c=p["".concat(i,".").concat(u)]||p[u]||f[u]||o;return a?r.createElement(c,l(l({ref:t},s),{},{components:a})):r.createElement(c,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},36571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:162,image:"/img/embed/changelogs.jpg",title:"Version 0.162",sidebar_label:"0.162",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/january/162",id:"api/changelogs/overwolf-platform/2021/january/162",title:"Version 0.162",description:"Note that iterations 160 to 162 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/january/162.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/january",slug:"/api/changelogs/overwolf-platform/2021/january/162",permalink:"/api/changelogs/overwolf-platform/2021/january/162",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/january/162.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"162",image:"/img/embed/changelogs.jpg",title:"Version 0.162",sidebar_label:"0.162",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.165",permalink:"/api/changelogs/overwolf-platform/2021/february/165"},next:{title:"0.159",permalink:"/api/changelogs/overwolf-platform/2020/december/159"}},m={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Note that iterations 160 to 162 were combined into a single iteration.  "),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Allow apps to add/remove their hotkeys right from the app (using a new API) without opening the OW client UI. You can assign only hotkeys that pre-defined in your manifest.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Use the new ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#assignhotkey-callback"},"overwolf.settings.hotkeys.assign()")," and  ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#unassignhotkey-callback"},"overwolf.settings.hotkeys.unassign()")," APIs."))),(0,n.mdx)("li",{parentName:"ul"},"Reddit presents new required param for sharing: added a new share param called ",(0,n.mdx)("a",{parentName:"li",href:"/api/social/reddit#flair-object"},"Flair"),",  and a new function: ",(0,n.mdx)("a",{parentName:"li",href:"/api/social/reddit#getsubredditflairssubredditname-callback"},"overwolf.social.reddit.getSubredditFlairs()"),"."),(0,n.mdx)("li",{parentName:"ul"},"Add to ",(0,n.mdx)("a",{parentName:"li",href:"/api/games#gameinfoupdatedevent-object"},"GameInfoUpdatedEvent"),":  ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"A new info change type: ",(0,n.mdx)("strong",{parentName:"li"},"gameOverlayChanged"),".  Indicates if OW unable to hook input devices when hooking into a game."),(0,n.mdx)("li",{parentName:"ul"},"If true, check if ",(0,n.mdx)("strong",{parentName:"li"},"overlayInputHookError")," is true as well to identify that there is a hooking issue."))),(0,n.mdx)("li",{parentName:"ul"},"Added a new API namespace: ",(0,n.mdx)("a",{parentName:"li",href:"/api/cryptography"},"overwolf.cryptography"),".",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Currently supports two functions: ",(0,n.mdx)("em",{parentName:"li"},"encryptForCurrentUser()")," and ",(0,n.mdx)("em",{parentName:"li"},"decryptForCurrentUser()"),"."))),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("a",{parentName:"li",href:"/api/games/input-tracking#initcallback"},"overwolf.games.inputTracking.init()")," for using ",(0,n.mdx)("em",{parentName:"li"},"getMousePosition")," without pre-register to events.")),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Security patches:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Block browser from creating iframe to ",(0,n.mdx)("em",{parentName:"li"},"extensions://"),"."),(0,n.mdx)("li",{parentName:"ul"},"Block iframes inside apps from creating an iframe to ",(0,n.mdx)("em",{parentName:"li"},"extensions://")," - unless in externally_connectable"),(0,n.mdx)("li",{parentName:"ul"},"Block app windows that run in a remote address - from creating iframes to ",(0,n.mdx)("em",{parentName:"li"},"extensions://")," - unless in ",(0,n.mdx)("em",{parentName:"li"},"externally_connectable"),"."))),(0,n.mdx)("li",{parentName:"ul"},"Update to new OBS (141 with sdk 10.0.19041.1)."),(0,n.mdx)("li",{parentName:"ul"},"Increase ",(0,n.mdx)("inlineCode",{parentName:"li"},"localstorage")," size to ~50MB. Note that localstorage should be used up to 20-25 MB saved data. If you need more than that, you should use other storage."),(0,n.mdx)("li",{parentName:"ul"},"Enable ",(0,n.mdx)("inlineCode",{parentName:"li"},"navigator.storage.persist()")," for ",(0,n.mdx)("em",{parentName:"li"},"extension:","\\")," scheme.")),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"FilePicker with multipleSelection splits files with comma in their names.")),(0,n.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Rates and Reviewes: users can leave reviews and rate your app in Overwolf\u2019s App store, and you can browse these ratings and reviews and reply to users from the dev console.")),(0,n.mdx)("h3",{id:"game-events"},"Game Events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/rocket-league"},"Rocket League"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New events & updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"death"),(0,n.mdx)("li",{parentName:"ul"},"action_points"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/call-of-duty-warzone"},"Call of Duty: Warzone"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New events & updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"game_mode"),(0,n.mdx)("li",{parentName:"ul"},"game_map")))))))}d.isMDXComponent=!0}}]);