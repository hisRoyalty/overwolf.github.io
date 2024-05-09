"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1906],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={id:188,image:"/img/embed/changelogs.jpg",title:"Version 0.188",sidebar_label:"0.188",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2022/january/188",id:"api/changelogs/overwolf-platform/2022/january/188",title:"Version 0.188",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2022/january/188.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/january",slug:"/api/changelogs/overwolf-platform/2022/january/188",permalink:"/api/changelogs/overwolf-platform/2022/january/188",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/january/188.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1715238614,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"188",image:"/img/embed/changelogs.jpg",title:"Version 0.188",sidebar_label:"0.188",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.190",permalink:"/api/changelogs/overwolf-platform/2022/january/190"},next:{title:"0.187",permalink:"/api/changelogs/overwolf-platform/2021/december/187"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Longer Replays")," - The Replay API can now record up to 10 minutes unlike the\n3 minutes it was able to record before. Please use this wisely as it can affect\nmemory usage, CPU and the time which it takes Overwolf to create the replay\nvideo file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getRunningGameInfo2")," - ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"getRunningGameInfo")," is back and he's angrier than\never")," - In this sequel, ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf.games.getRunningGameInfo2")," no longer returns\njust ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," when it's being called while there's no game running.\nNow it returns: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"  {\n      gameInfo: null,\n      success: true\n  }\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Media Folder Access")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf.media.videos")," namespace now has access to\npreviously chosen video folders (so if a user has changed the video folder,\nyou'll now also have access to the previous folder when using that API).")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"App Validations")," - Each and every app that a user downloads now gets\nvalidated to make sure it includes only the content the App Creator has\nintended."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Updated 3rd party DLLs")," - We updated most of our 3rd party DLLs, The\nfollowing DLLs were updated to the following versions:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Newtonsoft.Json.dll - 13.0.1.25517\nCommandLine.dll - 2.8.0.0\nlog4net.dll - 2.0.13.0\nIonic.Zip.Reduced.dll was replaced with DotNetZip.dll - 1.6.0.0\n")))),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug that caused an app window to become invisible after resizing."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue that created an offset issue when using multiple monitors with\ndifferent DPIs."),(0,a.kt)("li",{parentName:"ul"},"Fixed a small memory leak with certain OpenGL games."),(0,a.kt)("li",{parentName:"ul"},"Uninstalling multiple apps from the Overwolf Uninstaller while Overwolf is closed now works as intended."),(0,a.kt)("li",{parentName:"ul"},"Fixed possible memory leak when using ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf.extensions.io.readTextFile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf.extensions.io.writeTextFile")," for extremely large files.")))}c.isMDXComponent=!0}}]);