"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8114],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,y=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62424:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378);const r=()=>{const[e,t]=(0,n.useState)("");return(0,n.useEffect)((()=>{const e=document.querySelector("html"),a=()=>{switch(e?.dataset.theme){case"light":t("light");break;case"dark":t("dark")}};a(),e?.addEventListener("click",(()=>{setTimeout((()=>{a()}),0)}),!1)}),[]),e}},6285:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378);const r=e=>{const{children:t,thTitle:a,width:r,bold:o,center:s,desktopOnly:i,useAsMobileTitle:l}=e,d=(0,n.useRef)(null);return null!==d.current&&(r&&(d.current.style.width=r),o&&(d.current.style.fontWeight="bold"),s&&(d.current.style.textAlign="center")),n.createElement("div",{className:"ow-data-cell "+(i||l?"desktop-only":""),ref:d},n.createElement("span",{className:"mobile-label mobile-only"},a),n.createElement("span",null,t))}},45558:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378);const r=e=>{const{children:t,mobileTitle:a,mobileDescription:r}=e;return n.createElement("div",{className:"ow-table-body-expended-row-group"},t,n.createElement("h1",null,n.createElement("div",null,a),n.createElement("div",null,r)))}},32012:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(27378),r=a(85985);const o=e=>{const{children:t,expandButton:a=!1}=e,o=(0,n.useRef)(null),[s,i]=(0,n.useState)(!1),l=(0,n.useContext)(r.E),d=e=>{if(null!==o.current){const t=e?o.current.nextElementSibling:o.current,a=t?.firstChild,n=a?.offsetHeight;t.style.height=n-1+"px"}};return n.createElement("div",{className:"ow-table-body-row",ref:o,onClick:()=>{l||d(!1)}},t,a&&n.createElement("button",{className:"expand-row "+(s?"is-expanded":""),onClick:()=>{if(null!==o.current){const e=o.current.nextElementSibling;s?(e.style.display="none",i(!1)):(e.style.display="table-row",d(!0),i(!0))}}},s?"Collapse":"View Full",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))))}},61406:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378);const r=e=>{const{tabID:t,label:a,iconDarkSrc:r,iconLightSrc:o,className:s,children:i}=e;return n.createElement("section",{className:s,id:t,"data-label":a,"data-icon":r,"data-light-icon":o},i)}},68887:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(27378),r=a(62424);const o=e=>{const{children:t}=e,a=(0,r.Z)(),o=(0,n.useRef)(null),s=n.Children.map(t,((e,t)=>{if(n.isValidElement(e)){const r="light"==a?e.props.iconLightSrc:e.props.iconDarkSrc;return n.createElement("button",{key:t,className:"tabs-nav-item "+(0==t?"is-active":""),"data-tab":e.props.tabID,onClick:t=>((e,t)=>{if(null!==o.current){const a=t.target,n=o.current.querySelector(`#${e}`),r=n?.parentElement?.querySelector(".is-open"),s=a?.parentElement?.querySelector(".is-active");r?.classList.remove("is-open"),s?.classList.remove("is-active"),a?.classList.add("is-active"),n?.classList.add("is-open")}else console.log("ref is null")})(e.props.tabID,t)},e.props.iconDarkSrc&&n.createElement("img",{src:r,alt:e.props.label}),e.props.label)}return n.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!!")})),i=n.Children.map(t,((e,t)=>n.isValidElement(e)?n.cloneElement(e,{className:"panel "+(0==t?"is-open":"")}):n.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!! or call Benjo for instructions")));return n.createElement("section",{className:"tabs-section"},n.createElement("div",{className:"tabs-header"},n.createElement("nav",{className:"tabs-nav"},s)),n.createElement("div",{className:"panels-container",ref:o},i))}},59475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>T,frontMatter:()=>v,metadata:()=>h,toc:()=>w});var n=a(25773),r=a(27378),o=a(35318),s=a(45558),i=a(32012),l=a(6285),d=a(68887),c=a(61406),m=a(14034);const p=function(e){const{imageUrl:t,alt:a}=e;return r.createElement(m.Z,{alt:a,sources:{dark:t,light:t.replace(/(\.[a-zA-Z])/,"-light$1")}})};function u(e,t){return`${e}/${t}`}function y(e){const{title:t,value:a,first:n}=e;return r.createElement("div",{style:{minWidth:n?"250px":""}},r.createElement("span",{style:{color:"var(--color-999)"}},`${t}:`),` ${a}`)}const g=function(e){const{name:t,assetsPath:a,revenueBenchmark:n,undervalued:o,tabs:m,overview:g}=e,v=u(a,"full-size"),f=m.map(((e,t)=>{let a=`${e} Variant`;const n=(e=e.replace(" Aligned","")).toLocaleLowerCase().replace(" ","-");let o=u(v,"layout.png");return 0===t?a+=" (Main)":o=o.replace(".png",`-${n}.png`),r.createElement(c.Z,{key:n,tabID:n,label:a},r.createElement(p,{imageUrl:o,alt:a}))}));return r.createElement(s.Z,{mobileTitle:"Layout",mobileDescription:t},r.createElement(i.Z,{expandButton:!0},r.createElement(l.Z,{thTitle:"Layout",width:"23%",useAsMobileTitle:!0},r.createElement("b",null,t),r.createElement(p,{imageUrl:u(a,"preview.svg"),alt:`${t} Preview`})),r.createElement(l.Z,{thTitle:"Revenue Est. ($)",width:"13%"},n," ",o&&"*"),r.createElement(l.Z,{thTitle:"Overview",width:"64%"},r.createElement("p",{style:{marginBottom:"12px"}},g.description),r.createElement("div",null,r.createElement(y,{title:"Dimensions",value:g.dimensions}),g.multipleAds&&r.createElement(y,{title:"Multiple Ads in Container**",value:"True"}),r.createElement(y,{title:"Ad Formats",value:g.adsFormats})))),r.createElement(i.Z,null,r.createElement(d.Z,null,f)))},v={id:"recommended-ads-layouts",image:"/img/embed/getting-started.jpg",title:"Recommended Ads Layouts",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},f=void 0,h={unversionedId:"start/monetize-your-app/advertising/recommended-ads-layouts",id:"start/monetize-your-app/advertising/recommended-ads-layouts",title:"Recommended Ads Layouts",description:"Planning your app layout with ads can present challenges, particularly due to the wide array of ad sizes available.",source:"@site/../pages/start/monetize-your-app/advertising/recommended-ads-layouts.mdx",sourceDirName:"start/monetize-your-app/advertising",slug:"/start/monetize-your-app/advertising/recommended-ads-layouts",permalink:"/start/monetize-your-app/advertising/recommended-ads-layouts",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/monetize-your-app/advertising/recommended-ads-layouts.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720091045,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:100,frontMatter:{id:"recommended-ads-layouts",image:"/img/embed/getting-started.jpg",title:"Recommended Ads Layouts",sidebar_position:100,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"start",previous:{title:"Ads SDK",permalink:"/start/monetize-your-app/advertising/ads-sdk"},next:{title:"Advertising Policy",permalink:"/start/monetize-your-app/advertising/policy"}},b={},w=[],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},E=k("ImageHeading"),x=k("OWTable"),A={toc:w};function T(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Planning your app layout with ads can present challenges, particularly due to the wide array of ad ",(0,o.kt)("a",{parentName:"p",href:"working-with-ads#list-of-ad-sizes"},"sizes")," available."),(0,o.kt)("p",null,"To simplify this process, we have curated a list of recommended and optimized ad container combinations/layouts. These recommendations consider various factors and aim to maximize advertisers' key performance indicators. Each layout is accompanied by a short summary and a rough estimate of potential revenue performance*."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*"," Revenue estimates are generated based on aggregated performance data across the entire platform, across many countries and configurations.")),(0,o.kt)("admonition",{title:"Can't find the right layout for your case?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Try to pick a few you like, and see why they work. Combine, experiment, and most importantly, get feedback from others. We are ",(0,o.kt)("a",{parentName:"p",href:"/support/contact-us"},"always here")," for\nany questions you may have!")),(0,o.kt)(E,{title:"All Windows",imgDarkSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/window.svg",imgLightSrc:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/window-light.svg",id:"all-windows",mdxType:"ImageHeading"},(0,o.kt)("p",null,"The following is a list of recommended Ad layouts for your different App windows.")),(0,o.kt)(x,{headerCellNames:["Layout","Revenue Est. ($)","Overview"],mdxType:"OWTable"},(0,o.kt)(g,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/two-ads-large",name:"Two Ads (Large)",revenueBenchmark:"$$$$$",overview:{description:"A simple, two large split Containers layout",dimensions:"400x600 + 160x600",multipleAds:!0,adsFormats:"Video, Display"},tabs:["Split Right Aligned","Split Left Aligned"],mdxType:"AdsLayoutRow"}),(0,o.kt)(g,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/two-ads-split2",name:"Two Ads (Split)",revenueBenchmark:"$$$$$",overview:{description:"A simple, split two Containers layout",dimensions:"400x600 + 300x250",adsFormats:"Video, Display"},tabs:["Split Left","Split Right"],mdxType:"AdsLayoutRow"}),(0,o.kt)(g,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/two-ads-split",name:"Two Ads (Split)",revenueBenchmark:"$$$$",overview:{description:"A simple, split two Containers layout",dimensions:"400x300 + 160x600",adsFormats:"Video, Display"},tabs:["Right Aligned","Left Aligned"],mdxType:"AdsLayoutRow"}),(0,o.kt)(g,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/one-ad-large",name:"One Ad (Large)",revenueBenchmark:"$$$$",overview:{description:"A simple, one large Container layout",dimensions:"400x600",multipleAds:!0,adsFormats:"Video, Display"},tabs:["Split Left","Split Right"],mdxType:"AdsLayoutRow"}),(0,o.kt)(g,{assetsPath:"/assets/start/monetize-your-app/advertising/recommended-ads-layouts/desktop/one-ad-medium",name:"One Ad (Medium)",revenueBenchmark:"$$$",overview:{description:"A simple, one Container layout",dimensions:"400x300",adsFormats:"Video, Display"},tabs:["Bottom Right","Bottom Left","Top Left","Top Right"],mdxType:"AdsLayoutRow"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*","*"," One or more Containers in this layout may contain multiple Ads at once, based on real-time optimization.")))}T.isMDXComponent=!0}}]);