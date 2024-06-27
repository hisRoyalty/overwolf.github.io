"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3037],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,b=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const i={id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,p={unversionedId:"api/profile/subscriptions/inapp",id:"api/profile/subscriptions/inapp",title:"overwolf.profile.subscriptions.inapp API",description:"Provides functions and events to help with user profile subscription in-app management.",source:"@site/../pages/api/profile/subscriptions/inapp.mdx",sourceDirName:"api/profile/subscriptions",slug:"/api/profile/subscriptions/inapp",permalink:"/api/profile/subscriptions/inapp",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/profile/subscriptions/inapp.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1719492831,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.profile.subscriptions API",permalink:"/api/profile/subscriptions/"},next:{title:"overwolf.settings API",permalink:"/api/settings/"}},o={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"show(planId, theme)",id:"showplanid-theme",level:2},{value:"Version added: 0.170",id:"version-added-0170",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription",level:4},{value:"hide(callback)",id:"hidecallback",level:2},{value:"Version added: 0.170",id:"version-added-0170-1",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription-1",level:4},{value:"onInAppSubModalOpened",id:"oninappsubmodalopened",level:2},{value:"Version added: 0.170",id:"version-added-0170-2",level:4},{value:"InAppSubModalOpenedEvent Object",id:"inappsubmodalopenedevent-object",level:2},{value:"onInAppSubModalClosed",id:"oninappsubmodalclosed",level:2},{value:"Version added: 0.170",id:"version-added-0170-3",level:4},{value:"InAppSubModalClosedEvent Object",id:"inappsubmodalclosedevent-object",level:2},{value:"Theme enum",id:"theme-enum",level:2},{value:"Version added: 0.174",id:"version-added-0174",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides functions and events to help with user profile subscription in-app management."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../subscriptions#sample-app"},"subscriptions API sample app")," that demonstrates a primary usage in the API.",(0,r.kt)("br",{parentName:"p"}),"\n","Please read all the info about app subscriptions ",(0,r.kt)("a",{parentName:"p",href:"/start/monetize-your-app/subscriptions"},"here"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Permissions required: Subscription"))),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#showplanid-theme"},"overwolf.profile.subscriptions.inapp.show()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hidecallback"},"overwolf.profile.subscriptions.inapp.hide()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oninappsubmodalopened"},"overwolf.profile.subscriptions.inapp.onInAppSubModalOpened")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oninappsubmodalclosed"},"overwolf.profile.subscriptions.inapp.onInAppSubModalClosed"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inappsubmodalopenedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalOpenedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inappsubmodalclosedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalClosedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#theme-enum"},"overwolf.profile.subscriptions.inapp.enums.Theme")," Enum")),(0,r.kt)("h2",{id:"showplanid-theme"},"show(planId, theme)"),(0,r.kt)("h4",{id:"version-added-0170"},"Version added: 0.170"),(0,r.kt)("h4",{id:"permissions-required-subscription"},"Permissions required: Subscription"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Shows the in-app subscription page as a modal window on top of the current window.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"planId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The plan Id to display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#theme-enum"},"Theme")," enum"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional. "Dark" or "Light. If not defined, the default is light')))),(0,r.kt)("h2",{id:"hidecallback"},"hide(callback)"),(0,r.kt)("h4",{id:"version-added-0170-1"},"Version added: 0.170"),(0,r.kt)("h4",{id:"permissions-required-subscription-1"},"Permissions required: Subscription"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hide the current active in-app subscription modal window.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"Result => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h2",{id:"oninappsubmodalopened"},"onInAppSubModalOpened"),(0,r.kt)("h4",{id:"version-added-0170-2"},"Version added: 0.170"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is opened: with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent")," Object")),(0,r.kt)("h2",{id:"inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"oninappsubmodalclosed"},"onInAppSubModalClosed"),(0,r.kt)("h4",{id:"version-added-0170-3"},"Version added: 0.170"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is closed: with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent")," Object")),(0,r.kt)("h2",{id:"inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"theme-enum"},"Theme enum"),(0,r.kt)("h4",{id:"version-added-0174"},"Version added: 0.174"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Light"),(0,r.kt)("td",{parentName:"tr",align:null},"Light")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dark"),(0,r.kt)("td",{parentName:"tr",align:null},"Dark")))))}u.isMDXComponent=!0}}]);