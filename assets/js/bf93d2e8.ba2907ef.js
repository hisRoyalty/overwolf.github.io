"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1636],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const l={id:"tracked",image:"/img/embed/api-docs.jpg",title:"overwolf.games.tracked API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/games/tracked",id:"api/games/tracked",title:"overwolf.games.tracked API",description:"Use this API to get information about games that are defined as unsupported in the Gameslist.",source:"@site/../pages/api/games/tracked.mdx",sourceDirName:"api/games",slug:"/api/games/tracked",permalink:"/api/games/tracked",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/tracked.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719492831,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"tracked",image:"/img/embed/api-docs.jpg",title:"overwolf.games.tracked API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games.inputTracking API",permalink:"/api/games/input-tracking"},next:{title:"overwolf.io API",permalink:"/api/io/"}},d={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getRunningGameInfo(callback)",id:"getrunninggameinfocallback",level:2},{value:"Version added: 0.199",id:"version-added-0199",level:4},{value:"onUnsupportedExecuted",id:"onunsupportedexecuted",level:2},{value:"Version added: 0.195",id:"version-added-0195",level:4},{value:"onTerminated",id:"onterminated",level:2},{value:"Version added: 0.83",id:"version-added-083",level:4},{value:"GetRunningGameInfoResult Object",id:"getrunninggameinforesult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"OnUnsupportedExecutedEvent Object",id:"onunsupportedexecutedevent-object",level:2},{value:"GameInfoType enum",id:"gameinfotype-enum",level:2}],m=(u="SkipMe",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const s={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Use this API to get information about games that are defined as unsupported in the Gameslist.\nRequires ",(0,r.kt)("inlineCode",{parentName:"p"},"tracked")," under the ",(0,r.kt)("a",{parentName:"p",href:"../manifest#launch_event_settings-array"},"launch_events")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json"))),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getrunninggameinfocallback"},"overwolf.games.tracked.getRunningGameInfo()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onunsupportedexecuted"},"overwolf.games.tracked.onUnsupportedExecuted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onterminated"},"overwolf.games.tracked.onTerminated")," ")),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getrunninggameinforesult-object"},"overwolf.games.tracked.GetRunningGameInfoResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onunsupportedexecutedevent-object"},"overwolf.games.tracked.OnUnsupportedExecutedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gameinfotype-enum"},"overwolf.games.tracked.GameInfoType")," Enum")),(0,r.kt)("h2",{id:"getrunninggameinfocallback"},"getRunningGameInfo(callback)"),(0,r.kt)("h4",{id:"version-added-0199"},"Version added: 0.199"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Unsupported games will not necessarily be detected as expected, and are by their very nature unsupported by default. Please make sure to test this for the specific game before using it in production!")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This method will only work for games with a ",(0,r.kt)("a",{parentName:"p",href:"#gameinfotype-enum"},"GameInfoType"),' of type "game"!')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"tracked")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"track_all_games")," are set to true in the ",(0,r.kt)("a",{parentName:"p",href:"../manifest#launch_event_settings-array"},"manifest"),", returns an object with information about the most recently launched game, similarly to the way ",(0,r.kt)("a",{parentName:"p",href:"../games#getrunninggameinfocallback"},"overwolf.games.getRunningGameInfo()")," works.")),(0,r.kt)("p",null,'Note: In a scenario when more than one game is running, we\'ll display information only from the latest one that was launched, including both "unsupported" ',(0,r.kt)("strong",{parentName:"p"},"and"),' "supported" games.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getrunninggameinforesult-object"},"(Result: GetRunningGameInfoResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns info about the currently running game")))),(0,r.kt)("h2",{id:"onunsupportedexecuted"},"onUnsupportedExecuted"),(0,r.kt)("h4",{id:"version-added-0195"},"Version added: 0.195"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"tracked")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"track_all_games")," under the ",(0,r.kt)("a",{parentName:"p",href:"../manifest#launch_event_settings-array"},"launch_events")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when an unsupported game process has launched, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#onunsupportedexecutedevent-object"},"OnUnsupportedExecutedEvent")," object.")),(0,r.kt)("h2",{id:"onterminated"},"onTerminated"),(0,r.kt)("h4",{id:"version-added-083"},"Version added: 0.83"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"tracked")," under the ",(0,r.kt)("a",{parentName:"p",href:"../manifest#launch_event_settings-array"},"launch_events")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when an unsupported game process has terminated.")),(0,r.kt)("h2",{id:"getrunninggameinforesult-object"},"GetRunningGameInfoResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isInFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game is currently in focus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isRunning"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game is currently running")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowsVideoCapture"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game allows video to be captured")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the title of the game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game ID concatenated with the Instance ID of the game. Divide it by 10 and round down to get the game ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the pixel width of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the pixel height of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logicalWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game-reported (logical) pixel width of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logicalHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game-reported (logical) pixel height of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current process id of the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderers"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns an array of the rendering technology names supported by the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detectedRenderer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the rendering technology detected by the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandLine"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game process commandline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the process type as a number. See ",(0,r.kt)("a",{parentName:"td",href:"#infotype-note-1"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typeAsString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the process type as a string. See ",(0,r.kt)("a",{parentName:"td",href:"#infotype-note-1"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowHandle"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current game window handle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorHandle"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current monitor handle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overlayInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#overlayinfo-object"},"OverlayInfo")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns info about the the running out of process overlays")))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success":true,\n    "isInFocus":false,\n    "isRunning":true,\n    "allowsVideoCapture":true,\n    "title":"Guild Wars",\n    "displayName":"",\n    "shortTitle":"",\n    "id":11361,\n    "classId":1136,\n    "width":1920,\n    "height":1080,\n    "logicalWidth":1920,\n    "logicalHeight":1080,\n    "processId": 3840,\n    "renderers":[\n        "D3D9"\n    ],\n    "detectedRenderer":"Unknown",\n    "executionPath":"D:/Games/Guild Wars/Gw.exe",\n    "sessionId":"3ced63b755724fd4ab1d3d2a210aa764",\n    "commandLine":"\\"D:/Games/Guild Wars/Gw.exe\\"",\n    "type":0,\n    "typeAsString":"Game",\n    "windowHandle":{\n        "value":0\n    },\n    "monitorHandle":{\n        "value":0\n    }\n}\n')),(0,r.kt)("h2",{id:"onunsupportedexecutedevent-object"},"OnUnsupportedExecutedEvent Object"),(0,r.kt)(m,{mdxType:"SkipMe"},"This is currently missing sessionId, executionPath, and oopOverlay These will be added in a docs refactor for game info TODO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isInFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game is currently in focus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isRunning"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game is currently running")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowsVideoCapture"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns whether the game allows video to be captured")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the title of the game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shortTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game ID concatenated with the Instance ID of the game. Divide it by 10 and round down to get the game ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the pixel width of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the pixel height of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logicalWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game-reported (logical) pixel width of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logicalHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game-reported (logical) pixel height of the game window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderers"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns an array of the rendering technology names supported by the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detectedRenderer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the rendering technology detected by the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandLine"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the game process commandline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the process type as a number. See ",(0,r.kt)("a",{parentName:"td",href:"#infotype-note-1"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typeAsString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the process type as a string. See ",(0,r.kt)("a",{parentName:"td",href:"#infotype-note-1"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overlayInputHookError"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that a hooking error has occurred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowHandle"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current game window handle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorHandle"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current monitor handle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current process id of the running game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"terminationUnixEpochTime"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of the game terminating")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overlayInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#overlayinfo-object"},"OverlayInfo")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns info about the the running out of process overlays")))),(0,r.kt)("h2",{id:"gameinfotype-enum"},"GameInfoType enum"),(0,r.kt)("p",null,"The type value for a process is determined by the ",(0,r.kt)("a",{parentName:"p",href:"ids#the-gamelistxml-file"},"gamelist")," entry for it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Game"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a Game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Launcher"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a launcher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application"),(0,r.kt)("td",{parentName:"tr",align:null},"This is an app")))))}g.isMDXComponent=!0}}]);