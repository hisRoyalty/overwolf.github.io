"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5861],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>p});var l=t(27378);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,d=function(e,a){if(null==e)return{};var t,l,d={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var o=l.createContext({}),p=function(e){return function(a){var t=c(a.components);return l.createElement(e,n({},a,{components:t}))}},c=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},u=function(e){var a=c(e.components);return l.createElement(o.Provider,{value:a},e.children)},s="mdxType",x={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},h=l.forwardRef((function(e,a){var t=e.components,d=e.mdxType,n=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=d,s=p["".concat(r,".").concat(u)]||p[u]||x[u]||n;return t?l.createElement(s,m(m({ref:a},o),{},{components:t})):l.createElement(s,m({ref:a},o))}));function b(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var n=t.length,r=new Array(n);r[0]=h;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[s]="string"==typeof e?e:d,r[1]=m;for(var o=2;o<n;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},70763:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>m,toc:()=>o});var l=t(25773),d=(t(27378),t(35318));const n={id:"media-player-element",image:"/img/embed/api-docs.jpg",title:"overwolf.windows.mediaPlayerElement API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,m={unversionedId:"api/windows/media-player-element",id:"api/windows/media-player-element",title:"overwolf.windows.mediaPlayerElement API",description:"Use this API to allows adding a media player element to a window to play video files.",source:"@site/pages/docs/api/windows/media-player-element.mdx",sourceDirName:"api/windows",slug:"/api/windows/media-player-element",permalink:"/api/windows/media-player-element",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/windows/media-player-element.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"media-player-element",image:"/img/embed/api-docs.jpg",title:"overwolf.windows.mediaPlayerElement API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.windows API",permalink:"/api/windows/"}},i={},o=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"create(x, y, width, height, callback)",id:"createx-y-width-height-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"removeAllPlayers()",id:"removeallplayers",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"setBounds(id, x, y, width, height, callback)",id:"setboundsid-x-y-width-height-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"setVideo(id, videoUrl, callback)",id:"setvideoid-videourl-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"play(id, callback)",id:"playid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4},{value:"pause(id, callback)",id:"pauseid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-5",level:4},{value:"resume(id, callback)",id:"resumeid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-6",level:4},{value:"setVolume(id, volume, callback)",id:"setvolumeid-volume-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-7",level:4},{value:"stop(id, callback)",id:"stopid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-8",level:4},{value:"seek(id, seconds, callback)",id:"seekid-seconds-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-9",level:4},{value:"getProgress(id, callback)",id:"getprogressid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-10",level:4},{value:"setPlaybackSpeed(id, speedRatio, callback)",id:"setplaybackspeedid-speedratio-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-11",level:4},{value:"toFront(id, callback)",id:"tofrontid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-12",level:4},{value:"toBack(id, callback)",id:"tobackid-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-13",level:4},{value:"setStretchMode(id, stretchMode, callback)",id:"setstretchmodeid-stretchmode-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-14",level:4},{value:"onPlaybackStarted",id:"onplaybackstarted",level:2},{value:"Version added: 0.78",id:"version-added-078-15",level:4},{value:"onPlaybackPaused",id:"onplaybackpaused",level:2},{value:"Version added: 0.78",id:"version-added-078-16",level:4},{value:"onPlaybackStopped",id:"onplaybackstopped",level:2},{value:"Version added: 0.78",id:"version-added-078-17",level:4},{value:"onPlaybackEnded",id:"onplaybackended",level:2},{value:"Version added: 0.78",id:"version-added-078-18",level:4},{value:"onPlaybackError",id:"onplaybackerror",level:2},{value:"Version added: 0.78",id:"version-added-078-19",level:4},{value:"eStretch enum",id:"estretch-enum",level:2},{value:"Version added: 0.78",id:"version-added-078-20",level:4}],p={toc:o};function c(e){let{components:a,...t}=e;return(0,d.mdx)("wrapper",(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"Use this API to allows adding a media player element to a window to play video files."),(0,d.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#createx-y-width-height-callback"},"overwolf.windows.mediaPlayerElement.create()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#removeallplayers"},"overwolf.windows.mediaPlayerElement.removeAllPlayers()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#setboundsid-x-y-width-height-callback"},"overwolf.windows.mediaPlayerElement.setBounds()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#setvideoid-videourl-callback"},"overwolf.windows.mediaPlayerElement.setVideo()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#playid-callback"},"overwolf.windows.mediaPlayerElement.play()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#pauseid-callback"},"overwolf.windows.mediaPlayerElement.pause()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#resumeid-callback"},"overwolf.windows.mediaPlayerElement.resume()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#setvolumeid-volume-callback"},"overwolf.windows.mediaPlayerElement.setVolume()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#stopid-callback"},"overwolf.windows.mediaPlayerElement.stop()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#seekid-seconds-callback"},"overwolf.windows.mediaPlayerElement.seek()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getprogressid-callback"},"overwolf.windows.mediaPlayerElement.getProgress()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#setplaybackspeedid-speedratio-callback"},"overwolf.windows.mediaPlayerElement.setPlaybackSpeed()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#tofrontid-callback"},"overwolf.windows.mediaPlayerElement.toFront()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#tobackid-callback"},"overwolf.windows.mediaPlayerElement.toBack()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#setstretchmodeid-stretchmode-callback"},"overwolf.windows.mediaPlayerElement.setStretchMode()"))),(0,d.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onplaybackstarted"},"overwolf.windows.mediaPlayerElement.onPlaybackStarted()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onplaybackpaused"},"overwolf.windows.mediaPlayerElement.onPlaybackPaused()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onplaybackstopped"},"overwolf.windows.mediaPlayerElement.onPlaybackStopped()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onplaybackended"},"overwolf.windows.mediaPlayerElement.onPlaybackEnded()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onplaybackerror"},"overwolf.windows.mediaPlayerElement.onPlaybackError()"))),(0,d.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#estretch-enum"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.media.enums.eStretch"))," enum")),(0,d.mdx)("h2",{id:"createx-y-width-height-callback"},"create(x, y, width, height, callback)"),(0,d.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Creates a media player and places it in the given location with given dimensions.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"x"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The top position of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"y"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The left position of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"width"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The width of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"height"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The height of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,d.mdx)("p",null,"A callback function which will be called with the status of the request  and the given player id"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{ "status": "success", "id": 3 }\n')),(0,d.mdx)("h2",{id:"removeallplayers"},"removeAllPlayers()"),(0,d.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Remove all media players created for this window.")),(0,d.mdx)("h2",{id:"setboundsid-x-y-width-height-callback"},"setBounds(id, x, y, width, height, callback)"),(0,d.mdx)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Creates a media player and places it in the given location with given dimensions.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"x"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The top position of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"y"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The left position of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"width"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The width of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"height"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The height of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,d.mdx)("p",null,"A callback function which will be called with the status of the request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{ "status": "success" }\n')),(0,d.mdx)("h2",{id:"setvideoid-videourl-callback"},"setVideo(id, videoUrl, callback)"),(0,d.mdx)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sets the current video to be played.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"videoUrl"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"An url to the video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"playid-callback"},"play(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Plays the current video.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"pauseid-callback"},"pause(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-5"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Pauses the current video.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"resumeid-callback"},"resume(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-6"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Resumes the current video.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"setvolumeid-volume-callback"},"setVolume(id, volume, callback)"),(0,d.mdx)("h4",{id:"version-added-078-7"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sets the volume.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"volume"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"A volume between 0 and 100 (inclusive)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"stopid-callback"},"stop(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-8"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Stops the current video.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"seekid-seconds-callback"},"seek(id, seconds, callback)"),(0,d.mdx)("h4",{id:"version-added-078-9"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Seeks the current video to the given number of seconds.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"seconds"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The numbers of seconds to seek to")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"getprogressid-callback"},"getProgress(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-10"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Gets the current progress, in seconds, of the playback.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"setplaybackspeedid-speedratio-callback"},"setPlaybackSpeed(id, speedRatio, callback)"),(0,d.mdx)("h4",{id:"version-added-078-11"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sets the speed ratio of the playback.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"speedRatio"),(0,d.mdx)("td",{parentName:"tr",align:null},"double"),(0,d.mdx)("td",{parentName:"tr",align:null},"The speed ratio of the playback. A double between 0 and 16 (inclusive)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"tofrontid-callback"},"toFront(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-12"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sends the media player to the front of the window.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"tobackid-callback"},"toBack(id, callback)"),(0,d.mdx)("h4",{id:"version-added-078-13"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sends the media player to the back of the window.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"setstretchmodeid-stretchmode-callback"},"setStretchMode(id, stretchMode, callback)"),(0,d.mdx)("h4",{id:"version-added-078-14"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Sets the stretch mode of the player.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the player")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"stretchMode"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#estretch-enum"},"eStretch")," enum"),(0,d.mdx)("td",{parentName:"tr",align:null},"The desired stretch mode")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"function"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"onplaybackstarted"},"onPlaybackStarted"),(0,d.mdx)("h4",{id:"version-added-078-15"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when playback is starting/resuming.")),(0,d.mdx)("h2",{id:"onplaybackpaused"},"onPlaybackPaused"),(0,d.mdx)("h4",{id:"version-added-078-16"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when playback is paused.")),(0,d.mdx)("h2",{id:"onplaybackstopped"},"onPlaybackStopped"),(0,d.mdx)("h4",{id:"version-added-078-17"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when playback is stopped.")),(0,d.mdx)("h2",{id:"onplaybackended"},"onPlaybackEnded"),(0,d.mdx)("h4",{id:"version-added-078-18"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when playback ends.")),(0,d.mdx)("h2",{id:"onplaybackerror"},"onPlaybackError"),(0,d.mdx)("h4",{id:"version-added-078-19"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when there was an error while trying to open a video.")),(0,d.mdx)("h2",{id:"estretch-enum"},"eStretch enum"),(0,d.mdx)("h4",{id:"version-added-078-20"},"Version added: 0.78"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"The stretch mode to use.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Option"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Fill"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Uniform"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"UniformToFill"),(0,d.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);