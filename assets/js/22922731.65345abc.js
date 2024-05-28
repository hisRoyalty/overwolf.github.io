"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1603],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const l={id:"current",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.current API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"api/extensions/current",id:"api/extensions/current",title:"overwolf.extensions.current API",description:"A set of functions providing more information and utilities for the current extension.",source:"@site/../pages/api/extensions/current.mdx",sourceDirName:"api/extensions",slug:"/api/extensions/current",permalink:"/api/extensions/current",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/extensions/current.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1716908210,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"current",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.current API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.extensions API",permalink:"/api/extensions/"},next:{title:"overwolf.extensions.io API",permalink:"/api/extensions/io"}},o={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getExtraObject(name, callback)",id:"getextraobjectname-callback",level:2},{value:"Version added: 0.80",id:"version-added-080",level:4},{value:"getManifest(callback)",id:"getmanifestcallback",level:2},{value:"Version added: 0.80",id:"version-added-080-1",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"getPhasedPercent(callback, version)",id:"getphasedpercentcallback-version",level:2},{value:"Version added: 0.236",id:"version-added-0236",level:4},{value:"generateUserEmailHashes(email, callback)",id:"generateuseremailhashesemail-callback",level:2},{value:"Version added: 0.240",id:"version-added-0240",level:4},{value:"setUserEmailHashes(hashes, callback)",id:"setuseremailhasheshashes-callback",level:2},{value:"Version added: 0.240",id:"version-added-0240-1",level:4},{value:"GetExtraObjectResult Object",id:"getextraobjectresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetManifestResult Object",id:"getmanifestresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"GetPhasedPercentResult Object",id:"getphasedpercentresult-object",level:2},{value:"UserEmailHashes Object",id:"useremailhashes-object",level:2},{value:"Version added: 0.240",id:"version-added-0240-2",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A set of functions providing more information and utilities for the current extension."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getextraobjectname-callback"},"overwolf.extensions.current.getExtraObject()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getmanifestcallback"},"overwolf.extensions.current.getManifest()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getphasedpercentcallback-version"},"overwolf.extensions.current.getPhasedPercent()"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generateuseremailhashesemail-callback"},"overwolf.extensions.current.generateUserEmailHashes()"),":"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generateuseremailhasheshashes-callback"},"overwolf.extensions.current.setUserEmailHashes()"),":")),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getextraobjectresult-object"},"overwolf.extensions.current.GetExtraObjectResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getmanifestresult-object"},"overwolf.extensions.current.GetManifestResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getphasedpercentresult-object"},"overwolf.extensions.current.GetPhasedPercentResult")," Object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#useremailhashes-object"},"overwolf.extensions.current.UserEmailHashes")," Object")),(0,r.kt)("h2",{id:"getextraobjectname-callback"},"getExtraObject(name, callback)"),(0,r.kt)("h4",{id:"version-added-080"},"Version added: 0.80"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Retrieves an extra object (providing external APIs) registered in the extension\u2019s manifest.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the object as it appears in the manifest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getextraobjectresult-object"},"Result: GetExtraObjectResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the request")))),(0,r.kt)("h2",{id:"getmanifestcallback"},"getManifest(callback)"),(0,r.kt)("h4",{id:"version-added-080-1"},"Version added: 0.80"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the current extension\u2019s manifest object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getmanifestresult-object"},"Result: GetManifestResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the request")))),(0,r.kt)("h4",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"Get app version from the manifest and print it to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"overwolf.extensions.current.getManifest(function(app){console.log(app.meta.version)})\n")),(0,r.kt)("h2",{id:"getphasedpercentcallback-version"},"getPhasedPercent(callback, version)"),(0,r.kt)("h4",{id:"version-added-0236"},"Version added: 0.236"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the current extension\u2019s phasing percentage.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getphasedpercentresult-object"},"Result: GetPhasedPercentResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string?"),(0,r.kt)("td",{parentName:"tr",align:null},"The version to calculate the phasing percentage for (defaults to the current 'base' version)")))),(0,r.kt)("h2",{id:"generateuseremailhashesemail-callback"},"generateUserEmailHashes(email, callback)"),(0,r.kt)("h4",{id:"version-added-0240"},"Version added: 0.240"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Generates and configures a user's ",(0,r.kt)("a",{parentName:"p",href:"/start/monetize-your-app/experimental/user-identity"},"email hashes")," persistently directly from the raw email.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result: Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the operation")))),(0,r.kt)("h2",{id:"setuseremailhasheshashes-callback"},"setUserEmailHashes(hashes, callback)"),(0,r.kt)("h4",{id:"version-added-0240-1"},"Version added: 0.240"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Configures a user's ",(0,r.kt)("a",{parentName:"p",href:"/start/monetize-your-app/experimental/user-identity"},"email hashes")," persistently from pre-configured email hashes.")),(0,r.kt)("admonition",{title:"Deleting email hashes",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To delete the configured Email hashes, simply pass in an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"hashes")," object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hashes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#useremailhashes-object"},"UserEmailHashes")),(0,r.kt)("td",{parentName:"tr",align:null},"The different hashes of the user's email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result: Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the operation")))),(0,r.kt)("h2",{id:"getextraobjectresult-object"},"GetExtraObjectResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"the extra object if found")))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,r.kt)("h2",{id:"getmanifestresult-object"},"GetManifestResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"the manifest info")))),(0,r.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,r.kt)("p",null,"A callback function which will be called with the status of the request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version": 1,\n    "type": "WebApp",\n    "meta": {\n        "name": "App Name",\n        "version": "1.0.0.0",\n        "minimum-overwolf-version": "0.92.21.0",\n        "author": "Author",\n        "icon": "icon.png",\n        "icon_gray": "icon_gray.png",\n        "description": ""\n    },\n    "permissions": [\n        "Extensions",\n        "Hotkeys",\n        "GameInfo",\n        "GameControl",\n        "FileSystem"\n    ],\n    "channel-id": 0,\n    "dependencies": null,\n    "data": {\n        "externally_connectable": {\n            "matches": [\n                "http://*.overwolf.com",\n                "http://overwolf.com"\n            ]\n        },\n        "protocol_override_domains": null,\n        "force_browser": "NotSet",\n        "plugins": [\n            "npSimpleIOPlugin.dll"\n        ],\n        "game_events": null,\n        "extra-objects": null,\n        "hotkeys": null,\n        "content_scripts": null,\n        "launch_events": [\n            {\n                "event": 1,\n                "event_data": {\n                    "game_ids": null,\n                    "wait_for_stable_framerate": null\n                },\n                "start_minimized": true\n            }\n        ],\n        "user_agent": null,\n        "windows": {\n            "index": {\n                "file": "index.html",\n                "show_in_taskbar": true,\n                "transparent": true,\n                "resizable": false,\n                "show_minimize": true,\n                "clickthrough": false,\n                "disable_rightclick": false,\n                "forcecapture": false,\n                "show_only_on_stream": false,\n                "ignore_keyboard_events": false,\n                "in_game_only": false,\n                "desktop_only": false,\n                "disable_restore_animation": false,\n                "grab_keyboard_focus": false,\n                "size": {\n                    "width": 910,\n                    "height": 560\n                },\n                "start_position": {\n                    "top": 10,\n                    "left": 10\n                },\n                "topmost": false\n            }\n        },\n        "start_window": "index"\n    }\n}\n')),(0,r.kt)("h2",{id:"getphasedpercentresult-object"},"GetPhasedPercentResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phasedPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The phased percentage")))),(0,r.kt)("h2",{id:"useremailhashes-object"},"UserEmailHashes Object"),(0,r.kt)("h3",{id:"version-added-0240-2"},"Version added: 0.240"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An object containing different hash patterns of a relevant user's ",(0,r.kt)("a",{parentName:"p",href:"/start/monetize-your-app/experimental/user-identity"},"hashed email"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("inlineCode",{parentName:"td"},"SHA1")," hash of the email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA256"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("inlineCode",{parentName:"td"},"SHA256")," hash of the email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MD5"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("inlineCode",{parentName:"td"},"MD5")," hash of the email address")))))}m.isMDXComponent=!0}}]);