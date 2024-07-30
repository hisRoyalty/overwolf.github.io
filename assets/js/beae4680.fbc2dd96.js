"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3630],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(25773),n=(r(27378),r(35318));const s={id:"user-flow-and-error-handling",image:"/img/embed/api-best-practices.jpg",title:"User journey and error handling",sidebar_label:"User journey and error handling",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"topics/best-practices/user-flow-and-error-handling",id:"topics/best-practices/user-flow-and-error-handling",title:"User journey and error handling",description:"User Journey Basics",source:"@site/../pages/topics/best-practices/user-flow-and-error-handling.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/user-flow-and-error-handling",permalink:"/topics/best-practices/user-flow-and-error-handling",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/user-flow-and-error-handling.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722325180,formattedLastUpdatedAt:"Jul 30, 2024",frontMatter:{id:"user-flow-and-error-handling",image:"/img/embed/api-best-practices.jpg",title:"User journey and error handling",sidebar_label:"User journey and error handling",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Type definition file",permalink:"/topics/best-practices/type-definition-file"},next:{title:"Use Tab as an app Hotkey",permalink:"/topics/best-practices/using-tab"}},l={},d=[{value:"User Journey Basics",id:"user-journey-basics",level:2},{value:"Desktop journey",id:"desktop-journey",level:3},{value:"Loading screens",id:"loading-screens",level:3},{value:"App data is ready",id:"app-data-is-ready",level:3},{value:"Error handling",id:"error-handling",level:3}],p=(c="ImageSlider",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:d};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"user-journey-basics"},"User Journey Basics"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The journey you build for users should make them understand your app's value as well as how to actually get it."),(0,n.kt)("li",{parentName:"ol"},"Each step and possible action in your app needs to be communicated clearly to your users."),(0,n.kt)("li",{parentName:"ol"},"Software issues are inevitable, and error messages are super important to help users address the issue or, at least, avoid confusion.")),(0,n.kt)("h3",{id:"desktop-journey"},"Desktop journey"),(0,n.kt)("p",null,"The desktop window is a great place to provide information and lead the user onwards - since most apps and features are meant for in-game usage, users launching the desktop app are more attentive and patient. In this window you can explain your app's basics, clearly state what it does and where (for example, 'go in-game to launch this app'). "),(0,n.kt)("p",null,"The desktop window can be home to plenty more. Sharing news, asking for feedback, showcasing a cool video and more - it's all possible in your desktop hub. "),(0,n.kt)(p,{mdxType:"ImageSlider"},(0,n.kt)("img",{src:r(46127).Z,alt:"CS:GO Stats"}),(0,n.kt)("img",{src:r(51010).Z,alt:"Lolwiz"}),(0,n.kt)("img",{src:r(6241).Z,alt:"PUBG Tracker"})),(0,n.kt)("h3",{id:"loading-screens"},"Loading screens"),(0,n.kt)("p",null,"Good loading screens for your app assist in monetization and provide a great opportunity to communicate with the user in a non-interruptive way. You should include a short reasoning for the loading screen itself (for example, 'fetching player information'), but can also include visuals, materials or texts. "),(0,n.kt)(p,{mdxType:"ImageSlider"},(0,n.kt)("img",{src:r(94461).Z,alt:"Streamaware"}),(0,n.kt)("img",{src:r(41203).Z,alt:"DotaPlus"})),(0,n.kt)("h3",{id:"app-data-is-ready"},"App data is ready"),(0,n.kt)("p",null,"When your app is ready to work as intended, let the user know and explain how they should use it initially. It\u2019s super important to make sure that users understand the basics and are able to use your app as intended with hotkeys and/or mouse clicks."),(0,n.kt)(p,{mdxType:"ImageSlider"},(0,n.kt)("img",{src:r(63117).Z,alt:"Koreanbuilds"}),(0,n.kt)("img",{src:r(34266).Z,alt:"DotaPlus"})),(0,n.kt)("h3",{id:"error-handling"},"Error handling"),(0,n.kt)("p",null,"Having a downtime? Server being upgraded? Something else is wrong? Your users have to know. A simple and accurate error message announcing the state of the app can go a long way and save you time, energy and bad reviews. We recommend figuring out the most common issues and implementing error messages whenever possible. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples of error messages:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cDue to a recent game patch, Overwolf app API has stopped working - we'll fix it shortly!\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201c","[app name]"," is not able to show stats because the chosen game mode is not supported.\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cWe\u2019re experiencing issues and this app is currently unavailable.\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cSome stats may be unavailable. Check <appname's> Facebook and Twitter for updates\u201d")),(0,n.kt)(p,{mdxType:"ImageSlider"},(0,n.kt)("img",{src:r(7524).Z,alt:"Herowatch"}),(0,n.kt)("img",{src:r(60566).Z,alt:"Herowatch"}),(0,n.kt)("img",{src:r(15525).Z,alt:"Lolwiz"})))}m.isMDXComponent=!0},46127:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/csgo-stats-desktop-mode-3358a7b92eb883d9de5feccd37df9601.jpg"},41203:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dotaplus-loading-3d55214eb86becb42ad6144bc19ed70a.png"},34266:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dotaplus-ready-d0f3ac41127ec5fa6998a7ed9bb52d04.png"},60566:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error-herowatch-9505ab7d7b2d95b2c10aabdbb5bff685.jpg"},7524:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error-herowatch2-6ffecc9036c34169331a538f43bdc9f1.jpg"},15525:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error-lolwiz-c610fcec0c053f6b2bf2d677a47dfb66.jpg"},63117:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/koreanbuilds-loading-stats-5ccbfb424c1e99fde82e68d7881ebde9.jpg"},51010:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lolwiz-home-8018e6491dff43b4e9ac0b91762d82f0.jpg"},6241:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pubg-tracker-home-516d0470a9a7821a1d7b8f6bd82da058.jpg"},94461:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/streamaware-loading-data-89cb4ee273da085ec23b19bf8d0caf7d.jpg"}}]);