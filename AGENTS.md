# 📘 AGENTS.md — Science Study Roadmap Platform

## 🧠 Visão Geral do Projeto

A **Science Study Roadmap Platform** é uma aplicação web educacional projetada para gerar, organizar e acompanhar **roadmaps personalizados de estudo em Ciências**, com foco em:

- Física
- Química
- Biologia
- Ciências da Terra
- Fundamentos Matemáticos
- Metodologia Científica

O sistema permite:

- Geração de trilhas personalizadas
- Planejamento semanal automático
- Controle de progresso
- Visualização de dependências conceituais
- Evolução adaptativa futura com IA

---

# 🎯 Objetivo Arquitetural

Construir uma plataforma:

- Modular
- Escalável
- Testável
- Orientada a domínio (DDD)
- Preparada para pesquisa acadêmica futura
- Adaptável para sistema inteligente de recomendação

---

# 🏗️ Stack Tecnológica

- Framework: Next.js (App Router)
- UI: shadcn/ui
- Estilização: TailwindCSS
- Linguagem: TypeScript
- Banco de dados: PostgreSQL
- ORM: Prisma
- Autenticação: Auth.js
- Validação: Zod
- Formulários: React Hook Form

---

# 🧩 Arquitetura Geral (Camadas)
Presentation Layer (UI - shadcn)
↓
Application Layer (Use Cases)
↓
Domain Layer (Entities + Rules + Agents)
↓
Infrastructure Layer (DB, Auth, ORM)


---

# 📐 Arquitetura C4

## Nível 1 — System Context

**Usuários:**
- Estudante (User)
- Administrador (Admin)

**Interagem com:**
- Plataforma Web Science Study Roadmap

**Sistemas externos:**
- Auth Provider
- PostgreSQL
- (Futuro) Serviço de IA

---

## Nível 2 — Containers

- Browser (React UI)
- Aplicação Next.js
- Camada de Aplicação (Use Cases)
- Camada de Domínio (Entidades + Regras)
- Infraestrutura (Prisma + PostgreSQL)

---

## Nível 3 — Componentes

### UI
- RoadmapCard
- ModuleAccordion
- ProgressBar
- StudyPlanner
- AnalyticsCard
- Sidebar
- AppLayout

### Application
- GeneratePersonalizedRoadmapUseCase
- UpdateProgressUseCase
- GenerateWeeklyPlanUseCase
- RecalculateProgressUseCase

### Domain (Agents)
- CurriculumAgent
- InterdisciplinaryAgent
- StudyPlannerAgent

---

# 📁 Estrutura de Pastas
science-roadmap/
│
├── app/
│ ├── (public)/
│ ├── dashboard/
│ ├── api/
│
├── components/
│ ├── ui/
│ ├── layout/
│ ├── roadmap/
│ ├── planner/
│ ├── analytics/
│
├── domain/
│ ├── entities/
│ ├── services/
│
├── application/
│ ├── use-cases/
│
├── infrastructure/
│ ├── database/
│ ├── repositories/
│ ├── auth/
│
├── prisma/
│ ├── schema.prisma
│
└── AGENTS.md


---

# 🗄️ Modelo de Dados (Resumo)

## Entidades Principais

### User
- id
- name
- email
- role (USER | ADMIN)
- level
- goal
- weeklyStudyHours

### Roadmap
- id
- title
- description
- level
- isTemplate

### Trilha
- id
- name
- order
- roadmapId

### Modulo
- id
- title
- description
- order
- estimatedHours
- difficulty
- trilhaId

### ModuleDependency
- moduleId
- dependsOnId

### Progress
- userId
- moduloId
- completed
- percentage

### StudyPlan
- weekStart
- weekEnd

### StudySession
- moduloId
- scheduledAt
- duration
- completed

---

# 🤖 Sistema de Agentes

## 1️⃣ CurriculumAgent

Responsável por:
- Gerar roadmap personalizado
- Definir ordem pedagógica
- Adaptar dificuldade ao nível

Entrada:
- level
- goal
- weeklyStudyHours

Saída:
- Roadmap personalizado

---

## 2️⃣ InterdisciplinaryAgent

Responsável por:
- Mapear conexões entre módulos
- Criar dependências conceituais
- Sugerir revisões cruzadas

---

## 3️⃣ StudyPlannerAgent

Responsável por:
- Gerar cronograma semanal
- Distribuir carga horária
- Inserir revisões periódicas

---

# 🎨 Design System

## Princípios

- Clareza cognitiva
- Hierarquia forte
- Foco em progresso
- Estética científica
- Acessibilidade AA

---

## Design Tokens

### Cores

- Brand Primary: Azul científico
- Brand Secondary: Verde aprendizado
- Accent: Roxo interdisciplinar

Semânticas:
- Success
- Warning
- Danger
- Info

---

## Tipografia

- Fonte: Inter ou Geist
- Escala tipográfica estruturada
- Hierarquia clara de títulos

---

## Espaçamento

Sistema baseado em múltiplos de 8px.

---

# 🧱 Componentes Principais

## Layout
- AppLayout
- Sidebar
- Header

## Roadmap
- RoadmapCard
- ModuleAccordion
- InterdisciplinaryTag

## Progresso
- ProgressBar
- StatusBadge

## Planejamento
- StudyPlanner
- StudySessionCard

## Feedback
- Toast
- EmptyState
- Skeleton

---

# 🔐 Regras Técnicas

- Server Components por padrão
- Client Components apenas quando necessário
- UI sem lógica de negócio
- Use cases isolados
- Validação com Zod
- Nenhum acesso direto ao banco na UI

---

# 📊 Estados Padrão

Todos os componentes devem prever:

- Default
- Loading
- Empty
- Error
- Success

Estados educacionais:

- Concluído
- Em progresso
- Bloqueado
- Revisão pendente

---

# 🧠 Lógica de Progressão

Algoritmo base:

1. Validar pré-requisitos
2. Ordenação topológica das dependências
3. Calcular carga horária total
4. Distribuir módulos por semana
5. Inserir revisões estratégicas

---

# 📈 Métricas do Sistema

- Taxa de conclusão
- Tempo médio por módulo
- Consistência semanal
- Percentual de roadmap completo

---

# 🚀 Escalabilidade Futura

- Sistema adaptativo com IA
- Recomendação baseada em desempenho
- Visualização em grafo
- Gamificação
- Sistema de badges
- PWA / Mobile
- Internacionalização

---

# 🎓 Público-Alvo

- Estudantes do Ensino Médio
- Vestibulandos
- Universitários
- Autodidatas
- Educadores

---

# 🏛️ Objetivo Estratégico

Criar uma plataforma educacional:

- Cientificamente estruturada
- Tecnicamente robusta
- Escalável
- Preparada para evolução acadêmica
- Base para futura pesquisa em Educação Científica e Sistemas Adaptativos