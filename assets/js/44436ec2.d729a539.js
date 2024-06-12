"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[637],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const l={id:"0-0-1",title:"WebSockets Game Events Integration 0.0.1",sidebar_label:"0.0.1",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"internal/websocket-gep/versions/0-0-x/0-0-1",id:"internal/websocket-gep/versions/0-0-x/0-0-1",title:"WebSockets Game Events Integration 0.0.1",description:"Protocol Component overview",source:"@site/../pages/internal/websocket-gep/versions/0-0-x/0.0.1.mdx",sourceDirName:"internal/websocket-gep/versions/0-0-x",slug:"/internal/websocket-gep/versions/0-0-x/0-0-1",permalink:"/internal/websocket-gep/versions/0-0-x/0-0-1",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/internal/websocket-gep/versions/0-0-x/0.0.1.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1718200663,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"0-0-1",title:"WebSockets Game Events Integration 0.0.1",sidebar_label:"0.0.1",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"gepWebsockets",previous:{title:"Changelog",permalink:"/internal/websocket-gep/changelog"},next:{title:"0.0.2",permalink:"/internal/websocket-gep/versions/0-0-x/0-0-2"}},s={},p=[{value:"Protocol Component overview",id:"protocol-component-overview",level:2},{value:"Active Games Folder",id:"active-games-folder",level:3},{value:"Game Events Provider (Game)",id:"game-events-provider-game",level:3},{value:"Event Types",id:"event-types",level:4},{value:"Game Events",id:"game-events",level:5},{value:"Info Events",id:"info-events",level:5},{value:"API",id:"api",level:4},{value:"sendGameEvent",id:"sendgameevent",level:5},{value:"sendInfoUpdate",id:"sendinfoupdate",level:5},{value:"Game Events Consumer (App)",id:"game-events-consumer-app",level:3},{value:"API",id:"api-1",level:4},{value:"Subscribe",id:"subscribe",level:5},{value:"Return value",id:"return-value",level:6},{value:"Unsubscribe",id:"unsubscribe",level:5},{value:"Return value",id:"return-value-1",level:6},{value:"Sync",id:"sync",level:5},{value:"Return value",id:"return-value-2",level:6}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"protocol-component-overview"},"Protocol Component overview"),(0,r.kt)("p",null,"The WebSocket Game Events Provider (GEP) solution includes the following components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Active Games Folder"),(0,r.kt)("li",{parentName:"ol"},"Game Events Provider (Game)"),(0,r.kt)("li",{parentName:"ol"},"Game Events Consumer (App)")),(0,r.kt)("h3",{id:"active-games-folder"},"Active Games Folder"),(0,r.kt)("p",null,"A folder located at \u201c%appdata%/GEP\u201d, containing .ini files. Each file contains a single key-value pair, with the key being an active game\u2019s name, and the value being the game\u2019s websocket\u2019s port."),(0,r.kt)("p",null,"To keep the folder clean, every game is responsible for deleting its file once the game is closed."),(0,r.kt)("h3",{id:"game-events-provider-game"},"Game Events Provider (Game)"),(0,r.kt)("p",null,"Provides events from the game via a local server WebSocket. The game is responsible for opening the socket, detecting when the relevant events occur, and sending them to all connected sockets."),(0,r.kt)("p",null,"To allow the socket to be detected, once the socket is initialized, the game needs to create a new .ini file under the \u201cActive Games Folder\u201d, detailing the game name, and the socket\u2019s port."),(0,r.kt)("h4",{id:"event-types"},"Event Types"),(0,r.kt)("h5",{id:"game-events"},"Game Events"),(0,r.kt)("p",null,"Game events refer to fleeting changes in the game. An action performed by a player, a certain interaction with the environment, etc."),(0,r.kt)("p",null,"Game Events do not directly change the overall state of the game."),(0,r.kt)("h5",{id:"info-events"},"Info Events"),(0,r.kt)("p",null,"Info events refer to lasting changes in the game. The player exiting the save, a change in the game\u2019s phase, etc."),(0,r.kt)("p",null,"Info Events directly change the overall state of the game."),(0,r.kt)("h4",{id:"api"},"API"),(0,r.kt)("h5",{id:"sendgameevent"},"sendGameEvent"),(0,r.kt)("p",null,"Sends a new game event to a specific connection that is subscribed to it."),(0,r.kt)("p",null,"This is a notification, and does not expect a response from the consumer. As such, there is no request id."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonrpc"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"sendGameEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"The action to perform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing event name and data"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("h5",{id:"sendinfoupdate"},"sendInfoUpdate"),(0,r.kt)("p",null,"Sends a new info event to a specific connection that is subscribed to it."),(0,r.kt)("p",null,"This is a notification, and does not expect a response from the consumer. As such, there is no request id."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonrpc"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"sendInfoUpdate"),(0,r.kt)("td",{parentName:"tr",align:null},"The action to perform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing event name and data"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("h3",{id:"game-events-consumer-app"},"Game Events Consumer (App)"),(0,r.kt)("p",null,"Consumes events from a game via a local client WebSocket. The app is responsible for connecting to the game\u2019s socket, subscribing to the events it needs, and handling them once they arrive."),(0,r.kt)("p",null,"To locate potential games to connect to, the app should periodically scan the \u201cActive Games Folder\u201d, attempting to connect to any valid connection it deems important."),(0,r.kt)("h4",{id:"api-1"},"API"),(0,r.kt)("p",null,"The consumer may call these methods on the game, using the json-rpc protocol."),(0,r.kt)("h5",{id:"subscribe"},"Subscribe"),(0,r.kt)("p",null,"Requests to subscribe the current app to new events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonrpc"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique for each message"),(0,r.kt)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"The action to perform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of events"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("h6",{id:"return-value"},"Return value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "subscribedTo"?: string[] // An array of all the events successfully subscribed to\n        "subscriptionFailed"?: string[] // An array of all the events subscribing to failed\n    }\n    "success": true\n}\n')),(0,r.kt)("p",null,"The \u201csuccess\u201d parameter is true if at least one event was subscribed to. False otherwise."),(0,r.kt)("h5",{id:"unsubscribe"},"Unsubscribe"),(0,r.kt)("p",null,"Requests to subscribe the current app to new events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonrpc"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique for each message"),(0,r.kt)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"unsubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"The action to perform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of events"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("h6",{id:"return-value-1"},"Return value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "unsubscribedFrom"?: string[] // An array of all the events successfully unsubscribed from\n        "unsubscriptionFailed"?: string[] // An array of all the events unsubscribing from failed\n    }\n    "success": true\n}\n')),(0,r.kt)("p",null,"The \u201csuccess\u201d parameter is true if at least one event was unsubscribed from. False otherwise."),(0,r.kt)("h5",{id:"sync"},"Sync"),(0,r.kt)("p",null,"Requests a forced synchronization of the game\u2019s current game-state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonrpc"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique for each message"),(0,r.kt)("td",{parentName:"tr",align:null},"The correlation identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"sync"),(0,r.kt)("td",{parentName:"tr",align:null},"The action to perform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"No parameters")))),(0,r.kt)("h6",{id:"return-value-2"},"Return value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "result": {\n        "gameState": object // An object containing the current state of all info-events data\n    }\n    "success": true\n}\n')),(0,r.kt)("p",null,"The \u201csuccess\u201d parameter is true if a gameState was returned. False otherwise.\nOn failure, the \u201cresult\u201d parameter is null."))}m.isMDXComponent=!0}}]);