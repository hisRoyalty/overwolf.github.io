"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7007],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var l=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),k=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=k(a),m=n,s=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return a?l.createElement(s,d(d({ref:t},p),{},{components:a})):l.createElement(s,d({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,d=new Array(r);d[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,d[1]=i;for(var k=2;k<r;k++)d[k]=a[k];return l.createElement.apply(null,d)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var l=a(25773),n=(a(27378),a(35318));const r={id:"media-player-element",image:"/img/embed/api-docs.jpg",title:"overwolf.windows.mediaPlayerElement API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},d=void 0,i={unversionedId:"api/windows/media-player-element",id:"api/windows/media-player-element",title:"overwolf.windows.mediaPlayerElement API",description:"Use this API to allows adding a media player element to a window to play video files.",source:"@site/../pages/api/windows/media-player-element.mdx",sourceDirName:"api/windows",slug:"/api/windows/media-player-element",permalink:"/api/windows/media-player-element",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/windows/media-player-element.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721829131,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"media-player-element",image:"/img/embed/api-docs.jpg",title:"overwolf.windows.mediaPlayerElement API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.windows API",permalink:"/api/windows/"}},o={},k=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"create(x, y, width, height, callback)",id:"createx-y-width-height-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"removeAllPlayers()",id:"removeallplayers",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"setBounds(id, x, y, width, height, callback)",id:"setboundsid-x-y-width-height-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"setVideo(id, videoUrl, callback)",id:"setvideoid-videourl-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"play(id, callback)",id:"playid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4},{value:"pause(id, callback)",id:"pauseid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-5",level:4},{value:"resume(id, callback)",id:"resumeid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-6",level:4},{value:"setVolume(id, volume, callback)",id:"setvolumeid-volume-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-7",level:4},{value:"stop(id, callback)",id:"stopid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-8",level:4},{value:"seek(id, seconds, callback)",id:"seekid-seconds-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-9",level:4},{value:"getProgress(id, callback)",id:"getprogressid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-10",level:4},{value:"setPlaybackSpeed(id, speedRatio, callback)",id:"setplaybackspeedid-speedratio-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-11",level:4},{value:"toFront(id, callback)",id:"tofrontid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-12",level:4},{value:"toBack(id, callback)",id:"tobackid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-13",level:4},{value:"setStretchMode(id, stretchMode, callback)",id:"setstretchmodeid-stretchmode-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-14",level:4},{value:"onPlaybackStarted",id:"onplaybackstarted",level:2},{value:"Version added: 0.78",id:"version-added-078-15",level:4},{value:"onPlaybackPaused",id:"onplaybackpaused",level:2},{value:"Version added: 0.78",id:"version-added-078-16",level:4},{value:"onPlaybackStopped",id:"onplaybackstopped",level:2},{value:"Version added: 0.78",id:"version-added-078-17",level:4},{value:"onPlaybackEnded",id:"onplaybackended",level:2},{value:"Version added: 0.78",id:"version-added-078-18",level:4},{value:"onPlaybackError",id:"onplaybackerror",level:2},{value:"Version added: 0.78",id:"version-added-078-19",level:4},{value:"eStretch enum",id:"estretch-enum",level:2},{value:"Version added: 0.78",id:"version-added-078-20",level:4}],p={toc:k};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to allows adding a media player element to a window to play video files."),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createx-y-width-height-callback"},"overwolf.windows.mediaPlayerElement.create()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#removeallplayers"},"overwolf.windows.mediaPlayerElement.removeAllPlayers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setboundsid-x-y-width-height-callback"},"overwolf.windows.mediaPlayerElement.setBounds()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setvideoid-videourl-callback"},"overwolf.windows.mediaPlayerElement.setVideo()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#playid-callback"},"overwolf.windows.mediaPlayerElement.play()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pauseid-callback"},"overwolf.windows.mediaPlayerElement.pause()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#resumeid-callback"},"overwolf.windows.mediaPlayerElement.resume()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setvolumeid-volume-callback"},"overwolf.windows.mediaPlayerElement.setVolume()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stopid-callback"},"overwolf.windows.mediaPlayerElement.stop()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#seekid-seconds-callback"},"overwolf.windows.mediaPlayerElement.seek()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#getprogressid-callback"},"overwolf.windows.mediaPlayerElement.getProgress()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setplaybackspeedid-speedratio-callback"},"overwolf.windows.mediaPlayerElement.setPlaybackSpeed()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tofrontid-callback"},"overwolf.windows.mediaPlayerElement.toFront()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tobackid-callback"},"overwolf.windows.mediaPlayerElement.toBack()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setstretchmodeid-stretchmode-callback"},"overwolf.windows.mediaPlayerElement.setStretchMode()"))),(0,n.kt)("h2",{id:"events-reference"},"Events Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaybackstarted"},"overwolf.windows.mediaPlayerElement.onPlaybackStarted()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaybackpaused"},"overwolf.windows.mediaPlayerElement.onPlaybackPaused()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaybackstopped"},"overwolf.windows.mediaPlayerElement.onPlaybackStopped()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaybackended"},"overwolf.windows.mediaPlayerElement.onPlaybackEnded()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onplaybackerror"},"overwolf.windows.mediaPlayerElement.onPlaybackError()"))),(0,n.kt)("h2",{id:"types-reference"},"Types Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#estretch-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.enums.eStretch"))," enum")),(0,n.kt)("h2",{id:"createx-y-width-height-callback"},"create(x, y, width, height, callback)"),(0,n.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creates a media player and places it in the given location with given dimensions.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The top position of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"y"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The left position of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"width"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The width of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"height"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The height of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,n.kt)("p",null,"A callback function which will be called with the status of the request  and the given player id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "status": "success", "id": 3 }\n')),(0,n.kt)("h2",{id:"removeallplayers"},"removeAllPlayers()"),(0,n.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remove all media players created for this window.")),(0,n.kt)("h2",{id:"setboundsid-x-y-width-height-callback"},"setBounds(id, x, y, width, height, callback)"),(0,n.kt)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creates a media player and places it in the given location with given dimensions.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The top position of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"y"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The left position of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"width"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The width of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"height"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The height of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,n.kt)("p",null,"A callback function which will be called with the status of the request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "status": "success" }\n')),(0,n.kt)("h2",{id:"setvideoid-videourl-callback"},"setVideo(id, videoUrl, callback)"),(0,n.kt)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the current video to be played.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"An url to the video")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"playid-callback"},"play(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plays the current video.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"pauseid-callback"},"pause(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-5"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pauses the current video.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"resumeid-callback"},"resume(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-6"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Resumes the current video.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"setvolumeid-volume-callback"},"setVolume(id, volume, callback)"),(0,n.kt)("h4",{id:"version-added-078-7"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the volume.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"A volume between 0 and 100 (inclusive)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"stopid-callback"},"stop(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-8"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stops the current video.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"seekid-seconds-callback"},"seek(id, seconds, callback)"),(0,n.kt)("h4",{id:"version-added-078-9"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Seeks the current video to the given number of seconds.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"seconds"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The numbers of seconds to seek to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"getprogressid-callback"},"getProgress(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-10"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Gets the current progress, in seconds, of the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"setplaybackspeedid-speedratio-callback"},"setPlaybackSpeed(id, speedRatio, callback)"),(0,n.kt)("h4",{id:"version-added-078-11"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the speed ratio of the playback.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"speedRatio"),(0,n.kt)("td",{parentName:"tr",align:null},"double"),(0,n.kt)("td",{parentName:"tr",align:null},"The speed ratio of the playback. A double between 0 and 16 (inclusive)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"tofrontid-callback"},"toFront(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-12"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sends the media player to the front of the window.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"tobackid-callback"},"toBack(id, callback)"),(0,n.kt)("h4",{id:"version-added-078-13"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sends the media player to the back of the window.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"setstretchmodeid-stretchmode-callback"},"setStretchMode(id, stretchMode, callback)"),(0,n.kt)("h4",{id:"version-added-078-14"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sets the stretch mode of the player.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stretchMode"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#estretch-enum"},"eStretch")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The desired stretch mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"function"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h2",{id:"onplaybackstarted"},"onPlaybackStarted"),(0,n.kt)("h4",{id:"version-added-078-15"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when playback is starting/resuming.")),(0,n.kt)("h2",{id:"onplaybackpaused"},"onPlaybackPaused"),(0,n.kt)("h4",{id:"version-added-078-16"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when playback is paused.")),(0,n.kt)("h2",{id:"onplaybackstopped"},"onPlaybackStopped"),(0,n.kt)("h4",{id:"version-added-078-17"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when playback is stopped.")),(0,n.kt)("h2",{id:"onplaybackended"},"onPlaybackEnded"),(0,n.kt)("h4",{id:"version-added-078-18"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when playback ends.")),(0,n.kt)("h2",{id:"onplaybackerror"},"onPlaybackError"),(0,n.kt)("h4",{id:"version-added-078-19"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Fired when there was an error while trying to open a video.")),(0,n.kt)("h2",{id:"estretch-enum"},"eStretch enum"),(0,n.kt)("h4",{id:"version-added-078-20"},"Version added: 0.78"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The stretch mode to use.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fill"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uniform"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UniformToFill"),(0,n.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);