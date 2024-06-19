"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9904],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?o.createElement(f,p(p({ref:t},u),{},{components:a})):o.createElement(f,p({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<n;l++)p[l]=a[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(25773),r=a(27378),n=a(35318);const p=e=>{const{loginUrl:t,createAccountUrl:a}=e;return r.createElement("section",{className:"submit-account-buttons"},r.createElement("a",{href:a,className:"btn-primary has-icon",target:"_blank"},"Create account to submit",r.createElement("svg",null,r.createElement("use",{href:"../../img/sprite.svg#external-url"}))),r.createElement("p",null,"Already have an account? ",r.createElement("a",{className:"external-icon",href:t,target:"_blank"},"Log in",r.createElement("svg",null,r.createElement("use",{href:"../../img/sprite.svg#external-url"})))," ","and submit your proposal now!"))},i={id:"submit-app-proposal",image:"/img/embed/getting-started.jpg",title:"Submitting an App Proposal",sidebar_label:"Submit App Proposal",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,l={unversionedId:"start/getting-started/submit-app-proposal",id:"start/getting-started/submit-app-proposal",title:"Submitting an App Proposal",description:"So, you have a great idea for an Overwolf application. What's next?",source:"@site/../pages/start/getting-started/submit-app-proposal.mdx",sourceDirName:"start/getting-started",slug:"/start/getting-started/submit-app-proposal",permalink:"/start/getting-started/submit-app-proposal",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/getting-started/submit-app-proposal.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1718791002,formattedLastUpdatedAt:"Jun 19, 2024",frontMatter:{id:"submit-app-proposal",image:"/img/embed/getting-started.jpg",title:"Submitting an App Proposal",sidebar_label:"Submit App Proposal",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"SDK Introduction",permalink:"/start/getting-started/sdk-introduction"},next:{title:"Using The Dev Tools",permalink:"/start/getting-started/using-dev-tools"}},u={},c=[{value:"Before you start",id:"before-you-start",level:3},{value:"Prepare your proposal",id:"prepare-your-proposal",level:3},{value:"Submit Your Proposal",id:"submit-your-proposal",level:3},{value:"What happens next?",id:"what-happens-next",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"So, you have a great idea for an Overwolf application. What's next?")),(0,n.kt)("p",null,"We find that apps turn out much better the more feedback and experience are involved, and we are always glad to share ours with aspiring developers.",(0,n.kt)("br",{parentName:"p"}),"\n","This also helps with ensuring that your idea is ",(0,n.kt)("a",{parentName:"p",href:"/start/getting-started/game-compliance"},"compliant")," with the relevant game(s), before you even write a single line of code!"),(0,n.kt)("p",null,"And so, before you begin, we want to see what you've thought up. It can be anything from a simple summary,\nto the general idea, to a list of planned features, UI demonstrations, or even some live, working mockups."),(0,n.kt)("p",null,"The goal here is to understand what your app is about before you invest too much time and effort into development -\na simple one day change during planning could take several months later down the road."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You don't need to have a registered business to - work on, apply for funding for, and even earn money from - an Overwolf app.\nThe Overwolf platform welcomes creators of all types and sizes, from solo developers to small casual teams to entire companies.")),(0,n.kt)("h3",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"If you want to take a deeper look at the Overwolf platform - no worries, we've got you covered."),(0,n.kt)("p",null,"To get started, feel free to check out the ",(0,n.kt)("a",{parentName:"p",href:"/start/basic-app/front-app"},"Overwolf Front App"),", so you can get a better idea of the platform's capabilities/common app patterns."),(0,n.kt)("p",null,"Still have more questions? Feel free to ",(0,n.kt)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),", or join ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/overwolf-developers"},"the developers discord")," where you can get help from experts in the community."),(0,n.kt)("h3",{id:"prepare-your-proposal"},"Prepare your proposal"),(0,n.kt)("admonition",{title:"Want to refine your proposal even further?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.overwolf.com/appstore"},"Take a look at what\u2019s already out there")," - especially apps with similar features/ideas.\nThink of what your app can do better, or what it can offer that other apps don\u2019t, and capitalize on that.")),(0,n.kt)("p",null,"Submitting your app concept for review is easy - since we\u2019re not looking for a complete set of technical documents just yet.\nInstead, the goal at this stage is to create a clear, concise description of what the app is and how it will work for gamers.",(0,n.kt)("br",{parentName:"p"}),"\n","It also helps if you can already show a basic specification of which apis you plan to utilize for different features,\nand if you even have any mockups of your planned User Interface."),(0,n.kt)("p",null,"This proposal (and the app itself) must be made in English, although you may freely support as many other languages as you want in the final app."),(0,n.kt)("h3",{id:"submit-your-proposal"},"Submit Your Proposal"),(0,n.kt)("admonition",{title:"Legal",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To register your app proposal with Overwolf's Developer Relations team, you must ",(0,n.kt)("a",{parentName:"p",href:"https://www.overwolf.com/app-proposal-submission-form/login-form#login"},"log in")," with an Overwolf account*.")),(0,n.kt)("p",null,"Once you've registered your idea, you will be able to communicate with our team for help, reviews, release approvals, and more."),(0,n.kt)(p,{loginUrl:"https://www.overwolf.com/app-proposal-submission-form/login-form#login",createAccountUrl:"https://www.overwolf.com/app-proposal-submission-form/login-form",mdxType:"SubmitAccountButtons"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"*","You do not need to be part of (or acting on behalf of) a registered business or company to work on (and make money from) Overwolf apps - Overwolf is open to independent developers and companies alike.")),(0,n.kt)("h2",{id:"what-happens-next"},"What happens next?"),(0,n.kt)("p",null,"We will review your proposal internally and reach back within 4 business days to provide feedback -\nincluding whether Overwolf approves or rejects your idea in its current form for the Overwolf platform."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"your-app-was-approved"},"Your app was approved:"),(0,n.kt)("p",{parentName:"li"},"Great job! We think you'll be a great fit for the Overwolf ecosystem, and now the real fun begins! You are ready to start ",(0,n.kt)("a",{parentName:"p",href:"/start/getting-started/app-creation-process#build"},"Building")," your app!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"your-app-was-rejected"},"Your app was rejected:"),(0,n.kt)("p",{parentName:"li"},"  As it is, the app concept you have submitted won't fit our Appstore, because of the reasons detailed in the rejection. If you are fine with it,\nand it is plausible, we encourage you to try and incorporate this feedback into the idea, so you can submit it again for further review."),(0,n.kt)("p",{parentName:"li"},"  However, you may also decide that this feedback strays too far from your original idea. In those cases, while we wish you luck with it, we are unable\nto proceed with you on ",(0,n.kt)("em",{parentName:"p"},"this specific")," app."),(0,n.kt)("p",{parentName:"li"},"  Regardless of that, our door is always open for any other app ideas you may have, and we look forward to your future endeavors!"))))}d.isMDXComponent=!0}}]);