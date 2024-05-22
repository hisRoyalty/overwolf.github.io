"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5878],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const l={id:"crossapp",image:"/img/embed/api-docs.jpg",title:"overwolf.campaigns.crossapp API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,p={unversionedId:"api/campaigns/crossapp/crossapp",id:"api/campaigns/crossapp/crossapp",title:"overwolf.campaigns.crossapp API",description:"Use this API to allow crossapp-promotions.",source:"@site/../pages/api/campaigns/crossapp/crossapp.mdx",sourceDirName:"api/campaigns/crossapp",slug:"/api/campaigns/crossapp/",permalink:"/api/campaigns/crossapp/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/campaigns/crossapp/crossapp.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716366257,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{id:"crossapp",image:"/img/embed/api-docs.jpg",title:"overwolf.campaigns.crossapp API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.campaigns API",permalink:"/api/campaigns/"},next:{title:"overwolf.cryptography API",permalink:"/api/cryptography/"}},i={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getAvailableActions(callback)",id:"getavailableactionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158",level:4},{value:"set(campaign, callback)",id:"setcampaign-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"reportConversion(conversionInfo, callback)",id:"reportconversionconversioninfo-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"consumeConversions(callback)",id:"consumeconversionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158-3",level:4},{value:"onAvailableActionUpdated",id:"onavailableactionupdated",level:2},{value:"Version added: 0.158",id:"version-added-0158-4",level:4},{value:"GetCrossAppAvailableActionsResult Object",id:"getcrossappavailableactionsresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"CrossAppCampaign Object",id:"crossappcampaign-object",level:2},{value:"Example object data",id:"example-object-data",level:4},{value:"id notes",id:"id-notes",level:4},{value:"expiration notes",id:"expiration-notes",level:4},{value:"data notes",id:"data-notes",level:4},{value:"CrossAppCampaignConversion Object",id:"crossappcampaignconversion-object",level:2},{value:"origin_app_uid notes",id:"origin_app_uid-notes",level:4},{value:"timestamp notes",id:"timestamp-notes",level:4},{value:"GetCrossAppConversionsResult Object",id:"getcrossappconversionsresult-object",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to allow crossapp-promotions."),(0,r.kt)("p",null,"One app can promote another app and then get an indication for a successful conversion.",(0,r.kt)("br",{parentName:"p"}),"\n","For example - an app can promote a video capture and sharing app and receive a notification as soon as the user shares a video from the promoted app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that the Achievement Rewards app will only work on the Overwolf Client version 0.156.0.16 and above"),"."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getavailableactionscallback"},"overwolf.campaigns.crossapp.getAvailableActions()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setcampaign-callback"},"overwolf.campaigns.crossapp.set()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reportconversionconversioninfo-callback"},"overwolf.campaigns.crossapp.reportConversion()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consumeconversionscallback"},"overwolf.campaigns.crossapp.consumeConversions()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onavailableactionupdated"},"overwolf.campaigns.crossapp.onAvailableActionUpdated"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#crossappcampaign-object"},"overwolf.campaigns.crossapp.CrossAppCampaign")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#crossappcampaignconversion-object"},"overwolf.campaigns.crossapp.CrossAppCampaignConversion")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getcrossappavailableactionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppAvailableActionsResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getcrossappconversionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppConversionsResult")," Object")),(0,r.kt)("h2",{id:"getavailableactionscallback"},"getAvailableActions(callback)"),(0,r.kt)("h4",{id:"version-added-0158"},"Version added: 0.158"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receive all cross-app actions that target the currently running extension.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getcrossappavailableactionsresult-object"},"Result: GetCrossAppAvailableActionsResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns an array of cross-app actions")))),(0,r.kt)("h2",{id:"setcampaign-callback"},"set(campaign, callback)"),(0,r.kt)("h4",{id:"version-added-0158-1"},"Version added: 0.158"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initiate or modify a cross-app campaign action for this extension.")),(0,r.kt)("p",null,"You may modify an existing action by using the same id parameter. See ",(0,r.kt)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign.id"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign")," object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,r.kt)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,r.kt)("p",null,"Returns with the code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,r.kt)("h2",{id:"reportconversionconversioninfo-callback"},"reportConversion(conversionInfo, callback)"),(0,r.kt)("h4",{id:"version-added-0158-2"},"Version added: 0.158"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Submit new conversion for a cross-app campaign.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conversionInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion")," object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,r.kt)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,r.kt)("p",null,"Returns with the code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,r.kt)("h2",{id:"consumeconversionscallback"},"consumeConversions(callback)"),(0,r.kt)("h4",{id:"version-added-0158-3"},"Version added: 0.158"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Consume all pending conversions for this extension. Consumed conversions are deleted.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getcrossappconversionsresult-object"},"GetCrossAppConversionsResult")," object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"onavailableactionupdated"},"onAvailableActionUpdated"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Called when an available action has updated (or added), with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign")," Object.")),(0,r.kt)("h4",{id:"version-added-0158-4"},"Version added: 0.158"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when current extension campaign is updated.")),(0,r.kt)("h2",{id:"getcrossappavailableactionsresult-object"},"GetCrossAppAvailableActionsResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success":true, "actions":[]}\n')),(0,r.kt)("h2",{id:"crossappcampaign-object"},"CrossAppCampaign Object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container that represent a shared data parameters.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An id to identify the campaign (action/conversion). See ",(0,r.kt)("a",{parentName:"td",href:"#id-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of action this cross-app campaign supports.This is a free-text string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date expressed in milliseconds since epoch (Unix Time, UTC). See ",(0,r.kt)("a",{parentName:"td",href:"#expiration-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign. Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_apps_uids"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of app UIDs this cross-app campaign targets. Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the cross-app campaign. See ",(0,r.kt)("a",{parentName:"td",href:"#data-notes"},"notes"),".")))),(0,r.kt)("h4",{id:"example-object-data"},"Example object data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "xxxxxx_bbbbbbDxk", // fake\n    "action": "ar-invite",\n    "expiration": 1735733700000,\n    "target_apps_uids": ["*"],\n    "data": \n    {\n        "name": "ar-campaign", // fake\n        "iconUrl": "overwolf-extension://lkjsndfnnnnd.../campaigns/xxxxxx_bbbbbbDx/icon.svg",\n        "text": "with The Branded Challenge!"\n        "textColor": "E6E6E6"\n        "title": "Win a cool Reward",\n        "titleColor": "#B2A1E5",\n        \n    }\n }\n')),(0,r.kt)("h4",{id:"id-notes"},"id notes"),(0,r.kt)("p",null,'"id" should be unique per an extension (two different extensions can use the same id).'),(0,r.kt)("h4",{id:"expiration-notes"},"expiration notes"),(0,r.kt)("p",null,"e.g. Date.now() or (new Date()).getTime()."),(0,r.kt)("h4",{id:"data-notes"},"data notes"),(0,r.kt)("p",null,"This is a free-form json object that gives more instructions on the required action."),(0,r.kt)("h2",{id:"crossappcampaignconversion-object"},"CrossAppCampaignConversion Object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container that represent a cross app campaign conversions.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the cross-app campaign the conversion targets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Conversion data for the specified action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"origin_app_uid"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The UID of the app that performed the conversion (the promoted app). Optional. See ",(0,r.kt)("a",{parentName:"td",href:"#origin_app_uid-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"When the conversion took place.  Optional. See ",(0,r.kt)("a",{parentName:"td",href:"#timestamp-notes"},"notes"),".")))),(0,r.kt)("h4",{id:"origin_app_uid-notes"},"origin_app_uid notes"),(0,r.kt)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,r.kt)("h4",{id:"timestamp-notes"},"timestamp notes"),(0,r.kt)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,r.kt)("h2",{id:"getcrossappconversionsresult-object"},"GetCrossAppConversionsResult Object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container that represent a cross app conversions.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conversions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);