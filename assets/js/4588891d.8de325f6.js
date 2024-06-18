"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4978],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const l={id:"custom-installer-for-your-app",image:"/img/embed/getting-started.jpg",title:"Custom Installer",sidebar_label:"Custom Installer",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,s={unversionedId:"start/submit-your-app/custom-installer-for-your-app",id:"start/submit-your-app/custom-installer-for-your-app",title:"Custom Installer",description:"Customizing Your App Installer",source:"@site/../pages/start/submit-your-app/custom-installer-for-your-app.mdx",sourceDirName:"start/submit-your-app",slug:"/start/submit-your-app/custom-installer-for-your-app",permalink:"/start/submit-your-app/custom-installer-for-your-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/submit-your-app/custom-installer-for-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1718714556,formattedLastUpdatedAt:"Jun 18, 2024",frontMatter:{id:"custom-installer-for-your-app",image:"/img/embed/getting-started.jpg",title:"Custom Installer",sidebar_label:"Custom Installer",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Submit Your App",permalink:"/start/submit-your-app/"},next:{title:"Monetize Your App",permalink:"/start/monetize-your-app/"}},i={},p=[{value:"Customizing Your App Installer",id:"customizing-your-app-installer",level:2},{value:"1. Create HTML file",id:"1-create-html-file",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"script.js",id:"scriptjs",level:3},{value:"2.  Upload files to Overwolf",id:"2--upload-files-to-overwolf",level:2},{value:"3. Download and install",id:"3-download-and-install",level:2}],u=(c="ImageSlider",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"customizing-your-app-installer"},"Customizing Your App Installer"),(0,r.kt)("p",null,"Overwolf supports per-app custom installer pages.\nTo use this feature, third party developers need to create HTML pages to be displayed during the installation process. This document will specify the steps needed to create a custom installation\nexperience."),(0,r.kt)(u,{mdxType:"ImageSlider"},(0,r.kt)("img",{src:n(59368).Z,alt:"Facecheck"}),(0,r.kt)("img",{src:n(86836).Z,alt:"Facecheck"}),(0,r.kt)("img",{src:n(69005).Z,alt:"Facecheck Installer"}),(0,r.kt)("img",{src:n(31833).Z,alt:"Facecheck Installer"})),(0,r.kt)("h2",{id:"1-create-html-file"},"1. Create HTML file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Create the HTML page you wish to display during the installation and name it "index.html".'),(0,r.kt)("li",{parentName:"ul"},"There are 2 distinct phases to the installation process: downloading and installing."),(0,r.kt)("li",{parentName:"ul"},"The maximum element size is 640px x 288px."),(0,r.kt)("li",{parentName:"ul"},"For each phase, different content can be displayed.")),(0,r.kt)("p",null,"The following can be used as a template:"),(0,r.kt)("h3",{id:"indexhtml"},"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n    <script src=\"script.js\"><\/script>\n</head>\n\n<body>\n    <div id=\"down\" style=\"background-color: red; width:640px; height: 288px; display: none;\">\n    </div>\n    <div id=\"stall\" style=\"background-color: green; width:640px; height: 288px; display: none;\">\n    </div>\n    <script>\n        let language = CustomInstallerUtils.getLanguage();\n        let installerState = CustomInstallerUtils.getInstallerState();\n\n        switch (installerState) {\n            case 'downloading':\n                let downElement = document.getElementById('down');\n                downElement.innerHTML = 'downloading, language is ' + language;\n                downElement.style.display = 'block';\n                break;\n            case 'installing':\n                let stallElement = document.getElementById('stall');\n                stallElement.innerHTML = \u2018Installing, language is ' + language;\n                stallElement.style.display = 'block';\n                break;\n        }\n        CustomInstallerUtils.notifyReady();\n    <\/script>\n</body>\n\n</html>\n")),(0,r.kt)("h3",{id:"scriptjs"},"script.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function getUrlParameterByName(name) {\n    var regex, results;\n    name = name.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");\n    regex = new RegExp("[\\\\?&]" + name + "=([^&#]*)");\n    results = regex.exec(location.search);\n    return results === null ? "" : decodeURIComponent(results[1].replace(/\\+/g, " "));\n}\nwindow.CustomInstallerUtils = {\n    /**\n     * This function will notify the installer that the page is ready\n     */\n    notifyReady: function() {\n        parent.postMessage({\n            isLoaded: true\n        }, "*");\n    },\n    /**\n     * Returns the state/phase of the installer\n     * Possible values:\n     * \'downloading\'\n     * \'installing\'\n     */\n    getInstallerState: function() {\n        return getUrlParameterByName(\'state\');\n    },\n    /**\n     * Will get the selected language\n     * Possible values:\n     * en - English\n     * pt - Portuguese\n     * de - Deutsch\n     * ko - Korean\n     */\n    getLanguage: function() {\n        return getUrlParameterByName(\'lang\')\n    }\n}\n')),(0,r.kt)("h2",{id:"2--upload-files-to-overwolf"},"2.  Upload files to Overwolf"),(0,r.kt)("p",null,"Overwolf does the next steps:\nPlease send the files to your dev rel manager or ",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com"),", and we will build your custom installer and update you when it's ready."),(0,r.kt)("h2",{id:"3-download-and-install"},"3. Download and install"),(0,r.kt)("p",null,"Download your app from the ",(0,r.kt)("a",{href:"https://www.overwolf.com/appstore",target:"_blank"},"Overwolf Store"),". The installer should display the custom content."))}m.isMDXComponent=!0},59368:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-1-3c3b13b468b9725445d81c653aec38b3.png"},31833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-2-6b701a3d3268cac16cbeabcdc8e6cef9.png"},86836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-3-6e8c0ddc9c492ef9f86064f0d1ad2da1.png"},69005:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-4-14e201768d46aff48670244b8a071f97.png"}}]);