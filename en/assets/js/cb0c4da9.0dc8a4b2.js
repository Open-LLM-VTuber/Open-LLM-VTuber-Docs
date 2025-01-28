"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2857],{8413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-guide/backend/translate","title":"Translation","description":"Translation Feature","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/user-guide/backend/translate.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/translate","permalink":"/en/docs/user-guide/backend/translate","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/translate.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docSidebar","previous":{"title":"Speech Synthesis (TTS)","permalink":"/en/docs/user-guide/backend/tts"},"next":{"title":"Docker Deployment","permalink":"/en/docs/user-guide/backend/docker"}}');var r=t(4848),s=t(8453);const o={sidebar_position:7},a="Translation",d={},l=[{value:"Translation Feature",id:"translation-feature",level:3},{value:"DeepLX Configuration Steps",id:"deeplx-configuration-steps",level:3},{value:"Contributing",id:"contributing",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"translation",children:"Translation"})}),"\n",(0,r.jsx)(n.h3,{id:"translation-feature",children:"Translation Feature"}),"\n",(0,r.jsx)(n.p,{children:"The translation feature is implemented to enable the program to communicate in a language different from the conversation language."}),"\n",(0,r.jsx)(n.p,{children:"For example, the LLM might be thinking in English, the subtitles are in English, and you're speaking English, but the LLM's voice is in Japanese. This is achieved by translating the sentences before sending the audio generation request."}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the only supported translation backend is ",(0,r.jsx)(n.a,{href:"https://github.com/OwO-Network/DeepLX",children:"DeepLX"}),". You need to deploy the DeepLX service and configure it in ",(0,r.jsx)(n.code,{children:"conf.yaml"})," to use it."]}),"\n",(0,r.jsx)(n.h3,{id:"deeplx-configuration-steps",children:"DeepLX Configuration Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Install and deploy the DeepLX service. Documentation can be found here: ",(0,r.jsx)(n.a,{href:"https://deeplx.owo.network/",children:"https://deeplx.owo.network/"})]}),"\n",(0,r.jsxs)(n.li,{children:["At the bottom of ",(0,r.jsx)(n.code,{children:"conf.yaml"}),", set ",(0,r.jsx)(n.code,{children:"translate_audio"})," under ",(0,r.jsx)(n.code,{children:"translator_config"})," to True"]}),"\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"deeplx_target_lang"})," to your desired language. Make sure this language matches the language of the TTS speaker (e.g., if ",(0,r.jsx)(n.code,{children:"deeplx_target_lang"}),' is "JA" for Japanese, then the TTS should also speak Japanese).']}),"\n",(0,r.jsxs)(n.li,{children:["Confirm that the DeepLX service is running, locate the endpoint where the server is running, and fill in the DeepLX service endpoint in ",(0,r.jsx)(n.code,{children:"deeplx_api_endpoint"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to contribute more translation models or translation APIs to the project, they are located in the ",(0,r.jsx)(n.code,{children:"translate"})," directory, and the process is very similar to adding new TTS or ASR."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);