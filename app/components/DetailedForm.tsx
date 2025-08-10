import { DetailedFormData, FormErrors } from '../types';

interface DetailedFormProps {
  data: DetailedFormData;
  setData: (data: DetailedFormData) => void;
  errors: FormErrors;
}

export function DetailedForm({ data, setData, errors }: DetailedFormProps) {
  const updateField = (field: keyof DetailedFormData, value: number) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Age */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          อายุของคุณ (ปี) *
        </label>
        <input
          type="number"
          value={data.age || ''}
          onChange={(e) => updateField('age', parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 55"
        />
        {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Sex */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          เพศกำเนิดของคุณ *
        </label>
        <select
          value={data.sex}
          onChange={(e) => updateField('sex', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>หญิง</option>
          <option value={1}>ชาย</option>
        </select>
      </div>

      {/* Chest Pain Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          อาการเจ็บหน้าอกของคุณ *
        </label>
        <select
          value={data.cp}
          onChange={(e) => updateField('cp', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ทั่วไป</option>
          <option value={1}>ไม่คงที่</option>
          <option value={2}>ปวดแน่น/ไม่ชัดเจน</option>
          <option value={3}>ไม่เจ็บ</option>
        </select>
      </div>

      {/* Resting Blood Pressure */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ความดันช่วงบน (mmHg) ตอนพัก *
        </label>
        <input
          type="number"
          value={data.trestbps || ''}
          onChange={(e) => updateField('trestbps', parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 130"
        />
        {errors.trestbps && <p className="text-red-600 text-sm mt-1">{errors.trestbps}</p>}
      </div>

      {/* Cholesterol */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          โคเลสเตอรอลรวม (mg/dL) *
        </label>
        <input
          type="number"
          value={data.chol || ''}
          onChange={(e) => updateField('chol', parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 250"
        />
        {errors.chol && <p className="text-red-600 text-sm mt-1">{errors.chol}</p>}
      </div>

      {/* Fasting Blood Sugar */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          น้ำตาลในเลือดตอนอดอาหาร *
        </label>
        <select
          value={data.fbs}
          onChange={(e) => updateField('fbs', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ปกติ</option>
          <option value={1}>สูง</option>
        </select>
      </div>

      {/* Resting ECG */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ผลคลื่นหัวใจตอนพัก *
        </label>
        <select
          value={data.restecg}
          onChange={(e) => updateField('restecg', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ปกติ</option>
          <option value={1}>ผิดปกติเล็กน้อย</option>
          <option value={2}>ผิดปกติชัดเจน</option>
        </select>
      </div>

      {/* Max Heart Rate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ชีพจรสูงสุดที่วัดได้ (bpm) *
        </label>
        <input
          type="number"
          value={data.thalach || ''}
          onChange={(e) => updateField('thalach', parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 150"
        />
        {errors.thalach && <p className="text-red-600 text-sm mt-1">{errors.thalach}</p>}
      </div>

      {/* Exercise Angina */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          มีอาการเจ็บหน้าอกตอนออกแรงหรือไม่ *
        </label>
        <select
          value={data.exang}
          onChange={(e) => updateField('exang', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ไม่</option>
          <option value={1}>มี</option>
        </select>
      </div>

      {/* ST Depression */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ค่า ST depression หลังออกแรง *
        </label>
        <input
          type="number"
          step="0.1"
          value={data.oldpeak || ''}
          onChange={(e) => updateField('oldpeak', parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 1.2"
        />
        {errors.oldpeak && <p className="text-red-600 text-sm mt-1">{errors.oldpeak}</p>}
      </div>

      {/* ST Slope */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ลักษณะเส้น ST *
        </label>
        <select
          value={data.slope}
          onChange={(e) => updateField('slope', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ลาดลง</option>
          <option value={1}>แบน</option>
          <option value={2}>ลาดขึ้น</option>
        </select>
      </div>

      {/* Number of Major Vessels */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          จำนวนเส้นเลือดใหญ่ที่ตีบ (0-4) *
        </label>
        <select
          value={data.ca}
          onChange={(e) => updateField('ca', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>

      {/* Thal */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ผล thallium scan *
        </label>
        <select
          value={data.thal}
          onChange={(e) => updateField('thal', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={1}>คงที่</option>
          <option value={2}>ปกติ</option>
          <option value={3}>กลับได้</option>
        </select>
      </div>
    </div>
  );
}
