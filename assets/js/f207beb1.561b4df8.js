"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6826],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),k=l,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},23729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=a(25773),l=(a(27378),a(35318));const n={id:"gfycat",image:"/img/embed/deprecated.jpg",title:"overwolf.social.gfycat API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/deprecated/gfycat",id:"api/deprecated/gfycat",title:"overwolf.social.gfycat API",description:"Provides access to the Gfycat social provider.",source:"@site/../pages/api/deprecated/gfycat.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/gfycat",permalink:"/api/deprecated/gfycat",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/deprecated/gfycat.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721647288,formattedLastUpdatedAt:"Jul 22, 2024",frontMatter:{id:"gfycat",image:"/img/embed/deprecated.jpg",title:"overwolf.social.gfycat API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.benchmarking API",permalink:"/api/deprecated/benchmarking"},next:{title:"overwolf.social.twitter API",permalink:"/api/deprecated/twitter"}},s={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"performUserLogin()",id:"performuserlogin",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"performLogout(callback)",id:"performlogoutcallback",level:2},{value:"Version added: 0.125",id:"version-added-0125",level:4},{value:"getUserInfo(callback)",id:"getuserinfocallback",level:2},{value:"Version added: 0.125",id:"version-added-0125-1",level:4},{value:"share(GfycatShareParameters, callback)",id:"sharegfycatshareparameters-callback",level:2},{value:"Version added: 0.125",id:"version-added-0125-2",level:4},{value:"shareEx(GfycatShareParameters, callback, callback)",id:"shareexgfycatshareparameters-callback-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198",level:4},{value:"Progress Note",id:"progress-note",level:4},{value:"cancelShare(string, callback)",id:"cancelsharestring-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198-1",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.125",id:"version-added-0125-3",level:4},{value:"GfycatShareParameters Object",id:"gfycatshareparameters-object",level:2},{value:"Version added: 0.125",id:"version-added-0125-4",level:4},{value:"id note",id:"id-note",level:4},{value:"useOverwolfNotifications note",id:"useoverwolfnotifications-note",level:4},{value:"SocialShareResult Object",id:"socialshareresult-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-2",level:4},{value:"Example data",id:"example-data",level:4},{value:"SocialShareProgress Object",id:"socialshareprogress-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-3",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.198",id:"version-added-0198-4",level:4}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provides access to the Gfycat social provider."),(0,l.kt)("admonition",{title:"Deprecated",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This API has been deprecated, following ",(0,l.kt)("a",{parentName:"p",href:"https://techcrunch.com/2023/07/05/gfycat-shuts-down-on-september-1/"},"Gfycat shutting down"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use ",(0,l.kt)("a",{parentName:"p",href:"../social#getdisabledservicescallback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.getDisabledServices()"))," method to check if the service is available.")),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#performuserlogin"},"overwolf.social.gfycat.performUserLogin()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#performlogoutcallback"},"overwolf.social.gfycat.performLogout()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getuserinfocallback"},"overwolf.social.gfycat.getUserInfo()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sharegfycatshareparameters-callback"},"overwolf.social.gfycat.share()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shareexgfycatshareparameters-callback-callback"},"overwolf.social.gfycat.shareEx()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cancelsharestring-callback"},"overwolf.social.gfycat.cancelShare()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onloginstatechanged"},"ooverwolf.social.gfycat.onLoginStateChanged"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gfycatshareparameters-object"},"overwolf.social.gfycat.gfycatShareParameters")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#socialshareresult-object"},"overwolf.social.gfycat.SocialShareResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#socialshareprogress-object"},"overwolf.social.gfycat.SocialShareProgress")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sharestate-enum"},"overwolf.social.gfycat.enums.ShareState")," Enum")),(0,l.kt)("h2",{id:"performuserlogin"},"performUserLogin()"),(0,l.kt)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,l.kt)("p",null,"There is no callback for this method and the only way to know if the user signed in is via ",(0,l.kt)("a",{parentName:"p",href:"#onloginstatechanged"},"onLoginStateChanged")," event."),(0,l.kt)("h2",{id:"performlogoutcallback"},"performLogout(callback)"),(0,l.kt)("h4",{id:"version-added-0125"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'Performs a "strong" sign out of Gfycat, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"getuserinfocallback"},"getUserInfo(callback)"),(0,l.kt)("h4",{id:"version-added-0125-1"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Gfycat, this will return user information, Otherwise, an error is returned.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../social#getuserinforesult-object"},"(Result: GetUserInfoResult)")," => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"sharegfycatshareparameters-callback"},"share(GfycatShareParameters, callback)"),(0,l.kt)("h4",{id:"version-added-0125-2"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into YouTube, this will perform the video share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gfycatShareParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#gfycatshareparameters-object"},"GfycatShareParameters")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("p",null,"Types of errors that can occur:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.kt)("li",{parentName:"ul"},"ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)")),(0,l.kt)("h2",{id:"shareexgfycatshareparameters-callback-callback"},"shareEx(GfycatShareParameters, callback, callback)"),(0,l.kt)("h4",{id:"version-added-0198"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Gfycat, this will perform the video share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gfycatShareParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#gfycatshareparameters-object"},"GfycatShareParameters")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resultCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#socialshareresult-object"},"SocialShareResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progressCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#socialshareprogress-object"},"socialShareProgress"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called whenever share progress is made. See ",(0,l.kt)("a",{parentName:"td",href:"#progress-note"},"note"))))),(0,l.kt)("p",null,"Types of errors that can occur:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.kt)("li",{parentName:"ul"},"ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)")),(0,l.kt)("h4",{id:"progress-note"},"Progress Note"),(0,l.kt)("p",null,"This callback will only be called when uploading a video."),(0,l.kt)("p",null,"Videos will be uploaded in uniforamlly sized chunks (except for the last chunk). The callback will be called every time another chunk was successfully uploaded."),(0,l.kt)("h2",{id:"cancelsharestring-callback"},"cancelShare(string, callback)"),(0,l.kt)("h4",{id:"version-added-0198-1"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The request ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.social.gfycat.cancelShare("2", console.log)\n')),(0,l.kt)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,l.kt)("h4",{id:"version-added-0125-3"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when the user\u2019s login state changes, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"../social#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object.")),(0,l.kt)("h2",{id:"gfycatshareparameters-object"},"GfycatShareParameters Object"),(0,l.kt)("h4",{id:"version-added-0125-4"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This object defines all parameters that can/should be passed to the Gfycat ",(0,l.kt)("a",{parentName:"p",href:"#sharegfycatshareparameters-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"share()"))," and ",(0,l.kt)("a",{parentName:"p",href:"#shareexgfycatshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"shareEx()"))," methods.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The file to share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID for the current share request. See ",(0,l.kt)("a",{parentName:"td",href:"#id-note"},"note"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useOverwolfNotifications"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not Overwolf notifications should be used. See ",(0,l.kt)("a",{parentName:"td",href:"#useoverwolfnotifications-note"},"note"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trimming (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../media/videos#videocompositionsegment-object"},"VideoCompositionSegment")),(0,l.kt)("td",{parentName:"tr",align:null},"An object containing start time and end time for the desired VideoCompositionSegment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to include with the shared file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Only relevant for when the user is logged in, we then allow him toupload the file to his Gfycat account with private set to true. ",(0,l.kt)("br",null)," Default value: false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of chronological events that occurred during the capture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The associated game's class ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra information about the game session")))),(0,l.kt)("h4",{id:"id-note"},"id note"),(0,l.kt)("p",null,"When calling ",(0,l.kt)("a",{parentName:"p",href:"#shareexgfycatshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.gfycat.shareEx()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,l.kt)("a",{parentName:"p",href:"#cancelsharestring-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.gfycat.cancelShare()")),"."),(0,l.kt)("h4",{id:"useoverwolfnotifications-note"},"useOverwolfNotifications note"),(0,l.kt)("p",null,"When calling ",(0,l.kt)("a",{parentName:"p",href:"#sharegfycatshareparameters-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.gfycat.share()")),", this will default to true.\nWhen calling ",(0,l.kt)("a",{parentName:"p",href:"#shareexgfycatshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.gfycat.shareEx()")),", this will default to false."),(0,l.kt)("h2",{id:"socialshareresult-object"},"SocialShareResult Object"),(0,l.kt)("h4",{id:"version-added-0198-2"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for the url shared in a successful share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,l.kt)("h4",{id:"example-data"},"Example data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://gfycat.com/helpfulignorantfoxterrier"\n}\n')),(0,l.kt)("h2",{id:"socialshareprogress-object"},"SocialShareProgress Object"),(0,l.kt)("h4",{id:"version-added-0198-3"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progress"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the share request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,l.kt)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,l.kt)("h4",{id:"example-data-1"},"Example data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 44,\n  "id": "1",\n  "state": "Uploading"\n}\n')),(0,l.kt)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,l.kt)("h4",{id:"version-added-0198-4"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The current state of the ",(0,l.kt)("a",{parentName:"p",href:"#shareexgfycatshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.gfycat.shareEx()"))," operation.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Started"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload has started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uploading"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Finished"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload has finished")))))}p.isMDXComponent=!0}}]);