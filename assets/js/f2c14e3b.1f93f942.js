"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8875],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(25773),r=(a(27378),a(35318));const l={id:"legends-of-runeterra",image:"/img/embed/games/legends-of-runeterra.jpg",title:"Legends of Runeterra Game events",hide_title:!0,sidebar_label:"Legends of Runeterra",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,i={unversionedId:"api/live-game-data/supported-games/legends-of-runeterra",id:"api/live-game-data/supported-games/legends-of-runeterra",title:"Legends of Runeterra Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/../pages/api/live-game-data/supported-games/legends-of-runeterra.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/legends-of-runeterra",permalink:"/api/live-game-data/supported-games/legends-of-runeterra",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/supported-games/legends-of-runeterra.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716804302,formattedLastUpdatedAt:"May 27, 2024",sidebarPosition:0,frontMatter:{id:"legends-of-runeterra",image:"/img/embed/games/legends-of-runeterra.jpg",title:"Legends of Runeterra Game events",hide_title:!0,sidebar_label:"Legends of Runeterra",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"League of Legends",permalink:"/api/live-game-data/supported-games/league-of-legends"},next:{title:"Lethal Company",permalink:"/api/live-game-data/supported-games/lethal-company"}},p={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"<code>game_client_data</code>",id:"game_client_data",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>active_deck</em> note",id:"active_deck-note",level:4},{value:"<em>card_positions</em> note",id:"card_positions-note",level:4},{value:"<em>game_result</em> note",id:"game_result-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4}],d=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const u={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Legends of Runeterra, Legends of Runeterra API, SDK for Legends of Runeterra, Legends of Runeterra SDK"})),(0,r.kt)(d,{gameId:21620,page:"docs",mdxType:"GameInfo"}),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Legends of Runeterra game events sample app"))),(0,r.kt)("p",null,"An official Riot API is available at the following link - ",(0,r.kt)("a",{parentName:"p",href:"https://developer.riotgames.com/docs/lor"},"https://developer.riotgames.com/docs/lor"),".\nIf you have further requests for events that you require please contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_client_data"},"game_client_data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.kt)("h2",{id:"game_client_data"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_client_data")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active_deck"),(0,r.kt)("td",{parentName:"tr",align:null},"game_client_data"),(0,r.kt)("td",{parentName:"tr",align:null},"The current active deck (deck that is being played)"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#active_deck-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"146.0.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"card_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"game_client_data"),(0,r.kt)("td",{parentName:"tr",align:null},"The card positions on the screen."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#card_positions-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"146.0.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"game_result"),(0,r.kt)("td",{parentName:"tr",align:null},"game_client_data"),(0,r.kt)("td",{parentName:"tr",align:null},"Victory / Defeat"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#game_result-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"146.0.7")))),(0,r.kt)("h4",{id:"active_deck-note"},(0,r.kt)("em",{parentName:"h4"},"active_deck")," note"),(0,r.kt)("p",null,"Describe the player's current deck in an active game."),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// player is not in an active game\n{"active_deck":"{\\"DeckCode\\":null,\\"CardsInDeck\\":null}"}},"feature":"game_client_data"}\n\n// player is in an active game\n{"active_deck":"{\\"DeckCode\\":\\"CEBAGAIDFYYTOBABAIBAQDZZAICACAYEEQVDMBIBAIFQYJBFHAAQCAICEE\\",\\"CardsInDeck\\":{\\"01NX046\\":3,\\"01NX049\\":3,\\"01NX055\\":3,\\"01IO002\\":3,\\"01IO008\\":3,\\"01IO015\\":3,\\"01IO057\\":3,\\"01NX004\\":2,\\"01NX036\\":2,\\"01NX042\\":2,\\"01NX054\\":2,\\"01IO011\\":2,\\"01IO012\\":2,\\"01IO036\\":2,\\"01IO037\\":2,\\"01IO056\\":2,\\"01IO033\\":1}}"}},"feature":"game_client_data"}\n')),(0,r.kt)("h4",{id:"card_positions-note"},(0,r.kt)("em",{parentName:"h4"},"card_positions")," note"),(0,r.kt)("p",null,"Determine the position of the cards in the collection, deck builder, Expedition drafts, and active games. returns the position of the cards at the time of the request."),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"PlayerName":null,"OpponentName":null,"GameState":"Menus","Screen":{"ScreenWidth":1920,"ScreenHeight":1080},"Rectangles":[]}"}\n\n//OR \n\n{"PlayerName":"Sh4rgaas","OpponentName":"decks_mediumelise_name","GameState":"InProgress","Screen":{"ScreenWidth":1920,"ScreenHeight":1080},"Rectangles":[{"CardID":1510579131,"CardCode":"face","TopLeftX":179,"TopLeftY":481,"Width":117,"Height":117,"LocalPlayer":true},{"CardID":1487329530,"CardCode":"face","TopLeftX":179,"TopLeftY":716,"Width":117,"Height":117,"LocalPlayer":false}]}"}\n')),(0,r.kt)("h4",{id:"game_result-note"},(0,r.kt)("em",{parentName:"h4"},"game_result")," note"),(0,r.kt)("p",null,"Determine the result of the player's most recently completed game.\nThe request returns an int for GameID and a boolean for LocalPlayerWon."),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"GameID":2,"LocalPlayerWon":false}"}\n')),(0,r.kt)("h2",{id:"match_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"When a match started."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"218.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"When a match ended."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"218.0")))),(0,r.kt)("h4",{id:"match_start-note"},(0,r.kt)("em",{parentName:"h4"},"match_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.kt)("h4",{id:"match_end-note"},(0,r.kt)("em",{parentName:"h4"},"match_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')))}c.isMDXComponent=!0}}]);