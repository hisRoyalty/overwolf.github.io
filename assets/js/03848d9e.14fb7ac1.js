"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[456],{35318:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||a;return t?n.createElement(d,s(s({ref:r},c),{},{components:t})):n.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48255:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(25773),o=(t(27378),t(35318));const a={id:"march",image:"/img/embed/changelogs.jpg",title:"March",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},s=void 0,l={unversionedId:"api/changelogs/developers-console/2024/march",id:"api/changelogs/developers-console/2024/march",title:"March",description:"March 27th 2024 - Users and Permissions Bite 2",source:"@site/../pages/api/changelogs/developers-console/2024/march.mdx",sourceDirName:"api/changelogs/developers-console/2024",slug:"/api/changelogs/developers-console/2024/march",permalink:"/api/changelogs/developers-console/2024/march",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/developers-console/2024/march.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716876849,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"march",image:"/img/embed/changelogs.jpg",title:"March",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"GEP Changelogs",permalink:"/api/changelogs/gep-changelogs"},next:{title:"February",permalink:"/api/changelogs/developers-console/2024/february"}},i={},p=[{value:"March 27th 2024 - Users and Permissions Bite 2",id:"march-27th-2024---users-and-permissions-bite-2",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"march-27th-2024---users-and-permissions-bite-2"},"March 27th 2024 - Users and Permissions Bite 2"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The following is the changelog for an upcoming Developers' Console update, scheduled to release in the coming days.")),(0,o.kt)("p",null,"Continued the overhaul of the Console's permissions system, bringing the relevant changes into the UI as well. This means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Organization (also known as Partner within the console) Owners can now directly add/edit the permissions of their organization\nmembers from the console, on a per-app basis. Currently, the supported roles are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Member (Required) - Allows basic access to the App and its non-fincancial dashboards."),(0,o.kt)("li",{parentName:"ul"},"Release Tester (Coming soon) - Allows the user to upload versions to App test channels."),(0,o.kt)("li",{parentName:"ul"},"Release Manager - Allows the user to upload versions to all App channels, as well as edit the App's test channels."),(0,o.kt)("li",{parentName:"ul"},"Finance - Allows the user access to the App's financial dashboards."),(0,o.kt)("li",{parentName:"ul"},"Support for more specific/granular roles is now also supported. For specific requests, feel free to ",(0,o.kt)("a",{parentName:"li",href:"/support/contact-us"},"contact us"))))),(0,o.kt)("p",null,"This release is the second part of the larger move towards overhauling the Developers' Console's\napproach to managing Permissions - giving better, more granular control over individual user permissions -\nwhile also striving to streamline the different ways developers interact with the Console as a whole."),(0,o.kt)("p",null,"For the first bite of this update, see ",(0,o.kt)("a",{parentName:"p",href:"/api/changelogs/developers-console/2024/february#february-28th-2024---users-and-permissions-bite-1"},"Users and Permissions Bite 1")))}u.isMDXComponent=!0}}]);