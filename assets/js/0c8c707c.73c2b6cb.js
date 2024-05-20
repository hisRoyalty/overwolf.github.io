"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6309],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:"live-game-data",image:"/img/embed/api-docs.jpg",title:"Live Game Data (GEP)",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"general"}}},l=void 0,i={unversionedId:"api/live-game-data/live-game-data",id:"api/live-game-data/live-game-data",title:"Live Game Data (GEP)",description:"The Overwolf Game Events Provider (GEP) is a part of the Overwolf API, capable of providing",source:"@site/../pages/api/live-game-data/live-game-data.mdx",sourceDirName:"api/live-game-data",slug:"/api/live-game-data/",permalink:"/api/live-game-data/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/live-game-data.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716188573,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"live-game-data",image:"/img/embed/api-docs.jpg",title:"Live Game Data (GEP)",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"general"}}},sidebar:"api",previous:{title:"Subscriptions API",permalink:"/api/general/subscriptions-api/"},next:{title:"Apex Legends",permalink:"/api/live-game-data/supported-games/apex-legends"}},s={},p=[{value:"Game Events",id:"game-events",level:2},{value:"Game Info",id:"game-info",level:2},{value:"Game Info Resetting",id:"game-info-resetting",level:3},{value:"Working with Game Data",id:"working-with-game-data",level:2},{value:"Game Features",id:"game-features",level:3},{value:"Set Required Features",id:"set-required-features",level:3},{value:"Listen for new Game Events",id:"listen-for-new-game-events",level:3},{value:"Obtain current Game Info",id:"obtain-current-game-info",level:3},{value:"Listen for new Game Info updates",id:"listen-for-new-game-info-updates",level:3},{value:"Event Status",id:"event-status",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("SkipMe"),d=m("Tabs"),c=m("TabItem"),f={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Overwolf Game Events Provider")," (",(0,r.kt)("strong",{parentName:"p"},"GEP"),") is a part of the Overwolf API, capable of providing\nApps with Live Game Data as it changes within a supported game."),(0,r.kt)("p",null,"This is mainly done using the following two forms of ",(0,r.kt)("strong",{parentName:"p"},"Game Data")," (also sometimes confusingly referred to as ",(0,r.kt)("strong",{parentName:"p"},"Game Events"),"):"),(0,r.kt)("admonition",{title:"Overwolf Electron support",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"GEP for ",(0,r.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron")," are currently being rolled out over\ntime. If you would like to use events for any specific game, please ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"let us know"),"\nand we will adjust its rollout accordingly.")),(0,r.kt)("h2",{id:"game-events"},"Game Events"),(0,r.kt)("p",null,"The simpler of the two, Game Events fire when a fleeting occurance of interest happens within\nthe game. When relevant, they may also contain specific data, further describing\nthe event."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Game Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='A player was just killed, with the username \"TestUser\"'",title:"'A",player:!0,was:!0,just:!0,"killed,":!0,with:!0,the:!0,username:!0,'"TestUser"\'':!0},'{\n  "name": "player_killed",\n  "data": {\n    "username": "TestUser"\n  }\n}\n'))),(0,r.kt)("h2",{id:"game-info"},"Game Info"),(0,r.kt)("p",null,"Game Info describes persistent game data, which updates as the game does. This can\nbe anything from ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," data, to details of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),", and more."),(0,r.kt)("p",null,"Game Info is stored in a dictionary, which can be obtained at any time using the API. On top of that,\nwhenever a relevant Game Info item ",(0,r.kt)("strong",{parentName:"p"},"changes"),", an ",(0,r.kt)("a",{parentName:"p",href:"#listen-for-new-game-info-updates"},(0,r.kt)("inlineCode",{parentName:"a"},"infoUpdated"))," event is fired,\ncontaining the new Game Info data."),(0,r.kt)("h3",{id:"game-info-resetting"},"Game Info Resetting"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#listen-for-new-game-info-updates"},(0,r.kt)("inlineCode",{parentName:"a"},"infoUpdated"))," events only fire when the Game Info value ",(0,r.kt)("strong",{parentName:"p"},"changes"),".\nThis means that, in some cases, they could become unreliable for detecting the right\ngame states, since the game's new state may not have ",(0,r.kt)("strong",{parentName:"p"},"changed")," compared to what it was before."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Game Info cancellation"),(0,r.kt)("p",null,"Assume that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"score")," Game Info. This value is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," at the beginning\nof every match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='A match just started, score was set to \"0\"'",title:"'A",match:!0,just:!0,"started,":!0,score:!0,was:!0,set:!0,to:!0,'"0"\'':!0},'...\n  "score": 0\n...\n')),(0,r.kt)("p",null,"Now, it could be possible that a match will end with the ",(0,r.kt)("inlineCode",{parentName:"p"},"score")," still being set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nAs a result, when the next match starts, the ",(0,r.kt)("inlineCode",{parentName:"p"},"score")," will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", and will not fire an\n",(0,r.kt)("a",{parentName:"p",href:"#listen-for-new-game-info-updates"},(0,r.kt)("inlineCode",{parentName:"a"},"infoUpdated"))," event.")),(0,r.kt)("p",null,"To stop this from happening, Game Info resetting exists."),(0,r.kt)("p",null,'More specifically - when the data is "invalidated", it will be set to an illegal, consistent, meaningless value. That way,\nthe next time that the data changes to a legal value, it will inherently be different\nfrom the former value, and an ',(0,r.kt)("a",{parentName:"p",href:"#listen-for-new-game-info-updates"},(0,r.kt)("inlineCode",{parentName:"a"},"infoUpdated"))," event will fire."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Game Info reset"),(0,r.kt)("p",null,"To stop the issue from the last example from happening, when the match ends,\nwe set ",(0,r.kt)("inlineCode",{parentName:"p"},"score"),", and any other match-specific data, to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='First match just ended, score is set to \"null\"'",title:"'First",match:!0,just:!0,"ended,":!0,score:!0,is:!0,set:!0,to:!0,'"null"\'':!0},'...\n  "score": null\n...\n')),(0,r.kt)("p",null,"Now, when the next match starts, score will change from ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", causing an\n",(0,r.kt)("a",{parentName:"p",href:"#listen-for-new-game-info-updates"},(0,r.kt)("inlineCode",{parentName:"a"},"infoUpdated"))," event to properly fire."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='Second match just started, score is set to \"0\"'",title:"'Second",match:!0,just:!0,"started,":!0,score:!0,is:!0,set:!0,to:!0,'"0"\'':!0},'...\n  "score": 0\n...\n'))),(0,r.kt)("h2",{id:"working-with-game-data"},"Working with Game Data"),(0,r.kt)("p",null,"In order to streamline utilize the aforementioned concepts, we have created a few\nutility APIs, which every Overwolf GEP implementation is built around."),(0,r.kt)("h3",{id:"game-features"},"Game Features"),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},'Tag as "not relevant for sdk games"'),(0,r.kt)("p",null,"Often, many separate Game Events and Game Info items may exist, even though\nthey all relate to the same general functionality (hence ",(0,r.kt)("inlineCode",{parentName:"p"},"Feature"),") in the game."),(0,r.kt)("p",null,"When interacting with the Overwolf GEP API, Game Features will often be used instead\nof the individual Game Event/Game Info item names (for example, when ",(0,r.kt)("a",{parentName:"p",href:"#set-required-features"},"setting the required Game Features"),")"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Game Feature"),(0,r.kt)("p",null,"For example, one game's ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," may have many different game data items:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Match settings"),(0,r.kt)("li",{parentName:"ul"},"Match score"),(0,r.kt)("li",{parentName:"ul"},"Match start/end events"),(0,r.kt)("li",{parentName:"ul"},"Etc.")),(0,r.kt)("p",null,"These would often make more sense as several different Game Events & Game Info items,\nto make sure that, for example, the currently selected ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),', does not behave as\n"updated" every single time that the ',(0,r.kt)("inlineCode",{parentName:"p"},"score")," for one of the teams does."),(0,r.kt)("p",null,"However, the game data itself, does make much more sense when grouped, and is often\nused together. As such, ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," would be defined as a ",(0,r.kt)("strong",{parentName:"p"},"Game Feature")," when communicating\nwith the Overwolf GEP, grouping within it the different Game Data it refers to.")),(0,r.kt)("h3",{id:"set-required-features"},"Set Required Features"),(0,r.kt)("p",null,"By default, the Overwolf GEP does not actually listen for any changes in the game.\nInstead, different ",(0,r.kt)("a",{parentName:"p",href:"#game-features"},"Game Features")," have to be specifically subscribed to,\nand only then will they actually work/fire."),(0,r.kt)("p",null,"This has a few perks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Direct feedback for the App as to what it can expect in terms of data (",(0,r.kt)("em",{parentName:"li"},"under some circumstances, some Game Features ",(0,r.kt)("a",{parentName:"em",href:"#event-status"},"may become temporarily unavailable")),")."),(0,r.kt)("li",{parentName:"ul"},"Only required Game Features get fired."),(0,r.kt)("li",{parentName:"ul"},"GEP will not even need to run in games where no App is using it.")),(0,r.kt)("p",null,"However, it does also mean that you ",(0,r.kt)("strong",{parentName:"p"},"must")," set the required Game Features for\nyour App before GEP beings to work (ideally, as soon as the game itself launches)."),(0,r.kt)("admonition",{title:"Run order matters!",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"In some games, the longer it takes between starting the game and when GEP is registered, the\nhigher the odds of data issues (missing events, unreliable data, etc) become","*","."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"*"," This is especially critical if the App was started in the middle of a game session.\nIt is recommended that you show a relevant indication to your users in those cases."))),(0,r.kt)("p",null,"To set the required features, you must call the relevant API method. More specifically:"),(0,r.kt)(d,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(c,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to Game Data on the Overwolf Platform,\nsimply call","*"," ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#setrequiredfeaturesfeatures-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.setRequiredFeatures()")),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," Do note that - as mentioned in the method's documentation - at least currently,\nthis call may fail, even if the game was already started, and it should be retried\nseveral times until it succeeds (or runs out of attempts)."))),(0,r.kt)(c,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to Game Data on ",(0,r.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron"),",\nsimply call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.packages.gep.setRequiredFeatures(features);\n")),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},"Wire the above to the electron gep docs once ready."))),(0,r.kt)("h3",{id:"listen-for-new-game-events"},"Listen for new Game Events"),(0,r.kt)("p",null,"To subscribe to new Game Events, you must add a listener to the relevant API Event. More specifically:"),(0,r.kt)(d,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(c,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to new Game Events on the Overwolf Platform,\nsimply add a listener to ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#onnewevents"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.onNewEvents")),".")),(0,r.kt)(c,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to new Game Events on ",(0,r.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron"),",\nsimply call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.packages.gep.on('new-game-event', (e, gameId, ...args) => {\n  // your code here\n});\n")),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},"Wire the above to the electron gep docs once ready."))),(0,r.kt)("h3",{id:"obtain-current-game-info"},"Obtain current Game Info"),(0,r.kt)("p",null,"To obtain the current Game Info, you must call the relevant API method. More specifically:"),(0,r.kt)(d,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(c,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to obtain the current state of the Game Info on the Overwolf Platform,\nsimply add a listener to ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#getinfocallback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.getInfo()")),".")),(0,r.kt)(c,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to obtain the current state of the Game Info on ",(0,r.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron"),",\nsimply call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.packages.gep.getInfo(gameId);\n")),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},"Wire the above to the electron gep docs once ready."))),(0,r.kt)("h3",{id:"listen-for-new-game-info-updates"},"Listen for new Game Info updates"),(0,r.kt)("p",null,"To subscribe to new Game Info updates, you must add a listener to the relevant API Event. More specifically:"),(0,r.kt)(d,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(c,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to new Game Info updates the Overwolf Platform,\nsimply add a listener to ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#oninfoupdates2"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.onInfoUpdates2")),".")),(0,r.kt)(c,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to subscribe to new Game Info updates on ",(0,r.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"ow-electron"),",\nsimply call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.overwolf.packages.gep.on('new-info-update', (e, gameId, ...args) => {\n  // your code here\n});\n")),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},"Wire the above to the electron gep docs once ready."))),(0,r.kt)(u,{type:"TODO",mdxType:"SkipMe"},"### Listen for GEP Errors"),(0,r.kt)("h2",{id:"event-status"},"Event Status"),(0,r.kt)("p",null,"Some events may ocassionally become unavailable. This can be caused by several things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recent game update causing issues"),(0,r.kt)("li",{parentName:"ul"},"A request by the relevant game studio to disable this event"),(0,r.kt)("li",{parentName:"ul"},"Potential discrepencies/issues found with the events' data/reliability"),(0,r.kt)("li",{parentName:"ul"},"Etc")),(0,r.kt)("p",null,'Because the Overwolf GEP integration works across many moving parts like that,\ntemporary unavailabilty is not a question of "if?", but rather of "when, and for how long?".'),(0,r.kt)("p",null,'However, we have created several different mitigations for this, one of which is the\n"Event Status Endpoints". These are public API endpoints supplied by Overwolf,\ndetailing the current uptime status of individual ',(0,r.kt)("a",{parentName:"p",href:"#game-features"},"Game Features"),"\nper game."),(0,r.kt)("p",null,"Using these endpoints, it is possible for your app to react in real time to the\nstatus of different events, be it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toggle specific app functionality"),(0,r.kt)("li",{parentName:"ul"},"Toggle certain less reliable/desirable fallback logic"),(0,r.kt)("li",{parentName:"ul"},"Provide users an indication of the potential issues")),(0,r.kt)("p",null,"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"Verifying events for your app"),"."))}h.isMDXComponent=!0}}]);