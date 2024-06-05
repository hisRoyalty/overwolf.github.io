"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5456],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(27378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=s,v=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function v(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(25773),s=(a(27378),a(35318));const r={id:"how-to-check-events-status-from-app",image:"/img/embed/api-best-practices.jpg",title:"Verifying events for your app",sidebar_label:"Verifying event status",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"topics/using-events/how-to-check-events-status-from-app",id:"topics/using-events/how-to-check-events-status-from-app",title:"Verifying events for your app",description:"As we discussed in the Error Handling page, it's important to properly communicate issues with your app to users in the right way. A simple and accurate message describing the state of the app will make for a better user experience and prevents bad user reviews.",source:"@site/../pages/topics/using-events/how-to-check-events-status-from-app.mdx",sourceDirName:"topics/using-events",slug:"/topics/using-events/how-to-check-events-status-from-app",permalink:"/topics/using-events/how-to-check-events-status-from-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-events/how-to-check-events-status-from-app.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1717589913,formattedLastUpdatedAt:"Jun 5, 2024",frontMatter:{id:"how-to-check-events-status-from-app",image:"/img/embed/api-best-practices.jpg",title:"Verifying events for your app",sidebar_label:"Verifying event status",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"JavaScript events overview",permalink:"/topics/using-events/events-overview"},next:{title:"Game events Simulator",permalink:"/topics/using-events/using-events-simulator"}},l={},p=[{value:"Event Health Levels",id:"event-health-levels",level:2},{value:"Review event status for all games",id:"review-event-status-for-all-games",level:2},{value:"Data Example: Success",id:"data-example-success",level:4},{value:"Review event status for a specific game",id:"review-event-status-for-a-specific-game",level:2},{value:"Data Example: Success",id:"data-example-success-1",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As we discussed in the Error Handling page, it's important to properly communicate issues with your app to users in the right way. A simple and accurate message describing the state of the app will make for a better user experience and prevents bad user reviews."),(0,s.kt)("h2",{id:"event-health-levels"},"Event Health Levels"),(0,s.kt)("p",null,"We measure app health and status using four levels of health:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"unsupported")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"green (Good to go)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"2"),(0,s.kt)("td",{parentName:"tr",align:null},"yellow (Partial functionality, some game events may be unavailable)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"3"),(0,s.kt)("td",{parentName:"tr",align:null},"red (Game events are unavailable)")))),(0,s.kt)("p",null,"Specific event health states are respectively green, yellow or red following the same scheme."),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"App States are being updated automatically so there might be a small delay (10~ min) between server state and the actual real-time status.")),(0,s.kt)("h2",{id:"review-event-status-for-all-games"},"Review event status for all games"),(0,s.kt)("p",null,"It's important to check the general status of events with all apps that use them. If it returns Yellow or Red state, you should research the issue and query the specific event and game that's showing issues. If your app does not function correctly you should communicate it to your users as soon as possible."),(0,s.kt)("p",null,"To get an events ",(0,s.kt)("a",{parentName:"p",href:"/status/"},"health status for ALL games")," you can query this endpoint, which will return a JSON with the supported games and each of their event health states:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"https://game-events-status.overwolf.com/gamestatus_prod.json\n")),(0,s.kt)("h4",{id:"data-example-success"},"Data Example: Success"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"game_id":10878,"state":0},\n    {"game_id":7764,"state":1},\n    {"game_id":7314,"state":1},\n    {"game_id":21216,"state":1},\n    {"game_id":10844,"state":3,"maintenance_msg":"Events are disabled","disabled":true},\n    {"game_id":10906,"state":1},\n    {"game_id":10798,"state":1},\n    {"game_id":6365,"state":1}\n]\n')),(0,s.kt)("h2",{id:"review-event-status-for-a-specific-game"},"Review event status for a specific game"),(0,s.kt)("p",null,"If you suspect an issue or regularly use Overwolf events in your app, we highly recommend you verify each event's health and communicate any issues to your users."),(0,s.kt)("p",null,"To get an event\u2019s health status for a specific game, you can query this endpoint, which will return a JSON with event states for a particular game:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"https://game-events-status.overwolf.com/[your Game ID]_prod.json\n")),(0,s.kt)("p",null,"Note that you should add your Game ID to this endpoint. For example, to check event health in LOL (Game ID 5426) you should call:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"https://game-events-status.overwolf.com/5426_prod.json\n")),(0,s.kt)("h4",{id:"data-example-success-1"},"Data Example: Success"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "game_id": 5426,\n    "state": 1,\n    "features": [{\n            "name": "abilities",\n            "state": 1,\n            "keys": [{\n                "name": "ability",\n                "type": 0,\n                "state": 1\n            }, {\n                "name": "usedAbility",\n                "type": 0,\n                "state": 1\n            }]\n        }\n    },\n    {\n        "name": "assist",\n        "state": 1,\n        "keys": [{\n            "name": "assist",\n            "type": 0,\n            "state": 1\n        }]\n    }\n    "name": "teams",\n    "state": 1,\n    "keys": [{\n        "name": "teams",\n        "type": 1,\n        "state": 1,\n        "category": "game_info"\n    }]\n}\n')))}c.isMDXComponent=!0}}]);