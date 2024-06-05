"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8092],{35318:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>d});var n=l(27378);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(l),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return l?n.createElement(d,o(o({ref:t},u),{},{components:l})):n.createElement(d,o({ref:t},u))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},29182:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(25773),r=(l(27378),l(35318));const a={id:"ow-installer",image:"/img/embed/dev-tools.jpg",title:"Overwolf Installer",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"utilities"}}},o=void 0,i={unversionedId:"tools/ow-installer/ow-installer",id:"tools/ow-installer/ow-installer",title:"Overwolf Installer",description:"The Overwolf Installer is a generalized, fully featured, cleanly designed App installer, which you can easily use",source:"@site/../pages/tools/ow-installer/ow-installer.mdx",sourceDirName:"tools/ow-installer",slug:"/tools/ow-installer/",permalink:"/tools/ow-installer/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/ow-installer/ow-installer.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1717589913,formattedLastUpdatedAt:"Jun 5, 2024",frontMatter:{id:"ow-installer",image:"/img/embed/dev-tools.jpg",title:"Overwolf Installer",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"utilities"}}},sidebar:"tools",previous:{title:"ow-cli",permalink:"/tools/ow-cli/"}},s={},p=[{value:"When should the Overwolf Installer be used",id:"when-should-the-overwolf-installer-be-used",level:2},{value:"Benefits of the Overwolf Installer",id:"benefits-of-the-overwolf-installer",level:2},{value:"Pre-flight Checkup",id:"pre-flight-checkup",level:3},{value:"Clean, customizable UI",id:"clean-customizable-ui",level:3},{value:"Decoupled from App/Client versions",id:"decoupled-from-appclient-versions",level:3},{value:"Minimal file size",id:"minimal-file-size",level:3},{value:"Live Installer Demo - (Coming Soon)",id:"live-installer-demo---coming-soon",level:2},{value:"Customizing the Overwolf Installer",id:"customizing-the-overwolf-installer",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Tabs"),c=u("TabItem"),f={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Overwolf Installer")," is a generalized, fully featured, cleanly designed App installer, which you can easily use\nwith any App hosted on the ",(0,r.kt)("a",{parentName:"p",href:"/tools/developers-console"},"Overwolf Developers' Console"),", in order to deliver a seamless installation experience tailored just for your App."),(0,r.kt)("h2",{id:"when-should-the-overwolf-installer-be-used"},"When should the Overwolf Installer be used"),(0,r.kt)(m,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(c,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"All Overwolf Platform Apps ",(0,r.kt)("strong",{parentName:"p"},"Always","*")," use the Overwolf Installer.",(0,r.kt)("br",{parentName:"p"}),"\n","This is done to ensure that no matter what happens, the Overwolf Client, as well as any other dependencies, are properly installed,\nand the App itself is properly installed on top of them all."),(0,r.kt)("p",null,"From there, every app can easily further ",(0,r.kt)("a",{parentName:"p",href:"#customizing-the-overwolf-installer"},"customize")," its installer based on its own individual requirements."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," The Overwolf Installer is only displayed if Overwolf was ",(0,r.kt)("strong",{parentName:"em"},"not already installed")," on that computer. Otherwise, the app is\n",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://www.makeuseof.com/windows-silent-installation-explained/"},"silently"))," installed as soon as the installer is executed."))),(0,r.kt)(c,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,r.kt)("p",null,"Overwolf Electron Apps ",(0,r.kt)("strong",{parentName:"p"},"can choose")," whether to use the Overwolf Installer, their own default installer, or any other installer/combination."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"A link to the App's Overwolf Installer is always available from the console, as well as a link to the latest Electron Setup file, letting you freely choose\nwhich one you use and where","*",".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," The Overwolf Installer currently only works on Windows OS.")))),(0,r.kt)("h2",{id:"benefits-of-the-overwolf-installer"},"Benefits of the Overwolf Installer"),(0,r.kt)("h3",{id:"pre-flight-checkup"},"Pre-flight Checkup"),(0,r.kt)("p",null,"One of the Overwolf Installer's main conveniences is that it takes care of many different things before/during installation for you, so that your app does not need to. Specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(Overwolf Platform Only)")," Ensuring the installing computer is compatible with the Overwolf Client. For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The current OS version is supported by the App."),(0,r.kt)("li",{parentName:"ul"},"The computer has enough space to install the application."),(0,r.kt)("li",{parentName:"ul"},"The computer meets the minimum system requirements for the App."))),(0,r.kt)("li",{parentName:"ul"},"Ensuring compliance with privacy regulations. For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Showing European users a fully fledged ",(0,r.kt)("a",{parentName:"li",href:"/tools/ow-electron/consent-management-platform"},"CMP Flow"),"."),(0,r.kt)("li",{parentName:"ul"},"Ensuring that the user acknowledges and accepts Overwolf's ",(0,r.kt)("a",{parentName:"li",href:"https://www.overwolf.com/legal/terms"},"ToS")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.overwolf.com/legal/privacy"},"Privacy Policy"),"."))),(0,r.kt)("li",{parentName:"ul"},"Allowing configuration of the target installation directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(Overwolf Platform Only)")," Allowing users to select between one of many supported languages, which then carry over to the actual installation.")),(0,r.kt)("h3",{id:"clean-customizable-ui"},"Clean, customizable UI"),(0,r.kt)("p",null,"The Overwolf installer's UI is highly ",(0,r.kt)("a",{parentName:"p",href:"#customizing-the-overwolf-installer"},"customizable"),". From the images displayed, to\nthe options exposed to the users, all the way to the color scheme for different parts."),(0,r.kt)("p",null,"This ensures that your installer will always fit your App and your brand, without needing\nto create it all from scratch."),(0,r.kt)("h3",{id:"decoupled-from-appclient-versions"},"Decoupled from App/Client versions"),(0,r.kt)("p",null,"Ocassionally, updates may need to be performed for any installer, due to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changes in underlying installer dependencies"),(0,r.kt)("li",{parentName:"ul"},"Various improvements to UX"),(0,r.kt)("li",{parentName:"ul"},"Discovery of security flaws in installer dependencies"),(0,r.kt)("li",{parentName:"ul"},"Issues with Anti-Viruses"),(0,r.kt)("li",{parentName:"ul"},"Changes in minimum System requirements"),(0,r.kt)("li",{parentName:"ul"},"And many more reasons")),(0,r.kt)("p",null,"The Overwolf Installer is completely decoupled from the actual App it is installing. As such,\nif it ever needs to update, Overwolf takes care of it directly, without requiring any changes to Apps running it."),(0,r.kt)("h3",{id:"minimal-file-size"},"Minimal file size"),(0,r.kt)("p",null,"The Overwolf Installer does not actually contain the App's files when initially downloaded. Instead, it fetches the latest version\nduring installation, ensuring that the initial download file for the user is kept as small and unintimidating as possible."),(0,r.kt)("h2",{id:"live-installer-demo---coming-soon"},"Live Installer Demo - (Coming Soon)"),(0,r.kt)("h2",{id:"customizing-the-overwolf-installer"},"Customizing the Overwolf Installer"),(0,r.kt)("admonition",{title:"WIP",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following list is an active Work in Progress. All information written below is accurate,\nbut not all of the relevant information is written below.")),(0,r.kt)("p",null,"There are many parts of the Overwolf Installer that you can customize, depending\non your exact use-case. The following is a list of currently supported customizations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customizable Assets:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App icon")," - The installer's .exe file icon",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File extension")," - ",(0,r.kt)("inlineCode",{parentName:"li"},".ico")," - Containing four sizes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"16x16"),(0,r.kt)("li",{parentName:"ul"},"32x32"),(0,r.kt)("li",{parentName:"ul"},"48x48"),(0,r.kt)("li",{parentName:"ul"},"256x256"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Additional info")," - We recommend using ",(0,r.kt)("a",{parentName:"li",href:"https://convertico.com/"},"convertico")," to create this file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Splash Image")," - Used in the installer's welcome screen.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File extension")," - ",(0,r.kt)("inlineCode",{parentName:"li"},".png")," - Image size:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"144x144"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Additional info")," - Using a transparent background is optional."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Promotion Image")," - Used when the app is downloading.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File extension")," - `.png")))))))}d.isMDXComponent=!0}}]);