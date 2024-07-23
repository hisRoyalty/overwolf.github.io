"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6714],{35318:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>y});var a=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),k=p(o),u=n,y=k["".concat(l,".").concat(u)]||k[u]||c[u]||s;return o?a.createElement(y,i(i({ref:t},h),{},{components:o})):a.createElement(y,i({ref:t},h))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[k]="string"==typeof e?e:n,i[1]=r;for(var p=2;p<s;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},21356:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=o(25773),n=(o(27378),o(35318));const s={id:"hotkeys-best-practices",image:"/img/embed/api-best-practices.jpg",title:"Hotkeys Best Practices",sidebar_label:"Hotkey best practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,r={unversionedId:"topics/best-practices/hotkeys-best-practices",id:"topics/best-practices/hotkeys-best-practices",title:"Hotkeys Best Practices",description:"Using Hotkeys",source:"@site/../pages/topics/best-practices/hotkeys-best-practices.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/hotkeys-best-practices",permalink:"/topics/best-practices/hotkeys-best-practices",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/hotkeys-best-practices.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721722144,formattedLastUpdatedAt:"Jul 23, 2024",frontMatter:{id:"hotkeys-best-practices",image:"/img/embed/api-best-practices.jpg",title:"Hotkeys Best Practices",sidebar_label:"Hotkey best practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Per-game settings",permalink:"/topics/best-practices/games-settings"},next:{title:"App launch performance",permalink:"/topics/best-practices/launch-time-performance"}},l={},p=[{value:"Using Hotkeys",id:"using-hotkeys",level:2},{value:"Types of hotkeys",id:"types-of-hotkeys",level:2},{value:"Toggle",id:"toggle",level:3},{value:"Custom Hotkeys",id:"custom-hotkeys",level:3},{value:"&quot;Hold&quot; hotkeys",id:"hold-hotkeys",level:2},{value:"Global Hotkeys",id:"global-hotkeys",level:2},{value:"Set through the manifest",id:"set-through-the-manifest",level:3},{value:"Get notified on a Hotkey change",id:"get-notified-on-a-hotkey-change",level:2},{value:"Reassign Hotkeys",id:"reassign-hotkeys",level:2},{value:"Pass through",id:"pass-through",level:2},{value:"Uninstall",id:"uninstall",level:2}],h=(k="SkipMe",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var k;const c={toc:p};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"using-hotkeys"},"Using Hotkeys"),(0,n.kt)("p",null,"Hotkeys are set in the manifest file, under the ",(0,n.kt)("a",{parentName:"p",href:"/api/manifest#hotkeys-object"},"hotKeys section"),"."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Hotkeys will only work in-game, not on desktop.")),(0,n.kt)("p",null,"An example of a hotkeys section from the manifest:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": {  //hotkey #1 name identifier\n        "title": "Show Player", //hotkey title\n        "action-type": "custom",//toggle or custom\n        "default": "Shift+F9", //key combination\n        "passthrough": true, //pass the keys to the game or not\n        "hold": true //invoke the action only while it\'s being held\n    },\n    "save_YourAppName": { //hotkey #2 name identifier\n        "title": "Save Replay for later",\n        "action-type": "custom",\n        "default": "Ctrl+Shift+F9"\n    }\n}\n')),(0,n.kt)("h2",{id:"types-of-hotkeys"},"Types of hotkeys"),(0,n.kt)("p",null,"There are two types of Hotkeys we use:"),(0,n.kt)("h3",{id:"toggle"},"Toggle"),(0,n.kt)("p",null,"A special hotkey that toggles the application visibility by showing or hiding it.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Few apps are using it, as it's the only action that it can do.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The advantage is that a toggle hotkey can activate/launch your app even if it's closed and launches your in-game app window.  "),(0,n.kt)("li",{parentName:"ul"},"After the app is running, toggle it again with the hotkey will hide the window without closing it or the app."),(0,n.kt)("li",{parentName:"ul"},'Another advantage is that you don\'t have to register for any event. Just define the hotkey as "toggle" in the manifest.')),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"If you are using a transparent background controller (window), a toggle hotkey will not work properly. Please use a ",(0,n.kt)("a",{parentName:"p",href:"#custom"},"custom hotkey"),".")),(0,n.kt)("h3",{id:"custom-hotkeys"},"Custom Hotkeys"),(0,n.kt)("p",null,"Defines a custom hotkey to be used by the app.",(0,n.kt)("br",{parentName:"p"}),"\n","Most apps are using this kind of hotkey, as it can activate any action and you can customize your app's window behavior."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom hotkeys will only function when your app is already running (Unlike Toggle hotkeys, using a custom hotkey with the app closed will do nothing)."),(0,n.kt)("li",{parentName:"ul"},"Custom hotkeys will only function and get a response from your app after registering the hotkey using the ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onpressed"},"overwolf.settings.hotkeys.onPressed")," event."),(0,n.kt)("li",{parentName:"ul"},"If you are using a ",(0,n.kt)("a",{parentName:"li",href:"#hold-hotkeys"},"hold")," type hotkey, you should register to the ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event, instead of the ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"onPressed")," event.")),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"If you are using a transparent background controller (window), register your app's hotkeys to the ",(0,n.kt)("strong",{parentName:"p"},"onPressed")," event, in that window.")),(0,n.kt)("h2",{id:"hold-hotkeys"},'"Hold" hotkeys'),(0,n.kt)("p",null,'You can set a hotkey as a "hold" hotkey: a hotkey that functions while pressed down and stops when released, usually used for "ShowOnHold" mode (like the tab key does in some games).'),(0,n.kt)("p",null,'To implement a hotkey which works with a "ShowOnHold" functionality, you should set it as a "hold" hotkey in the manifest, and register to the ',(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event."),(0,n.kt)("p",null,"You can read a detailed example on how to do that ",(0,n.kt)("a",{parentName:"p",href:"using-tab#set-the-hotkey-in-the-manifest"},"here"),".",(0,n.kt)("br",{parentName:"p"}),"\n",'This example demonstrates how to set the Tab key as a "hold" hotkey, but of course, you can set any other key as a "hold" hotkey in the same way.  '),(0,n.kt)("h2",{id:"global-hotkeys"},"Global Hotkeys"),(0,n.kt)("p",null,"For apps that work in more than one game or global apps there is an option to set hotkeys as global hotkeys.",(0,n.kt)("br",{parentName:"p"}),"\n","This option is available from the OW client UI or using the ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"API"),"."),(0,n.kt)("p",null,"A screenshot from the OW client UI:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hotkeys_global",src:o(34701).Z,width:"980",height:"702"})),(0,n.kt)("p",null,'If you "upgrade" your hotkey to a global hotkey through the OW client "settings" page, the client will try to set this hotkey for all installed games on your machine.'),(0,n.kt)("p",null,"Whenever hotkeys are added this way but a conflict exists, the hotkey is added as unassigned."),(0,n.kt)("p",null,"You can get the list of all your app's assigned hotkeys using the ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#getcallback"},"overwolf.settings.hotkeys.get()"),"."),(0,n.kt)("h3",{id:"set-through-the-manifest"},"Set through the manifest"),(0,n.kt)("p",null,"If ",(0,n.kt)("a",{parentName:"p",href:"/api/manifest#game_targeting"},"game_targeting"),' flag is set to "all", then hotkeys will be set global as default.',(0,n.kt)("br",{parentName:"p"}),"\n","Whenever hotkeys are added, but a conflict exists, the hotkey is added as unassigned."),(0,n.kt)("p",null,'To make it more transparent - there is no way to set a specific hotkey as "global" in the manifest other than set "game_targeting: "all".'),(0,n.kt)("p",null,'If your app was not able to set the hotkeys for all the games, then the user can assign it through the OW client "settings" page or, the dev can set it global through the ',(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"API"),". "),(0,n.kt)("h2",{id:"get-notified-on-a-hotkey-change"},"Get notified on a Hotkey change"),(0,n.kt)("p",null,"Listen to the ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#onchanged"},"overwolf.settings.hotkeys.onChanged")," event if you want to get notified when users change your app's hotkeys from the OW client settings page."),(0,n.kt)("h2",{id:"reassign-hotkeys"},"Reassign Hotkeys"),(0,n.kt)("p",null,"We recommend providing users a method to edit their Hotkeys, directly from within the App."),(0,n.kt)("p",null,"For that end, you can utilize the following APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#getcallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.get()"))," - Get the current values of your App's Hotkeys."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#assignhotkey-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.assign()"))," - Assign a new value for an App Hotkey."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#onchanged"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.onChanged"))," - Fires when an App Hotkey's value changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#unassignhotkey-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.unassign()"))," - Unassigns the specified App Hotkey.")),(0,n.kt)("p",null,"When wired together correctly, it is possible to create a complete Hotkeys editor within your App's settings screen,\nallowing your users to easily customize your App."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Hotkey Editing Example",src:o(28130).Z,width:"538",height:"520"}),"\n",(0,n.kt)("em",{parentName:"p"},"Example App Hotkeys editor example from the ",(0,n.kt)("a",{parentName:"em",href:"https://www.overwolf.com/oneapp/Overwolf-Outplayed"},"Outplayed")," settings screen.")),(0,n.kt)(h,{type:"find-better-home",mdxType:"SkipMe"},(0,n.kt)("p",null,"What you can do is place a direct link to the relevant settings page, into the hotkeys of a specific game settings, using:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id")),(0,n.kt)("p",null,"Or, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"overwolf.settings.hotkeys.assign()")," and ",(0,n.kt)("a",{parentName:"p",href:"/api/settings/hotkeys#unassignhotkey-callback"},"unassign()")," APIs."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It's possible to even use left or right arrows for hotkeys. To do so, you should use the code ",(0,n.kt)("inlineCode",{parentName:"p"},"Left")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Right")," in your manifest.json."))),(0,n.kt)("h2",{id:"pass-through"},"Pass through"),(0,n.kt)("p",null,'You can set a hotkey as "passthrough," which means that the hotkey will not interfere with keys from the game.',(0,n.kt)("br",{parentName:"p"}),"\n",'The key combination will trigger your app hotkey and then will "passthrough" the game.'),(0,n.kt)("p",null,"Example code from the manifest, for a hotkey that set to pass through:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": { \n        "title": "Show Player",\n        "action-type": "custom",\n        "default": "Shift+F9",\n        "passthrough": true,\n    },\n}\n')),(0,n.kt)("h2",{id:"uninstall"},"Uninstall"),(0,n.kt)("p",null,"All app hotkeys removed once the extension is uninstalled."))}u.isMDXComponent=!0},34701:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/hotkeys_global-2630b9bd60a3c64d8cb8aae05f71dab7.png"},28130:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/edit-hotkeys-7325e5b39f92763dee7391e3542ca619.png"}}]);