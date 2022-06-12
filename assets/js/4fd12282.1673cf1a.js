"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[894],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return w},useMDXComponents:function(){return c},withMDXComponents:function(){return l}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),l=function(e){return function(n){var t=c(n.components);return a.createElement(e,r({},n,{components:t}))}},c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),m=o,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99108:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=["components"],i={id:"sample-app-components",title:"Sample App Components",sidebar_label:"Sample App Components"},p=void 0,d={unversionedId:"start/sample-app-components",id:"start/sample-app-components",title:"Sample App Components",description:"You can download the latest version from our GitHub here, and read how to setup it here.",source:"@site/pages/docs/start/sample-app-components.mdx",sourceDirName:"start",slug:"/start/sample-app-components",permalink:"/V2TestFixed/docs/start/sample-app-components",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/start/sample-app-components.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"sample-app-components",title:"Sample App Components",sidebar_label:"Sample App Components"},sidebar:"start",previous:{title:"The Basic Sample App",permalink:"/V2TestFixed/docs/start/sample-app-overview"},next:{title:"UX/UI Best Practices",permalink:"/V2TestFixed/docs/start/sample-app-front-app"}},l={},c=[{value:"manifest.json",id:"manifestjson",level:2},{value:"windows",id:"windows",level:2},{value:"windows/background",id:"windowsbackground",level:3},{value:"windows/in_game",id:"windowsin_game",level:3},{value:"windows/desktop",id:"windowsdesktop",level:3},{value:"windows/AppWindow",id:"windowsappwindow",level:3},{value:"types package",id:"types-package",level:2},{value:"icons",id:"icons",level:2},{value:"css and images",id:"css-and-images",level:2}],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can download the latest version from our GitHub ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/sample-app/tree/master/ts"},"here"),", and read how to setup it ",(0,r.mdx)("a",{parentName:"p",href:"sample-app-overview"},"here"),"."),(0,r.mdx)("p",null,"You will find several files and folders in the sample app repository:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"  +---- css\n  +---- img\n  +---- windows\n  +---- icons\n  +---- odk-ts\n  +---- types\n  +---- manifest.json\n  +---- consts.ts\n  +---- package.json\n  +---- tsconfig.json\n  +---- webpack.config.js\n")),(0,r.mdx)("h2",{id:"manifestjson"},"manifest.json"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"../api/manifest-json"},"manifest")," file is responsible for describing the different aspects of your app. This is a mandatory file for all apps and has to be present in the root folder for your app to function."),(0,r.mdx)("p",null,"In our manifest.json file, we have ",(0,r.mdx)("a",{parentName:"p",href:"../api/manifest-json#start_window"},"{start_window:background}")," defined.",(0,r.mdx)("br",{parentName:"p"}),"\n","This sets our ",(0,r.mdx)("a",{parentName:"p",href:"#windows-background"},"background")," window as the app's starting point."),(0,r.mdx)("p",null,"All of this app's windows' properties can be found under the ",(0,r.mdx)("a",{parentName:"p",href:"../api/manifest-json#window-data"},"windows")," object."),(0,r.mdx)("h2",{id:"windows"},"windows"),(0,r.mdx)("p",null,"Each app window is based on an HTML file. This folder contains these files for each of your pages."),(0,r.mdx)("h3",{id:"windowsbackground"},"windows/background"),(0,r.mdx)("p",null,"The background folder holds the background window, which serves as the application's starting point and window orchestrator.",(0,r.mdx)("br",{parentName:"p"}),"\n","The window's ",(0,r.mdx)("inlineCode",{parentName:"p"},"run()")," method detects whether a Fortnite game is currently running, decides which window to launch accordingly, and listens for changes."),(0,r.mdx)("p",null,"The background window has no visual representation, which can be gleaned from the empty background.html file or from the ",(0,r.mdx)("a",{parentName:"p",href:"../api/manifest-json#is_background_page"},"{is_background_page:true}")," property the background window has in our manifest.json."),(0,r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"You can read more about the background controller concept in our ",(0,r.mdx)("a",{parentName:"p",href:"../topics/communicating-between-windows#using-a-background-controller"},"Communicating between windows")," guide."))),(0,r.mdx)("h3",{id:"windowsin_game"},"windows/in_game"),(0,r.mdx)("p",null,"The in_game window listens to ",(0,r.mdx)("a",{parentName:"p",href:"../api/overwolf-games-events#oninfoupdates2"},"Info Events")," and ",(0,r.mdx)("a",{parentName:"p",href:"../api/overwolf-games-events#onnewevents"},"Game Events")," emitted by the game. Furthermore, it defines the behavior for the show/hide hotkey."),(0,r.mdx)("p",null,"Read all about hotkeys ",(0,r.mdx)("a",{parentName:"p",href:"../topics/hotkeys-best-practices"},"here"),"."),(0,r.mdx)("h3",{id:"windowsdesktop"},"windows/desktop"),(0,r.mdx)("p",null,"This window serves a purely visual purpose and has no special logic."),(0,r.mdx)("h3",{id:"windowsappwindow"},"windows/AppWindow"),(0,r.mdx)("p",null,"This is a base class that holds the logic shared by the in_game and desktop windows, such as minimize/close, drag, etc."),(0,r.mdx)("h2",{id:"types-package"},"types package"),(0,r.mdx)("p",null,"Currently, the Overwolf SDK is written in javascript. The ",(0,r.mdx)("a",{parentName:"p",href:"../topics/type-definition-file"},"type definition file")," holds typescript type definitions for the SDK methods used in this app."),(0,r.mdx)("p",null,"We released the types file as a ",(0,r.mdx)("a",{parentName:"p",href:"http://bit.ly/overwolf-types-npm"},"npm package"),", and the sample app used this package."),(0,r.mdx)("h2",{id:"icons"},"icons"),(0,r.mdx)("p",null,"Mandatory files showing up in the Overwolf dock and other locations:",(0,r.mdx)("br",{parentName:"p"}),"\n","Tile.jpg, IconMouseNormal.png, IconMouseOver.png, desktop-icon.ico."),(0,r.mdx)("h2",{id:"css-and-images"},"css and images"),(0,r.mdx)("p",null,"All of the visual resources used by the app."))}u.isMDXComponent=!0}}]);