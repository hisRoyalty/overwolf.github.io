"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1999],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(l,".").concat(c)]||u[c]||w[c]||r;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(25773),i=(n(27378),n(35318));const r={id:"windows-tips",image:"/img/embed/api-best-practices.jpg",title:"General tips for using windows",sidebar_label:"General Tips",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},a=void 0,s={unversionedId:"topics/using-windows-api/windows-tips",id:"topics/using-windows-api/windows-tips",title:"General tips for using windows",description:"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:",source:"@site/../pages/topics/using-windows-api/windows-tips.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/windows-tips",permalink:"/topics/using-windows-api/windows-tips",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-windows-api/windows-tips.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1720944629,formattedLastUpdatedAt:"Jul 14, 2024",frontMatter:{id:"windows-tips",image:"/img/embed/api-best-practices.jpg",title:"General tips for using windows",sidebar_label:"General Tips",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Resolution Size and Position",permalink:"/topics/using-windows-api/windows-resolution-size-position"},next:{title:"Windows Types",permalink:"/topics/using-windows-api/windows-types"}},l={},p=[{value:"Call getCurrentWindow() once",id:"call-getcurrentwindow-once",level:2},{value:"Avoid full-screen transparent windows",id:"avoid-full-screen-transparent-windows",level:2},{value:"Your app is not a website!",id:"your-app-is-not-a-website",level:2},{value:"Keep your windows small",id:"keep-your-windows-small",level:2},{value:"Use block_top_window_navigation",id:"use-block_top_window_navigation",level:2},{value:"Use a background controller",id:"use-a-background-controller",level:2},{value:"Use native desktop windows",id:"use-native-desktop-windows",level:2},{value:"The webkit app region drag property",id:"the-webkit-app-region-drag-property",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:"),(0,i.kt)("h2",{id:"call-getcurrentwindow-once"},"Call getCurrentWindow() once"),(0,i.kt)("p",null,"A window should call ",(0,i.kt)("a",{parentName:"p",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")," once during startup and then store the results in a variable for later use. Also makes your code more elegant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.windows.getCurrentWindow(function(result) {\n    if(result.status === "success") {\n        overwolf.windows.dragMove(result.window.id);\n    }\n});\n')),(0,i.kt)("h2",{id:"avoid-full-screen-transparent-windows"},"Avoid full-screen transparent windows"),(0,i.kt)("p",null,"Overwolf apps are supposed to act like native desktop applications and not as websites \u2013 therefore, don\u2019t be tempted to create full-screen transparent windows with draggable HTML elements (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),") as windows.\nDoing so will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a low-performance, laggy experience.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use a lot more CPU than required for your features.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Will not support dual screens or companion laptop screens, including dragging an element to the second screen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cause a risk of a broken HTML page covering the entire game screen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cause a risk of grabbing focus without the gamer wanting it or understanding why."))),(0,i.kt)("h2",{id:"your-app-is-not-a-website"},"Your app is not a website!"),(0,i.kt)("p",null,"Overwolf apps are supposed to act like native desktop applications, not websites. Avoid enabling mousewheel scrolls or ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting"},"text selection")," in your app's windows, these are website features which would look and feel weird in an application setting. Whenever in doubt in terms of design or user experience, compare your app to desktop applications and not to websites. "),(0,i.kt)("h2",{id:"keep-your-windows-small"},"Keep your windows small"),(0,i.kt)("p",null,"App windows should provide their value in the leanest, most accurate fashion possible. When Overwolf renders transparent windows it does it\u2019s best to do it efficiently, however, large windows do have performance costs. Therefore, avoid using large windows and try to get your app's design to be focused, to the point and as small as you can effectively make it."),(0,i.kt)("h2",{id:"use-block_top_window_navigation"},"Use block_top_window_navigation"),(0,i.kt)("p",null,"Unless you have good reasons to do otherwise, always set the ",(0,i.kt)("a",{parentName:"p",href:"/api/manifest#windows-block_top_window_navigation"},"block_top_window_navigation")," flag to true in your manifest.json file."),(0,i.kt)("p",null,"This will ensure that no bugs or accidental calls like window.top.href take control of your entire app.\nThe only reason this isn\u2019t set to true by default is for backwards compatibility for apps that are hosted on remote servers."),(0,i.kt)("h2",{id:"use-a-background-controller"},"Use a background controller"),(0,i.kt)("p",null,"Consider using your main window as a hidden controller window that the user doesn\u2019t see \u2013 it can act as a service that runs in the background and communicates with other visible windows of the app. For apps that auto-launch when the game starts or wish to implement pop-up notifications, this is a must-have."),(0,i.kt)("p",null,'This "hidden" window should have the ',(0,i.kt)("a",{parentName:"p",href:"/api/manifest#is_background_page"},"is_background_page")," flag set to true in the app\u2019s manifest.json file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"index" : {\n  ...\n  "is_background_page": true,\n  ...\n}\n')),(0,i.kt)("h2",{id:"use-native-desktop-windows"},"Use native desktop windows"),(0,i.kt)("p",null,'If your app includes a window that will only be visible on desktop but not while playing, you should set your window as "native".',(0,i.kt)("br",{parentName:"p"}),"\n","It will dramatically improve your app performance and help design an efficient, elegant product."),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"windows-types#native-window"},"Read more"),"."),(0,i.kt)("h2",{id:"the-webkit-app-region-drag-property"},"The webkit app region drag property"),(0,i.kt)("p",null," It is possible to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-webkit-app-region: drag")," css property to elements, making them drag the entire window with them."),(0,i.kt)("p",null," :::note\nDo note that this behavior takes priority over button presses. If you wish to have working buttons inside an area with this property, you must manually exclude them from it in the css.\n:::"))}u.isMDXComponent=!0}}]);