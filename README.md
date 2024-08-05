## CASHFORCE TESTE TÉCNICO
Baseados nos requisitos técnicos pré definidos no documento relacionado ao desafio, a stack utilizada foi:
- Typescript como linguagem base;
- Frontend com VueJS, Tailwind e Vitest;
- Backend com Express, Sequelize e Jest;
- MySQL como banco de dados.

## Pré requisitos
- NodeJS
- Banco de dados MySQL com a estrutura pré definida em `/backend/src/assets/cashforce_dump.sql`

*Caso queira, foi disponibilizado um arquivo `docker-compose.yaml` que permite instanciar um container com o banco de dados para testes.
Para executá-lo, é necessário possuir o docker-compose em seu ambiente e executar o comando `docker compose up` a partir da raíz do projeto.*


## Execução
Navegue até a raiz do serviço desejado, instale as dependências e execute o projeto:
#### Backend
    cd ./backend
    npm install && npm start

#### Frontend
    cd ./backend
    npm install && npm run dev
Por padrão, os serviços utilizarão as seguintes portas:
- **Frontend**: 3000
- **Backend**: 8000

Essa configuração pode ser alterada pelas variáveis de ambiente no arquivo `.env` na raíz de cada serviço.
## Testes
Cada um dos serviços possuem alguns poucos testes unitários e de integração. Eles podem ser executados com o comando utilizando o comando `npm run test` na raíz do serviço que deseja testar.

## Informações relevantes

- Usei como princípio a implementação do mínimo necessário para a conclusão do teste com a maior qualidade possível. Dessa forma, não havia a necessidade de implementar um CRUD completo no backend.
- Como já existia uma estrutura pré definida para o banco de dados através do dump disponibilizado no desafio, os modelos do sequelize foram gerados utilizando a ferramenta sequelize-auto.
