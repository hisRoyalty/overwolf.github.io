"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1779],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),w=r,c=m["".concat(s,".").concat(w)]||m[w]||u[w]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}w.displayName="MDXCreateElement"},52911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>w,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const i={id:"windows-types",image:"/img/embed/api-best-practices.jpg",title:"Windows Types",sidebar_label:"Windows Types",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"topics/using-windows-api/windows-types",id:"topics/using-windows-api/windows-types",title:"Windows Types",description:"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows.",source:"@site/../pages/topics/using-windows-api/windows-types.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/windows-types",permalink:"/topics/using-windows-api/windows-types",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-windows-api/windows-types.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723025347,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{id:"windows-types",image:"/img/embed/api-best-practices.jpg",title:"Windows Types",sidebar_label:"Windows Types",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"General Tips",permalink:"/topics/using-windows-api/windows-tips"}},s={},p=[{value:"Non-Transparent Window",id:"non-transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson",level:4},{value:"Transparent window",id:"transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-1",level:4},{value:"Native window",id:"native-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-2",level:4},{value:"Comparison table",id:"comparison-table",level:2},{value:"Sample app",id:"sample-app",level:2}],d=(m="ImageSlider",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:p};function w(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows."),(0,r.kt)("h2",{id:"non-transparent-window"},"Non-Transparent Window"),(0,r.kt)("p",null,"A non-Transparent Window is the ",(0,r.kt)("strong",{parentName:"p"},"standard")," Overwolf window. A window with borders, control buttons and opacity slider.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become white.')),(0,r.kt)("h4",{id:"example-from-the-manifestjson"},"Example from the manifest.json:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#window-transparent"},"transparent")," property in your manifest.json to 'false'."),(0,r.kt)("li",{parentName:"ul"},"In order to enable a ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#show_maximize"},"maximize")," / ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#windows-show_minimize"},"minimize"),' buttons, you should set the right flags in the manifest to "true".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": false,\n      "show_maximize": true, //only relevant for non-transparent windows\n      "show_minimize": true //only relevant for non-transparent windows\n     }\n}\n')),(0,r.kt)("p",null,"Example for a standard, non-transparent window:"),(0,r.kt)("p",null,"!",(0,r.kt)("img",{alt:"standard window",src:n(56508).Z,width:"480",height:"380"})),(0,r.kt)("h2",{id:"transparent-window"},"Transparent window"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The term transparent might be a bit misleading. This window has no borders, window control buttons or default background \u2013 create those elements by yourself in your HTML/CSS.")),(0,r.kt)("p",null,"A Transparent Window is a window ",(0,r.kt)("strong",{parentName:"p"},"without")," borders, control buttons and opacity slider.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it.'),(0,r.kt)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,r.kt)("a",{parentName:"li",href:"/start/basic-app/ui-components"},"UI components samples"),")"),(0,r.kt)("li",{parentName:"ul"},"You should implement dragging behavior independently, by yourself. (you can use our ",(0,r.kt)("a",{parentName:"li",href:"/start/basic-app/sample-app"},"sample app")," that already implemented this feature)"),(0,r.kt)("li",{parentName:"ul"},"Avoid full-screen transparent windows. ",(0,r.kt)("a",{parentName:"li",href:"windows-tips#avoid-full-screen-transparent-windows"},"More info here"),".")),(0,r.kt)("h4",{id:"example-from-the-manifestjson-1"},"Example from the manifest.json:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#window-transparent"},"transparent")," property in your manifest.json to 'true'.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": true\n     }\n}\n')),(0,r.kt)("p",null,"Here you can see some examples for transparent windows:"),(0,r.kt)(d,{mdxType:"ImageSlider"},(0,r.kt)("img",{src:n(98319).Z,alt:'"transparent" window that is being used in our sample app.'}),(0,r.kt)("img",{src:n(4222).Z,alt:'"transparent" window that is being used in the Spawning Tool Build Advisor.'}),(0,r.kt)("img",{src:n(75144).Z,alt:'"transparent" window being used in the Legendary Builds app.'})),(0,r.kt)("h2",{id:"native-window"},"Native window"),(0,r.kt)("p",null,"If your app includes a window that will only be visible on desktop, either before, after or on a 2nd screen during game (desktop_only:true), you should define this window as a ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#native_window"},'"native"'),".  "),(0,r.kt)("p",null,"It will dramatically improve your app performance and help design an efficient, elegant product."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A native window is always a non-transparent window."),(0,r.kt)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become black.'),(0,r.kt)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,r.kt)("a",{parentName:"li",href:"/start/basic-app/ui-components"},"UI components samples"),")"),(0,r.kt)("li",{parentName:"ul"},"Native windows change their size according to the users' DPI automagically. (to disable that use the disable_auto_dpi_sizing flag)"),(0,r.kt)("li",{parentName:"ul"},"On native window, ",(0,r.kt)("inlineCode",{parentName:"li"},"window.screen")," returns the dimensions of the desktop with calculating DPI. (on non-native window, it returns without calculating DPI)")),(0,r.kt)("h4",{id:"example-from-the-manifestjson-2"},"Example from the manifest.json:"),(0,r.kt)("p",null,"add the following flags to that window's data in the app\u2019s manifest.json file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"desktop_only": true,\n"native_window":true,\n')),(0,r.kt)("h2",{id:"comparison-table"},"Comparison table"),(0,r.kt)("p",null,"To summarize, these are the main differences between the transparent, non-transparent, and native windows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"transparent"),(0,r.kt)("th",{parentName:"tr",align:null},"non-transparent"),(0,r.kt)("th",{parentName:"tr",align:null},"native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desktop_only support"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in_game_only support"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"built-in controls (maximize,minimize)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"built-in dragging"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"built-in resizing"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"See-through background"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"- (white bg)"),(0,r.kt)("td",{parentName:"tr",align:null},"- (black bg)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DPI-Aware mechanic"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+")))),(0,r.kt)("h2",{id:"sample-app"},"Sample app"),(0,r.kt)("p",null,"You should download our ",(0,r.kt)("a",{parentName:"p",href:"/start/basic-app/sample-app"},"sample app"),", it covers transparent/non-transparent window creation and much more."))}w.isMDXComponent=!0},4222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transparent-overwolf-window-2-d12d01bf88bedc9543197112977b268c.jpg"},75144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transparent-overwolf-window-3-38affd711281836410eeff470a7d4b98.jpg"},98319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transparent-window-89080117de5d9c8fefe6927a4d6792a5.png"},56508:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/standard-window-ff57751a94c953ae00a6606a1b836886.png"}}]);