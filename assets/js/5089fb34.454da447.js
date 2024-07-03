"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9101],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,g=c["".concat(u,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const i={id:"writing-your-own-plugin",image:"/img/embed/api-best-practices.jpg",title:"Writing your own Overwolf plugin",sidebar_label:"Write your own plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,a={unversionedId:"topics/using-plugins/writing-your-own-plugin",id:"topics/using-plugins/writing-your-own-plugin",title:"Writing your own Overwolf plugin",description:"It's entirely possible for you to create new plug-ins for your needs, just follow these basic rules:",source:"@site/../pages/topics/using-plugins/writing-your-own-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/writing-your-own-plugin",permalink:"/topics/using-plugins/writing-your-own-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/writing-your-own-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720012030,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"writing-your-own-plugin",image:"/img/embed/api-best-practices.jpg",title:"Writing your own Overwolf plugin",sidebar_label:"Write your own plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"TeamSpeak plugin",permalink:"/topics/using-plugins/team-speak-plugin"},next:{title:"Windows Communication",permalink:"/topics/using-windows-api/communicating-between-windows"}},u={},s=[{value:"1. Implement the Overwolf interface",id:"1-implement-the-overwolf-interface",level:2},{value:"2. Make your public functions accessible",id:"2-make-your-public-functions-accessible",level:2},{value:"3. Implement asynchronous functions",id:"3-implement-asynchronous-functions",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's entirely possible for you to create new plug-ins for your needs, just follow these basic rules:"),(0,o.kt)("h2",{id:"1-implement-the-overwolf-interface"},"1. Implement the Overwolf interface"),(0,o.kt)("p",null,"Create a .NET class library that implements a public constructor. When you call for overwolf.extensions.current.getExtraObject from Javascript, it will create an instance of your plugin and call on it\u2019s constructor."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should be an empty constructor or a constructor that accepts an int variable (specifically, the Win32 window handle for the app window hosting your plugin)."),(0,o.kt)("li",{parentName:"ul"},"Your class library can contain multiple classes \u2013 however you will need a new \u201cextra-object\u201d entry for each class with a unique name.")),(0,o.kt)("h2",{id:"2-make-your-public-functions-accessible"},"2. Make your public functions accessible"),(0,o.kt)("p",null,"Any public function, property or event will be accessible to your Javascript code automatically if it's in your class. Global events should look like: ",(0,o.kt)("inlineCode",{parentName:"p"},"public event Action<object, object> onMyEvent")," (where you can pass any number of object parameters)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your app will crash if it will try to load a plugin that declares a public event of a different form or which doesn\u2019t pass objects.")),(0,o.kt)("h2",{id:"3-implement-asynchronous-functions"},"3. Implement asynchronous functions"),(0,o.kt)("p",null,"Our best practice is to implement asynchronous-only functions that accept a callback function triggered by completion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"public void add(int x, int y, Action<object> callback)\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Overwolf version 116.2 and all later versions will only support 64 bit CPUs, and therefore you\u2019ll be required to compile your .DLL to target the x64 platform."),(0,o.kt)("li",{parentName:"ul"},"It is recommended that plugin DLLs be compiled with the .NET 4.8 framework (using a higher/lower framework version might lead to unexpected behaviors)"))),(0,o.kt)("p",null,"We recommend you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugin-sample"},"overwolf-plugin-sample")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins"},"overwolf-plugins")," entry to get a quick start on developing your own plugins."))}c.isMDXComponent=!0}}]);