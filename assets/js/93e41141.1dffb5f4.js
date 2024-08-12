"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[602],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),s=n,b=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(25773),n=(r(27378),r(35318));const i={id:"tobii",image:"/img/embed/deprecated.jpg",title:"overwolf.tobii API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"api/deprecated/obsolete/tobii",id:"api/deprecated/obsolete/tobii",title:"overwolf.tobii API",description:"The overwolf.tobii API is an historical API that would allow the app to interact with the tobii service.",source:"@site/../pages/api/deprecated/obsolete/tobii.mdx",sourceDirName:"api/deprecated/obsolete",slug:"/api/deprecated/obsolete/tobii",permalink:"/api/deprecated/obsolete/tobii",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/deprecated/obsolete/tobii.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723464413,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"tobii",image:"/img/embed/deprecated.jpg",title:"overwolf.tobii API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.log API",permalink:"/api/deprecated/obsolete/log"},next:{title:"overwolf.media.audio API",permalink:"/api/deprecated/audio"}},p={},d=[{value:"Types Reference",id:"types-reference",level:2},{value:"TobiiLayerParams object",id:"tobiilayerparams-object",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"eTobiiEffectType enum",id:"etobiieffecttype-enum",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"OBSOLETE",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The overwolf.tobii API is an historical API that would allow the app to interact with the tobii service.",(0,n.kt)("br",{parentName:"p"}),"\n","If you want to integrate tobii in your OW app, please wrap the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.tobii.com/consumer-eye-trackers/core-sdk/"},"tobii DLL")," as an ",(0,n.kt)("a",{parentName:"p",href:"/topics/using-plugins/plugins-overview"},"OW plugin"),".")),(0,n.kt)("h2",{id:"types-reference"},"Types Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tobiilayerparams-object"},"overwolf.tobii.TobiiLayerParams")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#etobiieffecttype-enum"},"overwolf.tobii.eTobiiEffectType")," enum")),(0,n.kt)("h2",{id:"tobiilayerparams-object"},"TobiiLayerParams object"),(0,n.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,n.kt)("p",null,"Tobii Replay layer setting."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Since"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"TTobii Replay layer on\\off"),(0,n.kt)("td",{parentName:"tr",align:null},"0.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"effect"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#etobiieffecttype-enum"},"eTobiiEffectType")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"Tobii Replay layer effect"),(0,n.kt)("td",{parentName:"tr",align:null},"0.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"color"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"RBGA color"),(0,n.kt)("td",{parentName:"tr",align:null},"0.78")))),(0,n.kt)("h2",{id:"etobiieffecttype-enum"},"eTobiiEffectType enum"),(0,n.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,n.kt)("p",null,"Media type for the Media Event."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Options"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Default"),(0,n.kt)("td",{parentName:"tr",align:null},"Keep the current effect as is")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bubble"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Solid"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Inverted"),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);