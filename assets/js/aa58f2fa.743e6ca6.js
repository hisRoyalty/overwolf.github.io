"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9809],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?l.createElement(k,i(i({ref:t},s),{},{components:a})):l.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(25773),n=(a(27378),a(35318));const r={id:"io",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.io API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/extensions/io",id:"api/extensions/io",title:"overwolf.extensions.io API",description:"Use this API to get I/O functionalities for the current extension and access your extension's dedicated storage space like the pictures folder, videos folder, or appData folder.",source:"@site/../pages/api/extensions/io.mdx",sourceDirName:"api/extensions",slug:"/api/extensions/io",permalink:"/api/extensions/io",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/extensions/io.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1715164810,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"io",image:"/img/embed/api-docs.jpg",title:"overwolf.extensions.io API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.extensions.current API",permalink:"/api/extensions/current"},next:{title:"overwolf.extensions.sharedData API",permalink:"/api/extensions/shared-data"}},p={},d=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"createDirectory(space, path, callback)",id:"createdirectoryspace-path-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"getStoragePath(space, callback)",id:"getstoragepathspace-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-1",level:4},{value:"Usage example",id:"usage-example-1",level:4},{value:"exist(space, path, callback)",id:"existspace-path-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-2",level:4},{value:"Usage example",id:"usage-example-2",level:4},{value:"move(space, source, destination, callback)",id:"movespace-source-destination-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-3",level:4},{value:"Usage example",id:"usage-example-3",level:4},{value:"delete(space, path, callback)",id:"deletespace-path-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-4",level:4},{value:"Usage example",id:"usage-example-4",level:4},{value:"copy(space, source, destination, callback)",id:"copyspace-source-destination-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-5",level:4},{value:"Usage example",id:"usage-example-5",level:4},{value:"dir(space, directoryPath, callback)",id:"dirspace-directorypath-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-6",level:4},{value:"Usage example",id:"usage-example-6",level:4},{value:"readTextFile(space, filePath, callback)",id:"readtextfilespace-filepath-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-7",level:4},{value:"Usage example",id:"usage-example-7",level:4},{value:"writeTextFile(space, filePath, content, callback)",id:"writetextfilespace-filepath-content-callback",level:2},{value:"Version added: 0.147",id:"version-added-0147-8",level:4},{value:"Usage example",id:"usage-example-8",level:4},{value:"FileType enum",id:"filetype-enum",level:2},{value:"Version added: 0.147",id:"version-added-0147-9",level:4},{value:"StorageSpace enum",id:"storagespace-enum",level:2},{value:"Version added: 0.147",id:"version-added-0147-10",level:4},{value:"Content Object",id:"content-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-11",level:4},{value:"ReadTextFileResult Object",id:"readtextfileresult-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-12",level:4},{value:"Example data: Success",id:"example-data-success",level:4},{value:"Example data: Failure",id:"example-data-failure",level:4},{value:"ExistResult Object",id:"existresult-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-13",level:4},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"Example data: Failure",id:"example-data-failure-1",level:4},{value:"GetStoragePathResult Object",id:"getstoragepathresult-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-14",level:4},{value:"Example data: Success",id:"example-data-success-2",level:4},{value:"Example data: Failure",id:"example-data-failure-2",level:4},{value:"DirResult Object",id:"dirresult-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-15",level:4},{value:"Example data: Success",id:"example-data-success-3",level:4},{value:"Example data: Failure",id:"example-data-failure-3",level:4},{value:"DeleteResult Object",id:"deleteresult-object",level:2},{value:"Version added: 0.147",id:"version-added-0147-16",level:4},{value:"Example data: Success",id:"example-data-success-4",level:4},{value:"Example data: Failure",id:"example-data-failure-4",level:4}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to get I/O functionalities for the current extension and access your extension's ",(0,n.kt)("a",{parentName:"p",href:"#storagespace-enum"},"dedicated storage space")," like the pictures folder, videos folder, or appData folder."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For general I/O functionalities, use the ",(0,n.kt)("a",{parentName:"p",href:"io"},"overwolf.io")," API.\nIn addition, the ",(0,n.kt)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin")," offers several more general I/O features that are not available through the APIs.   ")),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createdirectoryspace-path-callback"},"overwolf.extensions.io.createDirectory()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#getstoragepathspace-callback"},"overwolf.extensions.io.getStoragePath()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#existspace-path-callback"},"overwolf.extensions.io.exist()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#movespace-source-destination-callback"},"overwolf.extensions.io.move()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deletespace-path-callback"},"overwolf.extensions.io.delete()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#copyspace-source-destination-callback"},"overwolf.extensions.io.copy()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dirspace-directorypath-callback"},"overwolf.extensions.io.dir()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#readtextfilespace-filepath-callback"},"overwolf.extensions.io.readTextFile()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#writetextfilespace-filepath-content-callback"},"overwolf.extensions.io.writeTextFile()"))),(0,n.kt)("h2",{id:"types-reference"},"Types Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#filetype-enum"},"overwolf.extensions.io.enums.FileType")," enum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#storagespace-enum"},"overwolf.extensions.io.enums.StorageSpace")," enum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#content-object"},"overwolf.extensions.io.Content")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#readtextfileresult-object"},"overwolf.extensions.io.ReadTextFileResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#existresult-object"},"overwolf.extensions.io.ExistResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#getstoragepathresult-object"},"overwolf.extensions.io.GetStoragePathResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dirresult-object"},"overwolf.extensions.io.DirResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deleteresult-object"},"overwolf.extensions.io.DeleteResult")," Object")),(0,n.kt)("h2",{id:"createdirectoryspace-path-callback"},"createDirectory(space, path, callback)"),(0,n.kt)("h4",{id:"version-added-0147"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Create directory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path within the space. Use null or empty string for the space root.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,n.kt)("h4",{id:"usage-example"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.createDirectory(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000",console.log)\n//==> {success: true}\n')),(0,n.kt)("h2",{id:"getstoragepathspace-callback"},"getStoragePath(space, callback)"),(0,n.kt)("h4",{id:"version-added-0147-1"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the full path of given extension storage space.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"#getstoragepathresult-object"},"Result: GetStoragePathResult"),") => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns with the full path of the requested extension storage space")))),(0,n.kt)("h4",{id:"usage-example-1"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.getStoragePath(overwolf.extensions.io.enums.StorageSpace.appData,console.log)\n//==>{path: "C:\\Users\\Hal9000\\AppData\\Roaming\\Overwolf\\nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp", success: true}\n')),(0,n.kt)("h2",{id:"existspace-path-callback"},"exist(space, path, callback)"),(0,n.kt)("h4",{id:"version-added-0147-2"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns whether the file or folder specified exist.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path within the space. Use null or empty string for the space root.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"#existresult-object"},"Result: ExistResult"),") => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns with the type of the file (if exist).")))),(0,n.kt)("h4",{id:"usage-example-2"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.exist(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000",console.log)\n//==> "{type": "directory", "success":true}\n\n//you can use full path as well (just add escape slash for backslash)\noverwolf.extensions.io.exist(overwolf.extensions.io.enums.StorageSpace.appData,"C:\\\\Users\\\\OWUser\\\\AppData\\\\Roaming\\\\Overwolf\\\\nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp\\\\hal9000",console.log)\n//==> "{type": "directory", "success":true}\n')),(0,n.kt)("h2",{id:"movespace-source-destination-callback"},"move(space, source, destination, callback)"),(0,n.kt)("h4",{id:"version-added-0147-3"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Moves source file or directory and its contents to destination.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path for the source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"destination"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path to move to, including filename.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,n.kt)("h4",{id:"usage-example-3"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.move(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000\\\\log.txt","log.txt",console.log)\n//==>{"success":true}\n')),(0,n.kt)("h2",{id:"deletespace-path-callback"},"delete(space, path, callback)"),(0,n.kt)("h4",{id:"version-added-0147-4"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deletes file or directory and its contents.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path within the space. Use null or empty string for the space root.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"#deleteresult-object"},"Result: DeleteResult"),") => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns with array of file and directory paths that could not be deleted.")))),(0,n.kt)("h4",{id:"usage-example-4"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.delete(overwolf.extensions.io.enums.StorageSpace.appData,"log.txt",console.log)\n//==>{success: true}\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To delete old videos you can use ",(0,n.kt)("a",{parentName:"p",href:"../media/videos#deleteoldvideoskeepnewestxgbs-callback"},"overwolf.media.videos.deleteOldVideos()"),", and to delete old gifs you can use ",(0,n.kt)("a",{parentName:"p",href:"../media#deleteoldgifskeepnewestxgbs-callback"},"overwolf.media.deleteOldGifs()"),".")),(0,n.kt)("h2",{id:"copyspace-source-destination-callback"},"copy(space, source, destination, callback)"),(0,n.kt)("h4",{id:"version-added-0147-5"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Copies source file or directory and its contents to destination.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path for the source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"destination"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path to copy to, including filename.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,n.kt)("h4",{id:"usage-example-5"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.copy(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000\\\\log.txt","log.txt",console.log)\n//==>{"success":true}\n')),(0,n.kt)("h2",{id:"dirspace-directorypath-callback"},"dir(space, directoryPath, callback)"),(0,n.kt)("h4",{id:"version-added-0147-6"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Lists directories and files under given directory path.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"directoryPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path within the space. Use null or empty string for the space root.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"#dirresult-object"},"Result: DirResult"),") => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns with array of file names within the directory.")))),(0,n.kt)("h4",{id:"usage-example-6"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.dir(overwolf.extensions.io.enums.StorageSpace.appData,"",console.log)\n//==>{"files":[],"directories":["hal9000"],"success":true}\n')),(0,n.kt)("h2",{id:"readtextfilespace-filepath-callback"},"readTextFile(space, filePath, callback)"),(0,n.kt)("h4",{id:"version-added-0147-7"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the content of a given file.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path of a file to read (within the space).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"#"},"Result: ReadTextFileResult"),") => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns with the content of the fil.")))),(0,n.kt)("h4",{id:"usage-example-7"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.readTextFile(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000\\\\loxg.txt",console.log)\n')),(0,n.kt)("h2",{id:"writetextfilespace-filepath-content-callback"},"writeTextFile(space, filePath, content, callback)"),(0,n.kt)("h4",{id:"version-added-0147-8"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Writes the provided text content to the provided file.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"space"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#storagespace-enum"},"StorageSpace")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected storage space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Path of a file to write to (within the space).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Text content to write (added to the end of file, not overwrite the content)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,n.kt)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,n.kt)("h4",{id:"usage-example-8"},"Usage example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.io.writeTextFile(overwolf.extensions.io.enums.StorageSpace.appData,"hal9000\\\\log.txt","add this to your tail",console.log)\n//==>{"success":true}\n')),(0,n.kt)("h2",{id:"filetype-enum"},"FileType enum"),(0,n.kt)("h4",{id:"version-added-0147-9"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'FileType is "file"|"directory".')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"file"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"directory"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"storagespace-enum"},"StorageSpace enum"),(0,n.kt)("h4",{id:"version-added-0147-10"},"Version added: 0.147"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The selected storage space.")),(0,n.kt)("p",null,'Note that the default Overwolf\'s captured pictures and videos folder is the windows "pictures"/"videos" folder.',(0,n.kt)("br",{parentName:"p"}),"\n","Of course, the user can change it anytime from the OW client UI."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pictures"),(0,n.kt)("td",{parentName:"tr",align:null},"The extension's captured pictures folder, ",(0,n.kt)("inlineCode",{parentName:"td"},"OverwolfPicturesFolder\\AppName\\"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videos"),(0,n.kt)("td",{parentName:"tr",align:null},"The extension's captured videos folder, ",(0,n.kt)("inlineCode",{parentName:"td"},"OverwolfVideosFolder\\AppName\\"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"appData"),(0,n.kt)("td",{parentName:"tr",align:null},"The extension's folder under Roaming app data, ",(0,n.kt)("inlineCode",{parentName:"td"},"AppData\\Roaming\\Overwolf\\[Extensions UID]"))))),(0,n.kt)("h2",{id:"content-object"},"Content Object"),(0,n.kt)("h4",{id:"version-added-0147-11"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#filetype-enum"},"FileType")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},'FileType is "file" or "directory".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"readtextfileresult-object"},"ReadTextFileResult Object"),(0,n.kt)("h4",{id:"version-added-0147-12"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"content":"just a demo text","success":true}\n')),(0,n.kt)("h4",{id:"example-data-failure"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success":false,\n    "error":"hal9000\\\\loxg.txt does not exist."\n}\n')),(0,n.kt)("h2",{id:"existresult-object"},"ExistResult Object"),(0,n.kt)("h4",{id:"version-added-0147-13"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#filetype-enum"},"FileType")," enum"),(0,n.kt)("td",{parentName:"tr",align:null},'FileType is "file" or "directory".')))),(0,n.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"{type": "directory", "success":true}\n')),(0,n.kt)("h4",{id:"example-data-failure-1"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "file", \n    "success": false, \n    "error": "C:\\Users\\hal9000\\AppData\\Roaming\\Overwolf\\nhm\u2026dnnjmgfifjgkfegkljnjjbipp\\DirNameX does not exist."\n}\n')),(0,n.kt)("h2",{id:"getstoragepathresult-object"},"GetStoragePathResult Object"),(0,n.kt)("h4",{id:"version-added-0147-14"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Full path of the requested extension storage space")))),(0,n.kt)("h4",{id:"example-data-success-2"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'//the path of the extension\'s app data storage space\n\n{\n    "path": "C:\\Users\\Hal9000\\AppData\\Roaming\\Overwolf\\nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp", \n    "success": true\n}\n')),(0,n.kt)("h4",{id:"example-data-failure-2"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,n.kt)("h2",{id:"dirresult-object"},"DirResult Object"),(0,n.kt)("h4",{id:"version-added-0147-15"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"files"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Array of file names within the directory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"directories"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Array of directory names within the directory.")))),(0,n.kt)("h4",{id:"example-data-success-3"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "files":["hal9000\\\\log.txt"],\n    "directories":[],\n    "success":true\n}\n')),(0,n.kt)("h4",{id:"example-data-failure-3"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success":false,\n    "error":"Could not find a part of the path \'C:\\\\Users\\\\OWUser\\\\AppData\\\\Roaming\\\\Overwolf\\\\nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp\\\\hal900\'."\n}\n')),(0,n.kt)("h2",{id:"deleteresult-object"},"DeleteResult Object"),(0,n.kt)("h4",{id:"version-added-0147-16"},"Version added: 0.147"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"undeleted_content"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#content-object"},"Content[]")),(0,n.kt)("td",{parentName:"tr",align:null},"Array of file and directory paths that could not be deleted.")))),(0,n.kt)("h4",{id:"example-data-success-4"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"success": "true"}\n')),(0,n.kt)("h4",{id:"example-data-failure-4"},"Example data: Failure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false, \n    "error": "File or directory do not exist"\n}\n')))}u.isMDXComponent=!0}}]);