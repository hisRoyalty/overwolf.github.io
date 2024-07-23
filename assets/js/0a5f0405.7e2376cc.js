"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3408],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(25773),i=(a(27378),a(35318));const n={id:"user-identity",image:"/img/embed/getting-started.jpg",title:"User Identity",sidebar_position:3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},s=void 0,o={unversionedId:"start/monetize-your-app/user-identity",id:"start/monetize-your-app/user-identity",title:"User Identity",description:"When advertising their products, advertisers often wish to target and track specific audiences,",source:"@site/../pages/start/monetize-your-app/user-identity.mdx",sourceDirName:"start/monetize-your-app",slug:"/start/monetize-your-app/user-identity",permalink:"/start/monetize-your-app/user-identity",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/monetize-your-app/user-identity.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721722144,formattedLastUpdatedAt:"Jul 23, 2024",sidebarPosition:3,frontMatter:{id:"user-identity",image:"/img/embed/getting-started.jpg",title:"User Identity",sidebar_position:3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"start",previous:{title:"Implementation",permalink:"/start/monetize-your-app/subscriptions/implementation"},next:{title:"Experimental",permalink:"/start/monetize-your-app/experimental/"}},l={},p=[{value:"Technical Specification",id:"technical-specification",level:2},{value:"Clearing Email Hashes",id:"clearing-email-hashes",level:3},{value:"Example Implementation (WIP)",id:"example-implementation-wip",level:3},{value:"Further Reading (WIP)",id:"further-reading-wip",level:2},{value:"Third Party Cookie Deprecation",id:"third-party-cookie-deprecation",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),c=d("SkipMe"),h={toc:p};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When advertising their products, advertisers often wish to target and track specific audiences,\nfor whom the Ads are most likely to be effective. To tailor those Ads to specific users,\nas well as track their later performance, ",(0,i.kt)("strong",{parentName:"p"},'"User Identity"')," solutions are required."),(0,i.kt)("p",null,"In the context of Overwolf, and due to ",(0,i.kt)("a",{parentName:"p",href:"#third-party-cookie-deprecation"},"ongoing shifts in the industry"),",\n",(0,i.kt)("strong",{parentName:"p"},'"Hashed Emails"')," are used, letting advertisers identify and target users based on interests,\nwithout ever being exposed to the users' actual identities."),(0,i.kt)("h2",{id:"technical-specification"},"Technical Specification"),(0,i.kt)("p",null,"The process of working with ",(0,i.kt)("strong",{parentName:"p"},"Hashed Emails")," requires several steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtaining a user's Email Address consentually"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"One method to collect the user's email is through a sign-in process using the ",(0,i.kt)("a",{parentName:"p",href:"/api/general/ow-oidc"},"Overwolf OIDC authentication protocol"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://unifiedid.com/docs/getting-started/gs-normalization-encoding#email-address-normalization"},"Normalizing")," the user's Email Address")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hashing the user's Normalized Email Address")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Exposing the hashed Email Address to select User Identity Providers, for use in Ads targeting."))),(0,i.kt)("p",null,"There are two main ways to go about this:"),(0,i.kt)(m,{groupId:"hashed-emails",mdxType:"Tabs"},(0,i.kt)(u,{value:"email-full",label:"Full Email",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"It is possible to pass the user's full Email Address to the Overwolf API.\nThe API will then apply all of the relevant processing to the Email (2-4), and only save\nthe finalized email hashes, for use in Ad targeting."),(0,i.kt)(m,{groupId:"frameworks",mdxType:"Tabs"},(0,i.kt)(u,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},'overwolf.extensions.current.generateUserEmailHashes("test.email@overwolf.com", console.log);\n'))),(0,i.kt)(u,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},'app.overwolf.generateUserEmailHashes("test.email@overwolf.com");\n'))))),(0,i.kt)(u,{value:"email-hash",label:"Email Hash",mdxType:"TabItem"},(0,i.kt)("p",null,"In cases where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The App might not have access to the user's full Email Address, but it does have access to the hash."),(0,i.kt)("li",{parentName:"ul"},'Where it is desirable to minimize the spread of the "raw" Email Address as much as possible.')),(0,i.kt)("p",null,"It is still possible to use this API, by passing the Email hashes directly (while performing steps 1-3 beforehand)."),(0,i.kt)(m,{groupId:"frameworks",mdxType:"Tabs"},(0,i.kt)(u,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},"// Using the example email `test.email@overwolf.com`\noverwolf.extensions.current.setUserEmailHashes({\n  SHA1: '2c44f8a418bbfa88e80e3ce17d56cb30944f7675',\n  SHA256: 'ac43b559f15c2eb262ea8d5d4921f639aaf1cde84bc280bad2e1879d0ded68c2',\n  MD5: '170d78feecf2b8e7b804ba6b45af7ac2'\n}, console.log);\n"))),(0,i.kt)(u,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},"// Using the example email `test.email@overwolf.com`\napp.overwolf.setUserEmailHashes({\n  SHA1: '2c44f8a418bbfa88e80e3ce17d56cb30944f7675',\n  SHA256: 'ac43b559f15c2eb262ea8d5d4921f639aaf1cde84bc280bad2e1879d0ded68c2',\n  MD5: '170d78feecf2b8e7b804ba6b45af7ac2'\n});\n")))))),(0,i.kt)("h3",{id:"clearing-email-hashes"},"Clearing Email Hashes"),(0,i.kt)("p",null,"It is also possible to clear out the Email hashes, in cases where it is needed. To do so, simply set an empty Email Hashes object like so:"),(0,i.kt)(m,{groupId:"frameworks",mdxType:"Tabs"},(0,i.kt)(u,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},"overwolf.extensions.current.setUserEmailHashes({}, console.log);\n"))),(0,i.kt)(u,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},"app.overwolf.setUserEmailHashes({});\n")))),(0,i.kt)("h3",{id:"example-implementation-wip"},"Example Implementation (WIP)"),(0,i.kt)("h2",{id:"further-reading-wip"},"Further Reading (WIP)"),(0,i.kt)("h3",{id:"third-party-cookie-deprecation"},"Third Party Cookie Deprecation"),(0,i.kt)("p",null,"Before ",(0,i.kt)("strong",{parentName:"p"},"Hashed Emails"),", the standard method of tracking user identities for advertising\nrevolved around ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Third-party_cookies"},(0,i.kt)("strong",{parentName:"a"},'"Third Party Cookies"')),"."),(0,i.kt)("p",null,"Google's decision to ",(0,i.kt)("a",{parentName:"p",href:"https://blog.google/products/chrome/privacy-sandbox-tracking-protection/"},"deprecate support for ",(0,i.kt)("strong",{parentName:"a"},"Third Party Cookies")),"\nin Chrome, has significantly impacted this method's ability to be used in a scalable manner,\nresulting in a larger, industry-wide shift towards alternative solutions."),(0,i.kt)("p",null,"Here at Overwolf, we have elected to collaborate with several industry-leading\nUser Identity providers","*",", to facilitate the usage of ",(0,i.kt)("strong",{parentName:"p"},"Hashed Emails"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"*"," Including but not limited to ",(0,i.kt)("a",{parentName:"em",href:"https://liveramp.com/"},"Liveramp"),", ",(0,i.kt)("a",{parentName:"em",href:"https://id5.io/"},"ID5"),", ",(0,i.kt)("a",{parentName:"em",href:"https://www.thetradedesk.com/us/about-us/industry-initiatives/unified-id-solution-2-0"},"TheTradeDesk"),", ",(0,i.kt)("a",{parentName:"em",href:"https://www.advertising.yahooinc.com/our-dsp/identity"},"Yahoo"))),(0,i.kt)("p",null,"Below you can find a ",(0,i.kt)("em",{parentName:"p"},"WIP")," FAQ, which should help answer some of the questions\nyou may still have about the topic:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What is first-party data?"),(0,i.kt)("p",null,"First-party data enables publishers to deliver more personalized and targeted advertising experiences to their visitors. By having a (hashed) identifier, publishers can serve relevant content and ads, thereby enhancing user engagement and increasing ad revenue.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What solution does Overwolf offer and how does it work?"),(0,i.kt)("p",null,"Overwolf offers a solution for handling user identity challenges through its hashed email API. This API simplifies the process of email hashing, transforming email addresses into unrecognizable strings of characters, thereby providing a privacy-compliant method for data collection in the absence of third-party cookies. This enables publishers to access critical user data sets securely, ensuring continuity in data-driven advertising strategies amidst evolving privacy regulations.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What data is collected and passed?"),(0,i.kt)("p",null,"The hashed email API transforms email addresses provided by users into encrypted strings of characters, ensuring privacy and security")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Who is responsible for hashing the email address?"),(0,i.kt)(c,{type:"TODO",mdxType:"SkipMe"}," Add support for tab-group manipulation in links "),(0,i.kt)("p",null,"You have the option to handle encryption independently by following the provided instructions ",(0,i.kt)("a",{parentName:"p",href:"#technical-specification"},"Link"),", or alternatively, you can delegate the task to Overwolf, allowing us to hash the email on your behalf ",(0,i.kt)("a",{parentName:"p",href:"#technical-specification"},"Link"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Who is eligible to use this solution?"),(0,i.kt)("p",null,"This solution is accessible to any application that is part of the Overwolf platform.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What\u2019s in it for me? / How this is going to benefit my app?/ Why you should use it?"),(0,i.kt)("p",null,"Overwolf facilitates the integration of your app with various identity vendors. By establishing connections with these identity providers, we enable you to tap into additional advertising budgets from advertisers who rely on platforms like LiveRamp, ID5, or The Trade Desk for precise targeting and identification. This expanded budget allocation can translate to higher CPMs and fill rates for your app.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Is it necessary to update my Privacy Policy or notify my users?"),(0,i.kt)("p",null,"Yes, it's essential to update your privacy policy to reflect this practice. In the near future, we will be releasing clearer guidelines to help with this process.\nUntil then, for more details, please ",(0,i.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How can I confirm that it's functioning properly?"),(0,i.kt)("p",null,"After implementing our solution, our team will monitor its performance to ensure it operates as intended.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What\u2019s the expected uplift in revenue?"),(0,i.kt)("p",null,"Predicting the potential uplift is challenging as it depends on how quickly advertisers embrace these solutions. It's crucial to recognize that the adoption cycle is gradual, with these solutions aimed at long-term benefits. While there's no assurance of immediate performance gains, they play a role in fostering sustained revenue growth.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What if I don\u2019t currently have a sign-in feature?"),(0,i.kt)("p",null,"If you currently don\u2019t have a sign-in feature, you may want to consider implementing mechanisms to offer that. Email addresses can be valuable for various purposes, including communication with users, personalized marketing, and user authentication. However, it's crucial to ensure that your privacy and security practices comply with privacy regulations and that you are transparent with users about how their email addresses will be used.")))}f.isMDXComponent=!0}}]);