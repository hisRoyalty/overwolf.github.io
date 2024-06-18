"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9182],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,p(p({ref:t},c),{},{components:a})):n.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(25773),o=(a(27378),a(35318));const r={id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},p=void 0,i={unversionedId:"start/basic-app/basic-app",id:"start/basic-app/basic-app",title:"Creating a basic one window app",description:"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window.",source:"@site/../pages/start/basic-app/basic-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/",permalink:"/start/basic-app/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/basic-app/basic-app.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1718714556,formattedLastUpdatedAt:"Jun 18, 2024",frontMatter:{id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Using The Dev Tools",permalink:"/start/getting-started/using-dev-tools"},next:{title:"Components",permalink:"/start/basic-app/components"}},l={},s=[{value:"Get the Overwolf client",id:"get-the-overwolf-client",level:2},{value:"Building a demo app from scratch",id:"building-a-demo-app-from-scratch",level:2},{value:"Real world Sample app",id:"real-world-sample-app",level:2}],c=(d="SkipMe",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window."),(0,o.kt)("p",null,"In this example, we will develop a one-window app from scratch. This sample window will not interact with game events and not even get injected into any game, it's just a demonstration of how to build and pack a window as an Overwolf app that can be launched from the Overwolf dock."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"To learn how a modern, real-world Overwolf app should look like, refer to ",(0,o.kt)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),".")),(0,o.kt)("h2",{id:"get-the-overwolf-client"},"Get the Overwolf client"),(0,o.kt)("p",null,"To build Overwolf apps, you first need to download the Overwolf client.\nYou can find the latest version ",(0,o.kt)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download?Channel=developers"},"Here"),"."),(0,o.kt)("h2",{id:"building-a-demo-app-from-scratch"},"Building a demo app from scratch"),(0,o.kt)("p",null,"This example details the steps in creating a simple, single window Overwolf app. The source code and files that used in this example can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,o.kt)("p",null,"Let's get to it! To build a one-window app:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a folder, name it whatever you like.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a file named "manifest.json" in that folder.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Copy and paste the manifest code snippet found below into the "manifest.json" file.\nYou can read the ',(0,o.kt)("a",{parentName:"p",href:"/api/manifest"},"Manifest.json")," section to learn about additional features you can use to make your app even more awesome."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version":1,\n    "type":"WebApp",\n    "meta":{\n        "name":"Demo App",\n        "version":"1.0.0",\n        "minimum-overwolf-version":"0.199.0.15",\n        "author":"Developer Name",\n        "icon":"IconMouseOver.png",\n        "icon_gray":"IconMouseNormal.png",\n        "description":"Demo App"\n    },\n    "data": {\n        "start_window":"MainWindow",\n        "windows":{\n            "MainWindow":{\n                    "file":"index.html",\n                    "transparent": false,\n                    "resizable": true,\n                    "use_os_windowing": true,\n                    "size": {\n                        "width":700,\n                        "height":400\n                        },\n                    "min_size": {\n                        "width":400,\n                        "height":400\n                    }\n                }\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Choose icons for your app and place them in the folder you created. Remember to reference it in the "icon" field of your app\'s manifest.json.\nFor this example you can download sample icons from the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the main folder and paste this snippet there:  "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Basic sample app</h1>\n<p>This is a native desktop window that cannot be injected into the game.</p>\n\n</body>\n</html>\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Load the app as an ",(0,o.kt)("a",{parentName:"li",href:"/start/basic-app/sample-app#5-load-the-app-as-unpacked-extension"},'"unpacked" extension'),".")),(0,o.kt)(c,{mdxType:"SkipMe"},(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Pack all the files and icons in the folder as an Overwolf app installer A.K.A ",(0,o.kt)("a",{parentName:"li",href:"https://discuss.overwolf.com/t/what-is-an-opk-package/23"},'"OPK" package'),":",(0,o.kt)("br",{parentName:"li"}),"basically zip everything, and change the file extension from ZIP to OPK after you're done."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Your Overwolf app can now run in development mode!"),(0,o.kt)("br",{parentName:"p"}),"\n","To check your app, launch it from the dock, it should show:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(36158).Z,width:"727",height:"400"})),(0,o.kt)("p",null,"Congratulations! You can now use standard web development techniques to create, debug, and complete your application. The source code and files that used in this example can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,o.kt)("h2",{id:"real-world-sample-app"},"Real world Sample app"),(0,o.kt)("p",null,"As mentioned, the app you built is technically working, but does nothing. To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please continue to study our official sample app showcasing what you can do and how.\nContinue to the ",(0,o.kt)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),"."))}u.isMDXComponent=!0},36158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/basic-sample-app-994aa773203629a59262fc517d755874.png"}}]);