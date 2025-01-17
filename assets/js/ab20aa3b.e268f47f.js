"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5949],{9128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"user-guide/backend/asr","title":"\u8bed\u97f3\u8bc6\u522b (ASR)","description":"\u8bed\u97f3\u8bc6\u522b (ASR, Automatic Speech Recognition) \u5c06\u7528\u6237\u7684\u8bed\u97f3\u8f6c\u6362\u6210\u6587\u5b57\u3002\u672c\u9879\u76ee\u652f\u6301\u591a\u4e2a\u8bed\u97f3\u8bc6\u522b\u6a21\u578b\u7684\u5b9e\u73b0\u3002","source":"@site/docs/user-guide/backend/asr.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/asr","permalink":"/docs/user-guide/backend/asr","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/asr.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docSidebar","previous":{"title":"\u914d\u7f6e\u6587\u4ef6","permalink":"/docs/user-guide/backend/config"},"next":{"title":"\u8bed\u8a00\u6a21\u578b","permalink":"/docs/user-guide/backend/llm"}}');var i=r(4848),l=r(8453),c=r(1306),a=r(9329);const d={sidebar_position:3},o="\u8bed\u97f3\u8bc6\u522b (ASR)",t={},h=[{value:"\u672c\u5730\u63a8\u7406",id:"\u672c\u5730\u63a8\u7406",level:2},{value:"<code>sherpa_onnx_asr</code> (\u63a8\u8350\u3002\u9879\u76ee\u9884\u8bbe)",id:"sherpa_onnx_asr-\u63a8\u8350\u9879\u76ee\u9884\u8bbe",level:3},{value:"Cuda \u63a8\u7406",id:"cuda-\u63a8\u7406",level:4},{value:"\u7528 sherpa-onnx \u8fd0\u884c\u5176\u4ed6\u8bed\u97f3\u8bc6\u522b\u6a21\u578b",id:"\u7528-sherpa-onnx-\u8fd0\u884c\u5176\u4ed6\u8bed\u97f3\u8bc6\u522b\u6a21\u578b",level:4},{value:"<code>fun_asr</code>",id:"fun_asr",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"faster_whisper` (\u672c\u5730)",id:"faster_whisper-\u672c\u5730",level:3},{value:"<code>whisper_cpp</code> (\u672c\u5730)",id:"whisper_cpp-\u672c\u5730",level:3},{value:"\u5b89\u88c5\uff1a",id:"\u5b89\u88c5-1",level:4},{value:"<code>Whisper</code> (\u672c\u5730)",id:"whisper-\u672c\u5730",level:3},{value:"\u8054\u7f51\u63a8\u7406",id:"\u8054\u7f51\u63a8\u7406",level:2},{value:"<code>GroqWhisperASR</code> (\u5728\u7ebf\uff0c\u9700\u8981 API \u5bc6\u94a5)",id:"groqwhisperasr-\u5728\u7ebf\u9700\u8981-api-\u5bc6\u94a5",level:3},{value:"<code>AzureASR</code> (\u5728\u7ebf\uff0c\u9700\u8981 API \u5bc6\u94a5)",id:"azureasr-\u5728\u7ebf\u9700\u8981-api-\u5bc6\u94a5",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u8bed\u97f3\u8bc6\u522b-asr",children:"\u8bed\u97f3\u8bc6\u522b (ASR)"})}),"\n",(0,i.jsx)(n.p,{children:"\u8bed\u97f3\u8bc6\u522b (ASR, Automatic Speech Recognition) \u5c06\u7528\u6237\u7684\u8bed\u97f3\u8f6c\u6362\u6210\u6587\u5b57\u3002\u672c\u9879\u76ee\u652f\u6301\u591a\u4e2a\u8bed\u97f3\u8bc6\u522b\u6a21\u578b\u7684\u5b9e\u73b0\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bed\u97f3\u8bc6\u522b\u76f8\u5173\u7684\u914d\u7f6e\u9879\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"asr_config"})," \u4e0b\u9762\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u9009\u62e9\u7684\u8bed\u97f3\u8bc6\u522b\u9009\u9879\uff1a"}),"\n",(0,i.jsx)(n.h2,{id:"\u672c\u5730\u63a8\u7406",children:"\u672c\u5730\u63a8\u7406"}),"\n",(0,i.jsxs)(n.h3,{id:"sherpa_onnx_asr-\u63a8\u8350\u9879\u76ee\u9884\u8bbe",children:[(0,i.jsx)(n.code,{children:"sherpa_onnx_asr"})," (\u63a8\u8350\u3002\u9879\u76ee\u9884\u8bbe)"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["(\u5728 ",(0,i.jsx)(n.code,{children:"v0.5.0-alpha.1"})," \u7248\u672c\u7684 PR: ",(0,i.jsx)(n.a,{href:"https://github.com/t41372/Open-LLM-VTuber/pull/50",children:"Add sherpa-onnx support #50"})," \u4e2d\u6dfb\u52a0)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/k2-fsa/sherpa-onnx",children:"sherpa-onnx"})," \u662f\u4e00\u4e2a\u529f\u80fd\u4e30\u5bcc\u7684\u63a8\u7406\u5de5\u5177\uff0c\u80fd\u8fd0\u884c\u591a\u79cd\u8bed\u97f3\u8bc6\u522b(ASR)\u6a21\u578b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sherpa-onnx"})," \u8fd0\u884c ",(0,i.jsx)(n.code,{children:"SenseVoiceSmall"})," (int8 \u91cf\u5316) \u662f\u8fd9\u4e2a\u9879\u76ee",(0,i.jsx)(n.code,{children:"v1.0.0"})," \u7248\u672c\u540e\u7684\u9884\u8bbe\u914d\u7f6e\uff0c\u4f60\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u989d\u5916\u7684\u914d\u7f6e\u3002\u6a21\u578b\u4f1a\u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u65f6\u81ea\u52a8\u4e0b\u8f7d\u5e76\u89e3\u538b\u5230\u9879\u76ee\u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"models"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"cuda-\u63a8\u7406",children:"Cuda \u63a8\u7406"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sherpa-onnx"})," \u76ee\u524d\u53ea\u652f\u6301 CPU \u4e0e Cuda \u63a8\u7406\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9884\u8bbe\u5b89\u88c5\u7684 ",(0,i.jsx)(n.code,{children:"sherpa-onnx"})," \u53ea\u80fd\u4f7f\u7528 CPU \u63a8\u7406\u3002\u867d\u7136 ",(0,i.jsx)(n.code,{children:"SenseVoiceSmall"})," \u6a21\u578b\u5728CPU\u4e0a\u63a8\u7406\uff0c\u901f\u5ea6\u5c31\u5f88\u5feb\u4e86\uff0c\u4e0d\u8fc7\u4f60\u5982\u679c\u4f60\u662f\u7528\u7684\u662f Nvidia GPU\uff0c\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u914d\u7f6e CUDA \u63a8\u7406\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003",(0,i.jsx)(n.a,{href:"https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda",children:"\u5b98\u65b9\u6587\u6863"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u89e3\u9664\u5b89\u88c5\u9879\u76ee\u81ea\u5e26\u7684 CPU \u7248\u672c\u7684 ",(0,i.jsx)(n.code,{children:"sherpa-onnx"}),"\uff0c\u987a\u4fbf\u628a ",(0,i.jsx)(n.code,{children:"onnxruntime"})," \u4e5f\u6362\u6210 gpu \u7248\u672c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"uv remove sherpa-onnx onnxruntime\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u63a5\u7740\uff0c\u5b89\u88c5 CUDA \u7248\u672c\u7684 ",(0,i.jsx)(n.code,{children:"sherpa-onnx"})," \u548c ",(0,i.jsx)(n.code,{children:"onnxruntime-gpu"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"uv add onnxruntime-gpu sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html \n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u524d\u5f80 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"sherpa_onnx_asr"})," \u914d\u7f6e\u4e0b\uff0c\u628a ",(0,i.jsx)(n.code,{children:"provider"})," \u9009\u9879\u8bbe\u4e3a ",(0,i.jsx)(n.code,{children:"cuda"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u7528-sherpa-onnx-\u8fd0\u884c\u5176\u4ed6\u8bed\u97f3\u8bc6\u522b\u6a21\u578b",children:"\u7528 sherpa-onnx \u8fd0\u884c\u5176\u4ed6\u8bed\u97f3\u8bc6\u522b\u6a21\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models",children:"sherpa-onnx ASR models"})," \u4e0b\u8f7d\u60a8\u9700\u8981\u7684\u6a21\u578b (\u63a8\u8350\u653e\u5728\u9879\u76ee\u76ee\u5f55 ",(0,i.jsx)(n.code,{children:"models"})," \u6587\u4ef6\u5939\u4e0b)\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003",(0,i.jsx)(n.code,{children:"conf.yaml"}),"\u4e2d\u7684\u8bf4\u660e\uff0c\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"sherpa_onnx_asr"})," \u7684\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fun_asr",children:(0,i.jsx)(n.code,{children:"fun_asr"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/modelscope/FunASR?tab=readme-ov-file",children:"FunASR"})," \u662f ModelScope \u7684\u4e00\u4e2a\u57fa\u7840\u7aef\u5230\u7aef\u8bed\u97f3\u8bc6\u522b\u5de5\u5177\u5305\uff0c\u53ef\u4ee5\u8fd0\u884c\u8bb8\u591a ASR \u6a21\u578b\u3002\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u96c6\u56e2 ",(0,i.jsx)(n.a,{href:"https://github.com/FunAudioLLM/SenseVoice",children:"FunAudioLLM"})," \u7684 SenseVoiceSmall \u7684\u7ed3\u679c\u548c\u901f\u5ea6\u90fd\u76f8\u5f53\u4e0d\u9519\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u8fc7 SenseVoiceSmall \u6a21\u578b\u7684\u63a8\u7406\uff0c\u73b0\u5728\u63a8\u8350\u4f7f\u7528\u9879\u76ee\u9884\u8bbe\u7684 ",(0,i.jsx)(n.code,{children:"sherpa_onnx_asr"}),"\u3002 FunASR \u9879\u76ee\u5e76\u4e0d\u7a33\u5b9a\uff0c\u5728\u90e8\u5206\u7535\u8111\u4e0a\u4f1a\u51fa\u73b0\u5947\u602a\u7684\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u8fd0\u884c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9047\u5230\u4e86\u8fd9\u4e2a\u95ee\u9898"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"  help: `llvmlite` (v0.36.0) was included because `open-llm-vtuber` (v1.0.0a1) depends on `funasr` (v1.2.2) which depends on `umap-learn` (v0.5.7)\n        which depends on `pynndescent` (v0.5.13) which depends on `llvmlite`\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"uv pip install funasr modelscope huggingface_hub torch torchaudio onnx onnxconverter_common\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5373\u4f7f\u6a21\u578b\u5728\u672c\u5730\u53ef\u7528\uff0c\u542f\u52a8\u65f6\u4e5f\u9700\u8981\u4e92\u8054\u7f51\u8fde\u63a5\u3002\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"https://github.com/modelscope/FunASR/issues/1897",children:"https://github.com/modelscope/FunASR/issues/1897"})]}),"\n",(0,i.jsx)(n.p,{children:"\u4ed6\u4eec\u63d0\u4f9b\u7684\u65b9\u6848\u662f\u76f4\u63a5\u5728\u6a21\u578b\u540d\u79f0\u7684\u5730\u65b9\u5199\u6a21\u578b\u7684\u8def\u5f84\uff0c\u8fd9\u6837\u5728\u8fd0\u884c\u65f6\u5c31\u4e0d\u9700\u8981\u4e92\u8054\u7f51\u8fde\u63a5\u4e86\uff0c\u4f46\u6a21\u578b\u6587\u4ef6\u5fc5\u987b\u63d0\u524d\u4e0b\u8f7d\u597d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"faster_whisper-\u672c\u5730",children:"faster_whisper` (\u672c\u5730)"}),"\n",(0,i.jsx)(n.p,{children:"\u80fd\u8fd0\u884c Whisper \u548c distill whisper \u7684\u63a8\u7406\u5de5\u5177\u3002\u57fa\u672c\u5c31\u662fWhisper\uff0c\u4f46\u901f\u5ea6\u66f4\u5feb\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 macOS \u4e0a\uff0c\u5b83\u4ec5\u5728 CPU \u4e0a\u8fd0\u884c\uff0c\u901f\u5ea6\u4e0d\u662f\u5f88\u5feb\u3002\u63a8\u8350\u5728\u6709 nvidia gpu \u7684\u7535\u8111\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e Nvidia GPU \u7528\u6237\uff0c\u8981\u4f7f\u7528 GPU \u52a0\u901f\uff0c\u60a8\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b NVIDIA \u5e93\u3002\u5177\u4f53\u6307\u5357\u5728",(0,i.jsx)(n.a,{href:"/docs/quick-start",children:"\u5feb\u901f\u5f00\u59cb"})," \u4e2d\u6709\u8bf4\u660e\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cublas",children:"cuBLAS for CUDA 12"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cudnn",children:"cuDNN 8 for CUDA 12"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u5982\u679c\u60a8\u4e0d\u592a\u5728\u610f\u901f\u5ea6\uff0c\u6216\u662f\u4f60\u7684CPU \u975e\u5e38\u5f3a\u52b2\uff0c\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u7684 ",(0,i.jsx)(n.code,{children:"faster-whisper"})," \u9009\u9879\u4e0b\u628a ",(0,i.jsx)(n.code,{children:"device"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"cpu"})," \u4ee5\u51cf\u5c11\u9ebb\u70e6\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"whisper_cpp-\u672c\u5730",children:[(0,i.jsx)(n.code,{children:"whisper_cpp"})," (\u672c\u5730)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Whisper cpp python \u7ed1\u5b9a\u3002\u5b83\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5728 coreML \u4e0a\u8fd0\u884c\uff0c\u8fd9\u4f7f\u5f97\u5b83\u5728 macOS \u4e0a\u5f88\u5feb\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 CPU \u6216 Nvidia GPU \u4e0a\uff0c\u5b83\u53ef\u80fd\u6bd4 Faster-Whisper \u6162"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Mac\uff0c\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u8bf4\u660e\u4ee5\u8bbe\u7f6e\u652f\u6301 coreML \u7684 WhisperCPP\u3002\u5982\u679c\u60a8\u60f3\u4f7f\u7528 CPU \u6216 Nvidia GPU\uff0c\u8bf7\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"pip install pywhispercpp"})," \u5b89\u88c5\u8be5\u8f6f\u4ef6\u5305\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5b89\u88c5-1",children:"\u5b89\u88c5\uff1a"}),"\n",(0,i.jsxs)(c.A,{children:[(0,i.jsx)(a.A,{value:"nvidia-gpu",label:"Nvidia GPU",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"GGML_CUDA=1 uv pip install git+https://github.com/absadiki/pywhispercpp\n"})})}),(0,i.jsx)(a.A,{value:"macos",label:"macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"WHISPER_COREML=1 uv pip install git+https://github.com/absadiki/pywhispercpp\n"})})}),(0,i.jsx)(a.A,{value:"vulkan",label:"Vulkan",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"GGML_VULKAN=1 pip install git+https://github.com/absadiki/pywhispercpp\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"coreML:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u51c6\u5907\u9002\u5f53\u7684 coreML \u6a21\u578b\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u60a8\u53ef\u4ee5\u6839\u636e Whisper.cpp \u4ed3\u5e93\u7684\u6587\u6863\u5c06\u6a21\u578b\u8f6c\u6362\u4e3a coreml"}),"\n",(0,i.jsxs)(n.li,{children:["...\u6216\u8005\u60a8\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b ",(0,i.jsx)(n.a,{href:"https://huggingface.co/chidiwilliams/whisper.cpp-coreml/tree/main",children:"\u795e\u5947\u7684 huggingface \u4ed3\u5e93"}),"\uff0c\u5b83\u4eec\u78b0\u5de7\u6709\u8fd9\u4e9b\u8f6c\u6362\u540e\u7684\u6a21\u578b\u3002\u53ea\u9700\u8bb0\u4f4f\u89e3\u538b\u7f29\u5b83\u4eec\u3002\u5982\u679c\u7a0b\u5e8f\u65e0\u6cd5\u52a0\u8f7d\u6a21\u578b\uff0c\u5b83\u5c06\u4ea7\u751f\u5206\u6bb5\u9519\u8bef\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u60a8\u4e0d\u9700\u8981\u5728 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u7684\u6a21\u578b\u540d\u79f0\u4e2d\u5305\u542b\u90a3\u4e9b\u5947\u602a\u7684\u524d\u7f00\u3002\u4f8b\u5982\uff0c\u5982\u679c coreML \u6a21\u578b\u7684\u540d\u79f0\u7c7b\u4f3c\u4e8e ",(0,i.jsx)(n.code,{children:"ggml-base-encoder.mlmodelc"}),"\uff0c\u53ea\u9700\u5c06 ",(0,i.jsx)(n.code,{children:"base"})," \u653e\u5165 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u4e2d ",(0,i.jsx)(n.code,{children:"WhisperCPP"})," \u8bbe\u7f6e\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"model_name"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"whisper-\u672c\u5730",children:[(0,i.jsx)(n.code,{children:"Whisper"})," (\u672c\u5730)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["OpenAI \u7684\u539f\u59cb Whisper\u3002\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"uv pip install -U openai-whisper"})," \u5b89\u88c5"]}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u6162\u7684\u4e00\u4e2a\u3002\u6dfb\u52a0\u5b83\u662f\u4e3a\u4e86\u8bd5\u9a8c\u770b\u770b\u5b83\u662f\u5426\u53ef\u4ee5\u5229\u7528 macOS GPU\u3002\u5b83\u4e0d\u884c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8054\u7f51\u63a8\u7406",children:"\u8054\u7f51\u63a8\u7406"}),"\n",(0,i.jsxs)(n.h3,{id:"groqwhisperasr-\u5728\u7ebf\u9700\u8981-api-\u5bc6\u94a5",children:[(0,i.jsx)(n.code,{children:"GroqWhisperASR"})," (\u5728\u7ebf\uff0c\u9700\u8981 API \u5bc6\u94a5)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Groq \u7684 Whisper \u7aef\u70b9\u3002\u975e\u5e38\u5feb\uff0c\u5e76\u4e14\u6bcf\u5929\u90fd\u6709\u5f88\u591a\u514d\u8d39\u4f7f\u7528\u6b21\u6570\u3002\u5b83\u5df2\u9884\u5b89\u88c5\u3002\u4ece ",(0,i.jsx)(n.a,{href:"https://console.groq.com/keys",children:"groq"})," \u83b7\u53d6 API \u5bc6\u94a5\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"groq_whisper_asr"})," \u8bbe\u7f6e\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u9700\u8981 API \u5bc6\u94a5\u548c\u4e92\u8054\u7f51\u8fde\u63a5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"azureasr-\u5728\u7ebf\u9700\u8981-api-\u5bc6\u94a5",children:[(0,i.jsx)(n.code,{children:"AzureASR"})," (\u5728\u7ebf\uff0c\u9700\u8981 API \u5bc6\u94a5)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Azure \u8bed\u97f3\u8bc6\u522b\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"azure_asr"})," \u9009\u9879\u4e0b\u914d\u7f6e API key \u548c\u5730\u533a"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"api_key.py"})," \u5728 ",(0,i.jsx)(n.code,{children:"v0.2.5"})," \u4e4b\u540e\u5df2\u5f03\u7528\u3002\u8bf7\u5728 ",(0,i.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u8bbe\u7f6e API \u5bc6\u94a5\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>c});r(6540);var s=r(4164);const i={tabItem:"tabItem_Ymn6"};var l=r(4848);function c(e){let{children:n,hidden:r,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,c),hidden:r,children:n})}},1306:(e,n,r)=>{r.d(n,{A:()=>A});var s=r(6540),i=r(4164),l=r(8760),c=r(6347),a=r(372),d=r(1973);var o=r(8114);function t(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return t(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(void 0===(s=(e,n)=>e.value===n.value)&&(s=(e,n)=>e===n),(r=e).filter(((e,n)=>r.findIndex((n=>s(n,e)))!==n)));var r,s;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const i=(0,c.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,l=h(e),[c,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[t,x]=p({queryString:r,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,o.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),f=(()=>{const e=t??j;return u({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),m(e)}),[x,m,l]),tabValues:l}}var j=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:c,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),t=e=>{const n=e.currentTarget,r=d.indexOf(n),i=a[r].value;i!==s&&(o(n),c(i))},h=e=>{let n=null;switch(e.key){case"Enter":t(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:t,...l,className:(0,i.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:l}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function g(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,f.jsx)(g,{...e,children:t(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var s=r(6540);const i={},l=s.createContext(i);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);