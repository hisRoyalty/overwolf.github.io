"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[998],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(p,".").concat(m)]||c[m]||f[m]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const o={id:219,image:"/img/embed/changelogs.jpg",title:"Version 0.219",sidebar_label:"0.219",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2023/february/219",id:"api/changelogs/overwolf-platform/2023/february/219",title:"Version 0.219",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2023/february/219.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/february",slug:"/api/changelogs/overwolf-platform/2023/february/219",permalink:"/api/changelogs/overwolf-platform/2023/february/219",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/february/219.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721227860,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{id:"219",image:"/img/embed/changelogs.jpg",title:"Version 0.219",sidebar_label:"0.219",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.220",permalink:"/api/changelogs/overwolf-platform/2023/march/220"},next:{title:"0.218",permalink:"/api/changelogs/overwolf-platform/2023/february/218"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enabled the CSS pseudo-class ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where"},(0,n.kt)("inlineCode",{parentName:"a"},":where()"))," as experimental."),(0,n.kt)("li",{parentName:"ul"},"Trying to run an unpacked application when logged out will now show an error message."),(0,n.kt)("li",{parentName:"ul"},"Prints attributed to ",(0,n.kt)("inlineCode",{parentName:"li"},"webpack-internal:\\\\")," will now always be written to the app's logs, even with log filtering enabled.")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#generateusersessiontokencallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.profile.generateUserSessionToken()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Generates a short lived authentication token for the currently logged-in user."),(0,n.kt)("li",{parentName:"ul"},"Short lived authentication tokens can be tested against the ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#verify-token-integrity"},"relevant endpoint"),", to prove its legitemacy for an external app,\nas well as be used to ",(0,n.kt)("a",{parentName:"li",href:"/api/profile#get-user-profile-via-token"},"obtain certain details")," about the linked Overwolf user profile."))),(0,n.kt)("li",{parentName:"ul"},"Updated API - ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#uploadclientlogsoptions-note"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.utils.uploadClientLogs()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UploadClientLogsOptions.filePrefix")," must only contain legal characters ",(0,n.kt)("inlineCode",{parentName:"li"},"(a-z, A-Z, 0-9, -, _)"),", and must contain 64 or less characters in total.")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where an app could create more than one tray icon.")))}c.isMDXComponent=!0}}]);