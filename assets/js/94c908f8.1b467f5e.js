"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7664],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(25773),r=(a(27378),a(35318));const o={id:"submit-an-app-update",image:"/img/embed/getting-started.jpg",title:"Submitting a new version of your app",sidebar_label:"Submit an app update",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,p={unversionedId:"start/maintain-your-app/submit-an-app-update",id:"start/maintain-your-app/submit-an-app-update",title:"Submitting a new version of your app",description:"Your app is available on the Overwolf Appstore and it's time to release new features you've been working on. That\u2019s awesome! In this article we'll go over the process of submitting updates for your app in a few simple steps.",source:"@site/../pages/start/maintain-your-app/submit-an-app-update.mdx",sourceDirName:"start/maintain-your-app",slug:"/start/maintain-your-app/submit-an-app-update",permalink:"/start/maintain-your-app/submit-an-app-update",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/maintain-your-app/submit-an-app-update.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1715164810,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"submit-an-app-update",image:"/img/embed/getting-started.jpg",title:"Submitting a new version of your app",sidebar_label:"Submit an app update",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"App Knowledge base",permalink:"/start/maintain-your-app/add-a-knowledge-base-to-app"},next:{title:"Support Your Users",permalink:"/start/maintain-your-app/support-experience"}},s={},l=[{value:"Submitting a new version",id:"submitting-a-new-version",level:2},{value:"App version review",id:"app-version-review",level:2},{value:"Rejected reviews",id:"rejected-reviews",level:2},{value:"Deploying app updates",id:"deploying-app-updates",level:2},{value:"Use updateExtension() to check the app and perform an update:",id:"use-updateextension-to-check-the-app-and-perform-an-update",level:4}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your app is available on the Overwolf Appstore and it's time to release new features you've been working on. That\u2019s awesome! In this article we'll go over the process of submitting updates for your app in a few simple steps."),(0,r.kt)("h2",{id:"submitting-a-new-version"},"Submitting a new version"),(0,r.kt)("p",null,"To get the update cycle started, head on over to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.overwolf.com"},"developers' console"),", and select your app. From there, follow the instructions detailed ",(0,r.kt)("a",{parentName:"p",href:"/tools/developers-console/all-applications/release-management/production"},"here"),"."),(0,r.kt)("h2",{id:"app-version-review"},"App version review"),(0,r.kt)("p",null,"For the first few versions of your app, an update might need to be submitted for review."),(0,r.kt)("p",null,"This is done through the developers' console, or through your assigned DevRel manager.\nThe goal is to ensure that your app is in top shape, and that no bugs slip through,\nas well as give you a safety net for your first few releases, so you can get used to the release process."),(0,r.kt)("p",null,"Once the review process is completed, you will be able to release it to the public."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After several version reviews, once your app is deemed stable, mandatory version reviews might be turned off.\nHowever, it is still recommended, when possible, to send big versions for review even after the fact, to make sure nothing is missed.")),(0,r.kt)("h2",{id:"rejected-reviews"},"Rejected reviews"),(0,r.kt)("p",null,"We want to make sure that your app is running smoothly and that your update works just as well as your original app.\nIf our team spots any issues, we\u2019ll send you a list of them along with feedback, and will help with any issues you have trouble fixing.\nOnce you have fixed the issues that were detailed, you can send the updated version to be reviewed again."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A detailed change log will help our team to identify the changes better and will make the testing process faster.")),(0,r.kt)("h2",{id:"deploying-app-updates"},"Deploying app updates"),(0,r.kt)("p",null,'In general, apps are updated automatically every few hours, or when Overwolf is restarted.\nHowever, if there\'s a good reason to "force" an early or immediate update, you can do so.'),(0,r.kt)("h4",{id:"use-updateextension-to-check-the-app-and-perform-an-update"},"Use ",(0,r.kt)("a",{parentName:"h4",href:"/api/extensions#updateextensioncallback"},"updateExtension()")," to check the app and perform an update:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions#checkforextensionupdatecallback"},(0,r.kt)("inlineCode",{parentName:"a"},"checkForExtensionUpdate()")),". If there is an available update - register for the ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions#onextensionupdated"},(0,r.kt)("inlineCode",{parentName:"a"},"onExtensionUpdated"))," event and call ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions#updateextensioncallback"},(0,r.kt)("inlineCode",{parentName:"a"},"updateExtention()")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the update has completed successfully, the onExtensionUpdated event will be triggered, and you can call ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions#relaunch"},(0,r.kt)("inlineCode",{parentName:"a"},"relaunch()")),". In case of failure, the callback of ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions#updateextensioncallback"},(0,r.kt)("inlineCode",{parentName:"a"},"updateExtention()"))," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"success:false"),"."))),(0,r.kt)("admonition",{title:"Surprise Updates",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"No app should ever update while it\u2019s being used in-game")," unless the user explicitly requests it. In fact, there is a failsafe mechanism where this API will only work if a relevant user action is detected, such as clicking a button or otherwise choosing to update.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is also possible to check the app's current version at any point, by using the ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions/current#getmanifestcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"getManifest()")),' method (you can find the current app version under the manifest\u2019s "meta" property).\nIf the current app version and your server stored version are not identical, you can prompt the user to restart Overwolf to update the app.'),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"However"),", make sure the version is fully phased before updating your servers, to avoid an infinite update loop.")))}d.isMDXComponent=!0}}]);