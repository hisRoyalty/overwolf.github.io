"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[903],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:"app-analytics",image:"/img/embed/api-best-practices.jpg",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,l={unversionedId:"topics/integrations/app-analytics",id:"topics/integrations/app-analytics",title:"Using Analytics in your app",description:"The most important part of any product, any App, or even any particular feature, is to understand what it aims to achieve,",source:"@site/pages/docs/topics/integrations/app-analytics.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/app-analytics",permalink:"/topics/integrations/app-analytics",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/integrations/app-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1698780472,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{id:"app-analytics",image:"/img/embed/api-best-practices.jpg",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"topics",previous:{title:"Webinars",permalink:"/topics/community-help/webinars"},next:{title:"Discord Integrations",permalink:"/topics/integrations/discord"}},s={},p=[{value:"Reasonable Analytics",id:"reasonable-analytics",level:2},{value:"Platform Support",id:"platform-support",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The most important part of any product, any App, or even any particular feature, is to understand what it aims to achieve,\nand ensure it does so effectively.",(0,r.kt)("br",{parentName:"p"}),"\n","App analytics provide you with the usage data required to ensure this effectivenes,\nby letting you measure exact interactions your users have with your App."),(0,r.kt)("p",null,"There are many different ways to implement App analytics, and many different types of data to collect.\nFor example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Engagement data about different parts of the App can help you understand which App features\nyour users most often interact with, and which features may be under-utilized/less relevant."),(0,r.kt)("li",{parentName:"ul"},"App crash/error measurements can help you identify issues as they happen in your production environment,\nallowing you, at times, to fix them before any user can even notice."),(0,r.kt)("li",{parentName:"ul"},"Etc.")),(0,r.kt)("p",null,"As such, we heavily recommend that you utilize those where ",(0,r.kt)("a",{parentName:"p",href:"#reasonble-analytics"},"possible and reasonable"),",\nand will be using this page to help with outlining our recommended best practices for analytics."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Some analytics are automatically collected by Overwolf, and can be viewed in different\nOverwolf-provided ",(0,r.kt)("a",{parentName:"em",href:"/tools/developers-console/all-applications/dashboard"},"dashboards"),".")),(0,r.kt)("h2",{id:"reasonable-analytics"},"Reasonable Analytics"),(0,r.kt)("p",null,"Analytics, like many different things in the world, are a neuanced topic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the one hand, ideally, as designers, would want to know every single thing about every single user.\nThat way, we could carefully tune things to fit them, and would never lack knowledge of anything."),(0,r.kt)("li",{parentName:"ul"},"On the other hand, even if it was somehow technically feasible to collect all of that data without impacting the final product,\nthere are ",(0,r.kt)("strong",{parentName:"li"},"many"),", incredibly valid concerns that this would raise (legally, morally, and the potential for abuse of this data).")),(0,r.kt)("p",null,"As such, there are many regulations and guidelines in place, in order to ensure a safe balance\nof utility and user concerns. These requirements themselves can get rather intricate,\nand way outside the scope of this page (or even this website). However, to make your journey easier,\nwe have collected a few articles and ",(0,r.kt)("a",{parentName:"p",href:"#platform-support"},"product comparisons*")," that we believe can help you get started with analytics, attached here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://contentsquare.com/blog/enterprise-web-analytics/"},"Contentsquare: Enterprise web analytics...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hotjar.com/web-analytics/tools/"},"Hotjar: Top 12+ web analytics tools...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rockcontent.com/blog/web-analytics-tools/"},"rockcontent: 24 Valuable Web Analytics Tools..."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," These pages lead to external websites that aren't associated with Overwolf, and may prioritize different things than\nwhat Desktop Apps require. They are meant to help you get started, but should not serve as a replacement to proper research.")),(0,r.kt)("h3",{id:"platform-support"},"Platform Support"),(0,r.kt)("p",null,"Do take note that some Analytics tools (for example - ",(0,r.kt)("a",{parentName:"p",href:"https://issuetracker.google.com/issues/174954288"},"Google Analytics 4/GTag"),"),\ncannot be used within desktop applications, due to any combination of their:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Terms of Service"),(0,r.kt)("li",{parentName:"ul"},"Technical limitations"),(0,r.kt)("li",{parentName:"ul"},"Unresolved bugs")),(0,r.kt)("p",null,"These issues usually revolve around the local page protocol for desktop App pages being"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"overwolf-extension://")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"file://"),(0,r.kt)("br",{parentName:"p"}),"\n","Rather than",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"https://"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Always make sure your tool of choice supports your target framework/page in a\nproduction-like environment before comitting to it!")),(0,r.kt)("admonition",{title:"We're here to help!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As usual, if you are unsure of how to proceed, have any questions, need help picking the right tool,\nor just want to further discuss these topics, feel free to ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"!")))}u.isMDXComponent=!0}}]);