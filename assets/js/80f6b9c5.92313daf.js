"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2751],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||s;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=u;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n[h]="string"==typeof e?e:o,l[1]=n;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var a=r(25773),o=(r(27378),r(35318));const s={id:"crash-reports",image:"/img/embed/dev-tools.jpg",title:"Crash Reports",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,n={unversionedId:"tools/developers-console/all-applications/crash-reports",id:"tools/developers-console/all-applications/crash-reports",title:"Crash Reports",description:"This feature is currently under maintenance. If you need access to it, talk with your DevRel manager!",source:"@site/../pages/tools/developers-console/all-applications/crash-reports.mdx",sourceDirName:"tools/developers-console/all-applications",slug:"/tools/developers-console/all-applications/crash-reports",permalink:"/tools/developers-console/all-applications/crash-reports",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/developers-console/all-applications/crash-reports.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1716462870,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{id:"crash-reports",image:"/img/embed/dev-tools.jpg",title:"Crash Reports",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"tools",previous:{title:"Reviews",permalink:"/tools/developers-console/all-applications/user-feedback/reviews"},next:{title:"Settings",permalink:"/tools/developers-console/settings/"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Crash reports types",id:"crash-reports-types",level:2},{value:"Crashes over time",id:"crashes-over-time",level:3},{value:"Crash logs",id:"crash-logs",level:3},{value:"Filter crashes by hour",id:"filter-crashes-by-hour",level:3},{value:"Download crash logs",id:"download-crash-logs",level:3},{value:"Crash rate compared to peers",id:"crash-rate-compared-to-peers",level:3}],p={toc:c};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"WIP",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This feature is currently under maintenance. If you need access to it, talk with your DevRel manager!")),(0,o.kt)("p",null,"In this article, we'll go over the process of viewing the crash reports for your apps, and understand the different types of reports."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Whenever your app crashes unexpectedly, the crash logs are automatically uploaded to our servers by the OW client. If there is no available internet connection or any other reason preventing the client from uploading the crash logs, it will automatically try to upload the logs every several hours until success."),(0,o.kt)("p",null,"Each crash log is a zip file that contains all your app's crash logs, named according to the app's windows names, e.g.:",(0,o.kt)("br",{parentName:"p"}),"\n","background.html.log, background.html.1.log, ads.html.log, ads.html.1.log, ads.html.2.log, etc."),(0,o.kt)("p",null,"Once the logs are collected by our servers, you can view and analyze them through the OW dev console."),(0,o.kt)("h2",{id:"crash-reports-types"},"Crash reports types"),(0,o.kt)("p",null,"There are several types of views available for your app's crash logs, to make it easier to find and filter them. "),(0,o.kt)("h3",{id:"crashes-over-time"},"Crashes over time"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crashes-over-time",src:r(76772).Z,width:"1124",height:"522"})),(0,o.kt)("h3",{id:"crash-logs"},"Crash logs"),(0,o.kt)("p",null,"For each crash incident, you can get various details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crash-logs",src:r(41780).Z,width:"1134",height:"638"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App version"),(0,o.kt)("li",{parentName:"ul"},"Overwolf client version"),(0,o.kt)("li",{parentName:"ul"},"Time created"),(0,o.kt)("li",{parentName:"ul"},"Username"),(0,o.kt)("li",{parentName:"ul"},"App logs")),(0,o.kt)("h3",{id:"filter-crashes-by-hour"},"Filter crashes by hour"),(0,o.kt)("p",null,"If you would like to get crash logs for a specific timeframe, you can filter by the hour:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crashes-by-hour",src:r(17873).Z,width:"1145",height:"809"})),(0,o.kt)("h3",{id:"download-crash-logs"},"Download crash logs"),(0,o.kt)("p",null,"For each crash, you can easily download the user's support package uploaded to our servers - to examine, analyze, and find errors and issues. Just hit the gray arrow next to the relevant crash: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"download-crash-logs",src:r(44870).Z,width:"999",height:"298"})),(0,o.kt)("h3",{id:"crash-rate-compared-to-peers"},"Crash rate compared to peers"),(0,o.kt)("p",null,"You can view your crash rate compared to similar apps and determine if your app's health quality is relatively stable or not."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crash-rate-compared-to-peers",src:r(82076).Z,width:"1126",height:"506"})))}h.isMDXComponent=!0},41780:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/crash-logs-734dfb5b1815e138410e472345d1004b.png"},82076:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/crash-rate-compared-to-peers-70612e875bc1fd5bee3f0e6902636b69.png"},17873:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/crashes-by-hour-4bca667bbe0cfa4ae04a7c460a6cfa6f.png"},76772:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/crashes-over-time-aabf37028be4f8e50537044b9c1be741.png"},44870:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/download-crash-logs-d6827bf4008f52323864429c35e129f6.png"}}]);