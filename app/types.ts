export type Mode = 'detailed' | 'coarse';

export type PredictionResult = {
  prediction: string;
  risk_score: number;
};

// Detailed form data
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

// Coarse form data
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
  oldpeak_bin: string;
  slope_cat: string;
  ca_bin: string;
  thal_cat: string;
};

// Form errors
export type FormErrors = {
  [key: string]: string;
};
