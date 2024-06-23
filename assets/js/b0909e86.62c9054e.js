"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7783],{35318:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(m,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(25773),r=(a(27378),a(35318));const l={id:"dota-underlords",image:"/img/embed/deprecated.jpg",title:"Dota Underlords Game events",sidebar_label:"Dota Underlords",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,p={unversionedId:"api/live-game-data/deprecated/dota-underlords",id:"api/live-game-data/deprecated/dota-underlords",title:"Dota Underlords Game events",description:"Support for this game has been deprecated, following a lack of usage in Apps.",source:"@site/../pages/api/live-game-data/deprecated/dota-underlords.mdx",sourceDirName:"api/live-game-data/deprecated",slug:"/api/live-game-data/deprecated/dota-underlords",permalink:"/api/live-game-data/deprecated/dota-underlords",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/deprecated/dota-underlords.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1719129182,formattedLastUpdatedAt:"Jun 23, 2024",sidebarPosition:0,frontMatter:{id:"dota-underlords",image:"/img/embed/deprecated.jpg",title:"Dota Underlords Game events",sidebar_label:"Dota Underlords",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Counter-Strike: Global Offensive",permalink:"/api/live-game-data/deprecated/counter-strike-global-offensive"},next:{title:"Football Manager 2021",permalink:"/api/live-game-data/deprecated/football-manager-2021"}},m={},d=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"match_info",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>mode</em> note",id:"mode-note",level:4},{value:"<em>round_type</em> note",id:"round_type-note",level:4},{value:"<em>round_state</em> note",id:"round_state-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>battle_start</em> note",id:"battle_start-note",level:4},{value:"<em>battle_end</em> note",id:"battle_end-note",level:4},{value:"<em>round_outcome</em> note",id:"round_outcome-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4}],i={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Dota Underlords, Dota Underlords API, SDK for Dota Underlords, Dota Underlords SDK"})),(0,r.kt)("admonition",{title:"Deprecation notice",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Support for this game has been deprecated, following a lack of usage in Apps."),(0,r.kt)("p",{parentName:"admonition"},"This page is being kept for historial documentation purposes.")),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Dota Underlords game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.kt)("h2",{id:"game-event-status"},"Game event status"),(0,r.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.kt)("p",null,"Check the current game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}\n')),(0,r.kt)("h2",{id:"match_info"},"match_info"),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Current-played game mode"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#mode-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"round_type"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"PVE / PVP"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#round_type-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"round_state"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"State the game is currently in."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#round_state-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")))),(0,r.kt)("h4",{id:"mode-note"},(0,r.kt)("em",{parentName:"h4"},"mode")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"mode":"Casual"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"round_type-note"},(0,r.kt)("em",{parentName:"h4"},"round_type")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_type":"{"round":1,"type":"PvE_creep_wave_1_#dac_creep_wave_1"}"}},"feature":"match_info"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_type":"{"round":4,"type":"PvP"}"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"round_state-note"},(0,r.kt)("em",{parentName:"h4"},"round_state")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"Ready"}},"feature":"match_info"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"Combat"}},"feature":"match_info"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"RoundOver"}},"feature":"match_info"}\n')),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Match started"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Match ended"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"battle_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Combat started"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#battle_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"battle_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Combat ended"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#battle_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"round_outcome"),(0,r.kt)("td",{parentName:"tr",align:null},"win/lose"),(0,r.kt)("td",{parentName:"tr",align:null},"Combat ended"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#round_outcome-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_outcome"),(0,r.kt)("td",{parentName:"tr",align:null},"win/lose + rank"),(0,r.kt)("td",{parentName:"tr",align:null},"Match ended"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"139.0")))),(0,r.kt)("h4",{id:"match_start-note"},(0,r.kt)("em",{parentName:"h4"},"match_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.kt)("h4",{id:"match_end-note"},(0,r.kt)("em",{parentName:"h4"},"match_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,r.kt)("h4",{id:"battle_start-note"},(0,r.kt)("em",{parentName:"h4"},"battle_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"battle_start","data":""}]}\n')),(0,r.kt)("h4",{id:"battle_end-note"},(0,r.kt)("em",{parentName:"h4"},"battle_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"battle_end","data":""}]}\n')),(0,r.kt)("h4",{id:"round_outcome-note"},(0,r.kt)("em",{parentName:"h4"},"round_outcome")," note"),(0,r.kt)("p",null,'This event currently supports "PVP" rounds ',(0,r.kt)("em",{parentName:"p"},"ONLY")),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"round_outcome","data":"win"}]}\n')),(0,r.kt)("h4",{id:"match_outcome-note"},(0,r.kt)("em",{parentName:"h4"},"match_outcome")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_outcome","data":"{"outcome":"win","rank":1}"}]}\n')))}u.isMDXComponent=!0}}]);