"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7436],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=p(a),g=l,k=s["".concat(i,".").concat(g)]||s[g]||d[g]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=g;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[s]="string"==typeof e?e:l,o[1]=m;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},32104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"valheim",image:"/img/embed/deprecated.jpg",title:"Valheim",sidebar_label:"Valheim",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,m={unversionedId:"api/live-game-data/deprecated/valheim",id:"api/live-game-data/deprecated/valheim",title:"Valheim",description:"Support for this game has been deprecated, following a lack of usage in Apps.",source:"@site/../pages/api/live-game-data/deprecated/valheim.mdx",sourceDirName:"api/live-game-data/deprecated",slug:"/api/live-game-data/deprecated/valheim",permalink:"/api/live-game-data/deprecated/valheim",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/deprecated/valheim.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716282814,formattedLastUpdatedAt:"May 21, 2024",sidebarPosition:0,frontMatter:{id:"valheim",image:"/img/embed/deprecated.jpg",title:"Valheim",sidebar_label:"Valheim",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"LEAP",permalink:"/api/live-game-data/deprecated/leap"},next:{title:"Consent Management Platform",permalink:"/api/electron/consent-management-platform/"}},i={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<em>state</em> note",id:"state-note",level:4},{value:"<em>time</em> note",id:"time-note",level:4},{value:"<em>inventory</em> note",id:"inventory-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>damage</em> note",id:"damage-note",level:4},{value:"<em>kill</em> note",id:"kill-note",level:4}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Valheim, Valheim API, SDK for Valheim, Valheim SDK"})),(0,l.kt)("admonition",{title:"Deprecation notice",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Support for this game has been deprecated, following a lack of usage in Apps."),(0,l.kt)("p",{parentName:"admonition"},"This page is being kept for historial documentation purposes.")),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Valheim game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kill"},"kill"))),(0,l.kt)("h2",{id:"game-events-status"},"Game events status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,l.kt)("p",null,"Check ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current game scene."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"169.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"player_name"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of local Player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#player-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"169.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of deaths"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"169.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"In progress / Not in progress"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#state-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"169.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current time of day"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#time-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"171.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inventory"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Names and amounts of items in inventory slots."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#inventory-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"171.1")))),(0,l.kt)("h4",{id:"scene-note"},(0,l.kt)("em",{parentName:"h4"},"scene")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"scene":"MainMenu"}},"feature":"game_info"}\n{"game_info":{"scene":"SelectCharacter"}},"feature":"game_info"}\n{"game_info":{"scene":"WorldList"}},"feature":"game_info"}\n{"game_info":{"scene":"ServerList"}},"feature":"game_info"}\n{"game_info":{"scene":"Loading"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"player_name-note"},(0,l.kt)("em",{parentName:"h4"},"player_name")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"player_name":"Shargaas"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"death-note"},(0,l.kt)("em",{parentName:"h4"},"death")," note"),(0,l.kt)("p",null,"This info is updated on the start of a match. The number of deaths is saved across multiple sessions."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"death":"14"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"state-note"},(0,l.kt)("em",{parentName:"h4"},"state")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"state":"in_progress"}},"feature":"game_info"}\n{"game_info":{"state":"ended"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"time-note"},(0,l.kt)("em",{parentName:"h4"},"time")," note"),(0,l.kt)("p",null,"Possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DAY"),(0,l.kt)("li",{parentName:"ul"},"AFTERNOON"),(0,l.kt)("li",{parentName:"ul"},"NIGHT")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"time":"{"day":"11","day_time":"0.610754","part":"AFTERNOON"}"}},"feature":"game_info"}\n')),(0,l.kt)("h4",{id:"inventory-note"},(0,l.kt)("em",{parentName:"h4"},"inventory")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"inventory":"{"slot_0":{"name":"tem_axe_blackmetal","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_1":{"name":"tem_bow_draugrfang","type":"Bow","count":"1","max_count":"1"},"slot_2":{"name":"tem_mace_needle","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_3":{"name":"tem_shield_blackmetal","type":"Shield","count":"1","max_count":"1"},"slot_4":{"name":"tem_sledge_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_5":{"name":"tem_hammer","type":"Tool","count":"1","max_count":"1"},"slot_6":{"name":"tem_pickaxe_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_7":{"name":"tem_hoe","type":"Tool","count":"1","max_count":"1"},"slot_8":{"name":"tem_chest_pcuirass","type":"Chest","count":"1","max_count":"1"},"slot_9":{"name":"tem_arrow_needle","type":"Ammo","count":"100","max_count":"100"},"slot_10":{"name":"tem_arrow_needle","type":"Ammo","count":"8","max_count":"100"},"slot_11":{"name":"tem_fishingbait","type":"Ammo","count":"37","max_count":"100"},"slot_12":{"name":"tem_fishingrod","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_13":{},"slot_14":{},"slot_15":{},"slot_16":{"name":"tem_cape_lox","type":"Shoulder","count":"1","max_count":"1"},"slot_17":{"name":"tem_loxpie","type":"Consumable","count":"5","max_count":"10"},"slot_18":{"name":"tem_fishwraps","type":"Consumable","count":"2","max_count":"10"},"slot_19":{"name":"tem_bloodpudding","type":"Consumable","count":"5","max_count":"10"},"slot_20":{"name":"tem_mead_hp_minor","type":"Consumable","count":"9","max_count":"10"},"slot_21":{},"slot_22":{},"slot_23":{},"slot_24":{"name":"tem_helmet_padded","type":"Helmet","count":"1","max_count":"1"},"slot_25":{"name":"tem_legs_pgreaves","type":"Legs","count":"1","max_count":"1"},"slot_26":{"name":"tem_beltstrength","type":"Utility","count":"1","max_count":"1"},"slot_27":{"name":"tem_bread","type":"Consumable","count":"7","max_count":"20"},"slot_28":{"name":"tem_arrow_frost","type":"Ammo","count":"35","max_count":"100"},"slot_29":{"name":"tem_thistle","type":"Material","count":"6","max_count":"50"},"slot_30":{"name":"tem_necktail","type":"Material","count":"1","max_count":"50"},"slot_31":{"name":"tem_bonefragments","type":"Material","count":"1","max_count":"50"}}"}},"feature":"game_info"}\n')),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"respawn"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Entering a game / Dying."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#respawn-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"169.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location"),(0,l.kt)("td",{parentName:"tr",align:null},"XYZ numerics"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player's location changes."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#location-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"171.1")))),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"respawn","data":""}\n')),(0,l.kt)("h4",{id:"location-note"},(0,l.kt)("em",{parentName:"h4"},"location")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"location","data":"{"x":"-563.196045","y":"78.863182","z":"353.648682"}"}]}\n')),(0,l.kt)("h2",{id:"kill"},(0,l.kt)("inlineCode",{parentName:"h2"},"kill")),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"damage"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric damage value performed."),(0,l.kt)("td",{parentName:"tr",align:null},"Damage is done"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#damage-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"171.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kill"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of enemy killed."),(0,l.kt)("td",{parentName:"tr",align:null},"Enemy dies."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"171.1")))),(0,l.kt)("h4",{id:"damage-note"},(0,l.kt)("em",{parentName:"h4"},"damage")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"damage","data":"{"damage":"45.066856","current_hp":"0.000000","max_hp":"40.000000","enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')),(0,l.kt)("h4",{id:"kill-note"},(0,l.kt)("em",{parentName:"h4"},"kill")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":"{"enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')))}s.isMDXComponent=!0}}]);