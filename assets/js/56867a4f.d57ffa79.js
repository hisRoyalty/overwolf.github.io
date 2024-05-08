"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2196],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||n;return a?i.createElement(m,l(l({ref:t},h),{},{components:a})):i.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(25773),r=(a(27378),a(35318));const n={id:"auto-highlights",image:"/img/embed/api-docs.jpg",title:"Auto-highlights supported games",sidebar_label:"Highlights supported games",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,o={unversionedId:"api/media/replays/auto-highlights",id:"api/media/replays/auto-highlights",title:"Auto-highlights supported games",description:"Game highlights overview",source:"@site/../pages/api/media/replays/auto-highlights.mdx",sourceDirName:"api/media/replays",slug:"/api/media/replays/auto-highlights",permalink:"/api/media/replays/auto-highlights",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/media/replays/auto-highlights.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1715164810,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"auto-highlights",image:"/img/embed/api-docs.jpg",title:"Auto-highlights supported games",sidebar_label:"Highlights supported games",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.media.replays API",permalink:"/api/media/replays/"},next:{title:"overwolf.media.videos API",permalink:"/api/media/videos"}},s={},p=[{value:"Game highlights overview",id:"game-highlights-overview",level:2},{value:"List of supported games",id:"list-of-supported-games",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Note",id:"note",level:4}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"game-highlights-overview"},"Game highlights overview"),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"../replays"},"overwolf.media.replays")," API, you can auto-detect and auto-capture game highlights."),(0,r.kt)("p",null,"When this feature is enabled, there's no need to understand each supported game's mechanics, game flow, edge cases, timings, etc. Just request any supported game's highlight, and OW provides you with a video file that includes this event."),(0,r.kt)("p",null,"Here you can find our guide on ",(0,r.kt)("a",{parentName:"p",href:"/topics/best-practices/video-capture#using-overwolfmediareplays"},"how to use and capture auto-highlights"),"."),(0,r.kt)("h2",{id:"list-of-supported-games"},"List of supported games"),(0,r.kt)("p",null,"Below, you can find a list of games that support highlights.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LoL"),(0,r.kt)("li",{parentName:"ul"},"Dota 2"),(0,r.kt)("li",{parentName:"ul"},"Fortnite"),(0,r.kt)("li",{parentName:"ul"},"CS:GO"),(0,r.kt)("li",{parentName:"ul"},"PUBG"),(0,r.kt)("li",{parentName:"ul"},"PUBG Lite"),(0,r.kt)("li",{parentName:"ul"},"R6"),(0,r.kt)("li",{parentName:"ul"},"Apex"),(0,r.kt)("li",{parentName:"ul"},"World Of Tanks"),(0,r.kt)("li",{parentName:"ul"},"RL"),(0,r.kt)("li",{parentName:"ul"},"WoWs"),(0,r.kt)("li",{parentName:"ul"},"HotS"),(0,r.kt)("li",{parentName:"ul"},"Valorant"),(0,r.kt)("li",{parentName:"ul"},"Overwatch"),(0,r.kt)("li",{parentName:"ul"},"Call of Duty: Warzone")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To check using the API if a particular game is supporting auto-highlights, you can use ",(0,r.kt)("a",{parentName:"p",href:"../replays#gethighlightsfeaturesgameid-callback"},"overwolf.media.replays.getHighlightsFeatures()"))),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The highlights settings for all the games are saved in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"highlights.json"),", located under the OW installation folder. "),(0,r.kt)("p",null,"Note that every change of this file on your local OW client installation will be overwritten once the client is updated."),(0,r.kt)("p",null,"the gameID's defines each game, and for each game, there is an events array, that contains a list of features that support highlights."),(0,r.kt)("p",null,'An example highlights settings for "League of Legends":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"5426": { \n        "events": {\n            "death": {\n                "timing": {\n                    "past": 12000,\n                    "future": 3000,\n                    "pending": 12000\n                }\n            },\n            "assist": {\n                "timing": {\n                    "past": 12000,\n                    "future": 8000,\n                    "pending": 12000\n                }\n            }\n        }\n}\n')),(0,r.kt)("p",null,"As you can see, for each feature there is a timing object with three fields: past, future, pending."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Past - Time before the event to record."),(0,r.kt)("li",{parentName:"ul"},"Future - Time after the event to record."),(0,r.kt)("li",{parentName:"ul"},"Pending -Time that we wait for another event to trigger to merge several events into one highlight.",(0,r.kt)("br",{parentName:"li"}),"For example, if there is a Kill and immediately after, there is a Death. According to the pending value of the Kill, the two highlights might merge into one highlight video, instead of two overlapping videos.")),(0,r.kt)("h4",{id:"note"},"Note"),(0,r.kt)("p",null,"These settings are shared between ALL the OW apps, and each change in the capture timing affects all the other apps. Besides, only the OW team can edit this file as it's part of the client code (every local change will be overwritten on an OW client update)."),(0,r.kt)("p",null,"If you have any request for timing changes or adding new games/features to this list, please create a new ",(0,r.kt)("a",{parentName:"p",href:"/support/request-a-feature"},"feature request")," for it."))}u.isMDXComponent=!0}}]);