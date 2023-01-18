"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5751],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>i});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),i=s(t),u=r,c=i["".concat(m,".").concat(u)]||i[u]||g[u]||l;return t?n.createElement(c,o(o({ref:a},p),{},{components:t})):n.createElement(c,o({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=x;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[c]="string"==typeof e?e:r,m[1]=o;for(var p=2;p<l;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},906:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(25773),r=(t(27378),t(35318));const l={id:"new-world",image:"/img/embed/games/new-world.jpg",title:"New World Game events",hide_title:!0,sidebar_label:"New World",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},m=void 0,o={unversionedId:"api/games/events/new-world",id:"api/games/events/new-world",title:"New World Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/new-world.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/new-world",permalink:"/api/games/events/new-world",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/new-world.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"new-world",image:"/img/embed/games/new-world.jpg",title:"New World Game events",hide_title:!0,sidebar_label:"New World",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Minecraft",permalink:"/api/games/events/minecraft"},next:{title:"Overwatch",permalink:"/api/games/events/overwatch"}},d={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<em>map</em> note",id:"map-note",level:4},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"<em>world_name</em> note",id:"world_name-note",level:4}],i=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const u={toc:p};function c(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for New World, New World API, SDK for New World, New World SDK"})),(0,r.mdx)(i,{gameID:21816,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"New World game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#game_info"},"game_info"))),(0,r.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,r.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,r.mdx)("p",null,"Check ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,r.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},(0,r.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"182.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"182.0.1","public_version":"182.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"game_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"location"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The player's current position (x,y,z)."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"182.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"map"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The current map."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#map-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"183.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"player_name"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The local player name."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#player_name-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"183.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"world_name"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The world name."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#world_name-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"183.0")))),(0,r.mdx)("h4",{id:"location-note"},(0,r.mdx)("em",{parentName:"h4"},"location")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"location":"{"player.position.x,9366.38,player.position.y,2762.52,player.position.z,89.21,player.rotation.x,0,player.rotation.y,0,player.rotation.z,223,player.compass,SW"}"}},"feature":"game_info"}\n')),(0,r.mdx)("h4",{id:"map-note"},(0,r.mdx)("em",{parentName:"h4"},"map")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"map":"NewWorld_VitaeEterna"}"}},"feature":"game_info"}\n')),(0,r.mdx)("h4",{id:"player_name-note"},(0,r.mdx)("em",{parentName:"h4"},"player_name")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"player_name":"Shargaas7"}"}},"feature":"game_info"}\n')),(0,r.mdx)("h4",{id:"world_name-note"},(0,r.mdx)("em",{parentName:"h4"},"world_name")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"world_name":"live-1-28-3"}"}},"feature":"game_info"}\n')))}c.isMDXComponent=!0}}]);