"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8919],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},12807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:195,image:"/img/embed/changelogs.jpg",title:"Version 0.195",sidebar_label:"0.195",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/april/195",id:"api/changelogs/overwolf-platform/2022/april/195",title:"Version 0.195",description:"Dev Console",source:"@site/../pages/api/changelogs/overwolf-platform/2022/april/195.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/april",slug:"/api/changelogs/overwolf-platform/2022/april/195",permalink:"/api/changelogs/overwolf-platform/2022/april/195",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/april/195.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"195",image:"/img/embed/changelogs.jpg",title:"Version 0.195",sidebar_label:"0.195",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.198",permalink:"/api/changelogs/overwolf-platform/2022/may/198"},next:{title:"0.194",permalink:"/api/changelogs/overwolf-platform/2022/march/194"}},s={},p=[{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"dev-console"},"Dev Console"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soon")),(0,r.kt)("h3",{id:"game-events"},"Game events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/teamfight-tactics"},"Teamfight Tactics"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Add new info update "augments" for the list of available augments feature in the match - see notes ',(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/teamfight-tactics#me"},"here")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/fortnite"},"Fortnite"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add new info update for ping and skirmish data - see notes ",(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/fortnite"},"here"))))),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New API: ",(0,r.kt)("a",{parentName:"li",href:"/api/games/tracked#onunsupportedexecuted"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.tracked.onUnsupportedExecuted")),' - a listener function that will trigger when a process that is defined as "Unsupported" in the Gameslist launches. It\'s important to note that it will only trigger if the app has defined ',(0,r.kt)("inlineCode",{parentName:"li"},'"track_all_games":true')," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json"),".")),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," flag:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"track_all_games")," is a new optional manifest flag located under the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#launch_event_settings-array"},(0,r.kt)("inlineCode",{parentName:"a"},"launch_events")),' property,\nIt can only be used in conjuction when the "tracked" property is set to true.\nThis flag will cause the app to launch whenever a process defined in the Gameslist launches, regardless of whether it has overlay support or not.')))),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hotkeys will now work on first launch when loading extension as unpacked."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with video composition if the file path has a quote ( ` ) char"),(0,r.kt)("li",{parentName:"ul"},"Fixed an out of memory issue when using our API to share large videos on YouTube."),(0,r.kt)("li",{parentName:"ul"},"Fixed cases when calling ",(0,r.kt)("inlineCode",{parentName:"li"},"bringToFront")," changes the window maximized state. "),(0,r.kt)("li",{parentName:"ul"},"Resolved a case where we grabbed window focus upon creation of native windows, if the window was created as soon as a game was launched.")))}m.isMDXComponent=!0}}]);