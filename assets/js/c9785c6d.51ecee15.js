"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6678],{35318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),w=i,u=p["".concat(l,".").concat(w)]||p[w]||m[w]||a;return t?o.createElement(u,r(r({ref:n},d),{},{components:t})):o.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=w;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},85502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(25773),i=(t(27378),t(35318));const a={id:"communicating-between-windows",image:"/img/embed/api-best-practices.jpg",title:"Communicating between windows",sidebar_label:"Windows Communication",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,s={unversionedId:"topics/using-windows-api/communicating-between-windows",id:"topics/using-windows-api/communicating-between-windows",title:"Communicating between windows",description:"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.",source:"@site/../pages/topics/using-windows-api/communicating-between-windows.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/communicating-between-windows",permalink:"/topics/using-windows-api/communicating-between-windows",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-windows-api/communicating-between-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1718545651,formattedLastUpdatedAt:"Jun 16, 2024",frontMatter:{id:"communicating-between-windows",image:"/img/embed/api-best-practices.jpg",title:"Communicating between windows",sidebar_label:"Windows Communication",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Write your own plugin",permalink:"/topics/using-plugins/writing-your-own-plugin"},next:{title:"Using Overwolf windows",permalink:"/topics/using-windows-api/using-overwolf-windows"}},l={},c=[{value:"Using a background controller",id:"using-a-background-controller",level:2},{value:"Using direct messages",id:"using-direct-messages",level:2},{value:"Communication channels using an iframe inside an Overwolf window",id:"communication-channels-using-an-iframe-inside-an-overwolf-window",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.\nBut due the fact that windows of the same app share the same process, the communications between windows can be done with direct pointers to the window/DOM, without any overhead. Naturally, this also means that the calls are synchronous."),(0,i.kt)("p",null,"Recommended ways to communicate between app windows:"),(0,i.kt)("h2",{id:"using-a-background-controller"},"Using a background controller"),(0,i.kt)("p",null,"In our experience the best method for communicating between windows of the same app is using ",(0,i.kt)("a",{parentName:"p",href:"/api/windows"},(0,i.kt)("inlineCode",{parentName:"a"},"overwolf.windows.getMainWindow()")),". This function allows you to get direct access to your main index page and it\u2019s HTML Window object - including any JS function or DOM element.   "),(0,i.kt)("p",null,'Using this method, you can use a shared \u201ccommunication-bus\u201d variable - one global "manager" object in your background that allows different windows to communicate through this one single object. '),(0,i.kt)("p",null,"This object is also guaranteed to exist when calling this method from any other window - unlike ",(0,i.kt)("a",{parentName:"p",href:"/api/windows#getopenwindowscallback"},"overwolf.windows.getOpenWindows()"),". We strongly recommend not to use ",(0,i.kt)("a",{parentName:"p",href:"/api/windows#getopenwindowscallback"},"getOpenWindows()")," for windows communication."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read more about ",(0,i.kt)("a",{parentName:"li",href:"windows-tips#use-a-background-controller"},"background controllers"),". "),(0,i.kt)("li",{parentName:"ul"},"Download ",(0,i.kt)("a",{parentName:"li",href:"/start/basic-app/sample-app"},"our sample app")," which demonstrates all basic design principals.")),(0,i.kt)("h2",{id:"using-direct-messages"},"Using direct messages"),(0,i.kt)("p",null,"Another option for communication between windows is the method ",(0,i.kt)("a",{parentName:"p",href:"/api/windows"},(0,i.kt)("inlineCode",{parentName:"a"},"overwolf.windows.sendMessage()")),". This method allows to send messages directly to a window. The window receiving the message needs to listen on the ",(0,i.kt)("a",{parentName:"p",href:"/api/windows"},(0,i.kt)("inlineCode",{parentName:"a"},"overwolf.windows.onMessageReceived event")),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Using sendMessage is not our best practice since it might not work on some occasions, for example, when sending extremely long messages .")),(0,i.kt)("h2",{id:"communication-channels-using-an-iframe-inside-an-overwolf-window"},"Communication channels using an iframe inside an Overwolf window"),(0,i.kt)("p",null,"The recommended way to access the Overwolf object from an online web page loaded inside an iframe is to set up a communication channel using the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/api/Window/postMessage"},"postMessage")," method.  "),(0,i.kt)("p",null,"To do so, allow your app to load and communicate with your domain via ",(0,i.kt)("a",{parentName:"p",href:"/api/manifest#externally_connectable"},"externally_connectable")," configuration in the manifest.  "),(0,i.kt)("p",null,"Your web page should post a message to the parent window (the Overwolf app) containing the page.  "),(0,i.kt)("p",null,"In the Overwolf app add an event listener for \u201cmessage\u201d event and validate the origin of the message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("message", message => {\n    if (message.origin !== "https://yourdomain.gg") {\n    return;\n    }\n\n    let data = message.data;\n    if (!data) {\n    return;\n    }\n\n    // do something interesting with the data\n});\n')),(0,i.kt)("p",null,"Make sure to handle cases where the iframe may not load or when an error may prevent setting the communication channel (a fallback or retry mechanism)."))}p.isMDXComponent=!0}}]);