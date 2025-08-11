'use client';

import { useState } from 'react';
import { Mode, PredictionResult, DetailedFormData, CoarseFormData } from './types';
import { DetailedForm } from './components/DetailedForm';
import { CoarseForm } from './components/CoarseForm';
import { DetailedSummary, CoarseSummary } from './components/Summary';

export default function Home() {
  // State management
  const [mode, setMode] = useState<Mode>('detailed');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  // Form data - separate state for each mode
  const [detailedData, setDetailedData] = useState<DetailedFormData>({
    age: 0, sex: 0, cp: 0, trestbps: 0, chol: 0, fbs: 0,
    restecg: 0, thalach: 0, exang: 0, oldpeak: 0, slope: 0, ca: 0, thal: 0
  });

  const [coarseData, setCoarseData] = useState<CoarseFormData>({
    age: 0, sex_cat: '', cp_cat: '', trestbps_bin: '', chol_bin: '', fbs_cat: '',
    restecg_cat: '', thalach_bin: '', exang_cat: '', ca_bin: '', thal_cat: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation functions
  const validateDetailedForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!detailedData.age || detailedData.age < 0 || detailedData.age > 120) {
      newErrors.age = 'กรุณากรอกอายุ (0-120 ปี)';
    }
    if (detailedData.trestbps < 0 || detailedData.trestbps > 300) {
      newErrors.trestbps = 'กรุณากรอกความดัน (0-300 mmHg)';
    }
    if (detailedData.chol < 0 || detailedData.chol > 600) {
      newErrors.chol = 'กรุณากรอกโคเลสเตอรอล (0-600 mg/dL)';
    }
    if (detailedData.thalach < 0 || detailedData.thalach > 300) {
      newErrors.thalach = 'กรุณากรอกชีพจรสูงสุด (0-300 bpm)';
    }
    if (detailedData.oldpeak < 0 || detailedData.oldpeak > 10) {
      newErrors.oldpeak = 'กรุณากรอกค่า ST depression (0-10)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCoarseForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!coarseData.age || coarseData.age < 0 || coarseData.age > 120) {
      newErrors.age = 'กรุณากรอกอายุ (0-120 ปี)';
    }
    
    const requiredFields = ['sex_cat', 'cp_cat', 'trestbps_bin', 'chol_bin', 'fbs_cat', 
                           'restecg_cat', 'thalach_bin', 'exang_cat', 'ca_bin', 'thal_cat'];
    
    requiredFields.forEach(field => {
      if (!coarseData[field as keyof CoarseFormData]) {
        newErrors[field] = 'กรุณาเลือกตัวเลือก';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const isValid = mode === 'detailed' ? validateDetailedForm() : validateCoarseForm();
      if (!isValid) {
        setIsLoading(false);
        return;
      }

      const payload = mode === 'detailed' 
        ? { mode: 'detailed', ...detailedData }
        : { mode: 'coarse', ...coarseData };

      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาดในการประเมิน');
      }

      setPrediction(data);
      setSuccess('ประเมินสำเร็จ');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดที่ไม่คาดคิด');
    } finally {
      setIsLoading(false);
    }
  };

  // Utility functions
  const clearForm = () => {
    setDetailedData({
      age: 0, sex: 0, cp: 0, trestbps: 0, chol: 0, fbs: 0,
      restecg: 0, thalach: 0, exang: 0, oldpeak: 0, slope: 0, ca: 0, thal: 0
    });
    setCoarseData({
      age: 0, sex_cat: '', cp_cat: '', trestbps_bin: '', chol_bin: '', fbs_cat: '',
      restecg_cat: '', thalach_bin: '', exang_cat: '', ca_bin: '', thal_cat: ''
    });
    setPrediction(null);
    setErrors({});
    setError('');
    setSuccess('');
  };

  const fillDemo = () => {
    if (mode === 'detailed') {
      setDetailedData(detailedDemoData);
    } else {
      setCoarseData(coarseDemoData);
    }
    setPrediction(null);
    setErrors({});
    setError('');
    setSuccess('');
  };

  // Demo data
  const detailedDemoData: DetailedFormData = {
    age: 55, sex: 1, cp: 2, trestbps: 130, chol: 250, fbs: 0,
    restecg: 0, thalach: 150, exang: 0, oldpeak: 1.0, slope: 1, ca: 0, thal: 2
  };

  const coarseDemoData: CoarseFormData = {
    age: 58, sex_cat: 'ชาย', cp_cat: 'เจ็บหน้าอกแบบไม่คงที่', trestbps_bin: '120-139', 
    chol_bin: '200-239', fbs_cat: 'ปกติ', restecg_cat: 'ผิดปกติเล็กน้อย', 
    thalach_bin: '150-179', exang_cat: 'ไม่เจ็บหน้าอกตอนออกแรง', 
    ca_bin: 'ไม่มีเส้นเลือดตีบ', thal_cat: 'ปกติ'
  };

  // Onboarding step
  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            การประเมินความเสี่ยงโรคหัวใจ
          </h1>
          
          <p className="text-lg text-center text-gray-600 mb-8">
            คุณมีข้อมูลทางการแพทย์แบบละเอียด (ตัวเลขจริง) หรือไม่?
          </p>

          <div className="space-y-4">
            <button
              onClick={() => {
                setMode('detailed');
                setShowOnboarding(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
            >
              มี (กรอกละเอียด)
            </button>
            
            <button
              onClick={() => {
                setMode('coarse');
                setShowOnboarding(false);
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
            >
              ไม่มี (กรอกแบบตัวเลือกง่าย)
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            คุณสามารถสลับโหมดได้ตลอดด้านบนขวา
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-800">
              CardioNet - การประเมินความเสี่ยงโรคหัวใจ
            </h1>
            
            <div className="flex items-center space-x-4">
              {/* Mode Switch */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setMode('coarse')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    mode === 'coarse' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  แบบหยาบ
                </button>
                <button
                  onClick={() => setMode('detailed')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    mode === 'detailed' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  แบบละเอียด
                </button>
              </div>

              {/* Action Buttons */}
              <button
                onClick={fillDemo}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                กรอกตัวอย่าง
              </button>
              
              <button
                onClick={clearForm}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                ล้างค่า
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              ข้อมูลผู้ป่วย ({mode === 'detailed' ? 'แบบละเอียด' : 'แบบหยาบ'})
            </h2>

            {mode === 'detailed' ? (
              <DetailedForm 
                data={detailedData}
                setData={setDetailedData}
                errors={errors}
              />
            ) : (
              <CoarseForm 
                data={coarseData}
                setData={setCoarseData}
                errors={errors}
              />
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    กำลังประเมิน...
                  </div>
                ) : (
                  'ประเมินความเสี่ยง'
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm">{success}</p>
              </div>
            )}
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              ผลการประเมิน
            </h2>

            {prediction ? (
              <div className="space-y-6">
                {/* Prediction */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {prediction.prediction}
                  </h3>
                  <p className="text-gray-600">
                    ความเสี่ยง: {(prediction.risk_score * 100).toFixed(1)}%
                  </p>
                </div>

                {/* Risk Score Bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>ความเสี่ยงต่ำ</span>
                    <span>ความเสี่ยงสูง</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-red-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${prediction.risk_score * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Input Summary */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">สรุปข้อมูลที่กรอก:</h4>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    {mode === 'detailed' ? (
                      <DetailedSummary data={detailedData} />
                    ) : (
                      <CoarseSummary data={coarseData} />
                    )}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    ⚠️ ผลนี้เป็นการประเมินเบื้องต้น กรุณาปรึกษาแพทย์เพื่อการวินิจฉัยที่ถูกต้อง
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <p>กรุณากรอกข้อมูลและกดประเมินเพื่อดูผลลัพธ์</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
