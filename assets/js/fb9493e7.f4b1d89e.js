"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[8187],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,y=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(y,p(p({ref:t},d),{},{components:a})):r.createElement(y,p({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:n,p[1]=c;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=a(25773),n=(a(27378),a(35318));const l={id:"cryptography",image:"/img/embed/api-docs.jpg",title:"overwolf.cryptography API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},p=void 0,c={unversionedId:"api/cryptography/cryptography",id:"api/cryptography/cryptography",title:"overwolf.cryptography API",description:"Use this API to encrypt and decrypt ciphertext and secure app data and variables. e.g., localStorage that stores auth-tokens, etc.",source:"@site/../pages/api/cryptography/cryptography.mdx",sourceDirName:"api/cryptography",slug:"/api/cryptography/",permalink:"/api/cryptography/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/cryptography/cryptography.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1721828711,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"cryptography",image:"/img/embed/api-docs.jpg",title:"overwolf.cryptography API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.campaigns.crossapp API",permalink:"/api/campaigns/crossapp/"},next:{title:"overwolf.extensions API",permalink:"/api/extensions/"}},o={},i=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"encryptForCurrentUser(plaintext, callback))",id:"encryptforcurrentuserplaintext-callback",level:2},{value:"Version added: 0.160",id:"version-added-0160",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"decryptForCurrentUser(ciphertext, callback))",id:"decryptforcurrentuserciphertext-callback",level:2},{value:"Version added: 0.160",id:"version-added-0160-1",level:4},{value:"Usage Example",id:"usage-example-1",level:4},{value:"EncryptedDataResult Object",id:"encrypteddataresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"Example data: Failure",id:"example-data-failure",level:4},{value:"DecryptedDataResult Object",id:"decrypteddataresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"Example data: Failure",id:"example-data-failure-1",level:4}],d={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to encrypt and decrypt ciphertext and secure app data and variables. e.g., localStorage that stores auth-tokens, etc."),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#encryptforcurrentuserplaintext-callback"},"overwolf.cryptography.encryptForCurrentUser()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#decryptforcurrentuserciphertext-callback"},"overwolf.cryptography.decryptForCurrentUser()"))),(0,n.kt)("h2",{id:"types-reference"},"Types Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#encrypteddataresult-object"},"overwolf.cryptography.EncryptedDataResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#decrypteddataresult-object"},"overwolf.cryptography.DecryptedDataResult")," Object")),(0,n.kt)("h2",{id:"encryptforcurrentuserplaintext-callback"},"encryptForCurrentUser(plaintext, callback))"),(0,n.kt)("h4",{id:"version-added-0160"},"Version added: 0.160"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns encrypted ciphertext.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note that the generated hash is unique per Windows current user.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plaintext"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The plain text to encrypt")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#encrypteddataresult-object"},"(Result:EncryptedDataResult)")," => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns info about the currently running game")))),(0,n.kt)("h4",{id:"usage-example"},"Usage Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"overwolf.cryptography.encryptForCurrentUser('test123',console.log)\n")),(0,n.kt)("h2",{id:"decryptforcurrentuserciphertext-callback"},"decryptForCurrentUser(ciphertext, callback))"),(0,n.kt)("h4",{id:"version-added-0160-1"},"Version added: 0.160"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns decrypted plaintext.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ciphertext"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The cipher text to decryptd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#decrypteddataresult-object"},"(Result:DecryptedDataResult)")," => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns info about the currently running game")))),(0,n.kt)("h4",{id:"usage-example-1"},"Usage Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"overwolf.cryptography.decryptForCurrentUser(`${paste hashed string here}`,console.log)\n")),(0,n.kt)("h2",{id:"encrypteddataresult-object"},"EncryptedDataResult Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ciphertext"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The encrypted ciphertext")))),(0,n.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success":true,\n   "ciphertext": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAALUGXOFJUAE+tTxx0B2\u2026FNYoUDbjKgdMDGuYhZbyfdGBkmGoaIxZk4qybUWBpu0iX4xM="\n}\n')),(0,n.kt)("h4",{id:"example-data-failure"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"ciphertext": null, "success": false, "error": "Failed to encrypt"}\n')),(0,n.kt)("h2",{id:"decrypteddataresult-object"},"DecryptedDataResult Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plaintext"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The decrypted plaintext")))),(0,n.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"plaintext": "test123", "success": true}\n')),(0,n.kt)("h4",{id:"example-data-failure-1"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"plaintext": null, "success": false, "error": "Failed to decrypt"}\n')))}u.isMDXComponent=!0}}]);