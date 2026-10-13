export interface LegalModule {
  title: string;
  subtitle: string;
  icon: string;
  tier: 'BASIC' | 'PREMIUM';
  fapte: number;
}

export const basicModules: LegalModule[] = [
  { title: 'Legea 61/1991', subtitle: 'Ordine & liniște publică', icon: 'shield', tier: 'BASIC', fapte: 40 },
  { title: 'Legea 60/1991', subtitle: 'Adunări publice & proteste', icon: 'users', tier: 'BASIC', fapte: 10 },
  { title: 'Legea 4/2008', subtitle: 'Violență în sport & arene', icon: 'ball', tier: 'BASIC', fapte: 40 },
  { title: 'OUG 55/2002', subtitle: 'Câini periculoși & agresivi', icon: 'paw', tier: 'BASIC', fapte: 10 },
  { title: 'Legea 349/2002', subtitle: 'Regimul tutunului & fumat', icon: 'smoke', tier: 'BASIC', fapte: 11 },
  { title: 'Legea 217/2003', subtitle: 'Violență domestică', icon: 'home', tier: 'BASIC', fapte: 8 },
  { title: 'Legea 54/2012', subtitle: 'Regimul picnicului & grătare', icon: 'tree', tier: 'BASIC', fapte: 18 },
  { title: 'OUG 97/2005', subtitle: 'Evidența persoanelor & acte', icon: 'id', tier: 'BASIC', fapte: 14 },
];

export const premiumModules: LegalModule[] = [
  { title: 'Sancțiuni rutiere', subtitle: 'Cod rutier • OUG 195/2002', icon: 'car', tier: 'PREMIUM', fapte: 60 },
  { title: 'Proceduri rutiere', subtitle: 'Cod rutier • măsuri operative', icon: 'route', tier: 'PREMIUM', fapte: 15 },
  { title: 'Codul Penal — Infracțiuni', subtitle: 'Partea specială • infracțiuni și pedepse', icon: 'gavel', tier: 'PREMIUM', fapte: 477 },
  { title: 'Codul Penal — Partea Generală', subtitle: 'Instituții & reguli de bază', icon: 'scale', tier: 'PREMIUM', fapte: 187 },
  { title: 'Procedură Penală — Operativ', subtitle: 'Măsuri procesuale, percheziții & flagrant', icon: 'file', tier: 'PREMIUM', fapte: 15 },
  { title: 'Domeniul Silvic', subtitle: 'Legea 171/2010 & Codul Silvic (L331/2024)', icon: 'forest', tier: 'PREMIUM', fapte: 129 },
  { title: 'Regimul Armelor', subtitle: 'Legea 295/2004 & HG 11/2018', icon: 'target', tier: 'PREMIUM', fapte: 62 },
  { title: 'OUG 34/2008', subtitle: 'Sistemul Național Unic 112', icon: 'phone', tier: 'PREMIUM', fapte: 6 },
  { title: 'Codul Aerian (L21/2020)', subtitle: 'Aviație civilă & drone (UAS)', icon: 'plane', tier: 'PREMIUM', fapte: 23 },
  { title: 'Legea 176/2024', subtitle: 'Pescuit & resurse acvatice vii', icon: 'fish', tier: 'PREMIUM', fapte: 67 },
  { title: 'Legea 407/2006', subtitle: 'Vânătoare & fond cinegetic', icon: 'deer', tier: 'PREMIUM', fapte: 37 },
  { title: 'Legea 365/2002', subtitle: 'Comerț electronic & plăți digitale', icon: 'cart', tier: 'PREMIUM', fapte: 8 },
  { title: 'Legea 333/2003', subtitle: 'Paza obiectivelor & sisteme de alarmă', icon: 'lock', tier: 'PREMIUM', fapte: 20 },
  { title: 'Legea 145/2014', subtitle: 'Piață agricolă & atestate producător', icon: 'wheat', tier: 'PREMIUM', fapte: 11 },
];

export const totalModules = basicModules.length + premiumModules.length;
export const totalFapte = [...basicModules, ...premiumModules].reduce((s, m) => s + m.fapte, 0);
export const totalBasicFapte = basicModules.reduce((s, m) => s + m.fapte, 0);
