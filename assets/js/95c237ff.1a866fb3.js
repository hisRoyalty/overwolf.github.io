"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7873],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const o={id:254,image:"/img/embed/changelogs.jpg",title:"Version 0.254",sidebar_label:"0.254",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2024/june/254",id:"api/changelogs/overwolf-platform/2024/june/254",title:"Version 0.254",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2024/june/254.mdx",sourceDirName:"api/changelogs/overwolf-platform/2024/june",slug:"/api/changelogs/overwolf-platform/2024/june/254",permalink:"/api/changelogs/overwolf-platform/2024/june/254",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2024/june/254.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1720944629,formattedLastUpdatedAt:"Jul 14, 2024",frontMatter:{id:"254",image:"/img/embed/changelogs.jpg",title:"Version 0.254",sidebar_label:"0.254",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Version 23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0"},next:{title:"0.251",permalink:"/api/changelogs/overwolf-platform/2024/may/251"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("p",null,"OBS Updates and changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio changes ",(0,r.kt)("strong",{parentName:"li"},"(Applies to ",(0,r.kt)("a",{parentName:"strong",href:"/api/streaming"},(0,r.kt)("inlineCode",{parentName:"a"},"Streaming"))," and ",(0,r.kt)("a",{parentName:"strong",href:"/api/media/replays"},(0,r.kt)("inlineCode",{parentName:"a"},"Replays"))," Settings)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can now set ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#processaudiocapture-object"},(0,r.kt)("inlineCode",{parentName:"a"},"audio capture"))," sound from 0 to 2000."),(0,r.kt)("li",{parentName:"ul"},"Added an option to manually set and control ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#audiotracks-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"audio tracks"))," for the recorded video."),(0,r.kt)("li",{parentName:"ul"},"Added an option to set the audio ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#audiosamplerate-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"sample rate."))),(0,r.kt)("li",{parentName:"ul"},"Added an option to add and record multiple ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#audiodeviceoptions-object"},(0,r.kt)("inlineCode",{parentName:"a"},"audio devices."))),(0,r.kt)("li",{parentName:"ul"},"Added an extensive way to capture and control ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#processaudiocapture-object"},(0,r.kt)("inlineCode",{parentName:"a"},"captured process audio."))))),(0,r.kt)("li",{parentName:"ul"},"Video changes ",(0,r.kt)("strong",{parentName:"li"},"(Applies to ",(0,r.kt)("a",{parentName:"strong",href:"/api/streaming"},(0,r.kt)("inlineCode",{parentName:"a"},"Streaming"))," and ",(0,r.kt)("a",{parentName:"strong",href:"/api/media/replays"},(0,r.kt)("inlineCode",{parentName:"a"},"Replays"))," Settings)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added an option to set the video\u2019s ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#videocolorspec-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"color space."))),(0,r.kt)("li",{parentName:"ul"},"Added an option to set the video\u2019s ",(0,r.kt)("a",{parentName:"li",href:"/api/streaming#videocolorformat-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"color format."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/streaming"},(0,r.kt)("inlineCode",{parentName:"a"},"Streaming"))," API changes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allow web camera to be captured on desktop capture."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/media/replays"},(0,r.kt)("inlineCode",{parentName:"a"},"Replays"))," API changes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added a new flag to disable session folder naming."),(0,r.kt)("li",{parentName:"ul"},"Allow replays capture on desktop.")))),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an Overlay issue with Honkai: Star rail."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where we failed to delete an app\u2019s local settings when the ",(0,r.kt)("inlineCode",{parentName:"li"},"disable_cleanup")," manifest flag is enabled."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where ",(0,r.kt)("inlineCode",{parentName:"li"},"openUrlInDefaultBrowser()")," failed to open Windows\u2019 settings pages."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where applications set with ",(0,r.kt)("inlineCode",{parentName:"li"},"run as admin")," would have the ",(0,r.kt)("inlineCode",{parentName:"li"},"run as admin")," flag removed after launch."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the folder picker failed to open for a folder a user has no permission to.")))}d.isMDXComponent=!0}}]);