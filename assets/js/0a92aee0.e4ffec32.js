"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4682],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(a),g=r,k=s["".concat(p,".").concat(g)]||s[g]||u[g]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},82055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(25773),r=(a(27378),a(35318));const l={id:"roblox",image:"/img/embed/games/roblox.jpg",title:"Roblox Game events",hide_title:!0,sidebar_label:"Roblox",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,i={unversionedId:"api/live-game-data/supported-games/roblox",id:"api/live-game-data/supported-games/roblox",title:"Roblox Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/roblox.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/roblox",permalink:"/api/live-game-data/supported-games/roblox",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/roblox.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722933558,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:0,frontMatter:{id:"roblox",image:"/img/embed/games/roblox.jpg",title:"Roblox Game events",hide_title:!0,sidebar_label:"Roblox",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Rainbow Six Siege",permalink:"/api/live-game-data/supported-games/rainbow-six-siege"},next:{title:"Rocket League",permalink:"/api/live-game-data/supported-games/rocket-league"}},p={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>user_id</em> note",id:"user_id-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>game_id</em> note",id:"game_id-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>record_start</em> note",id:"record_start-note",level:4},{value:"<em>record_end</em> note",id:"record_end-note",level:4}],d=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const u={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Roblox, Roblox API, SDK for Roblox, Roblox SDK"})),(0,r.kt)(d,{gameId:4688,page:"docs",mdxType:"GameInfo"}),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Roblox game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.kt)("h2",{id:"game-events-status"},"Game events status"),(0,r.kt)("p",null,"It's highly recommended to communicate errors and warnings to your app users. Check current game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here")," or easily check game event status from your app ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.kt)("h2",{id:"game_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_id"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The local player user ID."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#user_id-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")))),(0,r.kt)("h4",{id:"user_id-note"},(0,r.kt)("em",{parentName:"h4"},"user_id")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"user_id","value":"9193"}\n')),(0,r.kt)("h2",{id:"match_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,r.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"game_id"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The current played minigame ID."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#game_id-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")))),(0,r.kt)("h4",{id:"game_id-note"},(0,r.kt)("em",{parentName:"h4"},"game_id")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"game_id","value":"15744137588"}\n')),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Round starts"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Round ends"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"record_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Record starts"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#record_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"record_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Record ends"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#record_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"257.0")))),(0,r.kt)("h4",{id:"match_start-note"},(0,r.kt)("em",{parentName:"h4"},"match_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.kt)("h4",{id:"match_end-note"},(0,r.kt)("em",{parentName:"h4"},"match_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,r.kt)("h4",{id:"record_start-note"},(0,r.kt)("em",{parentName:"h4"},"record_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"record_start","data":""}]}\n')),(0,r.kt)("h4",{id:"record_end-note"},(0,r.kt)("em",{parentName:"h4"},"record_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"record_end","data":""}]}\n')))}g.isMDXComponent=!0}}]);