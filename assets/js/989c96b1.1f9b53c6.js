"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4413],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const i={id:228,image:"/img/embed/changelogs.jpg",title:"Version 0.228",sidebar_label:"0.228",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/july/228",id:"api/changelogs/overwolf-platform/2023/july/228",title:"Version 0.228",description:"* Note that iterations 227 and 228 were combined into a single version.",source:"@site/../pages/api/changelogs/overwolf-platform/2023/july/228.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/july",slug:"/api/changelogs/overwolf-platform/2023/july/228",permalink:"/api/changelogs/overwolf-platform/2023/july/228",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/july/228.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721227860,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{id:"228",image:"/img/embed/changelogs.jpg",title:"Version 0.228",sidebar_label:"0.228",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.230",permalink:"/api/changelogs/overwolf-platform/2023/july/230"},next:{title:"0.226",permalink:"/api/changelogs/overwolf-platform/2023/june/226"}},p={},s=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that iterations 227 and 228 were combined into a single version.")),(0,r.kt)("h3",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App developers will now ",(0,r.kt)("strong",{parentName:"li"},"always")," get new app versions as soon as they begin rollout (Game Events, OBS, and even 3rd party apps), regardless of the versions' phasing %.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes anyone signed in with a whitelisted account, as well as anyone using the ",(0,r.kt)("inlineCode",{parentName:"li"},"Developers")," channel in the client."))),(0,r.kt)("li",{parentName:"ul"},"Improved detection of installed games.")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed several default ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest"},"manifest")," values (All of these values ",(0,r.kt)("strong",{parentName:"li"},"must")," stay in their new default to display Ads):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.[WINDOWNAME].block_top_window_navigation")," - Will now default to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.[WINDOWNAME].mute")," - Will now default to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.[WINDOWNAME].popup_blocker")," - Will now default to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/social/youtube#shareexyoutubeshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()"))," - Will now throw a ",(0,r.kt)("inlineCode",{parentName:"li"},"NoChannelsFound")," error if the user is logged in, but does not have a Youtube channel associated with this Google account.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue when attempting to share a picture with a ",(0,r.kt)("inlineCode",{parentName:"li"},".jpeg")," file format."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue when attempting to load a picture through ",(0,r.kt)("inlineCode",{parentName:"li"},"overwolf://media/screenshots/custom/...")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},".jpeg")," file format."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue when attempting to share a video to twitter, where the width and/or height of the video is not divisible by 2."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the client would sometimes open the settings app when performing other actions within it."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the ",(0,r.kt)("a",{parentName:"li",href:"/api/games/input-tracking#onkeyup"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.inputTracking.onKeyUp"))," and ",(0,r.kt)("a",{parentName:"li",href:"/api/games/input-tracking#onkeydown"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.inputTracking.onKeyDown"))," events would sometimes fire out of order."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where ",(0,r.kt)("inlineCode",{parentName:"li"},"in_game_only: true")," windows would sometimes resize incorrectly when ",(0,r.kt)("inlineCode",{parentName:"li"},"min_size")," is also set.")))}m.isMDXComponent=!0}}]);