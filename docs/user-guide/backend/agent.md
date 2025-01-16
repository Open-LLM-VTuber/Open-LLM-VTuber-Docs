---
sidebar_position: 5
---

# 代理

## HumeAI Agent (EVI)

### 介绍

Hume AI 的 EVI (Empathic Voice Interface) 是世界上第一个具有情感智能的语音 AI 接口。

它能够测量语音中的细微变化并通过共情大语言模型(eLLM)做出响应，该模型可以指导语言和语音生成。它在数百万人类互动的基础上进行训练，将语言建模和文本转语音与更好的情商(EQ)、韵律、轮次结束检测、可中断性和对齐结合在一起。

新用户有 20 美元的无需绑卡的免费额度，注册与获取 API **在大陆内地需要代理**。

- [Hume AI 官网](https://www.hume.ai/)
- [Hume AI 开发者文档](https://dev.hume.ai/intro)

:::tip
为了确保系统架构的一致性和兼容性，在使用 EVI 时仍需配置 ASR 将语音转录为文本后再进行处理。这个选择让 EVI 能够无缝集成到现有的 `conversation_chain` 流程中，但同时也意味着无法充分使用 EVI 独特的音频情绪分析功能。

我们计划在未来实现一个新的架构，以完整支持像 EVI 这样具备打断检测、ASR、TTS、摄像头等实时交互功能的 API。欢迎各位开发者参与贡献。
:::

:::info EVI 记忆管理
EVI 的对话记忆存储在其服务器端，这意味着它无法访问其他 Agent 的聊天历史记录，只能管理和切换其自身的对话历史。
:::


### 配置说明

在 `conf.yaml` 中配置 HumeAI Agent:

```yaml
agent_config:
  conversation_agent_choice: "hume_ai_agent"
  
  agent_settings:
    hume_ai_agent:
      api_key: "your_api_key"        # Hume AI API 密钥，
      config_id: "your_config_id"    # 可选，用于指定特定的 Hume AI 配置。
      host: "api.hume.ai"            # HumeAI 提供的 API 地址，无需修改。
      idle_timeout: 15               # 处于空闲状态多少秒，自动断开与 HumeAI 的链接。
```

你可以在 [API keys page](https://platform.hume.ai/settings/keys) 获取 `api_key`。

关于 `config_id` 和其他配置的详细说明，请参考 [Configuring EVI](https://dev.hume.ai/docs/empathic-voice-interface-evi/configuration)。

:::warning
由于 EVI 在 WebSocket 空闲状态下仍会持续计费，建议不要将 `idle_timeout` 设置过大。但同时也要注意，如果 `idle_timeout` 设置过小，会导致频繁断开重连，从而增加响应延迟。因此需要根据实际使用情况，合理设置这个参数。
:::

### 常见问题

[Empathic Voice Interface FAQ](https://dev.hume.ai/docs/empathic-voice-interface-evi/faq)