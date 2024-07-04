"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5716],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(25773),n=(r(27378),r(35318));const o={id:"reduce-opk-size",image:"/img/embed/api-best-practices.jpg",title:"Reducing the OPK size",sidebar_label:"Reduce OPK size",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"topics/best-practices/reduce-opk-size",id:"topics/best-practices/reduce-opk-size",title:"Reducing the OPK size",description:"As explained in the SDK introduction section, OPK files are Overwolf's app installation package which includes your app's files: the manifest, source files and other assets. All files are packed in a package which has the OPK file extension.",source:"@site/../pages/topics/best-practices/reduce-opk-size.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/reduce-opk-size",permalink:"/topics/best-practices/reduce-opk-size",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/reduce-opk-size.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720091045,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{id:"reduce-opk-size",image:"/img/embed/api-best-practices.jpg",title:"Reducing the OPK size",sidebar_label:"Reduce OPK size",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"App launch performance",permalink:"/topics/best-practices/launch-time-performance"},next:{title:"Second monitor usage",permalink:"/topics/best-practices/second-monitor"}},p={},l=[{value:"Why do we want to reduce OPK size?",id:"why-do-we-want-to-reduce-opk-size",level:2},{value:"How can we reduce OPK size?",id:"how-can-we-reduce-opk-size",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As explained in ",(0,n.kt)("a",{parentName:"p",href:"/start/getting-started/sdk-introduction#opk-package"},"the SDK introduction section"),", OPK files are Overwolf's app installation package which includes your app's files: the manifest, source files and other assets. All files are packed in a package which has the OPK file extension."),(0,n.kt)("h2",{id:"why-do-we-want-to-reduce-opk-size"},"Why do we want to reduce OPK size?"),(0,n.kt)("p",null,"Most of the time, basic compression is enough, and the OPK weighs between 1-3 Mb. But sometimes heavy assets push that higher, and the OPK can easily grow to more than 5Mb."),(0,n.kt)("p",null,"This is a potential issue - heavy packages will take more time to release and download, and run some extra risk of things going wrong under pressure - imagine thousands of users needing to download larger files simultaneously."),(0,n.kt)("p",null,"Moreover, it's a standing policy for us to minimize our footprint and requirements on the user's resources, storage and/or processing power."),(0,n.kt)("h2",{id:"how-can-we-reduce-opk-size"},"How can we reduce OPK size?"),(0,n.kt)("p",null,"We suggest several proven ways to keep OPK size manageable: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compress images to weigh as little as possible with ",(0,n.kt)("a",{parentName:"p",href:"https://www.jpegmini.com/"},"JPEGMini"),", ",(0,n.kt)("a",{parentName:"p",href:"https://tinypng.com/"},"TinyPNG")," or a similar tool.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove map files before zipping (*.map).",(0,n.kt)("br",{parentName:"p"}),"\n","The Developer tools in Firefox/Chrome are using the maps to link the minified JS/CSS generated files to the original JS/CSS to allow debugging as if the code was not compressed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reduce font sizes.",(0,n.kt)("br",{parentName:"p"}),"\n","Most fonts that are used for large bodies of text are usually quite small in file size, especially if you are using a font delivery service like google fonts. Sometimes, however, designers include fonts that can be over 500KB. In these cases, you\u2019ll need to reduce the character set's weight yourself. More info ",(0,n.kt)("a",{parentName:"p",href:"https://parall.ax/blog/view/3072/tutorial-reducing-the-file-size-of-custom-web-fonts"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove .DS_Store files.",(0,n.kt)("br",{parentName:"p"}),"\n","These files are proprietary Mac/OSX system files which hold attributes/meta-data about the folder it resides in. You're safe to just delete it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove .git, node_modules etc.\nRemove anything that is not required to run the OW app.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Serve assets through a CDN.\nIf you have a large list of images, for example League of Legends champion tiles, upload them somewhere and make your app download them on demand. If you use AWS, you can upload them to a S3 bucket and set up a CDN using Cloudfront. ",(0,n.kt)("strong",{parentName:"p"},"Make sure that downloading the assets during a game does not put a heavy load on the client's connection speed, to avoid causing unnecessary spikes in ping.")))),(0,n.kt)("p",null,"If you have more ideas on how to reduce OPK size, please click on the EDIT button on the right, and add it in for everyone's benefit."))}u.isMDXComponent=!0}}]);