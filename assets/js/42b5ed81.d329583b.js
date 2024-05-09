"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2435],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(a),g=n,s=u["".concat(d,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(s,p(p({ref:t},m),{},{components:a})):r.createElement(s,p({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=a(25773),n=(a(27378),a(35318));const l={id:"deprecated",image:"/img/embed/deprecated.jpg",title:"Deprecated Game Events",sidebar_label:"Deprecated",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},p=void 0,o={unversionedId:"api/live-game-data/deprecated/deprecated",id:"api/live-game-data/deprecated/deprecated",title:"Deprecated Game Events",description:"Games are ever-changing, and so are game integrations.",source:"@site/../pages/api/live-game-data/deprecated/deprecated.mdx",sourceDirName:"api/live-game-data/deprecated",slug:"/api/live-game-data/deprecated/",permalink:"/api/live-game-data/deprecated/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/live-game-data/deprecated/deprecated.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1715238614,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"deprecated",image:"/img/embed/deprecated.jpg",title:"Deprecated Game Events",sidebar_label:"Deprecated",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"LOL Launcher",permalink:"/api/live-game-data/supported-launchers/league-of-legends"},next:{title:"Axie Infinity origin",permalink:"/api/live-game-data/deprecated/axie-infinity-origin"}},d={},i=[{value:"Event support",id:"event-support",level:2},{value:"Recent and Upcoming Deprecation",id:"recent-and-upcoming-deprecation",level:3},{value:"Game support",id:"game-support",level:2},{value:"Upcoming game deprecations",id:"upcoming-game-deprecations",level:3},{value:"Previously supported",id:"previously-supported",level:3}],m=(u="SkipMe",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const c={toc:i};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Games are ever-changing, and so are game integrations.\nUnfortunately, this means that ",(0,n.kt)("strong",{parentName:"p"},"Game Events deprecation")," is also sometimes necessary."),(0,n.kt)(m,{type:"TODO",mdxType:"SkipMe"},"Add deprecation flow documentation"),(0,n.kt)("p",null,"The following is a list of all upcoming planned Game Events deprecations,\nas well as formerly supported games, to help you keep track ","*",".",(0,n.kt)("br",{parentName:"p"}),"\n","*"," ",(0,n.kt)("em",{parentName:"p"},"For specific older events that were deprecated, see the page for the relevant games.")),(0,n.kt)("h2",{id:"event-support"},"Event support"),(0,n.kt)("h3",{id:"recent-and-upcoming-deprecation"},"Recent and Upcoming Deprecation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Game  (id)"),(0,n.kt)("th",{parentName:"tr",align:null},"Event/Info Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"),(0,n.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/supported-games/world-of-warcraft"},"World of Warcraft")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/supported-games/world-of-warcraft#addons"},"addons")),(0,n.kt)("td",{parentName:"tr",align:null},"07/03/2024"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"247.2.0")))),(0,n.kt)("h2",{id:"game-support"},"Game support"),(0,n.kt)("h3",{id:"upcoming-game-deprecations"},"Upcoming game deprecations"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Game  (id)"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"),(0,n.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/valheim"},"Valheim (21668)")),(0,n.kt)("td",{parentName:"tr",align:null},"21/04/2024"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"252.1.1")))),(0,n.kt)("h3",{id:"previously-supported"},"Previously supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Game"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"),(0,n.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/leap"},"Leap (22312)")),(0,n.kt)("td",{parentName:"tr",align:null},"07/03/2024"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"247.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/axie-infinity-origin"},"Axie Infinity: Origin (21960)")),(0,n.kt)("td",{parentName:"tr",align:null},"06/02/2024"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"245.2.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/counter-strike-global-offensive"},"Counter Strike: Global Offensive (7764)")),(0,n.kt)("td",{parentName:"tr",align:null},"27/09/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to game's shutdown following the launch of ",(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/supported-games/counter-strike-2"},"Counter-Strike 2")),(0,n.kt)("td",{parentName:"tr",align:null},"245.2.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/call-of-duty-warzone-caldera"},"Call of Duty: Warzone Caldera (21626)")),(0,n.kt)("td",{parentName:"tr",align:null},"21/09/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to ",(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/CallofDuty/status/1671926600429092864"},"game's shutdown")),(0,n.kt)("td",{parentName:"tr",align:null},"245.2.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/dota-underlords"},"Dota Underlords (21586)")),(0,n.kt)("td",{parentName:"tr",align:null},"09/07/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"247.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/hunt-showdown"},"Hunt: Showdown (21328)")),(0,n.kt)("td",{parentName:"tr",align:null},"09/07/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"247.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/football-manager-2021"},"Football Manager 2021 (21666)")),(0,n.kt)("td",{parentName:"tr",align:null},"09/07/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"245.2.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/live-game-data/deprecated/football-manager-2022"},"Football Manager 2022 (21856)")),(0,n.kt)("td",{parentName:"tr",align:null},"09/07/2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Removed due to lack of usage/support"),(0,n.kt)("td",{parentName:"tr",align:null},"245.2.2")))))}g.isMDXComponent=!0}}]);