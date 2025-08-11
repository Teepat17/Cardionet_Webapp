import { DetailedFormData, CoarseFormData } from '../types';

interface DetailedSummaryProps {
  data: DetailedFormData;
}

export function DetailedSummary({ data }: DetailedSummaryProps) {
  const formatValue = (field: keyof DetailedFormData, value: number) => {
    switch (field) {
      case 'sex':
        return value === 0 ? 'หญิง' : 'ชาย';
      case 'cp':
        const cpLabels = ['เจ็บหน้าอกแบบทั่วไป', 'เจ็บหน้าอกแบบไม่คงที่', 'ปวดแน่น/ไม่ชัดเจน', 'ไม่เจ็บหน้าอก'];
        return cpLabels[value] || value;
      case 'fbs':
        return value === 0 ? 'ปกติ' : 'สูง';
      case 'restecg':
        const restecgLabels = ['คลื่นหัวใจปกติ', 'ผิดปกติเล็กน้อย', 'ผิดปกติชัดเจน'];
        return restecgLabels[value] || value;
      case 'exang':
        return value === 0 ? 'ไม่เจ็บหน้าอกตอนออกแรง' : 'เจ็บหน้าอกตอนออกแรง';
      case 'slope':
        const slopeLabels = ['ขึ้น', 'แบน', 'ลง'];
        return slopeLabels[value] || value;
      case 'thal':
        const thalLabels = ['', 'รอยโรคคงที่', 'ปกติ', 'รอยโรคกลับได้'];
        return thalLabels[value] || value;
      default:
        return value;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div><span className="font-medium">อายุ:</span> {data.age} ปี</div>
      <div><span className="font-medium">เพศ:</span> {formatValue('sex', data.sex)}</div>
      <div><span className="font-medium">เจ็บหน้าอก:</span> {formatValue('cp', data.cp)}</div>
      <div><span className="font-medium">ความดัน:</span> {data.trestbps} mmHg</div>
      <div><span className="font-medium">โคเลสเตอรอล:</span> {data.chol} mg/dL</div>
      <div><span className="font-medium">น้ำตาล:</span> {formatValue('fbs', data.fbs)}</div>
      <div><span className="font-medium">ECG:</span> {formatValue('restecg', data.restecg)}</div>
      <div><span className="font-medium">ชีพจรสูงสุด:</span> {data.thalach} bpm</div>
      <div><span className="font-medium">เจ็บหน้าอกออกแรง:</span> {formatValue('exang', data.exang)}</div>
      <div><span className="font-medium">ST Depression:</span> {data.oldpeak}</div>
      <div><span className="font-medium">ST Slope:</span> {formatValue('slope', data.slope)}</div>
      <div><span className="font-medium">เส้นเลือดตีบ:</span> {data.ca} เส้น</div>
      <div className="col-span-2"><span className="font-medium">Thalassemia:</span> {formatValue('thal', data.thal)}</div>
    </div>
  );
}

interface CoarseSummaryProps {
  data: CoarseFormData;
}

export function CoarseSummary({ data }: CoarseSummaryProps) {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div><span className="font-medium">อายุ:</span> {data.age} ปี</div>
      <div><span className="font-medium">เพศ:</span> {data.sex_cat}</div>
      <div><span className="font-medium">เจ็บหน้าอก:</span> {data.cp_cat}</div>
      <div><span className="font-medium">ความดัน:</span> {data.trestbps_bin}</div>
      <div><span className="font-medium">โคเลสเตอรอล:</span> {data.chol_bin}</div>
      <div><span className="font-medium">น้ำตาล:</span> {data.fbs_cat}</div>
      <div><span className="font-medium">ECG:</span> {data.restecg_cat}</div>
      <div><span className="font-medium">ชีพจรสูงสุด:</span> {data.thalach_bin}</div>
      <div><span className="font-medium">เจ็บหน้าอกออกแรง:</span> {data.exang_cat}</div>
      <div><span className="font-medium">เส้นเลือดตีบ:</span> {data.ca_bin}</div>
      <div className="col-span-2"><span className="font-medium">Thalassemia:</span> {data.thal_cat}</div>
    </div>
  );
}
