"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6093],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(25773),o=(n(27378),n(35318));const r={id:"league-of-legends",image:"/img/embed/getting-started.jpg",title:"League of Legends Game Compliance Guidelines",hide_title:!0,sidebar_label:"League of Legends",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"start/game-compliance/league-of-legends",id:"start/game-compliance/league-of-legends",title:"League of Legends Game Compliance Guidelines",description:"Competitive integrity is one of our core values, and we work tirelessly to enforce this value, both in-house and with the cooperation of game developers.",source:"@site/../pages/start/game-compliance/league-of-legends.mdx",sourceDirName:"start/game-compliance",slug:"/start/game-compliance/league-of-legends",permalink:"/start/game-compliance/league-of-legends",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/game-compliance/league-of-legends.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"league-of-legends",image:"/img/embed/getting-started.jpg",title:"League of Legends Game Compliance Guidelines",hide_title:!0,sidebar_label:"League of Legends",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Dota 2",permalink:"/start/game-compliance/dota-2"},next:{title:"New World",permalink:"/start/game-compliance/new-world"}},p={},s=[{value:"Riot Games app approval",id:"riot-games-app-approval",level:2},{value:"Champion Select Anonymity",id:"champion-select-anonymity",level:2}],c=(m="GameInfo",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{gameId:5426,page:"compliance",mdxType:"GameInfo"}),(0,o.kt)("p",null,"Competitive integrity is one of our core values, and we work tirelessly to enforce this value, both in-house and with the cooperation of game developers."),(0,o.kt)("h2",{id:"riot-games-app-approval"},"Riot Games app approval"),(0,o.kt)("p",null,"If you wish to integrate your app with any of Riot\u2019s games,\nyou are required to seek their approval through their 3rd party ",(0,o.kt)("a",{parentName:"p",href:"https://developer.riotgames.com/docs/portal#_getting-started"},"application process"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"These guidelines hold even if you do not intend to use the Riot API itself.\nDo note that apps which reach the publication phase and do not yet possess a Riot approval, will be asked to provide one before proceeding.")),(0,o.kt)("h2",{id:"champion-select-anonymity"},"Champion Select Anonymity"),(0,o.kt)("p",null,"Riot Games is working to prevent metagaming and queue dodging (among other things). As such apps should make sure that\nSummoner Names in ",(0,o.kt)("inlineCode",{parentName:"p"},"Ranked Solo/Duo")," champion select should be obfuscated. More specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All instances of non-party Summoner Names in Champion Select should be replaced with ",(0,o.kt)("inlineCode",{parentName:"li"},"Ally #")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Ally 1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Ally 2")," and so on). This includes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In-lobby text chat."),(0,o.kt)("li",{parentName:"ul"},"Summoner names displayed inside the draft area."))),(0,o.kt)("li",{parentName:"ul"},"Player designations should be consistent for all players in the lobby. (",(0,o.kt)("inlineCode",{parentName:"li"},"Ally 1")," should refer to the same player on all clients).")),(0,o.kt)("p",null,"Do note that this only applies during Champion Select, and only to players who are not a part of your party. More specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your own name is not anonymous to yourself."),(0,o.kt)("li",{parentName:"ul"},"Players who queued in the same party are de-anonymized to each other."),(0,o.kt)("li",{parentName:"ul"},"Once in the loading screen, players will be able to see summoner names.")))}d.isMDXComponent=!0}}]);