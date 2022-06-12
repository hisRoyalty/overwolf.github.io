"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8415],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){return function(t){var n=c(t.components);return r.createElement(e,l({},t,{components:n}))}},c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),p=a,b=s["".concat(d,".").concat(p)]||s[p]||u[p]||l;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var m=2;m<l;m++)d[m]=n[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),d=["components"],o={id:"overwolf-web-websocket",title:"overwolf.web.websocket API",sidebar_label:"overwolf.web.websocket"},i=void 0,m={unversionedId:"api/overwolf-web-websocket",id:"api/overwolf-web-websocket",title:"overwolf.web.websocket API",description:"An instance of websocket.",source:"@site/pages/docs/api/overwolf-web-websocket.mdx",sourceDirName:"api",slug:"/api/overwolf-web-websocket",permalink:"/V2TestFixed/docs/api/overwolf-web-websocket",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/api/overwolf-web-websocket.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-web-websocket",title:"overwolf.web.websocket API",sidebar_label:"overwolf.web.websocket"},sidebar:"api",previous:{title:"overwolf.web.webserver",permalink:"/V2TestFixed/docs/api/overwolf-web-webserver"},next:{title:"overwolf.windows",permalink:"/V2TestFixed/docs/api/overwolf-windows"}},s={},c=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"connect(callback)",id:"connectcallback",level:2},{value:"Version added: 0.129",id:"version-added-0129",level:4},{value:"send(message, callback)",id:"sendmessage-callback",level:2},{value:"Version added: 0.129",id:"version-added-0129-1",level:4},{value:"close()",id:"close",level:2},{value:"Version added: 0.129",id:"version-added-0129-2",level:4},{value:"onMessage()",id:"onmessage",level:2},{value:"Version added: 0.129",id:"version-added-0129-3",level:4},{value:"onError()",id:"onerror",level:2},{value:"Version added: 0.129",id:"version-added-0129-4",level:4},{value:"onOpen()",id:"onopen",level:2},{value:"Version added: 0.129",id:"version-added-0129-5",level:4},{value:"onClosed()",id:"onclosed",level:2},{value:"Version added: 0.129",id:"version-added-0129-6",level:4},{value:"MessageEvent Object",id:"messageevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-7",level:4},{value:"ErrorEvent Object",id:"errorevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-8",level:4},{value:"onClosedEvent Object",id:"onclosedevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-9",level:4}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"An instance of websocket."),(0,l.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Note that it is best to use the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API"},"native js WebSockets")," when u can.",(0,l.mdx)("br",{parentName:"p"}),"\n","Our web sockets by-pass cert checks for localhost WSS servers like LCU (league of legends)."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#connectcallback"},"overwolf.web.websocket.connect()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#sendmessage-callback"},"overwolf.web.websocket.send()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#close"},"overwolf.web.websocket.close()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onmessage"},"overwolf.web.websocket.onMessage")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onerror"},"overwolf.web.websocket.onError")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onopen"},"overwolf.web.websocket.onOpen")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onclosed"},"overwolf.web.websocket.onClosed"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#errorevent-object"},"overwolf.web.websocket.ErrorEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onclosedevent-object"},"overwolf.web.websocket.onClosedEvent")," Object")),(0,l.mdx)("h2",{id:"connectcallback"},"connect(callback)"),(0,l.mdx)("h4",{id:"version-added-0129"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Listens for requests on the given port.")),(0,l.mdx)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"called with the status of the connection")))),(0,l.mdx)("h2",{id:"sendmessage-callback"},"send(message, callback)"),(0,l.mdx)("h4",{id:"version-added-0129-1"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"send message.")),(0,l.mdx)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"message"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message to send")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"close"},"close()"),(0,l.mdx)("h4",{id:"version-added-0129-2"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Closes the websocket. It can be re-opened again.")),(0,l.mdx)("h2",{id:"onmessage"},"onMessage()"),(0,l.mdx)("h4",{id:"version-added-0129-3"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the websocket receives an incoming message, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#messageevent-object"},"MessageEvent")," Object.")),(0,l.mdx)("h2",{id:"onerror"},"onError()"),(0,l.mdx)("h4",{id:"version-added-0129-4"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired on error, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#errorevent-object"},"ErrorEvent")," Object.")),(0,l.mdx)("h2",{id:"onopen"},"onOpen()"),(0,l.mdx)("h4",{id:"version-added-0129-5"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired on websocket connection Opened.")),(0,l.mdx)("h2",{id:"onclosed"},"onClosed()"),(0,l.mdx)("h4",{id:"version-added-0129-6"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when connection closed, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#onclosedevent-object"},"onClosedEvent")," Object.")),(0,l.mdx)("h2",{id:"messageevent-object"},"MessageEvent Object"),(0,l.mdx)("h4",{id:"version-added-0129-7"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for the message event object.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"message"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"type"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"overwolf-web#messagetype-enum"},"overwolf.web.enums.MessageType")," enum"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"errorevent-object"},"ErrorEvent Object"),(0,l.mdx)("h4",{id:"version-added-0129-8"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for the error event object.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"message"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"exception"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"onclosedevent-object"},"onClosedEvent Object"),(0,l.mdx)("h4",{id:"version-added-0129-9"},"Version added: 0.129"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for the onClose event object.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"code"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"reason"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);