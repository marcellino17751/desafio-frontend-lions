Desafio Técnico – Website Lions Seminovos

Este repositório contém a solução desenvolvida para o desafio técnico de criação do website da Lions Seminovos.
O projeto consiste em uma Single Page Application (SPA) responsiva, com foco em experiência do usuário, performance e fidelidade à identidade visual da marca.

O site está disponível para visualização online através do GitHub Pages: https://marcellino17751.github.io/desafio-frontend-lions/

Visualização do Projeto

O projeto pode ser acessado em produção pelo link do GitHub Pages configurado neste repositório.

Objetivo do Desafio

Desenvolver uma aplicação web funcional e visualmente alinhada à identidade da Lions Seminovos, demonstrando domínio de fundamentos de front-end, organização de código, boas práticas e tomada de decisões técnicas adequadas ao escopo proposto.

Tecnologias Utilizadas

HTML5

CSS3

JavaScript Vanilla

Tailwind CSS

Lucide Icons

SweetAlert2

Optou-se por não utilizar frameworks como React ou Vue, priorizando leveza, carregamento rápido e simplicidade arquitetural, considerando o contexto do desafio.

Estrutura do Projeto

O código foi organizado de forma simples e clara, respeitando a separação de responsabilidades:

index.html
Responsável pela estrutura semântica da aplicação.

style.css
Contém customizações visuais, ajustes de layout, paleta de cores e animações complementares.

script.js
Implementa a lógica da aplicação, incluindo navegação entre seções, renderização dinâmica do catálogo e manipulação do formulário de agendamento.

Funcionalidades Implementadas

Navegação fluida entre seções sem recarregamento da página

Catálogo de veículos renderizado dinamicamente a partir de um array de objetos

Layout totalmente responsivo

Feedback visual de confirmação no envio do formulário de agendamento

Interface alinhada à identidade visual da marca

Identidade Visual

A paleta de cores foi definida com base na identidade da Lions Seminovos:

Azul Marinho (#0a1931): cor primária, associada a confiança e solidez

Amarelo Lions (#eab308): cor de destaque utilizada em chamadas de ação

Como Executar o Projeto Localmente

Clone o repositório:

git clone https://github.com/marcellino17751/desafio-frontend-lions.git

Acesse a pasta do projeto:

cd desafio-frontend-lions

Abra o arquivo index.html diretamente em um navegador moderno (Chrome, Edge ou Firefox).

Não é necessário instalar dependências ou rodar servidores locais, pois todas as bibliotecas externas são carregadas via CDN.

Possíveis Melhorias

Algumas evoluções que poderiam ser implementadas em versões futuras do projeto:

Integração com uma API real para consumo dinâmico do estoque de veículos

Implementação de filtros e ordenação no catálogo (preço, ano, modelo)

Persistência de dados do formulário de agendamento via backend ou serviço externo

Validações mais robustas de formulário, incluindo feedback em tempo real

Adoção de testes automatizados para a lógica em JavaScript

Otimizações adicionais de performance e acessibilidade (Lighthouse e WCAG)

Migração para um framework moderno (React ou Vue) em cenários de maior escala

Considerações Técnicas

O projeto foi desenvolvido priorizando clareza de código, facilidade de manutenção e boa experiência do usuário.
A estrutura atual permite evolução gradual sem a necessidade de grandes refatorações iniciais.

Autor

Projeto desenvolvido como parte de um desafio técnico para a equipe de tecnologia da Lions Seminovos.
