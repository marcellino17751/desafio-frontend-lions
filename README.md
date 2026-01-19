Desafio Técnico - Website Lions Seminovos
Este repositório contém a solução para o desafio técnico de desenvolvimento do website da Lions Seminovos. O projeto consiste em uma Single Page Application (SPA) responsiva, focada na experiência do usuário e na identidade visual da marca.
 Como Rodar o Projeto
O projeto foi desenvolvido utilizando tecnologias que dispensam compiladores complexos, facilitando a execução imediata.
1.	Clone o repositório:
2.	git clone [https://github.com/marcellino17751/lions-seminovos.git](https://github.com/marcellino17751/lions-seminovos.git)
3.	Abra o projeto: Navegue até a pasta do projeto e abra o arquivo index.html diretamente em qualquer navegador moderno (Chrome, Edge, Firefox).
Nota: Não é necessário instalar dependências ou rodar servidores locais, pois as bibliotecas são carregadas via CDN.
 Decisões Técnicas e Arquitetura
Para garantir agilidade e performance, as seguintes decisões foram tomadas:
1. Separação de Responsabilidades
O código foi organizado de forma modular em três arquivos principais:
•	index.html: Estrutura semântica do site.
•	style.css: Estilização personalizada, paleta de cores e animações.
•	script.js: Lógica de navegação, renderização dinâmica do estoque e manipulação de formulários.
2. Tecnologias Utilizadas
•	Tailwind CSS: Utilizado para agilizar o desenvolvimento do layout responsivo através de classes utilitárias, garantindo consistência visual.
•	Lucide Icons: Biblioteca de ícones leve e moderna para melhorar a acessibilidade e o design.
•	SweetAlert2: Implementado para fornecer um feedback visual premium ao usuário após a submissão do formulário de agendamento.
•	JavaScript Vanilla: Optou-se por não utilizar frameworks pesados (como React ou Vue) para este desafio específico, visando uma carga inicial extremamente rápida e código limpo.
3. Identidade Visual (Paleta de Cores)
As cores foram extraídas da identidade oficial da Lions:
•	Azul Marinho (#0a1931): Cor primária, transmitindo confiança e autoridade.
•	Amarelo Lions (#eab308): Cor de destaque para chamadas de ação (CTAs), garantindo alta taxa de conversão.
 Desafios Resolvidos
•	Navegação Fluida: Implementação de um sistema de abas via JavaScript que simula a troca de páginas sem recarregar o navegador.
•	Catálogo Dinâmico: O estoque é gerado a partir de um array de objetos, facilitando a futura integração com uma API real.
•	Feedback de Agendamento: Integração do SweetAlert2 totalmente estilizado com as cores da marca para confirmar o envio dos dados do cliente.
Desenvolvido como parte do processo seletivo para a equipe de tecnologia da Lions Seminovos.
