"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7873],{35318:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>f});var r=t(27378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),c=n,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return t?r.createElement(f,i(i({ref:a},m),{},{components:t})):r.createElement(f,i({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},62103:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(25773),n=(t(27378),t(35318));const o={id:254,image:"/img/embed/changelogs.jpg",title:"Version 0.254",sidebar_label:"0.254",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2024/june/254",id:"api/changelogs/overwolf-platform/2024/june/254",title:"Version 0.254",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2024/june/254.mdx",sourceDirName:"api/changelogs/overwolf-platform/2024/june",slug:"/api/changelogs/overwolf-platform/2024/june/254",permalink:"/api/changelogs/overwolf-platform/2024/june/254",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2024/june/254.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1723060300,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{id:"254",image:"/img/embed/changelogs.jpg",title:"Version 0.254",sidebar_label:"0.254",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.256",permalink:"/api/changelogs/overwolf-platform/2024/july/256"},next:{title:"0.251",permalink:"/api/changelogs/overwolf-platform/2024/may/251"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("p",null,"OBS Updates and changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Audio changes ",(0,n.kt)("strong",{parentName:"li"},"(Applies to ",(0,n.kt)("a",{parentName:"strong",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"Streaming"))," and ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays"},(0,n.kt)("inlineCode",{parentName:"a"},"Replays"))," Settings)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Can now set ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#processaudiocapture-object"},(0,n.kt)("inlineCode",{parentName:"a"},"audio capture"))," sound from 0 to 2000."),(0,n.kt)("li",{parentName:"ul"},"Added an option to manually set and control ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#audiotracks-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"audio tracks"))," for the recorded video."),(0,n.kt)("li",{parentName:"ul"},"Added an option to set the audio ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#audiosamplerate-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"sample rate."))),(0,n.kt)("li",{parentName:"ul"},"Added an option to add and record multiple ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#audiodeviceoptions-object"},(0,n.kt)("inlineCode",{parentName:"a"},"audio devices."))),(0,n.kt)("li",{parentName:"ul"},"Added an extensive way to capture and control ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#processaudiocapture-object"},(0,n.kt)("inlineCode",{parentName:"a"},"captured process audio."))))),(0,n.kt)("li",{parentName:"ul"},"Video changes ",(0,n.kt)("strong",{parentName:"li"},"(Applies to ",(0,n.kt)("a",{parentName:"strong",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"Streaming"))," and ",(0,n.kt)("a",{parentName:"strong",href:"/api/media/replays"},(0,n.kt)("inlineCode",{parentName:"a"},"Replays"))," Settings)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added an option to set the video\u2019s ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#videocolorspec-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"color space."))),(0,n.kt)("li",{parentName:"ul"},"Added an option to set the video\u2019s ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#videocolorformat-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"color format."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"Streaming"))," API changes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow web camera to be captured on desktop capture."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays"},(0,n.kt)("inlineCode",{parentName:"a"},"Replays"))," API changes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a new flag to disable session folder naming."),(0,n.kt)("li",{parentName:"ul"},"Allow replays capture on desktop.")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an Overlay issue with Honkai: Star rail."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where we failed to delete an app\u2019s local settings when the ",(0,n.kt)("inlineCode",{parentName:"li"},"disable_cleanup")," manifest flag is enabled."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where ",(0,n.kt)("inlineCode",{parentName:"li"},"openUrlInDefaultBrowser()")," failed to open Windows\u2019 settings pages."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where applications set with ",(0,n.kt)("inlineCode",{parentName:"li"},"run as admin")," would have the ",(0,n.kt)("inlineCode",{parentName:"li"},"run as admin")," flag removed after launch."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the folder picker failed to open for a folder a user has no permission to.")))}d.isMDXComponent=!0}}]);