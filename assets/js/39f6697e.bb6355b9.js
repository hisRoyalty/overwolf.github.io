"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7312],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:173,image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/june/173",id:"api/changelogs/overwolf-platform/2021/june/173",title:"Version 0.173",description:"* Note that iterations 171 to 173 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2021/june/173.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/june",slug:"/api/changelogs/overwolf-platform/2021/june/173",permalink:"/api/changelogs/overwolf-platform/2021/june/173",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/june/173.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720012030,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"173",image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.174",permalink:"/api/changelogs/overwolf-platform/2021/july/174"},next:{title:"0.170",permalink:"/api/changelogs/overwolf-platform/2021/may/170"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that iterations 171 to 173 were combined into a single iteration. ")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"overwolf.utils.openUrlInDefaultBrowser - enhance security by checking the scheme and only allow requests to http/s or protocols allowed in the manifest.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manifest example: ",(0,r.kt)("inlineCode",{parentName:"li"},'"data": {"allowed_protocols": { "protocols": ["mailto", "steam"]}}')),(0,r.kt)("li",{parentName:"ul"},"'file' in the scheme will always be blocked."))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"processId")," to ",(0,r.kt)("a",{parentName:"li",href:"/api/games#getrunninggameinfocallback"},"overwolf.games.getRunningGameInfo")," and ",(0,r.kt)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),"."),(0,r.kt)("li",{parentName:"ul"},"Coexistence API - Event to indicate if there is another overlay library running + if Overwolf doesn't manage to render anything, allow the app to give a relevant notification",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added a new object, ",(0,r.kt)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo"),",  with info about the current out of process overlays."),(0,r.kt)("li",{parentName:"ul"},"Added a new ",(0,r.kt)("a",{parentName:"li",href:"/api/games#gameinfochangereason-enum"},"GameInfoChangeReason")," enum to the ",(0,r.kt)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated")," event,with some info about the hooking error reason. (if an hooking error has occurred)."),(0,r.kt)("li",{parentName:"ul"},"Added a new ",(0,r.kt)("a",{parentName:"li",href:"/api/games#knownoverlaycoexistenceapps-enum"},"KnownOverlayCoexistenceApps")," enum with a list of known apps causing overlay coexistence issues with OW."),(0,r.kt)("li",{parentName:"ul"},"New API: ",(0,r.kt)("a",{parentName:"li",href:"/api/games#getlastrunninggameinfocallback"},"overwolf.games.getLastRunningGameInfo()")," - returns the last played gameinfo (when no game is currently running). "),(0,r.kt)("li",{parentName:"ul"},"new API: ",(0,r.kt)("a",{parentName:"li",href:"/api/settings/games#setautolaunchenabledgameclassid-callback"},"overwolf.settings.games.setAutoLaunchEnabled"),": allows apps to control what games they auto-launch for following user gesture (similar to performUpdate)."),(0,r.kt)("li",{parentName:"ul"},"New API: ",(0,r.kt)("a",{parentName:"li",href:"/api/os/tray#destroy"},"overwolf.os.tray.destroy")," - Added a new method for removing an extension tray icon and menu immediately.")))),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New client settings (Capture => Advanced Settings) with Rate Control and Max Kb/s sliders."),(0,r.kt)("li",{parentName:"ul"},"Rebranding - we\u2019re releasing almost all of Overwolf\u2019s client modules with a new branding.")),(0,r.kt)("h3",{id:"dev-console"},"Dev Console"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App Channels - a new feature that enables you to create and distribute different app versions for your users /testers. The first part of this feature ",(0,r.kt)("a",{parentName:"li",href:"#api-1"},"announced already on v0.170"),", and now ",(0,r.kt)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management"},"the second")," (and last) part is released - the app channels management tools from the dev console. ")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extension tray icons would get blurry when changing display settings (try changing DPI from 100% to 175%)."),(0,r.kt)("li",{parentName:"ul"},"Replay API - TurnOffResult typo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/games#gameinfoupdatedevent-object"},"GameInfoUpdatedEvent")," Object - fixed the issue that runningChanged is not being updated once a game starts running."),(0,r.kt)("li",{parentName:"ul"},"Fixed the issue that Video recording won't start if game is minimized."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where subs oneapp page sometimes won't open."),(0,r.kt)("li",{parentName:"ul"},"New Reddit (new.reddit.com) has an issue with escaped space characters in redirects. This fix ensures space (%20) won't be re-encoded to %2B and break the redirect")),(0,r.kt)("h3",{id:"game-events"},"Game events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"overwolf.media.replays TurnOffResult typo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/deprecated"},"Football Manager2021"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New supported game with updates and events under:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"match_info"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/call-of-duty-warzone-caldera"},"Warzone"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New update under:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"match_info")))))))}u.isMDXComponent=!0}}]);