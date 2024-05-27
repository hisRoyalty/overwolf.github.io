"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6993],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={id:224,image:"/img/embed/changelogs.jpg",title:"Version 0.224",sidebar_label:"0.224",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/may/224",id:"api/changelogs/overwolf-platform/2023/may/224",title:"Version 0.224",description:"As a part of this update, the recording API documentation is being rennovated. As such, some of these changes may not yet appear within their respective pages.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/may/224.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/may",slug:"/api/changelogs/overwolf-platform/2023/may/224",permalink:"/api/changelogs/overwolf-platform/2023/may/224",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/may/224.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716808707,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"224",image:"/img/embed/changelogs.jpg",title:"Version 0.224",sidebar_label:"0.224",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.226",permalink:"/api/changelogs/overwolf-platform/2023/june/226"},next:{title:"0.223",permalink:"/api/changelogs/overwolf-platform/2023/may/223"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"As a part of this update, the recording API documentation is being rennovated. As such, some of these changes may not yet appear within their respective pages.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated the underlying ",(0,a.kt)("inlineCode",{parentName:"li"},"OBS")," recording engine version (27.2.3 -> 29.1.0). Notable changes include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deprecated the ",(0,a.kt)("inlineCode",{parentName:"strong"},"NVIDIA_NVENC")," encoder")),(0,a.kt)("li",{parentName:"ul"},"Improvements to the ",(0,a.kt)("inlineCode",{parentName:"li"},"AMD_AMF")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"INTEL")," (Quick Sync) video encoders",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The new ",(0,a.kt)("inlineCode",{parentName:"li"},"AMD_AMF")," implementation should run faster across the board, but may see a slight performance loss on considerably older hardware"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"INTEL")," encoder's underlying implementation has changed. On some older systems where it is not supported, the old encoder will still be used."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"INTEL")," encoder has new encoder presets, which also cover the underlying OBS ",(0,a.kt)("inlineCode",{parentName:"li"},"target_usage")," parameter."))),(0,a.kt)("li",{parentName:"ul"},"Added three new ",(0,a.kt)("inlineCode",{parentName:"li"},"HEVC")," encoders - ",(0,a.kt)("inlineCode",{parentName:"li"},"NVIDIA_NVENC_HEVC"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"INTEL_HEVC"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"AMD_AMF_HEVC"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"These new encoders can only be used for recordings, and cannot be played within in-game windows (they will however play within a native window)!"))),(0,a.kt)("li",{parentName:"ul"},"Various changes to the lists of supported video encoders and encoder presets - the full up-to-date list can be found ",(0,a.kt)("a",{parentName:"li",href:"/api/general/obs#list-of-supported-encoders"},"here"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Passing an invalid encoder preset will not throw an error, but instead use the default preset for that encoder. This also includes deprecated encoder presets"))),(0,a.kt)("li",{parentName:"ul"},"Microphones can now be set to record as ",(0,a.kt)("a",{parentName:"li",href:"/api/streaming#streamdevicevolume-object"},(0,a.kt)("inlineCode",{parentName:"a"},"mono"))," rather than stereo."),(0,a.kt)("li",{parentName:"ul"},"Added support for the ",(0,a.kt)("inlineCode",{parentName:"li"},"encoder.config.profile")," parameter from the underlying OBS, which accepts a value from the ",(0,a.kt)("inlineCode",{parentName:"li"},"overwolf.streaming.enums.StreamEncoderProfile")," enum."),(0,a.kt)("li",{parentName:"ul"},"Added the ",(0,a.kt)("inlineCode",{parentName:"li"},"encoder_custom_parameters")," field to the ",(0,a.kt)("inlineCode",{parentName:"li"},"extra_options")," field, which allows you to pass encoder-related settings directly as is to the OBS engine,\noverriding any settings set by the Overwolf API. Documentation for finding the exact value names and values is currently in the works."),(0,a.kt)("li",{parentName:"ul"},"Removed error for using a wrong ",(0,a.kt)("inlineCode",{parentName:"li"},"encoder.config.preset")," value. Any invalid preset passed in will now instead default to the encoder's default preset.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This also means that both ",(0,a.kt)("inlineCode",{parentName:"li"},"config.preset")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," are no longer required parameters when setting a specific encoder."))))),(0,a.kt)("li",{parentName:"ul"},"Improved the ",(0,a.kt)("a",{parentName:"li",href:"/api/deprecated/twitter#sharetwittershareparameters-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.social.twitter.share()"))," and ",(0,a.kt)("a",{parentName:"li",href:"/api/deprecated/twitter#shareextwittershareparameters-callback-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.social.twitter.shareEx()"))," methods' error handling:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Trying to share unsupported video formats to twitter will now throw an ",(0,a.kt)("inlineCode",{parentName:"li"},"UnsupportedVideoEncoding")," error. This includes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Any videos recorded with a ",(0,a.kt)("inlineCode",{parentName:"li"},"*_HEVC")," Encoder."))),(0,a.kt)("li",{parentName:"ul"},"Errors resulting from the twitter API will now be passed directly to the app, instead of an ",(0,a.kt)("inlineCode",{parentName:"li"},"UnknownError"),".")))),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Opening two overlapping native windows at once will no longer cause them to flicker."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where calling ",(0,a.kt)("a",{parentName:"li",href:"/api/windows#bringtofrontwindowid-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront()"))," on a native window could unintentionally grab focus from the currently active game."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the game's audio volume setting would be ignored when using ",(0,a.kt)("inlineCode",{parentName:"li"},"filtered_capture"),".")))}c.isMDXComponent=!0}}]);