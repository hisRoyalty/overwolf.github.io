"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8909],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||n;return a?l.createElement(m,d(d({ref:t},p),{},{components:a})):l.createElement(m,d({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,d=new Array(n);d[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,d[1]=i;for(var s=2;s<n;s++)d[s]=a[s];return l.createElement.apply(null,d)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},60540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var l=a(25773),r=(a(27378),a(35318));const n={id:"social",image:"/img/embed/api-docs.jpg",title:"overwolf.social API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},d=void 0,i={unversionedId:"api/social/social",id:"api/social/social",title:"overwolf.social API",description:"Provides sharing services to different social networks like Reddit, Twitter, etc. and also information about the currently disabled services.",source:"@site/../pages/api/social/social.mdx",sourceDirName:"api/social",slug:"/api/social/",permalink:"/api/social/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/social/social.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723025347,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{id:"social",image:"/img/embed/api-docs.jpg",title:"overwolf.social API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.settings.language API",permalink:"/api/settings/language"},next:{title:"overwolf.social.discord API",permalink:"/api/social/discord"}},o={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getDisabledServices(callback)",id:"getdisabledservicescallback",level:2},{value:"Version added: 0.126",id:"version-added-0126",level:4},{value:"uploadVideo(VideoUploadParams, callback, callback)",id:"uploadvideovideouploadparams-callback-callback",level:2},{value:"Version added: 0.203",id:"version-added-0203",level:4},{value:"cancelUpload(string, callback)",id:"canceluploadstring-callback",level:2},{value:"Version added: 0.203",id:"version-added-0203-1",level:4},{value:"VideoUploadParams Object",id:"videouploadparams-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-2",level:4},{value:"id note",id:"id-note",level:4},{value:"VideoUploadResult Object",id:"videouploadresult-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-3",level:4},{value:"VideoUploadProgress Object",id:"videouploadprogress-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-4",level:4},{value:"Example data",id:"example-data",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.203",id:"version-added-0203-5",level:4},{value:"GetDisabledServicesResult Object",id:"getdisabledservicesresult-object",level:2},{value:"Version added: 0.126",id:"version-added-0126-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"GetUserInfoResult Object",id:"getuserinforesult-object",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"Example data: Reddit / Youtube / Twitter",id:"example-data-reddit--youtube--twitter",level:4},{value:"Example data: Discord user",id:"example-data-discord-user",level:4},{value:"LoginStateChangedEvent Object",id:"loginstatechangedevent-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-1",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4},{value:"LoginState enum",id:"loginstate-enum",level:2},{value:"Version added: 0.128",id:"version-added-0128-2",level:4}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides sharing services to different social networks like Reddit, Twitter, etc. and also information about the currently disabled services."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getdisabledservicescallback"},"overwolf.social.getDisabledServices()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#uploadvideovideouploadparams-callback-callback"},"overwolf.social.uploadVideo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#canceluploadstring-callback"},"overwolf.social.cancelUpload()"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getDisabledServicesResult-object"},"GetDisabledServicesResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getuserinforesult-object"},"GetUserInfoResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#videouploadparams-object"},"overwolf.social.VideoUploadParams")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#videouploadresult-object"},"overwolf.social.VideoUploadResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#videouploadprogress-object"},"overwolf.social.VideoUploadProgress")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#loginstate-enum"},"overwolf.social.LoginState")," enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#loginstatechangedevent-object"},"overwolf.social.LoginStateChangedEvent")," Object\t\t")),(0,r.kt)("h2",{id:"getdisabledservicescallback"},"getDisabledServices(callback)"),(0,r.kt)("h4",{id:"version-added-0126"},"Version added: 0.126"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Checks which of the supported sharing services are disabled or enabled.")),(0,r.kt)("p",null,"Note: You can\u2019t disable or enable sharing service from your app. It\u2019s done from the Overwolf servers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getdisabledservicesresult-object"},"(Result: GetDisabledServicesResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"returns a list of disabled services")))),(0,r.kt)("h2",{id:"uploadvideovideouploadparams-callback-callback"},"uploadVideo(VideoUploadParams, callback, callback)"),(0,r.kt)("h4",{id:"version-added-0203"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Upload a video to the buffer server.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uploadParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#videouploadparams-object"},"VideoUploadParams")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for the video being uploaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resultCallback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#videouploadresult-object"},"(Result: VideoUploadResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"progressCallback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#videouploadprogress-object"},"(Result: VideoUploadProgress)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called whenever upload progress is made")))),(0,r.kt)("h2",{id:"canceluploadstring-callback"},"cancelUpload(string, callback)"),(0,r.kt)("h4",{id:"version-added-0203-1"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cancels an upload to the buffer server mid-way.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The request ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,r.kt)("h2",{id:"videouploadparams-object"},"VideoUploadParams Object"),(0,r.kt)("h4",{id:"version-added-0203-2"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This object defines all parameters that should be passed to the ",(0,r.kt)("a",{parentName:"p",href:"#canceluploadstring-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.cancelUpload()")),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID for the current upload. See ",(0,r.kt)("a",{parentName:"td",href:"#id-note"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to the file to upload")))),(0,r.kt)("h4",{id:"id-note"},"id note"),(0,r.kt)("p",null,"When calling ",(0,r.kt)("a",{parentName:"p",href:"#uploadvideovideouploadparams-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.uploadVideo()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,r.kt)("a",{parentName:"p",href:"#canceluploadstring-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.cancelUpload()")),"."),(0,r.kt)("h2",{id:"videouploadresult-object"},"VideoUploadResult Object"),(0,r.kt)("h4",{id:"version-added-0203-3"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the url created in a successful upload.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,r.kt)("h2",{id:"videouploadprogress-object"},"VideoUploadProgress Object"),(0,r.kt)("h4",{id:"version-added-0203-4"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"progress"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the share request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,r.kt)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,r.kt)("h4",{id:"example-data"},"Example data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 60,\n  "id": "7",\n  "state": "Uploading"\n}\n')),(0,r.kt)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,r.kt)("h4",{id:"version-added-0203-5"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current state of the ",(0,r.kt)("a",{parentName:"p",href:"#uploadvideovideouploadparams-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.uploadVideo()"))," operation.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Started"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload has started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uploading"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Finished"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,r.kt)("h2",{id:"getdisabledservicesresult-object"},"GetDisabledServicesResult Object"),(0,r.kt)("h4",{id:"version-added-0126-1"},"Version added: 0.126"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for GetDisabledServices result.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled_services"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success":true,"disabled_services":["youtube"]}\n')),(0,r.kt)("h2",{id:"getuserinforesult-object"},"GetUserInfoResult Object"),(0,r.kt)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for get user info result.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example-data-reddit--youtube--twitter"},"Example data: Reddit / Youtube / Twitter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{   \n  "status": "success",  \n  "userInfo": { \n     "avatar": "http://abs.twimg.com/sticky/...",   \n     "id": "111111111112222222",    \n     "name": "full name",   \n     "screenName": "screenname123"  \n  } \n}   \n')),(0,r.kt)("h4",{id:"example-data-discord-user"},"Example data: Discord user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{   \n  "status": "success",  \n  "userInfo": { \n    "id": "1111111111111",  \n    "discriminator": 9999,  \n    "username": "itay", \n    "email": "itay@overwolf.com",   \n    "avatar": null, \n    "verified": true    \n  } \n}   \n')),(0,r.kt)("h2",{id:"loginstatechangedevent-object"},"LoginStateChangedEvent Object"),(0,r.kt)("h4",{id:"version-added-0128-1"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#loginstate-enum"},"LoginState")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "state": "connected"/"disconnected" }\n')),(0,r.kt)("h2",{id:"loginstate-enum"},"LoginState enum"),(0,r.kt)("h4",{id:"version-added-0128-2"},"Version added: 0.128"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connected"),(0,r.kt)("td",{parentName:"tr",align:null},'"connected"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.kt)("td",{parentName:"tr",align:null},'"disconnected"')))))}u.isMDXComponent=!0}}]);