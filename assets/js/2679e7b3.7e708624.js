"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2188],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,u=h["".concat(p,".").concat(d)]||h[d]||m[d]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(25773),i=(n(27378),n(35318));const o={id:"integration",title:"Achievement Rewards Integration",sidebar_label:"Achievement Rewards integration",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,l={unversionedId:"internal/achievement-rewards/integration",id:"internal/achievement-rewards/integration",title:"Achievement Rewards Integration",description:"How to integrate with AR",source:"@site/../pages/internal/achievement-rewards/integration.mdx",sourceDirName:"internal/achievement-rewards",slug:"/internal/achievement-rewards/integration",permalink:"/internal/achievement-rewards/integration",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/internal/achievement-rewards/integration.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1723060300,formattedLastUpdatedAt:"Aug 7, 2024",frontMatter:{id:"integration",title:"Achievement Rewards Integration",sidebar_label:"Achievement Rewards integration",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"achievementRewards",previous:{title:"Achievement Rewards Intro",permalink:"/internal/achievement-rewards/"}},p={},s=[{value:"How to integrate with AR",id:"how-to-integrate-with-ar",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"How to implement the UI",id:"how-to-implement-the-ui",level:2},{value:"TOOLTIP",id:"tooltip",level:3}],c={toc:s};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-integrate-with-ar"},"How to integrate with AR"),(0,i.kt)("p",null,"Full API Documentation found here: ",(0,i.kt)("a",{parentName:"p",href:"/api/campaigns/crossapp"},"overwolf-campaigns-crossapp")),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"When your app starts up - it should call the ",(0,i.kt)("inlineCode",{parentName:"p"},"overwolf.campaigns.crossapp.getAvailableActions")," - and check if there is an existing action available.\nThe result might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  actions: [{\n    id: \u2018XXXXXXXXXXXXXXXX\u2019,\n    action: \u2018ar-invite\u2019,\n    expiration: 1600094829004,\n    owner_app_uid: \u2018cmhjmacifnhhboffmobjofpejedkbnfolcgijhpc\u2019,\n    data: {\n      name: \u2018BrandName Challenge\u2019,\n      iconUrl: 'overwolf-extension://hadnijlcbloooh...gefci/assets/images/icon.svg',\n      title: \u2018Win a Reward!\u2019,\n      titleColor: \u2018#FFF000\n      text: \u2018with the Brandname Challenge\u2019\n      textColor: \u2018#FFFFFF\u2019\n    }\n  }]\n}\n")),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"Your app should also register to the: ",(0,i.kt)("inlineCode",{parentName:"p"},"overwolf.campaigns.crossapp.onAvailableActionUpdated")," event, in case an AR campaign becomes available while your app is still running (or becomes unavailable).\nAn expired campaign will have the value ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cexpired\u201d:true")," in its callback"),(0,i.kt)("p",null,"The Overwolf API allows you to include some info in the OW app store\u2019s download link. You can use this feature for different purposes, however, the most common one is to add a unique referral ID to track your download link. This ID allows you to track installations and know exactly which users came from which channel."),(0,i.kt)("p",null,"You can also allow your users to create shareable download links for their friends, and track how many friends each user has recruited for reward purposes."),(0,i.kt)("h3",{id:"step-3"},"Step 3"),(0,i.kt)("p",null,"The interesting fields of a campaign action are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"id"))," - the campaign id (used when calling overwolf.campaigns.crossapp.reportConversion)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"action"))," - used to identify that this is an Achievement Rewards Invite action"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"owner_app_uid"))," - used to verify this is coming from the Achievement Rewards app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"iconUrl"))," - used to display the invite image in your app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"title"))," - used to display a text stating the reward in the tooltip, The title should be displayed in BOLD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"titleColor"))," - used as the color of the title"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"text"))," - used to display a text stating the campaign name in the tooltip"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"textColor"))," - used as the color of the text")),(0,i.kt)("h3",{id:"step-4"},"Step 4"),(0,i.kt)("p",null,"If there is such campaign, Use the iconUrl to display the invitation button - once clicked - the app should call: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"overwolf.campaigns.crossapp.reportConversion({\n    id: \u2018XXXXXXXXXXXXXXXX\u2019,\n    data: {},\n    owner_app_uid: \u2018cmhjmacifnhhboffmobjofpejedkbnfolcgijhpc\u2019\n},console.log);\n")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"The empty data object - please keep this"),"\nThe actual owner_app_uid is: ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2018cmhjmacifnhhboffmobjofpejedkbnfolcgijhpc\u2019"))),(0,i.kt)("h3",{id:"step-5"},"Step 5"),(0,i.kt)("p",null,"At this point, the Achievement Rewards app will open a window and the user can register for the campaign."),(0,i.kt)("h3",{id:"step-6"},"Step 6"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"A."))," The icon container by default shall be transparent and not contain any static images in it - the assets will be provided via the API according to the relevant campaign in an .svg format, if for some reason there has been an error getting the icon the container shall remain empty and not show any meta data or broken image placeholder."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"B."))," The tooltip shall be permanently open and visible on first lunch of the app with the AR version until a user has clicked on the icon and the AR app opened, once the user has clicked the icon and opened the AR (this is where he has passed the learning curve on how to access it) the tooltip shall reset to open on hover only."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"C."))," The API handles everything that has to do with the campaigns including, geolocation, campaign ID, icon assets and tooltip texts and colots per campaign - this is made to create an environment where it can support multiple campaigns now and in the future without any additional development."),(0,i.kt)("h2",{id:"how-to-implement-the-ui"},"How to implement the UI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TOP BAR ICON CONTAINER POSITION")," - The icon container shall be the last item on the top bar from right to left. The icon container shall have the same gap as the rest of the top bar icons have. so for example, if on the top bar there is a 6px gap from each top bar icon, the icon container will inherit the same behavior"),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"The icon container size shall be 30x30 pixels")),(0,i.kt)("p",null,"!",(0,i.kt)("img",{alt:"icon container",src:n(77434).Z,width:"1212",height:"780"})),(0,i.kt)("h3",{id:"tooltip"},"TOOLTIP"),(0,i.kt)("p",null,"!",(0,i.kt)("img",{alt:"tooltip alignment",src:n(26418).Z,width:"1408",height:"404"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TOOLTIP POSITION AND BEHAVIOR")," - here, you can find examples of how the tooltip positions should look like."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"The tooltip shall appear on first launch until the user has clicked the icon for the first time and has launched the AR Challenge app.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EXAMPLE: Center alignment tooltip position"),"\n!",(0,i.kt)("img",{alt:"center alignment",src:n(57693).Z,width:"1212",height:"780"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EXAMPLE: Right alignment tooltip position"),"\n!",(0,i.kt)("img",{alt:"right alignment",src:n(91345).Z,width:"1212",height:"780"})))}h.isMDXComponent=!0},77434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example_1-80634aa0a48a7910f30643f518f483f4.jpg"},26418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example_2-056807f2346bcdc26b1caea86cc89030.png"},57693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example_3-42e6576958002b3fce791521bc9a6829.jpg"},91345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example_4-9d3ebcfeff7dd851bc9d70dd2289c39f.jpg"}}]);