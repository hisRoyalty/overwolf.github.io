"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3371],{35318:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var n=i(27378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(i),u=r,y=f["".concat(s,".").concat(u)]||f[u]||d[u]||o;return i?n.createElement(y,a(a({ref:t},c),{},{components:i})):n.createElement(y,a({ref:t},c))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6972:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=i(25773),r=(i(27378),i(35318));const o={id:"type-definition-file",image:"/img/embed/api-best-practices.jpg",title:"Overwolf Type definition file",sidebar_label:"Type definition file",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},a=void 0,p={unversionedId:"topics/best-practices/type-definition-file",id:"topics/best-practices/type-definition-file",title:"Overwolf Type definition file",description:"Even if your application not uses TypeScript at all, you can use the type definition files for autocompletion and documentation purposes. More details here.",source:"@site/../pages/topics/best-practices/type-definition-file.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/type-definition-file",permalink:"/topics/best-practices/type-definition-file",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/type-definition-file.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1722944503,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"type-definition-file",image:"/img/embed/api-best-practices.jpg",title:"Overwolf Type definition file",sidebar_label:"Type definition file",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Second monitor usage",permalink:"/topics/best-practices/second-monitor"},next:{title:"User journey and error handling",permalink:"/topics/best-practices/user-flow-and-error-handling"}},s={},l=[{value:"TypeScript overview",id:"typescript-overview",level:2},{value:"TypeScript definition files overview",id:"typescript-definition-files-overview",level:2},{value:"Using overwolf.d.ts file",id:"using-overwolfdts-file",level:2},{value:"Using types for games events",id:"using-types-for-games-events",level:2}],c={toc:l};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Even if your application not uses TypeScript at all, you can use the type definition files for autocompletion and documentation purposes. More details ",(0,r.kt)("a",{parentName:"p",href:"#using-overwolfdts-file"},"here"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can find the Overwolf API ts definition file ",(0,r.kt)("a",{parentName:"strong",href:"https://bit.ly/overwolf-ts-file"},"here"))),(0,r.kt)("p",null,"If you are working with Typescript, you can install it as a ",(0,r.kt)("a",{parentName:"p",href:"https://bit.ly/overwolf-types-npm"},"npm package"),"."),(0,r.kt)("h2",{id:"typescript-overview"},"TypeScript overview"),(0,r.kt)("p",null,"TypeScript is a superset of JavaScript which adds optional static typing to the language, hence its name. Static typing enables the compiler to check that operations performed on variables are legal. Those checks prevent you from attempting to invoke a number as a function, for example."),(0,r.kt)("p",null,"TypeScript can help us to avoid painful bugs that developers commonly run into when writing JavaScript by type-checking the code. It reduces bugs like null handling, undefined, etc. Strongly typed characteristics restrict developers to write type-specific code with proper checks."),(0,r.kt)("p",null,"In order for TypeScript to perform the type checking, the types need to be defined somewhere. It's pretty straightforward how to add type definitions to the variables declared in your own code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//  anyObject hold values of any arbitrary type\nvar anyObject: any;\n\n// count is a number\nvar count: number;\n\n\n// regexPatterns is an array of regular expressions\nvar regexPatterns: RegExp[];\n\n// reverse is a function which accepts and returns a string\nvar reverse: (input: string) => string;\n")),(0,r.kt)("p",null,"but how does TypeScript know about the types of variables and functions of existing JavaScript libraries? This is where type definition files come into play."),(0,r.kt)("h2",{id:"typescript-definition-files-overview"},"TypeScript definition files overview"),(0,r.kt)("p",null,"Type definition files allow you to provide type information for JavaScript code that is by itself (by its very nature) not statically typed. The file extension for such a file is \u201cd.ts\u201d, where d stands for definition. Type definition files make it possible to enjoy the benefits of type checking, autocompletion, and member documentation."),(0,r.kt)("h2",{id:"using-overwolfdts-file"},"Using overwolf.d.ts file"),(0,r.kt)("p",null,"Even if your application uses plain JavaScript and no TypeScript at all, you can use the type definition file for autocompletion and documentation purposes. Simply include it in your Visual Studio Code project.  VS will then include the found types in its auto-completion list, given that you've got TypeScript installed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:i(45958).Z,width:"918",height:"373"})),(0,r.kt)("p",null,"Of course, you won't get the benefit of type checking because you're not actually using TypeScript, but still, the provided information can be very helpful for working with the dynamic and loosely typed language that is JavaScript."),(0,r.kt)("h2",{id:"using-types-for-games-events"},"Using types for games events"),(0,r.kt)("p",null,"To make your lives easier when working with our games events API, We've expanded our library with typedef files for the different in-game events.\nWe added Type definition files for each game, for autocompletion and documentation purposes."),(0,r.kt)("p",null,"You can find the game's events definition files under the same repo and npm package above, under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/types/tree/master/gep"},"GEP folder"),"."),(0,r.kt)("p",null,"VS will then include the found types in its auto-completion list, given that you've got TypeScript installed.  "),(0,r.kt)("p",null,"Here is an example for Valorant:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:i(70481).Z,width:"831",height:"322"})))}f.isMDXComponent=!0},45958:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/def-file-demo-64d4b6443be42808601ec4518ad93a58.gif"},70481:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/valorant.d.ts2-3c53ad9af16201c64e11ec63bae9df6f.gif"}}]);