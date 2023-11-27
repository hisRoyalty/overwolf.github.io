"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{50414:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(25773),o=a(27378),l=a(38944),n=a(70030),i=a(85056);const s=o.createContext({});function c(e){const{children:t,active:a}=e;return o.createElement(s.Provider,{value:a},t)}var m=a(96089);const p=e=>{const{setActive:t,itemName:a,imgSrc:r}=e,c=(0,o.useContext)(s),p=(0,o.useContext)(m.E);return o.createElement("h2",{className:(0,l.Z)(n.Z.comparisonTable.headers.item,n.Z.comparisonTable.headers.categories.category,{[n.Z.common.active]:c===a,[n.Z.common.inactive]:c!==a}),onClick:()=>t(a),role:p?"button":"heading","aria-label":`show/hide ${a} parameters`},o.createElement(i.Z,{imgSrc:r,alt:`${a} logo`}))},u=e=>{const t=e.target;if(!t.hasAttribute("data-tooltip"))return;if(t.parentElement?.classList.contains("is-open"))return;const a=e.target;let r=a.getAttribute("tooltip-position");const o=a.getAttribute("tooltip-size"),l=document.createElement("div");l.className=`tool-tip ${r} ${o}`,l.innerHTML=a.getAttribute("data-tooltip"),document.body.appendChild(l);let n,i,s=a.getBoundingClientRect();const c=l.getBoundingClientRect();let m=0,p=0;const u=window?window.innerWidth-14:0,d=window?window.innerHeight-14:0;switch(r){case"right":n=s.right,i=(Number(s.top)+Number(s.bottom))/2-l.offsetHeight/2,Number(s.right)+l.offsetWidth>document.documentElement.clientWidth&&(n=document.documentElement.clientWidth-l.offsetWidth);break;case"left":n=s.left-l.offsetWidth-16,i=(Number(s.top)+Number(s.bottom))/2-l.offsetHeight/2;break;case"bottom":n=Number(s.left)+(s.width-l.offsetWidth)/2,i=Number(s.bottom)+2;break;case"top":n=Number(s.left)+(s.width-l.offsetWidth)/2,i=Number(s.top)-l.offsetHeight}const v=u-n;v<c.width&&(m=c.width-v,n-=m);const g=d-i;"bottom"==r&&g<c.height&&(r="top",i=Number(s.top)-l.offsetHeight),("left"==r||"right"==r)&&g<c.height&&(p=c.height-g,i-=p),n=n<0?Number(s.left):n,i=i<0?Number(s.bottom):i,l.className=`tool-tip ${r} ${o}`,l.style.left=`${n}px`,l.style.top=`${i+pageYOffset}px`,l.style.setProperty("--pointer-offset-x",m-8+"px"),l.style.setProperty("--pointer-offset-y",p-8+"px")},d=()=>{if(document.querySelector(".tool-tip")){document.querySelectorAll(".tool-tip").forEach((e=>{e.remove()}))}},v=e=>{const{text:t,position:a="top",size:r=""}=e,l="tool-tip-info-icon",n=(0,o.useContext)(m.E),i=()=>{d()},s=e=>{e.target.className!==l&&d()};return(0,o.useEffect)((()=>{window&&window.addEventListener("scroll",i),document.addEventListener("mousedown",s)}),[]),o.createElement(o.Fragment,null,n&&o.createElement("button",{className:"tool-tip-info-icon","data-tooltip":t,"tooltip-position":a,"tooltip-size":r,onClick:u},o.createElement("svg",{className:"tool-tip-icon"},o.createElement("use",{href:"/img/sprite.svg#info"}))),!n&&o.createElement("button",{className:l,"data-tooltip":t,"tooltip-position":a,"tooltip-size":r,onMouseOver:u,onMouseOut:d,onFocus:u,onBlur:d},o.createElement("svg",{className:"tool-tip-icon"},o.createElement("use",{href:"/img/sprite.svg#info"}))))},g=o.createContext({});function h(e){const{children:t,names:a}=e;return o.createElement(g.Provider,{value:a},t)}const w=e=>{const{title:t,tooltipData:a,values:r}=e,i=(0,o.useContext)(g),c=(0,o.useContext)(s);return o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.values.index)},o.createElement("h4",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.values.title)},t,a&&o.createElement(v,a)),Object.keys(r).map((e=>{const a=r[e];return o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.values.text,{[n.Z.common.inactive]:c!==e,[n.Z.comparisonTable.rows.row.values.green]:"green"===a.colorOverride,[n.Z.comparisonTable.rows.row.values.red]:"red"===a.colorOverride}),key:e,title:`${i[e]} ${t}`},a.text,a.tooltipData&&o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.values.toolTipContainer)},o.createElement(v,a.tooltipData)))})))},E=e=>{const{title:t,tooltipData:a}=e;return o.createElement("h3",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.title.index)},t,a&&o.createElement(v,a))},f=e=>{const{type:t}=e;return o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.rows.row.index)},"value"===t?o.createElement(w,e):o.createElement(E,e))},b=e=>{const{comparisonText:t,tableScheme:a}=e,[i,s]=(0,o.useState)(a.defaultItem);return o.createElement(h,{names:a.displayNames},o.createElement(c,{active:i},o.createElement("section",{className:(0,l.Z)(n.Z.comparisonTable.index)},o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.headers.index)},o.createElement("h2",{className:(0,l.Z)(n.Z.comparisonTable.headers.item,n.Z.comparisonTable.headers.comparisonTitle)},t),o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.headers.categories.index)},Object.keys(a.items).map((e=>{const t=a.items[e];return o.createElement(p,(0,r.Z)({},t,{key:t.itemName,setActive:s}))})))),o.createElement("div",{className:(0,l.Z)(n.Z.comparisonTable.rows.index)},a.rows.map((e=>o.createElement(f,(0,r.Z)({key:e.title},e))))))))}},85056:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(27378),o=a(14034),l=a(96089);const n=e=>{const{imgSrc:t,alt:a}=e,n=(0,r.useContext)(l.E),i=t.replace("${platform}",n?"mobile":"desktop");return r.createElement(o.Z,{alt:a,sources:{dark:i?.replace("${theme}","dark"),light:i?.replace("${theme}","light")}})}},9318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(27378),o=a(93317);const l=e=>{const{}=e;return r.createElement("section",{className:"hero-section"},r.createElement("h1",null,"Create apps for PC gamers"),r.createElement("p",null,"Overlay, real-time game data, auto patching, Anti-Cheat & ToS compliance, and so much more"))},n=e=>{const{}=e,[t,a]=(0,r.useState)(!1),[o,l]=(0,r.useState)(!1),n=()=>{a((e=>!e))},i=()=>{l((e=>!e))};return r.createElement("section",{className:"services-section"},r.createElement("ul",{className:"services-inner"},r.createElement("li",{className:"service-item "+(t?"btn-hover":"")},r.createElement("div",{className:"assets"},r.createElement("img",{src:"/img/home-2023/platform-app-bg.webp",alt:"Overwolf Platform App",className:"platform-app-bg bg",width:512,height:280}),r.createElement("img",{src:"/img/home-2023/platform-app.webp",alt:"Overwolf Platform App",className:"platform-app symbol"})),r.createElement("div",{className:"info"},r.createElement("h2",null,"Overwolf Platform"),r.createElement("p",null,"Create powerful desktop apps and game overlays, built with 100% pure JavaScript."),r.createElement("a",{href:"/start/getting-started",className:"btn-primary",onMouseEnter:n,onMouseLeave:n},"Explore"),r.createElement("ul",{className:"app-info-list"},r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#monetization"})),"Monetization (Ads, Subscriptions)"),r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#in-game-overlay"})),"In-game overlay"),r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#real-time-game-events"})),"Real time Game Data for > 40 Games")))),r.createElement("li",{className:"service-item "+(o?"btn-hover":"")},r.createElement("div",{className:"assets"},r.createElement("img",{src:"/img/home-2023/electron-app-bg.webp",alt:"Overwolf Electron App",className:"electron-app-bg bg",width:512,height:280}),r.createElement("img",{src:"/img/home-2023/electron-app.webp",alt:"Overwolf Electron App",className:"electron-app symbol"})),r.createElement("div",{className:"info"},r.createElement("h2",null,"Overwolf Electron"),r.createElement("p",null,"Leverage an empowered"," ",r.createElement("a",{target:"_blank",href:"https://www.electronjs.org/",rel:"noreferrer"},"Electron.js")," ","framework, to make your existing apps even better!"),r.createElement("a",{href:"/tools/ow-electron",className:"btn-primary",onMouseEnter:i,onMouseLeave:i},"Explore"),r.createElement("ul",{className:"app-info-list"},r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#monetization"})),"Monetization (Ads, Subscriptions)"),r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#in-game-overlay"})),"In-game overlay"),r.createElement("li",null,r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#real-time-game-events"})),"Real time Game Data for > 40 Games"))))))},i=e=>{const{}=e;return(0,r.useEffect)((()=>{(()=>{let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),setTimeout((()=>{let e=e=>({container:document.getElementById(e),path:`/img/home-2023/json/${e}.json`,renderer:"svg",loop:!1,autoplay:!1,name:e});const t=bodymovin.loadAnimation(e("prepare")),a=bodymovin.loadAnimation(e("build")),r=bodymovin.loadAnimation(e("release")),o=bodymovin.loadAnimation(e("growth"));document.querySelectorAll(".documentation-list li a").forEach((e=>{e.addEventListener("mouseenter",(l=>{switch(e.querySelector("div").id){case"prepare":t.setDirection(1),t.play();break;case"build":a.setDirection(1),a.play();break;case"release":r.setDirection(1),r.play();break;case"growth":o.setDirection(1),o.play()}})),e.addEventListener("mouseleave",(l=>{switch(e.querySelector("div").id){case"prepare":t.setDirection(-1),t.stop();break;case"build":a.setDirection(-1),a.stop();break;case"release":r.setDirection(-1),r.stop();break;case"growth":o.setDirection(-1),o.stop()}}))}))}),500)})()}),[]),r.createElement("section",{className:"documentation-section"},r.createElement("h3",null,"Documentation"),r.createElement("p",null,"Everything you may need in your quest to build great apps"),r.createElement("ul",{className:"documentation-list"},r.createElement("li",null,r.createElement("a",{href:"/start/getting-started"},r.createElement("h4",null,"Prepare"),r.createElement("p",null,"App creation is a journey. And every journey starts with a plan."),r.createElement("div",{className:"anim-icon",id:"prepare"}),r.createElement("img",{src:"/img/home-2023/server.svg",loading:"lazy",alt:"Prepare"}))),r.createElement("li",null,r.createElement("a",{href:"/start/getting-started/app-creation-process#build"},r.createElement("h4",null,"Build"),r.createElement("p",null,"With a plan in hand, you are now ready to start building your app."),r.createElement("div",{className:"anim-icon",id:"build"}),r.createElement("img",{src:"/img/home-2023/anvil.svg",loading:"lazy",alt:"Build"}))),r.createElement("li",null,r.createElement("a",{href:"/start/getting-started/app-creation-process#release"},r.createElement("h4",null,"Release"),r.createElement("p",null,"Your app is ready, and so are you. Now, it is time to share it with the world!"),r.createElement("div",{className:"anim-icon",id:"release"}),r.createElement("img",{src:"/img/home-2023/flag.svg",loading:"lazy",alt:"Release"}))),r.createElement("li",null,r.createElement("a",{href:"/start/getting-started/app-creation-process#grow"},r.createElement("h4",null,"Grow"),r.createElement("p",null,"Your app is released, but the journey has only just begun!"),r.createElement("div",{className:"anim-icon",id:"growth"}),r.createElement("img",{src:"/img/home-2023/trophy.svg",loading:"lazy",alt:"Growth"})))))},s=e=>{const{}=e,t=(0,r.useRef)(null),a=(0,r.useRef)(null);(0,r.useEffect)((()=>{t.current.pause(),a.current.pause()}),[]);return r.createElement("section",{className:"community-section"},r.createElement("div",{className:"discord-community",onMouseEnter:()=>{t.current.play()}},r.createElement("div",{className:"info"},r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#discord-big"})),r.createElement("h4",null,"Join our community"),r.createElement("p",null,"Join our Discord community where you can interact with Overwolf staff and other Overwolf app developers in real-time."),r.createElement("a",{href:"https://discord.com/invite/overwolf-developers",target:"_blank",className:"btn-secondary"},"Join")),r.createElement("div",{className:"assets"},r.createElement("video",{className:"sign-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:t},r.createElement("source",{src:"/img/home-2023/video/sign.webm",type:"video/webm"})))),r.createElement("div",{className:"game-developer",onMouseEnter:()=>{a.current.play()}},r.createElement("div",{className:"info"},r.createElement("h4",null,"Game developer?"),r.createElement("p",null,"Community is power and a driver for retention. Give your community tools to create valuable in-game content for your game with the Overwolf Game Events SDK."),r.createElement("a",{href:"/topics/integrations/events-sdk-for-game-developers",className:"btn-secondary"},"Learn more")),r.createElement("div",{className:"assets"},r.createElement("video",{className:"compass-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:a},r.createElement("source",{src:"/img/home-2023/video/compass.webm",type:"video/webm"})))))};var c=a(34979);const m=e=>r.createElement(o.Z,{title:"Easily create apps for PC games on the Overwolf framework",description:"Easily create apps for PC games on the Overwolf framework"},r.createElement("main",{id:"content",className:"main-content"},r.createElement(l,null),r.createElement(n,null),r.createElement(c.Z,{large:!0}),r.createElement(i,null),r.createElement(s,null)))},34979:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(25773),o=a(27378),l=a(50414);const n=e=>o.createElement(l.Z,(0,r.Z)({comparisonText:"Feature Comparison"},e,{tableScheme:{defaultItem:"ow-platform",displayNames:{"ow-platform":"Overwolf Platform","ow-electron":"Electron Platform"},items:{"ow-platform":{itemName:"ow-platform",imgSrc:"/img/presets/comparison-table/framework-comparison-table/ow-platform-logo-${platform}.svg"},"ow-electron":{itemName:"ow-electron",imgSrc:"/img/presets/comparison-table/framework-comparison-table/ow-electron-logo-${platform}.svg"}},rows:[{type:"title",title:"Performance",tooltipData:{text:"All performance benchmarks were measured using an `AMD Ryzen 5 5600X 6-Core Processor`, and include the total overhead for running a simple App displaying a simple window."}},{type:"value",title:"CPU Impact (Idle)",values:{"ow-platform":{text:"0.2%"},"ow-electron":{text:"0.1%"}}},{type:"value",title:"CPU Impact (Avg Window Interaction)",values:{"ow-platform":{text:"3%"},"ow-electron":{text:"0.5%"}}},{type:"value",title:"RAM Consumption (Peak)",values:{"ow-platform":{text:"420 MB"},"ow-electron":{text:"380 MB"}}},{type:"value",title:"Total Running Processes",values:{"ow-platform":{text:"9"},"ow-electron":{text:"7"}}},{type:"title",title:"Growth and Support"},{type:"value",title:"Analytics",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Marketing Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Funding Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Product Design and Development",tooltipData:{text:"Branding, UI/UX, Development, Commercial design."},values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Developer Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Appstore Presence + Discoverability",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Own Branding",values:{"ow-platform":{text:"Yes",colorOverride:"green",tooltipData:{text:"OW-Native offers mixed branding (Overwolf + app) during installation, while OW-Electron offers 100% app branding."}},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"title",title:"Tech"},{type:"value",title:"Overlay SDK (1500+ Games)",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Realtime Game Events API",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Ad Fraud Protection",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Dev Console",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Installer",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Optional"}}},{type:"value",title:"Coupled with Overwolf Client",tooltipData:{text:"OW-Native requires Overwolf client installation to run the app, while OW-Electron doesn't require the client at all - the flow is entirely up to the app."},values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"No"}}},{type:"title",title:"Terms and Conditions"},{type:"value",title:"Ads Revshare",values:{"ow-platform":{text:"70/30"},"ow-electron":{text:"70/30"}}},{type:"value",title:"Subscriptions Revshare",values:{"ow-platform":{text:"85/15"},"ow-electron":{text:"85/15"}}}]}}))},70030:(e,t,a)=>{a.d(t,{Z:()=>r});const r={common:{collapsible:"ow-theme-collapsible",desktopOnly:"desktop-only",mobileOnly:"mobile-only",navigateWithKeyboard:"navigation-with-keyboard",lightTheme:"light",active:"active",inactive:"inactive",buttonSecondary:"btn-secondary"},sidebar:{index:"ow-theme-sidebar",hidden:"hidden",container:{wrapper:"sidebar-wrapper",index:"sidebar-container",collapsed:"collapsed",items:{common:{current:"current",hidden:"hidden",selectable:"selectable",active:"active"},category:{spacer:"spacer",collapseCell:"collapse-cell",showCaret:"show-caret",tagCategory:"tag-category"},link:{index:"label-cell",fallback:"fallback",link:"link",label:"label"},html:{index:"html-item"}}}},comparisonTable:{index:"comparison-table",headers:{index:"comparison-table-headers",comparisonTitle:"comparison-title",item:"comparison-header-item",categories:{index:"comparison-categories",category:"comparison-category"}},rows:{index:"comparison-rows",row:{index:"comparison-row",title:{index:"comparison-group-title"},values:{index:"comparison-values",title:"comparison-title",text:"comparison-text",green:"green",red:"red",toolTipContainer:"tt-container"}}},cell:{index:"comparison-cell"}}}}}]);