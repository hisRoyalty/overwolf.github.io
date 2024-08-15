"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7969],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(25773),r=(a(27378),a(35318));const o={id:"create-download-link",image:"/img/embed/api-best-practices.jpg",title:"Creating an App Download Link with referral ID",sidebar_label:"Download Link with referral ID",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"topics/best-practices/create-download-link",id:"topics/best-practices/create-download-link",title:"Creating an App Download Link with referral ID",description:"The Overwolf API allows you to include some info in the OW app store\u2019s download link. You can use this feature for different purposes, however, the most common one is to add a unique referral ID to track your download link. This ID allows you to track installations and know exactly which users came from which channel.",source:"@site/../pages/topics/best-practices/create-download-link.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/create-download-link",permalink:"/topics/best-practices/create-download-link",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/create-download-link.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1723726875,formattedLastUpdatedAt:"Aug 15, 2024",frontMatter:{id:"create-download-link",image:"/img/embed/api-best-practices.jpg",title:"Creating an App Download Link with referral ID",sidebar_label:"Download Link with referral ID",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Marketing Communications",permalink:"/topics/best-practices/communication-guidelines"},next:{title:"Data persistence",permalink:"/topics/best-practices/data-persistence"}},s={},c=[{value:"Getting a Download Link",id:"getting-a-download-link",level:2},{value:"Add Referral ID to the Download Link",id:"add-referral-id-to-the-download-link",level:2},{value:"Extract referral data using API",id:"extract-referral-data-using-api",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Overwolf API allows you to include some info in the OW app store\u2019s download link. You can use this feature for different purposes, however, the most common one is to add a unique referral ID to track your download link. This ID allows you to track installations and know exactly which users came from which channel."),(0,r.kt)("p",null,"You can also allow your users to create shareable download links for their friends, and track how many friends each user has recruited for reward purposes."),(0,r.kt)("h2",{id:"getting-a-download-link"},"Getting a Download Link"),(0,r.kt)("p",null,"The download link format for all apps bundled with the Overwolf client installation looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"https://download.overwolf.com/install/Download?Name=name&ExtensionId=123123123123&Channel=website\n")),(0,r.kt)("p",null,"You can get your personalized download link by copying the link\u2019s address from the Download button in the store:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:a(70452).Z,width:"773",height:"591"})),(0,r.kt)("h2",{id:"add-referral-id-to-the-download-link"},"Add Referral ID to the Download Link"),(0,r.kt)("p",null,"Once you have the base download link, you can concatenate your referral ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"utm_campaign")," parameter, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"https://download.overwolf.com/install/Download?Name=BUFF&ExtensionId=caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl&Channel=website&utm_campaign=[REFERRAL_ID]\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"utm_campaign data will be saved to the OW database for new and existing OW installations. If the user that uses the download link already has the OW client installed, the link will update the app if necessary, and save the data in ",(0,r.kt)("inlineCode",{parentName:"li"},"utm_campaign")," to the OW Database."),(0,r.kt)("li",{parentName:"ul"},"For security and privacy reasons, the app sees only its context. Meaning, Your app will not be able to read other app's UTM params. You will get empty strings."))),(0,r.kt)("h2",{id:"extract-referral-data-using-api"},"Extract referral data using API"),(0,r.kt)("p",null,"In order to extract the data, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/api/profile#getcurrentusercallback"},"overwolf.profile.getCurrentUser()")," API."),(0,r.kt)("p",null,"This function\u2019s callback will return with an installParams object, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"utm_campaign")," for this client:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:a(2774).Z,width:"483",height:"456"})),(0,r.kt)("p",null,"Once data is extracted, you can identify what the origin (the source) of the current installation is, and do whatever you like with it. For example, send it back to your servers or analysis software."))}p.isMDXComponent=!0},70452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/appstore-right-click-97c99e68cb3a974e7e7ca0306ca2dfc8.png"},2774:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-98642411973894b1ad5e87f2e95c60ab.png"}}]);