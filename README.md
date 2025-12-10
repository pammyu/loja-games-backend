<h1 align="center" style="color: #4CAF50;">🎮 Loja de Games - Backend NestJS</h1>

<p align="center" style="color: #888;">Desenvolvido com ❤️ por Pâmela dos Reis durante o Bootcamp da Generation Brasil</p>

---

## 📝 Descrição do Projeto

Este projeto consiste no desenvolvimento do **Backend de uma Loja de Games** utilizando **NestJS**.  O sistema permite a manipulação de produtos e categorias, com **CRUD completo** para cada recurso, seguindo as boas práticas de desenvolvimento estudadas.

---

## ⚡ Funcionalidades

- CRUD completo de **Produtos**
  - Criar, ler, atualizar, deletar
- CRUD completo de **Categorias**
  - Criar, ler, atualizar, deletar
- Relacionamento **One-to-Many** entre Categoria e Produto
- Testes de API utilizando **Insomnia**
- Estrutura organizada em **Entity, Service e Controller**
- Integração com **Banco de Dados MySQL**

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [TypeORM](https://typeorm.io/)
- [Insomnia](https://insomnia.rest/) (para testes de API)

---

## 🗂 Estrutura do Projeto

```text
loja-games-backend/
│
├─ src/
│   ├─ categoria/
│   │   ├─ entities/
│   │   ├─ services/
│   │   └─ controllers/
│   ├─ produto/
│   │   ├─ entities/
│   │   ├─ services/
│   │   └─ controllers/
│   ├─ app.module.ts
│   └─ main.ts
└─ package.json

