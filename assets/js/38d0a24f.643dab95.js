"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4114],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),s=l,h=u["".concat(c,".").concat(s)]||u[s]||g[s]||n;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},35303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(25773),l=(a(27378),a(35318));const n={id:"logitech",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},o=void 0,i={unversionedId:"api/logitech/logitech",id:"api/logitech/logitech",title:"overwolf.logitech API",description:"An API for Logitech features.",source:"@site/../pages/api/logitech/logitech.mdx",sourceDirName:"api/logitech",slug:"/api/logitech/",permalink:"/api/logitech/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/logitech/logitech.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721716472,formattedLastUpdatedAt:"Jul 23, 2024",frontMatter:{id:"logitech",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.io.paths API",permalink:"/api/io/paths"},next:{title:"overwolf.logitech.arx API",permalink:"/api/logitech/arx"}},c={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getVersion(callback)",id:"getversioncallback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"getDevices(callback)",id:"getdevicescallback",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"LogitechData Object",id:"logitechdata-object",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"Logitech Device Object",id:"logitech-device-object",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An API for Logitech features."),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getversioncallback"},"overwolf.logitech.getVersion()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getdvicescallback"},"overwolf.logitech.getDevices()"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overwolflogitechlogitechdata-object"},"overwolf.logitech.overwolf.logitech.LogitechData")," Object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#logitech-device-object"},"overwolf.logitech.Logitech Device")," Object")),(0,l.kt)("h2",{id:"getversioncallback"},"getVersion(callback)"),(0,l.kt)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets the current version of the Logitech Gaming Software.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called with the version of LGS currently installed")))),(0,l.kt)("h2",{id:"getdevicescallback"},"getDevices(callback)"),(0,l.kt)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets the currently installed Logitech devices.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called with the current device information")))),(0,l.kt)("h2",{id:"logitechdata-object"},"LogitechData Object"),(0,l.kt)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Container for Logitech data.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimal_lgs_version"),(0,l.kt)("td",{parentName:"tr",align:null},"version Object (string wrapper)"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimal LGS version required for this app")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arx"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"logitech/led#overwolflogitechledlogitecharxdata-object"},"LogitechArxData")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The Arx API data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"led"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"logitech/led#overwolflogitechledlogitechleddata-object"},"LogitechLedData")," Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The LED API data")))),(0,l.kt)("h2",{id:"logitech-device-object"},"Logitech Device Object"),(0,l.kt)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Logitech device type.")),(0,l.kt)("p",null,"No further info."))}u.isMDXComponent=!0}}]);