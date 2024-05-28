"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8973],{35318:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=n.createContext({}),p=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},V=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(i),V=a,d=u["".concat(r,".").concat(V)]||u[V]||m[V]||l;return i?n.createElement(d,s(s({ref:t},c),{},{components:i})):n.createElement(d,s({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,s=new Array(l);s[0]=V;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}V.displayName="MDXCreateElement"},15520:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=i(25773),a=(i(27378),i(35318));const l={id:"subscription-plans",image:"/img/embed/dev-tools.jpg",title:"Subscription Plans",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,o={unversionedId:"tools/developers-console/all-applications/subscriptions/subscription-plans",id:"tools/developers-console/all-applications/subscriptions/subscription-plans",title:"Subscription Plans",description:"The Subscription Plans Tab",source:"@site/../pages/tools/developers-console/all-applications/subscriptions/subscription-plans.mdx",sourceDirName:"tools/developers-console/all-applications/subscriptions",slug:"/tools/developers-console/all-applications/subscriptions/subscription-plans",permalink:"/tools/developers-console/all-applications/subscriptions/subscription-plans",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/developers-console/all-applications/subscriptions/subscription-plans.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716876849,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:50,frontMatter:{id:"subscription-plans",image:"/img/embed/dev-tools.jpg",title:"Subscription Plans",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"tools",previous:{title:"Statistics",permalink:"/tools/developers-console/all-applications/subscriptions/statistics"},next:{title:"Subscribers",permalink:"/tools/developers-console/all-applications/subscriptions/subscribers"}},r={},p=[{value:"Editing a subscription plan",id:"editing-a-subscription-plan",level:2},{value:"Plan details",id:"plan-details",level:2},{value:"Customizing",id:"customizing",level:3},{value:"Customize plan page",id:"customize-plan-page",level:4},{value:"Customize the Xsolla payment page",id:"customize-the-xsolla-payment-page",level:4}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Subscription Plans Tab",src:i(21179).Z,width:"1345",height:"643"}),"\nThis section of the console gives you a detailed overview of your app's subscription plans, allowing you to filter them by plan name. "),(0,a.kt)("p",null,"Every subscription plan contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The subscription's ",(0,a.kt)("inlineCode",{parentName:"li"},"Plan title"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Price (USD)"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Period(month)"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Status"),"."),(0,a.kt)("li",{parentName:"ul"},"A button for editing the subscription plan")),(0,a.kt)("p",null,"The active subscriptions are split into pages, using ",(0,a.kt)("a",{parentName:"p",href:"/tools/developers-console#the-footer-toolbar"},"The Paging Footer"),"."),(0,a.kt)("h2",{id:"editing-a-subscription-plan"},"Editing a subscription plan"),(0,a.kt)("p",null,"By clicking the edit button on a plan, you can edit the different parts of that plan, by utilizing ",(0,a.kt)("a",{parentName:"p",href:"/tools/developers-console#the-footer-toolbar"},"The Footer Toolbar"),".\n",(0,a.kt)("img",{alt:"Edit Subscription Plan",src:i(62418).Z,width:"1057",height:"440"})),(0,a.kt)("h2",{id:"plan-details"},"Plan details"),(0,a.kt)("p",null,"You can edit the subscription's basic details here. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Title"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Price (USD)"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Period (months"),"."),(0,a.kt)("li",{parentName:"ul"},"The subscription plan's ",(0,a.kt)("inlineCode",{parentName:"li"},"Status"),".")),(0,a.kt)("p",null,"You can also view the subscription's ID, which will be used when interacting with the ",(0,a.kt)("a",{parentName:"p",href:"/api/profile/subscriptions"},"subscriptions API"),"."),(0,a.kt)("h3",{id:"customizing"},"Customizing"),(0,a.kt)("h4",{id:"customize-plan-page"},"Customize plan page"),(0,a.kt)("p",null,'Subscriptions have a "landing page", that the user sees before being redirected to the exact payment page.\nThis page can be customized, in order to help the users understand why they might want this subscription.\n',(0,a.kt)("img",{alt:"Customize Plan Page",src:i(38548).Z,width:"428",height:"355"})),(0,a.kt)("p",null,"The aforementioned page's Icon will be the app's Icon."),(0,a.kt)("p",null,'Apart from that, there will be 3 "tiles", that contain an image, a title, and a short description.\nThese can be edited directly below the previous section. For example, here is the first section\'s editable area:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Subscription Plan Tile",src:i(47358).Z,width:"686",height:"437"}),"\nEach section's title and description can be edited, as long as they contain less than 50 and 80 characters respectively."),(0,a.kt)("p",null,"Each image can also be changed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It can be set to be a static image, in which case, the resolution should be exactly 150X96 pixels."),(0,a.kt)("li",{parentName:"ul"},'It can be set to a "sprite-sheet", in which case, the image\'s resolution should be exactly 2250X96 pixels,\nwith each "frame" that will be cycled through being exactly 150X96 pixels (without any padding). For example:\n',(0,a.kt)("img",{alt:"Sprite Sheet Example",src:i(22705).Z,width:"2250",height:"96"}))),(0,a.kt)("h4",{id:"customize-the-xsolla-payment-page"},"Customize the Xsolla payment page"),(0,a.kt)("p",null,"It is also possible to customize the background image that will be shown to the user, once they open the Xsolla payment page.\n",(0,a.kt)("img",{alt:"Customize Xsolla Page",src:i(98535).Z,width:"772",height:"341"})),(0,a.kt)("p",null,"To do so, simply upload a valid picture, with a resolution of 1920x1080, that is also smaller than 200Kb."))}u.isMDXComponent=!0},38548:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/customize-plan-page-e1d0985d3f432de7a1e5f2cbee98f8c2.jpg"},98535:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/customize-xsolla-595bd01c08bfbd9262dd382758c28253.jpg"},62418:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/edit-plan-b58f0c7fa3f6a344a06c5348186095ac.jpg"},21179:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/index-39691d32715690d57b7bd42b15df2fde.jpg"},22705:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},47358:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/plan-tile-7760e105a0e5aaba64530cd83d2a551c.jpg"}}]);