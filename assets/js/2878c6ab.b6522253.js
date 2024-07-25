"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7815],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"input-tracking",image:"/img/embed/api-docs.jpg",title:"overwolf.games.inputTracking API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/games/input-tracking",id:"api/games/input-tracking",title:"overwolf.games.inputTracking API",description:"Provides keyboard and mouse activity information while the user is in-game.",source:"@site/../pages/api/games/input-tracking.mdx",sourceDirName:"api/games",slug:"/api/games/input-tracking",permalink:"/api/games/input-tracking",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/input-tracking.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721917552,formattedLastUpdatedAt:"Jul 25, 2024",frontMatter:{id:"input-tracking",image:"/img/embed/api-docs.jpg",title:"overwolf.games.inputTracking API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Various External APIs",permalink:"/api/games/external-apis"},next:{title:"overwolf.games.tracked API",permalink:"/api/games/tracked"}},u={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getActivityInformation(callback)",id:"getactivityinformationcallback",level:2},{value:"Version added: 0.92",id:"version-added-092",level:4},{value:"Notes",id:"notes",level:4},{value:"getMatchActivityInformation(callback)",id:"getmatchactivityinformationcallback",level:2},{value:"Version added: 0.92",id:"version-added-092-1",level:4},{value:"getMousePosition(callback)",id:"getmousepositioncallback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"init(callback)",id:"initcallback",level:2},{value:"Version added: 0.160",id:"version-added-0160",level:4},{value:"onKeyUp",id:"onkeyup",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Using the onKeyUp event",id:"using-the-onkeyup-event",level:4},{value:"onKeyDown",id:"onkeydown",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"Using the onKeyDown event",id:"using-the-onkeydown-event",level:4},{value:"onMouseUp",id:"onmouseup",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"onMouseDown",id:"onmousedown",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"onMouseWheel",id:"onmousewheel",level:2},{value:"Version added: 0.158",id:"version-added-0158",level:4},{value:"InputActivity Object",id:"inputactivity-object",level:2},{value:"MousePosition Object",id:"mouseposition-object",level:2},{value:"GetActivityResult Object",id:"getactivityresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetMousePositionResult Object",id:"getmousepositionresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"KeyEvent Object",id:"keyevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"MouseEvent Object",id:"mouseevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success-1",level:4},{value:"WheelEvent Object",id:"wheelevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success-2",level:4}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provides keyboard and mouse activity information while the user is in-game."),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getactivityinformationcallback"},"overwolf.games.inputTracking.getActivityInformation()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getmatchactivityinformationcallback"},"overwolf.games.inputTracking.getMatchActivityInformation()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getmousepositioncallback"},"overwolf.games.inputTracking.getMousePosition()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#initcallback"},"overwolf.games.inputTracking.init()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onkeyup"},"overwolf.games.inputTracking.onKeyUp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onkeydown"},"overwolf.games.inputTracking.onKeyDown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onmouseup"},"overwolf.games.inputTracking.onMouseUp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onmousedown"},"overwolf.games.inputTracking.onMouseDown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onmousewheel"},"overwolf.games.inputTracking.onMouseWheel"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputactivity-object"},"overwolf.games.inputTracking.InputActivity")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mouseposition-object"},"overwolf.games.inputTracking.MousePosition")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getactivityresult-object"},"overwolf.games.inputTracking.GetActivityResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getmousepositionresult-object"},"overwolf.games.inputTracking.GetMousePositionResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#keyevent-object"},"overwolf.games.inputTracking.KeyEvent")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#mouseevent-object"},"overwolf.games.inputTracking.MouseEvent")," Object")),(0,l.kt)("h2",{id:"getactivityinformationcallback"},"getActivityInformation(callback)"),(0,l.kt)("h4",{id:"version-added-092"},"Version added: 0.92"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns input activity information.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getactivityresult-object"},"(Result:GetActivityResult)")," => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with input activity information")))),(0,l.kt)("h4",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The information includes key presses and clicks for keyboard/mouse, total session time, idle time and overall actions-per-minute. This information resets between game executions."),(0,l.kt)("li",{parentName:"ul"},"When a new game starts, we reset the entire session - when the game ends, the last activity information is available until the next game session."),(0,l.kt)("li",{parentName:"ul"},"You have to play for 5 minutes and have at least 30 keys to be eligible.")),(0,l.kt)("h2",{id:"getmatchactivityinformationcallback"},"getMatchActivityInformation(callback)"),(0,l.kt)("h4",{id:"version-added-092-1"},"Version added: 0.92"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns input activity information (similar to ",(0,l.kt)("a",{parentName:"p",href:"#getactivityinformationcallback"},"getActivityInformation()"),"), however, when this is supported, it will return data only for the latest match of the current game.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This function is currently not working as expected. As a workaround, you can use ",(0,l.kt)("a",{parentName:"p",href:"#getactivityinformationcallback"},"getctivityInformation()")," and manually identify matches and calculate the deltas between them.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getactivityresult-object"},"(Result:GetActivityResult)")," => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with input activity information")))),(0,l.kt)("p",null,"In order to get the information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The latest match must have lasted for more than 5 minutes."),(0,l.kt)("li",{parentName:"ul"},"The user must have clicked more than 30 times on either keyboard or mouse.")),(0,l.kt)("h2",{id:"getmousepositioncallback"},"getMousePosition(callback)"),(0,l.kt)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the last mouse position in game.")),(0,l.kt)("p",null,"The data includes the mouse position and a boolean stating whether the click was in the game or on an Overwolf widget (onGame)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getmousepositionresult-object"},"(Result:GetMousePositionResult)")," => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with input activity information")))),(0,l.kt)("p",null,"Note that you need to call ",(0,l.kt)("a",{parentName:"p",href:"#initcallback"},"init()")," before calling this function, OR, register to one of the events: ",(0,l.kt)("a",{parentName:"p",href:"#onmouseup"},"onMouseUp"),", ",(0,l.kt)("a",{parentName:"p",href:"#onmousedown"},"onMouseDown"),", ",(0,l.kt)("a",{parentName:"p",href:"#onmousewheel"},"onMouseWheel"),".  "),(0,l.kt)("p",null,"Otherwise, you will get an error: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{status: "error", reason: "Input tracking not initialized."}`\n')),(0,l.kt)("h2",{id:"initcallback"},"init(callback)"),(0,l.kt)("h4",{id:"version-added-0160"},"Version added: 0.160"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For using ",(0,l.kt)("a",{parentName:"p",href:"#getmousepositioncallback"},"getMousePosition")," without pre-register to events.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,l.kt)("h2",{id:"onkeyup"},"onKeyUp"),(0,l.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when a keyboard key has been released, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#keyevent-object"},"KeyEvent")," Object.")),(0,l.kt)("p",null,"The event information includes the virtual key code (key) and a boolean stating whether the keypress was in the game or on an Overwolf widget (onGame)."),(0,l.kt)("h4",{id:"using-the-onkeyup-event"},"Using the onKeyUp event"),(0,l.kt)("p",null,"We will use it to catch the user's keypress release, for example, catch the tab release:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.games.inputTracking.onKeyUp.addListener(function(info) {\n    if(info.key == "9") //9=tab\n        console.log("Tab key released: " + JSON.stringify(info));\n});\n')),(0,l.kt)("h2",{id:"onkeydown"},"onKeyDown"),(0,l.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when a keyboard key has been pressed, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#keyevent-object"},"KeyEvent")," Object.")),(0,l.kt)("h4",{id:"using-the-onkeydown-event"},"Using the onKeyDown event"),(0,l.kt)("p",null,"We can use it to catch the user's keypress, for example, catch the tab keypress:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.games.inputTracking.onKeyDown.addListener(function(info) {\n    if(info.key == "9") //9=tab\n        console.log("Tab key pressed: " + JSON.stringify(info));\n});\n')),(0,l.kt)("p",null,"The event also returns a boolean stating whether that keypress happened in the game or outside of it."),(0,l.kt)("p",null,"Note that it's not recommended to use this method (catching user keypresses) for hotkeys.",(0,l.kt)("br",{parentName:"p"}),"\n","For that, use the ",(0,l.kt)("a",{parentName:"p",href:"../settings/hotkeys"},"overwolf.settings.hotkeys")," API."),(0,l.kt)("h2",{id:"onmouseup"},"onMouseUp"),(0,l.kt)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when a mouse key has been released, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#mouseevent-object"},"MouseEvent")," Object.")),(0,l.kt)("p",null,"The event information includes whether the left or right mouse button was clicked (button), x and y coordinates (x, y) and a boolean stating whether the keypress was in the game or on an Overwolf widget (onGame)."),(0,l.kt)("h2",{id:"onmousedown"},"onMouseDown"),(0,l.kt)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when a mouse key has been pressed, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#mouseevent-object"},"MouseEvent")," Object.")),(0,l.kt)("h2",{id:"onmousewheel"},"onMouseWheel"),(0,l.kt)("h4",{id:"version-added-0158"},"Version added: 0.158"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when a mouse wheel has been used, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#wheelevent-object"},"WheelEvent")," Object.")),(0,l.kt)("h2",{id:"inputactivity-object"},"InputActivity Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aTime"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active time. total active time in minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iTime"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"idle time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apm"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"actions per minute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mouse"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{ total: number, dist: number, keys: any }")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyboard"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{ total: number, keys: any }")))),(0,l.kt)("h2",{id:"mouseposition-object"},"MousePosition Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onGame"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handle"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{ value: number }")))),(0,l.kt)("h2",{id:"getactivityresult-object"},"GetActivityResult Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activity"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#inputactivity-object"},"InputActivity")," object"),(0,l.kt)("td",{parentName:"tr",align:null},"the input  activity information")))),(0,l.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "success":true,\n   "activity":{  \n      "mouse":{  \n         "total":424,\n         "dist":111176,\n         "keys":{  \n            "M_Right":413,\n            "M_Left":11\n         }\n      },\n      "keyboard":{  \n         "total":83,\n         "keys":{  \n            "4":1,\n            "Q":20,\n            "W":20,\n            "E":19,\n            "R":10,\n            "SPACE":4,\n            "LCONTROL+TAB":2,\n            "TAB":2,\n            "ESCAPE":2,\n            "LMENU+F4":1,\n            "F":1,\n            "OEM_3":1\n         }\n      },\n      "aTime":4.36,\n      "iTime":1.31,\n      "apm":116\n   }\n}\n')),(0,l.kt)("h2",{id:"getmousepositionresult-object"},"GetMousePositionResult Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mousePosition"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mouseposition-object"},"MousePosition")," object"),(0,l.kt)("td",{parentName:"tr",align:null},"the input  activity information")))),(0,l.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "mousePosition": {\n        "x": 1741,\n        "y": 656,\n        "onGame": true,\n        "handle": {\n            "value": 526402\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"keyevent-object"},"KeyEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onGame"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "81",\n    "onGame": true\n}\n')),(0,l.kt)("h2",{id:"mouseevent-object"},"MouseEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"button"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onGame"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-success-1"},"Event data example: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "button": "xbutton2",\n    "x": 177,\n    "y": 529,\n    "onGame": true\n}\n')),(0,l.kt)("h2",{id:"wheelevent-object"},"WheelEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delta"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onGame"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-success-2"},"Event data example: Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "delta": "13",\n    "x": 177,\n    "y": 529,\n    "onGame": true\n}\n')))}m.isMDXComponent=!0}}]);