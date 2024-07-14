"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9784],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(25773),a=(n(27378),n(35318));const r={id:"second-monitor",image:"/img/embed/api-best-practices.jpg",title:"Second monitor usage",sidebar_label:"Second monitor usage",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"topics/best-practices/second-monitor",id:"topics/best-practices/second-monitor",title:"Second monitor usage",description:"Second Screen value opportunities",source:"@site/../pages/topics/best-practices/second-monitor.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/second-monitor",permalink:"/topics/best-practices/second-monitor",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/second-monitor.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1720944629,formattedLastUpdatedAt:"Jul 14, 2024",frontMatter:{id:"second-monitor",image:"/img/embed/api-best-practices.jpg",title:"Second monitor usage",sidebar_label:"Second monitor usage",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Reduce OPK size",permalink:"/topics/best-practices/reduce-opk-size"},next:{title:"Type definition file",permalink:"/topics/best-practices/type-definition-file"}},c={},l=[{value:"Second Screen value opportunities",id:"second-screen-value-opportunities",level:2},{value:"When building the second screen window, follow these rules:",id:"when-building-the-second-screen-window-follow-these-rules",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"second-screen-value-opportunities"},"Second Screen value opportunities"),(0,a.kt)("p",null,"Many gamers have a second screen which is usually unused while they play and focus on their main monitor. The second screen is a great opportunity to provide more value in more ways for your users - and building a second window experience is just as simple as creating a normal window which communicates with GEP and has a transparent background window."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Second screen windows should launch automatically.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Second screen windows should have easy ways to close them - at least a hotkey and an X button at the top.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The second screen launcher should default in the original sized screen but have the ability to scale/restore down.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you don\u2019t know the exact resolution of the second screen, use 1920X1080 which is the most common one. "))),(0,a.kt)("h4",{id:"when-building-the-second-screen-window-follow-these-rules"},"When building the second screen window, follow these rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-keep_window_location"},(0,a.kt)("inlineCode",{parentName:"a"},"keep_window_location"))," flag to true.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-desktop_only"},(0,a.kt)("inlineCode",{parentName:"a"},"desktop_only"))," flag to true.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We recommend you set ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#native_window"},(0,a.kt)("inlineCode",{parentName:"a"},"native_window"))," flag to true.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If your native window run as a second-screen with the game, make sure to set the ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#disable_hardware_acceleration"},"disable_hardware_acceleration")," manifest flag.  It improves the performance of the game by reducing usage of the GPU while you are playing. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identify which screen is the secondary one and display the secondary window on that screen.",(0,a.kt)("br",{parentName:"p"}),"\n","Use the ",(0,a.kt)("a",{parentName:"p",href:"/api/utils"},"getMonitorsList()")," function for that.",(0,a.kt)("br",{parentName:"p"}),"\n","If you know the resolution of each screen, you can do the calculation for exactly where you should display your window.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note that the ",(0,a.kt)("a",{parentName:"p",href:"/api/games#gameinfo-object"},"GameInfo")," object contains a monitorHandle and a windowHandle. Take advantage of that if needed.",(0,a.kt)("br",{parentName:"p"}),"\n","Usage example: ",(0,a.kt)("a",{parentName:"p",href:"../using-windows-api/windows-resolution-size-position#identify-when-the-window-is-dragged-between-monitors"},"identify")," that the user moved the game window to the secondary screen.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the transparent background window to share data and have your app windows communicate."))))}d.isMDXComponent=!0}}]);