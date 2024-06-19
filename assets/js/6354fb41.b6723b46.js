"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9228],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const l={id:"ids",image:"/img/embed/api-docs.jpg",title:"Launchers IDs",sidebar_label:"Launchers IDs",sidebar_position:-1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,i={unversionedId:"api/games/launchers/ids",id:"api/games/launchers/ids",title:"Launchers IDs",description:"Launcher IDs can be used to auto-launch your app when a game launcher starts (this is currently available only for League of Legends).",source:"@site/../pages/api/games/launchers/ids.mdx",sourceDirName:"api/games/launchers",slug:"/api/games/launchers/ids",permalink:"/api/games/launchers/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/launchers/ids.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1718791002,formattedLastUpdatedAt:"Jun 19, 2024",sidebarPosition:-1,frontMatter:{id:"ids",image:"/img/embed/api-docs.jpg",title:"Launchers IDs",sidebar_label:"Launchers IDs",sidebar_position:-1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games.launchers API",permalink:"/api/games/launchers/"},next:{title:"overwolf.games.launchers.events API",permalink:"/api/games/launchers/events/"}},o={},p=[{value:"Available Launchers IDs",id:"available-launchers-ids",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Launcher IDs can be used to auto-launch your app when a game launcher starts (this is currently available only for ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/league-of-legends"},"League of Legends"),")."),(0,r.kt)("p",null,"To do so, add the Launcher Id to the ",(0,r.kt)("a",{parentName:"p",href:"../../manifest#launch_events"},"launch_events")," option in your app\u2019s manifest.json file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"launch_events": [\n    {\n        "event": "GameLaunch",\n        "event_data": {\n            "game_ids": [10902]\n        },\n        "start_minimized": true\n    }\n]\n')),(0,r.kt)("p",null,"In this example, the app will be auto-launched when the League of Legends client starts. In this code example the app\u2019s main window will be minimized, you can change this by using  ",(0,r.kt)("inlineCode",{parentName:"p"},"start_minimized")," false)."),(0,r.kt)("h2",{id:"available-launchers-ids"},"Available Launchers IDs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Game Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Launcher ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"League of Legends"),(0,r.kt)("td",{parentName:"tr",align:null},"10902")))))}c.isMDXComponent=!0}}]);