"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6295],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(b,l(l({ref:t},c),{},{components:r})):o.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(25773),n=(r(27378),r(35318));const a={id:"enable-dev-tools",image:"/img/embed/api-best-practices.jpg",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"topics/best-practices/enable-dev-tools",id:"topics/best-practices/enable-dev-tools",title:"Enable Developer Tools",description:"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default.",source:"@site/../pages/topics/best-practices/enable-dev-tools.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/enable-dev-tools",permalink:"/topics/best-practices/enable-dev-tools",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/enable-dev-tools.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716282814,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"enable-dev-tools",image:"/img/embed/api-best-practices.jpg",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Electron Migration",permalink:"/topics/best-practices/electron-migration"},next:{title:"Exclusive Mode Overlay",permalink:"/topics/best-practices/exclusive-mode"}},s={},p=[{value:"How to enable dev tools",id:"how-to-enable-dev-tools",level:2},{value:"Command line",id:"command-line",level:3},{value:"Windows registry",id:"windows-registry",level:3},{value:"Download registry key",id:"download-registry-key",level:4},{value:"Restart your machine",id:"restart-your-machine",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default. "),(0,n.kt)("p",null,"You can toggle this feature on or off in two ways: through the command line, or the windows registry."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The recommended and easiest way to enable Chrome Developer Tools is to ",(0,n.kt)("a",{parentName:"p",href:"#windows-registry"},"add a registry key"),".")),(0,n.kt)("h2",{id:"how-to-enable-dev-tools"},"How to enable dev tools"),(0,n.kt)("p",null,"There are two ways to toggle a feature (ordered by precedence): command line, or registry."),(0,n.kt)("h3",{id:"command-line"},"Command line"),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},"enable")," the feature through the command line: ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},'overwolf.exe --ow-enable-features="%feature1%,%feature2%')),"."),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},"disable"),": ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},'overwolf.exe --ow-disable-features="%feature1%,%feature2%')),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"overwolf.exe --ow-enable-features=enable-dev-tools\n")),(0,n.kt)("h3",{id:"windows-registry"},"Windows registry"),(0,n.kt)("p",null,"As mentioned earlier, the easiest way to toggle the feature is by adding a registry key."),(0,n.kt)("p",null,"This method is also not affected by a client update - once you enable a feature through the registry (for example - enabled the dev tools) - it's enabled, even if there was a client update."),(0,n.kt)("p",null,"Uninstalling the OW client, removes the registry key."),(0,n.kt)("p",null,"Note that the command line got higher precedence than the registry, so if it explicitly disabled this feature, the registry change will be ignored."),(0,n.kt)("p",null,"To enable a feature through the registry, you should add it under the ","[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]","\nnode."),(0,n.kt)("p",null," For example, enable the dev tools feature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]\n"enable-features"="enable-dev-tools"\n')),(0,n.kt)("h4",{id:"download-registry-key"},"Download registry key"),(0,n.kt)("p",null," To enable the developer tools on your OW client, you can save ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/overwolf/community-gists/blob/master/enable-dev-tools.reg"},"this file")," to your machine (make sure to save it with the *.reg extension), and run it."),(0,n.kt)("h4",{id:"restart-your-machine"},"Restart your machine"),(0,n.kt)("p",null,"After adding the registry key, if the dev tools still do not work, a restart of your machine may be required."))}d.isMDXComponent=!0}}]);