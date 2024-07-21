"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2080],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,c=m["".concat(d,".").concat(u)]||m[u]||g[u]||l;return r?a.createElement(c,o(o({ref:t},s),{},{components:r})):a.createElement(c,o({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(25773),n=(r(27378),r(35318));const l={id:"log",image:"/img/embed/deprecated.jpg",title:"overwolf.log API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/deprecated/obsolete/log",id:"api/deprecated/obsolete/log",title:"overwolf.log API",description:"Provides logging functions that make use of Overwolf\u2019s internal logging system.",source:"@site/../pages/api/deprecated/obsolete/log.mdx",sourceDirName:"api/deprecated/obsolete",slug:"/api/deprecated/obsolete/log",permalink:"/api/deprecated/obsolete/log",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/deprecated/obsolete/log.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"log",image:"/img/embed/deprecated.jpg",title:"overwolf.log API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Obsolete",permalink:"/api/deprecated/obsolete/"},next:{title:"overwolf.tobii API",permalink:"/api/deprecated/obsolete/tobii"}},d={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"verbose(msg)",id:"verbosemsg",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"info(msg)",id:"infomsg",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"warning(msg)",id:"warningmsg",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"error(msg)",id:"errormsg",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"critical(msg)",id:"criticalmsg",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Provides logging functions that make use of Overwolf\u2019s internal logging system."),(0,n.kt)("admonition",{title:"OBSOLETE",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The overwolf.log API is an historical API that would allow the app to write logs to the disk.",(0,n.kt)("br",{parentName:"p"}),"\n","Since then, we've developed the feature of storing regular console.log/error/info calls to disk.",(0,n.kt)("br",{parentName:"p"}),"\n","Simply ",(0,n.kt)("inlineCode",{parentName:"p"},"console.log")," and you can find the result written in ",(0,n.kt)("inlineCode",{parentName:"p"},"%localappdata%\\Overwolf\\Log\\Apps\\"),".")),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#verbosemsg"},"overwolf.log.verbose()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#infomsg"},"overwolf.log.info()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#warningmsg"},"overwolf.log.warning()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#errormsg"},"overwolf.log.error()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#criticalmsg"},"overwolf.log.critical()"))),(0,n.kt)("h2",{id:"verbosemsg"},"verbose(msg)"),(0,n.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes a verbose, debug level log message to the common log.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,n.kt)("h2",{id:"infomsg"},"info(msg)"),(0,n.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes info level log message to the common log.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,n.kt)("h2",{id:"warningmsg"},"warning(msg)"),(0,n.kt)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes warning level log message to the common log.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,n.kt)("h2",{id:"errormsg"},"error(msg)"),(0,n.kt)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes error level log message to the common log.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,n.kt)("h2",{id:"criticalmsg"},"critical(msg)"),(0,n.kt)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes critical level log message to the common log.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message to write to the log file")))))}m.isMDXComponent=!0}}]);