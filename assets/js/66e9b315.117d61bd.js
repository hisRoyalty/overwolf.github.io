"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1733],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,c=d["".concat(m,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"minecraft",image:"/img/embed/games/minecraft.jpg",title:"Minecraft Game events",hide_title:!0,sidebar_label:"Minecraft",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,o={unversionedId:"api/live-game-data/supported-games/minecraft",id:"api/live-game-data/supported-games/minecraft",title:"Minecraft Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/minecraft.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/minecraft",permalink:"/api/live-game-data/supported-games/minecraft",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/minecraft.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719492831,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:0,frontMatter:{id:"minecraft",image:"/img/embed/games/minecraft.jpg",title:"Minecraft Game events",hide_title:!0,sidebar_label:"Minecraft",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Manor Lords",permalink:"/api/live-game-data/supported-games/manor-lords"},next:{title:"New World",permalink:"/api/live-game-data/supported-games/new-world"}},m={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>name</em> note",id:"name-note",level:4},{value:"<em>player_X</em> note",id:"player_x-note",level:4},{value:"<em>mc_version</em> note",id:"mc_version-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>server</em> note",id:"server-note",level:4},{value:"note regarding statistics",id:"note-regarding-statistics",level:4},{value:"<em>general_stats</em> note",id:"general_stats-note",level:4},{value:"<em>items_stats</em> note",id:"items_stats-note",level:4},{value:"<em>mobs_stats</em> note",id:"mobs_stats-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<em>facing</em> note",id:"facing-note",level:4},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>chat</em> note",id:"chat-note",level:4},{value:"<code>game_info</code>",id:"game_info-1",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>scene</em> note",id:"scene-note-1",level:4},{value:"<em>name</em> note",id:"name-note-1",level:4},{value:"<code>mods</code>",id:"mods",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>addon_xxx</em> note",id:"addon_xxx-note",level:4},{value:"<code>counters</code>",id:"counters",level:2},{value:"Info Updates",id:"info-updates-5",level:3},{value:"<em>ping</em> note",id:"ping-note",level:4}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},d=s("GameInfo"),u=s("MatchOnly"),k={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Minecraft, Minecraft API, SDK for Minecraft, Minecraft SDK"})),(0,l.kt)(d,{gameId:8032,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Minecraft game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mods"},"mods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#counters"},"counters"))),(0,l.kt)("h2",{id:"game-event-status"},"Game event status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,l.kt)("p",null,"Check the current game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternatively, you can easily check that status from your app itself, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GEP supports the following Minecraft versions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Supported vanila versions:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1.12.2 - support all events except chat, statistics, scene and player_x"),(0,l.kt)("li",{parentName:"ul"},"1.16 - 1.16.1 - support all events except chat and statistics"),(0,l.kt)("li",{parentName:"ul"},"1.16.2 - support all events except chat"),(0,l.kt)("li",{parentName:"ul"},"1.17 - 1.21.0 - full support"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Supported mod-loaders:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Forge 36.0.0 - 36.2.39 "),(0,l.kt)("li",{parentName:"ul"},"Forge 39.0.0 - 48.0.6 "),(0,l.kt)("li",{parentName:"ul"},"Fabric 0.14.0 - 0.14.22"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"addons (mods) event is supported from Minecraft versions 1.8 to 1.19 for both Forge and Fabric"))),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the local player."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#name-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_X"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of players in the current game."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_X-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"191.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mc_version"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current Minecraft version played."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#mc_version-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"205.0")))),(0,l.kt)("h4",{id:"scene-note"},(0,l.kt)("em",{parentName:"h4"},"scene")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}\n{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"name-note"},(0,l.kt)("em",{parentName:"h4"},"name")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"player_x-note"},(0,l.kt)("em",{parentName:"h4"},"player_X")," note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A full players list is sent each time a player gets in or out of the game"),(0,l.kt)("li",{parentName:"ul"},"The position of each player in the list can vary from time to time "),(0,l.kt)("li",{parentName:"ul"},'In case the "players visibility toggle" is turned on, this info update will not send values')),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"player_3","value":"Nor555"}\n')),(0,l.kt)("h4",{id:"mc_version-note"},(0,l.kt)("em",{parentName:"h4"},"mc_version")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"mc_version":"1.18.2"}},"feature":"game_info"}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The full id of the server."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#server-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"general_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"All of the current general statistics."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#general_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"items_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"All of the current item statistics."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#items_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobs_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"All of the current mob statistics."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#mobs_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current player's location in the game."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#location-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"157.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"facing"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current direction the player is facing."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#facing-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"157.0")))),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"When loading into a map."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"When disconnecting from map."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chat"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"When the chat window is updated."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#chat-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"187.0")))),(0,l.kt)("h4",{id:"server-note"},(0,l.kt)("em",{parentName:"h4"},"server")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"server":"Play.datblock.com"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"note-regarding-statistics"},"note regarding statistics"),(0,l.kt)("p",null,"To activate and extract the data out of the statistics you must open the main menu (ESC) and click on the statistics."),(0,l.kt)("h4",{id:"general_stats-note"},(0,l.kt)("em",{parentName:"h4"},"general_stats")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "info": {\n        "match_info": {\n            "general_stats": "[ {\n                "name": "damage_absorbed",\n                "value": "0"\n            },\n            {\n                "name": "fall_one_cm",\n                "value": "0 cm"\n            },\n            {\n                "name": "walk_one_cm",\n                "value": "79.65 m"\n            },\n...\n            {"name":"enchant_item","value":"0"}]"}},\n                "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"items_stats-note"},(0,l.kt)("em",{parentName:"h4"},"items_stats")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {"info":\n        {"match_info":{"items_stats":"[\n            {"name":"rass","value":"4","stat_type":"stat_type.minecraft.mined"},\n            {"name":"ead_bush","value":"31","stat_type":"stat_type.minecraft.mined"},\n            {"name":"ft.wheat_seeds","value":"6","stat_type":"stat_type.minecraft.picked_up"},\n            {"name":"ft.beef","value":"1","stat_type":"stat_type.minecraft.picked_up"},\n            {"name":"ft.leather","value":"1","stat_type":"stat_type.minecraft.picked_up"}]"}},\n            "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"mobs_stats-note"},(0,l.kt)("em",{parentName:"h4"},"mobs_stats")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"mobs_stats":"[{"name":"cow","value":"1","stat_type":"stat_type.minecraft.killed"}]"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"location-note"},(0,l.kt)("em",{parentName:"h4"},"location")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"location":"{"x":-289.403,"y":60.9237,"z":474.063}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-289.669,"y":60.4237,"z":475.049}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-290.248,"y":59.9237,"z":476.861}"}},"feature":"match_info"}\n{"info":{"match_info":{"location":"{"x":-290.754,"y":59.4237,"z":478.788}"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"facing-note"},(0,l.kt)("em",{parentName:"h4"},"facing")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"facing":"{"x":146.851,"y":1.34979}"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":"null"}]}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"null"}]}\n')),(0,l.kt)("h4",{id:"chat-note"},(0,l.kt)("em",{parentName:"h4"},"chat")," note"),(0,l.kt)(u,{mdxType:"MatchOnly"}),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"chat","data":"\xa77overwolfqa\xa77: hello"}]}\n')),(0,l.kt)("h2",{id:"game_info-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the local player."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#name-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"153.0")))),(0,l.kt)("h4",{id:"scene-note-1"},(0,l.kt)("em",{parentName:"h4"},"scene")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}\n{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"name-note-1"},(0,l.kt)("em",{parentName:"h4"},"name")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}\n')),(0,l.kt)("h2",{id:"mods"},(0,l.kt)("inlineCode",{parentName:"h2"},"mods")),(0,l.kt)("h3",{id:"info-updates-4"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addon_xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"mods"),(0,l.kt)("td",{parentName:"tr",align:null},"Addons list used by the player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#addon_xxx-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"addon_xxx-note"},(0,l.kt)("em",{parentName:"h4"},"addon_xxx")," note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"addons (mods) supported from Minecraft versions 1.8 to 1.18 for both Forge and Fabric ")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"mods":{"addon_153":"{"name":"xpbook","display_name":"XP Tome","version":"2.1.3"}"}},"feature":"mods"}\n')),(0,l.kt)("h2",{id:"counters"},(0,l.kt)("inlineCode",{parentName:"h2"},"counters")),(0,l.kt)("h3",{id:"info-updates-5"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ping"),(0,l.kt)("td",{parentName:"tr",align:null},"performance"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency changes of the local player in the current game."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#ping-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"191.0")))),(0,l.kt)("h4",{id:"ping-note"},(0,l.kt)("em",{parentName:"h4"},"ping")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"counters","category":"performance","key":"ping","value":"157"}\n')))}c.isMDXComponent=!0}}]);