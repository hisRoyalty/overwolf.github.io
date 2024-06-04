"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[871],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(25773),n=(r(27378),r(35318));const o={id:"launch-time-performance",image:"/img/embed/api-best-practices.jpg",title:"App Launch Performance",sidebar_label:"App launch performance",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"topics/best-practices/launch-time-performance",id:"topics/best-practices/launch-time-performance",title:"App Launch Performance",description:"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible.",source:"@site/../pages/topics/best-practices/launch-time-performance.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/launch-time-performance",permalink:"/topics/best-practices/launch-time-performance",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/launch-time-performance.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1717496159,formattedLastUpdatedAt:"Jun 4, 2024",frontMatter:{id:"launch-time-performance",image:"/img/embed/api-best-practices.jpg",title:"App Launch Performance",sidebar_label:"App launch performance",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Hotkey best practices",permalink:"/topics/best-practices/hotkeys-best-practices"},next:{title:"Reduce OPK size",permalink:"/topics/best-practices/reduce-opk-size"}},p={},c=[{value:"Tips for a better launch experience",id:"tips-for-a-better-launch-experience",level:4}],l=(m="ImageSlider",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible."),(0,n.kt)("h4",{id:"tips-for-a-better-launch-experience"},"Tips for a better launch experience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Locally store assets used by your app's Home and Notification windows, which are the ones seen by the user on launch. These images, fonts or other assets should be a part of the base .opk file for faster loading times.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use long-term caching for resources that do not change often, so your user won't have to redownload materials. For example, League of Legends champion portraits and item visuals can be stored long-term. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compress your app\u2019s JavaScript. For example, comments and whitespace are not needed for code execution, and removing them will reduce file size and speed up script execution times.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compress images to the smallest size possible with ",(0,n.kt)("a",{parentName:"p",href:"https://www.jpegmini.com/"},"JPEGMini")," or ",(0,n.kt)("a",{parentName:"p",href:"https://tinypng.com/"},"TinyPNG"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"During runtime, prefer smaller, short running scripts to minimize responsiveness issues. Long-running JavaScript can block the main thread causing pages to become unresponsive."))),(0,n.kt)("p",null,"Our goal is to load any window in under 30ms from the moment the user clicked to open the app from the Overwolf dock or used to hotkey in-game. A loader can be used once the app has been launched."),(0,n.kt)(l,{mdxType:"ImageSlider"},(0,n.kt)("img",{src:r(173).Z,alt:"Trophy Hunter loader"}),(0,n.kt)("img",{src:r(56127).Z,alt:"CSGO Scout loader"})))}d.isMDXComponent=!0},56127:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/csgo-scout-loader-72a51ecc988d0edb801e600dfd65cb09.png"},173:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/th-loader-8f7574545326dfcd7e807b5d78230bc9.jpg"}}]);