"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1482],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),k=l,m=p["".concat(u,".").concat(k)]||p[k]||c[k]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(25773),l=(a(27378),a(35318));const n={id:"youtube",image:"/img/embed/api-docs.jpg",title:"overwolf.social.youtube API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/social/youtube",id:"api/social/youtube",title:"overwolf.social.youtube API",description:"Provides access to the YouTube social provider.",source:"@site/../pages/api/social/youtube.mdx",sourceDirName:"api/social",slug:"/api/social/youtube",permalink:"/api/social/youtube",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/social/youtube.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1719858546,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{id:"youtube",image:"/img/embed/api-docs.jpg",title:"overwolf.social.youtube API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.social.reddit API",permalink:"/api/social/reddit"},next:{title:"overwolf.streaming API",permalink:"/api/streaming/"}},u={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"performUserLogin()",id:"performuserlogin",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"performLogout(callback)",id:"performlogoutcallback",level:2},{value:"Version added: 0.125",id:"version-added-0125",level:4},{value:"getUserInfo(callback)",id:"getuserinfocallback",level:2},{value:"Version added: 0.125",id:"version-added-0125-1",level:4},{value:"share(YouTubeShareParameters, callback)",id:"shareyoutubeshareparameters-callback",level:2},{value:"Version added: 0.125",id:"version-added-0125-2",level:4},{value:"shareEx(YouTubeShareParameters, callback, callback)",id:"shareexyoutubeshareparameters-callback-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198",level:4},{value:"Progress Note",id:"progress-note",level:4},{value:"cancelShare(string, callback)",id:"cancelsharestring-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198-1",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.125",id:"version-added-0125-3",level:4},{value:"YouTubeShareParameters Object",id:"youtubeshareparameters-object",level:2},{value:"Version added: 0.125",id:"version-added-0125-4",level:4},{value:"id note",id:"id-note",level:4},{value:"useOverwolfNotifications note",id:"useoverwolfnotifications-note",level:4},{value:"SocialShareResult Object",id:"socialshareresult-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-2",level:4},{value:"Example data",id:"example-data",level:4},{value:"SocialShareProgress Object",id:"socialshareprogress-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-3",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.198",id:"version-added-0198-4",level:4},{value:"YouTubePrivacy Enum",id:"youtubeprivacy-enum",level:2},{value:"version added: 0.198",id:"version-added-0198-5",level:4}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provides access to the YouTube social provider."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use ",(0,l.kt)("a",{parentName:"p",href:"../social#getdisabledservicescallback"},(0,l.kt)("inlineCode",{parentName:"a"},"verwolf.social.getDisabledServices()"))," method to check if the service is available.")),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#performuserlogin"},"overwolf.social.youtube.performUserLogin()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#performlogoutcallback"},"overwolf.social.youtube.performLogout()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getuserinfocallback"},"overwolf.social.youtube.getUserInfo()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shareyoutubeshareparameters-callback"},"overwolf.social.youtube.share()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shareexyoutubeshareparameters-callback-callback"},"overwolf.social.youtube.shareEx()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cancelsharestring-callback"},"overwolf.social.youtube.cancelShare()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onloginstatechanged"},"ooverwolf.social.youtube.onLoginStateChanged"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#youtubeshareparameters-object"},"overwolf.social.youtube.YouTubeShareParameters")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#socialshareresult-object"},"overwolf.social.youtube.SocialShareResult")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#socialshareprogress-object"},"overwolf.social.youtube.SocialShareProgress")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sharestate-enum"},"overwolf.social.youtube.enums.ShareState")," Enum"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#youtubeprivacy-enum"},"overwolf.social.youtube.YouTubePrivacy")," Enum")),(0,l.kt)("h2",{id:"performuserlogin"},"performUserLogin()"),(0,l.kt)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,l.kt)("p",null,"There is no callback for this method and the only way to know if the user signed in is via ",(0,l.kt)("a",{parentName:"p",href:"#onloginstatechanged"},"onLoginStateChanged")," event."),(0,l.kt)("h2",{id:"performlogoutcallback"},"performLogout(callback)"),(0,l.kt)("h4",{id:"version-added-0125"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'Performs a "strong" sign out of YouTube, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"getuserinfocallback"},"getUserInfo(callback)"),(0,l.kt)("h4",{id:"version-added-0125-1"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into YouTube, this will return user information, Otherwise, an error is returned.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../social#getuserinforesult-object"},"(Result: GetUserInfoResult)")," => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("h2",{id:"shareyoutubeshareparameters-callback"},"share(YouTubeShareParameters, callback)"),(0,l.kt)("h4",{id:"version-added-0125-2"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into YouTube, this will perform the video share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"youTubeShareParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#youtubeshareparameters-object"},"YouTubeShareParameters")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.kt)("p",null,"Types of errors that can occur:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.kt)("li",{parentName:"ul"},"Forbidden (user did not give Overwolf permissions to upload videos)"),(0,l.kt)("li",{parentName:"ul"},"NoChannelsFound (user does not have a youtube channel associated with this Google account)")),(0,l.kt)("h2",{id:"shareexyoutubeshareparameters-callback-callback"},"shareEx(YouTubeShareParameters, callback, callback)"),(0,l.kt)("h4",{id:"version-added-0198"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Youtube, this will perform the video share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"youtubeShareParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#youtubeshareparameters-object"},"YoutubeShareParameters")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resultCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#socialshareresult-object"},"SocialShareResult"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progressCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("a",{parentName:"td",href:"#socialshareprogress-object"},"socialShareProgress"),") => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function which will be called whenever share progress is made. See ",(0,l.kt)("a",{parentName:"td",href:"#progress-note"},"note"))))),(0,l.kt)("p",null,"Types of errors that can occur:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.kt)("li",{parentName:"ul"},"Forbidden (user did not give Overwolf permissions to upload videos)"),(0,l.kt)("li",{parentName:"ul"},"NoChannelsFound (user does not have a youtube channel associated with this Google account)")),(0,l.kt)("h4",{id:"progress-note"},"Progress Note"),(0,l.kt)("p",null,"This callback will only be called when uploading a video."),(0,l.kt)("p",null,"Videos will be uploaded in uniforamlly sized chunks (except for the last chunk). The callback will be called every time another chunk was successfully uploaded."),(0,l.kt)("h2",{id:"cancelsharestring-callback"},"cancelShare(string, callback)"),(0,l.kt)("h4",{id:"version-added-0198-1"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The request ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.social.youtube.cancelShare("2", console.log)\n')),(0,l.kt)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,l.kt)("h4",{id:"version-added-0125-3"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fired when the user\u2019s login state changes, with the following structure: ",(0,l.kt)("a",{parentName:"p",href:"../social#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object.")),(0,l.kt)("h2",{id:"youtubeshareparameters-object"},"YouTubeShareParameters Object"),(0,l.kt)("h4",{id:"version-added-0125-4"},"Version added: 0.125"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This object defines all parameters that can/should be passed to the Youtube ",(0,l.kt)("a",{parentName:"p",href:"#shareyoutubeshareparameters-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"share()"))," and ",(0,l.kt)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"shareEx()"))," methods.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The file to share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID for the current share request. See ",(0,l.kt)("a",{parentName:"td",href:"#id-note"},"note"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useOverwolfNotifications"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not Overwolf notifications should be used. See ",(0,l.kt)("a",{parentName:"td",href:"#useoverwolfnotifications-note"},"note"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The shared video's title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The shared video's description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trimming (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../media/videos#videocompositionsegment-object"},"VideoCompositionSegment")),(0,l.kt)("td",{parentName:"tr",align:null},"An object containing start time and end time for the desired VideoCompositionSegment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privacy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#youtubeprivacy-enum"},"YouTubePrivacy")),(0,l.kt)("td",{parentName:"tr",align:null},"The privacy policy of the uploaded video, defaults to public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of chronological events that occurred during the capture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameClassId (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The associated game's class ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gameTitle (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The associated game's title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra information about the game session")))),(0,l.kt)("h4",{id:"id-note"},"id note"),(0,l.kt)("p",null,"When calling ",(0,l.kt)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,l.kt)("a",{parentName:"p",href:"#cancelsharestring-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.cancelShare()")),"."),(0,l.kt)("h4",{id:"useoverwolfnotifications-note"},"useOverwolfNotifications note"),(0,l.kt)("p",null,"When calling ",(0,l.kt)("a",{parentName:"p",href:"#shareyoutubeshareparameters-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.share()")),", this will default to true.\nWhen calling ",(0,l.kt)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()")),", this will default to false."),(0,l.kt)("h2",{id:"socialshareresult-object"},"SocialShareResult Object"),(0,l.kt)("h4",{id:"version-added-0198-2"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for the url shared in a successful share.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,l.kt)("h4",{id:"example-data"},"Example data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://www.youtube.com/watch?v=iik25wq1251"\n}\n')),(0,l.kt)("h2",{id:"socialshareprogress-object"},"SocialShareProgress Object"),(0,l.kt)("h4",{id:"version-added-0198-3"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progress"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the share request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,l.kt)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,l.kt)("h4",{id:"example-data-1"},"Example data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 99,\n  "id": "7",\n  "state": "Uploading"\n}\n')),(0,l.kt)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,l.kt)("h4",{id:"version-added-0198-4"},"Version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The current state of the ",(0,l.kt)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()"))," operation.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Started"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload has started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uploading"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Finished"),(0,l.kt)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,l.kt)("h2",{id:"youtubeprivacy-enum"},"YouTubePrivacy Enum"),(0,l.kt)("h4",{id:"version-added-0198-5"},"version added: 0.198"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The listing status of the uplaoded video.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Public"),(0,l.kt)("td",{parentName:"tr",align:null},"The video will be public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unlisted"),(0,l.kt)("td",{parentName:"tr",align:null},"The video will be unlisted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Private"),(0,l.kt)("td",{parentName:"tr",align:null},"The video will be private")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))))}p.isMDXComponent=!0}}]);