"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[624],{35318:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>l});var o=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},w="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=m(t),p=i,w=l["".concat(r,".").concat(p)]||l[p]||u[p]||a;return t?o.createElement(w,s(s({ref:n},c),{},{components:t})):o.createElement(w,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[w]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(25773),i=(t(27378),t(35318));const a={id:"communicating-between-windows",image:"/img/embed/api-best-practices.jpg",title:"Communicating between windows",sidebar_label:"Windows Communication",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,s={unversionedId:"topics/using-windows-api/communicating-between-windows",id:"topics/using-windows-api/communicating-between-windows",title:"Communicating between windows",description:"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.",source:"@site/pages/docs/topics/using-windows-api/communicating-between-windows.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/communicating-between-windows",permalink:"/topics/using-windows-api/communicating-between-windows",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-windows-api/communicating-between-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1671959877,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{id:"communicating-between-windows",image:"/img/embed/api-best-practices.jpg",title:"Communicating between windows",sidebar_label:"Windows Communication",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Write your own plugin",permalink:"/topics/using-plugins/writing-your-own-plugin"},next:{title:"Using Overwolf windows",permalink:"/topics/using-windows-api/using-overwolf-windows"}},d={},c=[{value:"Using a background controller",id:"using-a-background-controller",level:2},{value:"Using direct messages",id:"using-direct-messages",level:2},{value:"Communication channels using an iframe inside an Overwolf window",id:"communication-channels-using-an-iframe-inside-an-overwolf-window",level:2}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.\nBut due the fact that windows of the same app share the same process, the communications between windows can be done with direct pointers to the window/DOM, without any overhead. Naturally, this also means that the calls are synchronous."),(0,i.mdx)("p",null,"Recommended ways to communicate between app windows:"),(0,i.mdx)("h2",{id:"using-a-background-controller"},"Using a background controller"),(0,i.mdx)("p",null,"In our experience the best method for communicating between windows of the same app is using ",(0,i.mdx)("a",{parentName:"p",href:"/api/windows"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.getMainWindow()")),". This function allows you to get direct access to your main index page and it\u2019s HTML Window object - including any JS function or DOM element.   "),(0,i.mdx)("p",null,'Using this method, you can use a shared \u201ccommunication-bus\u201d variable - one global "manager" object in your background that allows different windows to communicate through this one single object. '),(0,i.mdx)("p",null,"This object is also guaranteed to exist when calling this method from any other window - unlike ",(0,i.mdx)("a",{parentName:"p",href:"/api/windows#getopenwindowscallback"},"overwolf.windows.getOpenWindows()"),". We strongly recommend not to use ",(0,i.mdx)("a",{parentName:"p",href:"/api/windows#getopenwindowscallback"},"getOpenWindows()")," for windows communication."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Read more about ",(0,i.mdx)("a",{parentName:"li",href:"windows-tips#use-a-background-controller"},"background controllers"),". "),(0,i.mdx)("li",{parentName:"ul"},"Download ",(0,i.mdx)("a",{parentName:"li",href:"/start/basic-app/sample-app"},"our sample app")," which demonstrates all basic design principals.")),(0,i.mdx)("h2",{id:"using-direct-messages"},"Using direct messages"),(0,i.mdx)("p",null,"Another option for communication between windows is the method ",(0,i.mdx)("a",{parentName:"p",href:"/api/windows"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.sendMessage()")),". This method allows to send messages directly to a window. The window receiving the message needs to listen on the ",(0,i.mdx)("a",{parentName:"p",href:"/api/windows"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.onMessageReceived event")),"."),(0,i.mdx)("admonition",{type:"warning"},(0,i.mdx)("p",{parentName:"admonition"},"Using sendMessage is not our best practice since it might not work on some occasions, for example, when sending extremely long messages .")),(0,i.mdx)("h2",{id:"communication-channels-using-an-iframe-inside-an-overwolf-window"},"Communication channels using an iframe inside an Overwolf window"),(0,i.mdx)("p",null,"The recommended way to access the Overwolf object from an online web page loaded inside an iframe is to set up a communication channel using the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/api/Window/postMessage"},"postMessage")," method.  "),(0,i.mdx)("p",null,"To do so, allow your app to load and communicate with your domain via ",(0,i.mdx)("a",{parentName:"p",href:"/api/manifest#externally_connectable"},"externally_connectable")," configuration in the manifest.  "),(0,i.mdx)("p",null,"Your web page should post a message to the parent window (the Overwolf app) containing the page.  "),(0,i.mdx)("p",null,"In the Overwolf app add an event listener for \u201cmessage\u201d event and validate the origin of the message:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("message", message => {\n    if (message.origin !== "https://yourdomain.gg") {\n    return;\n    }\n\n    let data = message.data;\n    if (!data) {\n    return;\n    }\n\n    // do something interesting with the data\n});\n')),(0,i.mdx)("p",null,"Make sure to handle cases where the iframe may not load or when an error may prevent setting the communication channel (a fallback or retry mechanism)."))}m.isMDXComponent=!0}}]);