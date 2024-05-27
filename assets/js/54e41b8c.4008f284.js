"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8811],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const i={id:170,image:"/img/embed/changelogs.jpg",title:"Version 0.170",sidebar_label:"0.170",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2021/may/170",id:"api/changelogs/overwolf-platform/2021/may/170",title:"Version 0.170",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2021/may/170.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/may",slug:"/api/changelogs/overwolf-platform/2021/may/170",permalink:"/api/changelogs/overwolf-platform/2021/may/170",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/may/170.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716804302,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"170",image:"/img/embed/changelogs.jpg",title:"Version 0.170",sidebar_label:"0.170",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.173",permalink:"/api/changelogs/overwolf-platform/2021/june/173"},next:{title:"0.169",permalink:"/api/changelogs/overwolf-platform/2021/april/169"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App Channels:"),(0,n.kt)("br",{parentName:"li"}),"Channels are no longer exclusive to the Overwolf client, apps can now also have channels; Creators can set a specific channel to use a specific version, this way they can super easily create and distribute beta versions for their apps.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Note that testing is still in progress. We will announce that soon for general usage.")," "),(0,n.kt)("li",{parentName:"ul"},"API: ",(0,n.kt)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"The overwolf.settings.setExtensionSettings")," function now accepts a new property in its ",(0,n.kt)("a",{parentName:"li",href:"/api/settings#generalextensionsettings-object"},"GeneralExtensionSettings")," object called ",(0,n.kt)("inlineCode",{parentName:"li"},"channel"),", this will set the app to a specific channel."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"In-app Subscriptions flow:"),(0,n.kt)("br",{parentName:"li"}),"We now give Creators the option to show the subscription modal inside their apps. You will never have to send the users to the store again.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In order for this feature to work, the Creator will need to add ",(0,n.kt)("inlineCode",{parentName:"li"},"Subscription")," to the \u201cPermissions\u201d array in the app\u2019s ",(0,n.kt)("inlineCode",{parentName:"li"},"manifest.json")," file."),(0,n.kt)("li",{parentName:"ul"},"New API, ",(0,n.kt)("a",{parentName:"li",href:"/api/profile/subscriptions/inapp"},"overwolf.profile.subscriptions.inapp"),': Allow apps to launch the subscription window inside their app and change subscription through the app (includs new permission: "subscription").'),(0,n.kt)("li",{parentName:"ul"},"API: New function introduced to return additional details about the subscribed user, such as expiry date and subscription state:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("a",{parentName:"li",href:"/api/profile/subscriptions#getdetailedactiveplanscallback"},"overwolf.profile.subscriptions.getDetailedActivePlans()"),"."),(0,n.kt)("li",{parentName:"ul"},"new enum with the 3 available subscription states: active, cancelled, and revoked: ",(0,n.kt)("a",{parentName:"li",href:"/api/profile/subscriptions#subscriptionstate-enum"},"overwolf.profile.SubscriptionState"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/profile#getcurrentusercallback"},"overwolf.profile.getCurrentUser")," - this API now also returns the user\u2019s display name.")))),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},".NET 4.8 implementation - we\u2019ve upgraded the .NET version Overwolf uses to 4.8.")),(0,n.kt)("h3",{id:"dev-console"},"Dev Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subscriptions statistics page was added")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#openurlinoverwolfbrowserurl"},"overwolf.utils.openUrlInOverwolfBrowser"),": allow to open tab and redirect back to extension when origin URL is at 'externally_connectable' and to tab was open from the same extension."),(0,n.kt)("li",{parentName:"ul"},"Overwolf no longer reloads apps when a secondary GPU process is being created."),(0,n.kt)("li",{parentName:"ul"},"Fixed a typo in setRequiredFeatures when getting the \u201cProvider not ready\u201d error, what was once ",(0,n.kt)("inlineCode",{parentName:"li"},"succedss")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"success"),".")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for the COD: Warzone game has been disabled temporarily."),(0,n.kt)("li",{parentName:"ul"},"Support for the PUBG Lite game will be disabled permanently from Apr. 2021 since PUBG Lite will be shut down at that date. In addition, we will remove all the content from our site."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant"},"VALORANT")),(0,n.kt)("li",{parentName:"ul"},"New supported map - Breeze."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rocket-league"},"Rocket League"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info update under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"game_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/apex-legends"},"Apex Legends"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'New "Arena" game mode will be enabled in the near future.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valheim"},"Valheim"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"game_info"),(0,n.kt)("li",{parentName:"ul"},"kill")))))))}m.isMDXComponent=!0}}]);