"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7172],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,N=d["".concat(o,".").concat(k)]||d[k]||s[k]||r;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[d]="string"==typeof e?e:l,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},33709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"overwatch-2",image:"/img/embed/games/overwatch-2.jpg",title:"Overwatch 2 Game events",hide_title:!0,sidebar_label:"Overwatch 2",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,m={unversionedId:"api/live-game-data/supported-games/overwatch-2",id:"api/live-game-data/supported-games/overwatch-2",title:"Overwatch 2 Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/overwatch-2.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/overwatch-2",permalink:"/api/live-game-data/supported-games/overwatch-2",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/overwatch-2.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1715164130,formattedLastUpdatedAt:"May 8, 2024",sidebarPosition:0,frontMatter:{id:"overwatch-2",image:"/img/embed/games/overwatch-2.jpg",title:"Overwatch 2 Game events",hide_title:!0,sidebar_label:"Overwatch 2",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"New World",permalink:"/api/live-game-data/supported-games/new-world"},next:{title:"Palworld",permalink:"/api/live-game-data/supported-games/palworld"}},o={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>game_state</em> note:",id:"game_state-note",level:4},{value:"<em>game_mode</em> note",id:"game_mode-note",level:4},{value:"<em>battle_tag</em> note",id:"battle_tag-note",level:4},{value:"<em>game_type</em> note:",id:"game_type-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>map</em> note",id:"map-note",level:4},{value:"<em>pseudo_match_id</em> note",id:"pseudo_match_id-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>round_start</em> note",id:"round_start-note",level:4},{value:"<em>round_end</em> note",id:"round_end-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>eliminations</em> note",id:"eliminations-note",level:4},{value:"<em>objective_kills</em> note",id:"objective_kills-note",level:4},{value:"Events",id:"events-1",level:3},{value:"<em>elimination</em> note",id:"elimination-note",level:4},{value:"<code>death</code>",id:"death",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>death</em> note",id:"death-note",level:4},{value:"Events",id:"events-2",level:3},{value:"<em>death</em> note",id:"death-note-1",level:4},{value:"<code>assist</code>",id:"assist",level:2},{value:"Info Updates",id:"info-updates-5",level:3},{value:"<em>assist</em> note",id:"assist-note",level:4},{value:"Events",id:"events-3",level:3},{value:"<em>assist</em> note",id:"assist-note-1",level:4},{value:"<code>roster</code>",id:"roster",level:2},{value:"Info Updates",id:"info-updates-6",level:3},{value:"<em>roster_XX </em> note",id:"roster_xx--note",level:4}],u=(d="GameInfo",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const s={toc:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Overwatch 2, Overwatch 2 API, SDK for Overwatch 2, Overwatch 2 SDK"})),(0,l.kt)(u,{gameId:10844,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"OVERWATCH 2 game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kill"},"kill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#assist"},"assist")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#death"},"death")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#roster"},"roster"))),(0,l.kt)("h2",{id:"game-event-status"},"Game event status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users."),(0,l.kt)("p",null,"Check the current game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_state"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current state of the game."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_state-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently played game-mode."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"battle_tag"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Player's battelnet tag"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#battle_tag-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_type"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the current played game"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_type-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"252.0")))),(0,l.kt)("h4",{id:"game_state-note"},(0,l.kt)("em",{parentName:"h4"},"game_state")," note:"),(0,l.kt)("p",null,"List of possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"loading_screen_start"),(0,l.kt)("li",{parentName:"ul"},"game_loaded"),(0,l.kt)("li",{parentName:"ul"},"match_in_progress"),(0,l.kt)("li",{parentName:"ul"},"match_ended")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"game_state":"loading_screen_start"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"game_mode-note"},(0,l.kt)("em",{parentName:"h4"},"game_mode")," note"),(0,l.kt)("p",null,"Be wary that this is not supported in game-browser."),(0,l.kt)("p",null,"Full list of game-modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'0003 = "Junkensteins Revenge"'),(0,l.kt)("li",{parentName:"ul"},'0007 = "Ctf"'),(0,l.kt)("li",{parentName:"ul"},'0008 = "Meis Snowball Offensive"'),(0,l.kt)("li",{parentName:"ul"},'0009 = "Elimination"'),(0,l.kt)("li",{parentName:"ul"},'0015 = "Uprising"'),(0,l.kt)("li",{parentName:"ul"},'0016 = "Skirmish"'),(0,l.kt)("li",{parentName:"ul"},'0020 = "Assault"'),(0,l.kt)("li",{parentName:"ul"},'0021 = "Escort"'),(0,l.kt)("li",{parentName:"ul"},'0022 = "Hybrid"'),(0,l.kt)("li",{parentName:"ul"},'0023 = "Control"'),(0,l.kt)("li",{parentName:"ul"},'0025 = "Tutorial"'),(0,l.kt)("li",{parentName:"ul"},'0026 = "Uprising All Heroes"'),(0,l.kt)("li",{parentName:"ul"},'0029 = "Team Deathmatch"'),(0,l.kt)("li",{parentName:"ul"},'0030 = "Deathmatch"'),(0,l.kt)("li",{parentName:"ul"},'0032 = "Lucioball"'),(0,l.kt)("li",{parentName:"ul"},'0037 = "Retribution"'),(0,l.kt)("li",{parentName:"ul"},'0041 = "Yeti Hunter"'),(0,l.kt)("li",{parentName:"ul"},'0042 = "Halloween Holdout Endless"'),(0,l.kt)("li",{parentName:"ul"},'0061 = "Calypso Heromode"'),(0,l.kt)("li",{parentName:"ul"},'0067 = "Storm Rising"'),(0,l.kt)("li",{parentName:"ul"},'0074 = "Survivor"'),(0,l.kt)("li",{parentName:"ul"},'0089 = "Snowball Deathmatch"'),(0,l.kt)("li",{parentName:"ul"},'0109 = "Flashpoint"'),(0,l.kt)("li",{parentName:"ul"},'0090 = "Practice Range"'),(0,l.kt)("li",{parentName:"ul"},'0112 = "Bounty Hunter"')),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"game_mode":"16"}},"feature":"game_info"}\n')),(0,l.kt)("p",null,'Note that on the response the leading zeros are removed ("0030" => "30")'),(0,l.kt)("h4",{id:"battle_tag-note"},(0,l.kt)("em",{parentName:"h4"},"battle_tag")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"battle_tag","value":"OverTheTop#2100"}\n')),(0,l.kt)("h4",{id:"game_type-note"},(0,l.kt)("em",{parentName:"h4"},"game_type")," note:"),(0,l.kt)("p",null,"List of possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UNKNOWN"),(0,l.kt)("li",{parentName:"ul"},"UNRANKED"),(0,l.kt)("li",{parentName:"ul"},"CUSTOM_GAME"),(0,l.kt)("li",{parentName:"ul"},"PRACTICE"),(0,l.kt)("li",{parentName:"ul"},"ARCADE"),(0,l.kt)("li",{parentName:"ul"},"TUTORIAL"),(0,l.kt)("li",{parentName:"ul"},"SKIRMISH"),(0,l.kt)("li",{parentName:"ul"},"VS_AI"),(0,l.kt)("li",{parentName:"ul"},"DEATHMATCH"),(0,l.kt)("li",{parentName:"ul"},"RANKED"),(0,l.kt)("li",{parentName:"ul"},"HERO_MASTERY")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"match_info","key":"game_type","value":"SKIRMISH"}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of currently played map."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#map-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pseudo_match_id"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique mtch_id"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#pseudo_match_id-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"237.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_outcome"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Outcome of the current match"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"250.1")))),(0,l.kt)("h4",{id:"map-note"},(0,l.kt)("em",{parentName:"h4"},"map")," note"),(0,l.kt)("p",null,"Important to note some values that are still unknown. Most of them are listed down here."),(0,l.kt)("p",null,"Possible map values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'3314 = "Antarc Pebibsula"'),(0,l.kt)("li",{parentName:"ul"},'2018 = "Busan"'),(0,l.kt)("li",{parentName:"ul"},'1645 = "Ilios"'),(0,l.kt)("li",{parentName:"ul"},'1634 = "Lijiang Tower"'),(0,l.kt)("li",{parentName:"ul"},'1719 = "Lijiang Tower Lunar New Year"'),(0,l.kt)("li",{parentName:"ul"},'1207 = "Nepal"'),(0,l.kt)("li",{parentName:"ul"},'1694 = "Oasis"'),(0,l.kt)("li",{parentName:"ul"},'2087 = "Circuit Royal"'),(0,l.kt)("li",{parentName:"ul"},'707 =  "Dorado"'),(0,l.kt)("li",{parentName:"ul"},'2628 = "Havana"'),(0,l.kt)("li",{parentName:"ul"},'1878 = "Junkertown"'),(0,l.kt)("li",{parentName:"ul"},'2161 = "Rialto"'),(0,l.kt)("li",{parentName:"ul"},'1467 = "Route 66"'),(0,l.kt)("li",{parentName:"ul"},'3205 = "Shambali Monastery"'),(0,l.kt)("li",{parentName:"ul"},'388 = "Watchpoint Gibraltar"'),(0,l.kt)("li",{parentName:"ul"},'1886 = "Blizzard World"'),(0,l.kt)("li",{parentName:"ul"},'2651 = "Blizzard World Winter"'),(0,l.kt)("li",{parentName:"ul"},'1677 = "Eichenwalde"'),(0,l.kt)("li",{parentName:"ul"},'2036 = "Eichenwalde Halloween"'),(0,l.kt)("li",{parentName:"ul"},'687 = "Hollywood"'),(0,l.kt)("li",{parentName:"ul"},'1707 = "Hollywood Halloween"'),(0,l.kt)("li",{parentName:"ul"},'212 = "Kings Row"'),(0,l.kt)("li",{parentName:"ul"},'1713 = "Kings Row Winter"'),(0,l.kt)("li",{parentName:"ul"},'2892 = "Midtown"'),(0,l.kt)("li",{parentName:"ul"},'0468 = "Numbani"'),(0,l.kt)("li",{parentName:"ul"},'2360 = "Paraiso"'),(0,l.kt)("li",{parentName:"ul"},'2868 = "Coloesseo"'),(0,l.kt)("li",{parentName:"ul"},'3411 = "Esperanca"'),(0,l.kt)("li",{parentName:"ul"},'2795 = "New Queen Street"'),(0,l.kt)("li",{parentName:"ul"},'3603 = "New Junk City"'),(0,l.kt)("li",{parentName:"ul"},'3390 = "Suravasa"')),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"map":"357"}},"feature":"match_info"}\n')),(0,l.kt)("p",null,'Note that in the response the leading zeros are removed ("0030" => "30")'),(0,l.kt)("h4",{id:"pseudo_match_id-note"},(0,l.kt)("em",{parentName:"h4"},"pseudo_match_id")," note"),(0,l.kt)("p",null,"This is an Overwolf-generated code, unrelated to the game."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"pseudo_match_id":"5a7e3729-993c-414d-8e3f-592faeef81e7"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"match_outcome-note"},(0,l.kt)("em",{parentName:"h4"},"match_outcome")," note"),(0,l.kt)("p",null,"Possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"victory"),(0,l.kt)("li",{parentName:"ul"},"defeat")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"match_outcome":"victory"}},"feature":"match_info"}\n')),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Match started."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Match ended."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"round_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Round started."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#round_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"252.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"round_end"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Round ended."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#round_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"252.0")))),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"match_start","data":""}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"match_end","data":""}\n')),(0,l.kt)("h4",{id:"round_start-note"},(0,l.kt)("em",{parentName:"h4"},"round_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"round_start","data":""}\n')),(0,l.kt)("h4",{id:"round_end-note"},(0,l.kt)("em",{parentName:"h4"},"round_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"round_end","data":""}\n')),(0,l.kt)("h2",{id:"kill"},(0,l.kt)("inlineCode",{parentName:"h2"},"kill")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eliminations"),(0,l.kt)("td",{parentName:"tr",align:null},"kill"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of eliminations."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#eliminations-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"eliminations-note"},(0,l.kt)("em",{parentName:"h4"},"eliminations")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"kill":{"eliminations":"6"}},"feature":"kill"}\n')),(0,l.kt)("h4",{id:"objective_kills-note"},(0,l.kt)("em",{parentName:"h4"},"objective_kills")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"kill":{"objective_kills":"2"}},"feature":"kill"}\n')),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elimination"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Elimination is performed."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#elimination-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"elimination-note"},(0,l.kt)("em",{parentName:"h4"},"elimination")," note"),(0,l.kt)("p",null,"The event includes the total amount performed in the match."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"elimination","data":"8"}\n')),(0,l.kt)("h2",{id:"death"},(0,l.kt)("inlineCode",{parentName:"h2"},"death")),(0,l.kt)("h3",{id:"info-updates-4"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deaths"),(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of deaths."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"death-note"},(0,l.kt)("em",{parentName:"h4"},"death")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"death":{"deaths":"5"}},"feature":"death"}\n')),(0,l.kt)("h3",{id:"events-2"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Death has occurred."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"death-note-1"},(0,l.kt)("em",{parentName:"h4"},"death")," note"),(0,l.kt)("p",null,"The event includes the total amount of kills performed in the match."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"death","data":"2"}\n')),(0,l.kt)("h2",{id:"assist"},(0,l.kt)("inlineCode",{parentName:"h2"},"assist")),(0,l.kt)("h3",{id:"info-updates-5"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assists"),(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of assists."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#assists-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"assist-note"},(0,l.kt)("em",{parentName:"h4"},"assist")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"assist":{"assist":"5"}},"feature":"assist"}\n')),(0,l.kt)("h3",{id:"events-3"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assist"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Assist has occurred."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#assist-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"229.0")))),(0,l.kt)("h4",{id:"assist-note-1"},(0,l.kt)("em",{parentName:"h4"},"assist")," note"),(0,l.kt)("p",null,"The event includes the total amount of assists performed in the match."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"assist","data":"2"}\n')),(0,l.kt)("h2",{id:"roster"},(0,l.kt)("inlineCode",{parentName:"h2"},"roster")),(0,l.kt)("h3",{id:"info-updates-6"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roster_XX"),(0,l.kt)("td",{parentName:"tr",align:null},"roster"),(0,l.kt)("td",{parentName:"tr",align:null},"Data about the roter"),(0,l.kt)("td",{parentName:"tr",align:null},"See ","[notes]","(#roster_XX -note)"),(0,l.kt)("td",{parentName:"tr",align:null},"249.0")))),(0,l.kt)("h4",{id:"roster_xx--note"},(0,l.kt)("em",{parentName:"h4"},"roster_XX ")," note"),(0,l.kt)("p",null,"List of values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"player_name - the player's full name"),(0,l.kt)("li",{parentName:"ul"},"battlenet_tag - the battle net tag"),(0,l.kt)("li",{parentName:"ul"},"is_local - is the player the local player true/false"),(0,l.kt)("li",{parentName:"ul"},"is_teammate - is the player one of your teammates true/false"),(0,l.kt)("li",{parentName:"ul"},"hero_name - the name of the selected hero"),(0,l.kt)("li",{parentName:"ul"},"hero_role - the role of the selected hero"),(0,l.kt)("li",{parentName:"ul"},"team - the player's team 0/1"),(0,l.kt)("li",{parentName:"ul"},"kills / deaths / assists - the total number of kills/deaths/assists"),(0,l.kt)("li",{parentName:"ul"},"damage - the total damage"),(0,l.kt)("li",{parentName:"ul"},"healed - the total healed"),(0,l.kt)("li",{parentName:"ul"},"mitigated - the total mitigated")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"As for version 249.1.0 hero_name and hero_role will be available for the local player team only\nWe will add them to the other team in the next GEP release")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"roster","category":"roster","key":"roster_0","value":"{\\"player_name\\":\\"EDGED217\\",\\"battlenet_tag\\":\\"EDGED217#2842\\",\\"is_local\\":false,\\"is_teammate\\":true,\\"hero_name\\":\\"MOIRA\\",\\"hero_role\\":\\"SUPPORT\\",\\"team\\":0,\\"kills\\":4,\\"deaths\\":0,\\"damage\\":462.16,\\"assists\\":0,\\"healed\\":274.866,\\"mitigated\\":0}"}\n')))}k.isMDXComponent=!0}}]);