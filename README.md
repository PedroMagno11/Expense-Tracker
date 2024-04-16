## Expense Tracker App

Este é um aplicativo de rastreamento de despesas desenvolvido utilizando Vue.js, TypeScript e Pinia. Ele permite aos usuários registrar suas despesas e ganhos para acompanhar suas finanças pessoais.

### Funcionalidades

- **Registro de Transações:** Os usuários podem adicionar novas transações especificando um valor negativo para despesa ou positivo para ganho.
  
- **Exibição de Transações:** O aplicativo exibe uma lista das transações registradas, mostrando o valor e a descrição cada uma.

- **Totalização de Balanço:** O saldo atual é calculado com base nas transações registradas, mostrando o saldo líquido entre ganhos e despesas.

### Tecnologias Utilizadas

- **Vue.js:** Um framework progressivo para a construção de interfaces de usuário.
  
- **TypeScript:** Um superset de JavaScript que adiciona tipagem estática ao código.
  
- **Pinia:** Um estado global simplificado e baseado em Vue.js para gerenciamento de estado.

- **LocalStorage:** Utilizado para armazenar as transações localmente no navegador do usuário.

### Configuração do Projeto

1. **Instalação das Dependências:**
   ```bash
   npm install
   ```

2. **Compilação e Execução Local:**
   ```bash
   npm run dev
   ```

### Estrutura do Projeto

- **`src/`**: Contém o código-fonte do aplicativo.
  - **`components/`**: Componentes Vue reutilizáveis.
  - **`views/`**: Vistas principais da aplicação.
  - **`store/`**: Configurações do Pinia para gerenciamento de estado global.
  - **`assets/`**: Arquivos estáticos como imagens, ícones, css, etc.
  - **`App.vue`**: O componente raiz da aplicação.
  - **`main.ts`**: Ponto de entrada da aplicação Vue.js.

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema para relatar bugs ou solicitar novas funcionalidades. Se desejar contribuir com código, por favor, abra um pull request e descreva suas alterações.

