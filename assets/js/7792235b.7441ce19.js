"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[834],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>o,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){return function(t){var a=o(t.components);return n.createElement(e,l({},t,{components:a}))}},o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),u=r,c=s["".concat(i,".").concat(u)]||s[u]||x[u]||l;return a?n.createElement(c,d(d({ref:t},m),{},{components:a})):n.createElement(c,d({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},63626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"subscriptions",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions API",sidebar_custom_props:{overwolf_platform:void 0,electron_platform:void 0}},i=void 0,d={unversionedId:"api/profile/subscriptions/subscriptions",id:"api/profile/subscriptions/subscriptions",title:"overwolf.profile.subscriptions API",description:"Provides functions and events to help with user profile subscription management.",source:"@site/pages/docs/api/profile/subscriptions/subscriptions.mdx",sourceDirName:"api/profile/subscriptions",slug:"/api/profile/subscriptions/",permalink:"/api/profile/subscriptions/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/profile/subscriptions/subscriptions.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"subscriptions",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions API",sidebar_custom_props:{}},sidebar:"api",previous:{title:"overwolf.profile API",permalink:"/api/profile/"},next:{title:"overwolf.profile.subscriptions.inapp API",permalink:"/api/profile/subscriptions/inapp"}},p={},m=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"Sample app",id:"sample-app",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"getActivePlans(callback)",id:"getactiveplanscallback",level:2},{value:"Version added: 0.134",id:"version-added-0134",level:4},{value:"Important Notes",id:"important-notes",level:4},{value:"getDetailedActivePlans(callback)",id:"getdetailedactiveplanscallback",level:2},{value:"Version added: 0.170",id:"version-added-0170",level:4},{value:"onSubscriptionChanged",id:"onsubscriptionchanged",level:2},{value:"Version added: 0.134",id:"version-added-0134-1",level:4},{value:"SubscriptionChangedEvent Object",id:"subscriptionchangedevent-object",level:2},{value:"GetActivePlansResult Object",id:"getactiveplansresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetDetailedActivePlansResult Object",id:"getdetailedactiveplansresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"Plan Object",id:"plan-object",level:2},{value:"SubscriptionState enum",id:"subscriptionstate-enum",level:2},{value:"Subscription states notes",id:"subscription-states-notes",level:4}],s={toc:m};function o(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Provides functions and events to help with user profile subscription management."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Permissions required: profile"))),(0,r.mdx)("admonition",{type:"important"},(0,r.mdx)("p",{parentName:"admonition"},"Please check the ",(0,r.mdx)("a",{parentName:"p",href:"#sample-app"},"subscriptions API sample app")," that demonstrates a primary usage in the API.",(0,r.mdx)("br",{parentName:"p"}),"\n","Please read all the info about app subscriptions ",(0,r.mdx)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"here"),".")),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getactiveplanscallback"},"overwolf.profile.subscriptions.getActivePlans()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getdetailedactiveplanscallback"},"overwolf.profile.subscriptions.getDetailedActivePlans()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onsubscriptionchanged"},"overwolf.profile.subscriptions.onSubscriptionChanged"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#subscriptionchangedevent"},"overwolf.profile.subscriptions.SubscriptionChangedEvent")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getactiveplansresult-object"},"overwolf.profile.subscriptions.GetActivePlansResult")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#plan-object"},"overwolf.profile.subscriptions.Plan")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#subscriptionstate-enum"},"overwolf.profile.SubscriptionState")," Enum")),(0,r.mdx)("h2",{id:"sample-app"},"Sample app"),(0,r.mdx)("p",null,"In our ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"APIs sample apps repository"),", you can find and download a  sample app that demonstrate the usage in the subscriptions and Ads API: "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"subscriptions-sample")," - Demonstrates how to purchase a subscription that removes an ad. ")),(0,r.mdx)("p",null,"It's a great place to get started - All the samples in this repository are built with JS code and demonstrate primary usage in the API."),(0,r.mdx)("h3",{id:"functionality"},"Functionality"),(0,r.mdx)("p",null,"The sample app's functionality is pretty straightforward: You launch it, open the dev console (to see all the debug messages), and hit the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Subscribe")," button to purchase a subscription and remove the add. In addition, you have the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Subscribe in-app")," button that opens the subscribe page inside the app UI, and allow you to purchase a subscription without leaving the app."),(0,r.mdx)("p",null,"You can look at the dev console to see the status of each call (success, failure, etc.)."),(0,r.mdx)("h3",{id:"setting-up"},"Setting up"),(0,r.mdx)("p",null,"Download the app's source code from the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"repository")," as a zip file, and extract it to a new folder on your machine.",(0,r.mdx)("br",{parentName:"p"}),"\n",'Load the app as an "unpacked extension" (Note that to do that you have to whitelist your OW username as a developer).'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages" Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").'),(0,r.mdx)("li",{parentName:"ul"},'Click on "Development options".'),(0,r.mdx)("li",{parentName:"ul"},'In the opened window, click on "Load unpacked extension" and select the extracted ',(0,r.mdx)("inlineCode",{parentName:"li"},"subscriptions-sample")," folder. This will add the manual sample app to your Overwolf dock. "),(0,r.mdx)("li",{parentName:"ul"},'Make sure you are logged in to the OW client. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).'),(0,r.mdx)("li",{parentName:"ul"},"Click on the app's icons in your OW dock to run the apps.")),(0,r.mdx)("h2",{id:"getactiveplanscallback"},"getActivePlans(callback)"),(0,r.mdx)("h4",{id:"version-added-0134"},"Version added: 0.134"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Returns active subscriptions for the calling extension via callback.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(",(0,r.mdx)("a",{parentName:"td",href:"#getactiveplansresult-object"},"Result: GetActivePlansResult"),") => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h4",{id:"important-notes"},"Important Notes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Many users can have the same planID,  while subscriptionID is an individual unique ID for a user's subscription."),(0,r.mdx)("li",{parentName:"ul"},"When calling getActivePlans(), make sure you use your live app and not the sample app, etc., as subscriptions are pairs to a specific app UID."),(0,r.mdx)("li",{parentName:"ul"},"We refresh cache every 2 hours and update it on-demand when the user does an action (cancel, subscribe, extend, etc.)")),(0,r.mdx)("h2",{id:"getdetailedactiveplanscallback"},"getDetailedActivePlans(callback)"),(0,r.mdx)("h4",{id:"version-added-0170"},"Version added: 0.170"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Returns more details about the active subscriptions for the calling extension via callback.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(",(0,r.mdx)("a",{parentName:"td",href:"#getdetailedactiveplansresult-object"},"Result: GetDetailedActivePlansResult"),") => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h2",{id:"onsubscriptionchanged"},"onSubscriptionChanged"),(0,r.mdx)("h4",{id:"version-added-0134-1"},"Version added: 0.134"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when current extension subscription has changed, with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#subscriptionchangedevent-object"},"SubscriptionChangedEvent")," Object")),(0,r.mdx)("h2",{id:"subscriptionchangedevent-object"},"SubscriptionChangedEvent Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"plans"),(0,r.mdx)("td",{parentName:"tr",align:null},"int[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"an array of plan IDs")))),(0,r.mdx)("h2",{id:"getactiveplansresult-object"},"GetActivePlansResult Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"success")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"error")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Reason"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"plans"),(0,r.mdx)("td",{parentName:"tr",align:null},"int[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"an array of plan IDs (only current active plans)")))),(0,r.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "plans": [ 4564, 23455 ], //If there is no active plans, a null is returned.\n  "success": true\n}\n')),(0,r.mdx)("h2",{id:"getdetailedactiveplansresult-object"},"GetDetailedActivePlansResult Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"success")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"error")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Reason"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"plans"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#plan-object"},"Plan"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"an array of active plans")))),(0,r.mdx)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "plans": [\n    {"planId":23, "state":"cancelled", "expiryDate": "1684244095000", "title": "Forget Ads", "description": "Remvoe all ads from the app", "price":"", "periodMonths": "6"},\n    {"planId":25, "state":"active", "expiryDate": "1684244095000", "title": "Forget Ads test", "description": "", "price":"", "periodMonths": "12"}\n  ], //If there is no active plans, a null is returned.\n  "success": true\n}\n')),(0,r.mdx)("h2",{id:"plan-object"},"Plan Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"planId"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"state"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#subscriptionstate-enum"},"SubscriptionState")," Enum"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#subscription-states-notes"},"Subscription states notes"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"expiryDate"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#subscription-states-notes"},"Subscription states notes"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"title"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"description"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"price"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"periodMonths"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"subscriptionstate-enum"},"SubscriptionState enum"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Active"),(0,r.mdx)("td",{parentName:"tr",align:null},'"active"')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Cancelled"),(0,r.mdx)("td",{parentName:"tr",align:null},'"cancelled"')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Revoked"),(0,r.mdx)("td",{parentName:"tr",align:null},'"revoked"')))),(0,r.mdx)("h4",{id:"subscription-states-notes"},"Subscription states notes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If the state is ",(0,r.mdx)("inlineCode",{parentName:"li"},"active"),", the expiryDate means when the next renewal is (i.e., next payment)."),(0,r.mdx)("li",{parentName:"ul"},"If the state is ",(0,r.mdx)("inlineCode",{parentName:"li"},"canceled"),', the expiryDate means that a user canceled the subscription, and it will expire on this date. BTW, we give a few days of grace, so it could be that even when expired, the state will still be "active".  '),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"revoked")," means an immediate cancellation - the date will be expired automatically. The only way to revoke is via the console.overwolf.com interface.")))}o.isMDXComponent=!0}}]);