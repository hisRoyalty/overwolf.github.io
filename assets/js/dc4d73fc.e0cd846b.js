"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9700],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const l={id:"hunt-showdown",image:"/img/embed/deprecated.jpg",title:"Hunt: Showdown Game events",sidebar_label:"Hunt: Showdown",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,i={unversionedId:"api/live-game-data/deprecated/hunt-showdown",id:"api/live-game-data/deprecated/hunt-showdown",title:"Hunt: Showdown Game events",description:"Support for this game has been deprecated, following a lack of usage in Apps.",source:"@site/../pages/api/live-game-data/deprecated/hunt-showdown.mdx",sourceDirName:"api/live-game-data/deprecated",slug:"/api/live-game-data/deprecated/hunt-showdown",permalink:"/api/live-game-data/deprecated/hunt-showdown",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/deprecated/hunt-showdown.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1721828711,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:0,frontMatter:{id:"hunt-showdown",image:"/img/embed/deprecated.jpg",title:"Hunt: Showdown Game events",sidebar_label:"Hunt: Showdown",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Football Manager 2022",permalink:"/api/live-game-data/deprecated/football-manager-2022"},next:{title:"LEAP",permalink:"/api/live-game-data/deprecated/leap"}},p={},s=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Hunt: Showdown, Hunt: Showdown API, SDK for Hunt: Showdown, Hunt: Showdown SDK"})),(0,r.kt)("admonition",{title:"Deprecation notice",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Support for this game has been deprecated, following a lack of usage in Apps."),(0,r.kt)("p",{parentName:"admonition"},"This page is being kept for historial documentation purposes.")),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Hunt Showdown game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_info"},"game_info"))),(0,r.kt)("h2",{id:"game-event-status"},"Game event status"),(0,r.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.kt)("p",null,"Check the current game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.kt)("h2",{id:"game_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scene"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,r.kt)("h4",{id:"scene-note"},(0,r.kt)("em",{parentName:"h4"},"scene")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"scene","value":"Lobby"}\n')),(0,r.kt)("p",null,"List of possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OfflineLobby"),(0,r.kt)("li",{parentName:"ul"},"Lobby"),(0,r.kt)("li",{parentName:"ul"},"Leaving"),(0,r.kt)("li",{parentName:"ul"},"Loading"),(0,r.kt)("li",{parentName:"ul"},"Game")))}d.isMDXComponent=!0}}]);