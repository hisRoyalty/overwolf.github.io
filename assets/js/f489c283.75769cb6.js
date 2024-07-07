"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9896],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const a={id:"setting-up-dev-environment",image:"/img/embed/support.jpg",title:"Setting up dev environment",sidebar_position:1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"support/setting-up-dev-environment",id:"support/setting-up-dev-environment",title:"Setting up dev environment",description:"Building apps requires the Overwolf client, you can view the changelog here and find out what's new. This includes new in-game events functionality you can use in your app.",source:"@site/../pages/support/setting-up-dev-environment.mdx",sourceDirName:"support",slug:"/support/setting-up-dev-environment",permalink:"/support/setting-up-dev-environment",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/support/setting-up-dev-environment.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1720349273,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:1,frontMatter:{id:"setting-up-dev-environment",image:"/img/embed/support.jpg",title:"Setting up dev environment",sidebar_position:1,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"support",previous:{title:"FAQ",permalink:"/support/faq"},next:{title:"Report a Bug",permalink:"/support/report-a-bug"}},p={},s=[{value:"Developers Version",id:"developers-version",level:2},{value:"Enable Debug Tools",id:"enable-debug-tools",level:2},{value:"Public Version",id:"public-version",level:2},{value:"Sample App",id:"sample-app",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Building apps requires the Overwolf client, you can view the ",(0,o.kt)("a",{parentName:"p",href:"/api/changelogs"},"changelog here")," and find out what's new. This includes new in-game events functionality you can use in your app."),(0,o.kt)("p",null,"Note that developers don't have to work with the Developers version of the client, but it usually has new features and functions still in testing that might be useful."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"To develop, load or run unpacked or unreleased apps, you have to get ",(0,o.kt)("a",{parentName:"p",href:"/start/getting-started/sdk-introduction#whitelist-you-as-a-developer"},"whitelisted")," first.")),(0,o.kt)("h2",{id:"developers-version"},"Developers Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://download.overwolf.com/install/Download?Channel=Developers"},"Overwolf Developers Client"),"."),(0,o.kt)("li",{parentName:"ul"},"If you already installed the OW client public version, you can easily switch it to the developers channel/version:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open Overwolf setting."),(0,o.kt)("li",{parentName:"ul"},"Go to about."),(0,o.kt)("li",{parentName:"ul"},"Press Ctrl + Shift + Left mouse client on the Overwolf logo."),(0,o.kt)("li",{parentName:"ul"},"Write in the channel: ",(0,o.kt)("inlineCode",{parentName:"li"},"Developers"),"."),(0,o.kt)("li",{parentName:"ul"},"Update and Relaunch.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"change-channel",src:n(97154).Z,width:"711",height:"366"})),(0,o.kt)("h2",{id:"enable-debug-tools"},"Enable Debug Tools"),(0,o.kt)("p",null,"Since Overwolf runs on top of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chromiumembedded"},"CEF"),", it is also possible to activate\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/overview/"},"Chrome Developer Tools")," for it. Simply follow the instructions in\n",(0,o.kt)("a",{parentName:"p",href:"/topics/best-practices/enable-dev-tools"},"Enable Developer Tools"),"."),(0,o.kt)("h2",{id:"public-version"},"Public Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://download.overwolf.com/install/Download?Channel=website"},"Latest Overwolf Public Version"),".")),(0,o.kt)("h2",{id:"sample-app"},"Sample App"),(0,o.kt)("p",null,"Read our ",(0,o.kt)("a",{parentName:"p",href:"/start/basic-app/sample-app"},"getting started guide")," and review our sample app to understand the basics."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overwolf/sample-app"},"Overwolf Sample App"),".")))}c.isMDXComponent=!0},97154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/change-channel-df14e21abddea8f4a8fb3e14cb3d0096.png"}}]);