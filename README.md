# Poker-Sprints

Sistema de simplificação de cerimônias de planejamento e reviews 

# Motivação para o projeto 

O projeto foi pensado durante um momento de dor onde em meu antigo trabalho, eu como Product Owner estava com dificuldades de encontrar uma plataforma para realizar a votação das features de maneira ágil e de maneira simples de ser utilizado sem que precisasse assinar nenhum serviço de terceiro. 

# Objetivo 

O Poker Sprints visa ser um local onde será coletado e armazenado a pontuação das demandas das sprints, para isso o sistema irá porpor também a criação de organizações, e dentro de suas organizações a criação de squads mantendo as informações seguras internamente dentro de seu respectivo departamento.

Sendo um local gratuito e simples de utilizar, os usuários irão fazer o login via Google ou Github e criar uma sessão onde será informado as demandas que serão discutidas, com isso a sessão poderá ser compartilhada com os membros do seu squad. Após a cerimônia e o decorrer da sprint o sistema irá propor um dashboard da qual irá transformar a votação do time em métricas de entregas pois será possível informar quantas das demandas foram efetivamente entregues, quanto tempo levou para ser desenvolvido e quantas horas por pontos estão sendo entregues dentro daquele Squad.   

# Contexto

O Poker Sprints será um grande amigo do time de desenvolvimento e das partes interessadas trazendo simplificação para a extração de exibição de indicadores, além de ser a melhor alternativa totalmente gratuita para que o time consiga definir a pontuação de suas demandas.

## Requisitos 

### Requisitos Funcionais 
- RF 1 - Realizar Login via Google
  - O usuário deve conseguir acessar a plataforma de maneira simples e rápida.   
- RF 2 - Realizar Login via Github
  - O usuário deve conseguir acessar a plataforma de maneira simples e rápida. 
- RF 3 - Criar uma votação aleatória
  - O usuário deve conseguir criar uma sessão aleatória como alternativa para realizar votações sem a necessidade das demais configurações.
  - Após a criação da votação privada deve ser gerado token para as demais pessoas acessarem.
- RF 4 - Deve haver um botão para revelar a votação de todos
- RF 5 - Deve haver um botão para revotar a demanda
- RF 6 - Deve haver um botão para encerrar a votação
  -  Ao encerrar a votação a sala é fechada 
- RF 7 - Criar uma organização
  - As informações armazenadas na votação das demandas devem ser armazenadas dentro da organização.
- RF 8 -  Criar Squads
  - Vincular usuários a Squads dentro das organizações para uma votação privada.
- RF 9 - Criar sessão privada
  - Iniciar uma sessão dentro da Squad para uma votação privada.
  - Nomear a sprint.
  - Informar o período de duração da sprint.
  - Cadastrar as demandas que serão votadas.
  - Armazenar as informações dessa votação.
- RF 10 - Deve haver um botão para revelar a votação de todos
- RF 11 - Deve haver um botão para revotar a demanda 
- RF 12 - Encerrar a Sprint
  - Informar quais demandas foram entregues.
  - Informar quantas horas foram gastas naquela sprint.
  - Calcular total de pontos entregues.
- RF 13 - Gerar Dashboards de indicadores
  - Informar horas trabalhadas.
  - Calcular automaticamente média de horas por pessoa.
  - Calcular automaticamente horas por ponto.
  - Calcular automaticamente pontos por pessoa.
    
### Requisitos Não Funcionais 
- RNF 1 - O sistema deve suportar diversas pessoas dentro da mesma votação, seja ela aleatória ou privada.
- RNF 2 - O sistema deve ser implantado em um ambiente de nuvem para garantir escalabilidade e acessibilidade.
- RNF 3 - O sistema deve estar disponível 24 horas por dia para a possíbilidade da utilização de pessoas de outros países em diferentes horários.
- RNF 4 - O sistema deve estar disponível em todos os navegadores

### Links de acesso 
<li><a href="https://poker-sprints.vercel.app/login">PokerSprints</li>
<li><a href="https://sonarcloud.io/organizations/leordrgs/projects"/>SonarCloud</li>
<li><a href="https://catolicasc-team-sprintpoker.atlassian.net/jira/software/projects/SCRUM/boards/1"/>Kanban Poker Sprints</a></li>
