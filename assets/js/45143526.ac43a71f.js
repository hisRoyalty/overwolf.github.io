"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7325],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:"paths",image:"/img/embed/api-docs.jpg",title:"overwolf.io.paths API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/io/paths",id:"api/io/paths",title:"overwolf.io.paths API",description:"Use this API to obtain system folder paths.",source:"@site/../pages/api/io/paths.mdx",sourceDirName:"api/io",slug:"/api/io/paths",permalink:"/api/io/paths",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/io/paths.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722950112,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"paths",image:"/img/embed/api-docs.jpg",title:"overwolf.io.paths API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.io API",permalink:"/api/io/"},next:{title:"overwolf.logitech API",permalink:"/api/logitech/"}},p={},s=[{value:"Supported paths",id:"supported-paths",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to obtain system folder paths."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"}," For more I/O functionalities, please use our ",(0,n.kt)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin"),".")),(0,n.kt)("p",null,"You can call the object properties to get the requested path:"),(0,n.kt)("h2",{id:"supported-paths"},"Supported paths"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"programFiles"),(0,n.kt)("li",{parentName:"ul"},"programFilesX86"),(0,n.kt)("li",{parentName:"ul"},"commonFiles"),(0,n.kt)("li",{parentName:"ul"},"commonFilesX86"),(0,n.kt)("li",{parentName:"ul"},"commonAppData"),(0,n.kt)("li",{parentName:"ul"},"desktop"),(0,n.kt)("li",{parentName:"ul"},"windows"),(0,n.kt)("li",{parentName:"ul"},"system"),(0,n.kt)("li",{parentName:"ul"},"systemX86"),(0,n.kt)("li",{parentName:"ul"},"documents"),(0,n.kt)("li",{parentName:"ul"},"videos"),(0,n.kt)("li",{parentName:"ul"},"pictures"),(0,n.kt)("li",{parentName:"ul"},"music"),(0,n.kt)("li",{parentName:"ul"},"commonDocuments"),(0,n.kt)("li",{parentName:"ul"},"favorites"),(0,n.kt)("li",{parentName:"ul"},"fonts"),(0,n.kt)("li",{parentName:"ul"},"startMenu"),(0,n.kt)("li",{parentName:"ul"},"localAppData"),(0,n.kt)("li",{parentName:"ul"},"Overwolf install dir - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169")),(0,n.kt)("li",{parentName:"ul"},"Overwolf install dir with version number - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169")),(0,n.kt)("li",{parentName:"ul"},"OBS dir - ",(0,n.kt)("strong",{parentName:"li"},"Version added: 0.169"))),(0,n.kt)("h2",{id:"usage-example"},"Usage Example"),(0,n.kt)("p",null,"To get the system path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'console.log(overwolf.io.paths.system)\n//prints "C:\\WINDOWS\\system32"\n')),(0,n.kt)("p",null,"To get the full path of the current extension (OW app), you can call ",(0,n.kt)("inlineCode",{parentName:"p"},"overwolf.io.paths.localAppData")," and concatenate your extension id and your app version to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'overwolf.io.paths.localAppData + "/overwolf/extensions/[your extension id]/[version]"\n')),(0,n.kt)("p",null,"Where version can be ",(0,n.kt)("a",{parentName:"p",href:"../extensions/current#getmanifestcallback"},"retrieved from the app manifest"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"note that this will not work if the extension is loaded as unpacked while developing.")))}m.isMDXComponent=!0}}]);