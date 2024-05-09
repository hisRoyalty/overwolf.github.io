"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4427],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(25773),o=(n(27378),n(35318));const r={id:"components",image:"/img/embed/getting-started.jpg",title:"Sample App Components",sidebar_label:"Components",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"start/basic-app/components",id:"start/basic-app/components",title:"Sample App Components",description:"You can download the latest version from our GitHub here, and read how to setup it here.",source:"@site/../pages/start/basic-app/components.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/components",permalink:"/start/basic-app/components",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/basic-app/components.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1715238614,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"components",image:"/img/embed/getting-started.jpg",title:"Sample App Components",sidebar_label:"Components",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Basic App Creation",permalink:"/start/basic-app/"},next:{title:"UX/UI Best Practices",permalink:"/start/basic-app/front-app"}},p={},l=[{value:"manifest.json",id:"manifestjson",level:2},{value:"windows",id:"windows",level:2},{value:"windows/background",id:"windowsbackground",level:3},{value:"windows/in_game",id:"windowsin_game",level:3},{value:"windows/desktop",id:"windowsdesktop",level:3},{value:"windows/AppWindow",id:"windowsappwindow",level:3},{value:"types package",id:"types-package",level:2},{value:"icons",id:"icons",level:2},{value:"css and images",id:"css-and-images",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can download the latest version from our GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/sample-app/tree/master/ts"},"here"),", and read how to setup it ",(0,o.kt)("a",{parentName:"p",href:"sample-app"},"here"),"."),(0,o.kt)("p",null,"You will find several files and folders in the sample app repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  +---- css\n  +---- img\n  +---- windows\n  +---- icons\n  +---- odk-ts\n  +---- types\n  +---- manifest.json\n  +---- consts.ts\n  +---- package.json\n  +---- tsconfig.json\n  +---- webpack.config.js\n")),(0,o.kt)("h2",{id:"manifestjson"},"manifest.json"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest"},"manifest")," file is responsible for describing the different aspects of your app. This is a mandatory file for all apps and has to be present in the root folder for your app to function."),(0,o.kt)("p",null,"In our manifest.json file, we have ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#start_window"},"{start_window:background}")," defined.",(0,o.kt)("br",{parentName:"p"}),"\n","This sets our ",(0,o.kt)("a",{parentName:"p",href:"#windows-background"},"background")," window as the app's starting point."),(0,o.kt)("p",null,"All of this app's windows' properties can be found under the ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#window-data"},"windows")," object."),(0,o.kt)("h2",{id:"windows"},"windows"),(0,o.kt)("p",null,"Each app window is based on an HTML file. This folder contains these files for each of your pages."),(0,o.kt)("h3",{id:"windowsbackground"},"windows/background"),(0,o.kt)("p",null,"The background folder holds the background window, which serves as the application's starting point and window orchestrator.",(0,o.kt)("br",{parentName:"p"}),"\n","The window's ",(0,o.kt)("inlineCode",{parentName:"p"},"run()")," method detects whether a Fortnite game is currently running, decides which window to launch accordingly, and listens for changes."),(0,o.kt)("p",null,"The background window has no visual representation, which can be gleaned from the empty background.html file or from the ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#is_background_page"},"{is_background_page:true}")," property the background window has in our manifest.json."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can read more about the background controller concept in our ",(0,o.kt)("a",{parentName:"p",href:"/topics/using-windows-api/communicating-between-windows#using-a-background-controller"},"Communicating between windows")," guide.")),(0,o.kt)("h3",{id:"windowsin_game"},"windows/in_game"),(0,o.kt)("p",null,"The in_game window listens to ",(0,o.kt)("a",{parentName:"p",href:"/api/games/events#oninfoupdates2"},"Info Events")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/games/events#onnewevents"},"Game Events")," emitted by the game. Furthermore, it defines the behavior for the show/hide hotkey."),(0,o.kt)("p",null,"Read all about hotkeys ",(0,o.kt)("a",{parentName:"p",href:"/topics/best-practices/hotkeys-best-practices"},"here"),"."),(0,o.kt)("h3",{id:"windowsdesktop"},"windows/desktop"),(0,o.kt)("p",null,"This window serves a purely visual purpose and has no special logic."),(0,o.kt)("h3",{id:"windowsappwindow"},"windows/AppWindow"),(0,o.kt)("p",null,"This is a base class that holds the logic shared by the in_game and desktop windows, such as minimize/close, drag, etc."),(0,o.kt)("h2",{id:"types-package"},"types package"),(0,o.kt)("p",null,"Currently, the Overwolf SDK is written in javascript. The ",(0,o.kt)("a",{parentName:"p",href:"/topics/best-practices/type-definition-file"},"type definition file")," holds typescript type definitions for the SDK methods used in this app."),(0,o.kt)("p",null,"We released the types file as a ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/overwolf-types-npm"},"npm package"),", and the sample app used this package."),(0,o.kt)("h2",{id:"icons"},"icons"),(0,o.kt)("p",null,"Mandatory files showing up in the Overwolf dock and other locations:",(0,o.kt)("br",{parentName:"p"}),"\n","Tile.jpg, IconMouseNormal.png, IconMouseOver.png, desktop-icon.ico."),(0,o.kt)("h2",{id:"css-and-images"},"css and images"),(0,o.kt)("p",null,"All of the visual resources used by the app."))}c.isMDXComponent=!0}}]);