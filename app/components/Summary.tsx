import { DetailedFormData, CoarseFormData } from '../types';

export function DetailedSummary({ data }: { data: DetailedFormData }) {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div><strong>อายุ:</strong> {data.age} ปี</div>
      <div><strong>เพศ:</strong> {data.sex === 0 ? 'หญิง' : 'ชาย'}</div>
      <div><strong>เจ็บหน้าอก:</strong> {['ทั่วไป', 'ไม่คงที่', 'ปวดแน่น', 'ไม่เจ็บ'][data.cp]}</div>
      <div><strong>ความดัน:</strong> {data.trestbps} mmHg</div>
      <div><strong>โคเลสเตอรอล:</strong> {data.chol} mg/dL</div>
      <div><strong>น้ำตาล:</strong> {data.fbs === 0 ? 'ปกติ' : 'สูง'}</div>
      <div><strong>คลื่นหัวใจ:</strong> {['ปกติ', 'ผิดปกติเล็กน้อย', 'ผิดปกติชัดเจน'][data.restecg]}</div>
      <div><strong>ชีพจรสูงสุด:</strong> {data.thalach} bpm</div>
      <div><strong>เจ็บตอนออกแรง:</strong> {data.exang === 0 ? 'ไม่' : 'มี'}</div>
      <div><strong>ST depression:</strong> {data.oldpeak}</div>
      <div><strong>ST slope:</strong> {['ลาดลง', 'แบน', 'ลาดขึ้น'][data.slope]}</div>
      <div><strong>เส้นเลือดตีบ:</strong> {data.ca} เส้น</div>
      <div><strong>Thal:</strong> {['', 'คงที่', 'ปกติ', 'กลับได้'][data.thal]}</div>
    </div>
  );
}

export function CoarseSummary({ data }: { data: CoarseFormData }) {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div><strong>อายุ:</strong> {data.age} ปี</div>
      <div><strong>เพศ:</strong> {data.sex_cat}</div>
      <div><strong>เจ็บหน้าอก:</strong> {data.cp_cat}</div>
      <div><strong>ความดัน:</strong> {data.trestbps_bin}</div>
      <div><strong>โคเลสเตอรอล:</strong> {data.chol_bin}</div>
      <div><strong>น้ำตาล:</strong> {data.fbs_cat}</div>
      <div><strong>คลื่นหัวใจ:</strong> {data.restecg_cat}</div>
      <div><strong>ชีพจรสูงสุด:</strong> {data.thalach_bin}</div>
      <div><strong>เจ็บตอนออกแรง:</strong> {data.exang_cat}</div>
      <div><strong>ST depression:</strong> {data.oldpeak_bin}</div>
      <div><strong>ST slope:</strong> {data.slope_cat}</div>
      <div><strong>เส้นเลือดตีบ:</strong> {data.ca_bin}</div>
      <div><strong>Thal:</strong> {data.thal_cat}</div>
    </div>
  );
}
