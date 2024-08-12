"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5560],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(25773),r=(a(27378),a(35318));const i={id:"benchmarking",image:"/img/embed/deprecated.jpg",title:"overwolf.benchmarking API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,o={unversionedId:"api/deprecated/benchmarking",id:"api/deprecated/benchmarking",title:"overwolf.benchmarking API",description:"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.",source:"@site/../pages/api/deprecated/benchmarking.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/benchmarking",permalink:"/api/deprecated/benchmarking",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/deprecated/benchmarking.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"benchmarking",image:"/img/embed/deprecated.jpg",title:"overwolf.benchmarking API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.media.audio API",permalink:"/api/deprecated/audio"},next:{title:"overwolf.social.gfycat API",permalink:"/api/deprecated/gfycat"}},s={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"requestHardwareInfo(interval, callback)",id:"requesthardwareinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Usage",id:"usage",level:4},{value:"Example data",id:"example-data",level:4},{value:"requestProcessInfo(interval, callback)",id:"requestprocessinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"requestFpsInfo(interval, callback)",id:"requestfpsinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"Example data",id:"example-data-2",level:4},{value:"stopRequesting()",id:"stoprequesting",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"requestPermissions(callback)",id:"requestpermissionscallback",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4},{value:"More info",id:"more-info",level:4},{value:"onHardwareInfoReady",id:"onhardwareinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-5",level:4},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"onProcessInfoReady",id:"onprocessinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-6",level:4},{value:"Event data example: Success",id:"event-data-example-success-1",level:4},{value:"onFpsInfoReady",id:"onfpsinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-7",level:4},{value:"Event data example: Success",id:"event-data-example-success-2",level:4}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"OBSOLETE",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.  ")),(0,r.kt)("p",null,"This is a set of functions for querying system stats and benchmarks. These calls require administrative permissions, which the user may be prompted to grant with a UAC message which may interrupt him while playing. In order to avoid interruptions, it is recommended to ask before requesting permissions."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requesthardwareinfointerval-callback"},"overwolf.benchmarking.requestHardwareInfo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requestprocessinfointerval-callback"},"overwolf.benchmarking.requestProcessInfo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requestfpsinfointerval-callback"},"overwolf.benchmarking.requestFpsInfo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stoprequesting"},"overwolf.benchmarking.stopRequesting()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requestpermissionscallback"},"overwolf.benchmarking.requestPermissions()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onhardwareinfoready"},"overwolf.benchmarking.onHardwareInfoReady")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onprocessinfoready"},"overwolf.benchmarking.onProcessInfoReady")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onfpsinfoready"},"overwolf.benchmarking.onFpsInfoReady"))),(0,r.kt)("h2",{id:"requesthardwareinfointerval-callback"},"requestHardwareInfo(interval, callback)"),(0,r.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requests hardware information within a given interval.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Before calling this function, you should subscribe to the ",(0,r.kt)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event.",(0,r.kt)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestHardwareInfo interval."),(0,r.kt)("p",null,"When you want to stop receiving the information, please call ",(0,r.kt)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.kt)("h4",{id:"example-data"},"Example data"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event."),(0,r.kt)("h2",{id:"requestprocessinfointerval-callback"},"requestProcessInfo(interval, callback)"),(0,r.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requests process information within a given interval. ")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Before calling this function, you should subscribe to the ",(0,r.kt)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event.",(0,r.kt)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestProcessInfo interval."),(0,r.kt)("p",null,"When you want to stop receiving the information, please call ",(0,r.kt)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.kt)("h4",{id:"example-data-1"},"Example data"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event."),(0,r.kt)("h2",{id:"requestfpsinfointerval-callback"},"requestFpsInfo(interval, callback)"),(0,r.kt)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requests game FPS information within a given interval. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("p",null,"Before calling this function, you should subscribe to the ",(0,r.kt)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event.",(0,r.kt)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestFpsInfo interval."),(0,r.kt)("p",null,"When you want to stop receiving the information, please call ",(0,r.kt)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,r.kt)("h4",{id:"example-data-2"},"Example data"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event."),(0,r.kt)("h2",{id:"stoprequesting"},"stopRequesting()"),(0,r.kt)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stop receiving hardware/process events.")),(0,r.kt)("p",null,"Use this when you no longer want to receive events or when you close your app."),(0,r.kt)("h2",{id:"requestpermissionscallback"},"requestPermissions(callback)"),(0,r.kt)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In case Overwolf requires administrative permissions, and after prompting the user to grant more permissions, call this function and then request your desired benchmarking information.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"more-info"},"More info"),(0,r.kt)("p",null,"Note that the some functions in the benchmarking API requires Overwolf to have Administrative permissions, and should they be missing, the callback will return 'Permissions Required'.  "),(0,r.kt)("p",null,"You will then have to ask the app user for permissions and according to the user\u2019s choice, call ",(0,r.kt)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions"),". "),(0,r.kt)("p",null,"It is then necessary to call the requested function (for example, requestProcessInfo) again."),(0,r.kt)("h2",{id:"onhardwareinfoready"},"onHardwareInfoReady"),(0,r.kt)("h4",{id:"version-added-078-5"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when hardware information is ready with a JSON containing the information.")),(0,r.kt)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"General": {\n    "PowerPlan": "Balanced"\n},\n"Mainboard": {\n    "Name": "ASUS P8H61-M",\n    "Voltages": [{\n                "Name": "CPU VCore",\n                "Value": 0.968,\n...\n')),(0,r.kt)("h2",{id:"onprocessinfoready"},"onProcessInfoReady"),(0,r.kt)("h4",{id:"version-added-078-6"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when process information is ready with a JSON containing the information.")),(0,r.kt)("h4",{id:"event-data-example-success-1"},"Event data example: Success"),(0,r.kt)("p",null,"The event returns the top ten processes in terms of CPU usage and Memory usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TopCpuUsage": [\n        {\n            "PrivateWorkingSet": 17674240,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 6988,\n            "Name": "OverwolfBrowser#3"\n        },\n        {\n            "PrivateWorkingSet": 16150528,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 8216,\n            "Name": "OverwolfBenchmarking"\n        },\n        ...\n    ],\n    "TopMemoryUsage": [\n        {\n            "PrivateWorkingSet": 611196928,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 5484,\n            "Name": "firefox"\n        },\n        {\n            "PrivateWorkingSet": 141586432,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 596,\n            "Name": "Overwolf"\n        },\n        ...\n    ]\n}\n')),(0,r.kt)("h2",{id:"onfpsinfoready"},"onFpsInfoReady"),(0,r.kt)("h4",{id:"version-added-078-7"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when FPS information is ready with a JSON containing the information.")),(0,r.kt)("h4",{id:"event-data-example-success-2"},"Event data example: Success"),(0,r.kt)("p",null,"If you are in a game:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "Fps": 61 \n}\n')),(0,r.kt)("p",null,"If you are not in a game:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Fps":"Not in a game"\n}\n')))}u.isMDXComponent=!0}}]);