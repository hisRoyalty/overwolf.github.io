"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1889],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){return function(t){var r=p(t.components);return n.createElement(e,l({},t,{components:r}))}},p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,c=s["".concat(o,".").concat(u)]||s[u]||g[u]||l;return r?n.createElement(c,d(d({ref:t},m),{},{components:r})):n.createElement(c,d({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},41211:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],d={id:"overwolf-log",title:"overwolf.log API",sidebar_label:"overwolf.log"},i=void 0,m={unversionedId:"api/overwolf-log",id:"api/overwolf-log",title:"overwolf.log API",description:"Provides logging functions that make use of Overwolf\u2019s internal logging system.",source:"@site/pages/docs/api/overwolf-log.mdx",sourceDirName:"api",slug:"/api/overwolf-log",permalink:"/V2TestFixed/docs/api/overwolf-log",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/api/overwolf-log.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-log",title:"overwolf.log API",sidebar_label:"overwolf.log"}},s={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"verbose(msg)",id:"verbosemsg",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"info(msg)",id:"infomsg",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"warning(msg)",id:"warningmsg",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"error(msg)",id:"errormsg",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"critical(msg)",id:"criticalmsg",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4}],u={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Provides logging functions that make use of Overwolf\u2019s internal logging system."),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"The overwolf.log API is an historical API that would allow the app to write logs to the disk.",(0,l.mdx)("br",{parentName:"p"}),"\n","Since then, we've developed the feature of storing regular console.log/error/info calls to disk.",(0,l.mdx)("br",{parentName:"p"}),"\n","Simply ",(0,l.mdx)("inlineCode",{parentName:"p"},"console.log")," and you can find the result written in ",(0,l.mdx)("inlineCode",{parentName:"p"},"%localappdata%\\Overwolf\\Log\\Apps\\"),"."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#verbosemsg"},"overwolf.log.verbose()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#infomsg"},"overwolf.log.info()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#warningmsg"},"overwolf.log.warning()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#errormsg"},"overwolf.log.error()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#criticalmsg"},"overwolf.log.critical()"))),(0,l.mdx)("h2",{id:"verbosemsg"},"verbose(msg)"),(0,l.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Writes a verbose, debug level log message to the common log.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msg"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,l.mdx)("h2",{id:"infomsg"},"info(msg)"),(0,l.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Writes info level log message to the common log.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msg"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,l.mdx)("h2",{id:"warningmsg"},"warning(msg)"),(0,l.mdx)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Writes warning level log message to the common log.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msg"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,l.mdx)("h2",{id:"errormsg"},"error(msg)"),(0,l.mdx)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Writes error level log message to the common log.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msg"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to write to the log file")))),(0,l.mdx)("h2",{id:"criticalmsg"},"critical(msg)"),(0,l.mdx)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Writes critical level log message to the common log.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msg"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to write to the log file")))))}g.isMDXComponent=!0}}]);