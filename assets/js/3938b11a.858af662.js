"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1583],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:176,image:"/img/embed/changelogs.jpg",title:"Version 0.176",sidebar_label:"0.176",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/august/176",id:"api/changelogs/overwolf-platform/2021/august/176",title:"Version 0.176",description:"* Note that iterations 176 to 177 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2021/august/176.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/august",slug:"/api/changelogs/overwolf-platform/2021/august/176",permalink:"/api/changelogs/overwolf-platform/2021/august/176",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/august/176.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723103780,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{id:"176",image:"/img/embed/changelogs.jpg",title:"Version 0.176",sidebar_label:"0.176",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.178",permalink:"/api/changelogs/overwolf-platform/2021/august/178"},next:{title:"0.174",permalink:"/api/changelogs/overwolf-platform/2021/july/174"}},p={},s=[{value:"API",id:"api",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note that iterations 176 to 177 were combined into a single iteration. ")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Toast Notification - Overwolf apps can use the newly implemented API, ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications"},"overwolf.notification"),", to show users native Windows notifications (those that pop up on the right bottom side of your screen).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/notifications#showtoastnotificationargs-callback"},"showToastNotification(ToastNotificationParams, callback)")," - This self explanatory function shows the native Windows notification once called."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/notifications#ontoastnotification"},"onToastNotification")," - An event listener that triggers when a notification was interacted with."),(0,n.kt)("li",{parentName:"ul"},"New Enums: ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#applogocrop-enum"},"AppLogoCrop"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#toatseventtype-enum"},"ToatsEventType"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#toasteventerror-enum"},"ToastEventError"),"."))),(0,n.kt)("li",{parentName:"ul"},"Dedicate video capture option for specific games (CSGO, Warzone, Destiny 2) that requires ",(0,n.kt)("a",{parentName:"li",href:"/topics/best-practices/exclusive-mode"},"exclusive mode")," to interact with the OW windows: up until now when we recorded these games in windowed mode, it resulted in a recording of the whole desktop. We now provide the option to record only the game window.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This feature is disabled by default, but you can enable it with the new ",(0,n.kt)("inlineCode",{parentName:"li"},"game_window_capture")," property that you can find in the video settings object in the ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replayvideooptions-object"},"replays API")," or the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#game_window_capture-notes"},"streaming API"),".  "),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"is_game_window_capture")," properties added to ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#onstartstreaming"},"onStartStreaming")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#onreplayservicesstarted"},"onReplayServicesStarted")," to inform the app Creator if this new capturing feature was used or not on the current OW window.")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subscription in-app login form fix."),(0,n.kt)("li",{parentName:"ul"},"Overwolf will no longer crash when merging too many files while using ",(0,n.kt)("a",{parentName:"li",href:"/api/media/videos#createvideocompositionfilesfiles-outputfile-callback"},"createVideoCompositionFiles()"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed video recording for HyperScape."),(0,n.kt)("li",{parentName:"ul"},"Implemented a fix aimed at the integrity of the LevelDB."),(0,n.kt)("li",{parentName:"ul"},"Transparent windows in OpenGL games now get properly repainted.")))}u.isMDXComponent=!0}}]);