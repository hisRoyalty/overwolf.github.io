"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4198],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return i},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),m=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,x=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return t?n.createElement(x,d(d({ref:a},i),{},{components:t})):n.createElement(x,d({ref:a},i))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=x;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},59843:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return s}});var n=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],d={id:"overwolf-campaigns-crossapp",title:"overwolf.campaigns.crossapp API",sidebar_label:"overwolf.campaigns.crossapp"},p=void 0,i={unversionedId:"api/overwolf-campaigns-crossapp",id:"api/overwolf-campaigns-crossapp",title:"overwolf.campaigns.crossapp API",description:"Use this API to allow crossapp-promotions.",source:"@site/pages/docs/api/overwolf-campaigns-crossapp.mdx",sourceDirName:"api",slug:"/api/overwolf-campaigns-crossapp",permalink:"/V2TestFixed/docs/api/overwolf-campaigns-crossapp",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/api/overwolf-campaigns-crossapp.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-campaigns-crossapp",title:"overwolf.campaigns.crossapp API",sidebar_label:"overwolf.campaigns.crossapp"},sidebar:"api",previous:{title:"overwolf.benchmarking",permalink:"/V2TestFixed/docs/api/overwolf-benchmarking"},next:{title:"overwolf.cryptography",permalink:"/V2TestFixed/docs/api/overwolf-cryptography"}},m={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getAvailableActions(callback)",id:"getavailableactionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158",level:4},{value:"set(campaign, callback)",id:"setcampaign-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"reportConversion(conversionInfo, callback)",id:"reportconversionconversioninfo-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"consumeConversions(callback)",id:"consumeconversionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158-3",level:4},{value:"onAvailableActionUpdated",id:"onavailableactionupdated",level:2},{value:"Version added: 0.158",id:"version-added-0158-4",level:4},{value:"GetCrossAppAvailableActionsResult Object",id:"getcrossappavailableactionsresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"CrossAppCampaign Object",id:"crossappcampaign-object",level:2},{value:"Example object data",id:"example-object-data",level:4},{value:"id notes",id:"id-notes",level:4},{value:"expiration notes",id:"expiration-notes",level:4},{value:"data notes",id:"data-notes",level:4},{value:"CrossAppCampaignConversion Object",id:"crossappcampaignconversion-object",level:2},{value:"origin_app_uid notes",id:"origin_app_uid-notes",level:4},{value:"timestamp notes",id:"timestamp-notes",level:4},{value:"GetCrossAppConversionsResult Object",id:"getcrossappconversionsresult-object",level:2}],c={toc:s};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API to allow crossapp-promotions."),(0,l.mdx)("p",null,"One app can promote another app and then get an indication for a successful conversion.",(0,l.mdx)("br",{parentName:"p"}),"\n","For example - an app can promote a video capture and sharing app and receive a notification as soon as the user shares a video from the promoted app."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note that the Achievement Rewards app will only work on the Overwolf Client version 0.156.0.16 and above"),"."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getavailableactionscallback"},"overwolf.campaigns.crossapp.getAvailableActions()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setcampaign-callback"},"overwolf.campaigns.crossapp.set()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#reportconversionconversioninfo-callback"},"overwolf.campaigns.crossapp.reportConversion()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#consumeconversionscallback"},"overwolf.campaigns.crossapp.consumeConversions()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onavailableactionupdated"},"overwolf.campaigns.crossapp.onAvailableActionUpdated"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#crossappcampaign-object"},"overwolf.campaigns.crossapp.CrossAppCampaign")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#crossappcampaignconversion-object"},"overwolf.campaigns.crossapp.CrossAppCampaignConversion")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getcrossappavailableactionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppAvailableActionsResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getcrossappconversionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppConversionsResult")," Object")),(0,l.mdx)("h2",{id:"getavailableactionscallback"},"getAvailableActions(callback)"),(0,l.mdx)("h4",{id:"version-added-0158"},"Version added: 0.158"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Receive all cross-app actions that target the currently running extension.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getcrossappavailableactionsresult-object"},"Result: GetCrossAppAvailableActionsResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns an array of cross-app actions")))),(0,l.mdx)("h2",{id:"setcampaign-callback"},"set(campaign, callback)"),(0,l.mdx)("h4",{id:"version-added-0158-1"},"Version added: 0.158"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Initiate or modify a cross-app campaign action for this extension.")),(0,l.mdx)("p",null,"You may modify an existing action by using the same id parameter. See ",(0,l.mdx)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign.id"),"."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"campaign"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign")," object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,l.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,l.mdx)("p",null,"Returns with the code"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,l.mdx)("h2",{id:"reportconversionconversioninfo-callback"},"reportConversion(conversionInfo, callback)"),(0,l.mdx)("h4",{id:"version-added-0158-2"},"Version added: 0.158"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Submit new conversion for a cross-app campaign.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"conversionInfo"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion")," object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,l.mdx)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,l.mdx)("p",null,"Returns with the code"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,l.mdx)("h2",{id:"consumeconversionscallback"},"consumeConversions(callback)"),(0,l.mdx)("h4",{id:"version-added-0158-3"},"Version added: 0.158"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Consume all pending conversions for this extension. Consumed conversions are deleted.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#getcrossappconversionsresult-object"},"GetCrossAppConversionsResult")," object"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"onavailableactionupdated"},"onAvailableActionUpdated"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Called when an available action has updated (or added), with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign")," Object.")),(0,l.mdx)("h4",{id:"version-added-0158-4"},"Version added: 0.158"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when current extension campaign is updated.")),(0,l.mdx)("h2",{id:"getcrossappavailableactionsresult-object"},"GetCrossAppAvailableActionsResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"actions"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign"),"[]"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true, "actions":[]}\n')),(0,l.mdx)("h2",{id:"crossappcampaign-object"},"CrossAppCampaign Object"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container that represent a shared data parameters.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"An id to identify the campaign (action/conversion). See ",(0,l.mdx)("a",{parentName:"td",href:"#id-notes"},"notes"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"action"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The type of action this cross-app campaign supports.This is a free-text string.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"expiration"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"Expiration date expressed in milliseconds since epoch (Unix Time, UTC). See ",(0,l.mdx)("a",{parentName:"td",href:"#expiration-notes"},"notes"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign. Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"target_apps_uids"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"An array of app UIDs this cross-app campaign targets. Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"data"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Information about the cross-app campaign. See ",(0,l.mdx)("a",{parentName:"td",href:"#data-notes"},"notes"),".")))),(0,l.mdx)("h4",{id:"example-object-data"},"Example object data"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "xxxxxx_bbbbbbDxk", // fake\n    "action": "ar-invite",\n    "expiration": 1735733700000,\n    "target_apps_uids": ["*"],\n    "data": \n    {\n        "name": "ar-campaign", // fake\n        "iconUrl": "overwolf-extension://lkjsndfnnnnd.../campaigns/xxxxxx_bbbbbbDx/icon.svg",\n        "text": "with The Branded Challenge!"\n        "textColor": "E6E6E6"\n        "title": "Win a cool Reward",\n        "titleColor": "#B2A1E5",\n        \n    }\n }\n')),(0,l.mdx)("h4",{id:"id-notes"},"id notes"),(0,l.mdx)("p",null,'"id" should be unique per an extension (two different extensions can use the same id).'),(0,l.mdx)("h4",{id:"expiration-notes"},"expiration notes"),(0,l.mdx)("p",null,"e.g. Date.now() or (new Date()).getTime()."),(0,l.mdx)("h4",{id:"data-notes"},"data notes"),(0,l.mdx)("p",null,"This is a free-form json object that gives more instructions on the required action."),(0,l.mdx)("h2",{id:"crossappcampaignconversion-object"},"CrossAppCampaignConversion Object"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container that represent a cross app campaign conversions.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The ID of the cross-app campaign the conversion targets.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"data"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Conversion data for the specified action.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"origin_app_uid"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"The UID of the app that performed the conversion (the promoted app). Optional. See ",(0,l.mdx)("a",{parentName:"td",href:"#origin_app_uid-notes"},"notes"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"timestamp"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"When the conversion took place.  Optional. See ",(0,l.mdx)("a",{parentName:"td",href:"#timestamp-notes"},"notes"),".")))),(0,l.mdx)("h4",{id:"origin_app_uid-notes"},"origin_app_uid notes"),(0,l.mdx)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,l.mdx)("h4",{id:"timestamp-notes"},"timestamp notes"),(0,l.mdx)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,l.mdx)("h2",{id:"getcrossappconversionsresult-object"},"GetCrossAppConversionsResult Object"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container that represent a cross app conversions.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"conversions"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion"),"[]"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);