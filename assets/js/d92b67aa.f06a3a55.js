"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3876],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const i={id:"video-capture",image:"/img/embed/api-best-practices.jpg",title:"Video capture best practices",sidebar_label:"Video capture best practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"topics/best-practices/video-capture",id:"topics/best-practices/video-capture",title:"Video capture best practices",description:"Overview",source:"@site/../pages/topics/best-practices/video-capture.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/video-capture",permalink:"/topics/best-practices/video-capture",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/video-capture.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1718545651,formattedLastUpdatedAt:"Jun 16, 2024",frontMatter:{id:"video-capture",image:"/img/embed/api-best-practices.jpg",title:"Video capture best practices",sidebar_label:"Video capture best practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Use Tab as an app Hotkey",permalink:"/topics/best-practices/using-tab"},next:{title:"Developers Content",permalink:"/topics/community-help/creators-content"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Required Permissions",id:"required-permissions",level:2},{value:"Notes",id:"notes",level:4},{value:"Choosing the right Encoder",id:"choosing-the-right-encoder",level:2},{value:"Windows 10 Hardware-Accelerated GPU Scheduling notice",id:"windows-10-hardware-accelerated-gpu-scheduling-notice",level:4},{value:"Comparison table",id:"comparison-table",level:2},{value:"Recording resolutions",id:"recording-resolutions",level:2},{value:"How to use",id:"how-to-use",level:4},{value:"Using overwolf.media.replays",id:"using-overwolfmediareplays",level:2},{value:"Manual Capture",id:"manual-capture",level:3},{value:"Auto-highlights capture",id:"auto-highlights-capture",level:3},{value:"Using overwolf.streaming",id:"using-overwolfstreaming",level:2},{value:"Usage flow",id:"usage-flow",level:3},{value:"Extras",id:"extras",level:3},{value:"External links",id:"external-links",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Overwolf offers two APIs with video capturing capabilities:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays"},"overwolf.media.replays"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mainly used to capture ",(0,n.kt)("strong",{parentName:"li"},"short")," highlight video replays of the currently running game."),(0,n.kt)("li",{parentName:"ul"},"You can capture a highlight manually, or you can use ",(0,n.kt)("strong",{parentName:"li"},"auto-highlights capturing"),"."),(0,n.kt)("li",{parentName:"ul"},"Meant only for video capture to the local hard drive, ",(0,n.kt)("strong",{parentName:"li"},"without streaming"),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"overwolf.streaming"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mainly used to capture ",(0,n.kt)("strong",{parentName:"li"},"long")," videos of the currently running game, up to a full game capture."),(0,n.kt)("li",{parentName:"ul"},"Only manual capture is available, ",(0,n.kt)("strong",{parentName:"li"},"No auto-highlights capturing"),"."),(0,n.kt)("li",{parentName:"ul"},"In addition to local capture, ",(0,n.kt)("strong",{parentName:"li"},"streaming option is available")," to supported services like Twitch, YouTube, Facebook, etc.")),(0,n.kt)("h2",{id:"required-permissions"},"Required Permissions"),(0,n.kt)("p",null,"Using any of the above APIs requires the ",(0,n.kt)("strong",{parentName:"p"},"VideoCaptureSettings"),' permission flag in your app manifest: Only apps with this permission will be defined as capture apps which can be configured in the OW client "capture" tab (see /api/manifest-json#permissions-array)'),(0,n.kt)("h4",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'For playing a video from the local disk (using absolute file paths instead of the generated Overwolf "media://" path), you require adding ',(0,n.kt)("strong",{parentName:"li"},"allow_local_file_access: true")," flag in your app manifest."),(0,n.kt)("li",{parentName:"ul"},"There is a problem with playing a video from the local disk when your app is running from within an iframe that is on a non-local domain.")),(0,n.kt)("p",null,"See for an example the ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},"overwolf.streaming.stop()")," documentation."),(0,n.kt)("h2",{id:"choosing-the-right-encoder"},"Choosing the right Encoder"),(0,n.kt)("p",null,'When capturing a video, a "video encoder" is used.',(0,n.kt)("br",{parentName:"p"}),"\n","Both of the APIs, ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},"overwolf.streaming")," and ",(0,n.kt)("a",{parentName:"p",href:"/api/media/replays"},"overwolf.media.replays")," offer ways to manually set a video encoder or use the default encoder that the user defines through the OW client UI."),(0,n.kt)("p",null,"To get the best capture results according to your requirements, It is highly recommended to check which encoder is set before capturing videos in your app. You can get the list of available encoders for the current user using ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},"overwolf.streaming.getStreamEncoders()"),"."),(0,n.kt)("p",null,"There are CPU/software-based encoders, like the X264, and there are GPU based encoders from Intel (QSV), NVIDIA (NVEnc) and AMD (VCE). CPU encoding is focused on quality where GPU encoding is focused on speed. So CPU/software encoders like the X264 are quality wise better than GPU based encoders.  "),(0,n.kt)("p",null,"If you can accept lower quality or higher final bitrate then GPU encoder will be faster, if your goal is highest possible quality at lowest possible bitrate then CPU based encoder will be closer to your goal at a cost of encoding time. Just remember that CPU/software encoders like X264 consume a lot of CPU and might cause some lagging videos or other issues, mostly if the capture resolution or FPS are set to high in through the OW client."),(0,n.kt)("p",null,"If you recognize that the user is using a CPU/software-based encoder, like the X264, it's recommended to choose one of these options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Without notifying the user - manually override the user encoder with other available GPU-based encoders.  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note that these settings will apply only to your app and will not change the encoder settings as defined by the user through the OW client UI."))),(0,n.kt)("li",{parentName:"ol"},"With Notifying the user - let them know that the chosen encoder might cause low-quality video captures.",(0,n.kt)("br",{parentName:"li"}),"Then, let the user decide if they want to change the encoder to other GPU based encoders, or choose to lower the resolution and/or FPS.  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"#windows-10-hardware-accelerated-gpu-scheduling-notice"},"this"),' suggested warning window with a link to the "capture" OW client settings.')))),(0,n.kt)("h4",{id:"windows-10-hardware-accelerated-gpu-scheduling-notice"},"Windows 10 Hardware-Accelerated GPU Scheduling notice"),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"The Hardware-Accelerated GPU Scheduling feature is currently supported on Windows 10 version 2004 or Build 19041 and Nvidia latest GPU driver (451.49)."),(0,n.kt)("p",{parentName:"admonition"},"When set to On, it might cause captured videos to be laggy/choppy."),(0,n.kt)("p",{parentName:"admonition"},"You can detect if it's ON by calling ",(0,n.kt)("a",{parentName:"p",href:"/api/utils"},"overwolf.utils.getSystemInformation()"),". The callback object contains the ",(0,n.kt)("strong",{parentName:"p"},"HAGSEnabled")," property that can be true or false."),(0,n.kt)("p",{parentName:"admonition"},"If you detect it is ON, you should display a warning to the user with a link to set this setting to OFF."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Suggested warning window"),"  "),(0,n.kt)("p",{parentName:"admonition"},"We attached here a recommended warning window design to inform the user that a video capture issue is detected, with a button that opens the relevant Windows Graphics settings."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Window Title: Video capture issue detected."),(0,n.kt)("li",{parentName:"ul"},'Body: The "Hardware-accelerated GPU scheduling" option on Windows settings is turned on. We highly recommend turning it off, as it can make your captured videos choppy.'),(0,n.kt)("li",{parentName:"ul"},"Learn more: link to ",(0,n.kt)("a",{parentName:"li",href:"https://support.overwolf.com/en/support/solutions/articles/9000181387-common-capture-issues#accel"},"our support knowledgebase")," for detailed info."),(0,n.kt)("li",{parentName:"ul"},"Primary button: Open Windows Settings by calling:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/utils#openurlindefaultbrowserurl"},"overwolf.utils.openUrlInDefaultBrowser('ms-settings:display-advancedgraphics')"),";."))),(0,n.kt)("li",{parentName:"ul"},"Secondary button: Close.")),(0,n.kt)("p",{parentName:"admonition"},"Screenshot:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"alt-text",src:a(42951).Z,width:"759",height:"484"}))),(0,n.kt)("h2",{id:"comparison-table"},"Comparison table"),(0,n.kt)("p",null,"To summarize, these are the main differences between the ",(0,n.kt)("strong",{parentName:"p"},"overwolf.media.replays")," API to the ",(0,n.kt)("strong",{parentName:"p"},"overwolf.streaming")," API:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"overwolf.media.replays"),(0,n.kt)("th",{parentName:"tr",align:null},"overwolf.streaming"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auto-highlights capturing"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manual capture"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Custom capture length"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Streaming support"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"+")))),(0,n.kt)("h2",{id:"recording-resolutions"},"Recording resolutions"),(0,n.kt)("p",null,"The capture APIs (overwolf.media.replays and overwolf.streaming) support alternative recording resolutions.",(0,n.kt)("br",{parentName:"p"}),"\n","Note that it's not mandatory, and you don't have to set it explicitly if you don't need/want to."),(0,n.kt)("p",null,"You can choose one of the following recording resolutions types:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Original -  Original calculation to get the output resolution for the needed quality keeping the aspect ratio."),(0,n.kt)("li",{parentName:"ul"},"Exact - get the same/exact resolution quality the user wanted (1080, 720, 480), keeping the game's original aspect ratio."),(0,n.kt)("li",{parentName:"ul"},"Close - find from the generated list the closest entry to quality the user wanted, keeping the game's original aspect ratio.")),(0,n.kt)("h4",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"Before you start the capture (in both capture APIs), you have to define the video options in your settings.\nIn this object, you can set the ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},"base_frame_size_source")," and ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},"frame_size_method"),"."),(0,n.kt)("p",null,"An example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},' let settings = \n {\n   "video": {\n      "base_frame_size_source" : overwolf.streaming.enums.eVideoBaseFrameSizeSource.Auto, // Setting|Auto, if not set, "Setting" is the default\n      "frame_size_method": overwolf.streaming.enums.eVideoFrameSizeCalcMetho.Original  // Original|ExactOrKeepRatio|ExactOrClosestResolution\n   }\n };\n')),(0,n.kt)("h2",{id:"using-overwolfmediareplays"},"Using overwolf.media.replays"),(0,n.kt)("p",null,"With this API, you can listen to game events and manually start and stop video capture."),(0,n.kt)("p",null,"With auto-highlights capture enabled, there's no need to understand each supported game's mechanics, game flow, edge cases, timings, etc. Just request any supported game's highlight, and OW provides you with a video file that includes this event."),(0,n.kt)("p",null,"Here you can find a ",(0,n.kt)("a",{parentName:"p",href:"/api/media/replays/auto-highlights"},"list of auto-highlights supported games"),"."),(0,n.kt)("p",null,"Below, you can find a description of both capture methods: manual capture and auto-highlights capture."),(0,n.kt)("h3",{id:"manual-capture"},"Manual Capture"),(0,n.kt)("p",null,"Basic usage flow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Register to relevant capture events for your app.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#events-reference"},"available events")," are: onCaptureError, onCaptureStopped, onCaptureWarning, onReplayServicesStarted."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Choose the right video encoder"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Get the available stream encoders: Call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getStreamEncoders()"),".",(0,n.kt)("br",{parentName:"li"}),"(You can also call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getAudioDevices()")," and choose a specific audio device)."),(0,n.kt)("li",{parentName:"ul"},"This returns a list of all possible encoders and audio devices \u2013 you can then use this list to let users select their preferred encoder/device."),(0,n.kt)("li",{parentName:"ul"},"In terms of encoder priorities \u2013 we recommend: NVIDIA > AMD > INTEL > x264. (This is also the order used to select the default encoder)"),(0,n.kt)("li",{parentName:"ul"},'As long as the "enabled" encoder\'s property is set to true, you can offer users to use this encoder.'),(0,n.kt)("li",{parentName:"ul"},"Note that you don't have to set the Encoder explicitly. Instead, the API will automatically use the default encoder for this machine.   "),(0,n.kt)("li",{parentName:"ul"},"More info can be found in the ",(0,n.kt)("a",{parentName:"li",href:"#choosing-the-right-encoder"},"Choosing the right Encoder")," section above. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#turnonparameters-callback"},"overwolf.media.replays.turnOn()"))," with the auto-highlights feature disabled:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("strong",{parentName:"li"},"enable")," field of the ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replayhighlightssetting-object"},"overwolf.media.replays.ReplayHighlightsSetting")," Object to ",(0,n.kt)("strong",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},"You may also set the capture buffer that is used for all the other functions:",(0,n.kt)("br",{parentName:"li"}),"For example, if you set a 3 minute buffer, you will be able to capture game highlights not longer than this buffer."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Listen to your game events")," and wait for the game highlight (match_start, kill, etc.) that you want to capture.",(0,n.kt)("br",{parentName:"p"}),"\n","Once it occurred - start to video capture the screen:")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#startcapturereplaytype-pastduration-callback"},"overwolf.media.replays.startCapture()"))," methods:  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note that it won't automatically stop until you call ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#stopcapturereplaytype-replayid-callback"},"stopCapture()"),"."),(0,n.kt)("li",{parentName:"ul"},"It's useful if you want to stop the capturing based on a future event. If you want to automatically stop after it reaches ",(0,n.kt)("strong",{parentName:"li"},"futureDuration"),", you can use ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#capturepastduration-futureduration-capturefinishedcallback-callback"},"capture()"),"."),(0,n.kt)("li",{parentName:"ul"},"Note that in all methods, the replay ID returns via callback, and it is needed to finish capturing the replay."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#stopcapturereplaytype-replayid-callback"},"overwolf.media.replays.stopCapture()")),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Finishes capturing a replay and returns a URL leading to the created video file. "),(0,n.kt)("li",{parentName:"ul"},"Note that you only need to call stop if you called ",(0,n.kt)("strong",{parentName:"li"},"startCapture()")," without setting the ",(0,n.kt)("strong",{parentName:"li"},"futureDuration")," parameter. Otherwise, the capture is stopped automatically."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#turnoffcallback"},"overwolf.media.replays.turnOff()")),", as soon as you\u2019re no longer interested in capturing video in order to free up resources."))),(0,n.kt)("h3",{id:"auto-highlights-capture"},"Auto-highlights capture"),(0,n.kt)("p",null,"Basic usage flow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Register to relevant capture events for your app."),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#events-reference"},"available events")," are: onCaptureError, onCaptureStopped, onCaptureWarning, onReplayServicesStarted, onHighlightsCaptured."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Choose the right video encoder"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Get the available stream encoders: Call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getStreamEncoders()"),".",(0,n.kt)("br",{parentName:"li"}),"(You can also call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getAudioDevices()")," and choose a specific audio device)."),(0,n.kt)("li",{parentName:"ul"},"This returns a list of all possible encoders and audio devices \u2013 you can then use this list to let users select their preferred encoder/device."),(0,n.kt)("li",{parentName:"ul"},"In terms of encoder priorities \u2013 we recommend: NVIDIA > AMD > INTEL > x264."),(0,n.kt)("li",{parentName:"ul"},'As long as the "enabled" encoder\'s property is set to true, you can offer users to use this encoder.'),(0,n.kt)("li",{parentName:"ul"},"Note that you don't have to set the Encoder explicitly. Instead, the API will automatically use the default encoder for this machine.   "),(0,n.kt)("li",{parentName:"ul"},"More info can be found in the ",(0,n.kt)("a",{parentName:"li",href:"#choosing-the-right-encoder"},"Choosing the right Encoder")," section above. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#turnonparameters-callback"},"overwolf.media.replays.turnOn()"))," with the auto-highlights feature enabled:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("strong",{parentName:"li"},"enable")," field of the ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replayhighlightssetting-object"},"overwolf.media.replays.ReplayHighlightsSetting")," Object to ",(0,n.kt)("strong",{parentName:"li"},"true"),".",(0,n.kt)("br",{parentName:"li"}),"Here you also set the capture buffer that is used for all the other functions."),(0,n.kt)("li",{parentName:"ul"},"With this mode, you don't need to start or stop the capture. It's done automatically."),(0,n.kt)("li",{parentName:"ul"},"Once a highlight is captured, the ",(0,n.kt)("strong",{parentName:"li"},"onHighlightsCaptured")," event is triggered, and contain the URL of the created video file."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays#turnoffcallback"},"overwolf.media.replays.turnOff()")),", as soon as you\u2019re no longer interested in capturing, in order to free up resources."))),(0,n.kt)("p",null,'Note that all the processes that use the auto-highlights mode considered to be a "single" user. So no conflicts. Few apps can work together and capture the same highlights.'),(0,n.kt)("h2",{id:"using-overwolfstreaming"},"Using overwolf.streaming"),(0,n.kt)("p",null,"With this API, there is no auto-detect and auto-capture of the game highlights, as it mainly used to capture the full-length of the game (or stream it to Twitch, Youtube, etc)."),(0,n.kt)("p",null,"You should mainly listen to when a game/match starts and when it end, and manually start and stop the video capture.  "),(0,n.kt)("h3",{id:"usage-flow"},"Usage flow"),(0,n.kt)("p",null,"This is the basic usage flow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Register to the relevant capture events")," for your app."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"available events")," are: onStreamingSourceImageChanged, onStopStreaming, onStartStreaming, onStreamingError, onStreamingWarning, onVideoFileSplited."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Choose the right video encoder"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Get the available stream encoders: Call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getStreamEncoders()"),".",(0,n.kt)("br",{parentName:"li"}),"(You can also call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"getAudioDevices()")," and choose a specific audio device)."),(0,n.kt)("li",{parentName:"ul"},"This returns a list of all possible encoders and audio devices \u2013 you can then use this list to let users select their preferred encoder/device."),(0,n.kt)("li",{parentName:"ul"},"In terms of encoder priorities \u2013 we recommend: NVIDIA > AMD > INTEL > x264."),(0,n.kt)("li",{parentName:"ul"},'As long as the "enabled" encoder\'s property is set to true, you can offer users to use this encoder.'),(0,n.kt)("li",{parentName:"ul"},"Note that you don't have to set the Encoder explicitly. Instead, the API will automatically use the default encoder for this machine.   "),(0,n.kt)("li",{parentName:"ul"},"More info can be found in the ",(0,n.kt)("a",{parentName:"li",href:"#choosing-the-right-encoder"},"Choosing the right Encoder")," section above. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call overwolf.streaming.start().")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create a JSON object with all streaming details and call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"start()"),".",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"Here")," you can find a complete usage example."),(0,n.kt)("li",{parentName:"ul"},"For video recording, you don\u2019t need the ",(0,n.kt)("strong",{parentName:"li"},"ingest_server"),", ",(0,n.kt)("strong",{parentName:"li"},"stream_info"),", and ",(0,n.kt)("strong",{parentName:"li"},"auth")," objects."),(0,n.kt)("li",{parentName:"ul"},"Increasing the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"keyframe_interval")," may help the performance but decrease in quality or inability to seek a specific resolution (if you want to slice the video, for example). We recommend using a value of 2, that offers a balance between picture quality and viewer join speed."),(0,n.kt)("li",{parentName:"ul"},"increase the ",(0,n.kt)("strong",{parentName:"li"},"max_kbps")," of the encoder configuration may help the performance, but increase the video file size.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For video recording, we recommend using a value of higher than 8000."),(0,n.kt)("li",{parentName:"ul"},"For streaming, we recommend using a value smaller than 3000."))),(0,n.kt)("li",{parentName:"ul"},"Once start succeeded, you\u2019ll get a callback with ",(0,n.kt)("strong",{parentName:"li"},'result.status == "success"')," and a ",(0,n.kt)("strong",{parentName:"li"},"stream_id")," that can be used to stop the streaming session or change the volume of the stream."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Allow users to change volume.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow the user to change volume with ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"changeVolume()")," while streaming."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call overwolf.streaming.stop().")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Call ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"stop()")," to stop the streaming session.")))),(0,n.kt)("h3",{id:"extras"},"Extras"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"setBRBImage()")," when streaming to Twitch.tv when ",(0,n.kt)("inlineCode",{parentName:"li"},"capture_desktop")," is not enabled, this will allow you to customize the Be-Right-Back image that viewers will see."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"setWindowStreamingMode")," for video recording and streaming \u2013 this method works on a per-overwolf-window basis \u2013 for each window you can decide if it is to be shown in the stream or not \u2013 regardless of whether the streamer is viewing it or not."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},"setWindowObsStreamingMode")," when you aren\u2019t streaming with Overwolf but want to leverage Overwolf\u2019s APIs and stream with OBS.")),(0,n.kt)("h2",{id:"external-links"},"External links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read more about ",(0,n.kt)("a",{parentName:"li",href:"https://blog.mobcrush.com/using-the-right-rate-control-in-obs-for-streaming-or-recording-4737e22895ed"},'Using the right "Rate Control" in OBS for streaming or recording'),"."),(0,n.kt)("li",{parentName:"ul"},"Read more about ",(0,n.kt)("a",{parentName:"li",href:"https://blog.mobcrush.com/boost-your-stream-quality-with-these-3-simple-settings-47ac974dbe56"},"Boost your stream quality with these 3 simple settings"),".")))}c.isMDXComponent=!0},42951:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/video-capture-issue-55aca48a2662930e902b98a5da489463.png"}}]);