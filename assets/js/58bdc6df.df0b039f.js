"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[2386],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||n;return r?o.createElement(d,l(l({ref:t},c),{},{components:r})):o.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>w,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(25773),a=(r(27378),r(35318));const n={id:"frameworks",image:"/img/embed/dev-tools.jpg",title:"Frameworks Overview",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"frameworks"}}},l=void 0,i={unversionedId:"tools/frameworks/frameworks",id:"tools/frameworks/frameworks",title:"Frameworks Overview",description:"Overwolf currently offers two similar, yet vastly different frameworks (Overwolf Platform & Overwolf Electron/ow-electron). Both frameworks currently offer:",source:"@site/../pages/tools/frameworks/frameworks.mdx",sourceDirName:"tools/frameworks",slug:"/tools/frameworks/",permalink:"/tools/frameworks/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/frameworks/frameworks.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1716908210,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"frameworks",image:"/img/embed/dev-tools.jpg",title:"Frameworks Overview",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0},category:{id:"frameworks"}}},sidebar:"tools",next:{title:"ow-electron",permalink:"/tools/ow-electron/"}},s={},p=[{value:"Overwolf Platform",id:"overwolf-platform",level:2},{value:"Overwolf Electron (ow-electron)",id:"overwolf-electron-ow-electron",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("FrameworkComparisonTable"),u=c("SkipMe"),f=c("ImageToggle"),d={toc:p};function w(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Overwolf currently offers two similar, yet vastly different frameworks (Overwolf Platform & ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"Overwolf Electron/ow-electron"),"). Both frameworks currently offer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A web-development approach to desktop Apps"),(0,a.kt)("li",{parentName:"ul"},"Access to the Overwolf Ads stack, with full GDPR compliance"),(0,a.kt)("li",{parentName:"ul"},"Anonymous App analytics (can be disabled in ",(0,a.kt)("a",{parentName:"li",href:"/tools/ow-electron"},"ow-electron"),")"),(0,a.kt)("li",{parentName:"ul"},"Built-in In-game overlay capabilities"),(0,a.kt)("li",{parentName:"ul"},"Live game events on Windows OS (",(0,a.kt)("a",{parentName:"li",href:"/tools/ow-electron"},"ow-electron")," ",(0,a.kt)("em",{parentName:"li"},"currently")," supports all games, but these must be enabled on a per-App basis. For more details, ",(0,a.kt)("a",{parentName:"li",href:"/support/contact-us"},"contact us"),")"),(0,a.kt)("li",{parentName:"ul"},"A complete ",(0,a.kt)("a",{parentName:"li",href:"/tools/developers-console"},"deployment & distribution framework"),", complete with a customizable installer")),(0,a.kt)("p",null,"That being said, there are also many differences between the two:"),(0,a.kt)(m,{openByDefault:!0,mdxType:"FrameworkComparisonTable"}),(0,a.kt)(u,{mdxType:"SkipMe"},"// old static version",(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"Side-by-side Comparison"),(0,a.kt)("div",{className:"center-text-mobile"},(0,a.kt)(f,{imgSrc:"/assets/tools/frameworks/${platform}-comparison.png",mdxType:"ImageToggle"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," Branding, UI/UX, Development, Commercial design",(0,a.kt)("br",{parentName:"em"}),"*","*"," OW-Native offers mixed branding (Overwolf + app) during installation, while OW-Electron offers 100% app branding.",(0,a.kt)("br",{parentName:"em"}),"*","*","*"," OW-Native requires Overwolf client installation to run the app, while OW-Electron doesn't require the client at all - the flow is entirely up to the app.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"All performance benchmarks measured on an ",(0,a.kt)("inlineCode",{parentName:"em"},"AMD Ryzen 5 5600X 6-Core Processor"),", and include the total overhead for running and displaying a simple window.")))),(0,a.kt)("h2",{id:"overwolf-platform"},"Overwolf Platform"),(0,a.kt)("p",null,'The Overwolf Platform is a direct wrapper around the Chromium Embedded Framework project, which itself is a wrapper around the Chromium project.\nOverwolf Apps are then "extensions" run by this platform, with a basic sandboxing around them, and APIs exposed by this platform.'),(0,a.kt)("p",null,'Every app then declares an App manifest.json file, defining general App properties, as well as the windows* that run its actual code.\nOne of these windows must also serve as the app\'s "root" process, and closing it will close the app itself.'),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," Do note that these windows can also be transparent, and even just run in the background.")),(0,a.kt)("p",null,"The Overwolf Platform specifically supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Game events for ~40 games"),(0,a.kt)("li",{parentName:"ul"},"Built-in video recording capabilities"),(0,a.kt)("li",{parentName:"ul"},"Platform-level wrappers around several Windows APIs (File access, Toast notifications, Tray icon, and many more) for significantly easier implementation"),(0,a.kt)("li",{parentName:"ul"},"No need for an App-specific code certificate"),(0,a.kt)("li",{parentName:"ul"},"Hotkey conflict resolution between Apps"),(0,a.kt)("li",{parentName:"ul"},"Native c# plugin support")),(0,a.kt)("p",null,"However, it does also mean that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your App will always require the Overwolf Platform to run"),(0,a.kt)("li",{parentName:"ul"},"The Overwolf Platform only supports the Windows OS"),(0,a.kt)("li",{parentName:"ul"},"The relevant code ecosystem only includes other Overwolf Apps"),(0,a.kt)("li",{parentName:"ul"},"Most new platform-level features/bug-fixes are rolled out over time as Platform versions, so even hotfixes can sometimes take a few days to be approved for roll out to all users")),(0,a.kt)("h2",{id:"overwolf-electron-ow-electron"},"Overwolf Electron (ow-electron)"),(0,a.kt)("p",null,"In comparison, ",(0,a.kt)("a",{parentName:"p",href:"/tools/ow-electron"},"Overwolf Electron")," is a direct fork of the Electron.js project, which itself is another wrapper around the Chromium project. While similar to CEF, Electron's biggest difference is that it is entirely built using the Node.js framework.\nOverwolf Electron Apps are full, standalone applications, running on their own, with Overwolf APIs baked in."),(0,a.kt)("p",null,"As these Apps are fully fledged standalone Electron Apps, they do require more work to get started. However, in turn, they also allow you far greater control over all of your App's functions, with the Overwolf APIs simply added on top."),(0,a.kt)("p",null,"As such, Overwolf Electron comes with its own set of advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Game events for ~40 games (enabled on a per request basis, for more details, ",(0,a.kt)("a",{parentName:"li",href:"/support/contact-us"},"contact us"),")"),(0,a.kt)("li",{parentName:"ul"},"Full support for native node.js modules"),(0,a.kt)("li",{parentName:"ul"},"Support for Windows OS, Mac OS, and several Linux flavors"),(0,a.kt)("li",{parentName:"ul"},"The ability to run in parallel to base Electron in the same codebase (while simply disabling ",(0,a.kt)("a",{parentName:"li",href:"/tools/ow-electron"},"ow-electron")," related features for ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/electron-is-overwolf"},"\u201cvanilla\u201d builds"),"), giving you even greater control of your project"),(0,a.kt)("li",{parentName:"ul"},"A large code ecosystem and knowledgebase, including all other Electron Apps out in the market (",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/"},"Discord"),", ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VsCode"),", ",(0,a.kt)("a",{parentName:"li",href:"https://desktop.github.com/"},"GitHub Desktop"),", just to name a few)"),(0,a.kt)("li",{parentName:"ul"},"The App is installed as is, and runs on its own"),(0,a.kt)("li",{parentName:"ul"},"Most general features/bug-fixes are released as package versions when ready, with updating/rollout schedules left entirely up to the App\u2019s discretion")),(0,a.kt)("p",null,"However, this does also mean that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recording capabilities are not yet built-in, but development for it is planned"),(0,a.kt)("li",{parentName:"ul"},"The framework is still in relatively early development stages. While the underlying Electron framework is well-established, the Overwolf features are still undergoing active development, and are subject to small changes."),(0,a.kt)("li",{parentName:"ul"},"App-specific code certificates are not provided, and are ",(0,a.kt)("a",{parentName:"li",href:"https://codesigningstore.com/what-certificate-is-used-to-sign-apps"},"highly recommended")," for proper App distribution"),(0,a.kt)("li",{parentName:"ul"},"Getting started with Electron has a steeper learning curve, involving topics such as process separation and isolation, as well as a more intridcate project setup and building",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"However, we are here to assist you with any questions or issues you may encounter during this process.")))))}w.isMDXComponent=!0}}]);