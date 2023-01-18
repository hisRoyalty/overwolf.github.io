"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9785],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>g,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),m=function(e){return function(a){var t=c(a.components);return n.createElement(e,s({},a,{components:t}))}},c=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(g.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||s;return t?n.createElement(u,l(l({ref:a},g),{},{components:t})):n.createElement(u,l({ref:a},g))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=f;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<s;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64611:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378);function r(e){const{className:a,path:t,imgSrc:r,text:s,gameID:o}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:r})," ",s),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,o))))}const s=function(e){const{gameListData:a,urlAsDocsPath:t}=e,s=function(e,a){return e.map((e=>{let t="game ";switch(e.state){case 0:t+="coming-soon";break;case 1:t+="good";break;case 2:t+="medium";break;case 3:t+="bad"}return n.createElement(r,{key:e.id,gameID:e.displayId?e.displayId:e.id,className:t,path:a?e.docs:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a,t);return s.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},s)))};var o=t(54811),l=t(82825);function i(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data ul li");let n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const g=function(e){const{gameStatusData:a,gameID:t,docsPath:r}=e,s=e=>{if(!a.features||0===a.features.length)return n.createElement("li",{className:"coming-soon"},"Coming soon");let t=0;const r=[];for(let s of a.features)for(let a of s.keys)a.type==e&&r.push(n.createElement("li",{className:(0,l.F)(a.state),key:t++},a.name));return r},g=s(0),m=s(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(o.Z,{gameID:t,showStatus:!1}),n.createElement(i,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Events"),n.createElement("ul",null,g)),n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Info updates"),n.createElement("ul",null,m))))))};var m=t(58484),c=t(55759);const p=function(e){const{allGames:a,specificGame:t,gameID:r,docsPath:o,urlAsDocsPath:l=!1,onlyGames:i=!1,onlyLaunchers:p=!1}=e,[u,d]=(0,n.useState)(null),[f,h]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(let t of e)m.z[t.game_id]&&(i&&m.z[t.game_id].launcher||p&&!m.z[t.game_id].launcher||(m.z[t.game_id].state=t.state,a.push(m.z[t.game_id])));d(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${r}_prod.json`).then((e=>e.json())).then((e=>h(e)))}n()}}),[]),null!=u||null!=f?n.createElement(n.Fragment,null,a&&null!=u&&n.createElement(s,{gameListData:u,urlAsDocsPath:l}),t&&null!=f&&n.createElement(g,{gameStatusData:f,gameID:r,docsPath:o})):n.createElement(c.Z,null)}},82825:(e,a,t)=>{t.d(a,{F:()=>n});const n=e=>{let a="";switch(e){case 0:a="coming-soon";break;case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a}},58484:(e,a,t)=>{t.d(a,{z:()=>n});const n={765:{id:765,name:"World of Warcraft",path:"/status/world-of-warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png"},5426:{id:5426,name:"League of Legends",path:"/status/league-of-legends",launcherID:10902,compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png"},5855:{id:5855,name:"StarCraft II",path:"/status/starcraft-2",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png"},6350:{id:6350,name:"Final Fantasy XIV",path:"/status/final-fantasy-xiv",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png"},6365:{id:6365,name:"World of Tanks",path:"/status/world-of-tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png"},7212:{id:7212,name:"Path of Exile",path:"/status/path-of-exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png"},7314:{id:7314,name:"Dota 2",path:"/status/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png"},7764:{id:7764,name:"Counter-Strike: Global Offensive",path:"/status/counter-strike-global-offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png"},8032:{id:8032,name:"Minecraft",path:"/status/minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png"},8954:{id:8954,name:"Warframe",path:"/status/warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png"},9898:{id:9898,name:"Hearthstone",path:"/status/hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png"},10624:{id:10624,name:"Heroes of the Storm",path:"/status/heroes-of-the-storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png"},10746:{id:10746,name:"World of Warships",path:"/status/world-of-warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png"},10798:{id:10798,name:"Rocket League",path:"/status/rocket-league",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png"},10826:{id:10826,name:"Rainbow Six Siege",path:"/status/rainbow-six-siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png"},10844:{id:10844,name:"Overwatch",path:"/status/overwatch",docs:"/api/games/events/overwatch",iconUrl:"/img/games-logos/overwatch.png",iconLargeUrl:"/img/games-logos/large/overwatch.png"},10902:{id:10902,name:"League of Legends Launcher",path:"/status/launchers/league-of-legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png",launcher:{games:[5426,21570,215701]}},10906:{id:10906,name:"PlayerUnknown's Battlegrounds",path:"/status/player-unknowns-battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png"},21216:{id:21216,name:"Fortnite",path:"/status/fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png"},21308:{id:21308,name:"Magic: The Gathering Arena",path:"/status/magic-the-gathering-arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png"},21328:{id:21328,name:"Hunt: Showdown",path:"/status/hunt-showdown",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png"},21404:{id:21404,name:"Splitgate: Arena Warfare",path:"/status/splitgate-arena-warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png"},21566:{id:21566,name:"Apex Legends",path:"/status/apex-legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png"},21570:{id:21570,displayId:5426,name:"Teamfight Tactics",path:"/status/teamfight-tactics",launcherID:10902,mainVariant:215701,docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png"},21586:{id:21586,name:"Dota Underlords",path:"/status/dota-underlords",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png"},21620:{id:21620,name:"Legends of Runeterra",path:"/status/legends-of-runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png"},21626:{id:21626,name:"Call of Duty: Warzone Caldera",path:"/status/call-of-duty-warzone-caldera",compliance:"/start/game-compliance/call-of-duty-warzone-caldera",docs:"/api/games/events/call-of-duty-warzone-caldera",iconUrl:"/img/games-logos/call-of-duty-warzone-caldera.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone-caldera.png"},21634:{id:21634,name:"Escape From Tarkov",path:"/status/escape-from-tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png"},21640:{id:21640,name:"Valorant",path:"/status/valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png"},21666:{id:21666,name:"Football Manager 2021",path:"/status/football-manager-2021",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png"},21668:{id:21668,name:"Valheim",path:"/status/valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png"},21672:{id:21672,name:"Eternal Return",path:"/status/eternal-return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png"},21816:{id:21816,name:"New World",path:"/status/new-world",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png"},21848:{id:21848,name:"Diablo 2 Resurrected",path:"/status/diablo-2-resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png"},21854:{id:21854,name:"Halo Infinite",path:"/status/halo-infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png"},21856:{id:21856,name:"Football Manager 2022",path:"/status/football-manager-2022",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png"},21864:{id:21864,name:"Lost Ark",path:"/status/lost-ark",docs:"/api/games/events/lost-ark",iconUrl:"/img/games-logos/lost-ark.png",iconLargeUrl:"/img/games-logos/large/lost-ark.png"},21876:{id:21876,name:"Call of Duty: Vanguard",path:"/status/call-of-duty-vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png"},21960:{id:21960,name:"Axie Infinity Origin",path:"/status/axie-infinity-origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png"},215701:{id:215701,displayId:5426,name:"Teamfight Tactics PBE",path:"/status/teamfight-tactics-public-beta",launcherID:10902,subVariant:21570,docs:"/api/games/events/teamfight-tactics-public-beta",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png"}}},54811:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(27378),r=t(58484),s=t(82825);const o=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)};const l=function(e){const{gamesListData:a}=e,[t,s]=(0,n.useState)(!1),[l,i]=(0,n.useState)(0),g=(0,n.useRef)(null),m=a.map((e=>n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:r.z[e].iconLargeUrl}),n.createElement("span",null,r.z[e].name)),n.createElement("p",null,n.createElement("span",null,"Game ID: "),e),r.z[e].path&&n.createElement(o,{name:"Game events status",pathUrl:r.z[e].path}),r.z[e].docs&&n.createElement(o,{name:"Game API docs",pathUrl:r.z[e].docs}),r.z[e].compliance&&n.createElement(o,{name:"Game compliance page",pathUrl:r.z[e].compliance}))));function c(){t?(i(0),s(!1)):(i(g.current.querySelector("ul").clientHeight),s(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:c},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:g,style:{height:l+"px"}},n.createElement("ul",{className:"launcher-game-list"},m),n.createElement("button",{className:"hide-button",onClick:c},"Hide List")))};const i=function(e){const{gameState:a}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(e=>{let a="";switch(e){case 0:a="Coming soon";break;case 1:a="Good to go";break;case 2:a="Some events may be unavailable";break;case 3:a="Events are currently unavailable"}return a})(a))))};var g=t(55759);const m=function(e){const{gameID:a,showCompliance:t=!0,showDocs:m=!0,showStatus:c=!0,showLauncherDocs:p=!0}=e,[u,d]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>d(e)))}()}),[]);const f=r.z[a].launcher?"Game Launcher ID":"Game ID",h=r.z[a].launcher?"Launcher":"Game",v=r.z[a].launcherID,w=r.z[a].launcher?r.z[a].launcher.games.length:0,E=r.z[a].displayId?r.z[a].displayId:a,b=r.z[a].mainVariant?r.z[a].mainVariant:0,U=r.z[a].subVariant?r.z[a].subVariant:0;return null!=u?n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${u?(0,s.F)(u.state):""}`},n.createElement("img",{src:r.z[a].iconLargeUrl}),n.createElement("span",null,r.z[a].name),u&&n.createElement(i,{gameState:u.state})),n.createElement("ul",{className:"game-info-list"},n.createElement("li",null,n.createElement("span",null,f,":"),E),r.z[a].path&&c&&n.createElement("li",null,n.createElement(o,{name:`${h} events status`,pathUrl:r.z[a].path})),r.z[a].path&&c&&0!=b&&n.createElement("li",null,n.createElement(o,{name:`${r.z[b].name} events status`,pathUrl:r.z[b].path})),r.z[a].docs&&m&&p&&0===U&&n.createElement("li",null,n.createElement(o,{name:`${h} API docs`,pathUrl:r.z[a].docs})),r.z[a].docs&&m&&p&&0!=U&&n.createElement("li",null,n.createElement(o,{name:`${h} API docs`,pathUrl:r.z[U].docs})),r.z[a].compliance&&t&&"Game"==h&&0===U&&n.createElement("li",null,n.createElement(o,{name:"Game compliance page",pathUrl:r.z[a].compliance})),r.z[a].compliance&&t&&"Game"==h&&0!=U&&n.createElement("li",null,n.createElement(o,{name:"Game compliance page",pathUrl:r.z[U].compliance}))),v&&n.createElement("ul",{className:"launcher-info-list"},n.createElement("li",null,n.createElement("span",null,"Game Launcher ID:"),v),r.z[v].path&&n.createElement("li",null,n.createElement(o,{name:"Launcher events status",pathUrl:r.z[v].path})),r.z[v].docs&&n.createElement("li",null,n.createElement(o,{name:"Launcher API docs",pathUrl:r.z[v].docs})))),w>0&&n.createElement(l,{gamesListData:r.z[a].launcher.games}),!c&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable"))):n.createElement(g.Z,{small:!0})}},55759:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(27378);const r=function(e){const{small:a}=e;return n.createElement("div",{className:"preloader "+(a?"small":"")},n.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"https://www.w3.org/2000/svg"},n.createElement("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",stroke:"white",strokeWidth:"2"})),n.createElement("span",null,"Loading..."))}},55020:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(25773),r=(t(27378),t(35318)),s=t(64611);const o={id:"world-of-warcraft",image:"/img/embed/games/world-of-warcraft.jpg",title:"World of Warcraft status",hide_title:!0,sidebar_label:"World of Warcraft",showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"status/world-of-warcraft",id:"status/world-of-warcraft",title:"World of Warcraft status",description:"",source:"@site/pages/docs/status/world-of-warcraft.mdx",sourceDirName:"status",slug:"/status/world-of-warcraft",permalink:"/status/world-of-warcraft",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/world-of-warcraft.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"world-of-warcraft",image:"/img/embed/games/world-of-warcraft.jpg",title:"World of Warcraft status",hide_title:!0,sidebar_label:"World of Warcraft",showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"status",previous:{title:"World of Tanks",permalink:"/status/world-of-tanks"},next:{title:"World of Warships",permalink:"/status/world-of-warships"}},g={},m=[],c={toc:m};function p(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for World of Warcraft, World of Warcraft API, SDK for World of Warcraft, World of Warcraft SDK"})),(0,r.mdx)(s.Z,{specificGame:!0,gameID:765,mdxType:"EventsData"}))}p.isMDXComponent=!0}}]);