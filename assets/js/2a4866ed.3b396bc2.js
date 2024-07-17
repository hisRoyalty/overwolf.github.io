"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7195],{35318:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(27378);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),g=l,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||n;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function f(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<n;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},87797:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(25773),l=(o(27378),o(35318));const n={id:"user-logs",image:"/img/embed/dev-tools.jpg",title:"User Logs",sidebar_position:30,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},a=void 0,i={unversionedId:"tools/developers-console/all-applications/user-logs",id:"tools/developers-console/all-applications/user-logs",title:"User Logs",description:"Using this tab, you can view, sort, and download User Logs uploaded by your app in the past last 3 months,",source:"@site/../pages/tools/developers-console/all-applications/user-logs.mdx",sourceDirName:"tools/developers-console/all-applications",slug:"/tools/developers-console/all-applications/user-logs",permalink:"/tools/developers-console/all-applications/user-logs",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/developers-console/all-applications/user-logs.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721220047,formattedLastUpdatedAt:"Jul 17, 2024",sidebarPosition:30,frontMatter:{id:"user-logs",image:"/img/embed/dev-tools.jpg",title:"User Logs",sidebar_position:30,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"tools",previous:{title:"Store Listing",permalink:"/tools/developers-console/all-applications/store-listing"},next:{title:"Subscriptions",permalink:"/tools/developers-console/all-applications/subscriptions/"}},s={},p=[{value:"Live Graph",id:"live-graph",level:2},{value:"User Logs Overview",id:"user-logs-overview",level:2},{value:"Filtering",id:"filtering",level:3}],d=(u="ImageBoxModal",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var u;const c={toc:p};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Using this tab, you can view, sort, and download User Logs ",(0,l.kt)("a",{parentName:"p",href:"https://overwolf.github.io/api/utils#uploadclientlogsuploadclientlogsoptions-callback"},"uploaded by your app")," in the past last 3 months,\nto be able to investigate hard-to-catch issues directly, and even get a deeper understanding of your app's real-time usage."),(0,l.kt)(d,{mdxType:"ImageBoxModal"},(0,l.kt)("img",{src:o(59306).Z,alt:"The User Logs Tab"})),(0,l.kt)("h2",{id:"live-graph"},"Live Graph"),(0,l.kt)("p",null,"Using the Graph, you can get an overview of the amount of User Logs uploaded every hour in the past 7 days.\nClicking on any one particular hour will filter the ",(0,l.kt)("a",{parentName:"p",href:"#user-logs-overview"},"User Logs Overview")," to that specific hour."),(0,l.kt)("h2",{id:"user-logs-overview"},"User Logs Overview"),(0,l.kt)("p",null,"In the following table, you can view all User Logs uploaded within the past 3 months, split into pages using\n",(0,l.kt)("a",{parentName:"p",href:"/tools/developers-console#the-footer-toolbar"},"The Paging Footer"),"."),(0,l.kt)("p",null,"For every User Logs file, you can then find the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name (",(0,l.kt)("a",{parentName:"li",href:"https://overwolf.github.io/api/utils#uploadclientlogsoptions-object"},(0,l.kt)("inlineCode",{parentName:"a"},"file-prefix"))," + ",(0,l.kt)("inlineCode",{parentName:"li"},"_generated-file-name"),") - Name of this logs file."),(0,l.kt)("li",{parentName:"ul"},"App Version - The version of the app from which this logs file was uploaded."),(0,l.kt)("li",{parentName:"ul"},"Overwolf Version - The Overwolf Version from which this logs file was uploaded."),(0,l.kt)("li",{parentName:"ul"},"Created - The date at which this logs file was uploaded."),(0,l.kt)("li",{parentName:"ul"},"Username - The Overwolf username of the user that uploaded these logs. If the user was not logged in, this will equal to their ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:3000/api/profile#note-userid-is-not-a-unique-identifier"},"Overwolf Machine ID"),"."),(0,l.kt)("li",{parentName:"ul"},"Download button - Allows you to download the relevant logs file.")),(0,l.kt)("p",null,"You can also sort the logs based on any of those fields, in either an Ascending or Descending order."),(0,l.kt)("h3",{id:"filtering"},"Filtering"),(0,l.kt)("p",null,"The displayed User Logs files can be filtered using the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start & End date - Define a date range from which to display logs."),(0,l.kt)("li",{parentName:"ul"},'Today | Yesterday | 7D - Alternative way to define the date range, corresponding to "Current day", "Last day", and "Last 7 Days" respectively.'),(0,l.kt)("li",{parentName:"ul"},"Log name prefix - Filter by searching through the User Logs' ",(0,l.kt)("a",{parentName:"li",href:"https://overwolf.github.io/api/utils#uploadclientlogsoptions-object"},"file prefix"),". This filter is applied upon clicking the Filter button.")))}g.isMDXComponent=!0},59306:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/index-e3eb6dc2e7d046365c4d9d0b036bab13.jpg"}}]);