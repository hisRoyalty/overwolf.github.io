"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4557],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=o(a),s=r,h=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},15747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(25773),r=(a(27378),a(35318));const l={id:"axie-infinity-origin",image:"/img/embed/deprecated.jpg",title:"Axie Infinity Origin Game events",sidebar_label:"Axie Infinity origin",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,d={unversionedId:"api/live-game-data/deprecated/axie-infinity-origin",id:"api/live-game-data/deprecated/axie-infinity-origin",title:"Axie Infinity Origin Game events",description:"Support for this game has been deprecated, following a lack of usage in Apps.",source:"@site/../pages/api/live-game-data/deprecated/axie-infinity-origin.mdx",sourceDirName:"api/live-game-data/deprecated",slug:"/api/live-game-data/deprecated/axie-infinity-origin",permalink:"/api/live-game-data/deprecated/axie-infinity-origin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/deprecated/axie-infinity-origin.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716297610,formattedLastUpdatedAt:"May 21, 2024",sidebarPosition:0,frontMatter:{id:"axie-infinity-origin",image:"/img/embed/deprecated.jpg",title:"Axie Infinity Origin Game events",sidebar_label:"Axie Infinity origin",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Deprecated",permalink:"/api/live-game-data/deprecated/"},next:{title:"Call of Duty: Warzone Caldera",permalink:"/api/live-game-data/deprecated/call-of-duty-warzone-caldera"}},p={},o=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>ronin_address</em> note",id:"ronin_address-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>player_x</em> note",id:"player_x-note",level:4},{value:"<em>battle_state</em> note",id:"battle_state-note",level:4},{value:"<em>fighter_x</em> note",id:"fighter_x-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4},{value:"<em>cards_hand</em> note",id:"cards_hand-note",level:4},{value:"<em>deck_piles</em> note",id:"deck_piles-note",level:4},{value:"<em>last_card_played</em> note",id:"last_card_played-note",level:4}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Axie Infinity Origin, Axie Infinity Origin API, SDK for Axie Infinity Origin, Axie Infinity Origin SDK"})),(0,r.kt)("admonition",{title:"Deprecation notice",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Support for this game has been deprecated, following a lack of usage in Apps."),(0,r.kt)("p",{parentName:"admonition"},"This page is being kept for historial documentation purposes.")),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Axie Infinity origin game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.kt)("h2",{id:"game-event-status"},"Game event status"),(0,r.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users.\nCheck the current game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"202.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"202.0.0","public_version":"202.0.0","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.kt)("h2",{id:"game_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ronin_address"),(0,r.kt)("td",{parentName:"tr",align:null},"inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"The local player's ronin wallet address"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#ronin_address-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"205.3.6")))),(0,r.kt)("h4",{id:"ronin_address-note"},(0,r.kt)("em",{parentName:"h4"},"ronin_address")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"inventory","key":"ronin_address","value":"0xdeff4aa81687b1ad37f1575202bb419373fa0142"}\n')),(0,r.kt)("h2",{id:"match_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,r.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"player_x"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Details about the players in the match"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#player_x-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"202.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"battle_state"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Describe the battle turn number and player's turn"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#battle_state-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"202.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fighter_x"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the fighters including cards, runes"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#fighter_x-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"202.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_outcome"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Final result of the cirrent game"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#fighter_x-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"205.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cards_hand"),(0,r.kt)("td",{parentName:"tr",align:null},"cards"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the pile of cards in hand"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#cards_hand-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"205.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deck_piles"),(0,r.kt)("td",{parentName:"tr",align:null},"cards"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the deck pile including list of cards in the draw_pile, banish_pile, disscard_pile and transform pile"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#deck_piles-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"205.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_card_played"),(0,r.kt)("td",{parentName:"tr",align:null},"cards"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the played card"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#last_card_played-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"205.0")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_start"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"match start event"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"203.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_end"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"match end event"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"203.0")))),(0,r.kt)("h4",{id:"match_start-note"},(0,r.kt)("em",{parentName:"h4"},"match_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.kt)("h4",{id:"match_end-note"},(0,r.kt)("em",{parentName:"h4"},"match_end")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,r.kt)("h4",{id:"player_x-note"},(0,r.kt)("em",{parentName:"h4"},"player_x")," note"),(0,r.kt)("p",null,"List of parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"player_id - The Id of the player"),(0,r.kt)("li",{parentName:"ul"},"name - The name of the player"),(0,r.kt)("li",{parentName:"ul"},"energy - The amount of energy of that player"),(0,r.kt)("li",{parentName:"ul"},"draw - The amount of card draw"),(0,r.kt)("li",{parentName:"ul"},"discard - The amount of cards discard"),(0,r.kt)("li",{parentName:"ul"},"banish - The amount of banish cards"),(0,r.kt)("li",{parentName:"ul"},"is_local - If the current player is the local player the value will be true ")),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"match_info":{"player_0":"{\\"player_id\\":\\"1ecf1358-01c4-6c66-96d8-a43722dd784f\\",\\"name\\":\\"Jacks\\",\\"energy\\":1,\\"draw\\":15,\\"discard\\":0,\\"banish\\":0,\\"is_local\\":true}"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"battle_state-note"},(0,r.kt)("em",{parentName:"h4"},"battle_state")," note"),(0,r.kt)("p",null,"List of parameters:\nturn - the currrent turn in the match\nplayer_turn - which player is playing now"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"match_info":{"battle_state":"{\\"battleid\\":\\"5ed053a0-5ca7-444a-8b0f-b01680202b8b\\",\\"turn\\":11,\\"player_turn\\":0}"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"fighter_x-note"},(0,r.kt)("em",{parentName:"h4"},"fighter_x")," note"),(0,r.kt)("p",null,"List of parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name - axie name"),(0,r.kt)("li",{parentName:"ul"},"ID - axie ID"),(0,r.kt)("li",{parentName:"ul"},"player_belong - team 0/1"),(0,r.kt)("li",{parentName:"ul"},"position - 1 left, 2 middle, 3 right"),(0,r.kt)("li",{parentName:"ul"},"max_health / health - the max health range and the current health of the axie "),(0,r.kt)("li",{parentName:"ul"},"level - axie level "),(0,r.kt)("li",{parentName:"ul"},"runes / cards / charms - provides more details about the axie ")),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"match_info":{"fighter_1":"{\\"name\\":\\"Olek\\",\\"ID\\":\\"0_2_1ecf1358-01c4-6c66-96d8-a43722dd784f\\",\\"player_belong\\":0,\\"position\\":0,\\"health\\":264,\\"max_health\\":324,\\"alive\\":1,\\"disabled\\":0,\\"skill_disabled\\":0,\\"shield_disabled\\":0,\\"power_disabled\\":0,\\"level\\":1,\\"status\\":[{\\"name\\":\\"HpRecover\\",\\"stacks\\":4,\\"is_deactive\\":0}],\\"runes\\":[{\\"rune_0\\":\\"NeutralUtility1\\"}],\\"cards\\":[{\\"card_id\\":\\"plant-eyes-01\\",\\"charm\\":\\"\\"},{\\"card_id\\":\\"reptile-ears-03\\",\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-mouth-01\\",\\"charm\\":\\"ecard_neutral_1001\\"},{\\"card_id\\":\\"mech-horn-03\\",\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-back-01\\",\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-tail-01\\",\\"charm\\":\\"\\"}]}"}},"feature":"match_info"}001\\"},{\\"card_id\\":17,\\"charm\\":\\"ecard_aquatic_4001\\"}]}"}\n')),(0,r.kt)("h4",{id:"match_outcome-note"},(0,r.kt)("em",{parentName:"h4"},"match_outcome")," note"),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Victory"),(0,r.kt)("li",{parentName:"ul"},"Defeat"),(0,r.kt)("li",{parentName:"ul"},"Surrendered (if the player leave in the midle of a match)")),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"match_info":{"match_outcome":"Victory"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"cards_hand-note"},(0,r.kt)("em",{parentName:"h4"},"cards_hand")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"cards":{"cards_hand":"{\\"card_id\\":\\"beast-mouth-01\\",\\"fighter_id\\":\\"0_1_1ecf1358-01c4-6c66-96d8-a43722dd784f\\",\\"disabled\\":0,\\"charm\\":\\"\\"}"}},"feature":"match_info"}\n')),(0,r.kt)("h4",{id:"deck_piles-note"},(0,r.kt)("em",{parentName:"h4"},"deck_piles")," note"),(0,r.kt)("p",null," Information about the deck pile including list of cards in the:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"draw pile"),(0,r.kt)("li",{parentName:"ul"},"banish pile"),(0,r.kt)("li",{parentName:"ul"},"disscard pile"),(0,r.kt)("li",{parentName:"ul"},"transform pile")),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"feature":"match_info","category":"cards","key":"deck_piles","value":"{\\"draw_pile\\":[{\\"card_id\\":\\"beast-eyes-03\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"beast-ears-03\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"aquatic-horn-01\\",\\"fighter_id\\":\\"0_3_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-horn-01\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-back-03\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"beast-tail-03\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"beast-mouth-03\\",\\"fighter_id\\":\\"0_3_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"reptile-back-03\\",\\"fighter_id\\":\\"0_3_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-mouth-01\\",\\"fighter_id\\":\\"0_2_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"mech-horn-03\\",\\"fighter_id\\":\\"0_2_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-back-01\\",\\"fighter_id\\":\\"0_2_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"plant-tail-01\\",\\"fighter_id\\":\\"0_2_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"},{\\"card_id\\":\\"aquatic-tail-01\\",\\"fighter_id\\":\\"0_3_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"}],\\"banish_pile\\":null,\\"discard_pile\\":[{\\"card_id\\":\\"beast-mouth-01\\",\\"fighter_id\\":\\"0_1_1ecd046f-481e-69e9-a81e-5c849aacdc1b\\",\\"disabled\\":0,\\"charm\\":\\"\\"}],\\"transform_pile\\":null}"}\n')),(0,r.kt)("h4",{id:"last_card_played-note"},(0,r.kt)("em",{parentName:"h4"},"last_card_played")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"info":{"cards":{"last_card_played":"{\\"card\\":\\"reptile-tail-02\\"},{\\"fighter_id\\":\\"1_5315200_1ec9eb73-a8cf-626f-a60c-26ccdce180af\\"}"}},"feature":"match_info"}\n')))}c.isMDXComponent=!0}}]);