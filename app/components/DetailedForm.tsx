import { DetailedFormData } from '../types';

interface DetailedFormProps {
  data: DetailedFormData;
  setData: (data: DetailedFormData) => void;
  errors: { [key: string]: string };
}

export function DetailedForm({ data, setData, errors }: DetailedFormProps) {
  const updateField = (field: keyof DetailedFormData, value: string | number) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Age */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          อายุ (ปี) *
        </label>
        <input
          type="number"
          value={data.age || ''}
          onChange={(e) => updateField('age', parseInt(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 55"
          min="0"
          max="120"
        />
        <p className="text-sm text-gray-500 mt-1">อายุ 0-120 ปี</p>
        {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Sex */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          เพศ *
        </label>
        <select
          value={data.sex}
          onChange={(e) => updateField('sex', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>หญิง</option>
          <option value={1}>ชาย</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">เลือกเพศ</p>
      </div>

      {/* Chest Pain Type */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ประเภทเจ็บหน้าอก *
        </label>
        <select
          value={data.cp}
          onChange={(e) => updateField('cp', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>เจ็บหน้าอกแบบทั่วไป</option>
          <option value={1}>เจ็บหน้าอกแบบไม่คงที่</option>
          <option value={2}>ปวดแน่น/ไม่ชัดเจน</option>
          <option value={3}>ไม่เจ็บหน้าอก</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">ประเภทของอาการเจ็บหน้าอก</p>
      </div>

      {/* Resting Blood Pressure */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ความดันพัก (mmHg) *
        </label>
        <input
          type="number"
          value={data.trestbps || ''}
          onChange={(e) => updateField('trestbps', parseInt(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 130"
          min="0"
          max="300"
        />
        <p className="text-sm text-gray-500 mt-1">ความดันโลหิตขณะพัก 0-300 mmHg</p>
        {errors.trestbps && <p className="text-red-600 text-sm mt-1">{errors.trestbps}</p>}
      </div>

      {/* Cholesterol */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          โคเลสเตอรอล (mg/dL) *
        </label>
        <input
          type="number"
          value={data.chol || ''}
          onChange={(e) => updateField('chol', parseInt(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 250"
          min="0"
          max="600"
        />
        <p className="text-sm text-gray-500 mt-1">ระดับโคเลสเตอรอล 0-600 mg/dL</p>
        {errors.chol && <p className="text-red-600 text-sm mt-1">{errors.chol}</p>}
      </div>

      {/* Fasting Blood Sugar */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          น้ำตาลขณะอดอาหาร *
        </label>
        <select
          value={data.fbs}
          onChange={(e) => updateField('fbs', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ปกติ (&le;120 mg/dL)</option>
          <option value={1}>สูง (&gt;120 mg/dL)</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">ระดับน้ำตาลในเลือดขณะอดอาหาร</p>
      </div>

      {/* Resting ECG */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Resting ECG *
        </label>
        <select
          value={data.restecg}
          onChange={(e) => updateField('restecg', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>คลื่นหัวใจปกติ</option>
          <option value={1}>ผิดปกติเล็กน้อย</option>
          <option value={2}>ผิดปกติชัดเจน</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">ผลการตรวจคลื่นหัวใจขณะพัก</p>
      </div>

      {/* Max Heart Rate */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ชีพจรสูงสุด (bpm) *
        </label>
        <input
          type="number"
          value={data.thalach || ''}
          onChange={(e) => updateField('thalach', parseInt(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 150"
          min="0"
          max="300"
        />
        <p className="text-sm text-gray-500 mt-1">ชีพจรสูงสุดที่ได้จากการทดสอบ 0-300 bpm</p>
        {errors.thalach && <p className="text-red-600 text-sm mt-1">{errors.thalach}</p>}
      </div>

      {/* Exercise Angina */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          เจ็บหน้าอกจากออกแรง *
        </label>
        <select
          value={data.exang}
          onChange={(e) => updateField('exang', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ไม่เจ็บหน้าอกตอนออกแรง</option>
          <option value={1}>เจ็บหน้าอกตอนออกแรง</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">อาการเจ็บหน้าอกที่เกิดจากการออกแรง</p>
      </div>

      {/* ST Depression */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ST Depression (oldpeak) *
        </label>
        <input
          type="number"
          step="0.1"
          value={data.oldpeak || ''}
          onChange={(e) => updateField('oldpeak', parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="เช่น 1.0"
          min="0"
          max="10"
        />
        <p className="text-sm text-gray-500 mt-1">ST depression ที่เกิดจากการออกแรง 0-10</p>
        {errors.oldpeak && <p className="text-red-600 text-sm mt-1">{errors.oldpeak}</p>}
      </div>

      {/* ST Slope */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ST Slope *
        </label>
        <select
          value={data.slope}
          onChange={(e) => updateField('slope', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>ขึ้น</option>
          <option value={1}>แบน</option>
          <option value={2}>ลง</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">ความชันของ ST segment</p>
      </div>

      {/* Number of Vessels */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          จำนวนเส้นเลือดตีบ *
        </label>
        <select
          value={data.ca}
          onChange={(e) => updateField('ca', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={0}>0 เส้น</option>
          <option value={1}>1 เส้น</option>
          <option value={2}>2 เส้น</option>
          <option value={3}>3 เส้น</option>
          <option value={4}>4 เส้น</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">จำนวนเส้นเลือดที่ตีบจากการตรวจ</p>
      </div>

      {/* Thalassemia */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Thalassemia *
        </label>
        <select
          value={data.thal}
          onChange={(e) => updateField('thal', parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={1}>รอยโรคคงที่</option>
          <option value={2}>ปกติ</option>
          <option value={3}>รอยโรคกลับได้</option>
        </select>
        <p className="text-sm text-gray-500 mt-1">ประเภทของโรคเลือดจางธาลัสซีเมีย</p>
      </div>
    </div>
  );
}
