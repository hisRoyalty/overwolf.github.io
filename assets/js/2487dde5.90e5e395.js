"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2312],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,d=m["".concat(p,".").concat(c)]||m[c]||f[c]||i;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const i={id:141,image:"/img/embed/changelogs.jpg",title:"Version 0.141",sidebar_label:"0.141",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2020/january/141",id:"api/changelogs/overwolf-platform/2020/january/141",title:"Version 0.141",description:'* Manifest flag enabletopisolation has been "moved up" in the hirarchy:',source:"@site/../pages/api/changelogs/overwolf-platform/2020/january/141.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/january",slug:"/api/changelogs/overwolf-platform/2020/january/141",permalink:"/api/changelogs/overwolf-platform/2020/january/141",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/january/141.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1718200663,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"141",image:"/img/embed/changelogs.jpg",title:"Version 0.141",sidebar_label:"0.141",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.142",permalink:"/api/changelogs/overwolf-platform/2020/february/142"},next:{title:"0.140",permalink:"/api/changelogs/overwolf-platform/2019/december/140"}},p={},s=[],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Manifest flag ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#enable_top_isolation"},"enable_top_isolation"),' has been "moved up" in the hirarchy:',(0,n.kt)("br",{parentName:"li"}),'Now it\'s per app and not per windows - means, it\'s under the "data" node and not the "window" node.',(0,n.kt)("br",{parentName:"li"}),"Note that it's backward compatible (means that if one of the app windows set this flag in the manifest - it will auto-merge to the entire app)."),(0,n.kt)("li",{parentName:"ul"},"New function: ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},"overwolf.utils.OpenFilePicker"),".",(0,n.kt)("br",{parentName:"li"}),"Now also accepts an initialPath parameter."),(0,n.kt)("li",{parentName:"ul"},'Logs: now end with the extension "log" (instead of numbers).',(0,n.kt)("br",{parentName:"li"}),"In addition, logs file names are now counted where the last number one is the newest file.  "),(0,n.kt)("li",{parentName:"ul"},"New function: ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#splitstreamid-callback"},"overwolf.streaming.split"),".",(0,n.kt)("br",{parentName:"li"}),"Split video files."),(0,n.kt)("li",{parentName:"ul"},"Implement the main features of the ",(0,n.kt)("a",{parentName:"li",href:"/topics/using-plugins/simple-io-plugin"},"IO-Pluign")," inside the ",(0,n.kt)("a",{parentName:"li",href:"/api/io"},"overwolf.io")," API: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#dirpath-callback"},"overwolf.io.dir()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#readbinaryfilepath-options-callback"},"overwolf.io.readBinaryFile()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#readtextfilepath-options-callback"},"overwolf.io.readTextFile()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#existpath-callback"},"overwolf.io.exist()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},"overwolf.io.listenOnFile()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/io#stopfilelistenerid"},"overwolf.io.stopFileListener()")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-launchers/league-of-legends#docsNav"},"League of Legends Launcher Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/status/launchers/league-of-legends"},"status page")," for LOL launcher."),(0,n.kt)("li",{parentName:"ul"},"New update:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is_garena_user"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/hearthstone#docsNav"},"Hearthstone game events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info updates:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adventure Deck"),(0,n.kt)("li",{parentName:"ul"},"adventure_loot_options"),(0,n.kt)("li",{parentName:"ul"},"battlegrounds_rating"))))),(0,n.kt)("li",{parentName:"ul"},"All game-events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New update:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gep_internal")))))))}m.isMDXComponent=!0}}]);