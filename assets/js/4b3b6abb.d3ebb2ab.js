"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6042],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={id:157,image:"/img/embed/changelogs.jpg",title:"Version 0.157",sidebar_label:"0.157",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2020/november/157",id:"api/changelogs/overwolf-platform/2020/november/157",title:"Version 0.157",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2020/november/157.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/november",slug:"/api/changelogs/overwolf-platform/2020/november/157",permalink:"/api/changelogs/overwolf-platform/2020/november/157",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/november/157.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721220047,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{id:"157",image:"/img/embed/changelogs.jpg",title:"Version 0.157",sidebar_label:"0.157",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.158",permalink:"/api/changelogs/overwolf-platform/2020/november/158"},next:{title:"0.156",permalink:"/api/changelogs/overwolf-platform/2020/october/156"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},"overwolf.utils.openFilePicker")," - now accepts multiple selection of files.  The selected files will be returned on the callback as an array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},"overwolf.io.listenOnFile")," - add an indication that the watching on file started successfully.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Release phasing - keep the same distribution per release.",(0,a.kt)("br",{parentName:"li"}),"When you release version 1.0 to 10% of your users using the phase system and found a major bug - you can release an immediate fix 1.1 that targets the same 10% of your users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241",target:"_blank"},"Aero-snap")," support for native windows - Resizable native windows should support aero-snap (winkey + arrows and sticky-behaviour to screen edges).")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full-screen embedded videos no longer automatically repositioned in the top-left corner."),(0,a.kt)("li",{parentName:"ul"},"Fixed an exception that could occur when shutting down Overwolf."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where the Windows 10 Controlled folder access prevented users from saving Overwolf videos in the default system directory."),(0,a.kt)("li",{parentName:"ul"},"Rainbow 6: Siege - CPU usage no longer increases when the user Alt-Tabs to with Overwolf."),(0,a.kt)("li",{parentName:"ul"},"Fixed several issues in Rainbow 6: Siege related to users who have enabled RawInput."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue when using overwolf.extensions.relaunch too quickly."),(0,a.kt)("li",{parentName:"ul"},"Several security patches for ransomware protection and processes protection.")),(0,a.kt)("h3",{id:"dev-console"},"Dev Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'We added a "per-version" retention report to compare retention between different app versions. You can see it on your board.')),(0,a.kt)("h3",{id:"game-events"},"Game Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We're expanding our library with typedef files for the different in-game events, starting with Valorant info updates.  You can find our def file in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/overwolf/types"},"this repo"),", or as an ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/types"},"npm package"),".",(0,a.kt)("br",{parentName:"li"}),"More info ",(0,a.kt)("a",{parentName:"li",href:"/topics/best-practices/type-definition-file#using-types-for-games-events"},"here"),".")))}u.isMDXComponent=!0}}]);