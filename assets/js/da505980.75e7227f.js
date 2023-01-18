"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2085],{35318:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>m});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){return function(t){var n=d(t.components);return o.createElement(e,r({},t,{components:n}))}},d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,u=m["".concat(i,".").concat(c)]||m[c]||w[c]||r;return n?o.createElement(u,l(l({ref:t},s),{},{components:n})):o.createElement(u,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19228:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Every Overwolf application (ow-electron or Overwolf platform), has a unique app id. This unique id is automatically generated, and is based on the app's name,\nand the app's author's name."),(0,a.mdx)("p",null,"In ow-electron, these fields correspond to the following fields in the package.json file:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"App name - The ",(0,a.mdx)("inlineCode",{parentName:"li"},"productName")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"name")," properties"),(0,a.mdx)("li",{parentName:"ul"},"App author - The ",(0,a.mdx)("inlineCode",{parentName:"li"},"name")," field under the ",(0,a.mdx)("inlineCode",{parentName:"li"},"author")," field.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="Partial package.json with the relevant fields"',title:'"Partial',"package.json":!0,with:!0,the:!0,relevant:!0,'fields"':!0},'{\n  ...\n  "name": "ow-electron-sample-app",\n  ...\n  "author": {\n    "name": "Overwolf"\n  },\n  ...\n  "build": {\n    ...\n    "productName": "ow-electron-sample-app",\n    ...\n  },\n  ...\n}\n')))}i.isMDXComponent=!0},57766:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="start and build command variants for @overwolf/ow-electron"',title:'"start',and:!0,build:!0,command:!0,variants:!0,for:!0,'@overwolf/ow-electron"':!0},'{\n  ...\n  "scripts": {\n    ...\n    "start:ow-electron": "ow-electron .",\n    "build:ow-electron": "ow-electron-builder --publish=never"\n  },\n  ...\n}\n')))}i.isMDXComponent=!0},44884:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[{value:"Introducing the CMP",id:"introducing-the-cmp",level:3}]};function i(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"A CMP makes it easier for you to meet the stricter legal requirements governing data collection in certain parts of the world,\nby helping you handle the process of receiving consent to collect user cookies. This also allows you to show ads to users living in those areas."),(0,a.mdx)("p",null,"ow-electron comes with a built in CMP, which your app can utilize out of the box.\nThis allows you to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Check if a user needs to be informed of the CMP"),(0,a.mdx)("li",{parentName:"ul"},"Show them the CMP itself if necessary, applying any settings they use to the entire ow-electron package")),(0,a.mdx)("p",null,"The relevant users should then be informed about the existence of the CMP, as well as where they can find it in the app."),(0,a.mdx)("h3",{id:"introducing-the-cmp"},"Introducing the CMP"),(0,a.mdx)("p",null,"There are two ways to introduce the relevant users to the CMP:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"During the app's installation - ",(0,a.mdx)("strong",{parentName:"li"},"Recommended")),(0,a.mdx)("li",{parentName:"ul"},"On the app's first start, as part of the First Time User Experience (FTUE)",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"If you are migrating your app to ow-electron, this will also apply to the first time that existing users start the app after the update")))))}i.isMDXComponent=!0},94190:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{title:"Ad Enablement",type:"tip"},(0,a.mdx)("p",{parentName:"admonition"},"In order for your app to be able to display Ads, we first have to set up our backend to support your ",(0,a.mdx)("a",{parentName:"p",href:"#unique-app-id"},"app's uid"),".\nPlease contact us for further details ",(0,a.mdx)("a",{parentName:"p",href:"/support/contact-us"},"here"),".",(0,a.mdx)("br",{parentName:"p"}),"\n","Until then, you can test how Ads would look and behave in your app, by passing in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--test-ad")," commandline argument."),(0,a.mdx)("p",{parentName:"admonition"},"To enable ads for users in areas with more strict data collection regulations, it is also required to fully follow our ",(0,a.mdx)("a",{parentName:"p",href:"/tools/ow-electron/consent-management-platform"},"CMP Implementation Guidelines"),".")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"<owadview/>")," tag, which is based on the Electron ",(0,a.mdx)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/webview-tag"},(0,a.mdx)("inlineCode",{parentName:"a"},"<webview/>"))," tag, automatically hosts and manages ads in your app."),(0,a.mdx)("p",null,"To use it, place the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<owadview/>")," tag (no attributes required) inside a ",(0,a.mdx)("inlineCode",{parentName:"p"},"<div>")," tag, with the size of the ",(0,a.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads#list-of-ad-sizes"},"standard IAB Ad unit")," you wish to display."),(0,a.mdx)("p",null,"For more information about supported ad units + General Ads guidelines, visit ",(0,a.mdx)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads"},"Working with Ads"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html"},'<div style="width: 400px; height: 300px; background: transparent;">\n  <owadview />\n</div>\n')),(0,a.mdx)("admonition",{title:"Transparent Background",type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"We use ",(0,a.mdx)("inlineCode",{parentName:"p"},"background: transparent"),", in order to allow your app to show a background image as a fallback when there is no ads inventory to display.")),(0,a.mdx)("p",null,"Other things to keep in mind:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("inlineCode",{parentName:"li"},"<owadview/>")," tag starts muted by default. This can be ",(0,a.mdx)("a",{parentName:"li",href:"https://www.electronjs.org/docs/latest/api/webview-tag#webviewsetaudiomutedmuted"},"changed"),"."),(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("inlineCode",{parentName:"li"},"<owadview/>")," tag is automatically managed, so it will already handle any issues involving ad visibility or crashes.")))}i.isMDXComponent=!0},52995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var o=n(25773),a=(n(27378),n(35318)),r=n(57766),i=n(19228),l=n(94190),p=n(44884);const s={toc:[{value:"Unique App ID",id:"unique-app-id",level:2},{value:"The owadview tag",id:"the-owadview-tag",level:2},{value:"Anonymous Analytics",id:"anonymous-analytics",level:2},{value:"Consent Management Platform (CMP)",id:"consent-management-platform-cmp",level:2}]};function m(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"There is no problem with running both ow-electron and electron side-by-side on the same project. In order to run your app with ow-electron,\nyou only need to add new start and build scripts in your package.json file:"),(0,a.mdx)(r.ZP,{mdxType:"StartAndBuild"}),(0,a.mdx)("h2",{id:"unique-app-id"},"Unique App ID"),(0,a.mdx)(i.ZP,{mdxType:"AppAndAuthorName"}),(0,a.mdx)("p",null,"Unique app ids are used for ads optimizations, as well as for optional ",(0,a.mdx)("a",{parentName:"p",href:"#anonymous-analytics"},"anonymous analytics")," reports that you may review on our developer's console."),(0,a.mdx)("admonition",{title:"Referring To App ID In Your app",type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Once the ",(0,a.mdx)("inlineCode",{parentName:"p"},"app.whenReady")," promise resolves, your app's uid will be available, using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"OVERWOLF_APP_UID")," environment variable (",(0,a.mdx)("inlineCode",{parentName:"p"},"process.env.OVERWOLF_APP_UID"),").\nHowever, note that if you try to access it before the app is ready, the variable simply won't exist.")),(0,a.mdx)("h2",{id:"the-owadview-tag"},"The owadview tag"),(0,a.mdx)(l.ZP,{mdxType:"OverwolfAdView"}),(0,a.mdx)("h2",{id:"anonymous-analytics"},"Anonymous Analytics"),(0,a.mdx)("p",null,"In order to generate usage reports for your ow-electron app, we collect a small number of anonymous analytics (such as when the app is launched,\nand when a certain app's window is shown)."),(0,a.mdx)("p",null,"You can disable these analytics with the following piece of code:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { app } from 'electron';\n\napp.overwolf.disableAnonymousAnalytics();\n\n...\n\napp.whenReady().then(...)\n")),(0,a.mdx)("admonition",{title:"Disabling Analytics",type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"App analytics are disabled on a per-session basis. If you wish to completely disable them, you must do so before every app start, when initailizing your app.")),(0,a.mdx)("h2",{id:"consent-management-platform-cmp"},"Consent Management Platform (CMP)"),(0,a.mdx)(p.ZP,{mdxType:"CMPIntro"}),(0,a.mdx)("p",null,"For more infromation about the CMP and how to work with it, refer to ",(0,a.mdx)("a",{parentName:"p",href:"ow-electron/consent-management-platform"},"Consent-Management-Platform"),"."))}m.isMDXComponent=!0;const d={id:"ow-electron",image:"/img/embed/dev-tools.jpg",title:"ow-electron",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!1}},c=void 0,u={unversionedId:"tools/ow-electron/ow-electron",id:"tools/ow-electron/ow-electron",title:"ow-electron",description:"ow-electron is a solution built on top of electron, aimed at allowing electron apps access to Overwolf APIs.",source:"@site/pages/docs/tools/ow-electron/ow-electron.mdx",sourceDirName:"tools/ow-electron",slug:"/tools/ow-electron/",permalink:"/tools/ow-electron/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/tools/ow-electron/ow-electron.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673268953,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"ow-electron",image:"/img/embed/dev-tools.jpg",title:"ow-electron",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!1}},sidebar:"tools",previous:{title:"ow-cli",permalink:"/tools/ow-cli/"},next:{title:"Consent Management Platform",permalink:"/tools/ow-electron/consent-management-platform/"}},w={},h=[],f={toc:h};function g(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"ow-electron is a solution built on top of ",(0,a.mdx)("a",{parentName:"p",href:"https://www.electronjs.org/"},"electron"),", aimed at allowing electron apps access to Overwolf APIs."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron"},"@overwolf/ow-electron")," is a package based on the\n",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron"},"electron")," package, adding several new features to it."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron-builder"},"@overwolf/ow-electron-builder")," is a package based on the\n",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron-builder"},"electron-builder")," package, which supports building ow-electron apps."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/electron-is-overwolf"},"@overwolf/electron-is-overwolf")," - similar to the\n",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron-is-dev"},"electron-is-dev")," package, allows your app to check whether it's currently running as ow-electron, or as a non-overwolf electron app.")),(0,a.mdx)("div",{className:"underline-patch"},(0,a.mdx)("admonition",{title:"ow-electron App Creation",type:"tip"},(0,a.mdx)("p",{parentName:"admonition"},"The following page lists the different ow-electron features and how to enable them.",(0,a.mdx)("br",{parentName:"p"}),"\n","General Overwolf ",(0,a.mdx)("a",{parentName:"p",href:"/start/getting-started/app-creation-process"},"app creation resources")," and ",(0,a.mdx)("a",{parentName:"p",href:"/start/getting-started"},"intro to Overwolf apps")," are available at their respective pages."))),(0,a.mdx)(m,{mdxType:"ReadMe"}))}g.isMDXComponent=!0}}]);