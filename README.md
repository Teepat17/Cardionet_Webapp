# CardioNet - การประเมินความเสี่ยงโรคหัวใจ

แอปพลิเคชันประเมินความเสี่ยงโรคหัวใจด้วยปัญญาประดิษฐ์ พัฒนาด้วย Next.js, TypeScript และ Tailwind CSS

## คุณสมบัติ

- **สองโหมดการกรอกข้อมูล:**
  - **แบบละเอียด:** กรอกข้อมูลตัวเลขจริง (อายุ, ความดัน, โคเลสเตอรอล, etc.)
  - **แบบหยาบ:** เลือกจากตัวเลือกที่กำหนดไว้ (เหมาะสำหรับผู้ที่ไม่มีข้อมูลตัวเลข)

- **UI/UX ที่เป็นมิตรกับผู้สูงอายุ:**
  - ตัวหนังสือใหญ่ อ่านง่าย
  - ปุ่มใหญ่ กดง่าย
  - สี contrast สูง
  - การจัดวางแบบ Card layout

- **ฟีเจอร์เสริม:**
  - สวิตช์สลับโหมดได้ตลอด
  - ปุ่มกรอกตัวอย่างข้อมูล
  - ปุ่มล้างค่า
  - แสดงผลลัพธ์แบบ real-time
  - Progress bar แสดงความเสี่ยง

## การติดตั้ง

1. Clone repository:
```bash
git clone <repository-url>
cd cardio-frontend
```

2. ติดตั้ง dependencies:
```bash
npm install
```

3. สร้างไฟล์ `.env.local` และตั้งค่า backend URL:
```bash
cp env.example .env.local
# แก้ไข BACKEND_URL ใน .env.local ให้ชี้ไปที่ backend server
```

4. รัน development server:
```bash
npm run dev
```

5. เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## การใช้งาน

### ขั้นตอนที่ 1: เลือกโหมด
- หน้าแรกจะถามว่าคุณมีข้อมูลแบบละเอียดหรือไม่
- เลือก "มี (กรอกละเอียด)" หรือ "ไม่มี (กรอกแบบตัวเลือกง่าย)"

### ขั้นตอนที่ 2: กรอกข้อมูล
- กรอกข้อมูลตามที่ระบบถาม
- ข้อมูลที่จำเป็นจะแสดงเครื่องหมาย *
- ระบบจะตรวจสอบความถูกต้องของข้อมูล

### ขั้นตอนที่ 3: ดูผลลัพธ์
- กดปุ่ม "ประเมินความเสี่ยง"
- ระบบจะแสดงผลการประเมินและความเสี่ยงเป็นเปอร์เซ็นต์
- มี progress bar แสดงระดับความเสี่ยง

## โครงสร้างโปรเจกต์

```
cardio-frontend/
├── app/
│   ├── components/
│   │   ├── DetailedForm.tsx    # ฟอร์มแบบละเอียด
│   │   ├── CoarseForm.tsx      # ฟอร์มแบบหยาบ
│   │   └── Summary.tsx         # แสดงสรุปข้อมูล
│   ├── api/
│   │   └── predict/
│   │       └── route.ts        # API proxy
│   ├── types.ts                # Type definitions
│   ├── page.tsx                # หน้าหลัก
│   ├── layout.tsx              # Layout หลัก
│   └── globals.css             # Global styles
├── public/                     # Static files
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

### POST /api/predict
ส่งข้อมูลเพื่อประเมินความเสี่ยงโรคหัวใจ

**Request Body (Detailed Mode):**
```json
{
  "mode": "detailed",
  "age": 55,
  "sex": 1,
  "cp": 2,
  "trestbps": 130,
  "chol": 250,
  "fbs": 0,
  "restecg": 0,
  "thalach": 150,
  "exang": 0,
  "oldpeak": 1.0,
  "slope": 1,
  "ca": 0,
  "thal": 2
}
```

**Request Body (Coarse Mode):**
```json
{
  "mode": "coarse",
  "age": 58,
  "sex_cat": "ชาย",
  "cp_cat": "เจ็บหน้าอกแบบไม่คงที่",
  "trestbps_bin": "120-139",
  "chol_bin": "200-239",
  "fbs_cat": "ปกติ",
  "restecg_cat": "ผิดปกติเล็กน้อย",
  "thalach_bin": "150-179",
  "exang_cat": "ไม่เจ็บหน้าอกตอนออกแรง",
  "oldpeak_bin": "0.1-1.9",
  "slope_cat": "แบน",
  "ca_bin": "ไม่มีเส้นเลือดตีบ",
  "thal_cat": "ปกติ"
}
```

**Response:**
```json
{
  "prediction": "เสี่ยงเป็นโรคหัวใจ",
  "risk_score": 0.75
}
```

## การพัฒนา

### Scripts ที่มี
- `npm run dev` - รัน development server
- `npm run build` - build สำหรับ production
- `npm run start` - รัน production server
- `npm run lint` - ตรวจสอบ code quality

### เทคโนโลยีที่ใช้
- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Backend:** FastAPI (แยกโปรเจกต์)

## การ Deploy

1. Build โปรเจกต์:
```bash
npm run build
```

2. รัน production server:
```bash
npm run start
```

หรือ deploy บน Vercel:
```bash
npm install -g vercel
vercel
```

## หมายเหตุ

- ผลการประเมินเป็นการประเมินเบื้องต้นเท่านั้น
- กรุณาปรึกษาแพทย์เพื่อการวินิจฉัยที่ถูกต้อง
- ระบบต้องการ backend server ที่รัน FastAPI เพื่อทำงานได้สมบูรณ์

## License

MIT License 
