"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7406],{35318:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,c=p["".concat(l,".").concat(u)]||p[u]||g[u]||o;return n?a.createElement(c,m(m({ref:t},d),{},{components:n})):a.createElement(c,m({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:r,l[1]=m;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(25773),r=(n(27378),n(35318));const o={id:"hunt-showdown",image:"/img/embed/games/hunt-showdown.jpg",title:"Hunt: Showdown Game events",hide_title:!0,sidebar_label:"Hunt: Showdown",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,m={unversionedId:"api/games/events/hunt-showdown",id:"api/games/events/hunt-showdown",title:"Hunt: Showdown Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/hunt-showdown.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/hunt-showdown",permalink:"/api/games/events/hunt-showdown",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/hunt-showdown.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"hunt-showdown",image:"/img/embed/games/hunt-showdown.jpg",title:"Hunt: Showdown Game events",hide_title:!0,sidebar_label:"Hunt: Showdown",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Heroes of the Storm",permalink:"/api/games/events/heroes-of-the-storm"},next:{title:"League of Legends",permalink:"/api/games/events/league-of-legends"}},i={},d=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4}],p=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for Hunt: Showdown, Hunt: Showdown API, SDK for Hunt: Showdown, Hunt: Showdown SDK"})),(0,r.mdx)(p,{gameID:21328,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Hunt Showdown game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#game_info"},"game_info"))),(0,r.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,r.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.mdx)("p",null,"Check the current game event status ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},(0,r.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"game_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"scene"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,r.mdx)("h4",{id:"scene-note"},(0,r.mdx)("em",{parentName:"h4"},"scene")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"scene","value":"Lobby"}\n')),(0,r.mdx)("p",null,"List of possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"OfflineLobby"),(0,r.mdx)("li",{parentName:"ul"},"Lobby"),(0,r.mdx)("li",{parentName:"ul"},"Leaving"),(0,r.mdx)("li",{parentName:"ul"},"Loading"),(0,r.mdx)("li",{parentName:"ul"},"Game")))}c.isMDXComponent=!0}}]);