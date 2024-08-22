"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5766],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=o,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={id:"using-events-simulator",image:"/img/embed/api-best-practices.jpg",title:"Using the game events simulator App",sidebar_label:"Game events Simulator",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,s={unversionedId:"topics/using-events/using-events-simulator",id:"topics/using-events/using-events-simulator",title:"Using the game events simulator App",description:"Overview",source:"@site/../pages/topics/using-events/using-events-simulator.mdx",sourceDirName:"topics/using-events",slug:"/topics/using-events/using-events-simulator",permalink:"/topics/using-events/using-events-simulator",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-events/using-events-simulator.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1724312186,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{id:"using-events-simulator",image:"/img/embed/api-best-practices.jpg",title:"Using the game events simulator App",sidebar_label:"Game events Simulator",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Verifying event status",permalink:"/topics/using-events/how-to-check-events-status-from-app"},next:{title:"Downloader plugin",permalink:"/topics/using-plugins/downloader-plugin"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"&quot;no active game&quot; mode",id:"no-active-game-mode",level:2},{value:"1. Choose game feature",id:"1-choose-game-feature",level:2},{value:"2. Choose an event to trigger",id:"2-choose-an-event-to-trigger",level:2},{value:"3. Send the event to your app",id:"3-send-the-event-to-your-app",level:2},{value:"4. Trigger the event",id:"4-trigger-the-event",level:2},{value:"5. Listen to the simulated event",id:"5-listen-to-the-simulated-event",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This utility service can simulate events and updates for all Overwolf game events in any event-enabled game including: Fortnite, LOL, CS:GO, and the rest of the ",(0,o.kt)("a",{parentName:"p",href:"/status/"},"list"),". When the app identifies that one of the supported game is running, it automatically pulls the full list of features and events for that game from the Overwolf servers."),(0,o.kt)("p",null,"You can then simulate events and info updates of any sort you want to test and send it to your app using the Event Simulator."),(0,o.kt)("admonition",{title:"Using The Game Events Simulator",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Using the GEP simulator is relatively simple. However, there are a few things you should keep in mind before proceeding:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The GEP simulator utilizes internal Overwolf APIs, to give you greater testing capabilities. However, the simulator should only be used during the ",(0,o.kt)("em",{parentName:"strong"},"active development")," of your app!")),(0,o.kt)("li",{parentName:"ul"},"In order for the simulator to work, you must not change any of the `meta' fields in its manifest, apart from 'version'.")),(0,o.kt)("p",{parentName:"admonition"},"To download the latest version of the game events simulator, simply clone its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/gep-sim"},"repository"),".")),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"We recently added examples for each event type so you can simulate more easily."),(0,o.kt)("p",null,"The next major step planned for the sample app is adding in data validation features. Currently the app doesn't check the data it receives, so if you send an integer instead of a True/False flag for an integer field it will just not work. For now, please make sure you send data in the correct format and of the correct type per function."),(0,o.kt)("p",null,"We also might add the option to simulate game events without running the game itself down the road, making validation even easier."),(0,o.kt)("h2",{id:"no-active-game-mode"},'"no active game" mode'),(0,o.kt)("p",null,"When you start the app with no active game running, you will see the following screen. No active game is detected, and you can't really do anything till you run one of the supported games."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(1949).Z,width:"1314",height:"900"})),(0,o.kt)("h2",{id:"1-choose-game-feature"},"1. Choose game feature"),(0,o.kt)("p",null,"The app automatically pulls the list of available features for the active game."),(0,o.kt)("p",null,"Please review our API documentation to get a list of supported features, events and info updates each game can get."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(40103).Z,width:"1314",height:"900"})),(0,o.kt)("h2",{id:"2-choose-an-event-to-trigger"},"2. Choose an event to trigger"),(0,o.kt)("p",null,"Once you choose a feature, the list of events and info updates for this feature is pulled from the server. Note that some features contain only events or only info type updates.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(8893).Z,width:"1314",height:"900"})),(0,o.kt)("h2",{id:"3-send-the-event-to-your-app"},"3. Send the event to your app"),(0,o.kt)("p",null,"After a feature was selected, the sample data will be automatically fetched from the server.",(0,o.kt)("br",{parentName:"p"}),"\n",'You can than customize and set an exact value to send to the app as event data. Once the data is ready, just hit the "Trigger" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(63760).Z,width:"1314",height:"900"})),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},'On the "Listener data preview" window, you will get a preview of the data that your app listener will receive from the simulator. In a real game you will receive the data in the same format.  ')),(0,o.kt)("h2",{id:"4-trigger-the-event"},"4. Trigger the event"),(0,o.kt)("p",null,'Once you hit the "Trigger" button, the event is triggered and you can see the event was sent in the dev console.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(49283).Z,width:"1301",height:"887"})),(0,o.kt)("h2",{id:"5-listen-to-the-simulated-event"},"5. Listen to the simulated event"),(0,o.kt)("p",null,"In this stage, if your app is properly listening to the triggered event, it should respond to it. In addition, you can test it using our library of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-app"},"sample apps")," - these apps listen to all events,  so if you are running Apex for example, install the Apex events sample app, open the debug console, and you should see all triggered events coming in from the simulator as well as from the game itself."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(67961).Z,width:"1150",height:"412"})))}d.isMDXComponent=!0},40103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-ad178f3d295f25702b7240a333099812.png"},8893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-5c2c9ae6b8704be330810bd3783181b4.png"},63760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-aebaf5c8d7c94a3f986debe7ec877a22.png"},67961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-8037cb1cc52ae2035aaa3f5171c4d3d9.png"},1949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/non-active-853573701a2109bd7f708d3c1887ee8a.png"},49283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/simulator-usage-cde7475dbc66e3dd2480b5e62f8d8531.gif"}}]);