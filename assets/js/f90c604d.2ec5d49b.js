"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[197],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||l;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},96482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const l={id:187,image:"/img/embed/changelogs.jpg",title:"Version 0.187",sidebar_label:"0.187",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/december/187",id:"api/changelogs/overwolf-platform/2021/december/187",title:"Version 0.187",description:"Docs",source:"@site/../pages/api/changelogs/overwolf-platform/2021/december/187.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/december",slug:"/api/changelogs/overwolf-platform/2021/december/187",permalink:"/api/changelogs/overwolf-platform/2021/december/187",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2021/december/187.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1716804302,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"187",image:"/img/embed/changelogs.jpg",title:"Version 0.187",sidebar_label:"0.187",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.188",permalink:"/api/changelogs/overwolf-platform/2022/january/188"},next:{title:"0.185",permalink:"/api/changelogs/overwolf-platform/2021/december/185"}},s={},p=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/league-of-legends"},"League of Legends"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New feature in:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jungle_camps",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"baron & rift_herald icon_status remains at zero value at all times (Full information ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf.github.io/blob/source/docs/games-events-league-of-legends.md#jungle_camp-note"},"here"),")."))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/magic-the-gathering-arena"},"MTGA"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removed draft token and sealed token from:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"inventory stats info update."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/rainbow-six-siege"},"Rainbow Six: Siege"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Since december 2021 patch - team colors provided by GEP do not correspond to the game's UI team color (the local player is always blue in the game's UI). The local player's score, team score and roster regarding to his color are still consistent."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/world-of-warcraft"},"World of Warcraft"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New feature in:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"addons"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/halo-infinite"},"Halo Infinite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game.")))),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New manifest flag for running background tasks when a user uninstalls an app like removing files, logs, images, etc...",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'You can set the new manifest flag (under "data"):',(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},'"uninstall_window": { "file": "name.html", "required_runtime": 20000 }')),(0,n.kt)("li",{parentName:"ul"},"More info ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#uninstall_window-object"},"here"),".")))),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Links open in default browser - All links existing in the store now open in the users\u2019 default browser."),(0,n.kt)("li",{parentName:"ul"},"Analytics - When installing apps from the store\u2019s carousel we specify it was from the carousel in the InstalledApp analytic.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where CEF wouldn\u2019t receive the real window size in some cases when restoring native windows."),(0,n.kt)("li",{parentName:"ul"},"Fixed cases where Overwolf would freeze when turning on Replays with a webcam and closing a game."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where users wouldn\u2019t be able to resize the game window if Overwolf was running as Admin.")))}u.isMDXComponent=!0}}]);