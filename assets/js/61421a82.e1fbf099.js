"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9069],{35318:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(a),s=l,c=k["".concat(o,".").concat(s)]||k[s]||u[s]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[k]="string"==typeof t?t:l,i[1]=d;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},69586:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"arx",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech.arx API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,d={unversionedId:"api/logitech/arx",id:"api/logitech/arx",title:"overwolf.logitech.arx API",description:"An API for Logitech Arx Control features.",source:"@site/../pages/api/logitech/arx.mdx",sourceDirName:"api/logitech",slug:"/api/logitech/arx",permalink:"/api/logitech/arx",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/logitech/arx.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721227860,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{id:"arx",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech.arx API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.logitech API",permalink:"/api/logitech/"},next:{title:"overwolf.logitech.led API",permalink:"/api/logitech/led"}},o={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"init(identifier, friendlyName, callback)",id:"initidentifier-friendlyname-callback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"publishApp(indexFilename, callback)",id:"publishappindexfilename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"addFileAs(fileUrl, fileName, mimeType, callback)",id:"addfileasfileurl-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"addContentAs(base64Content, fileName, callback)",id:"addcontentasbase64content-filename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4},{value:"addContentAs(content, fileName, mimeType, callback)",id:"addcontentascontent-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-4",level:4},{value:"addUtf8StringAs(stringContent, fileName, mimeType, callback)",id:"addutf8stringasstringcontent-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-5",level:4},{value:"addImageFromBitmap(bitmap, width, height, fileName, callback)",id:"addimagefrombitmapbitmap-width-height-filename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-6",level:4},{value:"setIndex(fileName, callback)",id:"setindexfilename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-7",level:4},{value:"setTagPropertyById(tagId, prop, newValue, callback)",id:"settagpropertybyidtagid-prop-newvalue-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-8",level:4},{value:"setTagsPropertyByClass(tagsClass, prop, newValue, callback)",id:"settagspropertybyclasstagsclass-prop-newvalue-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-9",level:4},{value:"setTagContentById(tagId, newContent, callback)",id:"settagcontentbyidtagid-newcontent-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-10",level:4},{value:"setTagsContentByClass(tagsClass, newContent, callback)",id:"settagscontentbyclasstagsclass-newcontent-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-11",level:4},{value:"shutdown()",id:"shutdown",level:2},{value:"Version added: 0.93",id:"version-added-093-12",level:4},{value:"onEvent",id:"onevent",level:2},{value:"Version added: 0.93",id:"version-added-093-13",level:4},{value:"onError",id:"onerror",level:2},{value:"Version added: 0.93",id:"version-added-093-14",level:4},{value:"Logitech.Arx.Event.Data Object",id:"logitecharxeventdata-object",level:2},{value:"Version added: 0.93",id:"version-added-093-15",level:4}],m={toc:p};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An API for Logitech Arx Control features."),(0,l.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#initidentifier-friendlyname-callback"},"overwolf.logitech.arx.init()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#publishappindexfilename-callback"},"overwolf.logitech.arx.publishApp()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addfileasfileurl-filename-mimetype-callback"},"overwolf.logitech.arx.addFileAs()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addcontentasbase64content-filename-callback"},"overwolf.logitech.arx.addContentAs()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addcontentascontent-filename-mimetype-callback"},"overwolf.logitech.arx.addContentAs()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addutf8stringasstringcontent-filename-mimetype-callback"},"overwolf.logitech.arx.addUtf8StringAs()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addimagefrombitmapbitmap-width-height-filename-callback"},"overwolf.logitech.arx.addImageFromBitmap()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setindexfilename-callback"},"overwolf.logitech.arx.setIndex()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#settagpropertybyidtagid-prop-newvalue-callback"},"overwolf.logitech.arx.setTagPropertyById()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#settagspropertybyclasstagsclass-prop-newvalue-callback"},"overwolf.logitech.arx.setTagsPropertyByClass()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#settagcontentbyidtagid-newcontent-callback"},"overwolf.logitech.arx.setTagContentById()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#settagscontentbyclasstagsclass-newcontent-callback"},"overwolf.logitech.arx.setTagsContentByClass()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shutdown"},"overwolf.logitech.arx.shutdown()"))),(0,l.kt)("h2",{id:"events-reference"},"Events Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onevent"},"overwolf.logitech.arx.onEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onerror"},"overwolf.logitech.arx.onError"))),(0,l.kt)("h2",{id:"types-reference"},"Types Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#logitecharxeventdata-object"},"Logitech.Arx.Event.Data")," Object.")),(0,l.kt)("h2",{id:"initidentifier-friendlyname-callback"},"init(identifier, friendlyName, callback)"),(0,l.kt)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Initializes the Arx API.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ID for the app that will be discovered by LGS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"friendlyName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Friendly display name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"publishappindexfilename-callback"},"publishApp(indexFilename, callback)"),(0,l.kt)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Publishes an entire app according to the folder set in the manifest file and/or optional sets in an index file.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indexFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional file to use as index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"addfileasfileurl-filename-mimetype-callback"},"addFileAs(fileUrl, fileName, mimeType, callback)"),(0,l.kt)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Adds a file using an overwolf-extension:// or overwolf-media:// url.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Overwolf url to add")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mimeType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional mime type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"addcontentasbase64content-filename-callback"},"addContentAs(base64Content, fileName, callback)"),(0,l.kt)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Adds content from a base64 string.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base64Content"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"addcontentascontent-filename-mimetype-callback"},"addContentAs(content, fileName, mimeType, callback)"),(0,l.kt)("h4",{id:"version-added-093-4"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Adds content from a byte array.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mimeType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional mime type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"addutf8stringasstringcontent-filename-mimetype-callback"},"addUtf8StringAs(stringContent, fileName, mimeType, callback)"),(0,l.kt)("h4",{id:"version-added-093-5"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Adds content from a UTF8 string.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stringContent"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"UTF8 string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mimeType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional mime type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"addimagefrombitmapbitmap-width-height-filename-callback"},"addImageFromBitmap(bitmap, width, height, fileName, callback)"),(0,l.kt)("h4",{id:"version-added-093-6"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Add an image from a bitmap.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bitmap"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"A byte array representing a bitmap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the bitmap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the bitmap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"setindexfilename-callback"},"setIndex(fileName, callback)"),(0,l.kt)("h4",{id:"version-added-093-7"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the index file of the website.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File to use as index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"settagpropertybyidtagid-prop-newvalue-callback"},"setTagPropertyById(tagId, prop, newValue, callback)"),(0,l.kt)("h4",{id:"version-added-093-8"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a property of a tag by ID.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tagId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the tag to set the property to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prop"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the property to change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newValue"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"New value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"File name to add as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"settagspropertybyclasstagsclass-prop-newvalue-callback"},"setTagsPropertyByClass(tagsClass, prop, newValue, callback)"),(0,l.kt)("h4",{id:"version-added-093-9"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a property of a tag by class.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tagsClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Class of the tag(s) to set the property to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prop"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the property to change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newValue"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"New value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"settagcontentbyidtagid-newcontent-callback"},"setTagContentById(tagId, newContent, callback)"),(0,l.kt)("h4",{id:"version-added-093-10"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the content of a tag by ID.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tagId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the tag to set the content to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newContent"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"New content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"settagscontentbyclasstagsclass-newcontent-callback"},"setTagsContentByClass(tagsClass, newContent, callback)"),(0,l.kt)("h4",{id:"version-added-093-11"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the content of a tag by ID.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tagsClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Class of the tag(s) to set the content to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newContent"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"New content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,l.kt)("h2",{id:"shutdown"},"shutdown()"),(0,l.kt)("h4",{id:"version-added-093-12"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shuts down the API.")),(0,l.kt)("h2",{id:"onevent"},"onEvent"),(0,l.kt)("h4",{id:"version-added-093-13"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An Arx event sent with a ","[Logitech.Arx.Event.Data]"," object.")),(0,l.kt)("h2",{id:"onerror"},"onError"),(0,l.kt)("h4",{id:"version-added-093-14"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Triggered when an error occurs, sent with an error code.")),(0,l.kt)("h2",{id:"logitecharxeventdata-object"},"Logitech.Arx.Event.Data Object"),(0,l.kt)("h4",{id:"version-added-093-15"},"Version added: 0.93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Describes an Arx event.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventType"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Type code of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventTypeString"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Type name of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventValue"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Value code of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventValueString"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Value string on the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventArg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Argument of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"IntPtr"),(0,l.kt)("td",{parentName:"tr",align:null},"Context of the event")))))}k.isMDXComponent=!0}}]);