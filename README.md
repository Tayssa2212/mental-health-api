MentalCare API
A MentalCare API é uma aplicação utilitária voltada para o bem-estar emocional. Criada no contexto do projeto final do Módulo 3 do curso Full Stack Web da Programadores do Amanhã (PdA), ela fornece funcionalidades práticas que podem ser integradas a plataformas de autocuidado, educação emocional ou suporte psicológico.


📌 Descrição
Esta API tem como objetivo oferecer recursos úteis e acessíveis voltados para a saúde mental. Ela disponibiliza frases motivacionais, exercícios de respiração guiada e uma lista de contatos de emergência emocional. A proposta é servir como ferramenta de apoio que pode ser utilizada de forma independente ou integrada a sistemas maiores.

⚙️ Estrutura da API
A API é composta por três rotas principais:

GET /inspirations: Retorna uma frase inspiradora aleatória.

GET /breathing: Gera um guia com tempos para respiração consciente (inspirar, segurar, expirar).

GET /contacts: Lista contatos de emergência emocional, como CVV e SAMU.

🧰 Requisitos
Node.js 18 ou superior

NPM

Navegador ou ferramenta de teste de APIs como Postman

📜 Scripts
json
Copiar
Editar
"scripts": {
  "start": "node server.js"
}
▶️ Como Rodar o Projeto
bash
Copiar
Editar
git clone https://github.com/Tayssa2212/mental-health-api
cd mental-health-api
npm install
npm start
Abra http://localhost:3000/api-docs no navegador para acessar a documentação interativa.

📋 Regras de Negócio
Fornecimento de conteúdo emocionalmente neutro e positivo.

Acessibilidade das rotas sem autenticação (API aberta).

Dados fixos simulando uma base de informações úteis em situações de crise.

Permite fácil extensão para novas funcionalidades (ex: dicas de meditação, exercícios mentais, etc.)

🛠️ Tecnologias Utilizadas
Node.js

Express

Swagger UI Express

JavaScript (ESModules)

👥 Contribuidores
[Tayssa Ramos]

📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
