"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2409],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),f=n,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const o={id:236,image:"/img/embed/changelogs.jpg",title:"Version 0.236",sidebar_label:"0.236",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2023/november/236",id:"api/changelogs/overwolf-platform/2023/november/236",title:"Version 0.236",description:"Platform",source:"@site/../pages/api/changelogs/overwolf-platform/2023/november/236.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/november",slug:"/api/changelogs/overwolf-platform/2023/november/236",permalink:"/api/changelogs/overwolf-platform/2023/november/236",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2023/november/236.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1723060300,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{id:"236",image:"/img/embed/changelogs.jpg",title:"Version 0.236",sidebar_label:"0.236",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.240",permalink:"/api/changelogs/overwolf-platform/2023/december/240"},next:{title:"0.234",permalink:"/api/changelogs/overwolf-platform/2023/october/234"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OSR (in-game) windows can now opt in to enabling hardware acceleration, using the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#extension_window_data-object"},(0,n.kt)("inlineCode",{parentName:"a"},"disable_hardware_acceleration"))," flag.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"This is still turned off by default, and should only be used if absolutely necessary, as it can have a relatively large performance impact.")))),(0,n.kt)("li",{parentName:"ul"},"Apps can now set more than one url scheme, using the new ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#url_protocol-object"},(0,n.kt)("inlineCode",{parentName:"a"},"schemes"))," flag.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The ",(0,n.kt)("a",{parentName:"em",href:"/api/manifest#url_protocol-object"},(0,n.kt)("inlineCode",{parentName:"a"},"scheme"))," flag is still supported to maintain backwards compatibility, but is no longer recommended for usage."))))),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#getallappscallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.getAllApps()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns all active hotkeys, for all games, across all active Apps + all Overwolf Platform hotkeys."))),(0,n.kt)("li",{parentName:"ul"},"Updated API - Added the ",(0,n.kt)("inlineCode",{parentName:"li"},"disable_auto_shutdown_on_game_exit")," field to the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streamvideooptions-object"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamVideoOptions"))," object.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows an App to opt out of having the streaming API's recording engine automatically shut down once a game session\nit was targeting ends, leaving the responsibility for closing it to the App itself."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"It is still heavily recommended to shut down the recording engine as soon as you are done with the game it was started for, rather than keeping it around.")))),(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions/current#getphasedpercentcallback-version"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.extensions.current.getPhasedPercent()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns the Apps' ",(0,n.kt)("inlineCode",{parentName:"li"},"Phasing Percentage")," for a given version (defaults to the last fully rolled out version).")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where, in some edge cases, the Overwolf Client would not shut down properly when closed."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the App's uninstall window would not open if it wasn't running.")))}c.isMDXComponent=!0}}]);