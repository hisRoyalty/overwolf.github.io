"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6590],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=t(27378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),s=function(e){return function(a){var t=d(a.components);return r.createElement(e,i({},a,{components:t}))}},d=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=d(e.components);return r.createElement(m.Provider,{value:a},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=n,c=s["".concat(l,".").concat(u)]||s[u]||f[u]||i;return t?r.createElement(c,o(o({ref:a},m),{},{components:t})):r.createElement(c,o({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(25773),n=(t(27378),t(35318));const i={id:141,image:"/img/embed/changelogs.jpg",title:"Version 0.141",sidebar_label:"0.141",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2020/january/141",id:"api/changelogs/overwolf-platform/2020/january/141",title:"Version 0.141",description:'* Manifest flag enabletopisolation has been "moved up" in the hirarchy:',source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/january/141.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/january",slug:"/api/changelogs/overwolf-platform/2020/january/141",permalink:"/api/changelogs/overwolf-platform/2020/january/141",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/january/141.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"141",image:"/img/embed/changelogs.jpg",title:"Version 0.141",sidebar_label:"0.141",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.142",permalink:"/api/changelogs/overwolf-platform/2020/february/142"},next:{title:"0.140",permalink:"/api/changelogs/overwolf-platform/2019/december/140"}},p={},m=[],s={toc:m};function d(e){let{components:a,...t}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Manifest flag ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#enable_top_isolation"},"enable_top_isolation"),' has been "moved up" in the hirarchy:',(0,n.mdx)("br",{parentName:"li"}),'Now it\'s per app and not per windows - means, it\'s under the "data" node and not the "window" node.',(0,n.mdx)("br",{parentName:"li"}),"Note that it's backward compatible (means that if one of the app windows set this flag in the manifest - it will auto-merge to the entire app)."),(0,n.mdx)("li",{parentName:"ul"},"New function: ",(0,n.mdx)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},"overwolf.utils.OpenFilePicker"),".",(0,n.mdx)("br",{parentName:"li"}),"Now also accepts an initialPath parameter."),(0,n.mdx)("li",{parentName:"ul"},'Logs: now end with the extension "log" (instead of numbers).',(0,n.mdx)("br",{parentName:"li"}),"In addition, logs file names are now counted where the last number one is the newest file.  "),(0,n.mdx)("li",{parentName:"ul"},"New function: ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#splitstreamid-callback"},"overwolf.streaming.split"),".",(0,n.mdx)("br",{parentName:"li"}),"Split video files."),(0,n.mdx)("li",{parentName:"ul"},"Implement the main features of the ",(0,n.mdx)("a",{parentName:"li",href:"/topics/using-plugins/simple-io-plugin"},"IO-Pluign")," inside the ",(0,n.mdx)("a",{parentName:"li",href:"/api/io"},"overwolf.io")," API: ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#dirpath-callback"},"overwolf.io.dir()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#readbinaryfilepath-options-callback"},"overwolf.io.readBinaryFile()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#readtextfilepath-options-callback"},"overwolf.io.readTextFile()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#existpath-callback"},"overwolf.io.exist()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},"overwolf.io.listenOnFile()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/io#stopfilelistenerid"},"overwolf.io.stopFileListener()")))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/launchers/events/league-of-legends#docsNav"},"League of Legends Launcher Events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New ",(0,n.mdx)("a",{parentName:"li",href:"/status/launchers/league-of-legends"},"status page")," for LOL launcher."),(0,n.mdx)("li",{parentName:"ul"},"New update:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"is_garena_user"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/hearthstone#docsNav"},"Hearthstone game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New info updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Adventure Deck"),(0,n.mdx)("li",{parentName:"ul"},"adventure_loot_options"),(0,n.mdx)("li",{parentName:"ul"},"battlegrounds_rating"))))),(0,n.mdx)("li",{parentName:"ul"},"All game-events",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New update:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"gep_internal")))))))}d.isMDXComponent=!0}}]);