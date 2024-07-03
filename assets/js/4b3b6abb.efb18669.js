"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6042],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={id:157,image:"/img/embed/changelogs.jpg",title:"Version 0.157",sidebar_label:"0.157",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/november/157",id:"api/changelogs/overwolf-platform/2020/november/157",title:"Version 0.157",description:"API",source:"@site/../pages/api/changelogs/overwolf-platform/2020/november/157.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/november",slug:"/api/changelogs/overwolf-platform/2020/november/157",permalink:"/api/changelogs/overwolf-platform/2020/november/157",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/november/157.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720012030,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"157",image:"/img/embed/changelogs.jpg",title:"Version 0.157",sidebar_label:"0.157",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.158",permalink:"/api/changelogs/overwolf-platform/2020/november/158"},next:{title:"0.156",permalink:"/api/changelogs/overwolf-platform/2020/october/156"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game Events",id:"game-events",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},"overwolf.utils.openFilePicker")," - now accepts multiple selection of files.  The selected files will be returned on the callback as an array."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},"overwolf.io.listenOnFile")," - add an indication that the watching on file started successfully.")),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Release phasing - keep the same distribution per release.",(0,o.kt)("br",{parentName:"li"}),"When you release version 1.0 to 10% of your users using the phase system and found a major bug - you can release an immediate fix 1.1 that targets the same 10% of your users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241",target:"_blank"},"Aero-snap")," support for native windows - Resizable native windows should support aero-snap (winkey + arrows and sticky-behaviour to screen edges).")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full-screen embedded videos no longer automatically repositioned in the top-left corner."),(0,o.kt)("li",{parentName:"ul"},"Fixed an exception that could occur when shutting down Overwolf."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where the Windows 10 Controlled folder access prevented users from saving Overwolf videos in the default system directory."),(0,o.kt)("li",{parentName:"ul"},"Rainbow 6: Siege - CPU usage no longer increases when the user Alt-Tabs to with Overwolf."),(0,o.kt)("li",{parentName:"ul"},"Fixed several issues in Rainbow 6: Siege related to users who have enabled RawInput."),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue when using overwolf.extensions.relaunch too quickly."),(0,o.kt)("li",{parentName:"ul"},"Several security patches for ransomware protection and processes protection.")),(0,o.kt)("h3",{id:"dev-console"},"Dev Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'We added a "per-version" retention report to compare retention between different app versions. You can see it on your board.')),(0,o.kt)("h3",{id:"game-events"},"Game Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're expanding our library with typedef files for the different in-game events, starting with Valorant info updates.  You can find our def file in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overwolf/types"},"this repo"),", or as an ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/types"},"npm package"),".",(0,o.kt)("br",{parentName:"li"}),"More info ",(0,o.kt)("a",{parentName:"li",href:"/topics/best-practices/type-definition-file#using-types-for-games-events"},"here"),".")))}u.isMDXComponent=!0}}]);