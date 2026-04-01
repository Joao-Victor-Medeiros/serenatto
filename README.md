# ☕ Serenatto RAG Chatbot

Sistema de chatbot baseado em RAG (Retrieval-Augmented Generation) para atendimento de clientes da Serenatto, uma loja de cafés especiais. O motivo de criar esse projeto foi devido ao volume de perguntas repetidas que não ficaria explicativo e dinâmico como em um chat.

## 🚀 Demonstração

Acesse o projeto em produção:
👉 https://serenatto-elevate.vercel.app/

Exemplo de uso:
- Pergunta: "Qualquer pergunta voltada para café"
- Resposta: baseada na base de dados vetorizada

## 🧠 Arquitetura RAG

O sistema segue o fluxo:

1. Usuário envia pergunta
2. Pergunta é transformada em embedding
3. Busca semântica em banco vetorial (ChromaDB)
4. Recuperação dos documentos relevantes
5. Envio do contexto + pergunta para o LLM
6. Geração da resposta final

![Arquitetura rag](<img width="767" height="241" alt="image" src="https://github.com/user-attachments/assets/db6bd5dd-f7e5-489b-a11b-28d7f58bf7c9" />)
   


Infraestrutura:
![Diagrama de infraestrutura](<img width="963" height="551" alt="image" src="https://github.com/user-attachments/assets/c94be0b5-6ce2-454a-af09-82e1039e81c1" />)

