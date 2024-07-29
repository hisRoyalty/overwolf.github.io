"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5657],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,g=c["".concat(o,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(g,s(s({ref:t},u),{},{components:a})):r.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const i={id:"games-settings",image:"/img/embed/api-best-practices.jpg",title:"Per-game settings",sidebar_label:"Per-game settings",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,l={unversionedId:"topics/best-practices/games-settings",id:"topics/best-practices/games-settings",title:"Per-game settings",description:"Overview",source:"@site/../pages/topics/best-practices/games-settings.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/games-settings",permalink:"/topics/best-practices/games-settings",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/games-settings.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1722252436,formattedLastUpdatedAt:"Jul 29, 2024",frontMatter:{id:"games-settings",image:"/img/embed/api-best-practices.jpg",title:"Per-game settings",sidebar_label:"Per-game settings",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"First time user experience",permalink:"/topics/best-practices/first-time-user-experience"},next:{title:"Hotkey best practices",permalink:"/topics/best-practices/hotkeys-best-practices"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Why do users get this level of control?",id:"why-do-users-get-this-level-of-control",level:2},{value:"As a creator, you should:",id:"as-a-creator-you-should",level:2},{value:"How do we get there?",id:"how-do-we-get-there",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Overwolf settings explained",id:"overwolf-settings-explained",level:2},{value:"Using API",id:"using-api",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Overwolf platform enables users to control each app's permissions separately when it comes to opening windows and auto-launching app features. Users can also disable the in-game overlay for each app or for all apps of a specific game if they prefer it. "),(0,n.kt)("p",null,"Whenever permissions or overlay settings are changed, Overwolf informs users through notifications and messages - keeping users informed has proven to be important for their overall experience."),(0,n.kt)("h2",{id:"why-do-users-get-this-level-of-control"},"Why do users get this level of control?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We aim to be unintrusive."),(0,n.kt)("li",{parentName:"ul"},"We aim to inform users clearly about pending changes."),(0,n.kt)("li",{parentName:"ul"},"We want users to have the best tools to optimize their Overwolf gaming experiences to their preferences.")),(0,n.kt)("h2",{id:"as-a-creator-you-should"},"As a creator, you should:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inform users about expected app behavior changes in advance."),(0,n.kt)("li",{parentName:"ul"},"Let users manage how your app works in and out of the game, both on launch and when used.")),(0,n.kt)("h2",{id:"how-do-we-get-there"},"How do we get there?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improve your on-boarding process and clearly explain how the app will work in-game."),(0,n.kt)("li",{parentName:"ul"},"Build a settings page in which the user can change how the platform, app or game behave in Overwolf."),(0,n.kt)("li",{parentName:"ul"},"Whenever permissions or functionality changes, notify your users.")),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overwolf Game Settings")," \u2013 The Games section of Overwolf's client settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auto Launch")," \u2013 An app\u2019s ability to launch itself according to internal logic, once triggered by Overwolf."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auto Launch Permission")," \u2013 Platform level permission that allows the activation of an app\u2019s logic that triggers auto launch."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Permission")," \u2013 After installing an app, if parts of the overlay aren't enabled, users will get a notification asking for overlay permissions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dedicated app")," \u2013 An app which is intended to be used in a specific game, and declared as such in the manifest (for example, LoLwiz for LoL)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multi app")," \u2013 An app which is intended to be used in a number of supported games, and declared as such in the manifest (for example, Killer Voices)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global app")," \u2013 An app which is intended to be used in ANY game, and declared as such in the manifest (for example, TeamSpeak)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Game Settings API")," \u2013 The API by which an app may query the status of Overlay and Auto Launch Permission settings per game."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overlay")," \u2013 The ability to display Overwolf components and apps in-game.")),(0,n.kt)("h2",{id:"overwolf-settings-explained"},"Overwolf settings explained"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When overlay permissions for a game are disabled, no Overwolf apps or features will be displayed inside this game."),(0,n.kt)("li",{parentName:"ul"},"Apps may, or may not, have an Auto Launch capability.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Auto Launch has to be stated in the manifest."),(0,n.kt)("li",{parentName:"ul"},"Auto Launch Permission per app is the platform\u2019s way to allow or disallow app auto launch in-game."),(0,n.kt)("li",{parentName:"ul"},"A user may launch the app manually from the dock, desktop or any other way regardless of auto launch permission state."),(0,n.kt)("li",{parentName:"ul"},"Apps without auto launch capability will not have a permission checkbox at all.")))),(0,n.kt)("h2",{id:"using-api"},"Using API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Every app can use the ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/games"},"Game Settings API")," to query the status of Overwolf's settings PER GAME including:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Overlay Settings")," \u2013 is the overlay enabled or disabled?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/games#getoverlayenabledgameclassid-callback"},"getOverlayEnabled()")," "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Auto Launch Permission")," - is autolaunch allowed for this app?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/games#getautolaunchenabledgameclassid-callback"},"getAutoLaunchEnabled()")," ")),(0,n.kt)("h2",{parentName:"li",id:"bring-more-value"},"Bring more value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Apps should inform its users in the following cases:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Overlay for the supported game is disabled \u2013 users will not be able to use the app in-game."),(0,n.kt)("li",{parentName:"ul"},"Auto Launch Permission is unchecked \u2013 app will NOT auto launch when the game begins, but can be manually launched."),(0,n.kt)("li",{parentName:"ul"},"Additionally \u2013 in some apps, manual launch may result in lack of functionality. If this is the case with your app, you should tell users as well."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In case of a Multi or Global app, it's important to inform users if there are specific games in which these apps or parts of their functionality will not work as expected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When informing the users about permission or overlay settings, suggest a solve and call users to action \u2013 a link that launches the Game Settings window where users can enable missing permissions can be placed in a prime location, for example.\n*Apps cannot change settings through API by themselves. The user has to act and change these settings."))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/overwolf/new-games-settings-herowatch-case-study-4aff3ab99060"},(0,n.kt)("img",{alt:"Herowatch",src:a(75807).Z,width:"480",height:"180"}))))}c.isMDXComponent=!0},75807:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/herowatch-case-study-9905a6dc3a93a1df0e2d8ebae21091cc.jpg"}}]);