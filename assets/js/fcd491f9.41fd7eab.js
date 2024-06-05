"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6792],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=l,c=u["".concat(i,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(c,o(o({ref:t},s),{},{components:a})):n.createElement(c,o({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},17667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(25773),l=(a(27378),a(35318));const r={id:"lost-ark",image:"/img/embed/games/lost-ark.jpg",title:"Lost Ark Game events",hide_title:!0,sidebar_label:"Lost Ark",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,p={unversionedId:"api/live-game-data/supported-games/lost-ark",id:"api/live-game-data/supported-games/lost-ark",title:"Lost Ark Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/lost-ark.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/lost-ark",permalink:"/api/live-game-data/supported-games/lost-ark",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/lost-ark.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1717589913,formattedLastUpdatedAt:"Jun 5, 2024",sidebarPosition:0,frontMatter:{id:"lost-ark",image:"/img/embed/games/lost-ark.jpg",title:"Lost Ark Game events",hide_title:!0,sidebar_label:"Lost Ark",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Lethal Company",permalink:"/api/live-game-data/supported-games/lethal-company"},next:{title:"Magic: The Gathering Arena",permalink:"/api/live-game-data/supported-games/magic-the-gathering-arena"}},i={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>player_class</em> note",id:"player_class-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>mob_details</em> note",id:"mob_details-note",level:4},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<code>location</code>",id:"location",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>map</em> note",id:"map-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4}],s=(u="GameInfo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var u;const d={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Lost Ark, Lost Ark API, SDK for Lost Ark, Lost Ark SDK"})),(0,l.kt)(s,{gameId:21864,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Lost Ark game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#location"},"location"))),(0,l.kt)("h2",{id:"game-events-status"},"Game events status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,l.kt)("p",null,"Check ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here")," the game events status. Or easily check the game events status from your app, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"182.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"182.0.1","public_version":"182.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_class"),(0,l.kt)("td",{parentName:"tr",align:null},"me"),(0,l.kt)("td",{parentName:"tr",align:null},"The player's current class."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player_class-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"217.0")))),(0,l.kt)("h4",{id:"player_class-note"},(0,l.kt)("em",{parentName:"h4"},"player_class")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"me":{"player_class":"DESTROYER"}},"feature":"game_info"}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mob_details"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Details about the monster the player is fighting with."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#mob_details-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"217.0")))),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Match started."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"217.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Match ended."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"217.0")))),(0,l.kt)("h4",{id:"mob_details-note"},(0,l.kt)("em",{parentName:"h4"},"mob_details")," note"),(0,l.kt)("p",null,"List of parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name - creature name"),(0,l.kt)("li",{parentName:"ul"},"grade - creature grade"),(0,l.kt)("li",{parentName:"ul"},"health - current creature health"),(0,l.kt)("li",{parentName:"ul"},"health_max - max health of the creature"),(0,l.kt)("li",{parentName:"ul"},"level - creature level"),(0,l.kt)("li",{parentName:"ul"},"health_phase - health phase of the creature")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"mob_details":"{\\"name\\":\\"Rudric\\",\\"grade\\":\\"BOSS\\",\\"health\\":1034510,\\"health_max\\":1034510,\\"health_phase\\":23,\\"level\\":17}"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,l.kt)("h2",{id:"location"},(0,l.kt)("inlineCode",{parentName:"h2"},"location")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Map name"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#map-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"227.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"player location"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#location-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"227.0")))),(0,l.kt)("h4",{id:"map-note"},(0,l.kt)("em",{parentName:"h4"},"map")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"map":"LV_ATM_Border_F_PS"}},"feature":"location"}\n')),(0,l.kt)("h4",{id:"location-note"},(0,l.kt)("em",{parentName:"h4"},"location")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"location":"{\\"x\\":22869.693359,\\"y\\":20543.306641,\\"z\\":1633.370850}"}},"feature":"location"}\n')))}k.isMDXComponent=!0}}]);