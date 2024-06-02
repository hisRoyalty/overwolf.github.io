"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3490],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:"sdk-introduction",image:"/img/embed/getting-started.jpg",title:"Overwolf SDK Introduction",sidebar_label:"SDK Introduction",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"start/getting-started/sdk-introduction",id:"start/getting-started/sdk-introduction",title:"Overwolf SDK Introduction",description:"Overwolf's SDK unlocks in-game app development, and the documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf\u2019s diverse APIs. To get you started, here are some important basics:",source:"@site/../pages/start/getting-started/sdk-introduction.mdx",sourceDirName:"start/getting-started",slug:"/start/getting-started/sdk-introduction",permalink:"/start/getting-started/sdk-introduction",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/getting-started/sdk-introduction.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1717243338,formattedLastUpdatedAt:"Jun 1, 2024",frontMatter:{id:"sdk-introduction",image:"/img/embed/getting-started.jpg",title:"Overwolf SDK Introduction",sidebar_label:"SDK Introduction",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Game compliance principles",permalink:"/start/getting-started/game-compliance"},next:{title:"Submit App Proposal",permalink:"/start/getting-started/submit-app-proposal"}},l={},p=[{value:"Get whitelisted as a developer",id:"get-whitelisted-as-a-developer",level:2},{value:"App architecture",id:"app-architecture",level:2},{value:"Manifest file",id:"manifest-file",level:3},{value:"HTML/JS source files",id:"htmljs-source-files",level:3},{value:"Assets",id:"assets",level:3},{value:"OPK package",id:"opk-package",level:3},{value:"Safety &amp; Security",id:"safety--security",level:2},{value:"API",id:"api",level:2},{value:"Overwolf Plugins",id:"overwolf-plugins",level:2},{value:"Real world sample app",id:"real-world-sample-app",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overwolf's SDK unlocks in-game app development, and the documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf\u2019s diverse ",(0,r.kt)("a",{parentName:"p",href:"/api"},"APIs"),". To get you started, here are some important basics:"),(0,r.kt)("h2",{id:"get-whitelisted-as-a-developer"},"Get whitelisted as a developer"),(0,r.kt)("p",null,"Only whitelisted Overwolf developer accounts can load or install apps that are not available on the Overwolf store, including unreleased beta versions. If you are not whitelisted, you will not be able to run or install such apps, which means that testing your work in progress will be difficult. Therefore, start by ",(0,r.kt)("a",{parentName:"p",href:"submit-app-proposal"},"submitting your app proposal")," in order to get whitelisted."),(0,r.kt)("h2",{id:"app-architecture"},"App architecture"),(0,r.kt)("p",null,"An Overwolf app's code has three main parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A manifest file (manifest.json), detailing the properties of the app. More info ",(0,r.kt)("a",{parentName:"li",href:"#manifest-file"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"HTML / javascript source files. More info ",(0,r.kt)("a",{parentName:"li",href:"#htmljs-source-files"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Visuals and images such as icons and buttons. More info ",(0,r.kt)("a",{parentName:"li",href:"#assets"},"here"),".")),(0,r.kt)("admonition",{title:"Only JS frameworks are supported",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"For example vue.js, angular.js, react, backbone.js and similar ones.",(0,r.kt)("br",{parentName:"p"}),"\n","However, full-blown desktop application solutions such as electron.js, AppJS and similar ones are not supported.  "),(0,r.kt)("p",{parentName:"admonition"},"For Vue.JS developers - we strongly advise against using UI libraries like Vuetify, Bueify, etc., as we've seen issues in non-native windows where different controls might not respond to clicks.  "),(0,r.kt)("p",{parentName:"admonition"},"If you know what you're doing and are looking for a workaround, find the control's outer element, have it listen to onmousedown, and simulate a click().")),(0,r.kt)("p",null,"To build Overwolf apps, you first need to download the Overwolf client.\nYou can find the latest developer client version ",(0,r.kt)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download?Channel=developers"},"Here"),"."),(0,r.kt)("h3",{id:"manifest-file"},"Manifest file"),(0,r.kt)("p",null,"This mandatory file describes the different aspects of your app, and has to be present in your app's root folder for it to function.\nIts goal is to define your app's general behaviour, the features it will be using, and any other \"meta-data\" Overwolf will need to run your app exactly the way you want it to."),(0,r.kt)("p",null,"You can read more in the ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest"},"Manifest.json")," section and learn what more you can do to make your app even more awesome."),(0,r.kt)("p",null,"An example of a basic manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version":1,\n    "type":"WebApp",\n    "meta":{\n        "name":"Demo App",\n        "version":"1.0.0",\n        "minimum-overwolf-version":"0.77.10",\n        "author":"Developer Name",\n        "icon":"IconMouseOver.png",\n        "icon_gray":"IconMouseNormal.png",\n        "launcher_icon": "desktop-icon.ico",\n        "description":"Demo App"\n    },\n    "data": {\n        "start_window":"MainWindow",\n        "windows":{\n            "MainWindow":{\n                    "file":"index.html",\n                    "transparent": false,\n                    "resizable": true,\n                    "use_os_windowing": true,\n                    "size": {\n                        "width":700,\n                        "height":400\n                        },\n                    "min_size": {\n                        "width":400,\n                        "height":400\n                    }\n                }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"htmljs-source-files"},"HTML/JS source files"),(0,r.kt)("p",null,"In the sample manifest above, the app contains a single window. The source file of this window is ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),". Attached is an example HTML  window source file that could be referred to in the manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Basic sample app</h1>\n<p>This is an Overwolf app window.</p>\n\n</body>\n</html>\n")),(0,r.kt)("h3",{id:"assets"},"Assets"),(0,r.kt)("p",null,"Your app can use images and assets like in any other web app. However, there are several mandatory assets that every Overwolf app needs. In the sample manifest above, all mandatory icons have been configured: ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#meta-mouse-over"},"icon"),", ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#meta-gray_icon"},"icon_gray")," and ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#meta-launcher_icon"},"launcher_icon"),"."),(0,r.kt)("h3",{id:"opk-package"},"OPK package"),(0,r.kt)("p",null,"After you finish building your app, you need to pack everything; the manifest, source files, and assets into a single Overwolf app installer, called an ",(0,r.kt)("inlineCode",{parentName:"p"},"OPK")," package."),(0,r.kt)("p",null,"An OPK package is actually a ZIP package: To create it, just ZIP all of your files together, and then manually change the file extension from ZIP to OPK. Double clicking a valid (",(0,r.kt)("strong",{parentName:"p"},"AND SIGNED"),") OPK will install the package as a new Overwolf app."),(0,r.kt)("p",null,"We remind you that only ",(0,r.kt)("a",{parentName:"p",href:"#whitelist-as-a-developer"},"whitelisted")," developers can install OPKs that were not downloaded from the store."),(0,r.kt)("h2",{id:"safety--security"},"Safety & Security"),(0,r.kt)("p",null,"Protecting our community of gamers is a top priority, and we work hard to ensure developers don\u2019t mess around. A few measures help us with that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each app goes through a full review process."),(0,r.kt)("li",{parentName:"ol"},"Each app is hosted separately in its own web browser, and each web browser runs as a separate process."),(0,r.kt)("li",{parentName:"ol"},"Each app is being run from a different virtual directory.")),(0,r.kt)("p",null,"These measures support security, separation and encapsulation: An app does not have access to the user\u2019s local files, an app cannot directly interfere with other apps, and if an app crashes or breaks, it doesn\u2019t affect the rest of the system."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"You can build some awesome things with web technologies. Our way to make apps even better is using in-game real time information and events to fuel app functions. With ",(0,r.kt)("a",{parentName:"p",href:"/api"},"our JavaScript API")," you can unlock features that read and interact with in-game events."),(0,r.kt)("p",null,"Some ideas for in-game events you can use - from basics like kills, deaths, victories and similar key events, through taking a screenshot or recording a video of the game, changing window size, analyzing in-game stats to display tips and more. We are constantly developing new tools and features that you can use to build your dream app, if there's a feature you cannot find, suggest it!"),(0,r.kt)("h2",{id:"overwolf-plugins"},"Overwolf Plugins"),(0,r.kt)("p",null,"You can add even more features to your app by using one of our ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-plugins/plugins-overview"},"plugins"),", like the ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin")," for reading files from the local disk. You can even create your own plugin: "),(0,r.kt)("p",null,"Use existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and interact with it in your Overwolf app."),(0,r.kt)("p",null,"For more details, you can review the ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-plugins/plugins-overview"},"Overwolf Plugins")," section."),(0,r.kt)("h2",{id:"real-world-sample-app"},"Real world sample app"),(0,r.kt)("p",null,"To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please check out our ",(0,r.kt)("a",{parentName:"p",href:"../basic-app/sample-app"},"sample app showcasing"),"."))}d.isMDXComponent=!0}}]);