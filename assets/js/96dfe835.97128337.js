"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3410],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={id:"ow-events-recorder",image:"/img/embed/dev-tools.jpg",title:"Overwolf Events Recorder",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"tools/ow-testing-tools/ow-events-recorder/ow-events-recorder",id:"tools/ow-testing-tools/ow-events-recorder/ow-events-recorder",title:"Overwolf Events Recorder",description:"This tool can be found over in the following GitHub repository.",source:"@site/../pages/tools/ow-testing-tools/ow-events-recorder/ow-events-recorder.mdx",sourceDirName:"tools/ow-testing-tools/ow-events-recorder",slug:"/tools/ow-testing-tools/ow-events-recorder/",permalink:"/tools/ow-testing-tools/ow-events-recorder/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/ow-testing-tools/ow-events-recorder/ow-events-recorder.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719133412,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{id:"ow-events-recorder",image:"/img/embed/dev-tools.jpg",title:"Overwolf Events Recorder",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"tools",previous:{title:"Overwolf Testing Tools",permalink:"/tools/ow-testing-tools/"},next:{title:"Overwolf Events Tester",permalink:"/tools/ow-testing-tools/ow-events-tester/"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Supported APIs",id:"supported-apis",level:2},{value:"Supported API Events",id:"supported-api-events",level:3},{value:"Supported API Calls",id:"supported-api-calls",level:3},{value:"Creating effective recordings",id:"creating-effective-recordings",level:2},{value:"Full-Session recordings",id:"full-session-recordings",level:3},{value:"Mid-Session recordings",id:"mid-session-recordings",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Tabs"),u=d("TabItem"),m=d("SkipMe"),h=d("AdvancedTopic"),g={toc:p};function f(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"GitHub Repository",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This tool can be found over in the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overwolf/ow-events-recorder"},"GitHub repository"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Tabbed Application (",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Record"),")"),(0,a.kt)("p",{parentName:"admonition"},"This page specifically refers to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," tab of the relevant Application.",(0,a.kt)("br",{parentName:"p"}),"\n","For the other tabs, see ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-testing-tools/ow-events-tester"},"ow-events-tester"))),(0,a.kt)("p",null,"The Overwolf Events Recorder allows Developers to record important API Events/Calls that happen to them in real time.",(0,a.kt)("br",{parentName:"p"}),"\n","These recordings can then be used by the ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-testing-tools/ow-events-tester"},"ow-events-tester"),", to mimic the exact* state of the game,\nand ensure that your App reacts to it properly - Without even needing to run the game, much less replicate those exact scenarios."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," See ",(0,a.kt)("a",{parentName:"em",href:"#supported-apis"},"Supported APIs"),".")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started with the Game Events Recorder, you must first obtain the latest build."),(0,a.kt)(c,{groupId:"build-app",mdxType:"Tabs"},(0,a.kt)(u,{value:"download-unpacked",label:"Download as Unpacked Application (Quick)",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Simply download the latest build from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overwolf/ow-events-recorder/releases"},"release history")," and unzip it.")),(0,a.kt)(u,{value:"build-app",label:"Build Locally",mdxType:"TabItem"},(0,a.kt)("p",null,"To build the latest version locally, simply clone the github repositry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/overwolf/ow-events-recorder\n")),(0,a.kt)("p",null,"Then, once you're within the relevant folder, run the following (using your preferred package manager):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# Switch to the relevant folder\ncd ow-events-recorder\n\n# Install all dependencies\nnpm i\n\n# Build the application\nnpm run build\n")),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," command finishes running, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," folder will correspond to the latest build."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When you have the latest build, simply load it as an unpacked extension, and you can start using the app.")),(0,a.kt)("h3",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"To quickly get started using the recorder, run the following in your chosen terminal (using your preferred package manager):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Install all dependencies\nnpm i\n\n// Build the application\nnpm run build\n")),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," command finishes running, simply load the newly created ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," folder as an unpacked Overwolf application, and launch it."),(0,a.kt)("p",null,"You should now be greeted by the following screen, in which case, you can already start recording your Session:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Start Recording",src:n(87991).Z,width:"464",height:"298"}),"\n",(0,a.kt)("em",{parentName:"p"},"Simply click the red circle, and any API events/calls from the ",(0,a.kt)("a",{parentName:"em",href:"#supported-apis"},"supported list")," will be recorded!")),(0,a.kt)("p",null,"Then, once you are ",(0,a.kt)("a",{parentName:"p",href:"#creating-effective-recordings"},"ready to stop recording"),", simply click the button again, and the recording will stop."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finished Recording",src:n(9194).Z,width:"465",height:"400"}),"\n",(0,a.kt)("em",{parentName:"p"},"You can then view, rename, or even delete the new recording, by hovering over it in the relevant screen")),(0,a.kt)("p",null,"This recording can then be used within the ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-testing-tools/ow-events-tester"},"Overwolf Events Tester"),", in order to see how your app would act during this specific event sequence."),(0,a.kt)("h2",{id:"supported-apis"},"Supported APIs"),(0,a.kt)("p",null,"The Overwolf Events Recorder can currently include the following ",(0,a.kt)("strong",{parentName:"p"},"Overwolf APIs*"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," Currently, only Overwolf APIs are supported. This means that external, game-based APIs, like the ",(0,a.kt)("a",{parentName:"em",href:"https://riot-api-libraries.readthedocs.io/en/latest/lcu.html"},"League of Legends LCU"),"\nare not supported, and need to be appropriately mocked for these tests.")),(0,a.kt)("h3",{id:"supported-api-events"},"Supported API Events"),(0,a.kt)("p",null,"The following events can be recorded (and then mimicked by the ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-testing-tools/ow-events-tester"},"Events Tester"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games#ongamelaunched"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.onGameLaunched"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.onGameInfoUpdated"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/events#ongameinfoupdated2"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.onGameInfoUpdated2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/events#onnewevents"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.onNewEvents"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/events#onerror"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.onError"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers#onlaunched"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.onLaunched"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers#onupdated"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.onUpdated"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers#onterminated"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.onTerminated"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers/events#oninfoupdates"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.events.onInfoUpdates"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers/events#onnewevents"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.events.onNewEvents")))),(0,a.kt)("h3",{id:"supported-api-calls"},"Supported API Calls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games#getrunninggameinfocallback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games#getrunninggameinfo2callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo2()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/events#setrequiredfeaturesfeatures-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.events.setRequiredFeatures()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers#getrunninglaunchersinfocallback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.getRunningLaunchersInfo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/games/launchers/events#setrequiredfeatureslauncherclassid-features-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.events.setRequiredFeatures()")))),(0,a.kt)("h2",{id:"creating-effective-recordings"},"Creating effective recordings"),(0,a.kt)("p",null,"The Overwolf Events Recorder can record all Events and Calls made while a recording Session is running.\nHowever, ",(0,a.kt)("strong",{parentName:"p"},"it will not record things outside of that timeframe.")," As such, it is highly recommended that you carefully plan out your recordings,\nto ensure that they cover the entire flow you use."),(0,a.kt)("h3",{id:"full-session-recordings"},"Full-Session recordings"),(0,a.kt)("p",null,"Full-Session recordings are the main type of recordings used. These are recordings made of a full game Session,\nincluding the entire chain of Events and Calls, from before a game was first launched, until after the last game was closed."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A recording of a full game Session, when a quick match was played, and then the game was closed."),(0,a.kt)("li",{parentName:"ul"},"A recording of a full long game Session, potentially spanning over several hours."),(0,a.kt)("li",{parentName:"ul"},"A recording of a Session where multiple full game Sessions were done in succession, at times without even closing the game.")),(0,a.kt)("p",null,"These recordings can be used to test more general App flows, ensuring that it behaves as expected, end-to-end.\nPaired up with the different playback tools included in the ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-testing-tools/ow-events-tester"},"Overwolf Events Tester"),", these can significantly help with automating tests."),(0,a.kt)("h3",{id:"mid-session-recordings"},"Mid-Session recordings"),(0,a.kt)(m,{mdxType:"SkipMe"},"#advanced",(0,a.kt)(h,{mdxType:"AdvancedTopic"})),(0,a.kt)("p",null,"Mid-Session recordings are a more advanced recording type, made in the middle of a game Session.\nThey do not include the entire chain of Events and Calls that has led the app to the current state,\nbut they do include specific set of Events and Calls that are relevant at this point."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A recording of a game round where one person took out the entire enemy team."),(0,a.kt)("li",{parentName:"ul"},"A recording of the character select phase."),(0,a.kt)("li",{parentName:"ul"},"A recording of the post-match phase.")),(0,a.kt)("p",null,"These recordings can be used to test specific App edge cases, rather than entire flows.",(0,a.kt)("br",{parentName:"p"}),"\n","However, they require you to ensure that the App is brought to a state where these recordings can reasonably happen,\nbefore starting to play them."),(0,a.kt)("p",null,"When properly chained together, these can be used as small ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unit_testing"},"Unit Tests")," for your App."))}f.isMDXComponent=!0},9194:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/finished-recording-e76d4086f0bc8e89a89e93671f716140.png"},87991:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/start-recording-a5203c145e89da727f1eb0b75e264e99.png"}}]);