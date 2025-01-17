"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2814],{5790:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"quick-start","title":"\u5feb\u901f\u5f00\u59cb","description":"\u672c\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5feb\u901f\u90e8\u7f72\u5e76\u8fd0\u884c Open-LLM-VTuber \u9879\u76ee\u3002","source":"@site/docs/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u9879\u76ee\u7b80\u4ecb","permalink":"/docs/intro"},"next":{"title":"\u7528\u6237\u6307\u5357","permalink":"/docs/category/\u7528\u6237\u6307\u5357"}}');var i=l(4848),r=l(8453),a=l(1306),t=l(9329);const c={sidebar_position:2},d="\u5feb\u901f\u5f00\u59cb",o={},h=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u5b89\u88c5 FFmpeg",id:"\u5b89\u88c5-ffmpeg",level:3},{value:"NVIDIA GPU \u652f\u6301",id:"nvidia-gpu-\u652f\u6301",level:3},{value:"Windows \u5b89\u88c5\u6b65\u9aa4:",id:"windows-\u5b89\u88c5\u6b65\u9aa4",level:4},{value:"\u9a8c\u8bc1\u5b89\u88c5:",id:"\u9a8c\u8bc1\u5b89\u88c5",level:4},{value:"Python \u73af\u5883\u7ba1\u7406",id:"python-\u73af\u5883\u7ba1\u7406",level:3},{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"1. \u83b7\u53d6\u9879\u76ee\u4ee3\u7801",id:"1-\u83b7\u53d6\u9879\u76ee\u4ee3\u7801",level:3},{value:"2. \u521b\u5efa\u865a\u62df\u73af\u5883",id:"2-\u521b\u5efa\u865a\u62df\u73af\u5883",level:3},{value:"3. \u914d\u7f6e LLM",id:"3-\u914d\u7f6e-llm",level:3},{value:"\u5b89\u88c5 Ollama",id:"\u5b89\u88c5-ollama",level:4},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:4},{value:"4. \u542f\u52a8\u9879\u76ee",id:"4-\u542f\u52a8\u9879\u76ee",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5",id:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"})}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u5feb\u901f\u90e8\u7f72\u5e76\u8fd0\u884c Open-LLM-VTuber \u9879\u76ee\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6307\u5357\u90e8\u7f72\u7684\u914d\u7f6e\u4e3a Ollama + sherpa-onnx-asr (SenseVoiceSmall) + edgeTTS\u3002\u5982\u9700\u6df1\u5165\u5b9a\u5236\uff0c\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/category/%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97",children:"\u7528\u6237\u6307\u5357"}),"\u7684\u76f8\u5173\u7ae0\u8282\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u5982\u679c\u7528 OpenAI Compatible API \u4ee3\u66ff Ollama\uff0c\u7528 Groq Whisper API \u4ee3\u66ff sherpa-onnx-asr (SenseVoiceSmall)\uff0c\u90a3\u4e48\u53ea\u9700\u914d\u7f6e API Key \u5373\u53ef\u4f7f\u7528\uff0c\u65e0\u9700\u4e0b\u8f7d\u6a21\u578b\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u5bf9\u672c\u5730 GPU \u8fdb\u884c\u914d\u7f6e\u3002"})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u5173\u4e8e\u4ee3\u7406",type:"danger",children:[(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u662f\u4e2d\u56fd\u5927\u9646\uff0c\u5efa\u8bae\u4f60\u5f00\u542f\u4ee3\u7406\u540e\u518d\u4f7f\u7528\u672c\u9879\u76ee\uff0c\u786e\u4fdd\u80fd\u987a\u5229\u4e0b\u8f7d\u6240\u6709\u8d44\u6e90\u3002"}),(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9047\u5230\u5f00\u542f\u4ee3\u7406\u540e\u672c\u5730\u670d\u52a1\u65e0\u6cd5\u8bbf\u95ee\uff0c\u5982 ollama\u3001deeplx\u3001gptsovits \u7b49\uff0c\u4f46\u5173\u95ed\u4ee3\u7406\u540e\u5c31\u80fd\u8bbf\u95ee\u3002\u8bf7\u4f60\u786e\u4fdd\u4f60\u7684\u4ee3\u7406\u7ed5\u8fc7\u672c\u5730\u5730\u5740 (localhost)\uff0c\u6216\u8005\u518d\u6240\u6709\u8d44\u6e90\u4e0b\u8f7d\u5b8c\u6bd5\u540e\u5173\u95ed\u4ee3\u7406\u8fdb\u884c\u4f7f\u7528\u3002\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://www.clashverge.dev/guide/bypass.html#_3",children:"\u8bbe\u7f6e\u4ee3\u7406\u7ed5\u8fc7\n"}),"\u3002"]}),(0,i.jsx)(n.p,{children:"Groq Whisper API\u3001OpenAI API \u7b49\u56fd\u5916\u5927\u6a21\u578b/\u63a8\u7406\u5e73\u53f0 API \u4e00\u822c\u65e0\u6cd5\u4f7f\u7528\u9999\u6e2f\u5730\u533a\u7684\u4ee3\u7406\u3002"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5-ffmpeg",children:"\u5b89\u88c5 FFmpeg"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"FFmpeg \u662f\u5fc5\u9700\u7684\u4f9d\u8d56\u9879\u3002\u6ca1\u6709 FFmpeg \u4f1a\u5bfc\u81f4\u627e\u4e0d\u5230\u97f3\u9891\u6587\u4ef6\u7684\u9519\u8bef\u3002"})}),"\n",(0,i.jsxs)(a.A,{groupId:"operating-systems",children:[(0,i.jsx)(t.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c\nwinget install ffmpeg\n"})})}),(0,i.jsx)(t.A,{value:"macos",label:"macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# \u5982\u679c\u6ca1\u6709\u5b89\u88c5 Homebrew\uff0c\u8bf7\u5148\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff0c\u6216\u8005\u53c2\u8003 https://brew.sh/zh-cn/ \u8fdb\u884c\u5b89\u88c5\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# \u5b89\u88c5 ffmpeg\nbrew install ffmpeg\n'})})}),(0,i.jsx)(t.A,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Ubuntu/Debian\nsudo apt install ffmpeg\n\n# CentOS/RHEL\nsudo dnf install ffmpeg\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"nvidia-gpu-\u652f\u6301",children:"NVIDIA GPU \u652f\u6301"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6709 NVIDIA \u663e\u5361\u5e76\u5e0c\u671b\u4f7f\u7528 GPU \u8fd0\u884c\u672c\u5730\u6a21\u578b\uff0c\u4f60\u9700\u8981:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b89\u88c5 NVIDIA \u663e\u5361\u9a71\u52a8"}),"\n",(0,i.jsx)(n.li,{children:"\u5b89\u88c5 CUDA Toolkit (\u63a8\u8350 11.8 \u6216\u66f4\u9ad8\u7248\u672c)"}),"\n",(0,i.jsx)(n.li,{children:"\u5b89\u88c5\u5bf9\u5e94\u7248\u672c\u7684 cuDNN"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"windows-\u5b89\u88c5\u6b65\u9aa4",children:"Windows \u5b89\u88c5\u6b65\u9aa4:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u8def\u5f84\u4ec5\u4f9b\u53c2\u8003\uff0c\u9700\u8981\u6839\u636e\u7248\u672c\u548c\u5b9e\u9645\u5b89\u88c5\u8def\u5f84\u8fdb\u884c\u4fee\u6539\u3002"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u68c0\u67e5\u663e\u5361\u9a71\u52a8\u7248\u672c"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'\u53f3\u952e\u70b9\u51fb\u684c\u9762\uff0c\u9009\u62e9"NVIDIA \u63a7\u5236\u9762\u677f"'}),"\n",(0,i.jsx)(n.li,{children:"\u5e2e\u52a9 -> \u7cfb\u7edf\u4fe1\u606f -> \u7ec4\u4ef6\uff0c\u67e5\u770b\u9a71\u52a8\u7a0b\u5e8f\u7248\u672c"}),"\n",(0,i.jsxs)(n.li,{children:["\u6216\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://www.nvidia.cn/drivers/lookup/",children:"NVIDIA \u9a71\u52a8\u4e0b\u8f7d\u9875\u9762"})," \u4e0b\u8f7d\u6700\u65b0\u9a71\u52a8"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b89\u88c5 CUDA Toolkit"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",children:"CUDA \u7248\u672c\u5bf9\u5e94\u5173\u7cfb"})," \u67e5\u770b\u9a71\u52a8\u7248\u672c\u652f\u6301\u7684 CUDA \u7248\u672c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-toolkit-archive",children:"CUDA Toolkit \u4e0b\u8f7d\u9875\u9762"})," \u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\u5c06\u4ee5\u4e0b\u8def\u5f84\u6dfb\u52a0\u5230\u7cfb\u7edf\u73af\u5883\u53d8\u91cf PATH \u4e2d:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"C:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<\u7248\u672c\u53f7>\\bin\nC:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<\u7248\u672c\u53f7>\\lib\\x64\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b89\u88c5 cuDNN"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cudnn",children:"cuDNN \u4e0b\u8f7d\u9875\u9762"}),"\uff08\u9700\u8981\u6ce8\u518c NVIDIA \u8d26\u53f7\uff09"]}),"\n",(0,i.jsx)(n.li,{children:"\u4e0b\u8f7d\u4e0e CUDA \u7248\u672c\u5339\u914d\u7684 cuDNN"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u538b\u540e\u5c06\u6587\u4ef6\u590d\u5236\u5230 CUDA \u5b89\u88c5\u76ee\u5f55:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"cuda/bin"})," \u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230 ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<\u7248\u672c\u53f7>\\bin"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"cuda/include"})," \u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230 ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<\u7248\u672c\u53f7>\\include"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"cuda/lib/x64"})," \u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230 ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<\u7248\u672c\u53f7>\\lib\\x64"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u9a8c\u8bc1\u5b89\u88c5",children:"\u9a8c\u8bc1\u5b89\u88c5:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u68c0\u67e5\u9a71\u52a8\u5b89\u88c5:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvidia-smi\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u68c0\u67e5 CUDA \u5b89\u88c5:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvcc --version\n"})}),"\n",(0,i.jsx)(n.h3,{id:"python-\u73af\u5883\u7ba1\u7406",children:"Python \u73af\u5883\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece v1.0.0 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://docs.astral.sh/uv/",children:"uv"})," \u4f5c\u4e3a\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u66f4\u5e0c\u671b\u4f7f\u7528 conda \u6216 venv\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5de5\u5177\u3002\u9879\u76ee\u5b8c\u5168\u517c\u5bb9\u6807\u51c6\u7684 pip \u5b89\u88c5\u65b9\u5f0f\u3002"})}),"\n",(0,i.jsxs)(a.A,{groupId:"operating-systems",children:[(0,i.jsx)(t.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'# \u65b9\u6cd5 1: PowerShell\npowershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"\n\n# \u65b9\u6cd5 2: winget\nwinget install --id=astral-sh.uv -e\n'})})}),(0,i.jsx)(t.A,{value:"unix",label:"macOS/Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -LsSf https://astral.sh/uv/install.sh | sh\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a uv \u5b89\u88c5\u65b9\u6cd5\u53c2\u8003\uff1a",(0,i.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"Installing uv"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u90e8\u7f72\u6b65\u9aa4",children:"\u90e8\u7f72\u6b65\u9aa4"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u83b7\u53d6\u9879\u76ee\u4ee3\u7801",children:"1. \u83b7\u53d6\u9879\u76ee\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u5f00\u53d1\u7248\u8bf4\u660e",type:"info",children:[(0,i.jsxs)(n.p,{children:["\u76ee\u524d\u5904\u4e8e v1.0.0 \u5f00\u53d1\u9636\u6bb5\uff0c\u9700\u8981\u5207\u6362\u5230 ",(0,i.jsx)(n.code,{children:"superb-refactoring"})," \u5206\u652f\u3002"]}),(0,i.jsxs)(n.p,{children:["\u81ea ",(0,i.jsx)(n.code,{children:"v1.0.0"})," \u5f00\u59cb\uff0c\u524d\u7aef\u4ee3\u7801\u5df2\u88ab\u62c6\u5206\u5230\u72ec\u7acb\u4ed3\u5e93\u4e2d\u3002\u6211\u4eec\u5efa\u7acb\u4e86\u5b8c\u6574\u7684\u6784\u5efa\u6d41\u7a0b\uff0c\u5e76\u901a\u8fc7 git submodule \u5c06\u524d\u7aef\u4ee3\u7801\u94fe\u63a5\u5230\u4e3b\u4ed3\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"frontend"})," \u76ee\u5f55\u4e0b\u3002"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u514b\u9686\u4ed3\u5e93\ngit clone https://github.com/t41372/Open-LLM-VTuber\n\n# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd Open-LLM-VTuber\n\n# \u5207\u6362\u5230\u5f00\u53d1\u5206\u652f\ngit switch superb-refactoring\n\n# \u7531\u4e8e git submodule \u94fe\u63a5\u7684\u5185\u5bb9\u4e0d\u4f1a\u81ea\u52a8\u540c\u6b65\u5230\u672c\u5730\u76ee\u5f55\uff0c\u6211\u4eec\u9700\u8981\u624b\u52a8\u83b7\u53d6\u524d\u7aef\u4ee3\u7801\u3002\ngit submodule update --init --recursive\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-\u521b\u5efa\u865a\u62df\u73af\u5883",children:"2. \u521b\u5efa\u865a\u62df\u73af\u5883"}),"\n",(0,i.jsx)(n.p,{children:"\u786e\u8ba4 uv \u5df2\u6b63\u786e\u5b89\u88c5:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uv --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u73af\u5883\u5e76\u5b89\u88c5\u4f9d\u8d56:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u786e\u4fdd\u4f60\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4\nuv sync\n# \u8fd9\u4e2a\u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a `.venv` \u865a\u62df\u73af\u5883\uff0c\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u914d\u7f6e-llm",children:"3. \u914d\u7f6e LLM"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u4ee5 ",(0,i.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"Ollama"})," \u4e3a\u4f8b\u8fdb\u884c\u914d\u7f6e\u3002\u5176\u4ed6\u9009\u9879\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM \u914d\u7f6e\u6307\u5357"}),"\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{title:"\u5176\u4ed6\u9009\u9879",type:"info",children:[(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528 Ollama / \u5728 Ollama \u7684\u914d\u7f6e\u4e0a\u9047\u5230\u4e86\u96be\u4ee5\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u672c\u9879\u76ee\u4e5f\u652f\u6301\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenAI \u517c\u5bb9 API\uff08\u667a\u8c31\u3001DeepSeek\u3001OpenAI\u3001Gemini \u7b49\uff0c\u5982\u679c\u4f60\u6709 API Key\uff0c\u8fd9\u53ef\u80fd\u4f1a\u662f\u6700\u7b80\u5355\u7684\u65b9\u6848\uff09"}),"\n",(0,i.jsx)(n.li,{children:"LM Studio\uff08\u7c7b\u4f3c Ollama\uff0c\u4f7f\u7528\u66f4\u7b80\u5355\uff09"}),"\n",(0,i.jsx)(n.li,{children:"VLLM\uff08\u6027\u80fd\u66f4\u597d\uff0c\u914d\u7f6e\u8f83\u590d\u6742\uff09"}),"\n",(0,i.jsx)(n.li,{children:"llama.cpp\uff08\u76f4\u63a5\u8fd0\u884c .gguf \u683c\u5f0f\u6a21\u578b\uff09"}),"\n"]}),(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM \u914d\u7f6e"}),"\u3002"]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u5b89\u88c5-ollama",children:"\u5b89\u88c5 Ollama"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama \u5b98\u7f51"})," \u4e0b\u8f7d\u5e76\u5b89\u88c5"]}),"\n",(0,i.jsx)(n.li,{children:"\u9a8c\u8bc1\u5b89\u88c5:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama --version\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0b\u8f7d\u5e76\u8fd0\u884c\u6a21\u578b\uff08\u4ee5 ",(0,i.jsx)(n.code,{children:"qwen2.5:latest"})," \u4e3a\u4f8b\uff09\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama run qwen2.5:latest\n# \u8fd0\u884c\u6210\u529f\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u76f4\u63a5\u8ddf qwen2.5:latest \u5bf9\u8bdd\u4e86\n# \u53ef\u4ee5\u5148\u9000\u51fa\u804a\u5929\u754c\u9762 (Ctrl/Command + D)\n# \u4f46\u4e00\u5b9a\u4e0d\u8981\u5173\u95ed\u547d\u4ee4\u884c\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6a21\u578b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama list\n# NAME                ID              SIZE      MODIFIED\n# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u5bfb\u627e\u6a21\u578b\u540d\u65f6\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ollama list"})," \u547d\u4ee4\uff0c\u67e5\u770b ollama \u4e2d\u5df2\u4e0b\u8f7d\u7684\u6a21\u578b\uff0c\u5e76\u5c06\u6a21\u578b\u540d\u79f0\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u5230 ",(0,i.jsx)(n.code,{children:"model"})," \u9009\u9879\u4e0b\uff0c\u907f\u514d\u6a21\u578b\u540d\u6253\u9519\uff0c\u5168\u5f62\u5192\u53f7\uff0c\u7a7a\u683c\u4e4b\u7c7b\u7684\u95ee\u9898\u3002"]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"\u9009\u62e9\u6a21\u578b\u65f6\uff0c\u8bf7\u8003\u8651\u4f60\u7684\u663e\u5b58\u5bb9\u91cf\u4e0eGPU\u7b97\u529b\u3002\u5982\u679c\u6a21\u578b\u6587\u4ef6\u5927\u5c0f\u5927\u4e8e\u663e\u5b58\u5bb9\u91cf\uff0c\u6a21\u578b\u4f1a\u88ab\u8feb\u4f7f\u7528 CPU \u8fd0\u7b97\uff0c\u901f\u5ea6\u6781\u6162\u3002\u53e6\u5916\uff0c\u6a21\u578b\u53c2\u6570\u91cf\u8d8a\u5c0f\uff0c\u5bf9\u8bdd\u5ef6\u8fdf\u8d8a\u5c0f\u3002\u5982\u679c\u4f60\u5e0c\u671b\u964d\u4f4e\u5bf9\u8bdd\u5ef6\u8fdf\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u53c2\u6570\u91cf\u8f83\u4f4e\u7684\u6a21\u578b\u3002"})}),"\n",(0,i.jsx)(n.h4,{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:"conf.CN.yaml"})," \u7684\u5185\u5bb9\u8986\u76d6 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u7684\u5185\u5bb9\uff0c\u83b7\u5f97\u66f4\u9002\u5408\u4e2d\u6587\u4f7f\u7528\u7684\u9884\u8bbe\u914d\u7f6e\u3002"]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7f16\u8f91 ",(0,i.jsx)(n.code,{children:"conf.yaml"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"basic_memory_agent"})," \u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"llm_provider"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"ollama_llm"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u8c03\u6574 ",(0,i.jsx)(n.code,{children:"llm_configs"})," \u9009\u9879\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"ollama_llm"})," \u4e0b\u7684\u8bbe\u7f6e:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base_url"})," \u672c\u5730\u8fd0\u884c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\uff0c\u65e0\u9700\u4fee\u6539\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"model"})," \u4e3a\u4f60\u4f7f\u7528\u7684\u6a21\u578b\uff0c\u6bd4\u5982\u672c\u6307\u5357\u4f7f\u7528\u7684 ",(0,i.jsx)(n.code,{children:"qwen2.5:latest"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"ollama_llm:\n  base_url: http://localhost:11434  # \u672c\u5730\u8fd0\u884c\u4fdd\u6301\u9ed8\u8ba4\n  model: qwen2.5:latest            # ollama list \u5f97\u5230\u7684\u6a21\u578b\u540d\u79f0\n  temperature: 0.7                 # \u63a7\u5236\u56de\u7b54\u968f\u673a\u6027\uff0c\u8d8a\u9ad8\u8d8a\u968f\u673a (0~1)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4e8e\u914d\u7f6e\u6587\u4ef6\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/config",children:"\u7528\u6237\u6307\u5357/\u914d\u7f6e\u6587\u4ef6"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4-\u542f\u52a8\u9879\u76ee",children:"4. \u542f\u52a8\u9879\u76ee"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd0\u884c\u540e\u7aef\u670d\u52a1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uv run run_server.py\n# \u7b2c\u4e00\u6b21\u8fd0\u884c\u53ef\u80fd\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u6a21\u578b\uff0c\u5bfc\u81f4\u7b49\u5f85\u65f6\u95f4\u8f83\u4e45\u3002\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd0\u884c\u6210\u529f\u540e\uff0c\u8bbf\u95ee ",(0,i.jsx)(n.code,{children:"http://localhost:12393"})," \u6253\u5f00 Web \u754c\u9762\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{title:"\u684c\u9762\u5e94\u7528",type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u66f4\u559c\u6b22 Electron \u5e94\u7528 (\u7a97\u53e3\u6a21\u5f0f + \u684c\u5145\u6a21\u5f0f)\uff0c\u53ef\u4ee5\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases",children:"Open-LLM-VTuber-Web Releases"})," \u4e0b\u8f7d\u5bf9\u5e94\u5e73\u53f0 Electron \u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u5728\u540e\u7aef\u670d\u52a1\u8fd0\u884c\u7684\u524d\u63d0\u4e0b\u76f4\u63a5\u4f7f\u7528\u3002"]}),(0,i.jsxs)(n.p,{children:["\u6709\u5173\u524d\u7aef\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"./user-guide/frontend/",children:"\u524d\u7aef\u6307\u5357"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5",children:"\u5e38\u89c1\u95ee\u9898\u6392\u67e5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u9047\u5230 ",(0,i.jsx)(n.code,{children:"Error calling the chat endpoint..."})," \u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"http://localhost:11434/",children:"http://localhost:11434/"})," \u662f\u5426\u80fd\u6b63\u5e38\u8bbf\u95ee\uff0c\u5982\u679c\u4e0d\u80fd\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"ollama run"})," \u6ca1\u6709\u8fd0\u884c\u6210\u529f\uff0c\u6216\u8005\u8fd0\u884c\u6210\u529f\u540e\u547d\u4ee4\u884c\u88ab\u4f60\u5173\u95ed\u4e86\uff0c\u8bf7\u4fdd\u6301\u8fd0\u884c ollama \u7684\u547d\u4ee4\u884c\u4e0d\u8981\u5173\u95ed\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u62a5\u9519\u4e2d\u63d0\u793a",(0,i.jsx)(n.code,{children:"Model not found, try pulling it..."}),"\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ollama list"})," \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6a21\u578b\u540d\u79f0\uff0c\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6a21\u578b\u540d\u79f0\u4e0e\u5217\u8868\u4e2d\u7684\u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u4ee3\u7406\u8f6f\u4ef6\u6ca1\u6709\u7ed5\u8fc7\u672c\u5730\u5730\u5740\uff0c\u4f1a\u5bfc\u81f4 Ollama \u65e0\u6cd5\u8fde\u63a5\u3002\u5c1d\u8bd5\u4e34\u65f6\u5173\u95ed\u4ee3\u7406\uff0c\u6216\u53c2\u8003\u524d\u6587\u8bbe\u7f6e\u4ee3\u7406\u7ed5\u8fc7\u672c\u5730\u5730\u5740\u3002"}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9329:(e,n,l)=>{l.d(n,{A:()=>a});l(6540);var s=l(4164);const i={tabItem:"tabItem_Ymn6"};var r=l(4848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:l,children:n})}},1306:(e,n,l)=>{l.d(n,{A:()=>A});var s=l(6540),i=l(4164),r=l(8760),a=l(6347),t=l(372),c=l(1973);var d=l(8114);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:i}}=e;return{value:n,label:l,attributes:s,default:i}}))}(l);return function(e){const n=(void 0===(s=(e,n)=>e.value===n.value)&&(s=(e,n)=>e===n),(l=e).filter(((e,n)=>l.findIndex((n=>s(n,e)))!==n)));var l,s;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function u(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function p(e){const{defaultValue:n,queryString:l=!1,groupId:i}=e,r=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,p]=x({queryString:l,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(l);return[i,(0,s.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:i}),b=(()=>{const e=o??j;return u({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),m(e)}),[p,m,r]),tabValues:r}}var j=l(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(4848);function g(e){let{className:n,block:l,selectedValue:s,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const n=e.currentTarget,l=c.indexOf(n),i=t[l].value;i!==s&&(d(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:o,...r,className:(0,i.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:r}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function f(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,b.jsx)(f,{...e,children:o(e.children)},String(n))}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>t});var s=l(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);