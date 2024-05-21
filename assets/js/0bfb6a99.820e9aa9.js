"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4096],{35318:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39587:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(25773),r=(a(27378),a(35318));const o={id:"notifications",image:"/img/embed/api-docs.jpg",title:"overwolf.notifications API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},i=void 0,l={unversionedId:"api/notifications/notifications",id:"api/notifications/notifications",title:"overwolf.notifications API",description:"Use this API to send toast notifications from your OW app.",source:"@site/../pages/api/notifications/notifications.mdx",sourceDirName:"api/notifications",slug:"/api/notifications/",permalink:"/api/notifications/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/notifications/notifications.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716282814,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"notifications",image:"/img/embed/api-docs.jpg",title:"overwolf.notifications API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.media.videos API",permalink:"/api/media/videos"},next:{title:"overwolf.os API",permalink:"/api/os/"}},p={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"showToastNotification(args, callback)",id:"showtoastnotificationargs-callback",level:2},{value:"Version added: 0.176",id:"version-added-0176",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"ToastNotificationParams Object",id:"toastnotificationparams-object",level:2},{value:"header notes",id:"header-notes",level:4},{value:"texts notes",id:"texts-notes",level:4},{value:"logoOverride notes",id:"logooverride-notes",level:4},{value:"heroImage notes",id:"heroimage-notes",level:4},{value:"inlineImage notes",id:"inlineimage-notes",level:4},{value:"attribution notes",id:"attribution-notes",level:4},{value:"buttons notes",id:"buttons-notes",level:4},{value:"ToastNotificationButton Object",id:"toastnotificationbutton-object",level:2},{value:"LogoOverride Object",id:"logooverride-object",level:2},{value:"ShowToastNotificationResult Object",id:"showtoastnotificationresult-object",level:2},{value:"AppLogoCrop enum",id:"applogocrop-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-1",level:4},{value:"onToastInteraction",id:"ontoastinteraction",level:2},{value:"Version added: 0.176",id:"version-added-0176-2",level:4},{value:"ToastNotificationEvent  Object",id:"toastnotificationevent--object",level:2},{value:"ToatsEventType enum",id:"toatseventtype-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-3",level:4},{value:"ToastEventError enum",id:"toasteventerror-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-4",level:4}],d={toc:s};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to send toast notifications from your OW app."),(0,r.kt)("p",null,'Toast are interactive OS notifications that lets you create flexible "reminders" with text, images, and buttons/inputs.\nToast notifications are a combination of some data properties like header, visual (hero image, inline image, app logo) and the toast content.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that currently using toast on an unpacked app does NOT work.")),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#showtoastnotificationargs-callback"},"overwolf.notifications.showToastNotification()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ontoastinteraction"},"overwolf.notifications.onToastInteraction"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toastnotificationparams-object"},"ToastNotificationParams")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#showtoastnotificationresult-object"},"ShowToastNotificationResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#logooverride-object"},"LogoOverride")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toastnotificationbutton-object"},"ToastNotificationButton")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toastnotificationevent-object"},"ToastNotificationEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#applogocrop-enum"},"overwolf.notifications.enums.AppLogoCrop")," enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toatseventtype-enum"},"overwolf.notifications.enums.ToastEventType")," enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toasteventerror-enum"},"overwolf.notifications.enums.ToastEventError")," enum")),(0,r.kt)("h2",{id:"showtoastnotificationargs-callback"},"showToastNotification(args, callback)"),(0,r.kt)("h4",{id:"version-added-0176"},"Version added: 0.176"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Show Windows toast notification.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#toastnotificationparams-object"},"ToastNotificationParams")," object"),(0,r.kt)("td",{parentName:"tr",align:null},"Toast notification params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#showtoastnotificationresult-object"},"(Result: ShowToastNotificationResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h4",{id:"usage-example"},"Usage example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Replace {EXTENSION-ID} with your extension\'s id, and the image paths with paths to the actual images you wish to display\noverwolf.notifications.showToastNotification({\n  header: "Header",\n  texts: ["text1", "text2", "text3"],\n  logoOverride: {\n    url: "overwolf-extension://{EXTENSION-ID}/84x84.png",\n    cropType: overwolf.notifications.enums.AppLogoCrop.Default\n  },\n  heroImage: "overwolf-extension://{EXTENSION-ID}/logo_364x180.png",\n  inlineImage: "overwolf-extension://{EXTENSION-ID}/logo_364x180.png",\n  attribution: "sent from an app",\n  buttons: [\n    {\n      id: "button_1",\n      text: "button 1"\n    },\n    {\n      id: "button_2",\n      text: "button 2"\n    }\n  ]\n}, console.log);\n')),(0,r.kt)("p",null,"The above line of code triggers this notification:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(39061).Z},"notification-example")),(0,r.kt)("h2",{id:"toastnotificationparams-object"},"ToastNotificationParams Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#header-notes"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"texts"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Mandatory. See ",(0,r.kt)("a",{parentName:"td",href:"#texts-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logoOverride"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#logooverride-object"},"LogoOverride")," object"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#logooverride-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heroImage"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#heroimage-notes"},"notes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlineImage"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#inlineimage-notes"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attribution"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#attribution-notes"},"notes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttons"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#toastnotificationbutton-object"},"ToastNotificationButton"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#buttons-notes"},"notes"),".")))),(0,r.kt)("h4",{id:"header-notes"},"header notes"),(0,r.kt)("p",null,"You can provide a headline to the notificaiton."),(0,r.kt)("h4",{id:"texts-notes"},"texts notes"),(0,r.kt)("p",null,"Texts parameter must exist and include 1-3 texts (lines)."),(0,r.kt)("h4",{id:"logooverride-notes"},"logoOverride notes"),(0,r.kt)("p",null,"By default, your toast will display your app's logo. However, you can override this logo with your own image."),(0,r.kt)("h4",{id:"heroimage-notes"},"heroImage notes"),(0,r.kt)("p",null,"Toasts can display a hero image, which is displayed prominently within the toast banner and while inside Action Center. Image dimensions must be 364x180 pixels."),(0,r.kt)("h4",{id:"inlineimage-notes"},"inlineImage notes"),(0,r.kt)("p",null,"You can provide a full-width inline-image that appears when you expand the toast."),(0,r.kt)("h4",{id:"attribution-notes"},"attribution notes"),(0,r.kt)("p",null,"If you need to reference the source of your content, you can use attribution text. This text is always displayed at the bottom of your notification, along with your app's identity or the notification's timestamp."),(0,r.kt)("h4",{id:"buttons-notes"},"buttons notes"),(0,r.kt)("p",null,"Buttons make your toast interactive, letting the user take quick actions on your toast notification without interrupting their current workflow. Buttons appear in the expanded portion of your notification."),(0,r.kt)("h2",{id:"toastnotificationbutton-object"},"ToastNotificationButton Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"logooverride-object"},"LogoOverride Object"),(0,r.kt)("p",null,"Note: Must be 364x180."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cropType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#applogocrop-enum"},"AppLogoCrop")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"showtoastnotificationresult-object"},"ShowToastNotificationResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"applogocrop-enum"},"AppLogoCrop enum"),(0,r.kt)("h4",{id:"version-added-0176-1"},"Version added: 0.176"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specify the desired cropping of the image.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default"),(0,r.kt)("td",{parentName:"tr",align:null},'"Default"'),(0,r.kt)("td",{parentName:"tr",align:null},"Cropping uses the default behavior of the renderer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},'"None"'),(0,r.kt)("td",{parentName:"tr",align:null},"Image is not cropped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Circle"),(0,r.kt)("td",{parentName:"tr",align:null},'"Circle"'),(0,r.kt)("td",{parentName:"tr",align:null},"Image is cropped to a circle shape.")))),(0,r.kt)("h2",{id:"ontoastinteraction"},"onToastInteraction"),(0,r.kt)("h4",{id:"version-added-0176-2"},"Version added: 0.176"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when a user tapped on the body of a toast notification or performed an action inside a toast notification, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#toastnotificationevent-object"},"ToastNotificationEvent")," Object.")),(0,r.kt)("h2",{id:"toastnotificationevent--object"},"ToastNotificationEvent  Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#toasteventtype-enum"},"ToastEventType")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttonID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#toasteventerror-enum"},"ToastEventError")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"toatseventtype-enum"},"ToatsEventType enum"),(0,r.kt)("h4",{id:"version-added-0176-3"},"Version added: 0.176"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Describes the toast event type.  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dismiss"),(0,r.kt)("td",{parentName:"tr",align:null},'"dismiss"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ButtonClick"),(0,r.kt)("td",{parentName:"tr",align:null},'"buttonClick"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},'"error"'),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"toasteventerror-enum"},"ToastEventError enum"),(0,r.kt)("h4",{id:"version-added-0176-4"},"Version added: 0.176"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Describes the toast event error.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},'"unknown"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotificationsDisabled"),(0,r.kt)("td",{parentName:"tr",align:null},'"notificationsDisabled "'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},'"error"'),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},39061:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/notification-example-c340c640f6c193ab7696c05c39edd470.png"}}]);