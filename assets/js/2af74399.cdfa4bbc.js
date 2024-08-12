"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8409],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),i=(r(27378),r(35318));const o={id:"discord",image:"/img/embed/api-best-practices.jpg",title:"Discord",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},a=void 0,s={unversionedId:"topics/integrations/discord",id:"topics/integrations/discord",title:"Discord",description:"Discord is a popular social App used by many, and especially gamers (we even use it often here at overwolf!)",source:"@site/../pages/topics/integrations/discord.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/discord",permalink:"/topics/integrations/discord",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/integrations/discord.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"discord",image:"/img/embed/api-best-practices.jpg",title:"Discord",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"topics",previous:{title:"Integrating app analytics",permalink:"/topics/integrations/app-analytics"},next:{title:"Event SDK for Game Devs",permalink:"/topics/integrations/events-sdk-for-game-developers"}},c={},l=[{value:"Discord Rich Presence",id:"discord-rich-presence",level:2},{value:"Getting Started with Rich Presence",id:"getting-started-with-rich-presence",level:3},{value:"Overwolf App Rich Presence best practices",id:"overwolf-app-rich-presence-best-practices",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://discord.com"},"Discord")," is a popular social App used by many, and especially gamers (we even use it often here ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/overwolf-developers"},"at overwolf"),"!)",(0,i.kt)("br",{parentName:"p"}),"\n","One of the better parts of Discord (for developers), is its extensive API, which allows external Apps to seamlessly integrate with its experience."),(0,i.kt)("p",null,"The following page includes references to a few relevant parts of the Discord API, to help you get started with integrating it into your App."),(0,i.kt)("h2",{id:"discord-rich-presence"},"Discord Rich Presence"),(0,i.kt)("p",null,"Discord has many different integrations with games and other processes running on a users' system. Most of those integrations\nare grouped under the title of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rich Presence")," API."),(0,i.kt)("p",null,"It is possible for Overwolf Apps (and Apps in general) to also utilize this API, in order to facilitate interesting interactions."),(0,i.kt)("h3",{id:"getting-started-with-rich-presence"},"Getting Started with Rich Presence"),(0,i.kt)("p",null,"To get started, we recommend taking a look at the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/rich-presence/how-to"},"How To")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/rich-presence/best-practices"},"Best Practices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/rich-presence/launch-checklist"},"Launch Checklist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/rich-presence/faq"},"FAQ"))),(0,i.kt)("h3",{id:"overwolf-app-rich-presence-best-practices"},"Overwolf App Rich Presence best practices"),(0,i.kt)("p",null,'Discord Rich Presence is relatively powerful, allowing your App to display a custom activity on the users\' profile,\nsend invites for people to "join" them, and more.'),(0,i.kt)("p",null,"However, this does require use in moderation, in order to ensure that it does not end up negatively impacting user experience.\nAs such, we've made a list of our recommended best practices, sorted by importance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not, under any circumstances"),", show data that could be seen as undesirable by the user, ",(0,i.kt)("strong",{parentName:"li"},"unless they explicitly agreed to it"),". This includes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Usernames"),(0,i.kt)("li",{parentName:"ul"},"Data about an 'unofficial' game server (for example, name/adress of a private server)"),(0,i.kt)("li",{parentName:"ul"},"Rank"),(0,i.kt)("li",{parentName:"ul"},"Performance statistics"))),(0,i.kt)("li",{parentName:"ul"},"Only show the App's activity status where there is actual value to the user in showing it:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Activities can be a great way to show your App's merit to the user and their friends, which can even bring users in.",(0,i.kt)("br",{parentName:"li"}),"However, you should ",(0,i.kt)("strong",{parentName:"li"},"never")," take that as an excuse to use it to promote your App ",(0,i.kt)("strong",{parentName:"li"},"at the expense")," of your user."))),(0,i.kt)("li",{parentName:"ul"},"When creating any Rich Presence for your App, make sure you can see an actual use in the feature for your App. For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using the Rich Presence ",(0,i.kt)("inlineCode",{parentName:"li"},"join request")," to show the selected players' profile on the App, if they have consented to sharing it."),(0,i.kt)("li",{parentName:"ul"},"Using the Rich Presence ",(0,i.kt)("inlineCode",{parentName:"li"},"join request")," to show your own custom notification, only to then route the request to the underlying game."),(0,i.kt)("li",{parentName:"ul"},"Using the Rich Presence ",(0,i.kt)("inlineCode",{parentName:"li"},"activity"),' to allow your users to show off recent achievements to their friends (potentially with a limit to "only show recent achievements"), if they have consented to sharing those.')))))}u.isMDXComponent=!0}}]);