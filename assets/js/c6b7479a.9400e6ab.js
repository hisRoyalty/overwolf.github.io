"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2613],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const o={id:241,image:"/img/embed/changelogs.jpg",title:"Version 0.241",sidebar_label:"0.241",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2024/january/241",id:"api/changelogs/overwolf-platform/2024/january/241",title:"Version 0.241",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2024/january/241.mdx",sourceDirName:"api/changelogs/overwolf-platform/2024/january",slug:"/api/changelogs/overwolf-platform/2024/january/241",permalink:"/api/changelogs/overwolf-platform/2024/january/241",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2024/january/241.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1724312186,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{id:"241",image:"/img/embed/changelogs.jpg",title:"Version 0.241",sidebar_label:"0.241",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.242",permalink:"/api/changelogs/overwolf-platform/2024/february/242"},next:{title:"0.240",permalink:"/api/changelogs/overwolf-platform/2023/december/240"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],c=(u="SkipMe",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const m={toc:s};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{type:"TEMPLATE",mdxType:"SkipMe"},(0,n.kt)("h3",{id:"platform"},"Platform")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the optional ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," property to ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#onstopstreaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.onStopStreaming")),", for cases where the stream stopped successfully, but was stopped due to an error."),(0,n.kt)("li",{parentName:"ul"},"Added the ",(0,n.kt)("inlineCode",{parentName:"li"},"uuid")," property to ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#onloginstatechanged"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.profile.onLoginStateChanged")),"."),(0,n.kt)("li",{parentName:"ul"},"Calling ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions/current#setuseremailhasheshashes-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.extensions.current.setUserEmailHashes"))," with an empty hashes object will now revert the App-specified hashes.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#onstreamingerror"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.onStreamingError"))," event will now be invoked whenever a stream is stopped due to an error, even if a video was still created."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the ",(0,n.kt)("inlineCode",{parentName:"li"},"uuid")," property would not be immediately ready in ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#getcurrentusercallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.profile.getCurrentUser()"))," when changing accounts."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the token generated by ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#generateusersessiontokencallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.profile.generateUserSessionToken()"))," would be cached between client log-ins."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the ",(0,n.kt)("inlineCode",{parentName:"li"},"isCursorVisible")," property in ",(0,n.kt)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.OverlayInfo"))," would sometimes be incorrectly set to true."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where trying to capture a screenshot in WoW would instead cause an ",(0,n.kt)("inlineCode",{parentName:"li"},"Unknown Error")," to be thrown."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the client would get stuck while loading large OPKs directly.")))}f.isMDXComponent=!0}}]);