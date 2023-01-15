"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8806],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>l});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){return function(t){var r=m(t.components);return n.createElement(e,i({},t,{components:r}))}},m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=o,c=l["".concat(a,".").concat(u)]||l[u]||f[u]||i;return r?n.createElement(c,s(s({ref:t},d),{},{components:r})):n.createElement(c,s({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},84464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={id:"advertising",image:"/img/embed/getting-started.jpg",title:"Advertising",sidebar_custom_props:{overwolf_platform:void 0,electron_platform:void 0}},a=void 0,s={unversionedId:"start/monetize-your-app/advertising/advertising",id:"start/monetize-your-app/advertising/advertising",title:"Advertising",description:"Ads offer a way to monetize your app seamlessly, without compromising user experience.",source:"@site/pages/docs/start/monetize-your-app/advertising/advertising.mdx",sourceDirName:"start/monetize-your-app/advertising",slug:"/start/monetize-your-app/advertising/",permalink:"/start/monetize-your-app/advertising/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-your-app/advertising/advertising.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673516608,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"advertising",image:"/img/embed/getting-started.jpg",title:"Advertising",sidebar_custom_props:{}},sidebar:"start",previous:{title:"Monetize Your App",permalink:"/start/monetize-your-app/"},next:{title:"Working with Ads",permalink:"/start/monetize-your-app/advertising/working-with-ads"}},p={},d=[],l={toc:d};function m(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Ads offer a way to monetize your app seamlessly, without compromising user experience."),(0,o.mdx)("p",null,"In the following section, we will go over everything you need to know in order to begin displaying Ads in your app."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"To begin, please make sure to go over ",(0,o.mdx)("a",{parentName:"li",href:"advertising/working-with-ads"},"Working with Ads"),", and plan out where Ads should go."),(0,o.mdx)("li",{parentName:"ol"},"Once you're ready, simply follow the ",(0,o.mdx)("a",{parentName:"li",href:"advertising/ads-sdk"},"Ads SDK")," integration guidelines for your platform. Feel free to ",(0,o.mdx)("a",{parentName:"li",href:"/support/contact-us"},"contact our team"),"\nfor any questions or issues you may run into, especially in this step."),(0,o.mdx)("li",{parentName:"ol"},"Once you have finished integrating Ads on your side, we will perform a final series of tests and feedback, to make sure that everything is working as intended."),(0,o.mdx)("li",{parentName:"ol"},"If all tests pass, Ads will be enabled and served for users of your app (video Ads will take a few days longer to be enabled).")),(0,o.mdx)("admonition",{title:"Tracking Ad Performance",type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Once Ads are enabled for your app, Ad-related data will show up in your app's ",(0,o.mdx)("a",{parentName:"p",href:"/tools/developers-console/all-applications/dashboard"},"developer's console dashboard"),"."),(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("strong",{parentName:"p"},"You will also receive access to a dedicated dashboard with extra Ad performance analytics."))),(0,o.mdx)("admonition",{title:"Demographics",type:"info"},(0,o.mdx)("ul",{parentName:"admonition"},(0,o.mdx)("li",{parentName:"ul"},"Advertising budgets are more significant for Tier 1 countries: US, UK, CA, AU, DE."),(0,o.mdx)("li",{parentName:"ul"},"If most of your app's users originate from Tier 1 countries, it\u2019s likely that your CPM and yield will be higher."),(0,o.mdx)("li",{parentName:"ul"},"We monetize ads in lower tier countries too, but from a revenue perspective,\nour recommendation is to focus your ",(0,o.mdx)("strong",{parentName:"li"},"marketing")," efforts on Tier 1 countries to maximize your revenues."))))}m.isMDXComponent=!0}}]);