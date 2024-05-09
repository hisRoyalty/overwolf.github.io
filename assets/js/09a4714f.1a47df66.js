"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6664],{35318:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>g});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=l,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(g,i(i({ref:t},k),{},{components:a})):n.createElement(g,i({ref:t},k))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(25773),l=(a(27378),a(35318));const r={id:"hotkeys",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.hotkeys API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/settings/hotkeys",id:"api/settings/hotkeys",title:"overwolf.settings.hotkeys API",description:"Use this API to view and modify the Overwolf hotkeys settings properties.",source:"@site/../pages/api/settings/hotkeys.mdx",sourceDirName:"api/settings",slug:"/api/settings/hotkeys",permalink:"/api/settings/hotkeys",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/settings/hotkeys.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1715254229,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"hotkeys",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.hotkeys API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.settings.games API",permalink:"/api/settings/games"},next:{title:"overwolf.settings.language API",permalink:"/api/settings/language"}},s={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"update(hotkey, callback)",id:"updatehotkey-callback",level:2},{value:"Version added: 0.208",id:"version-added-0208",level:4},{value:"Permissions required: Hotkeys",id:"permissions-required-hotkeys",level:4},{value:"Notes",id:"notes",level:4},{value:"assign(hotkey, callback)",id:"assignhotkey-callback",level:2},{value:"Version added: 0.160",id:"version-added-0160",level:4},{value:"Permissions required: Hotkeys",id:"permissions-required-hotkeys-1",level:4},{value:"Notes",id:"notes-1",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"unassign(hotkey, callback)",id:"unassignhotkey-callback",level:2},{value:"Version added: 0.160",id:"version-added-0160-1",level:4},{value:"Permissions required: Hotkeys",id:"permissions-required-hotkeys-2",level:4},{value:"Usage example",id:"usage-example-1",level:4},{value:"get(callback)",id:"getcallback",level:2},{value:"Version added: 0.142",id:"version-added-0142",level:4},{value:"Permissions required: Hotkeys",id:"permissions-required-hotkeys-3",level:4},{value:"getAllApps(callback)",id:"getallappscallback",level:2},{value:"Version added: 0.236",id:"version-added-0236",level:4},{value:"Permissions required: Hotkeys",id:"permissions-required-hotkeys-4",level:4},{value:"onHold",id:"onhold",level:2},{value:"Version added: 0.142",id:"version-added-0142-1",level:4},{value:"onPressed",id:"onpressed",level:2},{value:"Version added: 0.142",id:"version-added-0142-2",level:4},{value:"OnChanged",id:"onchanged",level:2},{value:"Version added: 0.142",id:"version-added-0142-3",level:4},{value:"IHotkey Object",id:"ihotkey-object",level:2},{value:"Version added: 0.142",id:"version-added-0142-4",level:4},{value:"Example data",id:"example-data",level:4},{value:"GetAssignedHotkeyResult Object",id:"getassignedhotkeyresult-object",level:2},{value:"Version added: 0.142",id:"version-added-0142-5",level:4},{value:"Callback example",id:"callback-example",level:4},{value:"Notes",id:"notes-2",level:4},{value:"Callback example with global hotkeys",id:"callback-example-with-global-hotkeys",level:4},{value:"GetAllAssignedHotkeysResult Object",id:"getallassignedhotkeysresult-object",level:2},{value:"Version added: 0.236",id:"version-added-0236-1",level:4},{value:"OnHoldEvent Object",id:"onholdevent-object",level:2},{value:"Event data example",id:"event-data-example",level:4},{value:"OnPressedEvent Object",id:"onpressedevent-object",level:2},{value:"Event data example",id:"event-data-example-1",level:4},{value:"OnChangedEvent Object",id:"onchangedevent-object",level:2},{value:"Event data example",id:"event-data-example-2",level:4},{value:"UpdateHotkeyObject Object",id:"updatehotkeyobject-object",level:2},{value:"Version added: 0.208",id:"version-added-0208-1",level:4},{value:"AssignHotkeyObject Object",id:"assignhotkeyobject-object",level:2},{value:"Version added: 0.160",id:"version-added-0160-2",level:4},{value:"UnassignHotkeyObject Object",id:"unassignhotkeyobject-object",level:2},{value:"Version added: 0.160",id:"version-added-0160-3",level:4},{value:"HotkeyModifiers Object",id:"hotkeymodifiers-object",level:2},{value:"Version added: 0.160",id:"version-added-0160-4",level:4}],k={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Use this API to view and modify the Overwolf hotkeys settings properties."),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"Please read all the info about hotkeys and how to use them in our ",(0,l.kt)("a",{parentName:"p",href:"/topics/best-practices/hotkeys-best-practices"},"hotkeys best practice")," guide.")),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#updatehotkey-callback"},"overwolf.settings.hotkeys.update()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getcallback"},"overwolf.settings.hotkeys.get()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getallappscallback"},"overwolf.settings.hotkeys.getAllApps()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#assignhotkey-callback"},"overwolf.settings.hotkeys.assign()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unassignhotkey-callback"},"overwolf.settings.hotkeys.unassign()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onhold"},"overwolf.settings.hotkeys.onHold")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpressed"},"overwolf.settings.hotkeys.onPressed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onchanged"},"overwolf.settings.hotkeys.onChanged"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getassignedhotkeyresult-object"},"overwolf.settings.hotkeys.GetAssignedHotkeyResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getallassignedhotkeysresult-object"},"overwolf.settings.hotkeys.GetAllAssignedHotkeysResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ihotkey-object"},"overwolf.settings.hotkeys.IHotkey")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onholdevent-object"},"overwolf.settings.hotkeys.OnHoldEvent")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpressedevent-object"},"overwolf.settings.hotkeys.OnPressedEvent")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onchangedevent-object"},"overwolf.settings.hotkeys.OnChangedEvent")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#updatehotkeyobject-object"},"overwolf.settings.hotkeys.UpdateHotkeyObject")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#assignhotkeyobject-object"},"overwolf.settings.hotkeys.AssignHotkeyObject")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unassignhotkeyobject-object"},"overwolf.settings.hotkeys.UnassignHotkeyObject")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hotkeymodifiers-object"},"overwolf.settings.hotkeys.HotkeyModifiers")," Object")),(0,l.kt)("h2",{id:"updatehotkey-callback"},"update(hotkey, callback)"),(0,l.kt)("h4",{id:"version-added-0208"},"Version added: 0.208"),(0,l.kt)("h4",{id:"permissions-required-hotkeys"},"Permissions required: Hotkeys"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Update a hotkey for the current extension.")),(0,l.kt)("h4",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can only update hotkeys that pre-defined in your manifest.\nPlease read all the info in our ",(0,l.kt)("a",{parentName:"li",href:"/topics/best-practices/hotkeys-best-practices#set-through-the-manifest"},"hotkeys best practice")," guide.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hotkey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#updatehotkeyobject-object"},"UpdateHotkeyObject")," object"),(0,l.kt)("td",{parentName:"tr",align:null},"The hotkey to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Reports success or failure")))),(0,l.kt)("h2",{id:"assignhotkey-callback"},"assign(hotkey, callback)"),(0,l.kt)("h4",{id:"version-added-0160"},"Version added: 0.160"),(0,l.kt)("h4",{id:"permissions-required-hotkeys-1"},"Permissions required: Hotkeys"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Assign global hotkey for the current extension, OR, if a gameId is specified, assign/unassign a dedicated hotkey.")),(0,l.kt)("h4",{id:"notes-1"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can assign only hotkeys that pre-defined in your manifest."),(0,l.kt)("li",{parentName:"ul"},"You can assign a global hotkey (means - not send a game id) through the API only if your app is targeted in the manifest to more then one game (or to all games).\nPlease read all the info in our ",(0,l.kt)("a",{parentName:"li",href:"/topics/best-practices/hotkeys-best-practices#set-through-the-manifest"},"hotkeys best practice")," guide.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hotkey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#assignhotkeyobject-object"},"AssignHotkeyObject")," object"),(0,l.kt)("td",{parentName:"tr",align:null},"The hotkey to assign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Reports success or failure")))),(0,l.kt)("h4",{id:"usage-example"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"newHotkey = {\n  name: <name-of hotkey>,\n  gameid: <only use if applicable>,\n  virtualKey: 75,\n  modifiers: {\n    ctrl: true //shift\n  }\n};\noverwolf.settings.hotkeys.assign(newHotkey, console.log)\n")),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"The virtualKey is an integer representation of the ",(0,l.kt)("strong",{parentName:"p"},"key"),", not the ",(0,l.kt)("strong",{parentName:"p"},"character"),", and as such, it corresponds to the ",(0,l.kt)("inlineCode",{parentName:"p"},"keyDown")," event. You can read more about it ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/3396805"},"here"),".")),(0,l.kt)("h2",{id:"unassignhotkey-callback"},"unassign(hotkey, callback)"),(0,l.kt)("h4",{id:"version-added-0160-1"},"Version added: 0.160"),(0,l.kt)("h4",{id:"permissions-required-hotkeys-2"},"Permissions required: Hotkeys"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unassign global hotkey for the current extension, OR, if a gameId is specified, assign/unassign a dedicated hotkey.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hotkey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#unassignhotkeyobject-object"},"UnassignHotkeyObject")," object"),(0,l.kt)("td",{parentName:"tr",align:null},"The hotkey to unassign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Reports success or failure")))),(0,l.kt)("h4",{id:"usage-example-1"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hotkey = {\n  name: <name-of hotkey>,\n  gameid: <only use if applicable>\n};\noverwolf.settings.hotkeys.unassign(hotkey, console.log)\n")),(0,l.kt)("h2",{id:"getcallback"},"get(callback)"),(0,l.kt)("h4",{id:"version-added-0142"},"Version added: 0.142"),(0,l.kt)("h4",{id:"permissions-required-hotkeys-3"},"Permissions required: Hotkeys"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the hotkeys assigned for ",(0,l.kt)("strong",{parentName:"p"},"the current App")," in all the games.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result: ",(0,l.kt)("a",{parentName:"td",href:"#getassignedhotkeyresult-object"},"GetAssignedHotkeyResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback receiving the result of the operation")))),(0,l.kt)("h2",{id:"getallappscallback"},"getAllApps(callback)"),(0,l.kt)("h4",{id:"version-added-0236"},"Version added: 0.236"),(0,l.kt)("h4",{id:"permissions-required-hotkeys-4"},"Permissions required: Hotkeys"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the hotkeys assigned for ",(0,l.kt)("strong",{parentName:"p"},"all Apps + the Overwolf Platform")," in all the games.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result: ",(0,l.kt)("a",{parentName:"td",href:"#getallassignedhotkeysresult-object"},"GetAllAssignedHotkeysResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback receiving the result of the operation")))),(0,l.kt)("h2",{id:"onhold"},"onHold"),(0,l.kt)("h4",{id:"version-added-0142-1"},"Version added: 0.142"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired only for hotkeys that are set in the manifest as ",(0,l.kt)("inlineCode",{parentName:"p"},"hold"),", with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#onholdevent-object"},"onHold")," Object")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Triggered only for the current extension hotkeys."),(0,l.kt)("li",{parentName:"ul"},"This event will be fired twice - on key down and on key up.")),(0,l.kt)("h2",{id:"onpressed"},"onPressed"),(0,l.kt)("h4",{id:"version-added-0142-2"},"Version added: 0.142"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired for hotkeys that are NOT set as hold hotkeys, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#onpressedevent-object"},"OnPressedEvent")," Object")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Triggered only for the current extension hotkeys."),(0,l.kt)("li",{parentName:"ul"},"This event will replace the deprecated ",(0,l.kt)("a",{parentName:"li",href:"../settings#registerhotkeyactionid-callback"},"overwolf.settings.registerHotKey()")," function, as a way to register for hotkey events.")),(0,l.kt)("h2",{id:"onchanged"},"OnChanged"),(0,l.kt)("h4",{id:"version-added-0142-3"},"Version added: 0.142"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired on hotkey setting change, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"#onchangedevent-object"},"OnChangedEvent")," Object")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Triggered only for the current extension hotkeys."),(0,l.kt)("li",{parentName:"ul"},"Listen to this event if you want to get notified when the user changed your app hotkeys from the OW client settings page.")),(0,l.kt)("h2",{id:"ihotkey-object"},"IHotkey Object"),(0,l.kt)("h4",{id:"version-added-0142-4"},"Version added: 0.142"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for hotkey properties.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"virtualKeycode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modifierKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extensionuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPassthrough"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customModifierKeyCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hold"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsUnassigned"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binding"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"example-data"},"Example data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "binding":"Ctrl+F3",\n    "name":"shots_fired_toggle_visibility",\n    "title":"Show In-Game",\n    "virtualKeycode":114, //F3\n    "modifierKeys":2, //Ctrl\n    "binding": "Ctrl+F3",\n    "extension-uid":"jdecmlblpoddjcmpdbhnefehffjfcjeijpkebedd",\n    "isPassthrough":false,\n    "hold":false,\n    "IsUnassigned":false\n}\n')),(0,l.kt)("h2",{id:"getassignedhotkeyresult-object"},"GetAssignedHotkeyResult Object"),(0,l.kt)("h4",{id:"version-added-0142-5"},"Version added: 0.142"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for the assigned hotkeys.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object. null if success is true')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ihotkey-object"},"IHotkey"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"games"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callback-example"},"Callback example"),(0,l.kt)("p",null,"In the following example, we can see a callback example of an extension that set the same hotkeys (Ctrl + F3) for PUBG and Legends of Runeterra. Of course, you can set different hotkeys for different games."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'}\n    "success":true,\n    "globals":[], //see the next example for more details on this array\n    "games":{\n        "10906":[  //PUBG\n        {\n            "binding":"Ctrl+F3",\n            "name":"shots_fired_toggle_visibility",\n            "title":"Show In-Game",\n            "virtualKeycode":114, //F3\n            "modifierKeys":2, //Ctrl\n            "binding": "Ctrl+F3",\n            "extension-uid":"jdecmlblpoddjcmpdbhnefehffjfcjeijpkebedd",\n            "isPassthrough":false,\n            "hold":false,\n            "IsUnassigned":false\n        }\n        ],\n        "21620":[ // Legends of Runeterra\n        {\n            "binding":"Ctrl+F3",\n            "name":"shots_fired_toggle_visibility",\n            "title":"Show In-Game",\n            "virtualKeycode":114, //F3\n            "modifierKeys":2, //Ctrl\n            "binding": "Ctrl+F3",\n            "extension-uid":"jdecmlblpoddjcmpdbhnefehffjfcjeijpkebedd",\n            "isPassthrough":false,\n            "hold":false,\n            "IsUnassigned":false\n        }\n        ]\n    }\n}\n')),(0,l.kt)("h4",{id:"notes-2"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "binding" field that the callback returns gives you a human-readable hotkey name. ("Ctrl+F3" for example)'),(0,l.kt)("li",{parentName:"ul"},"The callback returns a virtualKeycode and a modifierKey code. You can convert these values easily to a string using the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.modifierkeys"},"MS ModifierKeys Enum")," and the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/uwp/api/windows.system.virtualkey"},"MS VirtualKey Enum"),"."),(0,l.kt)("li",{parentName:"ul"},"If several modifier keys are assigned (like Ctrl + Shift), the ",(0,l.kt)("inlineCode",{parentName:"li"},"modifierKeys")," is the sum of all the modifier values (e.g. Alt + Shift would be 5)")),(0,l.kt)("h4",{id:"callback-example-with-global-hotkeys"},"Callback example with global hotkeys"),(0,l.kt)("p",null,"For extensions that target more than one game (global apps), there is an option that available in the OW client UI, to set an extension hotkey as ",(0,l.kt)("inlineCode",{parentName:"p"},"global"),".",(0,l.kt)("br",{parentName:"p"}),"\n","Read more about global hotkeys ",(0,l.kt)("a",{parentName:"p",href:"/topics/best-practices/hotkeys-best-practices#global-hotkeys"},"here"),".  "),(0,l.kt)("p",null,"On the following example, you can see that the current extension set ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + F5")," as a global hotkey for all the installed games: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "success":true,\n    "globals":[ \n    { \n         "binding":"Ctrl+F3",\n         "name":"toggle_app",\n         "title":"Show/Hide Buff window",\n         "virtualKeycode":116, //F5\n         "modifierKeys":4, //Shift\n         "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",\n         "isPassthrough":false,\n         "hold":false,\n         "IsUnassigned":false\n    }\n    ]\n}\n')),(0,l.kt)("p",null,"On the following example, you can see that the current extension set ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + F5"),' as a global hotkey for all the installed games,except "League of Legends", which set with ',(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl +D"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "success":true,\n    "globals":[ \n    { \n         "binding":"Ctrl+F3",\n         "name":"toggle_app",\n         "title":"Show/Hide Buff window",\n         "virtualKeycode":116, //F5\n         "modifierKeys":4, //Shift\n         "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",\n         "isPassthrough":false,\n         "hold":false,\n         "IsUnassigned":false\n    }\n    ],\n    "games":{ \n        "5426":[ \n        { \n            "binding":"Ctrl+F3",\n            "name":"toggle_app",\n            "title":"Show/Hide Buff window",\n            "virtualKeycode":68, //D\n            "modifierKeys":2, //Ctrl\n            "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",\n            "isPassthrough":false,\n            "hold":false,\n            "IsUnassigned":false\n        }\n        ]\n    }\n}\n')),(0,l.kt)("h2",{id:"getallassignedhotkeysresult-object"},"GetAllAssignedHotkeysResult Object"),(0,l.kt)("h4",{id:"version-added-0236-1"},"Version added: 0.236"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for the assigned hotkeys.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object. null if success is true')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"{ ","[appID: string]",": ",(0,l.kt)("a",{parentName:"td",href:"#getassignedhotkeyresult-object"},"GetAssignedHotkeyResult")," }"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ihotkey-object"},"IHotkey"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"onholdevent-object"},"OnHoldEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},'string ("down"/"up\')'),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example"},"Event data example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name": "ges_showhide", "state": "down"}\n')),(0,l.kt)("h2",{id:"onpressedevent-object"},"OnPressedEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-1"},"Event data example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"name": "ges_showhide", "state": "down"}\n')),(0,l.kt)("h2",{id:"onchangedevent-object"},"OnChangedEvent Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binding"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"event-data-example-2"},"Event data example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n   "name":"toggle_app",\n   "gameId":10906,\n   "description":"Buff Achievement Tracker: Show/Hide Buff window",\n   "binding":"Shift+F4" //the new hotkey\n}\n')),(0,l.kt)("h2",{id:"updatehotkeyobject-object"},"UpdateHotkeyObject Object"),(0,l.kt)("h4",{id:"version-added-0208-1"},"Version added: 0.208"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for updated hotkey properties.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the hotkey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional id of the game the hotkey is for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customModifierKeyCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional code for the optional custom modifier key used for this key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPassThrough"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional new value for whether or not the keybind should allow passthrough")))),(0,l.kt)("h2",{id:"assignhotkeyobject-object"},"AssignHotkeyObject Object"),(0,l.kt)("h4",{id:"version-added-0160-2"},"Version added: 0.160"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for assigned hotkey properties.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modifiers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#hotkeymodifiers-object"},"HotkeyModifiers")," object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"virtualKey"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"unassignhotkeyobject-object"},"UnassignHotkeyObject Object"),(0,l.kt)("h4",{id:"version-added-0160-3"},"Version added: 0.160"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for unassigned hotkey properties.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameId (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"hotkeymodifiers-object"},"HotkeyModifiers Object"),(0,l.kt)("h4",{id:"version-added-0160-4"},"Version added: 0.160"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for hotkey modifiers.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ctrl"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alt"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shift"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);