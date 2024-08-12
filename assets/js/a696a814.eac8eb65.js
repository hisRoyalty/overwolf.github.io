"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4810],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=o(a),k=l,c=s["".concat(m,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(25773),l=(a(27378),a(35318));const r={id:"diablo-2-resurrected",image:"/img/embed/games/diablo-2-resurrected.jpg",title:"Diablo 2 Game events",hide_title:!0,sidebar_label:"Diablo 2",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,p={unversionedId:"api/live-game-data/supported-games/diablo-2-resurrected",id:"api/live-game-data/supported-games/diablo-2-resurrected",title:"Diablo 2 Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/diablo-2-resurrected.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/diablo-2-resurrected",permalink:"/api/live-game-data/supported-games/diablo-2-resurrected",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/diablo-2-resurrected.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:0,frontMatter:{id:"diablo-2-resurrected",image:"/img/embed/games/diablo-2-resurrected.jpg",title:"Diablo 2 Game events",hide_title:!0,sidebar_label:"Diablo 2",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Dark and Darker",permalink:"/api/live-game-data/supported-games/dark-and-darker"},next:{title:"Diablo 4",permalink:"/api/live-game-data/supported-games/diablo-4"}},m={},o=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>player_level</em> note",id:"player_level-note",level:4},{value:"<em>player_class</em> note",id:"player_class-note",level:4},{value:"<em>player_experience</em> note",id:"player_experience-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>act</em> note",id:"act-note",level:4},{value:"<em>item_x</em> note",id:"item_x-note",level:4},{value:"<em>character_name</em> note",id:"character_name-note",level:4},{value:"<em>player_stats</em> note",id:"player_stats-note",level:4},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>player_spawn</em> note",id:"player_spawn-note",level:4},{value:"<em>player_died</em> note",id:"player_died-note",level:4},{value:"<em>dropped_item</em> note",id:"dropped_item-note",level:4}],d=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var s;const u={toc:o};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Diablo 2 Resurrected, Diablo 2 Resurrected API, SDK for Diablo 2 Resurrected, Diablo 2 Resurrected SDK"})),(0,l.kt)(d,{gameId:21848,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Diablo 2 game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,l.kt)("h2",{id:"game-events-status"},"Game events status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,l.kt)("p",null,"Check ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_level"),(0,l.kt)("td",{parentName:"tr",align:null},"me"),(0,l.kt)("td",{parentName:"tr",align:null},"The current level of the player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_level-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_class"),(0,l.kt)("td",{parentName:"tr",align:null},"me"),(0,l.kt)("td",{parentName:"tr",align:null},"The current class of the player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_class-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_experience"),(0,l.kt)("td",{parentName:"tr",align:null},"me"),(0,l.kt)("td",{parentName:"tr",align:null},"The current experience of the player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_experience-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")))),(0,l.kt)("h4",{id:"player_level-note"},(0,l.kt)("em",{parentName:"h4"},"player_level")," note"),(0,l.kt)("p",null,"This API will be deprecated since the data is included in player_stats API - see ",(0,l.kt)("a",{parentName:"p",href:"#player_stats-note"},"here")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_level","value":2}\n')),(0,l.kt)("h4",{id:"player_class-note"},(0,l.kt)("em",{parentName:"h4"},"player_class")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_class","value":"DRUID"}\n')),(0,l.kt)("h4",{id:"player_experience-note"},(0,l.kt)("em",{parentName:"h4"},"player_experience")," note"),(0,l.kt)("p",null,"This API will be deprecated since the data is included in player_stats API - see ",(0,l.kt)("a",{parentName:"p",href:"#player_stats-note"},"here")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_experience","value":1101}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"act"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current played act"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#act-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item_x"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"List of owned items"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#item_x-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"character_name"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the character"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#character_name-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"205.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"List of statistics about the local player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"205.0")))),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"In the beginning of each match"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"At the end of each match"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_spawn"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"In the beginning of each match and respawn after teadh"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_spawn-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_died"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Once the player died"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_died-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"204.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropped_item"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of items dropped on the ground"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#dropped_item-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"210.0")))),(0,l.kt)("h4",{id:"act-note"},(0,l.kt)("em",{parentName:"h4"},"act")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"act","value":1}\n')),(0,l.kt)("h4",{id:"item_x-note"},(0,l.kt)("em",{parentName:"h4"},"item_x")," note"),(0,l.kt)("p",null,"The possible values for inv_page parameter are: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"INVENTORY - if the item is in your inventory "),(0,l.kt)("li",{parentName:"ul"},"NULL - if the item is currently equipped or in the belt "),(0,l.kt)("li",{parentName:"ul"},"STASH - if the item is in the stash")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"item_19","value":"{"id":823142142,"name":"Cap","quality":"LOW","is_identified":"1","req_lvl":0,"req_str":0,"req_dex":0,"low_quality":"Cracked","body_loc":"NONE","inv_page":"INVENTORY","parent_id":0,"stats" : [{"idx" : "31","idx_name" : "armorclass","sub_idx" : "0","sub_idx_name" : "","value" : "3"},{"idx" : "73","idx_name" : "maxdurability","sub_idx" : "0","sub_idx_name" : "","value" : "3"}]}"}\n')),(0,l.kt)("h4",{id:"character_name-note"},(0,l.kt)("em",{parentName:"h4"},"character_name")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"character_name":"Bla"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"player_stats-note"},(0,l.kt)("em",{parentName:"h4"},"player_stats")," note"),(0,l.kt)("p",null,"Data Example:\nList of items: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"max hp"),(0,l.kt)("li",{parentName:"ul"},"current hp"),(0,l.kt)("li",{parentName:"ul"},"max mana"),(0,l.kt)("li",{parentName:"ul"},"current mana"),(0,l.kt)("li",{parentName:"ul"},"strenght "),(0,l.kt)("li",{parentName:"ul"},"energy "),(0,l.kt)("li",{parentName:"ul"},"dexterity"),(0,l.kt)("li",{parentName:"ul"},"visibility"),(0,l.kt)("li",{parentName:"ul"},"experience"),(0,l.kt)("li",{parentName:"ul"},"level")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"player_stats":"{\\"max_hp\\":69,\\"current_hp\\":55,\\"max_mana\\":46,\\"current_mana\\":46,\\"strength\\":36,\\"energy\\":26,\\"dexterity\\":26,\\"vitality\\":27,\\"experience\\":43565,\\"level\\":8}"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,l.kt)("h4",{id:"player_spawn-note"},(0,l.kt)("em",{parentName:"h4"},"player_spawn")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"player_spawn","data":""}]}\n')),(0,l.kt)("h4",{id:"player_died-note"},(0,l.kt)("em",{parentName:"h4"},"player_died")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"player_died","data":""}]}\n')),(0,l.kt)("h4",{id:"dropped_item-note"},(0,l.kt)("em",{parentName:"h4"},"dropped_item")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"dropped_item","data":"{\\"id\\":119,\\"name\\":\\"Short Staff\\",\\"quality\\":\\"NORMAL\\",\\"is_identified\\":\\"1\\",\\"req_lvl\\":0,\\"req_str\\":0,\\"req_dex\\":0,\\"body_loc\\":\\"NONE\\",\\"inv_page\\":\\"ONGROUND\\",\\"parent_id\\":0,\\"stats\\" : [{\\"idx\\" : \\"23\\",\\"idx_name\\" : \\"secondary_mindamage\\",\\"sub_idx\\" : \\"0\\",\\"sub_idx_name\\" : \\"\\",\\"value\\" : \\"1\\"},{\\"idx\\" : \\"24\\",\\"idx_name\\" : \\"secondary_maxdamage\\",\\"sub_idx\\" : \\"0\\",\\"sub_idx_name\\" : \\"\\",\\"value\\" : \\"5\\"},{\\"idx\\" : \\"68\\",\\"idx_name\\" : \\"attackrate\\",\\"sub_idx\\" : \\"0\\",\\"sub_idx_name\\" : \\"\\",\\"value\\" : \\"10\\"},{\\"idx\\" : \\"72\\",\\"idx_name\\" : \\"durability\\",\\"sub_idx\\" : \\"0\\",\\"sub_idx_name\\" : \\"\\",\\"value\\" : \\"16\\"},{\\"idx\\" : \\"73\\",\\"idx_name\\" : \\"maxdurability\\",\\"sub_idx\\" : \\"0\\",\\"sub_idx_name\\" : \\"\\",\\"value\\" : \\"20\\"}]}"}]}\n')))}k.isMDXComponent=!0}}]);