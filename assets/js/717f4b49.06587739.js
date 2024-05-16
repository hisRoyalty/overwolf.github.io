"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4225],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(25773),r=(a(27378),a(35318));const o={id:"validate-your-manifest",image:"/img/embed/api-docs.jpg",title:"Validate your manifest.json",sidebar_label:"Validate your manifest",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/manifest/validate-your-manifest",id:"api/manifest/validate-your-manifest",title:"Validate your manifest.json",description:"To help you make sure that your manifest file is correct and complete, validate it against our schema file.",source:"@site/../pages/api/manifest/validate-your-manifest.mdx",sourceDirName:"api/manifest",slug:"/api/manifest/validate-your-manifest",permalink:"/api/manifest/validate-your-manifest",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/manifest/validate-your-manifest.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1715865622,formattedLastUpdatedAt:"May 16, 2024",frontMatter:{id:"validate-your-manifest",image:"/img/embed/api-docs.jpg",title:"Validate your manifest.json",sidebar_label:"Validate your manifest",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"manifest.json",permalink:"/api/manifest/"},next:{title:"Deprecated APIs",permalink:"/api/deprecated/"}},s={},m=[{value:"Online validation",id:"online-validation",level:2},{value:"Validate your JSON structure",id:"validate-your-json-structure",level:4},{value:"Validate your schema",id:"validate-your-schema",level:4},{value:"Automated schema validation",id:"automated-schema-validation",level:2},{value:"1. Install the npm package",id:"1-install-the-npm-package",level:3},{value:"2. Pull the latest manifest",id:"2-pull-the-latest-manifest",level:3},{value:"3. Validate the data",id:"3-validate-the-data",level:3}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To help you make sure that your manifest file is correct and complete, validate it against our schema file."),(0,r.kt)("p",null,"You can find the most updated schema in our ",(0,r.kt)("a",{href:"https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json",target:"_blank"},"GitHub repository")," (and you are welcome to suggest changes/updates)."),(0,r.kt)("h2",{id:"online-validation"},"Online validation"),(0,r.kt)("h4",{id:"validate-your-json-structure"},"Validate your JSON structure"),(0,r.kt)("p",null,"Make sure that your ",(0,r.kt)("strong",{parentName:"p"},"manifest.json")," file is a strictly valid JSON, without trailing commas, etc.",(0,r.kt)("br",{parentName:"p"}),"\n","You can use ",(0,r.kt)("a",{href:"https://jsonlint.com/",target:"_blank"},"jsonlint.com")," or any other similar services."),(0,r.kt)("h4",{id:"validate-your-schema"},"Validate your schema"),(0,r.kt)("p",null,"Make sure that your ",(0,r.kt)("strong",{parentName:"p"},"manifest.json")," file contains only valid Overwolf flags, properties, etc."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{href:"http://www.jsonschemavalidator.net",target:"_blank"},"jsonschemavalidator.net")," or similar service like ",(0,r.kt)("a",{href:"http://www.jsonschemalint.com",target:"_blank"},"jsonschemalint.com"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy-paste the ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"},"schema's"),' and your manifest.json code into the "Schema" and "Input JSON" windows, respectively.'),(0,r.kt)("li",{parentName:"ol"},"Check for any errors or missing data.")),(0,r.kt)("h2",{id:"automated-schema-validation"},"Automated schema validation"),(0,r.kt)("p",null,"To better follow the modern practices of CI and CD, we strongly recommend you to automate the validation process using your preferred tools."),(0,r.kt)("p",null,"We demonstrate here how to do that using one of the popular npm schema validation packages, called ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/ajv-cli",target:"_blank"},"ajv-cli"),".  Also, ",(0,r.kt)("strong",{parentName:"p"},"the examples here are tested in the terminal of Visual Studio Code"),"."),(0,r.kt)("p",null,"The steps which developers should take to validate their manifest.json automatically:"),(0,r.kt)("h3",{id:"1-install-the-npm-package"},"1. Install the npm package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> npm install -g ajv-cli\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"g- install this package globally and make it available for all your projects.")),(0,r.kt)("h3",{id:"2-pull-the-latest-manifest"},"2. Pull the latest manifest"),(0,r.kt)("p",null,"Download the schema from GitHub and save it as overwolf-manifest-schema.json: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> curl -o overwolf-manifest-schema.json "https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"o - output name.")),(0,r.kt)("h3",{id:"3-validate-the-data"},"3. Validate the data"),(0,r.kt)("p",null,"Validate your manifest.json against the local schema file that you just downloaded (overwolf-manifest-schema.json):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},">  ajv validate -s overwolf-manifest-schema.json -d manifest.json\n")))}c.isMDXComponent=!0}}]);