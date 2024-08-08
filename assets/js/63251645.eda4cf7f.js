"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6098],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(25773),o=(a(27378),a(35318));const n={id:"store-listing",image:"/img/embed/dev-tools.jpg",title:"Store Listing",sidebar_position:20,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,s={unversionedId:"tools/developers-console/all-applications/store-listing",id:"tools/developers-console/all-applications/store-listing",title:"Store Listing",description:"The Store Listing Tab",source:"@site/../pages/tools/developers-console/all-applications/store-listing.mdx",sourceDirName:"tools/developers-console/all-applications",slug:"/tools/developers-console/all-applications/store-listing",permalink:"/tools/developers-console/all-applications/store-listing",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/developers-console/all-applications/store-listing.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723103780,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:20,frontMatter:{id:"store-listing",image:"/img/embed/dev-tools.jpg",title:"Store Listing",sidebar_position:20,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"tools",previous:{title:"Testing",permalink:"/tools/developers-console/all-applications/release-management/testing"},next:{title:"User Logs",permalink:"/tools/developers-console/all-applications/user-logs"}},l={},p=[{value:"App details",id:"app-details",level:2},{value:"Graphic assets",id:"graphic-assets",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Store Listing Tab",src:a(38263).Z,width:"1918",height:"929"}),"\nThis section of the console allows you to manage everything involving your app's store listing."),(0,o.kt)("p",null,"This page utilizes the ",(0,o.kt)("a",{parentName:"p",href:"/tools/developers-console#the-footer-toolbar"},"Footer Toolbar")," in order to manage changes made to any fields."),(0,o.kt)("h2",{id:"app-details"},"App details"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Details",src:a(17621).Z,width:"1585",height:"858"})),(0,o.kt)("p",null,"Under App details, you can view and edit several parts of your apps' store listing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App Name - The name that will be displayed for your app in the store. ",(0,o.kt)("strong",{parentName:"li"},"This can be different from the app's manifest ",(0,o.kt)("a",{parentName:"strong",href:"/api/manifest#meta-name"},(0,o.kt)("inlineCode",{parentName:"a"},"name")),"!")),(0,o.kt)("li",{parentName:"ul"},"Author - The name that will be displayed for the app's author in the store. Uses ",(0,o.kt)("a",{parentName:"li",href:"/api/manifest#meta-author-display"},(0,o.kt)("inlineCode",{parentName:"a"},"author_display")),", defaulting to ",(0,o.kt)("a",{parentName:"li",href:"/api/manifest#meta-author"},(0,o.kt)("inlineCode",{parentName:"a"},"author"))," if it does not exist."),(0,o.kt)("li",{parentName:"ul"},"App URL - Your app's unique store page URL."),(0,o.kt)("li",{parentName:"ul"},"Monetization - A quick summary of the app's currently supported and enabled monetization (free? has ads? has subscription?)."),(0,o.kt)("li",{parentName:"ul"},"Short description - A ",(0,o.kt)("strong",{parentName:"li"},"plain-text")," short description for your app, displayed on your app's preview in the store."),(0,o.kt)("li",{parentName:"ul"},"Full description - A full description for your app, displayed on your app's store page. Supports ",(0,o.kt)("a",{parentName:"li",href:"https://commonmark.org/"},"CommonMark"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Similarly to ",(0,o.kt)("a",{parentName:"li",href:"release-management#edit-release-notes"},"Release Notes"),", there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Preview")," button to see how the final description looks.\nMake sure to check that your description looks exactly like you want it to before submitting it.")))),(0,o.kt)("h2",{id:"graphic-assets"},"Graphic assets"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graphic Assets",src:a(43513).Z,width:"1569",height:"868"})),(0,o.kt)("p",null,"Under Graphic assets, you can change your app's store listing assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App icon - The icon used for the app in the store."),(0,o.kt)("li",{parentName:"ul"},"Tile image - The image used for your app's store tile."),(0,o.kt)("li",{parentName:"ul"},"Screenshots - Between 1 and 5 screenshots representing your app.")),(0,o.kt)("admonition",{title:"Image Sizes",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that all app assets have their own strict size and format requirements. For further reading, refer to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"?")," icons near each image section in the console, and to ",(0,o.kt)("a",{parentName:"p",href:"/start/submit-your-app#prepare-your-store-assets"},"Prepare your store assets"),".")))}u.isMDXComponent=!0},17621:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/app-details-10ebee63dba46b61e2121e0a4c000659.jpg"},43513:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphic-assets-302c05406b0de2e439915163424b9e51.jpg"},38263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/index-2fe230ee358dd49323daaf91f86460f2.jpg"}}]);