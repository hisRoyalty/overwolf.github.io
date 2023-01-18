"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7070],{35318:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){return function(r){var t=d(r.components);return o.createElement(e,s({},r,{components:t}))}},d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},u=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||s;return t?o.createElement(m,n(n({ref:r},c),{},{components:t})):o.createElement(m,n({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=v;var n={};for(var i in r)hasOwnProperty.call(r,i)&&(n[i]=r[i]);n.originalType=e,n[m]="string"==typeof e?e:a,l[1]=n;for(var c=2;c<s;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8366:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=t(25773),a=(t(27378),t(35318));const s={id:"crash-reports",image:"/img/embed/dev-tools.jpg",title:"Crash Reports",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,n={unversionedId:"tools/developers-console/all-applications/crash-reports",id:"tools/developers-console/all-applications/crash-reports",title:"Crash Reports",description:"This feature is currently under maintenance. If you need access to it, talk with your DevRel manager!",source:"@site/pages/docs/tools/developers-console/all-applications/crash-reports.mdx",sourceDirName:"tools/developers-console/all-applications",slug:"/tools/developers-console/all-applications/crash-reports",permalink:"/tools/developers-console/all-applications/crash-reports",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/tools/developers-console/all-applications/crash-reports.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"crash-reports",image:"/img/embed/dev-tools.jpg",title:"Crash Reports",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"tools",previous:{title:"Reviews",permalink:"/tools/developers-console/all-applications/user-feedback/reviews"},next:{title:"Settings",permalink:"/tools/developers-console/settings/"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Crash reports types",id:"crash-reports-types",level:2},{value:"Crashes over time",id:"crashes-over-time",level:3},{value:"Crash logs",id:"crash-logs",level:3},{value:"Filter crashes by hour",id:"filter-crashes-by-hour",level:3},{value:"Download crash logs",id:"download-crash-logs",level:3},{value:"Crash rate compared to peers",id:"crash-rate-compared-to-peers",level:3}],p={toc:c};function d(e){let{components:r,...s}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{title:"WIP",type:"warning"},(0,a.mdx)("p",{parentName:"admonition"},"This feature is currently under maintenance. If you need access to it, talk with your DevRel manager!")),(0,a.mdx)("p",null,"In this article, we'll go over the process of viewing the crash reports for your apps, and understand the different types of reports."),(0,a.mdx)("h2",{id:"overview"},"Overview"),(0,a.mdx)("p",null,"Whenever your app crashes unexpectedly, the crash logs are automatically uploaded to our servers by the OW client. If there is no available internet connection or any other reason preventing the client from uploading the crash logs, it will automatically try to upload the logs every several hours until success."),(0,a.mdx)("p",null,"Each crash log is a zip file that contains all your app's crash logs, named according to the app's windows names, e.g.:",(0,a.mdx)("br",{parentName:"p"}),"\n","background.html.log, background.html.1.log, ads.html.log, ads.html.1.log, ads.html.2.log, etc."),(0,a.mdx)("p",null,"Once the logs are collected by our servers, you can view and analyze them through the OW dev console."),(0,a.mdx)("h2",{id:"crash-reports-types"},"Crash reports types"),(0,a.mdx)("p",null,"There are several types of views available for your app's crash logs, to make it easier to find and filter them. "),(0,a.mdx)("h3",{id:"crashes-over-time"},"Crashes over time"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"crashes-over-time",src:t(32435).Z,width:"1124",height:"522"})),(0,a.mdx)("h3",{id:"crash-logs"},"Crash logs"),(0,a.mdx)("p",null,"For each crash incident, you can get various details:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"crash-logs",src:t(93725).Z,width:"1134",height:"638"})),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"App version"),(0,a.mdx)("li",{parentName:"ul"},"Overwolf client version"),(0,a.mdx)("li",{parentName:"ul"},"Time created"),(0,a.mdx)("li",{parentName:"ul"},"Username"),(0,a.mdx)("li",{parentName:"ul"},"App logs")),(0,a.mdx)("h3",{id:"filter-crashes-by-hour"},"Filter crashes by hour"),(0,a.mdx)("p",null,"If you would like to get crash logs for a specific timeframe, you can filter by the hour:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"crashes-by-hour",src:t(43936).Z,width:"1145",height:"809"})),(0,a.mdx)("h3",{id:"download-crash-logs"},"Download crash logs"),(0,a.mdx)("p",null,"For each crash, you can easily download the user's support package uploaded to our servers - to examine, analyze, and find errors and issues. Just hit the gray arrow next to the relevant crash: "),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"download-crash-logs",src:t(63178).Z,width:"999",height:"298"})),(0,a.mdx)("h3",{id:"crash-rate-compared-to-peers"},"Crash rate compared to peers"),(0,a.mdx)("p",null,"You can view your crash rate compared to similar apps and determine if your app's health quality is relatively stable or not."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"crash-rate-compared-to-peers",src:t(95433).Z,width:"1126",height:"506"})))}d.isMDXComponent=!0},93725:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crash-logs-734dfb5b1815e138410e472345d1004b.png"},95433:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crash-rate-compared-to-peers-70612e875bc1fd5bee3f0e6902636b69.png"},43936:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crashes-by-hour-4bca667bbe0cfa4ae04a7c460a6cfa6f.png"},32435:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crashes-over-time-aabf37028be4f8e50537044b9c1be741.png"},63178:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/download-crash-logs-d6827bf4008f52323864429c35e129f6.png"}}]);