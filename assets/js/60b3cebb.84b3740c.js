"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[228],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?o.createElement(m,n(n({ref:t},p),{},{components:a})):o.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,n[1]=i;for(var c=2;c<s;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},23057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=a(25773),r=(a(27378),a(35318));const s={id:"data-persistence",image:"/img/embed/api-best-practices.jpg",title:"Choosing your App's Client-Side Storage Technology",sidebar_label:"Data persistence",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},n=void 0,i={unversionedId:"topics/best-practices/data-persistence",id:"topics/best-practices/data-persistence",title:"Choosing your App's Client-Side Storage Technology",description:"Overview",source:"@site/../pages/topics/best-practices/data-persistence.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/data-persistence",permalink:"/topics/best-practices/data-persistence",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/data-persistence.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1722325180,formattedLastUpdatedAt:"Jul 30, 2024",frontMatter:{id:"data-persistence",image:"/img/embed/api-best-practices.jpg",title:"Choosing your App's Client-Side Storage Technology",sidebar_label:"Data persistence",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Download Link with referral ID",permalink:"/topics/best-practices/create-download-link"},next:{title:"Electron Migration",permalink:"/topics/best-practices/electron-migration"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Cookies",id:"cookies",level:2},{value:"Restrictions of cookies",id:"restrictions-of-cookies",level:3},{value:"Usage",id:"usage",level:3},{value:"Web Storage",id:"web-storage",level:2},{value:"Session storage",id:"session-storage",level:3},{value:"LocalStorage",id:"localstorage",level:3},{value:"Usage",id:"usage-1",level:3},{value:"IndexedDB",id:"indexeddb",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Application Cache",id:"application-cache",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"There are several ways for Overwolf apps to store data locally in the user's computer for later retrieval when necessary.\nStoring data persistently enables long-term storage, back ups of save data or documents for offline use, and to retain user-specific settings for your app."),(0,r.kt)("p",null,"In this article, we're going to review the most popular client-side storage technologies, highlighting their usage, benefits, and drawbacks."),(0,r.kt)("h2",{id:"cookies"},"Cookies"),(0,r.kt)("p",null,"In the past, cookies were used to store various types of local information like session's id, with no real alternative. Cookies are severely limited in size and can't store too much - they are sent back and forth for every HTTP request and asset requests for Images/CSS/JavaScript files. Nowadays we have Web Storage API, IndexedDB, and a bunch of solid alternatives which are much less limited than cookies and enable you to store more types of data easily."),(0,r.kt)("h3",{id:"restrictions-of-cookies"},"Restrictions of cookies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cookies can only store up to 4KB of data."),(0,r.kt)("li",{parentName:"ul"},"Cookies are private to the app. An OW app can only read the cookies it set itself, not other OW apps cookies."),(0,r.kt)("li",{parentName:"ul"},"Cookies are limited in total number (but the exact number depends on the specific browser implementation). If this number is exceeded, new cookies replace the older ones.")),(0,r.kt)("p",null,"Cookies can be set or read server side, or client side. On the client's side, cookies are exposed by the document object as document.cookie ."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"A simple JavaScript snippet to set a cookie that expires in 1 year is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// set a cookie that expires in 1 year counted in seconds\ndocument.cookie = 'name=OW; max-age=31536000' \n\n// return a string with all the cookies set for the page, semicolon separated\nconst cookies = document.cookie \n")),(0,r.kt)("h2",{id:"web-storage"},"Web Storage"),(0,r.kt)("p",null,"Web Storage provides a way to store key/value pairs in a user's browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web Storage is persistent. Once a value is stored, it doesn't disappear or expire until the application or the user explicitly removes it."),(0,r.kt)("li",{parentName:"ul"},"Web Storage can handle large amounts of data. Current browsers limit total size per storage area to 5MB."),(0,r.kt)("li",{parentName:"ul"},"Web Storage doesn't depend on the server and sends no data to the server. You're free to store data locally and sync it with the server asynchronously, but Web Storage works equally well and is just as useful offline as it is online."),(0,r.kt)("li",{parentName:"ul"},"Web Storage provides four primary methods \u2014 getItem(key); setItem(key,value); removeItem(key); and clear().")),(0,r.kt)("p",null,"Web Storage includes two different types of storage: SessionStorage and LocalStorage."),(0,r.kt)("h3",{id:"session-storage"},"Session storage"),(0,r.kt)("p",null,"SessionStorage limits the scope of data saved in the current browser window to just that browser window. When used with an ecommerce application, for example, using sessionStorage to record the contents of a user's shopping cart eliminates the potential for accidental double purchases."),(0,r.kt)("h3",{id:"localstorage"},"LocalStorage"),(0,r.kt)("p",null,"LocalStorage, meanwhile, persists across windows and tabs within a single browser. So, if you have the same site open in three windows in Chrome, all could all share the same localStorage container."),(0,r.kt)("p",null,"LocalStorage databases impose a size limit of ~50Mb (Since OW v0.161. Before, the size was 5Mb)."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/2013/REC-webstorage-20130730/"},"Web Storage API")," to set and get data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'localStorage.setItem( "firstname", "Wolf" );\nvar name = localStorage.getItem( "firstname" );\n')),(0,r.kt)("p",null,"Web Storage can be used anywhere you would normally have used cookies. It provides what's perhaps the simplest way \u2014 even easier than cookies \u2014 to set and retrieve key-value pairs in a browser."),(0,r.kt)("h2",{id:"indexeddb"},"IndexedDB"),(0,r.kt)("p",null,"Indexed Database is an API for storing and retrieving data using an indexed, transactional database of key-value pairs on the user's computer. "),(0,r.kt)("p",null,"IndexedDB provides faster, more sophisticated data storage and retrieval than simple key-value pair storage of the type available from Web Storage or cookies."),(0,r.kt)("h3",{id:"benefits"},"Benefits"),(0,r.kt)("p",null,"IndexedDB offers four specific benefits over Web Storage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Indexed data can be searched efficiently."),(0,r.kt)("li",{parentName:"ul"},"Databases allow multiple values to be stored as a key, whereas key-value data requires each key to be unique."),(0,r.kt)("li",{parentName:"ul"},"Transactional databases offer some protection against system and application failures. If a transaction doesn't successfully complete, it can be rolled back."),(0,r.kt)("li",{parentName:"ul"},"IndexedDB databases impose no size limitations.")),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("p",null,"All major browsers except Safari currently support IndexedDB."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/IndexedDB/"},"IndexedDB API")," to set and get data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var db; // create empty variable to hold database if opening succeeds\nvar request = indexedDB.open("myDatabase"); //the first step is to open a database\n\nrequest.onsuccess = (event) => {\n  db = request.result; // if things go well, we will get the db in the `result` property of our request\n}\n\n//create an object store (which is something very much like a table)\nvar objectStore = db.createObjectStore("players", {keyPath: "id"}); \n\nobjectStore.add(customerData[i]); //add data\n')),(0,r.kt)("p",null,"IndexedDB is the way to go if you're building an application that needs to store structured data. Just be aware of the steep learning curve when you're getting started."),(0,r.kt)("p",null,"IndexedDB learning curve can be steep, but this very simple app can be a good place to start: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mdn/to-do-notifications"},"TODO-notifications sample app")),(0,r.kt)("h2",{id:"application-cache"},"Application Cache"),(0,r.kt)("p",null,"The Application Cache isn't like other client-side data storage APIs listed above, but it's worth mentioning, as it's an important component in enabling offline client-side Web apps."),(0,r.kt)("p",null,"The Application Cache uses a cache manifest. This is a simple text document listing resources that should and shouldn't be cached, to tell the browser to download certain files, hold onto them and use the cached version rather than make a request to the server. Every major Web browser supports the Application Cache."),(0,r.kt)("p",null,"Read more about app cache ",(0,r.kt)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/appcache/beginner/"},"here"),"."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This was a review of the different client-side storage techniques you can leverage when building Overwolf applications.  "),(0,r.kt)("p",null,"If you're still unsure about which method is best suited to your project, ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))}d.isMDXComponent=!0}}]);