"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6877],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},40935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(25773),n=(a(27378),a(35318));const i={id:"exclusive-mode",image:"/img/embed/api-best-practices.jpg",title:"Exclusive Mode Overlay",sidebar_label:"Exclusive Mode Overlay",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,l={unversionedId:"topics/best-practices/exclusive-mode",id:"topics/best-practices/exclusive-mode",title:"Exclusive Mode Overlay",description:"Overwolf apps are supported in many games. Each one behaves in its own unique way, and requires to be treated differently.",source:"@site/../pages/topics/best-practices/exclusive-mode.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/exclusive-mode",permalink:"/topics/best-practices/exclusive-mode",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/exclusive-mode.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716804302,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"exclusive-mode",image:"/img/embed/api-best-practices.jpg",title:"Exclusive Mode Overlay",sidebar_label:"Exclusive Mode Overlay",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Enable Developer Tools",permalink:"/topics/best-practices/enable-dev-tools"},next:{title:"First time user experience",permalink:"/topics/best-practices/first-time-user-experience"}},s={},c=[{value:"What is exclusive mode",id:"what-is-exclusive-mode",level:2},{value:"How to enable exclusive mode",id:"how-to-enable-exclusive-mode",level:2},{value:"Ctrl + Tab",id:"ctrl--tab",level:3},{value:"Using Hotkey",id:"using-hotkey",level:3},{value:"Automatically on window launch",id:"automatically-on-window-launch",level:3},{value:"Special Overlays",id:"special-overlays",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Overwolf apps are supported in many games. Each one behaves in its own unique way, and requires to be treated differently."),(0,n.kt)("p",null,"In games which have a state without a mouse cursor (usually FPS), we\u2019ll need to provide users a way to activate the Overwolf app, and a way to control and interact with the app\u2019s window."),(0,n.kt)("p",null,"One way to do so is by changing Overwolf\u2019s overlay options to exclusive mode. In this article we\u2019re going to explain how to activate it, and how to detect and deal with cases that can disable it (e.g, full screen without borders setting)."),(0,n.kt)("h2",{id:"what-is-exclusive-mode"},"What is exclusive mode"),(0,n.kt)("p",null,"As mentioned above, in FPS games such as CSGO, World of Tanks, Fortnite, Warzone and more - there\u2019s no mouse cursor. The user can't control the Overwolf app window. The only way to interact with the OW apps window is to set the app window into \"exclusive mode\" \u2013 the game window becomes semi-transparent, input doesn't pass to the game, and a cursor interacts with the OW app available."),(0,n.kt)("h2",{id:"how-to-enable-exclusive-mode"},"How to enable exclusive mode"),(0,n.kt)("p",null,"There are two options to enable the exclusive mode while you are in a game:"),(0,n.kt)("h3",{id:"ctrl--tab"},"Ctrl + Tab"),(0,n.kt)("p",null,"Hitting Ctrl + tab while you are in a game set OW in exclusive mode - the game window get semi-transparent background, the OW dock is shown, and you can interact with your OW app's windows (if any windows are open).  "),(0,n.kt)("p",null,'Hitting ctrl+tab again or clicking outside of the OW app\'s window will "release" the exclusive mode.'),(0,n.kt)("h3",{id:"using-hotkey"},"Using Hotkey"),(0,n.kt)("p",null,"If you have a window that is bundled to a hotkey, and you want to enter into an exclusive mode when the hotkey is fired, you should:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the flag ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover"},"focus_game_takeover")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"ReleaseOnHidden"),"."),(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover_release_hotkey"},"focus_game_takeover_release_hotkey")," to the hotkey name. ")),(0,n.kt)("p",null,"When the hotkey is fired, the window will show up and enter exclusive mode (enabling user interaction and accepting input from the user). When the hotkey is clicked again - the window will hide and exit the exclusive mode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hotkey",src:a(69649).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,'In the above screenshot, you can see that the background is semi-transparent, and at the top of the screen a notification that guides the user which hotkey release the exclusive mode: "Ctrl + F to hide this app and return to the game". Of course, the key combination will change according to the current hotkey.'),(0,n.kt)("h3",{id:"automatically-on-window-launch"},"Automatically on window launch"),(0,n.kt)("p",null,"If you have a window that displayed automatically (a startup window, for example) and you want to enter exclusive mode automatically when the window is shown, you should:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the flag ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#focus_game_takeover"},"focus_game_takeover")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"ReleaseOnLostFocus"),".")),(0,n.kt)("p",null,"When the window is launched, it automatically enters exclusive mode (and enables user interaction and accepts input from the user).\nOnce the user clicks outside the window, the window will exit the exclusive mode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ctrl-tab",src:a(31069).Z,width:"1907",height:"1069"})),(0,n.kt)("p",null,'In the above screenshot, you can see at the top of the screen a general notification that guides the user "hide all apps to return to the game".'),(0,n.kt)("h2",{id:"special-overlays"},"Special Overlays"),(0,n.kt)("p",null,"Several specific games: CSGO, Warzone, and Destiny 2, have some additional limitations in addition to the exclusive that is required to interact with the OW windows: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When one of these games is running in non-borderless fullscreen mode (other modes are fullscreen borderless and windowed mode), the exclusive mode is completely disabled, and there's no option to interact with your app's window at all.  The only thing that you can do is to notify the user and ask them to change game mode to fullscreen borderless or windowed mode.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"To detect if the game is running in non-borderless fullscreen, read the ",(0,n.kt)("a",{parentName:"strong",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo.exclusiveModeDisabled")," property. If it's ",(0,n.kt)("inlineCode",{parentName:"strong"},"true"),", it means that the exclusive mode is disabled, and you should display the user notification about it.")," (suggest him to change the mode to fullscreen borderless or windowed mode. Otherwise he will not be able to interact with your app's windows )")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Overwolf allowed capturing these games only when it's in fullscreen-borderless mode. If the game is in fullscreen non-borderless or windowed mode (we'll support it also very soon), the capture will not work correctly."))))}d.isMDXComponent=!0},31069:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ctrl-tab-6f2de02ca525b2b8f8178989735879b1.png"},69649:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hotkey-27f77a93c9b54c03f74d4bc6c5c5d08a.png"}}]);