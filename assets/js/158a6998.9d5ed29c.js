"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6490],{35318:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(o),g=n,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<l;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},49265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=o(25773),n=(o(27378),o(35318));const l={id:"downloader-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,a={unversionedId:"topics/using-plugins/downloader-plugin",id:"topics/using-plugins/downloader-plugin",title:"The Overwolf Downloader plugin",description:"This plugin allows your app to download a remote (http/s) file to the local disk.",source:"@site/../pages/topics/using-plugins/downloader-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/downloader-plugin",permalink:"/topics/using-plugins/downloader-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/downloader-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723982107,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"downloader-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Game events Simulator",permalink:"/topics/using-events/using-events-simulator"},next:{title:"Plug-in Implementation",permalink:"/topics/using-plugins/how-to-use-plugins-in-your-app"}},p={},u=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Download",id:"download",level:2}],s={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This plugin allows your app to download a remote (http/s) file to the local disk."),(0,n.kt)("p",null,"You can read  more in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"Downloader repository"),"."),(0,n.kt)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,n.kt)("p",null,"This plugin enables you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download a remote (http/s) file to the local disk."),(0,n.kt)("li",{parentName:"ul"},"Supports gzip."),(0,n.kt)("li",{parentName:"ul"},"Supports MD5 check.")),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can get the plugin from our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"GitHub repository"),"."),(0,n.kt)("li",{parentName:"ul"},"See sample app for more information.")))}c.isMDXComponent=!0}}]);