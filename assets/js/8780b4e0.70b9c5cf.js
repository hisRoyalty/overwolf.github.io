"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1907],{35318:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>m});var l=t(27378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=l.createContext({}),u=function(e){var a=l.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=u(e.components);return l.createElement(d.Provider,{value:a},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=u(t),p=n,m=s["".concat(d,".").concat(p)]||s[p]||k[p]||r;return t?l.createElement(m,i(i({ref:a},o),{},{components:t})):l.createElement(m,i({ref:a},o))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20976:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var l=t(25773),n=(t(27378),t(35318));const r={id:"audio",image:"/img/embed/deprecated.jpg",title:"overwolf.media.audio API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,c={unversionedId:"api/deprecated/audio",id:"api/deprecated/audio",title:"overwolf.media.audio API",description:"A set of functions for playback of audio files. Currently supports MP3 and WAV files.",source:"@site/../pages/api/deprecated/audio.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/audio",permalink:"/api/deprecated/audio",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/deprecated/audio.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720601842,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{id:"audio",image:"/img/embed/deprecated.jpg",title:"overwolf.media.audio API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.tobii API",permalink:"/api/deprecated/obsolete/tobii"},next:{title:"overwolf.benchmarking API",permalink:"/api/deprecated/benchmarking"}},d={},u=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"create(url, callback)",id:"createurl-callback",level:2},{value:"Version added: 0.84",id:"version-added-084",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"play(id, callback)",id:"playid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"stop(callback)",id:"stopcallback",level:2},{value:"Version added: 0.84",id:"version-added-084-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-2",level:4},{value:"stopById(id, callback)",id:"stopbyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-3",level:4},{value:"Callback argument: Success",id:"callback-argument-success-3",level:4},{value:"pause(callback)",id:"pausecallback",level:2},{value:"Version added: 0.84",id:"version-added-084-4",level:4},{value:"Callback argument: Success",id:"callback-argument-success-4",level:4},{value:"pauseById(id, callback)",id:"pausebyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-5",level:4},{value:"Callback argument: Success",id:"callback-argument-success-5",level:4},{value:"resume(callback)",id:"resumecallback",level:2},{value:"Version added: 0.84",id:"version-added-084-6",level:4},{value:"Callback argument: Success",id:"callback-argument-success-6",level:4},{value:"resumeById(id, callback)",id:"resumebyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-7",level:4},{value:"Callback argument: Success",id:"callback-argument-success-7",level:4},{value:"setVolume(volume, callback)",id:"setvolumevolume-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-8",level:4},{value:"Callback argument: Success",id:"callback-argument-success-8",level:4},{value:"setVolumeById(id, volume, callback)",id:"setvolumebyidid-volume-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-9",level:4},{value:"Callback argument: Success",id:"callback-argument-success-9",level:4},{value:"onPlayStateChanged",id:"onplaystatechanged",level:2},{value:"Version added: 0.84",id:"version-added-084-10",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4}],o={toc:u};function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A set of functions for playback of audio files. Currently supports MP3 and WAV files."),(0,n.kt)("admonition",{title:"obsolete",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The overwolf.media.audio API is deprecated. Use the html5 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"},"audio")," tag instead.")),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createurl-callback"},"overwolf.media.audio.create()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#playid-callback"},"overwolf.media.audio.play()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stopcallback"},"overwolf.media.audio.stop()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stopbyidid-callback"},"overwolf.media.audio.stopById()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pausecallback"},"overwolf.media.audio.pause()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pausebyidid-callback"},"overwolf.media.audio.pauseById()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#resumecallback"},"overwolf.media.audio.resume()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#resumebyidid-callback"},"overwolf.media.audio.resumeById()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setvolumevolume-callback"},"overwolf.media.audio.setVolume()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setvolumebyidid-volume-callback"},"overwolf.media.audio.setVolumeById()"))),(0,n.kt)("h2",{id:"events-reference"},"Events Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaystatechanged"},"overwolf.media.audio.onPlayStateChanged"))),(0,n.kt)("h2",{id:"createurl-callback"},"create(url, callback)"),(0,n.kt)("h4",{id:"version-added-084"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creates an audio file from local path, extension local path or a remote Url.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The path of a local audio file, a url to a remote one or an extension url ",(0,n.kt)("inlineCode",{parentName:"td"},"overwolf-extension://app-id/file"),". Notice that if the url doesn\u2019t contain a file extension, mp3 will be assumed as the extension")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the ID of the created audio file")))),(0,n.kt)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,n.kt)("p",null,"A callback function which will be called with the status of the request and the ID of the created audio file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "id": "1086e4469a5fb242e81223ce627e3747"\n}\n')),(0,n.kt)("h2",{id:"playid-callback"},"play(id, callback)"),(0,n.kt)("h4",{id:"version-added-084-1"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plays the audio file matching the supplied ID.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the audio file to be played")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the play request")))),(0,n.kt)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"stopcallback"},"stop(callback)"),(0,n.kt)("h4",{id:"version-added-084-2"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stops the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the stop request")))),(0,n.kt)("h4",{id:"callback-argument-success-2"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"stopbyidid-callback"},"stopById(id, callback)"),(0,n.kt)("h4",{id:"version-added-084-3"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stops the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the stop request")))),(0,n.kt)("h4",{id:"callback-argument-success-3"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"pausecallback"},"pause(callback)"),(0,n.kt)("h4",{id:"version-added-084-4"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pauses the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the pause request")))),(0,n.kt)("h4",{id:"callback-argument-success-4"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"pausebyidid-callback"},"pauseById(id, callback)"),(0,n.kt)("h4",{id:"version-added-084-5"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pauses the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the pause request")))),(0,n.kt)("h4",{id:"callback-argument-success-5"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"resumecallback"},"resume(callback)"),(0,n.kt)("h4",{id:"version-added-084-6"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Resumes the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the resume request")))),(0,n.kt)("h4",{id:"callback-argument-success-6"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"resumebyidid-callback"},"resumeById(id, callback)"),(0,n.kt)("h4",{id:"version-added-084-7"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Resumes the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the resume request")))),(0,n.kt)("h4",{id:"callback-argument-success-7"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"setvolumevolume-callback"},"setVolume(volume, callback)"),(0,n.kt)("h4",{id:"version-added-084-8"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the playback volume.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The desired volume. The volume range is 0 \u2013 100 where a volume of 0 means mute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the setVolume request")))),(0,n.kt)("h4",{id:"callback-argument-success-8"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"setvolumebyidid-volume-callback"},"setVolumeById(id, volume, callback)"),(0,n.kt)("h4",{id:"version-added-084-9"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the playback volume.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The desired volume. The volume range is 0 \u2013 100 where a volume of 0 means mute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the setVolume request")))),(0,n.kt)("h4",{id:"callback-argument-success-9"},"Callback argument: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.kt)("h2",{id:"onplaystatechanged"},"onPlayStateChanged"),(0,n.kt)("h4",{id:"version-added-084-10"},"Version added: 0.84"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when the state of the playback is changed.")),(0,n.kt)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1086e4469a5fb242e81223ce627e3747",\n    "playback_state": "paused"\n}\n')))}s.isMDXComponent=!0}}]);