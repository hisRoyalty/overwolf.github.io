"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9603],{35318:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var a=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(o),c=n,h=u["".concat(s,".").concat(c)]||u[c]||g[c]||l;return o?a.createElement(h,i(i({ref:t},d),{},{components:o})):a.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:n,i[1]=r;for(var p=2;p<l;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},65934:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=o(25773),n=(o(27378),o(35318));const l={id:"using-dev-tools",image:"/img/embed/getting-started.jpg",title:"Using Overwolf`s developers tools",sidebar_label:"Using The Dev Tools",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,r={unversionedId:"start/getting-started/using-dev-tools",id:"start/getting-started/using-dev-tools",title:"Using Overwolf`s developers tools",description:"The Overwolf developer toolkit is a set of web authoring and debugging tools.",source:"@site/../pages/start/getting-started/using-dev-tools.mdx",sourceDirName:"start/getting-started",slug:"/start/getting-started/using-dev-tools",permalink:"/start/getting-started/using-dev-tools",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/getting-started/using-dev-tools.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1715238614,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"using-dev-tools",image:"/img/embed/getting-started.jpg",title:"Using Overwolf`s developers tools",sidebar_label:"Using The Dev Tools",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Submit App Proposal",permalink:"/start/getting-started/submit-app-proposal"},next:{title:"Basic App Creation",permalink:"/start/basic-app/"}},s={},p=[{value:"How can I access the Overwolf developer tools?",id:"how-can-i-access-the-overwolf-developer-tools",level:2},{value:"1 - Using Hotkeys",id:"1---using-hotkeys",level:3},{value:"2 - Through the Overwolf settings",id:"2---through-the-overwolf-settings",level:3},{value:"Explore each menu",id:"explore-each-menu",level:2},{value:"Elements",id:"elements",level:3},{value:"Network",id:"network",level:3},{value:"Sources",id:"sources",level:3},{value:"Timeline",id:"timeline",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Resources",id:"resources",level:3},{value:"Audits",id:"audits",level:3},{value:"Console",id:"console",level:3},{value:"Enabling Time Stamps in Console",id:"enabling-time-stamps-in-console",level:2},{value:"Use the remote debugger",id:"use-the-remote-debugger",level:2},{value:"Use local debugger with debug_url flag",id:"use-local-debugger-with-debug_url-flag",level:2},{value:"Enabling automation testing with automation flag",id:"enabling-automation-testing-with-automation-flag",level:2},{value:"Run your React app locally",id:"run-your-react-app-locally",level:3},{value:"Debug your OW app window locally",id:"debug-your-ow-app-window-locally",level:3},{value:"Notes",id:"notes",level:3}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Overwolf developer toolkit is a set of web authoring and debugging tools.",(0,n.kt)("br",{parentName:"p"}),"\n","You can use these tools for a variety of tasks, among them: Listing which assets the page has requested, how long each asset took to load, reviewing tools for currently-loaded HTML, CSS or JS, and more."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Chrome Developer Tools are disabled by default. The only way to enable them, is by ",(0,n.kt)("a",{parentName:"p",href:"/topics/best-practices/enable-dev-tools#download-registry-key"},"adding a registry key"),". Read more ",(0,n.kt)("a",{parentName:"p",href:"/topics/best-practices/enable-dev-tools"},"here"),".")),(0,n.kt)("h2",{id:"how-can-i-access-the-overwolf-developer-tools"},"How can I access the Overwolf developer tools?"),(0,n.kt)("p",null,"There are two ways to open the Overwolf developer tools:"),(0,n.kt)("h3",{id:"1---using-hotkeys"},"1 - Using Hotkeys"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the app."),(0,n.kt)("li",{parentName:"ol"},"Click on the app window that you want to debug."),(0,n.kt)("li",{parentName:"ol"},"Press Ctrl+Shift+I.")),(0,n.kt)("p",null,"Doing this will immediately open the development tools window for this app window. If it's not working (and you have just added the registry key) restart your machine and try again."),(0,n.kt)("h3",{id:"2---through-the-overwolf-settings"},"2 - Through the Overwolf settings"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right click on the Overwolf tray icon."),(0,n.kt)("li",{parentName:"ol"},"Select Settings \u2192 About tab \u2192 Development options."),(0,n.kt)("li",{parentName:"ol"},"Launch your app and select the relevant window's name in the Packages window.")),(0,n.kt)("p",null,"After launching an app, the names of all of the app's active windows will show up in the Packages window, under the app's entry. You can click on any window name to bring up its own instance of developer tools:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(42005).Z,width:"791",height:"879"})),(0,n.kt)("h2",{id:"explore-each-menu"},"Explore each menu"),(0,n.kt)("h3",{id:"elements"},"Elements"),(0,n.kt)("p",null,"The Elements panel allows you to see your app window's HTML code during runtime, as well as the CSS styles applied to each element."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(96805).Z,width:"783",height:"581"})),(0,n.kt)("h3",{id:"network"},"Network"),(0,n.kt)("p",null,"The Network panel displays information about every network-related operation on a window. Use it to get insights into requests, downloaded resources, and opportunities to optimize the app's network performance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(98175).Z,width:"781",height:"578"})),(0,n.kt)("h3",{id:"sources"},"Sources"),(0,n.kt)("p",null,"This menu enables breakpoint-based debugging for JavaScript. Breakpoints can be configured to only be triggered when specific or general conditions are met."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tip")," \u2013 Make minified code easily readable by using the \u201cpretty print\u201d button (the { } button at the bottom left of the code area)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(67874).Z,width:"827",height:"652"})),(0,n.kt)("h3",{id:"timeline"},"Timeline"),(0,n.kt)("p",null,"The Timeline makes it easier to spot non-permanent or situational issues, and assists you in improving the performance of your app by inspecting events that happen during its usage timeline."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(88683).Z,width:"828",height:"654"})),(0,n.kt)("h3",{id:"profiles"},"Profiles"),(0,n.kt)("p",null,"Learn more about the memory usage and execution times of your app here. The CPU and Heap profilers help you find where resources are being spent, helping you make sure that your app is running as smoothly as possible."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(43055).Z,width:"826",height:"652"})),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("p",null,"Review all of your app's loaded resources, including databases, session storage, app cache, cookies, fonts and more."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(48806).Z,width:"803",height:"600"})),(0,n.kt)("h3",{id:"audits"},"Audits"),(0,n.kt)("p",null,"Audits analyze your app, suggesting ways for decreasing load times and increasing your app's responsiveness."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(16101).Z,width:"805",height:"601"})),(0,n.kt)("h3",{id:"console"},"Console"),(0,n.kt)("p",null,"Allows interaction with your code, as well as logging capabilities, to help you as you develop your application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(68834).Z,width:"804",height:"600"})),(0,n.kt)("h2",{id:"enabling-time-stamps-in-console"},"Enabling Time Stamps in Console"),(0,n.kt)("p",null,"Sometimes it\u2019s useful to see timestamps in your console when you are debugging.\nTo enable this behaviour, go to the console settings (settings wheel in the top right), and select your preferred timestamps preferences:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(99668).Z,width:"1059",height:"908"})),(0,n.kt)("h2",{id:"use-the-remote-debugger"},"Use the remote debugger"),(0,n.kt)("p",null,"In addition to the developer tools debugger, you can use the regular chrome debugger.  "),(0,n.kt)("p",null,"The remote debugger has two advantages:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Easier to use in a secondary monitor.\nIn some cases, like when debugging in-game windows, it's more convenient to open the debugger on a different screen, and not as an in-game Overlay that can hide the UI.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Eliminate overwolf-debugger related issues.",(0,n.kt)("br",{parentName:"p"}),"\n","In some hard to crack cases, it might help to open another debugger that might display the data differently."),(0,n.kt)("h4",{parentName:"li",id:"how-to-use-the-remote-debugger"},"How to use the remote debugger")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure your OW app is running.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a new chrome browser tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open this URL: http://localhost:54284"))),(0,n.kt)("p",null,"You can see the list of all open OW apps and windows. In this example, you can see a couple of Facecheck app's windows, along with our rocket league sample app, an ads window, and more:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:o(62182).Z,width:"1058",height:"551"})),(0,n.kt)("p",null,"Clicking on a link will open a remote debugger tab."),(0,n.kt)("h2",{id:"use-local-debugger-with-debug_url-flag"},"Use local debugger with debug_url flag"),(0,n.kt)("p",null,"For local-server debugging (like with react apps) you can use the ",(0,n.kt)("a",{parentName:"p",href:"/api/manifest#debug_url"},(0,n.kt)("inlineCode",{parentName:"a"},"debug_url"))," flag in the manifest file."),(0,n.kt)("h2",{id:"enabling-automation-testing-with-automation-flag"},"Enabling automation testing with automation flag"),(0,n.kt)("p",null,"It is possible to use a testing framework (e.g. Selenium) with your application. More details ",(0,n.kt)("a",{parentName:"p",href:"../test-your-app/app-automation"},"here"),"."),(0,n.kt)("h3",{id:"run-your-react-app-locally"},"Run your React app locally"),(0,n.kt)("p",null,"Runs on a node.js server."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download a react project (E.g. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aditya-sridhar/simple-reactjs-app"},"This one"),")."),(0,n.kt)("li",{parentName:"ol"},"Extract it into a folder and open it in VS Code."),(0,n.kt)("li",{parentName:"ol"},"Run the project using ",(0,n.kt)("em",{parentName:"li"},"npm -i")," inside VS Code.")),(0,n.kt)("p",null,"For this example, we assume that your react app is running on localhost:3000."),(0,n.kt)("h3",{id:"debug-your-ow-app-window-locally"},"Debug your OW app window locally"),(0,n.kt)("p",null,'For this example, we assume that your app has two windows: a background controller called "main" and an app window called "popup".'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In your app's manifest, add the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#debug_url"},"debug_url")," flag on the same port as your react app (3000):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'"popup": { "file": "popup.html","debug_url": "http://localhost:3000" }\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Load your OW app as an unpacked extension."),(0,n.kt)("li",{parentName:"ol"},"Open the CEF remote debugging URL in chrome (http://localhost:54284)."),(0,n.kt)("li",{parentName:"ol"},'Find the "main" app window on the list, and open it. The dev console will open for this window.'),(0,n.kt)("li",{parentName:"ol"},'Open the "popup" window by typing into the console:')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"overwolf.windows.obtainDeclaredWindow('popup', console.log)\noverwolf.windows.restore('popup', console.log)\n")),(0,n.kt)("p",null,"  The popup window will open, and your react app will load up inside of it.",(0,n.kt)("br",{parentName:"p"}),"\n","Now every change that you'll perform in the react code will reflect in the OW window."),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You must have a local web server installed on your machine."),(0,n.kt)("li",{parentName:"ul"},"This only works when loading unpacked extensions."),(0,n.kt)("li",{parentName:"ul"},'This only works when connecting directly to "localhost" / "127.0.0.1".'),(0,n.kt)("li",{parentName:"ul"},"When using debug_url, calling ",(0,n.kt)("a",{parentName:"li",href:"/api/windows"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.windows.getMainWindow()"))," produces a known issue, and it will not work as expected: it returns a reference to the current window instead of the main window.")))}u.isMDXComponent=!0},42005:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-1-6df056d58786d72281eef0b2ed302054.jpg"},99668:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-10-6783221318948d941e59cb303a6ae548.png"},62182:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-11-b0eca02e21c2da4199fefbf17e586866.png"},96805:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-2-35eb1afc4e078862b8e996502f3cfa14.jpg"},98175:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-3-72f7b8e88dcc1b5eba0fb88f7c073d99.jpg"},67874:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-4-70e663f252232f86d9fe7fe52686fb49.jpg"},88683:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-5-e4208ec92b123ed850cf226c1e9f99d7.jpg"},43055:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-6-6c335ed442abd0971ca0c3066abb6522.jpg"},48806:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-7-d7d7bc298fa7278f985ccb1dc780fc89.jpg"},16101:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-8-b2b6e0dcd04d8cc823193c44b2d5c619.jpg"},68834:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/dev-tools-9-1d2322ae58e42be2619fb9f4fa842b86.jpg"}}]);