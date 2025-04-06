🧠 MentalCare API
A MentalCare API é uma API RESTful focada em saúde mental e bem-estar emocional. Foi desenvolvida como parte do trabalho final do módulo 3 do curso Full Stack Web da Programadores do Amanhã (PdA).

📌 Descrição
A API disponibiliza recursos informativos e de apoio à saúde mental, como dicas de autocuidado, frases motivacionais e informações sobre serviços de suporte emocional. O objetivo é oferecer uma ferramenta útil e acessível que possa ser integrada a plataformas de apoio, sites educacionais, apps de bem-estar e muito mais.

⚙️ Tecnologias Utilizadas
Linguagem: JavaScript (ES6)

Ambiente de Execução: Node.js

Framework: Express

Documentação: Swagger (OpenAPI)

Formato de Dados: JSON

📁 Estrutura da API
pgsql
Copiar
Editar
mentalcare-api/
├── src/
│   ├── routes/
│   │   └── mentalRoutes.js
│   ├── data/
│   │   ├── tips.json
│   │   ├── quotes.json
│   │   └── helpLines.json
│   └── app.js
├── swagger.json
├── package.json
└── server.js
🔌 Endpoints
GET /api/mental/tips
Retorna uma lista de dicas práticas de autocuidado mental.

GET /api/mental/quotes
Retorna frases motivacionais para fortalecer o bem-estar emocional.

GET /api/mental/help-lines
Retorna uma lista de contatos de serviços de apoio psicológico no Brasil.

🛠️ Como Executar o Projeto
Clone o repositório

bash
Copiar
Editar
git clone https://github.com/seu-usuario/mentalcare-api.git
cd mentalcare-api
Instale as dependências

bash
Copiar
Editar
npm install
Inicie o servidor

bash
Copiar
Editar
npm start
Acesse a documentação Swagger

bash
Copiar
Editar
http://localhost:3000/docs
🔐 Requisitos
Node.js v16 ou superior

Navegador moderno (para acessar o Swagger UI)

📖 Regras de Negócio
As dicas e frases são pré-definidas e simuladas via arquivos JSON.

Os dados podem ser expandidos ou integrados com fontes externas.

A API é apenas informativa e não substitui apoio psicológico profissional.

👥 Contribuidores
Seu Nome

Outros integrantes do grupo, se houver

📄 Licença
Este projeto está licenciado sob a Licença MIT – veja o arquivo LICENSE para mais detalhes.

Se quiser, posso montar esse projeto e gerar um .zip com todos os arquivos prontos para subir no GitHub. Deseja isso?
