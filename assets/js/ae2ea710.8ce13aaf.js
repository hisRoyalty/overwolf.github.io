"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8102],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,h=m["".concat(l,".").concat(f)]||m[f]||d[f]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const s={id:"using-events",image:"/img/embed/api-best-practices.jpg",title:"Using game events in your app",sidebar_label:"Using game events in your app",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"topics/using-events/using-events",id:"topics/using-events/using-events",title:"Using game events in your app",description:"Overwolf supports events for multiple games, and for each supported game, there are many game events: kills, deaths, victories, damage caused, gold spent, and many others.",source:"@site/../pages/topics/using-events/using-events.mdx",sourceDirName:"topics/using-events",slug:"/topics/using-events/",permalink:"/topics/using-events/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-events/using-events.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1724336465,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{id:"using-events",image:"/img/embed/api-best-practices.jpg",title:"Using game events in your app",sidebar_label:"Using game events in your app",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"DxDiag",permalink:"/topics/understanding-overwolf-logs/dxdiag"},next:{title:"JavaScript events overview",permalink:"/topics/using-events/events-overview"}},l={},p=[{value:"Features Overview",id:"features-overview",level:2},{value:"Feature types",id:"feature-types",level:2},{value:"feature example: &quot;Death&quot; feature in LoL",id:"feature-example-death-feature-in-lol",level:4},{value:"How to register to features",id:"how-to-register-to-features",level:2},{value:"1. Update your manifest file",id:"1-update-your-manifest-file",level:3},{value:"set the relevant game events",id:"set-the-relevant-game-events",level:4},{value:"set the overlay permissions",id:"set-the-overlay-permissions",level:4},{value:"set auto-launch",id:"set-auto-launch",level:4},{value:"2. Listen to info updates or events",id:"2-listen-to-info-updates-or-events",level:3},{value:"Listen to game events",id:"listen-to-game-events",level:4},{value:"Listen to info updates",id:"listen-to-info-updates",level:4},{value:"3. Call setRequiredFeatures()",id:"3-call-setrequiredfeatures",level:3},{value:"4. Get current info state",id:"4-get-current-info-state",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overwolf supports events for multiple games, and for each supported game, there are many game events: kills, deaths, victories, damage caused, gold spent, and many others."),(0,r.kt)("p",null,"The full list of supported games with their Game ID\u2019s is always up to date and can be found ",(0,r.kt)("a",{parentName:"p",href:"/api/games/ids"},"here"),"."),(0,r.kt)("p",null,"In this guide, we'll discuss the different types of Overwolf game events features, how to register to these game events, and how to consume them from your OW app, using the ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events"},"overwolf.games.events API"),"."),(0,r.kt)("p",null,"If you like to get general info updates about the currently running game, like process name, focus, command line info, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/api/games"},"overwolf.games")," API. You don't even have to register for features and real-time game events. "),(0,r.kt)("h2",{id:"features-overview"},"Features Overview"),(0,r.kt)("p",null,"Each supported game has its own set of available features.\nA feature is a category of related game events, for example 'Match Start', 'Match End', 'Match Outcome' are all events belonging to the Match feature.  "),(0,r.kt)("p",null,"You can review the supported features for each game in the relevant game page found on the sidebar menu, for example, ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/league-of-legends"},"the League of Legends page"),"."),(0,r.kt)("h2",{id:"feature-types"},"Feature types"),(0,r.kt)("p",null,"Each feature is broken down into two entity types: ",(0,r.kt)("strong",{parentName:"p"},"info updates")," and ",(0,r.kt)("strong",{parentName:"p"},"events"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Info Updates")," \u2013 game information changes that define the game\u2019s current status.",(0,r.kt)("br",{parentName:"p"}),"\n","For example - a match is currently taking place.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Events")," \u2013 specific events that happen in the game.",(0,r.kt)("br",{parentName:"p"}),"\n","For example - You just got killed."))),(0,r.kt)("p",null,"A single feature can contain multiple info updates and events.  "),(0,r.kt)("p",null,"On the next clause, you are going to learn how to ",(0,r.kt)("a",{parentName:"p",href:"#how-to-register-to-features"},"register to features")," and listen to events or info updates."),(0,r.kt)("h4",{id:"feature-example-death-feature-in-lol"},'feature example: "Death" feature in LoL'),(0,r.kt)("p",null,'The "Death" feature in League of Legends has a:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"death" ',(0,r.kt)("strong",{parentName:"p"},"event"),", which fires when the player's champion died.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"deaths" ',(0,r.kt)("strong",{parentName:"p"},"info update"),", holds a counter for the total number of player deaths in the current session."))),(0,r.kt)("h2",{id:"how-to-register-to-features"},"How to register to features"),(0,r.kt)("p",null,"To make sure the data you have is full and consistent, please follow these steps in order:"),(0,r.kt)("h3",{id:"1-update-your-manifest-file"},"1. Update your manifest file"),(0,r.kt)("h4",{id:"set-the-relevant-game-events"},"set the relevant game events"),(0,r.kt)("p",null,"The first step is to declare the game for which your app wants to register features.",(0,r.kt)("br",null),"\nThe declaration is made by adding the game\u2019s class ID under the ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#game_events"},"game_events")," section in your manifest.json.",(0,r.kt)("br",{parentName:"p"}),"\n","This property is an array of ",(0,r.kt)("a",{parentName:"p",href:"/api/games/ids"},"game class ids")," that the app wants to register for.  "),(0,r.kt)("p",null,"Note that a single app can register for multiple games, but there is no wildcard support, so even if your app wants to consume events from all the supported games, you should set each one of them."),(0,r.kt)("p",null,"This is how the value would look like if the app is interested in receiving events for LoL and CS:GO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"data":{\n      "game_events":[5426, 7764]\n      ...\n   }\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This field define from which games exactly your app should receive real-time game events like kill, death, etc. If you don't need real-time game events and just want to get general game info and state for the current running game, you can leave this field (",(0,r.kt)("inlineCode",{parentName:"p"},"game_events"),") even empty, and use the ",(0,r.kt)("a",{parentName:"p",href:"/api/games"},"overwolf.games")," API.")),(0,r.kt)("h4",{id:"set-the-overlay-permissions"},"set the overlay permissions"),(0,r.kt)("p",null,"The second step is to set the game IDs that your app targeted and permitted to display in-game overlay windows on them"),(0,r.kt)("p",null,"This is how the value would look like if the app is interested in displaying an in-game overlay for LoL and CS:GO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"game_targeting": {\n    "type": "dedicated",\n    "game_ids": [5426, 7764]\n}\n')),(0,r.kt)("h4",{id:"set-auto-launch"},"set auto-launch"),(0,r.kt)("p",null,"If you like, you can define a list of games triggering the app to launch, using the ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#launch_events"},"launch_events")," manifest property."),(0,r.kt)("p",null,"This is how the value would look like if the app is interested to auto-launching for LoL and CS:GO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"launch_events": [{\n    "event": "GameLaunch",\n    "tracked": false,\n    "event_data": {\n        "game_ids": [5426, 7764],\n        "wait_for_stable_framerate": 30\n    },\n    "start_minimized": true\n}]\n')),(0,r.kt)("p",null,"Along with the option to launch your app when a specific game is started (or launch with all games), you can launch your app ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#enable-app-auto-launch-with-overwolf"},"when the OW client launches"),"."),(0,r.kt)("h3",{id:"2-listen-to-info-updates-or-events"},"2. Listen to info updates or events"),(0,r.kt)("p",null,"We mentioned above that each feature is broken down into two entity types: info updates and events.",(0,r.kt)("br",{parentName:"p"}),"\n","The next step is to add a listener to the relevant entity type in your code.  "),(0,r.kt)("h4",{id:"listen-to-game-events"},"Listen to game events"),(0,r.kt)("p",null,"You can receive this entity type by registering to the ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#onnewevents"},"overwolf.games.events.onNewEvents")," event listener."),(0,r.kt)("h4",{id:"listen-to-info-updates"},"Listen to info updates"),(0,r.kt)("p",null,"You can receive this entity type by registering to the ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#oninfoupdates2"},"overwolf.games.events.onInfoUpdates2")," event listener.  "),(0,r.kt)("p",null,"To get all the current info state and all the info-updates that happend BEFORE you registered to this event listener, make sure to call ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#getinfocallback"},"overwolf.games.events.getInfo()"),". Read more about it on ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#4-get-current-info-state"},"chapter 4"),". "),(0,r.kt)("h3",{id:"3-call-setrequiredfeatures"},"3. Call setRequiredFeatures()"),(0,r.kt)("p",null,"The final step is to call ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#setrequiredfeaturesfeatures-callback"},"overwolf.games.events.setRequiredFeatures"),". Once the app wants to start receiving specific info updates and events, you call this function with an array of feature names that you would like your app to use."),(0,r.kt)("p",null,"This is an example when an app requires Rocket League features:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"overwolf.games.events.setRequiredFeatures(['stats', 'match'], function(info) {\n    console.log(info);\n});\n")),(0,r.kt)("h3",{id:"4-get-current-info-state"},"4. Get current info state"),(0,r.kt)("p",null,"In some cases, you might add the listener to ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#oninfoupdates2"},"onInfoUpdates2")," or to ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#onnewevents"},"onNewEvents")," AFTER the info update has already happened so that the app will miss the info-update event."),(0,r.kt)("p",null,"Also, you might want to receive all info updates that happened before ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#setrequiredfeaturesfeatures-callback"},"setRequiredFeatures()")," succeeded."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For those reasons, as a final step, you should call ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events#getinfocallback"},"overwolf.games.events.getInfo()")," to get the current info state.")))}m.isMDXComponent=!0}}]);