import { CoarseFormData, FormErrors } from '../types';

interface CoarseFormProps {
  data: CoarseFormData;
  setData: (data: CoarseFormData) => void;
  errors: FormErrors;
}

export function CoarseForm({ data, setData, errors }: CoarseFormProps) {
  const updateField = (field: keyof CoarseFormData, value: string | number) => {
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
          placeholder="เช่น 58"
        />
        {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Sex */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          เพศกำเนิดของคุณ *
        </label>
        <select
          value={data.sex_cat}
          onChange={(e) => updateField('sex_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกเพศ</option>
          <option value="หญิง">หญิง</option>
          <option value="ชาย">ชาย</option>
        </select>
        {errors.sex_cat && <p className="text-red-600 text-sm mt-1">{errors.sex_cat}</p>}
      </div>

      {/* Chest Pain Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          อาการเจ็บหน้าอกของคุณ *
        </label>
        <select
          value={data.cp_cat}
          onChange={(e) => updateField('cp_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกอาการ</option>
          <option value="เจ็บหน้าอกแบบทั่วไป">เจ็บหน้าอกแบบทั่วไป</option>
          <option value="เจ็บหน้าอกแบบไม่คงที่">เจ็บหน้าอกแบบไม่คงที่</option>
          <option value="ปวดแน่น/ไม่ชัดเจน">ปวดแน่น/ไม่ชัดเจน</option>
          <option value="ไม่เจ็บหน้าอก">ไม่เจ็บหน้าอก</option>
        </select>
        {errors.cp_cat && <p className="text-red-600 text-sm mt-1">{errors.cp_cat}</p>}
      </div>

      {/* Blood Pressure */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ความดันช่วงบน (mmHg) *
        </label>
        <select
          value={data.trestbps_bin}
          onChange={(e) => updateField('trestbps_bin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงความดัน</option>
          <option value="<120">น้อยกว่า 120</option>
          <option value="120-139">120-139</option>
          <option value="140-159">140-159</option>
          <option value="≥160">160 ขึ้นไป</option>
        </select>
        {errors.trestbps_bin && <p className="text-red-600 text-sm mt-1">{errors.trestbps_bin}</p>}
      </div>

      {/* Cholesterol */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          โคเลสเตอรอลรวม (mg/dL) *
        </label>
        <select
          value={data.chol_bin}
          onChange={(e) => updateField('chol_bin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงโคเลสเตอรอล</option>
          <option value="<200">น้อยกว่า 200</option>
          <option value="200-239">200-239</option>
          <option value="≥240">240 ขึ้นไป</option>
        </select>
        {errors.chol_bin && <p className="text-red-600 text-sm mt-1">{errors.chol_bin}</p>}
      </div>

      {/* Fasting Blood Sugar */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          น้ำตาลในเลือดตอนอดอาหาร *
        </label>
        <select
          value={data.fbs_cat}
          onChange={(e) => updateField('fbs_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกระดับน้ำตาล</option>
          <option value="ปกติ">ปกติ</option>
          <option value="สูง">สูง</option>
        </select>
        {errors.fbs_cat && <p className="text-red-600 text-sm mt-1">{errors.fbs_cat}</p>}
      </div>

      {/* Resting ECG */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ผลคลื่นหัวใจตอนพัก *
        </label>
        <select
          value={data.restecg_cat}
          onChange={(e) => updateField('restecg_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกผลคลื่นหัวใจ</option>
          <option value="คลื่นหัวใจปกติ">คลื่นหัวใจปกติ</option>
          <option value="ผิดปกติเล็กน้อย">ผิดปกติเล็กน้อย</option>
          <option value="ผิดปกติชัดเจน">ผิดปกติชัดเจน</option>
        </select>
        {errors.restecg_cat && <p className="text-red-600 text-sm mt-1">{errors.restecg_cat}</p>}
      </div>

      {/* Max Heart Rate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ชีพจรสูงสุด (bpm) *
        </label>
        <select
          value={data.thalach_bin}
          onChange={(e) => updateField('thalach_bin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกช่วงชีพจร</option>
          <option value="<120">น้อยกว่า 120</option>
          <option value="120-149">120-149</option>
          <option value="150-179">150-179</option>
          <option value="≥180">180 ขึ้นไป</option>
        </select>
        {errors.thalach_bin && <p className="text-red-600 text-sm mt-1">{errors.thalach_bin}</p>}
      </div>

      {/* Exercise Angina */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          อาการเจ็บหน้าอกตอนออกแรง *
        </label>
        <select
          value={data.exang_cat}
          onChange={(e) => updateField('exang_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกอาการ</option>
          <option value="ไม่เจ็บหน้าอกตอนออกแรง">ไม่เจ็บหน้าอกตอนออกแรง</option>
          <option value="เจ็บหน้าอกตอนออกแรง">เจ็บหน้าอกตอนออกแรง</option>
        </select>
        {errors.exang_cat && <p className="text-red-600 text-sm mt-1">{errors.exang_cat}</p>}
      </div>

      {/* ST Depression */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ค่า ST depression หลังออกแรง *
        </label>
        <select
          value={data.oldpeak_bin}
          onChange={(e) => updateField('oldpeak_bin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกค่า ST depression</option>
          <option value="0">0</option>
          <option value="0.1-1.9">0.1-1.9</option>
          <option value="2.0-3.9">2.0-3.9</option>
          <option value="≥4.0">4.0 ขึ้นไป</option>
        </select>
        {errors.oldpeak_bin && <p className="text-red-600 text-sm mt-1">{errors.oldpeak_bin}</p>}
      </div>

      {/* ST Slope */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ลักษณะเส้น ST *
        </label>
        <select
          value={data.slope_cat}
          onChange={(e) => updateField('slope_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกลักษณะเส้น ST</option>
          <option value="ลาดลง">ลาดลง</option>
          <option value="แบน">แบน</option>
          <option value="ลาดขึ้น">ลาดขึ้น</option>
        </select>
        {errors.slope_cat && <p className="text-red-600 text-sm mt-1">{errors.slope_cat}</p>}
      </div>

      {/* Number of Major Vessels */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          จำนวนเส้นเลือดใหญ่ที่ตีบ *
        </label>
        <select
          value={data.ca_bin}
          onChange={(e) => updateField('ca_bin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกจำนวนเส้นเลือด</option>
          <option value="ไม่มีเส้นเลือดตีบ">ไม่มีเส้นเลือดตีบ</option>
          <option value="มีอย่างน้อย 1 เส้น">มีอย่างน้อย 1 เส้น</option>
        </select>
        {errors.ca_bin && <p className="text-red-600 text-sm mt-1">{errors.ca_bin}</p>}
      </div>

      {/* Thal */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ผล thallium scan *
        </label>
        <select
          value={data.thal_cat}
          onChange={(e) => updateField('thal_cat', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">เลือกผล thallium scan</option>
          <option value="รอยโรคคงที่">รอยโรคคงที่</option>
          <option value="ปกติ">ปกติ</option>
          <option value="รอยโรคกลับได้">รอยโรคกลับได้</option>
        </select>
        {errors.thal_cat && <p className="text-red-600 text-sm mt-1">{errors.thal_cat}</p>}
      </div>
    </div>
  );
}
