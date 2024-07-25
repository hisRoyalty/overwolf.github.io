"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7094],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const l={id:"tray",image:"/img/embed/api-docs.jpg",title:"overwolf.os.tray API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/os/tray",id:"api/os/tray",title:"overwolf.os.tray API",description:"Use this API for windows system tray related functionalities.",source:"@site/../pages/api/os/tray.mdx",sourceDirName:"api/os",slug:"/api/os/tray",permalink:"/api/os/tray",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/os/tray.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721917552,formattedLastUpdatedAt:"Jul 25, 2024",frontMatter:{id:"tray",image:"/img/embed/api-docs.jpg",title:"overwolf.os.tray API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.os API",permalink:"/api/os/"},next:{title:"overwolf.profile API",permalink:"/api/profile/"}},d={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"setMenu(menu, callback)",id:"setmenumenu-callback",level:2},{value:"Version added: 0.131",id:"version-added-0131",level:4},{value:"Permissions required: Tray",id:"permissions-required-tray",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"Notes",id:"notes",level:4},{value:"changeIcon(path, callback)",id:"changeiconpath-callback",level:2},{value:"Version added: 0.208",id:"version-added-0208",level:4},{value:"changeIcon(space, path, callback)",id:"changeiconspace-path-callback",level:2},{value:"Version added: 0.208",id:"version-added-0208-1",level:4},{value:"restoreIcon(callback)",id:"restoreiconcallback",level:2},{value:"Version added: 0.208",id:"version-added-0208-2",level:4},{value:"destroy()",id:"destroy",level:2},{value:"Version added: 0.173",id:"version-added-0173",level:4},{value:"Permissions required: Tray",id:"permissions-required-tray-1",level:4},{value:"ExtensionTrayMenu Object",id:"extensiontraymenu-object",level:2},{value:"menu_item Object",id:"menu_item-object",level:2},{value:"onMenuItemClicked",id:"onmenuitemclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-1",level:4},{value:"Event data example",id:"event-data-example",level:4},{value:"onTrayIconClicked",id:"ontrayiconclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-2",level:4},{value:"onTrayIconDoubleClicked",id:"ontrayicondoubleclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-3",level:4},{value:"onMenuItemClickedEvent Object",id:"onmenuitemclickedevent-object",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API for windows system tray related functionalities."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setmenumenu-callback"},"overwolf.os.tray.setMenu()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#changeiconpath-callback"},"overwolf.os.tray.changeIcon()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#changeiconspace-path-callback"},"overwolf.os.tray.changeIcon()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#restoreiconcallback"},"overwolf.os.tray.restoreIcon()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#destroy"},"overwolf.os.tray.destroy()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onmenuitemclicked"},"overwolf.os.tray.onMenuItemClicked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ontrayiconclicked"},"overwolf.os.tray.onTrayIconClicked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ontrayicondoubleclicked"},"overwolf.os.tray.onTrayIconDoubleClicked"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#extensiontraymenu-object"},"ExtensionTrayMenu")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onmenuitemclickedevent-object"},"overwolf.os.tray.onMenuItemClickedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#menu_item-object"},"overwolf.os.tray.menu_item")," Object")),(0,r.kt)("h2",{id:"setmenumenu-callback"},"setMenu(menu, callback)"),(0,r.kt)("h4",{id:"version-added-0131"},"Version added: 0.131"),(0,r.kt)("h4",{id:"permissions-required-tray"},"Permissions required: Tray"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Create a tray icon for the calling extension with the supplied context menu object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"menu"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#extensiontraymenu-object"},"ExtensionTrayMenu")," object"),(0,r.kt)("td",{parentName:"tr",align:null},"The menu object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const trayMenu = {\n    "menu_items": [{\n            "label": "View main window",\n            "id": "view_window"\n        }\n    ]\n}\n\noverwolf.os.tray.setMenu(trayMenu, (res) => {\n    console.log("setMenu -> res", res) \n});\n')),(0,r.kt)("h4",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"../manifest#meta-launcher_icon"},"launcher_icon")," must be set in the manifest."),(0,r.kt)("li",{parentName:"ul"},"Calling setMenu() is mandatory to get a tray icon.")),(0,r.kt)("h2",{id:"changeiconpath-callback"},"changeIcon(path, callback)"),(0,r.kt)("h4",{id:"version-added-0208"},"Version added: 0.208"),(0,r.kt)("admonition",{title:"Requires an app menu",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"An app's tray icon cannot be changed before it has one. You must call ",(0,r.kt)("a",{parentName:"p",href:"#setmenumenu-callback"},"overwolf.os.tray.setMenu()")," before you can use this method!")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Changes the tray icon for the app temporarily.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Path for the new tray icon, relative to the app's install directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result of the operation")))),(0,r.kt)("h2",{id:"changeiconspace-path-callback"},"changeIcon(space, path, callback)"),(0,r.kt)("h4",{id:"version-added-0208-1"},"Version added: 0.208"),(0,r.kt)("admonition",{title:"Requires an app menu",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"An app's tray icon cannot be changed before it has one. You must call ",(0,r.kt)("a",{parentName:"p",href:"#setmenumenu-callback"},"overwolf.os.tray.setMenu()")," before you can use this method!")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Changes the tray icon for the app temporarily, using a ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions/io#storagespace-enum"},"StorageSpace")," enum.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"space"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/extensions/io#storagespace-enum"},"StorageSpace")," enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Space to look for the new icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Path for the new tray icon, relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"space"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result of the operation")))),(0,r.kt)("h2",{id:"restoreiconcallback"},"restoreIcon(callback)"),(0,r.kt)("h4",{id:"version-added-0208-2"},"Version added: 0.208"),(0,r.kt)("admonition",{title:"Requires an app menu",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"An app's tray icon cannot be changed before it has one. You must call ",(0,r.kt)("a",{parentName:"p",href:"#setmenumenu-callback"},"overwolf.os.tray.setMenu()")," before you can use this method!")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reverts the temporariy app tray icon back to the manifest-defined ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#meta-tray_icon"},(0,r.kt)("inlineCode",{parentName:"a"},"tray_icon")),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result of the operation")))),(0,r.kt)("h2",{id:"destroy"},"destroy()"),(0,r.kt)("h4",{id:"version-added-0173"},"Version added: 0.173"),(0,r.kt)("h4",{id:"permissions-required-tray-1"},"Permissions required: Tray"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Destroys the tray icon immediately.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"no params")))),(0,r.kt)("h2",{id:"extensiontraymenu-object"},"ExtensionTrayMenu Object"),(0,r.kt)("p",null,"A container object for a menu."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"menu_items"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#menu_item-object"},"menu_item"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"array of menu items")))),(0,r.kt)("p",null,"An example for a menu with sub items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "menu_items": [{\n            "label": "View main window",\n            "id": "view_window"\n        },\n        {\n            "label": "More...",\n            "enabled": true,\n            "sub_items": [{\n                "label": "Version 1.0.0",\n                "id": "more_version",\n                "enabled": false\n            }]\n        },\n        {\n            "label": "-"\n        },\n        {\n            "label": "Visit website",\n            "id": "more_website"\n        }\n\n    ]\n}\n')),(0,r.kt)("h2",{id:"menu_item-object"},"menu_item Object"),(0,r.kt)("p",null,"A container object for a menu item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'must be set for items without "sub_items". (Separators and items with sub_items don\'t need ids)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'in order to create a separator, use the label "-"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"set to true by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sub_items"),(0,r.kt)("td",{parentName:"tr",align:null},"menu_item[]"),(0,r.kt)("td",{parentName:"tr",align:null},"you can nest an array of menu items under this item")))),(0,r.kt)("p",null,"An example of a menu objects with sub items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "label": "More...",\n    "enabled": true,\n    "sub_items": [{\n        "label": "Version 1.0.0",\n        "id": "more_version",\n        "enabled": false\n    }]\n}\n')),(0,r.kt)("h2",{id:"onmenuitemclicked"},"onMenuItemClicked"),(0,r.kt)("h4",{id:"version-added-0131-1"},"Version added: 0.131"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when an item from the tray icon\u2019s context menu is selected, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#onmenuitemclickedevent-object"},"onMenuItemClickedEvent")," Object")),(0,r.kt)("h4",{id:"event-data-example"},"Event data example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "item": "id" }\n')),(0,r.kt)("h2",{id:"ontrayiconclicked"},"onTrayIconClicked"),(0,r.kt)("h4",{id:"version-added-0131-2"},"Version added: 0.131"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when the tray icon is left clicked.")),(0,r.kt)("h2",{id:"ontrayicondoubleclicked"},"onTrayIconDoubleClicked"),(0,r.kt)("h4",{id:"version-added-0131-3"},"Version added: 0.131"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when the tray icon is double clicked.")),(0,r.kt)("h2",{id:"onmenuitemclickedevent-object"},"onMenuItemClickedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);