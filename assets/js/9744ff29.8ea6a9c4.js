"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6690],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(m,p(p({ref:t},c),{},{components:a})):n.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(25773),r=(a(27378),a(35318));const o={id:"front-app",image:"/img/embed/getting-started.jpg",title:"The Front App",sidebar_label:"UX/UI Best Practices",description:"The Front App is an Overwolf tutoring app intended to be used by the developers\u2019 community - providing an easy onboarding to the basics of Overwolf app layouts and capabilities and as a reference to see, use, and learn from best practices of user experience and app flows.",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},p=void 0,i={unversionedId:"start/basic-app/front-app",id:"start/basic-app/front-app",title:"The Front App",description:"The Front App is an Overwolf tutoring app intended to be used by the developers\u2019 community - providing an easy onboarding to the basics of Overwolf app layouts and capabilities and as a reference to see, use, and learn from best practices of user experience and app flows.",source:"@site/../pages/start/basic-app/front-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/front-app",permalink:"/start/basic-app/front-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/basic-app/front-app.mdx",tags:[],version:"current",lastUpdatedBy:"JacksAtWork",lastUpdatedAt:1719326743,formattedLastUpdatedAt:"Jun 25, 2024",frontMatter:{id:"front-app",image:"/img/embed/getting-started.jpg",title:"The Front App",sidebar_label:"UX/UI Best Practices",description:"The Front App is an Overwolf tutoring app intended to be used by the developers\u2019 community - providing an easy onboarding to the basics of Overwolf app layouts and capabilities and as a reference to see, use, and learn from best practices of user experience and app flows.",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Components",permalink:"/start/basic-app/components"},next:{title:"Game Events Sample App",permalink:"/start/basic-app/game-events-sample-app"}},s={},l=[{value:"Start Exploring",id:"start-exploring",level:2},{value:"Front App Functionality",id:"front-app-functionality",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"front-app",src:a(47897).Z,width:"785",height:"250"})),(0,r.kt)("p",null,"In your journey of creating a genuinely legendary app, you might need some tools to assist you along the road. We\u2019re here to accompany you and provide support so you can reach the right path.\nThe Front App is an Overwolf tutoring app intended to be used by the developers\u2019 community - providing an easy onboarding to the basics of Overwolf app layouts and capabilities and as a reference to see, use, and learn from best practices of user experience and app flows."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This app (Front App) is made to give examples and teach about UX/UI best practices and how to implement them.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Do not copy code for functionality and logic from this app! Not all of the content presented in the Front App will necessarily fit your app!"),"  Make sure you have gone over the ",(0,r.kt)("a",{parentName:"p",href:"sample-app"},"basic sample app documentation"),".")),(0,r.kt)("h2",{id:"start-exploring"},"Start Exploring"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/front-app/releases"},"Click Here")," to download the app (you'll need to unpack the .opk file and open it as an unpacked extension)"),(0,r.kt)("h2",{id:"front-app-functionality"},"Front App Functionality"),(0,r.kt)("admonition",{title:"In-Game Functionality",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While you can explore the app on desktop without the need of any game installed, for demonstration purposes, the Front App in-game is currently configured for ",(0,r.kt)("a",{parentName:"p",href:"https://euw.leagueoflegends.com/en-us/"},"League of Legends"),".\nAdditional games support will be added down the road.")),(0,r.kt)("p",null,"The Front App Demonstrates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Layout and User Flow"),(0,r.kt)("li",{parentName:"ul"},"Basic App Navigation"),(0,r.kt)("li",{parentName:"ul"},"App Status Health Check"),(0,r.kt)("li",{parentName:"ul"},"App Settings"),(0,r.kt)("li",{parentName:"ul"},"Monetization"),(0,r.kt)("li",{parentName:"ul"},"Loading Screens"),(0,r.kt)("li",{parentName:"ul"},"In-Game Notifications"),(0,r.kt)("li",{parentName:"ul"},"Dialog Boxes and Modals"),(0,r.kt)("li",{parentName:"ul"},"Feedback/Bug Report"),(0,r.kt)("li",{parentName:"ul"},"Social Functionality")))}u.isMDXComponent=!0},47897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/front-app-cover-c4bbe862601a51aee60d7ce8206164e4.png"}}]);