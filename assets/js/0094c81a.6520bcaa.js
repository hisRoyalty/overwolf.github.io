"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3802],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,g=m["".concat(o,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(g,d(d({ref:t},u),{},{components:a})):n.createElement(g,d({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,d[1]=i;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(25773),l=(a(27378),a(35318));const r={id:"games",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.games API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},d=void 0,i={unversionedId:"api/settings/games",id:"api/settings/games",title:"overwolf.settings.games API",description:"Use this API to view the game-settings features functions.",source:"@site/../pages/api/settings/games.mdx",sourceDirName:"api/settings",slug:"/api/settings/games",permalink:"/api/settings/games",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/settings/games.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1717496159,formattedLastUpdatedAt:"Jun 4, 2024",frontMatter:{id:"games",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.games API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.settings API",permalink:"/api/settings/"},next:{title:"overwolf.settings.hotkeys API",permalink:"/api/settings/hotkeys"}},o={},s=[{value:"Special OW URL&#39;s",id:"special-ow-urls",level:2},{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getOverlayEnabled(gameClassId, callback)",id:"getoverlayenabledgameclassid-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112",level:4},{value:"enableOverlay(gameClassId, callback)",id:"enableoverlaygameclassid-callback",level:2},{value:"Version added: 0.250",id:"version-added-0250",level:4},{value:"Notes",id:"notes",level:4},{value:"getAutoLaunchEnabled(gameClassId, callback)",id:"getautolaunchenabledgameclassid-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112-1",level:4},{value:"setAutoLaunchEnabled(gameClassId, enabled, callback)",id:"setautolaunchenabledgameclassid-enabled-callback",level:2},{value:"Version added: 0.173",id:"version-added-0173",level:4},{value:"onOverlayEnablementChanged",id:"onoverlayenablementchanged",level:2},{value:"Version added: 0.124",id:"version-added-0124",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4},{value:"onAutoLaunchEnablementChanged",id:"onautolaunchenablementchanged",level:2},{value:"Version added: 0.124",id:"version-added-0124-1",level:4},{value:"OverlayEnabledResult Object",id:"overlayenabledresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"AutolaunchEnabledResult Object",id:"autolaunchenabledresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"OverlayEnablementChangedEvent Object",id:"overlayenablementchangedevent-object",level:2},{value:"Event data example",id:"event-data-example",level:4},{value:"AutoLaunchEnablementChangedEvent Object",id:"autolaunchenablementchangedevent-object",level:2},{value:"Event data example",id:"event-data-example-1",level:4}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Use this API to view the game-settings features functions."),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"Please read our best practices for using game settings can be found ",(0,l.kt)("a",{parentName:"p",href:"/topics/best-practices/games-settings"},"here"),".")),(0,l.kt)("h2",{id:"special-ow-urls"},"Special OW URL's"),(0,l.kt)("p",null,"You can also use the following helpful URLs to open the relevant Overwolf game settings in the Appstore:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"overwolf://store/game-settings/game-id/[game-id]"),(0,l.kt)("br",{parentName:"p"}),"\n","A clickable link that opens the Overwolf (game-id) game settings window from your app.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"overwolf://store/game-settings/appid-id/[extension-id]"),(0,l.kt)("br",{parentName:"p"}),"\n","A clickable link that opens the Overwolf (targeted by your app) game settings window from your app."))),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getoverlayenabledgameclassid-callback"},"overwolf.settings.games.getOverlayEnabled()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enableoverlayclassid-callback"},"overwolf.settings.games.enableOverlay()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getautolaunchenabledgameclassid-callback"},"overwolf.settings.games.getAutoLaunchEnabled()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setautolaunchenabledgameclassid-enabled-callback"},"overwolf.settings.games.setAutoLaunchEnabled()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onoverlayenablementchanged"},"overwolf.settings.games.onOverlayEnablementChanged")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onautolaunchenablementchanged"},"overwolf.settings.games.onAutoLaunchEnablementChanged"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlayenabledresult-object"},"OverlayEnabledResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#autolaunchenabledresult-object"},"AutolaunchEnabledResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent")," Object")),(0,l.kt)("h2",{id:"getoverlayenabledgameclassid-callback"},"getOverlayEnabled(gameClassId, callback)"),(0,l.kt)("h4",{id:"version-added-0112"},"Version added: 0.112"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Provides per-game settings as set by the user via the Overwolf store.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The game ID for which the flag is retrieved for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#overlayenabledresult-object"},"Result: OverlayEnabledResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"enableoverlaygameclassid-callback"},"enableOverlay(gameClassId, callback)"),(0,l.kt)("h4",{id:"version-added-0250"},"Version added: 0.250"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Enables game overlay for the specified game")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The game ID to enable Overlay for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of the operation")))),(0,l.kt)("h4",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This method can only be called as a result of a direct user gesture (i.e. mouse click)"),(0,l.kt)("li",{parentName:"ul"},"This method can only be called for games this App is targeting in the manifest (or all games if it is targeting ",(0,l.kt)("inlineCode",{parentName:"li"},"all"),")")),(0,l.kt)("h2",{id:"getautolaunchenabledgameclassid-callback"},"getAutoLaunchEnabled(gameClassId, callback)"),(0,l.kt)("h4",{id:"version-added-0112-1"},"Version added: 0.112"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the current Auto-Launch enabled setting for the calling app in a given game (gameClassId).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The game ID for which the flag is retrieved for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#autolaunchenabledresult-object"},"Result: AutolaunchEnabledResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"setautolaunchenabledgameclassid-enabled-callback"},"setAutoLaunchEnabled(gameClassId, enabled, callback)"),(0,l.kt)("h4",{id:"version-added-0173"},"Version added: 0.173"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the current Auto-Launch enabled setting for the calling app in a given game (gameClassId).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The game ID for which the flag is set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"whether auto-launch should be enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#autolaunchenabledresult-object"},"Result: AutolaunchEnabledResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"onoverlayenablementchanged"},"onOverlayEnablementChanged"),(0,l.kt)("h4",{id:"version-added-0124"},"Version added: 0.124"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when the overlay is enabled or disabled for a game, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent")," Object")),(0,l.kt)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ "gameId": 7764, "enabled": false}\n')),(0,l.kt)("h2",{id:"onautolaunchenablementchanged"},"onAutoLaunchEnablementChanged"),(0,l.kt)("h4",{id:"version-added-0124-1"},"Version added: 0.124"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when auto launch is enabled or disabled for a game, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent")," Object")),(0,l.kt)("h2",{id:"overlayenabledresult-object"},"OverlayEnabledResult Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"success")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true\n}\n')),(0,l.kt)("h2",{id:"autolaunchenabledresult-object"},"AutolaunchEnabledResult Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"success")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoLaunchEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "autoLaunchEnabled": true\n}\n')),(0,l.kt)("h2",{id:"overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example"},"Event data example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{ "gameId": 7764, "enabled": false }\n\n')),(0,l.kt)("h2",{id:"autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-1"},"Event data example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{ "gameId": 7764, "appId": "hffhbjnafafjnehejohpkfhjdenpifhihebpkhni", "enabled": false }\n\n')))}m.isMDXComponent=!0}}]);