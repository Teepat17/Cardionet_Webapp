'use client';
import { useState, useEffect } from 'react';

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

const questions = [
  {
    key: 'age' as keyof FormData,
    question: 'คุณอายุเท่าไร?',
    type: 'number',
    min: 1,
    max: 120,
    placeholder: 'กรอกอายุ (1-120 ปี)',
    hint: 'อายุเป็นปี'
  },
  {
    key: 'sex' as keyof FormData,
    question: 'คุณเป็นเพศอะไร?',
    type: 'select',
    options: [
      { value: 0, label: 'หญิง' },
      { value: 1, label: 'ชาย' }
    ]
  },
  {
    key: 'cp' as keyof FormData,
    question: 'คุณมีอาการเจ็บหน้าอกแบบไหน?',
    type: 'select',
    options: [
      { value: 0, label: 'Typical angina (เจ็บหน้าอกแบบทั่วไป)' },
      { value: 1, label: 'Atypical angina (เจ็บหน้าอกแบบไม่ทั่วไป)' },
      { value: 2, label: 'Non-anginal pain (เจ็บหน้าอกที่ไม่ใช่จากหัวใจ)' },
      { value: 3, label: 'ไม่มีอาการเจ็บหน้าอก' }
    ],
    info: 'Typical angina: เจ็บหน้าอกที่เกิดจากหัวใจขาดเลือด, Atypical angina: เจ็บหน้าอกที่ไม่ใช่จากหัวใจขาดเลือด, Non-anginal pain: เจ็บหน้าอกจากสาเหตุอื่น'
  },
  {
    key: 'trestbps' as keyof FormData,
    question: 'ความดันโลหิตขณะพักของคุณเท่าไร?',
    type: 'number',
    min: 80,
    max: 220,
    placeholder: 'กรอกความดันโลหิต (80-220 mmHg)',
    hint: 'mmHg (มิลลิเมตรปรอท)'
  },
  {
    key: 'chol' as keyof FormData,
    question: 'ระดับคอเลสเตอรอลในเลือดของคุณเท่าไร?',
    type: 'number',
    min: 100,
    max: 600,
    placeholder: 'กรอกระดับคอเลสเตอรอล (100-600 mg/dl)',
    hint: 'mg/dl (มิลลิกรัมต่อเดซิลิตร)'
  },
  {
    key: 'fbs' as keyof FormData,
    question: 'น้ำตาลในเลือดขณะอดอาหารของคุณมากกว่า 120 mg/dl หรือไม่?',
    type: 'select',
    options: [
      { value: 0, label: 'ไม่ (≤120 mg/dl)' },
      { value: 1, label: 'ใช่ (>120 mg/dl)' }
    ]
  },
  {
    key: 'restecg' as keyof FormData,
    question: 'ผลตรวจหัวใจของคุณ (ตอนพัก) เป็นแบบไหน?',
    type: 'select',
    options: [
      { value: 0, label: 'หัวใจเต้นปกติ' },
      { value: 1, label: 'หัวใจมีการเต้นผิดจังหวะเล็กน้อย (คลื่นไฟฟ้าบางส่วนผิดปกติ)' },
      { value: 2, label: 'หัวใจห้องล่างซ้ายโต (ผนังหัวใจหนาขึ้น)' }
    ],
    info: 'ST-T wave abnormality: การเปลี่ยนแปลงของคลื่น ST หรือ T ที่อาจบ่งชี้ถึงปัญหาหัวใจ, Left ventricular hypertrophy: หัวใจห้องล่างซ้ายโตขึ้นจากการทำงานหนัก'
  },
  {
    key: 'thalach' as keyof FormData,
    question: 'อัตราการเต้นของหัวใจสูงสุดที่คุณทำได้เท่าไร?',
    type: 'number',
    min: 60,
    max: 220,
    placeholder: 'กรอกอัตราการเต้นของหัวใจสูงสุด (60-220)',
    hint: 'beats per minute (ครั้งต่อนาที)'
  },
  {
    key: 'exang' as keyof FormData,
    question: 'คุณมีอาการเจ็บหน้าอกขณะออกกำลังกายหรือไม่?',
    type: 'select',
    options: [
      { value: 0, label: 'ไม่' },
      { value: 1, label: 'ใช่' }
    ]
  },
  {
    key: 'oldpeak' as keyof FormData,
    question: 'หลังออกแรง/ออกกำลังกาย คลื่นหัวใจของคุณลดลงกี่มิลลิเมตร?',
    type: 'number',
    min: 0,
    max: 6,
    step: 0.1,
    placeholder: 'กรอกค่า ST depression (0.0-6.0 mm)',
    hint: 'mm (มิลลิเมตร)',
    info: 'ST depression: การลดลงของคลื่น ST ในคลื่นไฟฟ้าหัวใจที่อาจบ่งชี้ถึงการขาดเลือดไปเลี้ยงกล้ามเนื้อหัวใจ'
  },
  {
    key: 'slope' as keyof FormData,
    question: 'ความชันของคลื่น ST ขณะออกกำลังกายสูงสุดของคุณเป็นอย่างไร?',
    type: 'select',
    options: [
      { value: 0, label: 'Upsloping (ชันขึ้น)' },
      { value: 1, label: 'Flat (ราบ)' },
      { value: 2, label: 'Downsloping (ชันลง)' }
    ],
    info: 'ความชันของคลื่น ST: บ่งชี้ถึงการตอบสนองของหัวใจต่อการออกกำลังกาย, Downsloping อาจบ่งชี้ถึงปัญหาหัวใจ'
  },
  {
    key: 'ca' as keyof FormData,
    question: 'ตอนหมอฉีดสีตรวจหัวใจ พบว่ามีหลอดเลือดหัวใจใหญ่กี่เส้นที่ตีบ?',
    type: 'select',
    options: [
      { value: 0, label: 'ไม่มีหลอดเลือดใหญ่ตีบ' },
      { value: 1, label: 'มีหลอดเลือดใหญ่ตีบ 1 เส้น' },
      { value: 2, label: 'มีหลอดเลือดใหญ่ตีบ 2 เส้น' },
      { value: 3, label: 'มีหลอดเลือดใหญ่ตีบ 3 เส้น' },
      { value: 4, label: 'มีหลอดเลือดใหญ่ตีบ 4 เส้น' }
    ],
    info: 'หลอดเลือดหลัก: หลอดเลือดโคโรนารีที่เลี้ยงกล้ามเนื้อหัวใจ, การฉีดสีช่วยให้เห็นการตีบตันของหลอดเลือด, จำนวนหลอดเลือดที่ตีบตันบ่งชี้ความรุนแรงของโรค'
  },
  {
    key: 'thal' as keyof FormData,
    question: 'คุณมีภาวะธาลัสซีเมียแบบไหน?',
    type: 'select',
    options: [
      { value: 1, label: 'Fixed defect (ข้อบกพร่องถาวร)' },
      { value: 2, label: 'ปกติ' },
      { value: 3, label: 'Reversible defect (ข้อบกพร่องที่กลับได้)' }
    ],
    info: 'Fixed defect: พื้นที่ที่ไม่มีเลือดไปเลี้ยงอย่างถาวร, Reversible defect: พื้นที่ที่ขาดเลือดชั่วคราวซึ่งอาจกลับมาเป็นปกติได้'
  }
];

