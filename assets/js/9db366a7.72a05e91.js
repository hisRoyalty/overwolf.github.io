"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3309],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(25773),r=(n(27378),n(35318));const i={id:"dxdiag",image:"/img/embed/api-best-practices.jpg",title:"DxDiag",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},a=void 0,s={unversionedId:"topics/understanding-overwolf-logs/dxdiag",id:"topics/understanding-overwolf-logs/dxdiag",title:"DxDiag",description:"This log is not an Overwolf log but one found on any Windows computer. DxDiag is a diagnostics tool used to test DirectX functionality and troubleshoot video- or sound-related hardware problems.",source:"@site/../pages/topics/understanding-overwolf-logs/dxdiag.mdx",sourceDirName:"topics/understanding-overwolf-logs",slug:"/topics/understanding-overwolf-logs/dxdiag",permalink:"/topics/understanding-overwolf-logs/dxdiag",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/understanding-overwolf-logs/dxdiag.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720505909,formattedLastUpdatedAt:"Jul 9, 2024",sidebarPosition:50,frontMatter:{id:"dxdiag",image:"/img/embed/api-best-practices.jpg",title:"DxDiag",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"OverwolfPerf",permalink:"/topics/understanding-overwolf-logs/overwolfperf"},next:{title:"Using game events in your app",permalink:"/topics/using-events/"}},l={},d=[{value:"In the DxDiag log it is important to check the following:",id:"in-the-dxdiag-log-it-is-important-to-check-the-following",level:4},{value:"When investigating recording issues check:",id:"when-investigating-recording-issues-check",level:4},{value:"Request the log from users",id:"request-the-log-from-users",level:4},{value:"Find the same info in other logs",id:"find-the-same-info-in-other-logs",level:4}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This log is not an Overwolf log but one found on any Windows computer. DxDiag is a diagnostics tool used to test DirectX functionality and troubleshoot video- or sound-related hardware problems. "),(0,r.kt)("h4",{id:"in-the-dxdiag-log-it-is-important-to-check-the-following"},"In the DxDiag log it is important to check the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS and build- Make sure that the user is up to date"),(0,r.kt)("li",{parentName:"ul"},"Processor- Make sure they meet the ",(0,r.kt)("a",{parentName:"li",href:"https://support.overwolf.com/en/support/solutions/articles/9000177155-general-issues-and-solutions#minimum"},"Overwolf Minimum Requirements")," "),(0,r.kt)("li",{parentName:"ul"},"Memory and available OS memory"),(0,r.kt)("li",{parentName:"ul"},"User and system DPI settings- If the DPI setting on their system is over 100% (mostly for 4K monitors) send them our guide for ",(0,r.kt)("a",{parentName:"li",href:"https://support.overwolf.com/en/support/solutions/articles/9000176964-scaling-overwolf-apps-to-appear-properly-with-a-high-dpi-setting"},"Scaling Overwolf Apps")," to Appear Properly with a High DPI Setting")),(0,r.kt)("h4",{id:"when-investigating-recording-issues-check"},"When investigating recording issues check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Display device card name and driver version version- Make sure it meets the ",(0,r.kt)("a",{parentName:"p",href:"https://support.overwolf.com/en/support/solutions/articles/9000178267-overwolf-recording-minimum-requirements"},"Overwolf Recording Minimum Requirements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sound devices- Make sure that the sound devices are the same ones set in the Overwolf Settings"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1",src:n(82346).Z,width:"757",height:"518"})),(0,r.kt)("h4",{id:"request-the-log-from-users"},"Request the log from users"),(0,r.kt)("p",null,"The DxDiag file is usually automatically added to the Overwolf log. However, at times you may need to request that users send it manually."),(0,r.kt)("p",null,"You can use the following canned comment to request this from your users:"),(0,r.kt)("p",null,"You can extract this info by doing the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press the Windows key + R"),(0,r.kt)("li",{parentName:"ol"},'Type dxdiag and click on OK. The "DirectX Diagnostic Tool" window should pop up.'),(0,r.kt)("li",{parentName:"ol"},'In the new window choose "Save all information".'),(0,r.kt)("li",{parentName:"ol"},"After you save the file, please attach it to your reply here.")),(0,r.kt)("p",null,"Video guide: ",(0,r.kt)("a",{parentName:"p",href:"https://www.hippovideo.io/video/play/VUI7E8-cy7fMzGG30VeRPg=="},"https://www.hippovideo.io/video/play/VUI7E8-cy7fMzGG30VeRPg==")),(0,r.kt)("h4",{id:"find-the-same-info-in-other-logs"},"Find the same info in other logs"),(0,r.kt)("p",null,"In the Trace logs you can find the OS and display Device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(INFO) (UI) LoginSession - Initializing Login Session (Windows 10 64-bit, .NET 4.8, 10.0.19041.804) (INFO) [ 9] <>c - Override GPU Info with dxdiag (Intel (R)  UHD Graphics, NVIDIA GeForce GTX 1650 Ti, ] -> [Inter (R)  UHD Graphics, NVIDIA GeForce GTX 1650 Ti, ]\n")),(0,r.kt)("p",null,"In the OBS logs you can find information on the processor, memory, OS version & build, antivirus, firewalls, audio devices, screen resolution, display device and video settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"10:22:07.823(INFO)[8958]: CPU Name: Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz\n10:22:07.823(INFO)[8958]: CPU Speed: 2592MHz\n10:22:07.823(INFO)[8958]: Physical Cores: 6, Logical Cores: 12\n10:22:07.823(INFO)[8958]: Physical Memory: 16171MB Total, 694MB Free\n10:22:07.823(INFO)[8958]: Windows Version: 10.0 Build 19043 (release: 2009; revision: 1110; 64-bit)\n10:22:07.823(INFO)[8958]: Running as administrator: false\n10:22:07.823(INFO)[8958]: Aero is Enabled (Aero is always on for windows 8 and above)\n10:22:07.824(INFO)[8958]: Windows 10 Gaming Features:\n10:22:07.824(INFO)[8958]:   Game DVR: On\n10:22:07.824(INFO)[8958]:   Game Mode: On\n10:22:07.826(INFO)[8958]: Sec. Software Status:\n10:22:07.827(INFO)[8958]:   ESET Security: enabled (AV)\n10:22:07.827(INFO)[8958]:   Microsoft Defender Antivirus: disabled (AV)\n10:22:07.827(INFO)[8958]:   ESET Firewall: enabled (FW)\n10:22:07.827(INFO)[8958]:   Windows Firewall: disabled (FW)\n10:22:07.828(INFO)[8958]: ---------------------------------\n10:22:07.828(INFO)[8958]: audio settings reset:\n10:22:07.828(INFO)[8958]:   samples per sec: 44100\n10:22:07.828(INFO)[8958]:   speakers:        2\n10:22:07.828(INFO)[8958]: ---------------------------------\n10:22:07.828(INFO)[8958]: ow-obs video settings reset:\n10:22:07.828(INFO)[8958]:   base resolution:   1920x1080\n10:22:07.828(INFO)[8958]:   output resolution: 1920x1080\n10:22:07.828(INFO)[8958]:   fps:               30\n10:22:07.828(INFO)[8958]: \n10:22:07.830(INFO)[8958]: ---------------------------------\n10:22:07.830(INFO)[8958]: Initializing D3D11...\n10:22:07.830(INFO)[8958]: Available Video Adapters: \n10:22:07.832(INFO)[8958]:   Adapter 0: NVIDIA GeForce GTX 1650 Ti\n10:22:07.832(INFO)[8958]:     Dedicated VRAM: 4154458112\n10:22:07.832(INFO)[8958]:     Shared VRAM:    4183293952\n10:22:07.832(INFO)[8958]:     PCI ID:         10de:1f95\n10:22:07.832(INFO)[8958]:     Driver Version: 27.21.14.5763\n10:22:07.833(INFO)[8958]:     output 0: pos={0, 0}, size={1920, 1080}, attached=true, refresh=60, name=DELL P2419H\n10:22:07.833(INFO)[8958]:     output 1: pos={-1920, 0}, size={1920, 1080}, attached=true, refresh=60, name=DELL P2419H\n10:22:07.833(INFO)[8958]:   Adapter 1: Intel(R) UHD Graphics\n10:22:07.833(INFO)[8958]:     Dedicated VRAM: 134217728\n10:22:07.833(INFO)[8958]:     Shared VRAM:    4183293952\n10:22:07.833(INFO)[8958]:     PCI ID:         8086:9bc4\n10:22:07.833(INFO)[8958]:     Driver Version: 26.20.100.7985\n10:22:07.833(INFO)[8958]:     output 0: pos={1920, 0}, size={1920, 1080}, attached=true, refresh=144, name=\n10:22:07.835(INFO)[8958]: Loading up D3D11 on adapter NVIDIA GeForce GTX 1650 Ti (0)\n10:22:07.899(INFO)[8958]: D3D11 loaded successfully, feature level used: b000\n10:22:07.899(INFO)[8958]: DXGI increase maximum frame latency success\n10:22:08.445(INFO)[8958]: ---------------------------------\n10:22:08.445(INFO)[8958]: video settings reset:\n10:22:08.445(INFO)[8958]:   base resolution:   1920x1080\n10:22:08.445(INFO)[8958]:   output resolution: 1920x1080\n10:22:08.445(INFO)[8958]:   downscale filter:  Bicubic\n10:22:08.445(INFO)[8958]:   fps:               30/1\n10:22:08.445(INFO)[8958]:   format:            NV12\n10:22:08.445(INFO)[8958]:   YUV mode:          709/Partial\n10:22:08.445(INFO)[8958]: NV12 texture support enabled\n")))}u.isMDXComponent=!0},82346:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-e7691c4503ef4205d16645082f4d5996.png"}}]);