"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7325],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const o={id:"paths",image:"/img/embed/api-docs.jpg",title:"overwolf.io.paths API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/io/paths",id:"api/io/paths",title:"overwolf.io.paths API",description:"Use this API to obtain system folder paths.",source:"@site/../pages/api/io/paths.mdx",sourceDirName:"api/io",slug:"/api/io/paths",permalink:"/api/io/paths",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/io/paths.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720012030,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"paths",image:"/img/embed/api-docs.jpg",title:"overwolf.io.paths API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.io API",permalink:"/api/io/"},next:{title:"overwolf.logitech API",permalink:"/api/logitech/"}},p={},s=[{value:"Supported paths",id:"supported-paths",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to obtain system folder paths."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"}," For more I/O functionalities, please use our ",(0,n.kt)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin"),".")),(0,n.kt)("p",null,"You can call the object properties to get the requested path:"),(0,n.kt)("h2",{id:"supported-paths"},"Supported paths"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"programFiles"),(0,n.kt)("li",{parentName:"ul"},"programFilesX86"),(0,n.kt)("li",{parentName:"ul"},"commonFiles"),(0,n.kt)("li",{parentName:"ul"},"commonFilesX86"),(0,n.kt)("li",{parentName:"ul"},"commonAppData"),(0,n.kt)("li",{parentName:"ul"},"desktop"),(0,n.kt)("li",{parentName:"ul"},"windows"),(0,n.kt)("li",{parentName:"ul"},"system"),(0,n.kt)("li",{parentName:"ul"},"systemX86"),(0,n.kt)("li",{parentName:"ul"},"documents"),(0,n.kt)("li",{parentName:"ul"},"videos"),(0,n.kt)("li",{parentName:"ul"},"pictures"),(0,n.kt)("li",{parentName:"ul"},"music"),(0,n.kt)("li",{parentName:"ul"},"commonDocuments"),(0,n.kt)("li",{parentName:"ul"},"favorites"),(0,n.kt)("li",{parentName:"ul"},"fonts"),(0,n.kt)("li",{parentName:"ul"},"startMenu"),(0,n.kt)("li",{parentName:"ul"},"localAppData"),(0,n.kt)("li",{parentName:"ul"},"Overwolf install dir - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169")),(0,n.kt)("li",{parentName:"ul"},"Overwolf install dir with version number - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169")),(0,n.kt)("li",{parentName:"ul"},"OBS dir - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169"))),(0,n.kt)("h2",{id:"usage-example"},"Usage Example"),(0,n.kt)("p",null,"To get the system path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'console.log(overwolf.io.paths.system)\n//prints "C:\\WINDOWS\\system32"\n')),(0,n.kt)("p",null,"To get the full path of the current extension (OW app), you can call ",(0,n.kt)("inlineCode",{parentName:"p"},"overwolf.io.paths.localAppData")," and concatenate your extension id and your app version to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'overwolf.io.paths.localAppData + "/overwolf/extensions/[your extension id]/[version]"\n')),(0,n.kt)("p",null,"Where version can be ",(0,n.kt)("a",{parentName:"p",href:"../extensions/current#getmanifestcallback"},"retrieved from the app manifest"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"note that this will not work if the extension is loaded as unpacked while developing.")))}m.isMDXComponent=!0}}]);