"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5105],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:194,image:"/img/embed/changelogs.jpg",title:"Version 0.194",sidebar_label:"0.194",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2022/march/194",id:"api/changelogs/overwolf-platform/2022/march/194",title:"Version 0.194",description:"* Note that iterations 192 to 194 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2022/march/194.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/march",slug:"/api/changelogs/overwolf-platform/2022/march/194",permalink:"/api/changelogs/overwolf-platform/2022/march/194",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/march/194.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723559306,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"194",image:"/img/embed/changelogs.jpg",title:"Version 0.194",sidebar_label:"0.194",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.195",permalink:"/api/changelogs/overwolf-platform/2022/april/195"},next:{title:"0.191",permalink:"/api/changelogs/overwolf-platform/2022/february/191"}},p={},s=[{value:"Game events",id:"game-events",level:3},{value:"Platform",id:"platform",level:3},{value:"Recording Engine",id:"recording-engine",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note that iterations 192 to 194 were combined into a single iteration. ")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/dota-2"},"Dota")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Due to a recent game update that disable GSI (Game State Integration) and in order for Overwolf apps to work correctly please read the note ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/dota-2"},"here")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-games/league-of-legends"},"League of Legends")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Add new event "team_frames" for the counter of the ultimate cooldown of the players in the game'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/live-game-data/supported-launchers/league-of-legends"},"LEP - lol launcher")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Add new info update at the end of each game with the total "league points" (LP) earned in the last game, see notes ',(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-launchers/league-of-legends#league_points_stats-note"},"here")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/live-game-data/deprecated/counter-strike-global-offensive"},"CS:GO")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ping event"),(0,n.kt)("li",{parentName:"ul"},"Add nickname, ping and local_player parameters to the scoreboard - see notes ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/deprecated/counter-strike-global-offensive#scoreboard"},"here"))))),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved Overwolf's memory footprint."),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"manifest.json"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"author_display")," - located under the ",(0,n.kt)("inlineCode",{parentName:"li"},"meta")," object. Changes the author\nname without changing the app's UID.")))),(0,n.kt)("h3",{id:"recording-engine"},"Recording Engine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OW-OBS is now using OBS version 27.2.3")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an ",(0,n.kt)("a",{parentName:"li",href:"https://discuss.overwolf.com/t/monitorhandle-value-does-not-always-match-monitor-list-handle-values/2484"},"issue")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"overwolf.utils.getMonitorsList"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed an ",(0,n.kt)("a",{parentName:"li",href:"https://discuss.overwolf.com/t/recording-not-stopping-when-game-is-closed-cs-go-cod-warzone/2465"},"issue")," where the Overwolf recording process wouldn't shut down when exiting the game."),(0,n.kt)("li",{parentName:"ul"},"Created a recovery mechanism when Overwolf apps fail validation."),(0,n.kt)("li",{parentName:"ul"},"Fixed cases of Overwolf not detecting processes sometimes, such as the\n",(0,n.kt)("em",{parentName:"li"},"League of Legends launcher"),".")))}u.isMDXComponent=!0}}]);