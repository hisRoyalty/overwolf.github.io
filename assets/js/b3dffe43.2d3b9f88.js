"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8295],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const r={id:"testing",image:"/img/embed/dev-tools.jpg",title:"Testing",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},l=void 0,s={unversionedId:"tools/developers-console/all-applications/release-management/testing",id:"tools/developers-console/all-applications/release-management/testing",title:"Testing",description:"Here, you can get an overview the testing channels of your app. These are custom channels,",source:"@site/../pages/tools/developers-console/all-applications/release-management/testing.mdx",sourceDirName:"tools/developers-console/all-applications/release-management",slug:"/tools/developers-console/all-applications/release-management/testing",permalink:"/tools/developers-console/all-applications/release-management/testing",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/developers-console/all-applications/release-management/testing.mdx",tags:[],version:"current",lastUpdatedBy:"JacksAtWork",lastUpdatedAt:1719326743,formattedLastUpdatedAt:"Jun 25, 2024",frontMatter:{id:"testing",image:"/img/embed/dev-tools.jpg",title:"Testing",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"tools",previous:{title:"Production",permalink:"/tools/developers-console/all-applications/release-management/production"},next:{title:"Store Listing",permalink:"/tools/developers-console/all-applications/store-listing"}},i={},p=[{value:"Creating a new App Channel",id:"creating-a-new-app-channel",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here, you can get an overview the testing channels of your app. These are custom channels,\nand can only be downloaded from using a direct link. If a user downloads your app from the store,\nthey will instead be subscribed to the ",(0,o.kt)("a",{parentName:"p",href:"./production"},"Production Channel"),".\n",(0,o.kt)("img",{alt:"The Testing Tab",src:n(93647).Z,width:"1344",height:"646"})),(0,o.kt)("p",null,"Under this tab, you can set up custom ",(0,o.kt)("a",{parentName:"p",href:"/tools/developers-console/all-applications/release-management#what-are-release-channels"},(0,o.kt)("strong",{parentName:"a"},"App Channels")),". These allow you to deploy different versions of your app to specific, hand-picked users.\nFor example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dev"),' - A "latest version" channel, that allows anyone in your team to test the latest development builds, for a faster development loop.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QA")," - A channel for your QA team to thoroughly check the functionality and stability of new features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Beta")," - a channel for your app's beta testers, to get real feedback from trusted users about new features before releasing them to your entire userbase.")),(0,o.kt)("p",null,'You can also set up "testing channels", in case you suspect a bug might have slipped in during a recent version, and wish to check if it exists on an older version.'),(0,o.kt)("h2",{id:"creating-a-new-app-channel"},"Creating a new App Channel"),(0,o.kt)("p",null,"In order to create a new channel, simply click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create channel")," button at the top right of the screen. You will then be greeted by the following prompt."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create New Channel",src:n(28436).Z,width:"1122",height:"594"})),(0,o.kt)("p",null,"Then, pick a name for the new channel, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save"),". The new channel will now show up on the list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Channel In List",src:n(1779).Z,width:"1114",height:"592"})),(0,o.kt)("p",null,"Now, if we go into any of these channels, by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage")," on its row, we will be greeted by a familiar screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Channel &#39;new&#39;",src:n(27845).Z,width:"1122",height:"593"})),(0,o.kt)("p",null,'Under "Channel details", we can see and edit the name of the channel.\nWe can also copy the URL required to download from this channel, by clicking on ',(0,o.kt)("inlineCode",{parentName:"p"},"Copy link")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"URL"),"."),(0,o.kt)("p",null,"The rest of the window allows us to ",(0,o.kt)("a",{parentName:"p",href:"/tools/developers-console/all-applications/release-management#manage-an-app-channel"},"manage the channel")," like any other channel."),(0,o.kt)("admonition",{title:"Test Channel Version Review",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Test channels are always exempt from ",(0,o.kt)("strong",{parentName:"p"},"mandatory")," version review. However, you can still choose to request a review if you wish.")))}d.isMDXComponent=!0},1779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/active-channels-1cf9c207e07c10ca6b71a2e67f453261.jpg"},27845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/channel-new-b6f6a250bea0d9b8aa2c5761fe329c8b.jpg"},93647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index-d00f24dc77e02638d9d639e76fc2a4d6.jpg"},28436:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-channel-25c665725f728050fd88be5833d626b3.jpg"}}]);