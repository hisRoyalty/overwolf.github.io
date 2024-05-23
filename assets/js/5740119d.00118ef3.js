"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5417],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var r=n(25773),a=(n(27378),n(35318));const s={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Request Type: 'GET'\nHostname: 'subscriptions-api.overwolf.com'\nPath: '/checkout/${STORE_ID}/${PACKAGE_ID}'\nSearch Params:\n  extensionId: string\n  userId: string\n  discordId (required when using discord actions): string\n\nResult: 'Checkout Webpage'\n")))}o.isMDXComponent=!0;const i={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Request Type: 'GET'\nHostname: 'subscriptions-api.overwolf.com'\nPath: '/subscriptions/${STORE_ID}'\nSearch Params:\n  extensionId: string\nHeaders:\n  Authorization: 'Bearer ${token}'\n\nResult: 'Array of:'\n  userId: 'string'\n  packageId: 'number'\n")))}p.isMDXComponent=!0;const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Request Type: 'GET'\nHostname: 'subscriptions-api.overwolf.com'\nPath: '/packages/${STORE_ID}'\nSearch Params:\n  extensionId: string\n\nResult: 'Array of:'\n  base_price: 'number'\n  category: \n    id: 'number'\n    name: 'string'\n  created_at: 'string'\n  description: 'string'\n  disable_gifting: 'boolean'\n  disable_quantity: 'boolean'\n  discount: 'number'\n  expiration_date?: 'string'\n  id: 'number'\n  image?: 'string'\n  name: 'string'\n  sales_tax: 'number'\n  total_price: 'number'\n  type: 'subscription | single'\n  updated_at: 'string'\n")))}c.isMDXComponent=!0;const u={id:"subscriptions-api",image:"/img/embed/api-docs.jpg",title:"Subscriptions API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},d=void 0,m={unversionedId:"api/general/subscriptions-api/subscriptions-api",id:"api/general/subscriptions-api/subscriptions-api",title:"Subscriptions API",description:"The Overwolf Subscriptions API relies on a combination of endpoints and deeplinks, detailed in this page.",source:"@site/../pages/api/general/subscriptions-api/subscriptions-api.mdx",sourceDirName:"api/general/subscriptions-api",slug:"/api/general/subscriptions-api/",permalink:"/api/general/subscriptions-api/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/general/subscriptions-api/subscriptions-api.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1716462870,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{id:"subscriptions-api",image:"/img/embed/api-docs.jpg",title:"Subscriptions API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Overwolf OIDC",permalink:"/api/general/ow-oidc/"},next:{title:"Live Game Data (GEP)",permalink:"/api/live-game-data/"}},b={},k=[{value:"Endpoints",id:"endpoints",level:2},{value:"Checkout",id:"checkout",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Packages",id:"packages",level:3},{value:"Deeplinks",id:"deeplinks",level:2},{value:"Success",id:"success",level:3},{value:"Cancelled",id:"cancelled",level:3}],f={toc:k};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/start/monetize-your-app/subscriptions"},"Overwolf Subscriptions API")," relies on a combination of endpoints and deeplinks, detailed in this page."),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"The following is a list of endpoints exposed by the Overwolf Subscriptions API, to handle the most common operations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For live examples of the different endpoints, please check out the ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/overwolf/tebex-subs-sample"},"Tebex Subs Sample App"),".")),(0,a.kt)("h3",{id:"checkout"},"Checkout"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generates a checkout page for a specific subscription plan (package).")),(0,a.kt)(o,{mdxType:"Checkout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This request redirects directly to the page, and as such, should be opened as a link in the users' browser.")),(0,a.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns a list of all active subscription plans (packages) for this App for the relevant user.")),(0,a.kt)(p,{mdxType:"Subscriptions"}),(0,a.kt)("h3",{id:"packages"},"Packages"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns a list of all available subscription plans (packages) for this App.")),(0,a.kt)(c,{mdxType:"Packages"}),(0,a.kt)("h2",{id:"deeplinks"},"Deeplinks"),(0,a.kt)("p",null,"The following is a list of deeplinks used by the Overwolf Subscriptions API, to handle calls back to the application."),(0,a.kt)("h3",{id:"success"},"Success"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Invoked when a user successfuly finishes the checkout flow.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"`${YOUR_DEEPLINK_SCHEME}://?result=success`\n")),(0,a.kt)("h3",{id:"cancelled"},"Cancelled"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Invoked when a user cancelled the checkout flow explicitly (does not fire if they closed the tab).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"`${YOUR_DEEPLINK_SCHEME}://?result=cancel`\n")))}g.isMDXComponent=!0}}]);