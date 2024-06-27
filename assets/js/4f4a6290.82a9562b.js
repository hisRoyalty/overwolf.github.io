"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3654],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(f,n(n({ref:t},u),{},{components:a})):r.createElement(f,n({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,n[1]=o;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(25773),l=(a(27378),a(35318));const i={id:"external-apis",image:"/img/embed/api-docs.jpg",title:"Various External API's for games stats",sidebar_label:"Various External APIs",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},n=void 0,o={unversionedId:"api/games/external-apis",id:"api/games/external-apis",title:"Various External API's for games stats",description:"Battlefield",source:"@site/../pages/api/games/external-apis.mdx",sourceDirName:"api/games",slug:"/api/games/external-apis",permalink:"/api/games/external-apis",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/external-apis.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719492831,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:100,frontMatter:{id:"external-apis",image:"/img/embed/api-docs.jpg",title:"Various External API's for games stats",sidebar_label:"Various External APIs",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games.launchers.events API",permalink:"/api/games/launchers/events/"},next:{title:"overwolf.games.inputTracking API",permalink:"/api/games/input-tracking"}},p={},s=[{value:"Battlefield",id:"battlefield",level:2},{value:"Diablo 3",id:"diablo-3",level:2},{value:"EVE Online",id:"eve-online",level:2},{value:"Guild Wars 2",id:"guild-wars-2",level:2},{value:"Magic: The Gathering",id:"magic-the-gathering",level:2},{value:"PUBG:",id:"pubg",level:2},{value:"Minecraft",id:"minecraft",level:2},{value:"Path of Exile",id:"path-of-exile",level:2},{value:"Planetside 2",id:"planetside-2",level:2},{value:"Starcraft 2",id:"starcraft-2",level:2},{value:"Star Wars: The Old Republic",id:"star-wars-the-old-republic",level:2},{value:"Team Fortress 2",id:"team-fortress-2",level:2},{value:"World of Warcraft",id:"world-of-warcraft",level:2},{value:"World of Warplanes",id:"world-of-warplanes",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"battlefield"},"Battlefield"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Battlefield 1 and Battlefield 4 statistics | ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/MattMcFarland/battlefield-stats"},"API"))),(0,l.kt)("h2",{id:"diablo-3"},"Diablo 3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Diablo 3 Community API | ",(0,l.kt)("a",{parentName:"li",href:"https://dev.battle.net/"},"API"))),(0,l.kt)("h2",{id:"eve-online"},"EVE Online"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EVE Marketer | ",(0,l.kt)("a",{parentName:"li",href:"https://api.evemarketer.com/ec/"},"API")),(0,l.kt)("li",{parentName:"ul"},"zKillboard | ",(0,l.kt)("a",{parentName:"li",href:"https://zkillboard.com/"},"API"))),(0,l.kt)("h2",{id:"guild-wars-2"},"Guild Wars 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Guild Wars 2 | ",(0,l.kt)("a",{parentName:"li",href:"http://wiki.guildwars2.com/wiki/API:Main"},"API")," | ",(0,l.kt)("a",{parentName:"li",href:"https://en-forum.guildwars2.com/forum/28-api-development/"},"Additional link")),(0,l.kt)("li",{parentName:"ul"},"GW2 Spidy | ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rubensayshi/gw2spidy"},"API"))),(0,l.kt)("h2",{id:"magic-the-gathering"},"Magic: The Gathering"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Magic: The Gathering | ",(0,l.kt)("a",{parentName:"li",href:"http://mtgapi.com/docs"},"API"))),(0,l.kt)("h2",{id:"pubg"},"PUBG:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PUBG API | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.pubg.com/"},"API"))),(0,l.kt)("h2",{id:"minecraft"},"Minecraft"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minecraft ID List | ",(0,l.kt)("a",{parentName:"li",href:"http://minecraft-ids.grahamedgecombe.com/api"},"API")," | ",(0,l.kt)("a",{parentName:"li",href:"http://minecraft-ids.grahamedgecombe.com/"},"Additional link"))),(0,l.kt)("h2",{id:"path-of-exile"},"Path of Exile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Path of Exile | ",(0,l.kt)("a",{parentName:"li",href:"http://www.pathofexile.com/developer/docs"},"API"))),(0,l.kt)("h2",{id:"planetside-2"},"Planetside 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Planetside 2 | ",(0,l.kt)("a",{parentName:"li",href:"http://wiki.planetside-universe.com/ps/API"},"API"))),(0,l.kt)("h2",{id:"starcraft-2"},"Starcraft 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Starcraft 2 Community API | ",(0,l.kt)("a",{parentName:"li",href:"https://develop.battle.net"},"API")),(0,l.kt)("li",{parentName:"ul"},"Starcraft 2 Client API | ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Blizzard/s2client-api"},"API"))),(0,l.kt)("h2",{id:"star-wars-the-old-republic"},"Star Wars: The Old Republic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SWTOR Fan API | ",(0,l.kt)("a",{parentName:"li",href:"http://www.swtor.com/community/showthread.php?s=81944b091aa9679fa677a0d706324af1&p=7456215#post7456215"},"API"))),(0,l.kt)("h2",{id:"team-fortress-2"},"Team Fortress 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TF2 Backpack | ",(0,l.kt)("a",{parentName:"li",href:"https://backpack.tf/developer"},"API"))),(0,l.kt)("h2",{id:"world-of-warcraft"},"World of Warcraft"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WoW Community API | ",(0,l.kt)("a",{parentName:"li",href:"https://develop.battle.net/"},"API"))),(0,l.kt)("h2",{id:"world-of-warplanes"},"World of Warplanes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wargaming.net API | ",(0,l.kt)("a",{parentName:"li",href:"https://developers.wargaming.net/reference/"},"API"))))}m.isMDXComponent=!0}}]);