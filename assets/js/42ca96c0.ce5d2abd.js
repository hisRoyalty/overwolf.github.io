"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5796],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,f=u["".concat(p,".").concat(c)]||u[c]||g[c]||o;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:143,image:"/img/embed/changelogs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/march/143",id:"api/changelogs/overwolf-platform/2020/march/143",title:"Version 0.143",description:"Game events",source:"@site/../pages/api/changelogs/overwolf-platform/2020/march/143.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/march",slug:"/api/changelogs/overwolf-platform/2020/march/143",permalink:"/api/changelogs/overwolf-platform/2020/march/143",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/march/143.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"143",image:"/img/embed/changelogs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.145",permalink:"/api/changelogs/overwolf-platform/2020/april/145"},next:{title:"0.142",permalink:"/api/changelogs/overwolf-platform/2020/february/142"}},p={},s=[{value:"Game events",id:"game-events",level:3},{value:"Game events",id:"game-events-1",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Vulkan Graphics API is now supported."),(0,n.kt)("li",{parentName:"ul"},"From now, whenever you try to use an obsolete API, the dev console will print a warning.",(0,n.kt)("br",{parentName:"li"}),"Try: overwolf.setting.getCurrentOverwolfLanguage()."),(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/language"},"overwolf.settings.language"),".",(0,n.kt)("br",{parentName:"li"}),"Returns an object with language methods and events.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/language#getcallback"},"overwolf.settings.language.get()"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/language#onlanguagechanged"},"overwolf.settings.language.onLanguageChanged")," event."))),(0,n.kt)("li",{parentName:"ul"},"New event: ",(0,n.kt)("a",{parentName:"li",href:"/api/windows#onscreenpropertychanged"},"overwolf.windows.onScreenPropertyChanged"),".",(0,n.kt)("br",{parentName:"li"}),"Detect moving window to another monitor.",(0,n.kt)("br",{parentName:"li"}),"Triggered if more than 50% of the window has been moved to another monitor.",(0,n.kt)("br",{parentName:"li"}),"Returns the new monitor handle."),(0,n.kt)("li",{parentName:"ul"},"Upgrade OBS to 24.0.5.  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Update FFMpeg version."),(0,n.kt)("li",{parentName:"ul"},'Support new NVEC Encoders ("NVEC New").'))),(0,n.kt)("li",{parentName:"ul"},"Allow overriding recording indication type and position in API:",(0,n.kt)("br",{parentName:"li"}),"Now when calling ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},"overwolf.streaming.start()"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#indication_position-enum"},"indication_position")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#indication_type-enum"},"indication_type")," can be set under video settings. (Until now, you could do that only from the OW client UI)."),(0,n.kt)("li",{parentName:"ul"},'HTTPS - "Referrers", "Origins", and "AncestorsOrigin" should now all be using HTTPS instead of HTTP.')),(0,n.kt)("h3",{id:"game-events-1"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PUBG Lite game events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/legends-of-runeterra"},"Legends of Runeterra game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/world-of-warcraft"},"World of Warcraft game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rocket-league"},"Rocket League game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info updates:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"server_info"),(0,n.kt)("li",{parentName:"ul"},"mutator_settings"),(0,n.kt)("li",{parentName:"ul"},"arena")))))))}u.isMDXComponent=!0}}]);