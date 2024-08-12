"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6490],{35318:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(o),g=r,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var u=2;u<l;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},49265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=o(25773),r=(o(27378),o(35318));const l={id:"downloader-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,a={unversionedId:"topics/using-plugins/downloader-plugin",id:"topics/using-plugins/downloader-plugin",title:"The Overwolf Downloader plugin",description:"This plugin allows your app to download a remote (http/s) file to the local disk.",source:"@site/../pages/topics/using-plugins/downloader-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/downloader-plugin",permalink:"/topics/using-plugins/downloader-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/downloader-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"downloader-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Game events Simulator",permalink:"/topics/using-events/using-events-simulator"},next:{title:"Plug-in Implementation",permalink:"/topics/using-plugins/how-to-use-plugins-in-your-app"}},p={},u=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Download",id:"download",level:2}],s={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin allows your app to download a remote (http/s) file to the local disk."),(0,r.kt)("p",null,"You can read  more in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"Downloader repository"),"."),(0,r.kt)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,r.kt)("p",null,"This plugin enables you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download a remote (http/s) file to the local disk."),(0,r.kt)("li",{parentName:"ul"},"Supports gzip."),(0,r.kt)("li",{parentName:"ul"},"Supports MD5 check.")),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can get the plugin from our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"GitHub repository"),"."),(0,r.kt)("li",{parentName:"ul"},"See sample app for more information.")))}c.isMDXComponent=!0}}]);