"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3670],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,g=c["".concat(s,".").concat(d)]||c[d]||f[d]||o;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const o={id:221,image:"/img/embed/changelogs.jpg",title:"Version 0.221",sidebar_label:"0.221",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/march/221",id:"api/changelogs/overwolf-platform/2023/march/221",title:"Version 0.221",description:"This version had two major releases. For clarity, their changelogs were kept separate.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/march/221.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/march",slug:"/api/changelogs/overwolf-platform/2023/march/221",permalink:"/api/changelogs/overwolf-platform/2023/march/221",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/march/221.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1715254229,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"221",image:"/img/embed/changelogs.jpg",title:"Version 0.221",sidebar_label:"0.221",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.223",permalink:"/api/changelogs/overwolf-platform/2023/may/223"},next:{title:"0.220",permalink:"/api/changelogs/overwolf-platform/2023/march/220"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"Version 0.221.109.x",id:"version-0221109x",level:2},{value:"Platform",id:"platform-1",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version had two major releases. For clarity, their changelogs were kept separate."),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved stability of app ",(0,n.kt)("a",{parentName:"li",href:"https://overwolf.github.io/api/extensions#the-origin-string"},"Deep Linking"),"."),(0,n.kt)("li",{parentName:"ul"},"App ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},"hotkeys")," can now be defined on a per-game basis, using the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},"game_ids")," field.")),(0,n.kt)("h2",{id:"version-0221109x"},"Version 0.221.109.x"),(0,n.kt)("h3",{id:"platform-1"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the underlying ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/chromiumembedded/cef/src/master/"},"CEF")," version from version 87 to version 109. A detailed breakdown of the underlying changes can be found ",(0,n.kt)("a",{parentName:"li",href:"https://chromestatus.com/features#milestone%3D109"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"Added support for web images in ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#showtoastnotificationargs-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.notifications.showToastNotification()")),". Simply pass the image's URL to the ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#heroimage-notes"},(0,n.kt)("inlineCode",{parentName:"a"},"heroImage"))," parameter in the ",(0,n.kt)("a",{parentName:"li",href:"/api/notifications#toastnotificationparams-object"},(0,n.kt)("inlineCode",{parentName:"a"},"ToastNotificationParams"))," object.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where an incorrect window state would be detected after maximizing a minimized in-game windows."),(0,n.kt)("li",{parentName:"ul"},"Enabling a disabled app that should launch with the currently-running game will now launch the app automatically."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where certain installed games would not be detected by Overwolf, even after using the ",(0,n.kt)("a",{parentName:"li",href:"/api/games#getgameinfogameclassid-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.getGameInfo()"))," or ",(0,n.kt)("a",{parentName:"li",href:"/api/games#getgamedbinfogameclassidcallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.getGameDBInfo()"))," methods."),(0,n.kt)("li",{parentName:"ul"},"Maximized in-game windows will now return the right window state after being minimized and then restored."),(0,n.kt)("li",{parentName:"ul"},"Maximized in-game windows will now return to their previous size after being dragged.")))}c.isMDXComponent=!0}}]);