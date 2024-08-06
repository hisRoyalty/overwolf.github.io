"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2800],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const l={id:156,image:"/img/embed/changelogs.jpg",title:"Version 0.156",sidebar_label:"0.156",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/october/156",id:"api/changelogs/overwolf-platform/2020/october/156",title:"Version 0.156",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2020/october/156.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/october",slug:"/api/changelogs/overwolf-platform/2020/october/156",permalink:"/api/changelogs/overwolf-platform/2020/october/156",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/october/156.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1722944503,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"156",image:"/img/embed/changelogs.jpg",title:"Version 0.156",sidebar_label:"0.156",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.157",permalink:"/api/changelogs/overwolf-platform/2020/november/157"},next:{title:"0.155",permalink:"/api/changelogs/overwolf-platform/2020/september/155"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/windows#onscreenpropertychanged"},"overwolf.windows.onScreenPropertyChanged")," event:",(0,n.kt)("br",{parentName:"li"}),"Now the event is being fired for all the declared windows. So you also need to test the window name/id arguments that are passed to the event to see if it is relevant for your window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/extensions/current#getextraobjectname-callback"},"overwolf.extensions.current.getExtraObject"),": Improve the robustness of the API. Write to log and return a callback."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/utils#getsysteminformationcallback"},"overwolf.utils.getSystemInformation"),": return if Windows 10 version 2004 ",(0,n.kt)("em",{parentName:"li"},"Hardware-Accelerated GPU Scheduling")," is enabled. ")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Replay capture accuracy: change replay's timestamp logic: capture replay's with using PTS (Presentation timestamp) and not ETS (Encoding timestamp)."),(0,n.kt)("li",{parentName:"ul"},"Multiple audio tracks: It is now possible to record videos that support more than one audio track, using the new flag for ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streamsettings-object"},"stream settings"),": ",(0,n.kt)("strong",{parentName:"li"},'separate_tracks": bool'),".",(0,n.kt)("br",{parentName:"li"}),"When disabled (default), create the video source with track1 only.",(0,n.kt)("br",{parentName:"li"}),"When enabled, video (mp4) will be created with three different audio tracks:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"track1: Microphone + Desktop."),(0,n.kt)("li",{parentName:"ul"},"track2: Desktop output."),(0,n.kt)("li",{parentName:"ul"},"track3: Microphone input.  "))),(0,n.kt)("li",{parentName:"ul"},"Extension logs: Send the isolated relevant's extension logs to server (upon crash/request to send logs).")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Do not launch extension with "LaunchWithOverwolf" launch event when extension is disabled. '),(0,n.kt)("li",{parentName:"ul"},"overwolf.extensions.current.getExtraObject - Fixed cases where this function wouldn\u2019t return a callback."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug with native windows when navigating to a different window."),(0,n.kt)("li",{parentName:"ul"},"Reaching 50MB of free space no longer causes the OBS process to hang."),(0,n.kt)("li",{parentName:"ul"},"The video recording UI no longer stays in a pending state if we can\u2019t load ow-graphics-hook32.dll for whatever reason.")),(0,n.kt)("h3",{id:"dev-console"},"Dev Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Soon")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GENERAL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Recently both Path of Exile and Rocket League received an Epic Games version and our events are currently unreliable on those versions. We are adjusting the events and will update in the near future."),(0,n.kt)("li",{parentName:"ul"},'Be advised that currently in Apex Legends - the assist event is broken in relation to "knockdown". Only "elimination" is supported.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/warframe"},"WARFRAME"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"inventory"),(0,n.kt)("li",{parentName:"ul"},"username"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/call-of-duty-warzone-caldera"},"Call of Duty - Warzone"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"),(0,n.kt)("li",{parentName:"ul"},"game_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/fortnite"},"Fortnite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New update under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"me"),(0,n.kt)("li",{parentName:"ul"},"match_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/world-of-warcraft"},"World of Warcraft"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New update under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"group_applicants"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/minecraft"},"Minecraft"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New update under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant"},"VALORANT"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/warframe"},"Warframe"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/apex-legends"},"APEX LEGENDS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info")))))))}m.isMDXComponent=!0}}]);