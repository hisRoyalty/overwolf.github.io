"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9970],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const l={id:"profile",image:"/img/embed/api-docs.jpg",title:"overwolf.profile API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},i=void 0,o={unversionedId:"api/profile/profile",id:"api/profile/profile",title:"overwolf.profile API",description:"Use this API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)",source:"@site/../pages/api/profile/profile.mdx",sourceDirName:"api/profile",slug:"/api/profile/",permalink:"/api/profile/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/profile/profile.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716876849,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"profile",image:"/img/embed/api-docs.jpg",title:"overwolf.profile API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.os.tray API",permalink:"/api/os/tray"},next:{title:"overwolf.profile.subscriptions API",permalink:"/api/profile/subscriptions/"}},s={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getCurrentUser(callback)",id:"getcurrentusercallback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"refreshUserProfile(callback)",id:"refreshuserprofilecallback",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"generateUserSessionToken(callback)",id:"generateusersessiontokencallback",level:2},{value:"Version added: 0.219",id:"version-added-0219",level:4},{value:"Generated Token note",id:"generated-token-note",level:3},{value:"Token authentication",id:"token-authentication",level:3},{value:"Verify token integrity",id:"verify-token-integrity",level:4},{value:"Get user profile via token",id:"get-user-profile-via-token",level:4},{value:"openLoginDialog()",id:"openlogindialog",level:2},{value:"Version added: 0.80",id:"version-added-080",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"GetCurrentUserResult Object",id:"getcurrentuserresult-object",level:2},{value:"Note: <em>userId</em> is not a unique identifier",id:"note-userid-is-not-a-unique-identifier",level:4},{value:"Example data: Success",id:"example-data-success",level:4},{value:"Example data: Failure",id:"example-data-failure",level:4},{value:"GenerateUserSessionTokenResult Object",id:"generateusersessiontokenresult-object",level:2},{value:"LoginStateChangedEvent Object",id:"loginstatechangedevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"ConnectionState enum",id:"connectionstate-enum",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("Tabs"),m=u("TabItem"),k={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Permissions required: profile")),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getcurrentusercallback"},"overwolf.profile.getCurrentUser()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#refreshuserprofilecallback"},"overwolf.profile.refreshUserProfile()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generateusersessiontokencallback"},"overwolf.profile.generateUserSessionToken()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#openlogindialog"},"overwolf.profile.openLoginDialog()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onloginstatechanged"},"overwolf.profile.onLoginStateChanged"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getcurrentuserresult-object"},"overwolf.profile.GetCurrentUserResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generateusersessiontokenresult-object"},"overwolf.profile.GenerateUserSessionTokenResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#loginstatechangedevent-object"},"overwolf.profile.LoginStateChangedEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connectionstate-enum"},"overwolf.profile.ConnectionState")," Enum")),(0,r.kt)("h2",{id:"getcurrentusercallback"},"getCurrentUser(callback)"),(0,r.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Calls the given callback with the currently logged-in Overwolf user.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getcurrentuserresult-object"},"Result: GetCurrentUserResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A function called with the current user, or an error.")))),(0,r.kt)("h2",{id:"refreshuserprofilecallback"},"refreshUserProfile(callback)"),(0,r.kt)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fetches user profile from server, then invokes the callback with the currently logged-in Overwolf user.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getcurrentuserresult-object"},"Result: GetCurrentUserResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A function called with the current user, or an error.")))),(0,r.kt)("h2",{id:"generateusersessiontokencallback"},"generateUserSessionToken(callback)"),(0,r.kt)("h4",{id:"version-added-0219"},"Version added: 0.219"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Generates a short lived authentication token for ",(0,r.kt)("strong",{parentName:"p"},"the currently logged-in user"),".")),(0,r.kt)("admonition",{title:"Must be logged in and connected!",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This method will fail if the local user is not logged in to Overwolf!",(0,r.kt)("br",{parentName:"p"}),"\n","This method will also fail if the Overwolf servers cannot be reached!")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#generateusersessiontokenresult-object"},"Result: GenerateUserSessionTokenResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A function called with the ",(0,r.kt)("a",{parentName:"td",href:"#generated-token-note"},"generated token"),", or an error.")))),(0,r.kt)("h3",{id:"generated-token-note"},"Generated Token note"),(0,r.kt)("p",null,"This method generates and returns a ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," token, confirming the currently logged-in Overwolf client user.",(0,r.kt)("br",{parentName:"p"}),"\n","This token can then be tested against the ",(0,r.kt)("a",{parentName:"p",href:"#verify-token-integrity"},"relevant endpoint"),", to confirm the authenticity of this session, for use in external applications."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"15 minutes from the moment of creation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload.sub"),(0,r.kt)("td",{parentName:"tr",align:null},"Username for the Overwolf account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload.exp"),(0,r.kt)("td",{parentName:"tr",align:null},"Token expiry date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload.iat"),(0,r.kt)("td",{parentName:"tr",align:null},"Token issue date")))),(0,r.kt)("p",null,"You can view more details about the contents of a token (as well as information about JWT tokens in general) ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example token generation"',title:'"Example',token:!0,'generation"':!0},'overwolf.profile.generateUserSessionToken(console.log);\n\n// Example result:\n{\n  success: true,\n  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvZGVkLml0a2luIiwiZXhwIjoxNjc2MzY5NjUyLCJpYXQiOjE2NzYzNjg3NTJ9.YdWqtJkFAC6-89OJ9TzU-kLHc-qWalkornFkbeEz9pg"\n}\n\n// Which also decodes to:\n{\n  "sub": "oded.itkin", // Username for the Overwolf account\n  "exp": 1676369652, // Token expiry date\n  "iat": 1676368752 // Token issue date\n}\n')),(0,r.kt)("admonition",{title:"Token Expiry",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The generated token expires after 15 minutes from the moment of its creation. ",(0,r.kt)("strong",{parentName:"p"},"As such, it is heavily recommended to only use this token for an initial authentication, that would then generate your own, long time token for your app's usage."))),(0,r.kt)("h3",{id:"token-authentication"},"Token authentication"),(0,r.kt)("h4",{id:"verify-token-integrity"},"Verify token integrity"),(0,r.kt)("p",null,"The token's authenticity can be verified via the following ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," https request:"),(0,r.kt)(d,{groupId:"https-format",mdxType:"Tabs"},(0,r.kt)(m,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},"curl -XGET -H 'Authorization: Bearer ${temp-token}' 'https://accounts.overwolf.com/tokens/short-lived/verify?extensionId=${extension-id}'\n"))),(0,r.kt)(m,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example Javascript request"',title:'"Example',Javascript:!0,'request"':!0},"// Loosely based on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options\nconst response = await fetch(`https://accounts.overwolf.com/tokens/short-lived/verify?extensionId=${extension-id}`, {\n  method: 'GET',\n  headers: {\n    'Authorization': `Bearer ${temp-token}`\n  },\n});\n")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Payload"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The token is valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},'{ message: "Unauthorized" }'),(0,r.kt)("td",{parentName:"tr",align:null},"The token is invalid")))),(0,r.kt)("h4",{id:"get-user-profile-via-token"},"Get user profile via token"),(0,r.kt)("p",null,"The token can be used to obtain certain details of the user's profile, via the following ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," https request:"),(0,r.kt)(d,{groupId:"https-format",mdxType:"Tabs"},(0,r.kt)(m,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},"curl -XGET -H 'Authorization: Bearer ${temp-token}' 'https://accounts.overwolf.com/tokens/short-lived/users/profile?extensionId=${extension-id}'\n"))),(0,r.kt)(m,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example Javascript request"',title:'"Example',Javascript:!0,'request"':!0},"// Loosely based on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options\nconst response = await fetch(`https://accounts.overwolf.com/tokens/short-lived/users/profile?extensionId=${extension-id}`, {\n  method: 'GET',\n  headers: {\n    'Authorization': `Bearer ${temp-token}`\n  },\n});\n")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Payload"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"{ ",(0,r.kt)("br",null)," avatar: ImageURL ",(0,r.kt)("br",null)," nickname: string ",(0,r.kt)("br",null)," username: string ",(0,r.kt)("br",null)," }"),(0,r.kt)("td",{parentName:"tr",align:null},"The profile of the user associated with the token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},'{ message: "Unauthorized" }'),(0,r.kt)("td",{parentName:"tr",align:null},"Something went wrong")))),(0,r.kt)("h2",{id:"openlogindialog"},"openLoginDialog()"),(0,r.kt)("h4",{id:"version-added-080"},"Version added: 0.80"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,r.kt)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,r.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a user logged in or logged out, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object")),(0,r.kt)("h2",{id:"getcurrentuserresult-object"},"GetCurrentUserResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unique identifier. null for not logged-in users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"#note-userid-is-not-a-unique-identifier"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"machineId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partnerId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"installParams"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"/topics/best-practices/create-download-link#extract-referral-data-using-api"},"Creating Download Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"installerExtension"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"anonymous unique user id. null for not logged-in users")))),(0,r.kt)("h4",{id:"note-userid-is-not-a-unique-identifier"},"Note: ",(0,r.kt)("em",{parentName:"h4"},"userId")," is not a unique identifier"),(0,r.kt)("p",null,"The term ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," might be a bit misleading: it's not a unique identifier for an Overwolf user.\nThe userId is unique for each OW client installation on the current machine, so it's more like \"clientID\".",(0,r.kt)("br",{parentName:"p"}),"\n","We use it to identify not logged-in users on the machine."),(0,r.kt)("p",null,"On a Windows computer, with multiple users - there might be multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"userIds")," but a single ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineId"),";"),(0,r.kt)("p",null,"To uniquely identify logged-in users, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," (this field will be null for not logged-in user).  "),(0,r.kt)("p",null,"Each user has to pick a unique OW username upon registering. Even If he logged in through Google, Discord, etc. - OW automatically generate a unique user name for him.",(0,r.kt)("br",{parentName:"p"}),"\n","So at the bottom line, you can always count on the username to be a unique identifier for logged-in users. "),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success": true,\n   "error": "",\n   "username":"itaygl",\n   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",\n   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",\n   "partnerId":0,\n   "channel":"website",\n   "displayName": "itay gl", \n   "avatar": "https://lh5.googleusercontent.com/-vvsdlz7W2oM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reB9VADjY3FzaTDSA7-Adrsny38xg/mo/photo.jpg?sz=50",\n   "installParams":  "{source: "", medium: "", campaign: "", term: "", content: """,\n}\n')),(0,r.kt)("h4",{id:"example-data-failure"},"Example data: Failure"),(0,r.kt)("p",null,"If the user is not logged-in, the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", but you\u2019ll still get the rest of the available data (userId, machineId, etc.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "success": false,\n   "error": "Not signed in",\n   "status":"error",\n    "reason":"Not signed in",\n   "username":null,\n   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",\n   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",\n   "partnerId":0,\n   "channel":"website",\n   "parameters":{"no-ftue":null},\n   "installParams":null,\n   "avatar":""\n}\n')),(0,r.kt)("h2",{id:"generateusersessiontokenresult-object"},"GenerateUserSessionTokenResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"short lived authentication token")))),(0,r.kt)("h2",{id:"loginstatechangedevent-object"},"LoginStateChangedEvent Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectionState"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#connectionstate-enum"},"ConnectionState")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "connectionState": "Online",  // can be "Online", "Offline", "Connecting", etc.\n    "username": "..."   // when the status is other than "Offline", will be the currently connected username.\n}\n')),(0,r.kt)("h2",{id:"connectionstate-enum"},"ConnectionState enum"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offline"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connecting"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Online"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disconnecting"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);