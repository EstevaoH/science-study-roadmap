export type Role = "USER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  level: string;
  goal: string;
  weeklyStudyHours: number;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  level: string;
  isTemplate: boolean;
}

export interface Trilha {
  id: string;
  name: string;
  order: number;
  roadmapId: string;
}

export interface Modulo {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedHours: number;
  difficulty: "Fácil" | "Médio" | "Difícil" | string;
  trilhaId: string;
  dependsOnIds?: string[]; // Simplified dependecy array
}

export interface Progress {
  userId: string;
  moduloId: string;
  completed: boolean;
  percentage: number;
}

export interface StudySession {
  id: string;
  moduloId: string;
  scheduledAt: string; // ISO string 
  duration: number; // in hours
  completed: boolean;
}

// ---------------------------
// MOCKS
// ---------------------------

export const CURRENT_USER: User = {
  id: "u1",
  name: "Estêvão",
  email: "estevao@example.com",
  role: "USER",
  level: "Intermediário",
  goal: "ENEM",
  weeklyStudyHours: 20,
};

export const MOCK_ROADMAPS: Roadmap[] = [
  {
    id: "r1",
    title: "Ciências da Natureza - ENEM",
    description: "Trilha completa abrangendo Física, Química e Biologia focada no ENEM.",
    level: "Intermediário",
    isTemplate: true,
  },
  {
    id: "r2",
    title: "Fundamentos Matemáticos",
    description: "Matemática básica essencial para compreender as ciências exatas.",
    level: "Básico",
    isTemplate: true,
  }
];

export const MOCK_TRILHAS: Trilha[] = [
  { id: "t1", name: "Física", order: 1, roadmapId: "r1" },
  { id: "t2", name: "Química", order: 2, roadmapId: "r1" },
  { id: "t3", name: "Biologia", order: 3, roadmapId: "r1" },
];

export const MOCK_MODULOS: Modulo[] = [
  // Física
  { id: "m1", title: "Cinemática", description: "Estudo do movimento sem considerar as causas.", order: 1, estimatedHours: 4, difficulty: "Médio", trilhaId: "t1" },
  { id: "m2", title: "Dinâmica", description: "Leis de Newton e causas do movimento.", order: 2, estimatedHours: 6, difficulty: "Difícil", trilhaId: "t1", dependsOnIds: ["m1"] },
  // Química
  { id: "m3", title: "Modelos Atômicos", description: "Evolução do modelo atômico e estrutura da matéria.", order: 1, estimatedHours: 3, difficulty: "Fácil", trilhaId: "t2" },
  { id: "m4", title: "Ligações Químicas", description: "Iônicas, covalentes e metálicas.", order: 2, estimatedHours: 5, difficulty: "Médio", trilhaId: "t2", dependsOnIds: ["m3"] },
  // Biologia
  { id: "m5", title: "Citologia", description: "Estudo da célula e suas organelas.", order: 1, estimatedHours: 5, difficulty: "Médio", trilhaId: "t3" },
  { id: "m6", title: "Genética Básica", description: "Leis de Mendel e hereditariedade.", order: 2, estimatedHours: 6, difficulty: "Difícil", trilhaId: "t3", dependsOnIds: ["m5"] },
];

export const MOCK_PROGRESS: Progress[] = [
  { userId: "u1", moduloId: "m1", completed: true, percentage: 100 },
  { userId: "u1", moduloId: "m2", completed: false, percentage: 40 },
  { userId: "u1", moduloId: "m3", completed: true, percentage: 100 },
  { userId: "u1", moduloId: "m4", completed: false, percentage: 10 },
  { userId: "u1", moduloId: "m5", completed: false, percentage: 80 },
  { userId: "u1", moduloId: "m6", completed: false, percentage: 0 },
];

export const MOCK_SESSIONS: StudySession[] = [
  { id: "s1", moduloId: "m2", scheduledAt: new Date(new Date().setHours(14,0,0,0)).toISOString(), duration: 2, completed: false },
  { id: "s2", moduloId: "m5", scheduledAt: new Date(new Date().setHours(16,0,0,0)).toISOString(), duration: 1, completed: false },
  { id: "s3", moduloId: "m4", scheduledAt: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(), duration: 1.5, completed: false },
];
