"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4491],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},75656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:226,image:"/img/embed/changelogs.jpg",title:"Version 0.226",sidebar_label:"0.226",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/june/226",id:"api/changelogs/overwolf-platform/2023/june/226",title:"Version 0.226",description:"* Note that iterations 225 and 226 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/june/226.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/june",slug:"/api/changelogs/overwolf-platform/2023/june/226",permalink:"/api/changelogs/overwolf-platform/2023/june/226",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/june/226.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720091045,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{id:"226",image:"/img/embed/changelogs.jpg",title:"Version 0.226",sidebar_label:"0.226",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.228",permalink:"/api/changelogs/overwolf-platform/2023/july/228"},next:{title:"0.224",permalink:"/api/changelogs/overwolf-platform/2023/may/224"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that iterations 225 and 226 were combined into a single version.")),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"As mentioned in a previous newsletter, this version will be the last supported Overwolf version for Windows 7/8/8.1."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A warning has been added to the installer as well as the clients of existing affected users."),(0,r.kt)("li",{parentName:"ul"},"While support for this version will be removed, it will still continue working, and apps can still choose to release updates for it.")))),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deprecated API - Deprecated all ",(0,r.kt)("a",{parentName:"li",href:"/api/deprecated/gfycat"},"Gfycat")," methods, as the site seems to ",(0,r.kt)("a",{parentName:"li",href:"https://forums.tms.sx/threads/gfycat-is-dead.44691/"},"no longer be running"),"."),(0,r.kt)("li",{parentName:"ul"},"New API - ",(0,r.kt)("a",{parentName:"li",href:"/api/media#takescreenshotextargetpath-options-callback"},"overwolf.media.takeScreenshotEX()")," - Allows an app to further control the settings of file-based game screenshots.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With the release of this API, file screenshots will now always use the ",(0,r.kt)("inlineCode",{parentName:"li"},".jpeg")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},".bmp")," file formats. Screenshots taken before this version however, will always use the ",(0,r.kt)("inlineCode",{parentName:"li"},".jpg")," format."))),(0,r.kt)("li",{parentName:"ul"},"New API - ",(0,r.kt)("a",{parentName:"li",href:"/api/utils#createlogszipcallback"},"overwolf.utils.createLogsZip()")," - Allows an app to create a local logs.zip from the local users' logs, as opposed to just creating and uploading it directly to the server."),(0,r.kt)("li",{parentName:"ul"},"Updated API - Added the ",(0,r.kt)("a",{parentName:"li",href:"/api/games#getrunninggameinforesult-object"},(0,r.kt)("inlineCode",{parentName:"a"},"GetRunningGameInfoResult.elevated"))," field, which indicates whether the running game is running with elevated permissions (Aka Running as Administrator)."),(0,r.kt)("li",{parentName:"ul"},"Updated API - Improved the clarity of the exception thrown when selecting an unsupported encoder in ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#streamsettings-object"},"StreamSettings")," - now uses the ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#captureerrorcode-enum"},"CaptureErrorCode.UnsupportedEncoder")," error code.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue involving app overlay enablement for newly targeted games."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where app windows would occassionally freeze when trying to open a new window."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/notifications#showtoastnotificationargs-callback"},"overwolf.notifications.showToastNotification()")," will no longer fail if passed an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"buttons")," array."),(0,r.kt)("li",{parentName:"ul"},"Downloading an app through an app ",(0,r.kt)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management/testing"},"test channel")," whose name contains a space (",(0,r.kt)("inlineCode",{parentName:"li"}," "),") character will no longer download the app's public version instead."),(0,r.kt)("li",{parentName:"ul"},"Drag resizing an in-game window will no longer get stuck when releasing the drag outside of the game's screen."),(0,r.kt)("li",{parentName:"ul"},"Game-specific hotkeys will no longer ignore settings changes on the next overwolf start."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with the enable overlay notification not showing in some cases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/extensions/io#deletespace-path-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.extensions.io.delete()"))," will no longer throw an error when passing in an empty file path."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,r.kt)("inlineCode",{parentName:"li"},"overwolf.social.*.shareEx()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"overwolf.social.*.share()")," methods would fail when trying to share a ",(0,r.kt)("inlineCode",{parentName:"li"},".jpeg")," image.")))}m.isMDXComponent=!0}}]);