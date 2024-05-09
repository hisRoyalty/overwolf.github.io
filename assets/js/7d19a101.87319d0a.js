"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3416],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),s=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,h=c["".concat(r,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(25773),o=(a(27378),a(35318));const l={id:"sample-app",image:"/img/embed/getting-started.jpg",title:"Basic Sample App",sidebar_label:"The Basic Sample App",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,p={unversionedId:"start/basic-app/sample-app",id:"start/basic-app/sample-app",title:"Basic Sample App",description:"In this article, we'll use an example in order to learn how to build Overwolf (OW) apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project.",source:"@site/../pages/start/basic-app/sample-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/sample-app",permalink:"/start/basic-app/sample-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/basic-app/sample-app.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1715238614,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"sample-app",image:"/img/embed/getting-started.jpg",title:"Basic Sample App",sidebar_label:"The Basic Sample App",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Game Events Sample App",permalink:"/start/basic-app/game-events-sample-app"},next:{title:"UI Components",permalink:"/start/basic-app/ui-components"}},r={},s=[{value:"Sample App Functionality",id:"sample-app-functionality",level:2},{value:"Setting up",id:"setting-up",level:2},{value:"1. Install Overwolf Client",id:"1-install-overwolf-client",level:3},{value:"2. Install NodeJS",id:"2-install-nodejs",level:3},{value:"3. Download the source code",id:"3-download-the-source-code",level:3},{value:"4. Build the app",id:"4-build-the-app",level:3},{value:"5. Load the app as &quot;unpacked extension&quot;",id:"5-load-the-app-as-unpacked-extension",level:3},{value:"Screenshots",id:"screenshots",level:2}],d={toc:s};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, we'll use an example in order to learn how to build Overwolf (OW) apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project."),(0,o.kt)("p",null,"The sample app's functionality is pretty straightforward, it auto-launches when the user launches one of the supported games: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fortnite, CSGO, League of Legends, Escape From Tarkov, Minecraft, Overwatch, PUBG, Rainbow Six Siege, Splitgate: Arena Warfare, Path of Exile, Valorant, Dota 2, Call of Duty: Warzone, Rocket League, or Warframe.")),(0,o.kt)("p",null,"The app reads all real time game events as you play. To demonstrate overlay features, the sample app prints all in-game event data collected into an overlay-based component."),(0,o.kt)("p",null,"The sample app is built with JS code and TypeScript. An official Vue, React, and Angular version will be added soon. Until then, check our ",(0,o.kt)("a",{parentName:"p",href:"/topics/community-help/snippets"},"community snippets")," page for an unofficial Vue version and other code samples, like React boilerplate for Overwolf apps and more."),(0,o.kt)("admonition",{title:"Video guide",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find a ",(0,o.kt)("a",{parentName:"p",href:"/topics/community-help/creators-content#video-tutorials"},"video tutorial")," that guides you on downloading, building, and using the sample app.")),(0,o.kt)("h2",{id:"sample-app-functionality"},"Sample App Functionality"),(0,o.kt)("p",null,"For demonstration purposes, the sample app has been configured for one of the supported games listed above. It loads when Fortnite starts and reads Fortnite in-game events. You can easily customize this example to fit other games."),(0,o.kt)("p",null,"The basic functions our sample app demonstrates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Automatically launch when the game is loaded.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After registering to the ",(0,o.kt)("inlineCode",{parentName:"p"},"overwolf.games.events")," API, the app can receive real time events from the game.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Identify specific events and respond as defined.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Define a custom hotkey to be used in-game.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Interact between app windows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Background controller that manages data transfer."))),(0,o.kt)("h2",{id:"setting-up"},"Setting up"),(0,o.kt)("p",null,"The Overwolf sample app has two variants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Native" - This sample app is just made up of plain, vanilla javascript. This sample app can be loaded as unpacked directly, meaning that you can skip to ',(0,o.kt)("a",{parentName:"li",href:"#5-load-the-app-as-unpacked-extension"},"this section"),"."),(0,o.kt)("li",{parentName:"ul"},'"Typescript" - This sample app is built with typescript/webpack. In order to load it, you must first build it, as described in the following steps.')),(0,o.kt)("h3",{id:"1-install-overwolf-client"},"1. Install Overwolf Client"),(0,o.kt)("p",null,"Download and install the ",(0,o.kt)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download"},"Overwolf desktop client"),"."),(0,o.kt)("h3",{id:"2-install-nodejs"},"2. Install NodeJS"),(0,o.kt)("p",null,"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS"),".  "),(0,o.kt)("p",null,"After installing, run the following commands in your favorite IDE terminal (",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is free and easy to use)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"node -v //returns your node version, if installed\nnpm -v  //returns your npm version, if installed\n")),(0,o.kt)("p",null,"If they run successfully, proceed to the next steps."),(0,o.kt)("h3",{id:"3-download-the-source-code"},"3. Download the source code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/sample-app/"},"This repository")," contains the Overwolf sample app.",(0,o.kt)("br",{parentName:"p"}),"\n","Download the app's source code from the repository as a zip file, and extract it to a new folder on your machine."),(0,o.kt)("h3",{id:"4-build-the-app"},"4. Build the app"),(0,o.kt)("p",null,"In your terminal, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cd ts //the path to your extracted 'ts' folder here\nnpm install //install all modules listed as dependencies in package.json\nnpm run build //create a \"dist\" folder with the compiled components\n")),(0,o.kt)("h3",{id:"5-load-the-app-as-unpacked-extension"},'5. Load the app as "unpacked extension"'),(0,o.kt)("p",null,"Usually, all the apps in the Overwolf app store are OPK packages that can be installed with a double-click.\nUnlike OPK Packages, while you are developing an app, you want to load the unpacked code, change it, and test it regularly.  "),(0,o.kt)("p",null,'For this reason, in addition to the OPK installation, you can load the app as an "unpacked extension":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages"',(0,o.kt)("br",{parentName:"p"}),"\n",'Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click on "Development options".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the opened window, click on \"Load unpacked extension\" and select the app's root folder (for typescript - 'ts/dist', for native - 'native').\nThis will add the app to your Overwolf dock.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Make sure you are logged in to the OW client"),'. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the app's icon in your OW dock to run the app."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To load an app as unpacked, your OW account has to be ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../getting-started/sdk-introduction#whitelist-as-a-developer"},"whitelisted"))," as a developer.")),(0,o.kt)("h2",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,"This is how the sample app's main window looks like: a desktop window displaying some textual information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(30668).Z,width:"1212",height:"699"})),(0,o.kt)("p",null,"The real action will take place in the in-game window - once you launch Fortnite, the desktop window will be replaced with this in-game window:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(37828).Z,width:"1210",height:"697"})),(0,o.kt)("p",null,"This is the injected in-game window overlayed on your game screen.  The window displays game events, collected data, and a sample advertisement for monetization."),(0,o.kt)("p",null,"When you hit the close button, the app will close itself."))}c.isMDXComponent=!0},30668:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/desktop-window-14ea4b0eb60595bfee09d9e678f3a860.png"},37828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/in-game-window-0bba65fab95a92636c48be941025347f.png"}}]);