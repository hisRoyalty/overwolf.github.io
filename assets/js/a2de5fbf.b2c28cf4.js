"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9765],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const l={id:203,image:"/img/embed/changelogs.jpg",title:"Version 0.203",sidebar_label:"0.203",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2022/july/203",id:"api/changelogs/overwolf-platform/2022/july/203",title:"Version 0.203",description:"* Note that iterations 202 and 203 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2022/july/203.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/july",slug:"/api/changelogs/overwolf-platform/2022/july/203",permalink:"/api/changelogs/overwolf-platform/2022/july/203",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/july/203.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721816686,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"203",image:"/img/embed/changelogs.jpg",title:"Version 0.203",sidebar_label:"0.203",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.204",permalink:"/api/changelogs/overwolf-platform/2022/august/204"},next:{title:"0.201",permalink:"/api/changelogs/overwolf-platform/2022/july/201"}},p={},s=[{value:"Game events",id:"game-events",level:3},{value:"Docs",id:"docs",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note that iterations 202 and 203 were combined into a single iteration.")),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/teamfight-tactics"},"TFT"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Support for all the events in TFT PBE"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant"},"Valorant"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event - scoreboard. More info ",(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/valorant#scoreboard-note"},"here")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/deprecated/axie-infinity-origin"},"Axie Infinity Origin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add new events: draw_pile, pile_hand, match_outcome, last_card_played"),(0,n.kt)("li",{parentName:"ul"},"Add parameter battleid to battle_state event"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/minecraft"},"Minecraft"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add new event mc_version - the current Minecraft played version")))),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Backend cleanup"),(0,n.kt)("li",{parentName:"ul"},"Improved sidebar navigation (EXPERIMENTAL)"),(0,n.kt)("li",{parentName:"ul"},"Cleaner URLs (Older urls will still work!)"),(0,n.kt)("li",{parentName:"ul"},"Improved game-related page navigation"),(0,n.kt)("li",{parentName:"ul"},"Changelogs are now split into separate, easy to navigate pages.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are using a fork of the website's original repository, you should fetch the new update as soon as possible to avoid losing any changes.")),(0,n.kt)("p",null,"Known website issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"view all search results" is sometimes broken')),(0,n.kt)("p",null,"Fixed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changelogs are now indexed properly when searching.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streammousecursor-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.enums.StreamMouseCursor"))," now also supports a value of ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),", to never capture the cursor anywhere."),(0,n.kt)("li",{parentName:"ul"},"New API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/social#uploadvideovideouploadparams-callback-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.social.uploadVideo"))," - Upload a video to the buffer server, getting a link to the raw file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/social#canceluploadstring-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.social.cancelUpload"))," - Cancel a video's upload using its id."))),(0,n.kt)("li",{parentName:"ul"},"New API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Applies to discord and reddit only.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/social/reddit#postredditpostparameters-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.social.reddit.post")),", ",(0,n.kt)("a",{parentName:"li",href:"/api/social/discord#postdiscordpostparameters-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.post")),' - Make a post to the relevant social network. Using a link to an uploaded video will "embed" it in the post.'))),(0,n.kt)("li",{parentName:"ul"},"It is now possible to add the ",(0,n.kt)("inlineCode",{parentName:"li"},"-webkit-app-region: drag")," css property to elements, making them drag the entire window with them. ",(0,n.kt)("strong",{parentName:"li"},"Do note that this behavior takes priority over button presses. If you wish to have working buttons inside an area with this property, you must manually exclude them from it in the css."))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replayvideooptions-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.ReplayVideoOptions"))," is no longer required inside of ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replaystreamparams-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.ReplayStreamParams"))," when empty."),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash involving windows compatibility mode and overwolf."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug involving the dragging of native Overwolf windows.")))}u.isMDXComponent=!0}}]);