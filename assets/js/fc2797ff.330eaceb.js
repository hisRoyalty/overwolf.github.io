"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8601],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(25773),r=(n(27378),n(35318));const l={id:"launchers",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers API",sidebar_position:-1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/games/launchers/launchers",id:"api/games/launchers/launchers",title:"overwolf.games.launchers API",description:"Returns an object with events and functions related to game launcher status.",source:"@site/../pages/api/games/launchers/launchers.mdx",sourceDirName:"api/games/launchers",slug:"/api/games/launchers/",permalink:"/api/games/launchers/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/launchers/launchers.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716876849,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:-1,frontMatter:{id:"launchers",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers API",sidebar_position:-1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games.events API",permalink:"/api/games/events/"},next:{title:"Launchers IDs",permalink:"/api/games/launchers/ids"}},u={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getRunningLaunchersInfo(callback)",id:"getrunninglaunchersinfocallback",level:2},{value:"Version added: 0.103",id:"version-added-0103",level:4},{value:"onUpdated",id:"onupdated",level:2},{value:"Version added: 0.103",id:"version-added-0103-1",level:4},{value:"onLaunched",id:"onlaunched",level:2},{value:"Version added: 0.103",id:"version-added-0103-2",level:4},{value:"onTerminated",id:"onterminated",level:2},{value:"Version added: 0.103",id:"version-added-0103-3",level:4},{value:"GetRunningLaunchersInfoResult Object",id:"getrunninglaunchersinforesult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"LauncherInfo Object",id:"launcherinfo-object",level:2},{value:"Position Object",id:"position-object",level:2},{value:"UpdatedEvent Object",id:"updatedevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns an object with events and functions related to game launcher status."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getrunninglaunchersinfocallback"},"overwolf.games.launchers.getRunningLaunchersInfo()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onupdated"},"overwolf.games.launchers.onUpdated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlaunched"},"overwolf.games.launchers.onLaunched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onterminated"},"overwolf.games.launchers.onTerminated"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getrunninglaunchersinforesult-object"},"overwolf.games.launchers.GetRunningLaunchersInfoResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updatedevent-object"},"overwolf.games.launchers.UpdatedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#launcherinfo-object"},"overwolf.games.launchers.LauncherInfo")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#position-object"},"overwolf.games.launchers.Position")," Object")),(0,r.kt)("h2",{id:"getrunninglaunchersinfocallback"},"getRunningLaunchersInfo(callback)"),(0,r.kt)("h4",{id:"version-added-0103"},"Version added: 0.103"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns an object with information about currently running launchers.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getrunninglaunchersinforesult-object"},"(Result:GetRunningLaunchersInfoResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the currently running detected launchers")))),(0,r.kt)("h2",{id:"onupdated"},"onUpdated"),(0,r.kt)("h4",{id:"version-added-0103-1"},"Version added: 0.103"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when launcher info is updated, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#updatedevent-object"},"UpdatedEvent")," Object.")),(0,r.kt)("h2",{id:"onlaunched"},"onLaunched"),(0,r.kt)("h4",{id:"version-added-0103-2"},"Version added: 0.103"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a launcher has launched, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#launcherinfo-object"},"LauncherInfo")," Object.")),(0,r.kt)("h2",{id:"onterminated"},"onTerminated"),(0,r.kt)("h4",{id:"version-added-0103-3"},"Version added: 0.103"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a launcher is closed, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#launcherinfo-object"},"LauncherInfo")," Object.")),(0,r.kt)("h2",{id:"getrunninglaunchersinforesult-object"},"GetRunningLaunchersInfoResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"launchers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#launcherinfo-object"},"LauncherInfo"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of currently running detected launchers")))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "success": true,\n   "launchers":[  \n      {  \n         "title":"League of Legends Launcher",\n         "id":54271,\n         "classId":5427,\n         "isInFocus":false,\n         "position":{  \n            "top":252,\n            "left":2066,\n            "width":1280,\n            "height":720\n         },\n         "handle":329882,\n         "commandLine":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe "--release=0.0.0.35" "--remoting-auth-token=scIN957coAwcbo0WW78nzg" "--rads-product-directory=E:/Games/RADS/solutions/league_client_sln/releases/0.0.0.35/deploy/" "--respawn-command=LeagueClient.exe" "--respawn-display-name=League of Legends" "--app-port=57610" "--install-directory=E:/Games/" "--app-name=LeagueClient" "--ux-name=LeagueClientUx" "--ux-helper-name=LeagueClientUxHelper" "--log-dir=LeagueClient Logs" "--bugsplat-name=league_client_riotgames_com" "--bugsplat-platform-id=EUW1" "--project=LeagueClient" "--app-log-file-path=E:/Games/Logs/LeagueClient Logs/2017-04-20T11-12-28_9576_LeagueClient.log" "--app-pid=9576"",\n         "processId":1468,\n         "path":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe"\n      }\n   ]\n}\n')),(0,r.kt)("h2",{id:"launcherinfo-object"},"LauncherInfo Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isInFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#position-object"},"Position")," object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handle"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandLine"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"position-object"},"Position Object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the launcher\u2019s window position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"updatedevent-object"},"UpdatedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#launcherinfo-object"},"LauncherInfo")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Launcher info data"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeType"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"New game info data"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"info":\n   {  \n         "title":"League of Legends Launcher",\n         "id":54271,\n         "classId":5427,\n         "isInFocus":false,\n         "position":{  \n            "top":252,\n            "left":2066,\n            "width":1280,\n            "height":720\n         },\n         "handle":329882,\n         "commandLine":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe",\n         "processId":1468,\n         "path":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe"\n   },\n"changeType":\n   {\n     //including game name, game running, game terminated, game changing focus, etc.\n   }\n')))}s.isMDXComponent=!0}}]);