export type Mode = 'detailed' | 'coarse';

export type PredictionResult = {
  prediction: string;
  risk_score: number;
};

// Detailed form data (13 features)
export type DetailedFormData = {
  age: number;
  sex: number;
  cp: number;
  trestbps: number;
  chol: number;
  fbs: number;
  restecg: number;
  thalach: number;
  exang: number;
  oldpeak: number;
  slope: number;
  ca: number;
  thal: number;
};

// Coarse form data (11 features - no oldpeak, slope, thal)
export type CoarseFormData = {
  age: number;
  sex_cat: string;
  cp_cat: string;
  trestbps_bin: string;
  chol_bin: string;
  fbs_cat: string;
  restecg_cat: string;
  thalach_bin: string;
  exang_cat: string;
  ca_bin: string;
  thal_cat: string;
};

// Form errors
export type FormErrors = {
  [key: string]: string;
};

// Coarse mode options
export const COARSE_OPTIONS = {
  sex_cat: ['หญิง', 'ชาย'] as const,
  cp_cat: ['เจ็บหน้าอกแบบทั่วไป', 'เจ็บหน้าอกแบบไม่คงที่', 'ปวดแน่น/ไม่ชัดเจน', 'ไม่เจ็บหน้าอก'] as const,
  trestbps_bin: ['<120', '120-139', '140-159', '&ge;160'] as const,
  chol_bin: ['<200', '200-239', '&ge;240'] as const,
  fbs_cat: ['ปกติ', 'สูง'] as const,
  restecg_cat: ['คลื่นหัวใจปกติ', 'ผิดปกติเล็กน้อย', 'ผิดปกติชัดเจน'] as const,
  thalach_bin: ['<120', '120-149', '150-179', '&ge;180'] as const,
  exang_cat: ['ไม่เจ็บหน้าอกตอนออกแรง', 'เจ็บหน้าอกตอนออกแรง'] as const,
  ca_bin: ['ไม่มีเส้นเลือดตีบ', 'มีอย่างน้อย 1 เส้น'] as const,
  thal_cat: ['รอยโรคคงที่', 'ปกติ', 'รอยโรคกลับได้'] as const,
} as const;
