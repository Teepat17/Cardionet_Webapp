'use client';
import { useState } from 'react';

type FormData = {
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

type ValidationErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  age: 55,
  sex: 1,
  cp: 2,
  trestbps: 130,
  chol: 250,
  fbs: 0,
  restecg: 0,
  thalach: 150,
  exang: 0,
  oldpeak: 1.0,
  slope: 1,
  ca: 0,
  thal: 2
};

type FieldConfig = {
  label: string;
  min: number;
  max: number;
  step?: number;
  hint: string;
};

const fieldConfig: Record<string, FieldConfig> = {
  age: { label: 'Age', min: 1, max: 120, hint: 'Age in years' },
  sex: { label: 'Sex', min: 0, max: 1, hint: '0: Female, 1: Male' },
  cp: { label: 'Chest Pain Type', min: 0, max: 3, hint: 'Chest pain type (0-3)' },
  trestbps: { label: 'Resting Blood Pressure', min: 80, max: 220, hint: 'mm Hg' },
  chol: { label: 'Serum Cholesterol', min: 100, max: 600, hint: 'mg/dl' },
  fbs: { label: 'Fasting Blood Sugar', min: 0, max: 1, hint: '0: ≤120 mg/dl, 1: >120 mg/dl' },
  restecg: { label: 'Resting ECG', min: 0, max: 2, hint: 'Resting ECG results (0-2)' },
  thalach: { label: 'Max Heart Rate', min: 60, max: 220, hint: 'Maximum heart rate achieved' },
  exang: { label: 'Exercise Induced Angina', min: 0, max: 1, hint: '0: No, 1: Yes' },
  oldpeak: { label: 'ST Depression', min: 0, max: 6, step: 0.1, hint: 'ST depression induced by exercise' },
  slope: { label: 'ST Slope', min: 0, max: 2, hint: 'Slope of peak exercise ST segment' },
  ca: { label: 'Major Vessels', min: 0, max: 4, hint: 'Number of major vessels colored by fluoroscopy' },
  thal: { label: 'Thalassemia', min: 1, max: 3, hint: '1: Fixed defect, 2: Normal, 3: Reversible defect' }
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ prediction: number; risk_score: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateField = (field: keyof FormData, value: number): string | null => {
    const config = fieldConfig[field];
    if (value < config.min || value > config.max) {
      return `Must be between ${config.min} and ${config.max}`;
    }
    return null;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    const numValue = field === 'oldpeak' ? parseFloat(value) : parseInt(value);
    
    if (isNaN(numValue)) {
      setValidationErrors(prev => ({ ...prev, [field]: 'Please enter a valid number' }));
      return;
    }

    const error = validateField(field, numValue);
    setValidationErrors(prev => ({ ...prev, [field]: error || undefined }));

    setFormData(prev => ({ ...prev, [field]: numValue }));
  };

  const resetToExample = () => {
    setFormData(initialFormData);
    setValidationErrors({});
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    // Check for validation errors
    const errors: ValidationErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field as keyof FormData, formData[field as keyof FormData]);
      if (error) {
        errors[field as keyof FormData] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get prediction');
      }

      setResult(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while processing your request';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Heart Disease Risk Assessment</h1>
      <p className="mb-4 text-sm text-gray-600">
        Enter patient information below to assess heart disease risk
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(fieldConfig).map(([field, config]) => (
          <label key={field} className="grid gap-1 text-sm">
            <span className="font-medium">{config.label}</span>
            <input
              type="number"
              step={config.step || 1}
              min={config.min}
              max={config.max}
              value={formData[field as keyof FormData]}
              onChange={(e) => handleInputChange(field as keyof FormData, e.target.value)}
              className={`px-3 py-2 border rounded-md ${
                validationErrors[field as keyof FormData] 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300'
              }`}
              title={config.hint}
            />
            {validationErrors[field as keyof FormData] && (
              <span className="text-red-600 text-xs">
                {validationErrors[field as keyof FormData]}
              </span>
            )}
            <span className="text-xs text-gray-500">{config.hint}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-60 hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Predicting...' : 'Predict Risk'}
        </button>
        <button
          onClick={resetToExample}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Reset to Example
        </button>
      </div>

      {error && (
        <div className="mt-3 p-3 border border-red-300 bg-red-50 text-red-700 rounded-md">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="mt-4 p-3 border rounded-md bg-green-50 border-green-200">
          <div className="font-medium mb-2">Prediction Results:</div>
          <div className="mb-1">
            <strong>Risk Assessment:</strong> {result.prediction === 1 ? 'At Risk' : 'Not at Risk'}
          </div>
          <div className="mb-2">
            <strong>Risk Score:</strong> {result.risk_score.toFixed(3)}
          </div>
          <p className="text-xs text-gray-600 mt-2">
            This tool is for educational purposes and not a medical diagnosis.
          </p>
        </div>
      )}
    </main>
  );
}
