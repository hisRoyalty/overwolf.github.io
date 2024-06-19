"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8245],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),g=r,f=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},53575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(25773),r=(a(27378),a(35318));const l={id:"warframe",image:"/img/embed/games/warframe.jpg",title:"Warframe Game events",hide_title:!0,sidebar_label:"Warframe",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,i={unversionedId:"api/live-game-data/supported-games/warframe",id:"api/live-game-data/supported-games/warframe",title:"Warframe Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/warframe.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/warframe",permalink:"/api/live-game-data/supported-games/warframe",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/warframe.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1718791002,formattedLastUpdatedAt:"Jun 19, 2024",sidebarPosition:0,frontMatter:{id:"warframe",image:"/img/embed/games/warframe.jpg",title:"Warframe Game events",hide_title:!0,sidebar_label:"Warframe",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Valorant",permalink:"/api/live-game-data/supported-games/valorant"},next:{title:"World of Tanks",permalink:"/api/live-game-data/supported-games/world-of-tanks"}},p={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>username</em> note",id:"username-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>inventory</em> note",id:"inventory-note",level:4},{value:"<em>highlighted</em> note",id:"highlighted-note",level:4}],s=(u="GameInfo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Warframe, Warframe API, SDK for Warframe, Warframe SDK"})),(0,r.kt)(s,{gameId:8954,page:"docs",mdxType:"GameInfo"}),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Warframe game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.kt)("h2",{id:"game-events-status"},"Game events status"),(0,r.kt)("p",null,"It's highly recommended to communicate errors and warnings to your app users. Check game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here")," or easily check game event status directly from your app ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.kt)("h2",{id:"game_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of local player."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#username-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"156.0")))),(0,r.kt)("h4",{id:"username-note"},(0,r.kt)("em",{parentName:"h4"},"username")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"username":"dsa_gfdg"},"feature":"game_info"}\n')),(0,r.kt)("h2",{id:"match_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,r.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Type and amount of items on the local player."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#inventory-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"156.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"highlighted"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Currently viewed item."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#highlighted-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"157.0")))),(0,r.kt)("h4",{id:"inventory-note"},(0,r.kt)("em",{parentName:"h4"},"inventory")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "category": "game_info",\n    "key": "inventory",\n    "value": {"Slots":8},"PremiumCredits":50,"PremiumCreditsFree":50,"PveBonusLoadoutBin":{"Slots":0},"PvpBonusLoadoutBin":{"Slots":0},\n    ...\n    {"ItemCount":1,"ItemType":"Lotus/Types/Recipes/Components/VorBoltRemoverFakeItem"}],\n    "valueLength": 16212\n}\n')),(0,r.kt)("h4",{id:"highlighted-note"},(0,r.kt)("em",{parentName:"h4"},"highlighted")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"feature": "match_info", "category": "match_info", "key": "highlighted", "data": "{\\"name\\":\\"/Lotus/StoreItems/Types/Game/Projections/T1VoidProjectionWispPrimeABronze\\",\\"riven_details\\":[]}"}\n\n')))}g.isMDXComponent=!0}}]);