"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7474],{35318:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,l({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(o,".").concat(c)]||d[c]||g[c]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const l={id:"custom-installer-for-your-app",image:"/img/embed/getting-started.jpg",title:"Custom Installer",sidebar_label:"Custom Installer",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,s={unversionedId:"start/submit-your-app/custom-installer-for-your-app",id:"start/submit-your-app/custom-installer-for-your-app",title:"Custom Installer",description:"Customizing Your App Installer",source:"@site/pages/docs/start/submit-your-app/custom-installer-for-your-app.mdx",sourceDirName:"start/submit-your-app",slug:"/start/submit-your-app/custom-installer-for-your-app",permalink:"/start/submit-your-app/custom-installer-for-your-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/submit-your-app/custom-installer-for-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"custom-installer-for-your-app",image:"/img/embed/getting-started.jpg",title:"Custom Installer",sidebar_label:"Custom Installer",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Submit Your App",permalink:"/start/submit-your-app/"},next:{title:"App Automation",permalink:"/start/test-your-app/app-automation"}},i={},p=[{value:"Customizing Your App Installer",id:"customizing-your-app-installer",level:2},{value:"1. Create HTML file",id:"1-create-html-file",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"script.js",id:"scriptjs",level:3},{value:"2.  Upload files to Overwolf",id:"2--upload-files-to-overwolf",level:2},{value:"3. Download and install",id:"3-download-and-install",level:2}],d=(u="ImageSlider",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var u;const c={toc:p};function m(e){let{components:t,...l}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"customizing-your-app-installer"},"Customizing Your App Installer"),(0,a.mdx)("p",null,"Overwolf supports per-app custom installer pages.\nTo use this feature, third party developers need to create HTML pages to be displayed during the installation process. This document will specify the steps needed to create a custom installation\nexperience."),(0,a.mdx)(d,{mdxType:"ImageSlider"},(0,a.mdx)("img",{src:n(59671).Z,alt:"Facecheck"}),(0,a.mdx)("img",{src:n(75568).Z,alt:"Facecheck"}),(0,a.mdx)("img",{src:n(77894).Z,alt:"Facecheck Installer"}),(0,a.mdx)("img",{src:n(24659).Z,alt:"Facecheck Installer"})),(0,a.mdx)("h2",{id:"1-create-html-file"},"1. Create HTML file"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'Create the HTML page you wish to display during the installation and name it "index.html".'),(0,a.mdx)("li",{parentName:"ul"},"There are 2 distinct phases to the installation process: downloading and installing."),(0,a.mdx)("li",{parentName:"ul"},"The maximum element size is 640px x 288px."),(0,a.mdx)("li",{parentName:"ul"},"For each phase, different content can be displayed.")),(0,a.mdx)("p",null,"The following can be used as a template:"),(0,a.mdx)("h3",{id:"indexhtml"},"index.html"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n    <script src=\"script.js\"><\/script>\n</head>\n\n<body>\n    <div id=\"down\" style=\"background-color: red; width:640px; height: 288px; display: none;\">\n    </div>\n    <div id=\"stall\" style=\"background-color: green; width:640px; height: 288px; display: none;\">\n    </div>\n    <script>\n        let language = CustomInstallerUtils.getLanguage();\n        let installerState = CustomInstallerUtils.getInstallerState();\n\n        switch (installerState) {\n            case 'downloading':\n                let downElement = document.getElementById('down');\n                downElement.innerHTML = 'downloading, language is ' + language;\n                downElement.style.display = 'block';\n                break;\n            case 'installing':\n                let stallElement = document.getElementById('stall');\n                stallElement.innerHTML = \u2018Installing, language is ' + language;\n                stallElement.style.display = 'block';\n                break;\n        }\n        CustomInstallerUtils.notifyReady();\n    <\/script>\n</body>\n\n</html>\n")),(0,a.mdx)("h3",{id:"scriptjs"},"script.js"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'function getUrlParameterByName(name) {\n    var regex, results;\n    name = name.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");\n    regex = new RegExp("[\\\\?&]" + name + "=([^&#]*)");\n    results = regex.exec(location.search);\n    return results === null ? "" : decodeURIComponent(results[1].replace(/\\+/g, " "));\n}\nwindow.CustomInstallerUtils = {\n    /**\n     * This function will notify the installer that the page is ready\n     */\n    notifyReady: function() {\n        parent.postMessage({\n            isLoaded: true\n        }, "*");\n    },\n    /**\n     * Returns the state/phase of the installer\n     * Possible values:\n     * \'downloading\'\n     * \'installing\'\n     */\n    getInstallerState: function() {\n        return getUrlParameterByName(\'state\');\n    },\n    /**\n     * Will get the selected language\n     * Possible values:\n     * en - English\n     * pt - Portuguese\n     * de - Deutsch\n     * ko - Korean\n     */\n    getLanguage: function() {\n        return getUrlParameterByName(\'lang\')\n    }\n}\n')),(0,a.mdx)("h2",{id:"2--upload-files-to-overwolf"},"2.  Upload files to Overwolf"),(0,a.mdx)("p",null,"Overwolf does the next steps:\nPlease send the files to your dev rel manager or ",(0,a.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com"),", and we will build your custom installer and update you when it's ready."),(0,a.mdx)("h2",{id:"3-download-and-install"},"3. Download and install"),(0,a.mdx)("p",null,"Download your app from the ",(0,a.mdx)("a",{href:"https://www.overwolf.com/appstore",target:"_blank"},"Overwolf Store"),". The installer should display the custom content."))}m.isMDXComponent=!0},59671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-1-3c3b13b468b9725445d81c653aec38b3.png"},24659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-2-6b701a3d3268cac16cbeabcdc8e6cef9.png"},75568:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3-6e8c0ddc9c492ef9f86064f0d1ad2da1.png"},77894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-4-14e201768d46aff48670244b8a071f97.png"}}]);