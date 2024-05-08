"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8114],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||s;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62424:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=()=>{const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>{const e=document.querySelector("html"),n=()=>{switch(e?.dataset.theme){case"light":t("light");break;case"dark":t("dark")}};n(),e?.addEventListener("click",(()=>{setTimeout((()=>{n()}),0)}),!1)}),[]),e}},6285:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=e=>{const{children:t,thTitle:n,width:r,bold:s,center:i,desktopOnly:o,useAsMobileTitle:l}=e,d=(0,a.useRef)(null);return null!==d.current&&(r&&(d.current.style.width=r),s&&(d.current.style.fontWeight="bold"),i&&(d.current.style.textAlign="center")),a.createElement("div",{className:"ow-data-cell "+(o||l?"desktop-only":""),ref:d},a.createElement("span",{className:"mobile-label mobile-only"},n),a.createElement("span",null,t))}},45558:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=e=>{const{children:t,mobileTitle:n,mobileDescription:r}=e;return a.createElement("div",{className:"ow-table-body-expended-row-group"},t,a.createElement("h1",null,a.createElement("div",null,n),a.createElement("div",null,r)))}},32012:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(85985);const s=e=>{const{children:t,expandButton:n=!1}=e,s=(0,a.useRef)(null),[i,o]=(0,a.useState)(!1),l=(0,a.useContext)(r.E),d=e=>{if(null!==s.current){const t=e?s.current.nextElementSibling:s.current,n=t?.firstChild,a=n?.offsetHeight;t.style.height=`${a}px`}};return a.createElement("div",{className:"ow-table-body-row",ref:s,onClick:()=>{l||d(!1)}},t,n&&a.createElement("button",{className:"expand-row "+(i?"is-expanded":""),onClick:()=>{if(null!==s.current){const e=s.current.nextElementSibling;i?(e.style.display="none",o(!1)):(e.style.display="table-row",d(!0),o(!0))}}},i?"Collapse":"View Full",a.createElement("svg",null,a.createElement("use",{href:"/img/sprite.svg#arrowDown"}))))}},61406:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=e=>{const{tabID:t,label:n,iconDarkSrc:r,iconLightSrc:s,className:i,children:o}=e;return a.createElement("section",{className:i,id:t,"data-label":n,"data-icon":r,"data-light-icon":s},o)}},68887:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(62424);const s=e=>{const{children:t}=e,n=(0,r.Z)(),s=(0,a.useRef)(null),i=a.Children.map(t,((e,t)=>{if(a.isValidElement(e)){const r="light"==n?e.props.iconLightSrc:e.props.iconDarkSrc;return a.createElement("button",{key:t,className:"tabs-nav-item "+(0==t?"is-active":""),"data-tab":e.props.tabID,onClick:t=>((e,t)=>{if(null!==s.current){const n=t.target,a=s.current.querySelector(`#${e}`),r=a?.parentElement?.querySelector(".is-open"),i=n?.parentElement?.querySelector(".is-active");r?.classList.remove("is-open"),i?.classList.remove("is-active"),n?.classList.add("is-active"),a?.classList.add("is-open")}else console.log("ref is null")})(e.props.tabID,t)},e.props.iconDarkSrc&&a.createElement("img",{src:r,alt:e.props.label}),e.props.label)}return a.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!!")})),o=a.Children.map(t,((e,t)=>a.isValidElement(e)?a.cloneElement(e,{className:"panel "+(0==t?"is-open":"")}):a.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!! or call Benjo for instructions")));return a.createElement("section",{className:"tabs-section"},a.createElement("div",{className:"tabs-header"},a.createElement("nav",{className:"tabs-nav"},i)),a.createElement("div",{className:"panels-container",ref:s},o))}},59475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>C,frontMatter:()=>v,metadata:()=>w,toc:()=>b});var a=n(25773),r=n(27378),s=n(35318),i=n(45558),o=n(32012),l=n(6285),d=n(68887),m=n(61406),c=n(14034);const p=function(e){const{imageUrl:t,alt:n}=e;return r.createElement(c.Z,{alt:n,sources:{dark:t,light:t.replace(/(\.[a-zA-Z])/,"-light$1")}})};function u(e,t){return`${e}/${t}`}function g(e){const{title:t,value:n,first:a}=e;return r.createElement("div",{style:{minWidth:a?"250px":""}},r.createElement("span",{style:{color:"var(--color-999)"}},`${t}:`),` ${n}`)}const y=function(e){const{name:t,assetsPath:n,revenueBenchmark:a,undervalued:s,tabs:c,overview:y}=e,v=u(n,"full-size"),h=c.map(((e,t)=>{let n=`${e} Variant`;const a=(e=e.replace(" Aligned","")).toLocaleLowerCase().replace(" ","-");let s=u(v,"layout.png");return 0===t?n+=" (Main)":s=s.replace(".png",`-${a}.png`),r.createElement(m.Z,{key:a,tabID:a,label:n},r.createElement(p,{imageUrl:s,alt:n}))}));return r.createElement(i.Z,{mobileTitle:"Layout",mobileDescription:t},r.createElement(o.Z,{expandButton:!0},r.createElement(l.Z,{thTitle:"Layout",width:"23%",useAsMobileTitle:!0},r.createElement("b",null,t),r.createElement(p,{imageUrl:u(n,"preview.svg"),alt:`${t} Preview`})),r.createElement(l.Z,{thTitle:"Revenue Est. ($)",width:"13%"},a," ",s&&"*"),r.createElement(l.Z,{thTitle:"Overview",width:"64%"},r.createElement("p",{style:{marginBottom:"12px"}},y.description),r.createElement("div",null,r.createElement("div",{className:"row"},r.createElement(g,{title:"Dimensions",value:y.dimensions})),y.multipleAds&&r.createElement("div",{className:"row"},r.createElement(g,{title:"Multiple Ads in Container**",value:"True"})),r.createElement("div",{className:"row"},r.createElement(g,{title:"Revenue",value:y.revenue,first:!0})," ",r.createElement(g,{title:"Show Video Ads",value:y.showsVideo?"Yes":"No"})),r.createElement("div",{className:"row"},r.createElement(g,{title:"Design Constraints",value:y.designConstraints,first:!0})," ",r.createElement(g,{title:"User Friction",value:y.userFriction}))))),r.createElement(o.Z,null,r.createElement(d.Z,null,h)))},v={id:"recommended-ads-layouts",image:"/img/embed/getting-started.jpg",title:"Recommended Ads Layouts",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},h=void 0,w={unversionedId:"start/monetize-your-app/advertising/recommended-ads-layouts",id:"start/monetize-your-app/advertising/recommended-ads-layouts",title:"Recommended Ads Layouts",description:"Planning for Ads is hard, especially with so many sizes to choose from.",source:"@site/../pages/start/monetize-your-app/advertising/recommended-ads-layouts.mdx",sourceDirName:"start/monetize-your-app/advertising",slug:"/start/monetize-your-app/advertising/recommended-ads-layouts",permalink:"/start/monetize-your-app/advertising/recommended-ads-layouts",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/monetize-your-app/advertising/recommended-ads-layouts.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1715164810,formattedLastUpdatedAt:"May 8, 2024",sidebarPosition:100,frontMatter:{id:"recommended-ads-layouts",image:"/img/embed/getting-started.jpg",title:"Recommended Ads Layouts",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"start",previous:{title:"Ads SDK",permalink:"/start/monetize-your-app/advertising/ads-sdk"},next:{title:"Advertising Policy",permalink:"/start/monetize-your-app/advertising/policy"}},f={},b=[],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},A=k("SkipMe"),E=k("ImageHeading"),x=k("OWTable"),T={toc:b};function C(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Planning for Ads is hard, especially with so many ",(0,s.kt)("a",{parentName:"p",href:"working-with-ads#list-of-ad-sizes"},"sizes")," to choose from."),(0,s.kt)("p",null,"To make it slightly easier, we have devised a list of recommended, optimized Ad Container combinations/layouts, for different app windows\nwhile taking into account the many different factors at play. You can also find a brief summary of each layouts's pros and cons,\nas well as a ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"(very rough)"))," revenue estimate for its performance*, when compared to the baseline layout of its window type**.\nWith this, we hope to give you a place to foothold to get started."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"*"," Revenue estimates are generated based on aggregated performance data across the entire platform, across many countries and setups. Actual milage may vastly differ."),"\n",(0,s.kt)("em",{parentName:"p"},"*","*"," Revenue baselines differ depending on the window type.")),(0,s.kt)("p",null,"Currently, the following window types are accounted for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#desktop-2nd-screen-windows"},"Desktop / 2nd screen")," - Native, desktop windows, existing outside of a game's context"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#in-game-windows"},"In-Game")," - In-game, overlay windows, existing only within a game's overlay")),(0,s.kt)("admonition",{title:"Can't find the right layout for your case?",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Try to pick a few you like, and see why they work. Combine, experiment, and most importantly, get feedback from others. We are ",(0,s.kt)("a",{parentName:"p",href:"/support/contact-us"},"always here")," for\nany questions you may have!")),(0,s.kt)(A,{mdxType:"SkipMe"},'Add explanation about ltr reading order, and why Ads should sit in the "dead space" created'),(0,s.kt)(E,{title:"Desktop / 2nd screen windows",imgDarkSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/window.svg",imgLightSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/window-light.svg",id:"desktop-2nd-screen-windows",mdxType:"ImageHeading"},(0,s.kt)("p",null,"Desktop / 2nd screen windows often stay open for long periods of time, with much less competition for screen space.")),(0,s.kt)(x,{headerCellNames:["Layout","Revenue Est. ($)","Overview"],mdxType:"OWTable"},(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/one-ad-medium",name:"One Ad (Medium)",revenueBenchmark:"Baseline (100%)",overview:{description:"A simple, one Container layout",showsVideo:!0,dimensions:"400x300",userFriction:"Minimal",designConstraints:"Minimal",revenue:"Baseline"},tabs:["Bottom Right","Bottom Left","Top Left","Top Right"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/one-ad-large",name:"One Ad (Large)",revenueBenchmark:"110~120%",undervalued:"true",overview:{description:"A simple, one large Container layout",showsVideo:!0,dimensions:"400x600",multipleAds:!0,userFriction:"Minimal+",designConstraints:"Minimal+",revenue:"Baseline+"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/two-ads-split",name:"Two Ads (Split)",revenueBenchmark:"115~140%",overview:{description:"A simple, split two Containers layout",showsVideo:!0,dimensions:"400x300 + 160x600",userFriction:"Noticable",designConstraints:"Noticable",revenue:"High"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/two-ads-large",name:"Two Ads (Large)",revenueBenchmark:"120~145%",undervalued:"true",overview:{description:"A simple, two large split Containers layout",showsVideo:!0,dimensions:"400x600 + 160x600",multipleAds:!0,userFriction:"Noticable+",designConstraints:"Noticable+",revenue:"Very High"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"*"," The estimated revenue for this layout has recently been optimized, and a more\naccurate estimate is currently being worked on."),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("em",{parentName:"p"},"*","*"," One or more Containers in this layout may contain multiple Ads at once, based on\nrealtime optimization. Standard limitations about Ads per window still apply.")),(0,s.kt)(E,{title:"In-Game Windows",imgDarkSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/window.svg",imgLightSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/window-light.svg",id:"in-game-windows",mdxType:"ImageHeading"},(0,s.kt)("p",null,"In-Game windows that display Ads often don't stay open for long periods, and must utilize their screen space as efficiently as possible.")),(0,s.kt)(x,{headerCellNames:["Layout","Revenue Est. ($)","Overview"],mdxType:"OWTable"},(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/one-ad-small",name:"One Ad (Small)",revenueBenchmark:"Baseline (100%)",overview:{description:"A simple, one Container layout",showsVideo:!1,dimensions:"300x250",userFriction:"Minimal",designConstraints:"Minimal",revenue:"Baseline"},tabs:["Bottom Right","Bottom Left","Top Left","Top Right"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/one-ad-long",name:"One Ad (Long)",revenueBenchmark:"105~150%",overview:{description:"A simple, one long vertical Container layout",showsVideo:!1,dimensions:"160x600",userFriction:"Minimal",designConstraints:"Minimal",revenue:"Baseline+"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/one-ad-large",name:"One Ad (Large)",revenueBenchmark:"135~150%",undervalued:"true",overview:{description:"A simple, one large Container layout",showsVideo:!1,dimensions:"400x600",multipleAds:!0,userFriction:"Minimal",designConstraints:"Minimal",revenue:"Baseline+"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/two-ads-group",name:"Two Ads (Group)",revenueBenchmark:"~200%",overview:{description:"A simple, two grouped small Containers layout",showsVideo:!1,dimensions:"300x250 + 300x250",userFriction:"Minimal+",designConstraints:"Minimal+",revenue:"High"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/two-ads-split",name:"Two Ads (Split)",revenueBenchmark:"200~300%",overview:{description:"A simple, split two Containers layout",showsVideo:!1,dimensions:"300x250 + 160x600",userFriction:"Minimal+",designConstraints:"Minimal+",revenue:"High"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,s.kt)(y,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/in-game/two-ads-large",name:"Two Ads (Large)",revenueBenchmark:"300~400%",undervalued:"true",overview:{description:"A simple, two large Containers layout",showsVideo:!1,dimensions:"400x600 + 160x600",multipleAds:!0,userFriction:"Noticable+",designConstraints:"Noticable+",revenue:"Very High"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"*"," The estimated revenue for this layout has recently been optimized, and a more\naccurate estimate is currently being worked on."),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("em",{parentName:"p"},"*","*"," One or more Containers in this layout may contain multiple Ads at once, based on\nrealtime optimization. Standard limitations about Ads per window still apply.")))}C.isMDXComponent=!0}}]);