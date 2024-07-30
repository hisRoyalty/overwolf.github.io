"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2889],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||r;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(25773),o=(n(27378),n(35318));const r={id:"how-to-use-plugins-in-your-app",image:"/img/embed/api-best-practices.jpg",title:"Implementing Plug-ins",sidebar_label:"Plug-in Implementation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,a={unversionedId:"topics/using-plugins/how-to-use-plugins-in-your-app",id:"topics/using-plugins/how-to-use-plugins-in-your-app",title:"Implementing Plug-ins",description:"When you finish developing your plugin, you should sign it to avoid security and deployment issues. Here you can find more on how to sign your code.",source:"@site/../pages/topics/using-plugins/how-to-use-plugins-in-your-app.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/how-to-use-plugins-in-your-app",permalink:"/topics/using-plugins/how-to-use-plugins-in-your-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/how-to-use-plugins-in-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722325180,formattedLastUpdatedAt:"Jul 30, 2024",frontMatter:{id:"how-to-use-plugins-in-your-app",image:"/img/embed/api-best-practices.jpg",title:"Implementing Plug-ins",sidebar_label:"Plug-in Implementation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Downloader plugin",permalink:"/topics/using-plugins/downloader-plugin"},next:{title:"Plugins overview",permalink:"/topics/using-plugins/plugins-overview"}},p={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"When you finish developing your plugin, you should sign it to avoid security and deployment issues. ",(0,o.kt)("a",{parentName:"p",href:"https://makolyte.com/dotnet-how-to-sign-your-code-with-a-code-signing-certificate/"},"Here")," you can find more on how to sign your code.")),(0,o.kt)("p",null,"To implement an existing plugin for use in your app, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the plugin\u2019s DLL file or files in your app\u2019s directory as well as inside your OPK when you create it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure the DLL is \"Unblocked\". Windows automatically marks downloaded DLLs as unsafe and you will have to go into file properties and check the 'Unblock' option there."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:n(2223).Z,width:"215",height:"300"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Declare the plugin in your manifest.json under the ",(0,o.kt)("inlineCode",{parentName:"li"},"data.extra-objects")," property. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"data": {\n"extra-objects": {\n  "simple-io-plugin": {\n    "file": "files/plugins/simple-io-plugin.dll",\n    "class": "overwolf.plugins.simpleio.SimpleIOPlugin"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This tells Overwolf that your app contains a plugin named: ",(0,o.kt)("inlineCode",{parentName:"p"},"simple-io-plugin")," which can be found inside the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"files/plugins/simple-io-plugin.dll")," with the .NET class name ",(0,o.kt)("inlineCode",{parentName:"p"},"overwolf.plugins.simpleio.SimpleIOPlugin.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create an instance of this plug-in in your app's Javascript code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var _plugin = null;\noverwolf.extensions.current.getExtraObject(\u201csimple-io-plugin\u201d, (result) => {\n  if (result.status === \u201csuccess\u201d) {\n    _plugin = result.object;\n  }\n})\n")),(0,o.kt)("p",null,"Now you can call on the plugin\u2019s functions, events or properties directly."),(0,o.kt)("p",null,"Take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/blob/master/sample_apps/process_manager"},"Process Manager plugin")," on GitHub, for an example of using plugins. You can find there a generic helper class for initializing the plugin, so the initializing will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var plugin = new OverwolfPlugin("process-manager-plugin", true);\n')),(0,o.kt)("p",null,"Feel free to use or modify it in your own app as needed."))}c.isMDXComponent=!0},2223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unblock_dll-5a6ae65815c89f3a12632f324495d605.jpg"}}]);