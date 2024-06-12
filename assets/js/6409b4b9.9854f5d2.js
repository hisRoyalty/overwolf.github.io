"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5111],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},62792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:174,image:"/img/embed/changelogs.jpg",title:"Version 0.174",sidebar_label:"0.174",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/july/174",id:"api/changelogs/overwolf-platform/2021/july/174",title:"Version 0.174",description:"* Note that iterations 174 to 175 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2021/july/174.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/july",slug:"/api/changelogs/overwolf-platform/2021/july/174",permalink:"/api/changelogs/overwolf-platform/2021/july/174",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/july/174.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1718200663,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"174",image:"/img/embed/changelogs.jpg",title:"Version 0.174",sidebar_label:"0.174",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.176",permalink:"/api/changelogs/overwolf-platform/2021/august/176"},next:{title:"0.173",permalink:"/api/changelogs/overwolf-platform/2021/june/173"}},s={},p=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that iterations 174 to 175 were combined into a single iteration. ")),(0,r.kt)("h3",{id:"docs"},"Docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/topics/best-practices/electron-migration"},"Porting your Electron app to Overwolf")," - new guide."),(0,r.kt)("li",{parentName:"ul"},"New sample apps to make the OW creators life easier: ",(0,r.kt)("a",{parentName:"li",href:"/topics/integrations/login-with-twitch"},"login with Twitch/Steam sample app"),", ",(0,r.kt)("a",{parentName:"li",href:"/api/media/replays#sample-app"},"Replays API sample app"),", ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#sample-app"},"Streaming API sample app"),", and ",(0,r.kt)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management#app-channels-sample-app"},"Channels API sample app"),"."),(0,r.kt)("li",{parentName:"ul"},"How to ",(0,r.kt)("a",{parentName:"li",href:"/topics/integrations/login-with-overwolf#get-user-info-from-token"},"get user info"),' when you integrate the "login with Overwolf" feature in your website.')),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New manifest flag: Now you can set the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#windows-style"},"window style")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"InputPassThrough")," through the manifest, and not just with the ",(0,r.kt)("a",{parentName:"li",href:"/api/windows#setwindowstylewindowid-style-callback"},"overwolf.windows.setWindowStyle()")," function."),(0,r.kt)("li",{parentName:"ul"},"New enum: ",(0,r.kt)("a",{parentName:"li",href:"/api/profile/subscriptions/inapp#theme-enum"},"overwolf.profile.subscriptions.inapp.enums.Theme"),", to use with ",(0,r.kt)("a",{parentName:"li",href:"/api/profile/subscriptions/inapp#showplanid-theme"},"overwolf.profile.subscriptions.inapp.show()"),".  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/windows#changesizewindowid-width-height-callback"},"overwolf.windows.changeSize(windowId, width, height, callback)")," is now obsolete, replaced by ",(0,r.kt)("a",{parentName:"li",href:"/api/windows#changesizechangesizeparams-callback"},"overwolf.windows.changeSize(changeSizeParams, callback)"),".")),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OBS enhancments.")),(0,r.kt)("h3",{id:"dev-console"},"Dev Console"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscriptions - The first asset in the sub plan can be animation or static image, and users can see the asset type above the image.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed store showing logged in state when client does not (after being logged in previously but failing a startup web request)."),(0,r.kt)("li",{parentName:"ul"},"Fixed launch origin (relaunch) when using relaunch to launch apps."),(0,r.kt)("li",{parentName:"ul"},"Fixed the overwolf.profile.openLoginDialog API in cases where the store was closed."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where failed to start game recording was not fired in some cases, even though we failed to record.")))}u.isMDXComponent=!0}}]);