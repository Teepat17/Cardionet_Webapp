import { CoarseFormData, COARSE_OPTIONS } from '../types';

interface CoarseFormProps {
  data: CoarseFormData;
  setData: (data: CoarseFormData) => void;
  errors: { [key: string]: string };
}

export function CoarseForm({ data, setData, errors }: CoarseFormProps) {
  const updateField = (field: keyof CoarseFormData, value: string | number) => {
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
          placeholder="เช่น 58"
          min="0"
          max="120"
        />
        <p className="text-sm text-gray-500 mt-1">อายุ 0-120 ปี (backend จะจัดกลุ่มให้อัตโนมัติ)</p>
        {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Sex */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          เพศ *
        </label>
        <select
          value={data.sex_cat}
          onChange={(e) => updateField('sex_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกเพศ</option>
          {COARSE_OPTIONS.sex_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">เลือกเพศ</p>
        {errors.sex_cat && <p className="text-red-600 text-sm mt-1">{errors.sex_cat}</p>}
      </div>

      {/* Chest Pain Type */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ประเภทเจ็บหน้าอก *
        </label>
        <select
          value={data.cp_cat}
          onChange={(e) => updateField('cp_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกประเภทเจ็บหน้าอก</option>
          {COARSE_OPTIONS.cp_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ประเภทของอาการเจ็บหน้าอก</p>
        {errors.cp_cat && <p className="text-red-600 text-sm mt-1">{errors.cp_cat}</p>}
      </div>

      {/* Resting Blood Pressure */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ความดันพัก *
        </label>
        <select
          value={data.trestbps_bin}
          onChange={(e) => updateField('trestbps_bin', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงความดัน</option>
          {COARSE_OPTIONS.trestbps_bin.map((option) => (
            <option key={option} value={option}>{option} mmHg</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ช่วงความดันโลหิตขณะพัก</p>
        {errors.trestbps_bin && <p className="text-red-600 text-sm mt-1">{errors.trestbps_bin}</p>}
      </div>

      {/* Cholesterol */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          โคเลสเตอรอล *
        </label>
        <select
          value={data.chol_bin}
          onChange={(e) => updateField('chol_bin', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงโคเลสเตอรอล</option>
          {COARSE_OPTIONS.chol_bin.map((option) => (
            <option key={option} value={option}>{option} mg/dL</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ช่วงระดับโคเลสเตอรอล</p>
        {errors.chol_bin && <p className="text-red-600 text-sm mt-1">{errors.chol_bin}</p>}
      </div>

      {/* Fasting Blood Sugar */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          น้ำตาลขณะอดอาหาร *
        </label>
        <select
          value={data.fbs_cat}
          onChange={(e) => updateField('fbs_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกระดับน้ำตาล</option>
          {COARSE_OPTIONS.fbs_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ระดับน้ำตาลในเลือดขณะอดอาหาร</p>
        {errors.fbs_cat && <p className="text-red-600 text-sm mt-1">{errors.fbs_cat}</p>}
      </div>

      {/* Resting ECG */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Resting ECG *
        </label>
        <select
          value={data.restecg_cat}
          onChange={(e) => updateField('restecg_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกผลคลื่นหัวใจ</option>
          {COARSE_OPTIONS.restecg_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ผลการตรวจคลื่นหัวใจขณะพัก</p>
        {errors.restecg_cat && <p className="text-red-600 text-sm mt-1">{errors.restecg_cat}</p>}
      </div>

      {/* Max Heart Rate */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ชีพจรสูงสุด *
        </label>
        <select
          value={data.thalach_bin}
          onChange={(e) => updateField('thalach_bin', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงชีพจร</option>
          {COARSE_OPTIONS.thalach_bin.map((option) => (
            <option key={option} value={option}>{option} bpm</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ช่วงชีพจรสูงสุดที่ได้จากการทดสอบ</p>
        {errors.thalach_bin && <p className="text-red-600 text-sm mt-1">{errors.thalach_bin}</p>}
      </div>

      {/* Exercise Angina */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          เจ็บหน้าอกจากออกแรง *
        </label>
        <select
          value={data.exang_cat}
          onChange={(e) => updateField('exang_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกอาการเจ็บหน้าอก</option>
          {COARSE_OPTIONS.exang_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">อาการเจ็บหน้าอกที่เกิดจากการออกแรง</p>
        {errors.exang_cat && <p className="text-red-600 text-sm mt-1">{errors.exang_cat}</p>}
      </div>

      {/* Number of Vessels */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          จำนวนเส้นเลือดตีบ *
        </label>
        <select
          value={data.ca_bin}
          onChange={(e) => updateField('ca_bin', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกจำนวนเส้นเลือด</option>
          {COARSE_OPTIONS.ca_bin.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">จำนวนเส้นเลือดที่ตีบจากการตรวจ</p>
        {errors.ca_bin && <p className="text-red-600 text-sm mt-1">{errors.ca_bin}</p>}
      </div>

      {/* Thalassemia */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Thalassemia *
        </label>
        <select
          value={data.thal_cat}
          onChange={(e) => updateField('thal_cat', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกประเภทโรคเลือด</option>
          {COARSE_OPTIONS.thal_cat.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm text-gray-500 mt-1">ประเภทของโรคเลือดจางธาลัสซีเมีย</p>
        {errors.thal_cat && <p className="text-red-600 text-sm mt-1">{errors.thal_cat}</p>}
      </div>
    </div>
  );
}