export default function Home() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ prediction: number; risk_score: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // Animate form appearance
    const timer = setTimeout(() => setShowForm(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    const numValue = typeof value === 'string' ? 
      (field === 'oldpeak' ? parseFloat(value) : parseInt(value)) : value;
    
    if (typeof numValue === 'number' && isNaN(numValue)) {
      setValidationErrors(prev => ({ ...prev, [field]: 'Please enter a valid number' }));
      return;
    }

    setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    setFormData(prev => ({ ...prev, [field]: numValue }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetToExample = () => {
    setFormData(initialFormData);
    setValidationErrors({});
    setResult(null);
    setError(null);
    setCurrentQuestion(0);
  };

  const handleSubmit = async () => {
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

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <div className={`transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl font-bold text-white mb-2 text-center">
            การประเมินความเสี่ยงโรคหัวใจ
          </h1>
          <p className="text-blue-200 text-center mb-8">
            ตอบคำถามไม่กี่ข้อเพื่อประเมินความเสี่ยงโรคหัวใจของคุณ
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>คำถามที่ {currentQuestion + 1} จาก {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {currentQ.question}
                </h2>
                {currentQ.info && (
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-blue-300 hover:text-blue-200 text-sm underline transition-colors duration-200"
                  >
                    {showInfo ? 'ซ่อนข้อมูล' : 'ข้อมูลเพิ่มเติม'}
                  </button>
                )}
              </div>
              
              {showInfo && currentQ.info && (
                <div className="mb-4 p-4 bg-blue-900/30 border border-blue-700/50 rounded-lg text-blue-200 text-sm">
                  <strong>ข้อมูลเพิ่มเติม:</strong> {currentQ.info}
                </div>
              )}
              
              {currentQ.type === 'number' ? (
                <div>
                  <input
                    type="number"
                    step={currentQ.step || 1}
                    min={currentQ.min}
                    max={currentQ.max}
                    value={formData[currentQ.key]}
                    onChange={(e) => handleInputChange(currentQ.key, e.target.value)}
                    placeholder={currentQ.placeholder}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  {currentQ.hint && (
                    <p className="text-sm text-slate-400 mt-2">{currentQ.hint}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange(currentQ.key, option.value)}
                      className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                        formData[currentQ.key] === option.value
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                          : 'bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {validationErrors[currentQ.key] && (
                <p className="text-red-400 text-sm mt-2">{validationErrors[currentQ.key]}</p>
              )}
        </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                ก่อนหน้า
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
                >
                  ถัดไป
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-60 transition-all duration-200 shadow-lg"
                >
                  {loading ? 'กำลังวิเคราะห์...' : 'ดูผลการประเมิน'}
                </button>
              )}
            </div>
          </div>

          {/* Reset Button */}
          <div className="text-center mt-6">
            <button
              onClick={resetToExample}
              className="text-blue-300 hover:text-blue-200 text-sm underline transition-colors duration-200"
            >
              ตั้งค่าเริ่มต้นใหม่
            </button>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
              <strong>เกิดข้อผิดพลาด:</strong> {error}
            </div>
          )}

          {/* Result Popup */}
          {result && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-slate-800/95 border border-slate-700/50 rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">ผลการประเมิน</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-slate-300">ระดับความเสี่ยง:</span>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        result.prediction === 1 
                          ? 'bg-red-600/50 text-red-200 border border-red-500/50' 
                          : 'bg-green-600/50 text-green-200 border border-green-500/50'
                      }`}>
                        {result.prediction === 1 ? 'มีความเสี่ยง' : 'ไม่มีความเสี่ยง'}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-slate-300">คะแนนความเสี่ยง:</span>
                      <span className="text-white font-mono text-lg">
                        {(result.risk_score * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 italic">
                    ⚠️ เครื่องมือนี้ใช้เพื่อการศึกษาเท่านั้น ไม่ใช่การวินิจฉัยทางการแพทย์
                  </p>
                  <button
                    onClick={() => setResult(null)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
