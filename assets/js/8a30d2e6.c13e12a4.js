"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1804],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=i(a),c=l,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(25773),l=(a(27378),a(35318));const r={id:"lethal-company",image:"/img/embed/games/lethal-company.jpg",title:"Lethal Company Game events",hide_title:!0,sidebar_label:"Lethal Company",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},p=void 0,o={unversionedId:"api/live-game-data/supported-games/lethal-company",id:"api/live-game-data/supported-games/lethal-company",title:"Lethal Company Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/lethal-company.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/lethal-company",permalink:"/api/live-game-data/supported-games/lethal-company",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/lethal-company.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1718791002,formattedLastUpdatedAt:"Jun 19, 2024",sidebarPosition:0,frontMatter:{id:"lethal-company",image:"/img/embed/games/lethal-company.jpg",title:"Lethal Company Game events",hide_title:!0,sidebar_label:"Lethal Company",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Legends of Runeterra",permalink:"/api/live-game-data/supported-games/legends-of-runeterra"},next:{title:"Lost Ark",permalink:"/api/live-game-data/supported-games/lost-ark"}},m={},i=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<em>respawn</em> note",id:"respawn-note",level:4}],s=(d="GameInfo",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const u={toc:i};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Lethal Company, Lethal Company API, SDK for Lethal Company, Lethal Company SDK"})),(0,l.kt)(s,{gameId:23522,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Lethal Company game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,l.kt)("h2",{id:"game-event-status"},"Game event status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users."),(0,l.kt)("p",null,"Check the current game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternatively, you can easily check that status from your app itself, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"244.0.0","public_version":"244.0.0","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The current scene-state"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")))),(0,l.kt)("h4",{id:"scene-note"},(0,l.kt)("em",{parentName:"h4"},"scene")," note"),(0,l.kt)("p",null,"Possible Scene values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lobby"),(0,l.kt)("li",{parentName:"ul"},"ingame")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature": "game_info", "category": "game_info", "key": "scene", "data": "lobby"}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"nulll"),(0,l.kt)("td",{parentName:"tr",align:null},"In the beginning of each match"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"nulll"),(0,l.kt)("td",{parentName:"tr",align:null},"At the end of each match"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"nulll"),(0,l.kt)("td",{parentName:"tr",align:null},"The local player died"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"respawn"),(0,l.kt)("td",{parentName:"tr",align:null},"nulll"),(0,l.kt)("td",{parentName:"tr",align:null},"The local player respawn"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"244.0")))),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":null}]}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":null}]}\n')),(0,l.kt)("h4",{id:"death-note"},(0,l.kt)("em",{parentName:"h4"},"death")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":null}]}\n')),(0,l.kt)("h4",{id:"respawn-note"},(0,l.kt)("em",{parentName:"h4"},"respawn")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"respawn","data":null}]}\n')))}c.isMDXComponent=!0}}]);