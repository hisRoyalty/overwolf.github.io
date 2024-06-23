"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6454],{35318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),w=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=w(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=w(t),c=a,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return t?i.createElement(m,r(r({ref:n},d),{},{components:t})):i.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var w=2;w<o;w++)r[w]=t[w];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>w});var i=t(25773),a=(t(27378),t(35318));const o={id:"using-overwolf-windows",image:"/img/embed/api-best-practices.jpg",title:"Using Overwolf windows",sidebar_label:"Using Overwolf windows",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,s={unversionedId:"topics/using-windows-api/using-overwolf-windows",id:"topics/using-windows-api/using-overwolf-windows",title:"Using Overwolf windows",description:"Every Overwolf app uses Overwolf windows, whether in-game or while on desktop. When you get to work on your own app, the first step is declaring your app\u2019s windows in its manifest.json file. You will NOT be able to create an Overwolf window without declaring it in the manifest (window.open is not an Overwolf window).",source:"@site/../pages/topics/using-windows-api/using-overwolf-windows.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/using-overwolf-windows",permalink:"/topics/using-windows-api/using-overwolf-windows",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-windows-api/using-overwolf-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719133412,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{id:"using-overwolf-windows",image:"/img/embed/api-best-practices.jpg",title:"Using Overwolf windows",sidebar_label:"Using Overwolf windows",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Windows Communication",permalink:"/topics/using-windows-api/communicating-between-windows"},next:{title:"Resolution Size and Position",permalink:"/topics/using-windows-api/windows-resolution-size-position"}},l={},w=[{value:"Declaring windows in manifest.json",id:"declaring-windows-in-manifestjson",level:2},{value:"Essential window properties",id:"essential-window-properties",level:3},{value:"Accessing your declared windows",id:"accessing-your-declared-windows",level:2},{value:"Using window.name",id:"using-windowname",level:3},{value:"Using window.id",id:"using-windowid",level:3},{value:"How to create a new window",id:"how-to-create-a-new-window",level:2},{value:"Call obtainDeclaredWindow()",id:"call-obtaindeclaredwindow",level:3},{value:"Call restore()",id:"call-restore",level:3}],d={toc:w};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every Overwolf app uses Overwolf windows, whether in-game or while on desktop. When you get to work on your own app, the first step is declaring your app\u2019s windows in its ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest"},"manifest.json")," file. You will NOT be able to create an Overwolf window without declaring it in the manifest (window.open is not an Overwolf window).  "),(0,a.kt)("p",null,"The idea here is to declare a ",(0,a.kt)("strong",{parentName:"p"},"window class")," with its properties and later you can create an ",(0,a.kt)("strong",{parentName:"p"},"instance")," of that class.\nIt's not currently possible to create multiple instances of a window class - having many windows is discouraged because it might make your app more complicated than required or hurt user experience."),(0,a.kt)("h2",{id:"declaring-windows-in-manifestjson"},"Declaring windows in manifest.json"),(0,a.kt)("p",null,"Declare your window objects by giving the object a name under the data.windows section and adding ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#extension_window_data-object"},"properties")," that you want the window to inherit when created. Properties can include size, starting position, transparency and others."),(0,a.kt)("p",null,"Here is an example window declaration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' "data": {\n        "start_window": "MainWindow",\n        "windows": {\n            "MainWindow": {\n                "file": "Files/index.html",\n                "transparent": true,\n                "resizable": true,\n                "size": {"width": 400, "height": 300},\n                "min_size": {"width": 200, "height": 200},\n                "max_size": {"width": 600, "height": 500}\n            }\n        }\n }\n')),(0,a.kt)("h3",{id:"essential-window-properties"},"Essential window properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#start_window"},(0,a.kt)("inlineCode",{parentName:"a"},"start_window"))," - Every app always has a default window, a main window which is the first to be shown when your app is launched. A Start Window MUST exist in order for the other windows to exist \u2013 if you close your main window (or if the user closes it) all other app windows will be closed as well, factually closing your app.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#window-file"},(0,a.kt)("inlineCode",{parentName:"a"},"file"))," \u2013 This is the core HTML file which will be loaded into your window when it's opened. This can only be a local file. If you wish to host your app on a remote web-site, you\u2019ll have to build a local page that redirects to that website (If you do so, make sure that the ",(0,a.kt)("strong",{parentName:"p"},"block_top_window_navigation")," property is set to ",(0,a.kt)("strong",{parentName:"p"},"false"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#window-transparent"},(0,a.kt)("inlineCode",{parentName:"a"},"transparent")),' \u2013 When this property is set to true, your window will have no borders or background. Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it. If this property is set to false, your window will have the common Overwolf window borders and white background.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-grab_keyboard_focus"},(0,a.kt)("inlineCode",{parentName:"a"},"grab_keyboard_focus"))," \u2013 This property is set to false by default, but if set to true, this property means opening your window will automatically take the user's keyboard focus and any keystrokes will be made in the app window rather than the current game the user's seeing. Since some windows open surprisingly or automatically, for example based on a game event or a hotkey pressed, you want to keep this false in most cases and avoid 'stealing' user keyboard focus away. ",(0,a.kt)("strong",{parentName:"p"},"grab_focus_on_desktop")," is the complementary property which describes out-of-game behavior, this is set to True by default because the user is not playing when launching the app in desktop mode.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-size"},(0,a.kt)("inlineCode",{parentName:"a"},"size"))," \u2013 Allows you to set the size of your app window when it is first opened. If your window is not resizable, this will be its permanent size. However, if your app is resizable \u2013 app size is saved by Overwolf when closed so that the next time it is opened, ",(0,a.kt)("strong",{parentName:"p"},"it will open with the same size as it was closed with by the user"),", this will persist even if the app is uninstalled and reinstalled. More ",(0,a.kt)("a",{parentName:"p",href:"windows-resolution-size-position#window-sizes"},"window size tips"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-min_size"},(0,a.kt)("inlineCode",{parentName:"a"},"min_size"))," and ",(0,a.kt)("a",{parentName:"p",href:"/api/manifest#windows-max_size"},(0,a.kt)("inlineCode",{parentName:"a"},"max_size"))," - These properties define the smallest and largest your app window can be in pixels."))),(0,a.kt)("h2",{id:"accessing-your-declared-windows"},"Accessing your declared windows"),(0,a.kt)("p",null,"There are two ways we identify windows: the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," properties."),(0,a.kt)("h3",{id:"using-windowname"},"Using window.name"),(0,a.kt)("p",null,"When accessing a window by name, you need to use the name value exactly as it appears in your manifest.json window declaration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A window name is always a value declared by the developer of the app.")),(0,a.kt)("h3",{id:"using-windowid"},"Using window.id"),(0,a.kt)("p",null,"Accessing a window by id is possible when you already have an instance of your window declared \u2013 you can retrieve this id using one of two overwolf.windows functions: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A window id is set by the Overwolf API. This value is subject to change in future Overwolf versions \u2013 so you should avoid using hardcoded values.")),(0,a.kt)("p",null,"Currently we do not support generating multiple instances of the same window class, most functions that use window id will accept window name just the same."),(0,a.kt)("h2",{id:"how-to-create-a-new-window"},"How to create a new window"),(0,a.kt)("h3",{id:"call-obtaindeclaredwindow"},"Call obtainDeclaredWindow()"),(0,a.kt)("p",null,"First, you must call ",(0,a.kt)("a",{parentName:"p",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")," using the window\u2019s name as declared in your manifest.json. This will create a single instance of your window and return basic window information including id, name, width, height and other base properties."),(0,a.kt)("h3",{id:"call-restore"},"Call restore()"),(0,a.kt)("p",null,"Afterwards, you need to call ",(0,a.kt)("a",{parentName:"p",href:"/api/windows#restorewindowid-callback"},"overwolf.windows.restore()")," using either the window's name or id retrieved from obtainDeclaredWindow."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Skipping obtainDeclaredWindow() and calling restore() with the window\u2019s name will ",(0,a.kt)("strong",{parentName:"p"},"not work")," unless the window is already instantiated and minimized (in which case it will be restored).")))}p.isMDXComponent=!0}}]);