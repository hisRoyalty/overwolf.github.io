"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3937],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(25773),r=(a(27378),a(35318));const l={id:"shared-data",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.sharedData API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/extensions/shared-data",id:"api/extensions/shared-data",title:"overwolf.extensions.sharedData API",description:"A set of APIs to allow independent extensions to communicate with each other.",source:"@site/../pages/api/extensions/shared-data.mdx",sourceDirName:"api/extensions",slug:"/api/extensions/shared-data",permalink:"/api/extensions/shared-data",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/extensions/shared-data.mdx",tags:[],version:"current",lastUpdatedBy:"JacksAtWork",lastUpdatedAt:1719326743,formattedLastUpdatedAt:"Jun 25, 2024",frontMatter:{id:"shared-data",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.sharedData API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.extensions.io API",permalink:"/api/extensions/io"},next:{title:"overwolf.games API",permalink:"/api/games/"}},s={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"set(string appId, object value, callback)",id:"setstring-appid-object-value-callback",level:2},{value:"Version added: 0.137",id:"version-added-0137",level:4},{value:"get(SharedDataParams param, callback)",id:"getshareddataparams-param-callback",level:2},{value:"Version added: 0.137",id:"version-added-0137-1",level:4},{value:"Usage examples",id:"usage-examples",level:4},{value:"onChanged",id:"onchanged",level:2},{value:"Version added: 0.137",id:"version-added-0137-2",level:4},{value:"SharedDataParams Object",id:"shareddataparams-object",level:2},{value:"Version added: 0.137",id:"version-added-0137-3",level:4},{value:"GetResult Object",id:"getresult-object",level:2},{value:"onChangedEvent Object",id:"onchangedevent-object",level:2},{value:"Event Data Example: Success",id:"event-data-example-success",level:4}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A set of APIs to allow independent extensions to communicate with each other."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setstring-appid-object-value-callback"},"overwolf.extensions.sharedData.set()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getshareddataparams-param-callback"},"overwolf.extensions.sharedData.get()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onchanged"},"overwolf.extensionss.sharedData.OnChanged"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shareddataparams-object"},"overwolf.extensions.sharedData.SharedDataParams")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getresult-object"},"GetResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onchangedevent-object"},"onChangedEvent")," Object")),(0,r.kt)("h2",{id:"setstring-appid-object-value-callback"},"set(string appId, object value, callback)"),(0,r.kt)("h4",{id:"version-added-0137"},"Version added: 0.137"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Used by the owner app to set data for the consumer app, by appId.")),(0,r.kt)("p",null,"This function is one part of the service providing app to communicate with the consumer apps.\nfor instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The requested app id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getresult-object"},"Result: GetResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"a status indicating success or failure")))),(0,r.kt)("h2",{id:"getshareddataparams-param-callback"},"get(SharedDataParams param, callback)"),(0,r.kt)("h4",{id:"version-added-0137-1"},"Version added: 0.137"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Used by the consumer app to get data set by the owner app.")),(0,r.kt)("p",null,"This function is one part of the service providing app to communicate with the consumer apps.\nfor instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"param"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#shareddataparams-object"},"SharedDataParams")," object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getresult-object"},"Result: GetResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"a status indicating success or failure")))),(0,r.kt)("h4",{id:"usage-examples"},"Usage examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.sharedData.get(\n    {origin:"nafihghfcpikebhfhdhljejkcifgbdahdhngepfb"},\n    data => {\n        // Process game enable state\n        // See result callback format below\n    }\n);\n\noverwolf.extensions.sharedData.get({},console.log) //retrun all data set to my self\n\n\noverwolf.extensions.sharedData.get({origin:"*"},console.log) //return all data was set to my self\n\n\noverwolf.extensions.sharedData.get({target:"fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm"},console.info) //retrun data i set to "fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm" (extension id)\n')),(0,r.kt)("h2",{id:"onchanged"},"onChanged"),(0,r.kt)("h4",{id:"version-added-0137-2"},"Version added: 0.137"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when the hosting app state changes, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#onchangedevent-object"},"onChangedEvent")," Object")),(0,r.kt)("h2",{id:"shareddataparams-object"},"SharedDataParams Object"),(0,r.kt)("h4",{id:"version-added-0137-3"},"Version added: 0.137"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container that represent a shared data parameters.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"origin"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"getresult-object"},"GetResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"<","Dictionary> string"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary","<",'T>: An object that maps strings to values of type "T"')))),(0,r.kt)("h2",{id:"onchangedevent-object"},"onChangedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"origin"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "origin": string (uid),\n    "target": string (uid),\n    "data": string\n}\n')))}m.isMDXComponent=!0}}]);