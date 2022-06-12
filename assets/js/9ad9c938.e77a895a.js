"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8317],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return l},withMDXComponents:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),m=function(e){return function(n){var t=l(n.components);return o.createElement(e,i({},n,{components:t}))}},l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,p=m["".concat(r,".").concat(u)]||m[u]||w[u]||i;return t?o.createElement(p,s(s({ref:n},c),{},{components:t})):o.createElement(p,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85913:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],s={id:"communicating-between-windows",title:"Communicating between windows",sidebar_label:"Windows Communication"},d=void 0,c={unversionedId:"topics/communicating-between-windows",id:"topics/communicating-between-windows",title:"Communicating between windows",description:"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.",source:"@site/pages/docs/topics/communicating-between-windows.mdx",sourceDirName:"topics",slug:"/topics/communicating-between-windows",permalink:"/V2TestFixed/docs/topics/communicating-between-windows",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/communicating-between-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"communicating-between-windows",title:"Communicating between windows",sidebar_label:"Windows Communication"},sidebar:"docs",previous:{title:"Using Overwolf windows",permalink:"/V2TestFixed/docs/topics/using-overwolf-windows"},next:{title:"Windows Types",permalink:"/V2TestFixed/docs/topics/windows-types"}},m={},l=[{value:"Using a background controller",id:"using-a-background-controller",level:2},{value:"Using direct messages",id:"using-direct-messages",level:2},{value:"Communication channels using an iframe inside an Overwolf window",id:"communication-channels-using-an-iframe-inside-an-overwolf-window",level:2}],u={toc:l};function w(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.mdx)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.\nBut due the fact that windows of the same app share the same process, the communications between windows can be done with direct pointers to the window/DOM, without any overhead. Naturally, this also means that the calls are synchronous."),(0,i.mdx)("p",null,"Recommended ways to communicate between app windows:"),(0,i.mdx)("h2",{id:"using-a-background-controller"},"Using a background controller"),(0,i.mdx)("p",null,"In our experience the best method for communicating between windows of the same app is using ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#getmainwindow"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.getMainWindow()")),". This function allows you to get direct access to your main index page and it\u2019s HTML Window object - including any JS function or DOM element.   "),(0,i.mdx)("p",null,'Using this method, you can use a shared \u201ccommunication-bus\u201d variable - one global "manager" object in your background that allows different windows to communicate through this one single object. '),(0,i.mdx)("p",null,"This object is also guaranteed to exist when calling this method from any other window - unlike ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#getopenwindowscallback"},"overwolf.windows.getOpenWindows()"),". We strongly recommend not to use ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#getopenwindowscallback"},"getOpenWindows()")," for windows communication."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Read more about ",(0,i.mdx)("a",{parentName:"li",href:"windows-tips#use-a-background-controller"},"background controllers"),". "),(0,i.mdx)("li",{parentName:"ul"},"Download ",(0,i.mdx)("a",{parentName:"li",href:"../start/sample-app-overview"},"our sample app")," which demonstrates all basic design principals.")),(0,i.mdx)("h2",{id:"using-direct-messages"},"Using direct messages"),(0,i.mdx)("p",null,"Another option for communication between windows is the method ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#sendmessagewindowid-messageid-messagecontent-callback"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.sendMessage()")),". This method allows to send messages directly to a window. The window receiving the message needs to listen on the ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#onmessagereceived"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.onMessageReceived event")),"."),(0,i.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Using sendMessage is not our best practice since it might not work on some occasions, for example, when sending extremely long messages ."))),(0,i.mdx)("h2",{id:"communication-channels-using-an-iframe-inside-an-overwolf-window"},"Communication channels using an iframe inside an Overwolf window"),(0,i.mdx)("p",null,"The recommended way to access the overwolf object from an online web page loaded inside an iframe is to set up a communication channel using the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"postMessage")," method.  "),(0,i.mdx)("p",null,"To do so, allow your app to load and communicate with your domain via ",(0,i.mdx)("a",{parentName:"p",href:"../api/manifest-json#externally_connectable"},"externally_connectable")," configuration in the manifest.  "),(0,i.mdx)("p",null,"Your web page should post a message to the parent window (the Overwolf app) containing the page.  "),(0,i.mdx)("p",null,"In the Overwolf app add an event listener for \u201cmessage\u201d event and validate the origin of the message:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("message", message => {\n    if (message.origin !== "https://yourdomain.gg") {\n    return;\n    }\n\n    let data = message.data;\n    if (!data) {\n    return;\n    }\n\n    // do something interesting with the data\n});\n')),(0,i.mdx)("p",null,"Make sure to handle cases where the iframe may not load or when an error may prevent setting the communication channel (a fallback or retry mechanism)."))}w.isMDXComponent=!0}}]);